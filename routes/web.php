<?php

use App\Http\Controllers\ImageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('images', [ImageController::class, 'index'])->name('images');
    Route::post('images', [ImageController::class, 'store'])->name('images.store');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
