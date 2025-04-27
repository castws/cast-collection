<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Gender;

class GenderSeeder extends Seeder
{
    public function run(): void
    {
        $genders = [
            'Female',
            'Male',
            'Other',
            'Unknown'
        ];

        foreach ($genders as $gender) {
            Gender::create(['name' => $gender]);
        }
    }
}