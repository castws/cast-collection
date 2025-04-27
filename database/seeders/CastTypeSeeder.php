<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\CastType;

class CastTypeSeeder extends Seeder
{
    public function run(): void
    {
        $castTypes = [
            'SLC',
            'SLWC',
            'LLC',
            'LLWC',
            'CLC',
            'DSLC',
            'DSLWC',
            'DLLC',
            'DLLWC',
            'DCLC',
            'SAC',
            'SATS',
            'SAFS',
            'LAC',
            'LATS',
            'LAFS',
            'CLAC',
            'DSAC',
            'DSATS',
            'DSAFS',
            'DLAC',
            'DLATS',
            'DLAFS',
            'HS',
            'SHS',
            '1.5HS',
            'DHS',
            'SDHS',
            'SS',
            'DSS',
            'Velpeau',
            'Risser',
            'Minerva',
            'Turnbuckle',
            'FBC',
            'Spreader Bar',
            'Traction',
            'Other'
        ];

        foreach ($castTypes as $type) {
            CastType::create(['name' => $type]);
        }
    }
}