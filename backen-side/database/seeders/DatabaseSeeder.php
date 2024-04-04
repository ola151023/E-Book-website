<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\Category::factory()->create([
            'name' => 'Historical fiction',
       
        ]);
        \App\Models\Category::factory()->create([
            'name' => 'Horror',
       
        ]);
        \App\Models\Category::factory()->create([
            'name' => 'Adventure',
       
        ]);
        \App\Models\Category::factory()->create([
            'name' => 'Fantasy',
       
        ]);
        \App\Models\Category::factory()->create([
            'name' => 'Thriller',
       
        ]);
    }
}
