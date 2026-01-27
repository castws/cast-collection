<?php

namespace Tests\Feature;

use App\Models\CastType;
use App\Models\Gender;
use App\Models\Image;
use App\Models\ImageType;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ImageControllerTest extends TestCase
{
    use RefreshDatabase;

    // ==========================================
    // Gallery (Index) Tests
    // ==========================================

    public function test_guests_are_redirected_to_login(): void
    {
        $this->get(route('images'))
            ->assertRedirect(route('login'));
    }

    public function test_authenticated_users_can_view_gallery(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get(route('images'))
            ->assertOk();
    }

    public function test_gallery_displays_paginated_images(): void
    {
        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();

        // Create 15 images (more than the 12 per page)
        Image::factory(15)
            ->for($user)
            ->for($imageType)
            ->create();

        $response = $this->actingAs($user)
            ->get(route('images'));

        $response->assertOk();

        // Check that pagination returns 12 images on first page
        $images = $response->original->getData()['page']['props']['images'];
        $this->assertCount(12, $images['data']);
        $this->assertEquals(15, $images['total']);
        $this->assertEquals(2, $images['last_page']);
    }

    public function test_gallery_shows_empty_state_when_no_images(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get(route('images'));

        $response->assertOk();

        $images = $response->original->getData()['page']['props']['images'];
        $this->assertCount(0, $images['data']);
    }

    public function test_gallery_loads_image_relationships(): void
    {
        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        $image = Image::factory()
            ->for($user)
            ->for($imageType)
            ->create();

        $image->castTypes()->attach($castType);
        $image->genders()->attach($gender);

        $response = $this->actingAs($user)
            ->get(route('images'));

        $response->assertOk();

        $images = $response->original->getData()['page']['props']['images'];
        $imageData = $images['data'][0];

        // Check relationships are loaded
        $this->assertArrayHasKey('user', $imageData);
        $this->assertArrayHasKey('image_type', $imageData);
        $this->assertArrayHasKey('cast_types', $imageData);
        $this->assertArrayHasKey('genders', $imageData);

        $this->assertEquals($user->id, $imageData['user']['id']);
        $this->assertEquals($imageType->id, $imageData['image_type']['id']);
        $this->assertCount(1, $imageData['cast_types']);
        $this->assertCount(1, $imageData['genders']);
    }

    public function test_gallery_provides_lookup_data_for_form(): void
    {
        $user = User::factory()->create();
        ImageType::factory(3)->create();
        CastType::factory(2)->create();
        Gender::factory(2)->create();

        $response = $this->actingAs($user)
            ->get(route('images'));

        $response->assertOk();

        $props = $response->original->getData()['page']['props'];

        $this->assertCount(3, $props['imageTypes']);
        $this->assertCount(2, $props['castTypes']);
        $this->assertCount(2, $props['genders']);
    }

    // ==========================================
    // Detail (Show) Tests
    // ==========================================

    public function test_guests_cannot_view_image_detail(): void
    {
        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $image = Image::factory()->for($user)->for($imageType)->create();

        $this->get(route('images.show', $image))
            ->assertRedirect(route('login'));
    }

    public function test_authenticated_users_can_view_image_detail(): void
    {
        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $image = Image::factory()->for($user)->for($imageType)->create();

        $this->actingAs($user)
            ->get(route('images.show', $image))
            ->assertOk();
    }

    public function test_image_detail_returns_404_for_nonexistent_image(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get(route('images.show', 99999))
            ->assertNotFound();
    }

    public function test_image_detail_loads_all_relationships(): void
    {
        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        $image = Image::factory()
            ->for($user)
            ->for($imageType)
            ->create();

        $image->castTypes()->attach($castType);
        $image->genders()->attach($gender);

        $response = $this->actingAs($user)
            ->get(route('images.show', $image));

        $response->assertOk();

        $imageData = $response->original->getData()['page']['props']['image'];

        $this->assertArrayHasKey('user', $imageData);
        $this->assertArrayHasKey('image_type', $imageData);
        $this->assertArrayHasKey('cast_types', $imageData);
        $this->assertArrayHasKey('genders', $imageData);

        $this->assertEquals($user->id, $imageData['user']['id']);
        $this->assertEquals($imageType->id, $imageData['image_type']['id']);
        $this->assertCount(1, $imageData['cast_types']);
        $this->assertCount(1, $imageData['genders']);
    }

    public function test_any_authenticated_user_can_view_any_image(): void
    {
        $owner = User::factory()->create();
        $viewer = User::factory()->create();
        $imageType = ImageType::factory()->create();

        $image = Image::factory()->for($owner)->for($imageType)->create();

        $this->actingAs($viewer)
            ->get(route('images.show', $image))
            ->assertOk();
    }

    // ==========================================
    // Upload (Store) Tests
    // ==========================================

    public function test_authenticated_user_can_upload_image(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castTypes = CastType::factory(2)->create();
        $genders = Gender::factory(2)->create();

        $response = $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->image('test.jpg'),
                'image_type_id' => $imageType->id,
                'description' => 'Test description',
                'cast_type_ids' => $castTypes->pluck('id')->toArray(),
                'gender_ids' => $genders->pluck('id')->toArray(),
            ]);

        $response->assertSessionHasNoErrors()
            ->assertRedirect();

        $this->assertDatabaseHas('images', [
            'user_id' => $user->id,
            'image_type_id' => $imageType->id,
            'description' => 'Test description',
        ]);

        // Check file was stored
        $image = Image::first();
        Storage::disk('public')->assertExists($image->file_path);
    }

    public function test_uploaded_image_is_stored_in_public_disk(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->image('photo.png', 800, 600),
                'image_type_id' => $imageType->id,
                'cast_type_ids' => [$castType->id],
                'gender_ids' => [$gender->id],
            ]);

        $image = Image::first();
        $this->assertStringStartsWith('images/', $image->file_path);
        Storage::disk('public')->assertExists($image->file_path);
    }

    public function test_image_relationships_are_synced(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castTypes = CastType::factory(3)->create();
        $genders = Gender::factory(2)->create();

        $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->image('test.jpg'),
                'image_type_id' => $imageType->id,
                'cast_type_ids' => $castTypes->pluck('id')->toArray(),
                'gender_ids' => $genders->pluck('id')->toArray(),
            ]);

        $image = Image::first();

        $this->assertCount(3, $image->castTypes);
        $this->assertCount(2, $image->genders);

        foreach ($castTypes as $castType) {
            $this->assertDatabaseHas('image_cast_types', [
                'image_id' => $image->id,
                'cast_type_id' => $castType->id,
            ]);
        }

        foreach ($genders as $gender) {
            $this->assertDatabaseHas('image_genders', [
                'image_id' => $image->id,
                'gender_id' => $gender->id,
            ]);
        }
    }

    public function test_guests_cannot_upload_images(): void
    {
        Storage::fake('public');

        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        $this->post(route('images.store'), [
            'image' => UploadedFile::fake()->image('test.jpg'),
            'image_type_id' => $imageType->id,
            'cast_type_ids' => [$castType->id],
            'gender_ids' => [$gender->id],
        ])->assertRedirect(route('login'));

        $this->assertDatabaseCount('images', 0);
    }

    public function test_upload_requires_image_file(): void
    {
        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        $this->actingAs($user)
            ->post(route('images.store'), [
                'image_type_id' => $imageType->id,
                'cast_type_ids' => [$castType->id],
                'gender_ids' => [$gender->id],
            ])
            ->assertSessionHasErrors('image');
    }

    public function test_upload_requires_valid_image_type(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->image('test.jpg'),
                'image_type_id' => 9999,
                'cast_type_ids' => [$castType->id],
                'gender_ids' => [$gender->id],
            ])
            ->assertSessionHasErrors('image_type_id');
    }

    public function test_upload_requires_at_least_one_cast_type(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $gender = Gender::factory()->create();

        $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->image('test.jpg'),
                'image_type_id' => $imageType->id,
                'cast_type_ids' => [],
                'gender_ids' => [$gender->id],
            ])
            ->assertSessionHasErrors('cast_type_ids');
    }

    public function test_upload_requires_at_least_one_gender(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();

        $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->image('test.jpg'),
                'image_type_id' => $imageType->id,
                'cast_type_ids' => [$castType->id],
                'gender_ids' => [],
            ])
            ->assertSessionHasErrors('gender_ids');
    }

    public function test_upload_rejects_non_image_files(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->create('document.pdf', 100),
                'image_type_id' => $imageType->id,
                'cast_type_ids' => [$castType->id],
                'gender_ids' => [$gender->id],
            ])
            ->assertSessionHasErrors('image');
    }

    public function test_upload_rejects_oversized_files(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        // Create a file larger than 10MB (10240 KB)
        $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->image('large.jpg')->size(11000),
                'image_type_id' => $imageType->id,
                'cast_type_ids' => [$castType->id],
                'gender_ids' => [$gender->id],
            ])
            ->assertSessionHasErrors('image');
    }

    public function test_description_is_optional(): void
    {
        Storage::fake('public');

        $user = User::factory()->create();
        $imageType = ImageType::factory()->create();
        $castType = CastType::factory()->create();
        $gender = Gender::factory()->create();

        $response = $this->actingAs($user)
            ->post(route('images.store'), [
                'image' => UploadedFile::fake()->image('test.jpg'),
                'image_type_id' => $imageType->id,
                'cast_type_ids' => [$castType->id],
                'gender_ids' => [$gender->id],
                // No description provided
            ]);

        $response->assertSessionHasNoErrors()
            ->assertRedirect();

        $this->assertDatabaseHas('images', [
            'user_id' => $user->id,
            'description' => null,
        ]);
    }
}
