<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\ImageType;

class ImageTypeSeeder extends Seeder
{
    public function run(): void
    {
        $types = [
            'Recreational',
            'Real',
            'AI Generated',
            'Media (Movie, Magazine, etc.)',
            'Art (Drawing, 3D)',
            'Photo manipulation',
            'Unknown'
        ];

        foreach ($types as $type) {
            ImageType::create(['name' => $type]);
        }
    }
}