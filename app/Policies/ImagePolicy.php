<?php

namespace App\Policies;

use App\Models\Image;
use App\Models\User;

class ImagePolicy
{
    /**
     * Determine if the user can delete the image.
     */
    public function delete(User $user, Image $image): bool
    {
        return $user->id === $image->user_id;
    }
}
