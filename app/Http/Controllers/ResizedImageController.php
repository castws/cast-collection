<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;
use Symfony\Component\HttpFoundation\Response;

class ResizedImageController extends Controller
{
    /**
     * Allowed widths in pixels.
     */
    private const ALLOWED_WIDTHS = [100, 400, 800];

    /**
     * Serve a resized version of an image, generating it on first request.
     */
    public function __invoke(Image $image, int $width): Response
    {
        if (! in_array($width, self::ALLOWED_WIDTHS, true)) {
            abort(404);
        }

        $originalFilename = basename($image->file_path);
        $cachedPath = "images/resized/{$width}/{$originalFilename}";

        if (Storage::disk('public')->exists($cachedPath)) {
            return redirect(Storage::disk('public')->url($cachedPath));
        }

        if (! Storage::disk('public')->exists($image->file_path)) {
            abort(404);
        }

        $manager = new ImageManager(new Driver());
        $resized = $manager->read(Storage::disk('public')->path($image->file_path))
            ->scaleDown(width: $width);

        $targetFullPath = Storage::disk('public')->path($cachedPath);
        $targetDir = dirname($targetFullPath);

        if (! is_dir($targetDir)) {
            mkdir($targetDir, 0755, true);
        }

        $resized->save($targetFullPath, quality: 80);

        return redirect(Storage::disk('public')->url($cachedPath));
    }
}
