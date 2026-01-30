<?php

use App\Http\Controllers\ImageController;
use App\Http\Controllers\ResizedImageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('images', [ImageController::class, 'index'])->name('images');
    Route::get('images/{image}', [ImageController::class, 'show'])->name('images.show');
    Route::post('images', [ImageController::class, 'store'])->name('images.store');
    Route::delete('images/{image}', [ImageController::class, 'destroy'])->name('images.destroy');
    Route::get('images/{image}/resize/{width}', ResizedImageController::class)
        ->name('images.resize')
        ->whereNumber('width');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
