<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImageRequest;
use App\Models\CastType;
use App\Models\Gender;
use App\Models\Image;
use App\Models\ImageType;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ImageController extends Controller
{
    /**
     * Display paginated gallery of all images.
     */
    public function index(): Response
    {
        $images = Image::with(['user', 'imageType', 'castTypes', 'genders'])
            ->latest()
            ->paginate(12);

        return Inertia::render('images', [
            'images' => $images,
            'imageTypes' => ImageType::all(),
            'castTypes' => CastType::all(),
            'genders' => Gender::all(),
        ]);
    }

    /**
     * Store a newly uploaded image.
     */
    public function store(StoreImageRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        // Store the image file
        $path = $request->file('image')->store('images', 'public');

        // Create the image record
        $image = Image::create([
            'user_id' => $request->user()->id,
            'image_type_id' => $validated['image_type_id'],
            'description' => $validated['description'] ?? null,
            'file_path' => $path,
        ]);

        // Sync many-to-many relationships
        if (!empty($validated['cast_type_ids'])) {
            $image->castTypes()->sync($validated['cast_type_ids']);
        }

        if (!empty($validated['gender_ids'])) {
            $image->genders()->sync($validated['gender_ids']);
        }

        return back();
    }
}
