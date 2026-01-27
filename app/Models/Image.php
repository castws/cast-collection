<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Image extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'image_type_id',
        'description',
        'file_path',
    ];

    /**
     * Get the user that owns the image.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the image type of this image.
     */
    public function imageType(): BelongsTo
    {
        return $this->belongsTo(ImageType::class);
    }

    /**
     * The cast types that belong to the image.
     */
    public function castTypes(): BelongsToMany
    {
        return $this->belongsToMany(CastType::class, 'image_cast_types');
    }

    /**
     * The genders that belong to the image.
     */
    public function genders(): BelongsToMany
    {
        return $this->belongsToMany(Gender::class, 'image_genders');
    }

    /**
     * Get the comments for the image.
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    /**
     * Get only the root comments (those with no parent).
     */
    public function rootComments(): HasMany
    {
        return $this->hasMany(Comment::class)
            ->whereNull('parent_id');
    }
}