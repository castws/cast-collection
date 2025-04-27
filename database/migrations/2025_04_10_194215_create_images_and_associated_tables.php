<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Add avatar column to users table
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'avatar')) {
                $table->string('avatar')->nullable()->after('email_verified_at');
            }
            
            if (!Schema::hasColumn('users', 'deleted_at')) {
                $table->softDeletes();
            }
        });

        // Create image_types table
        Schema::create('image_types', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        // Create cast_types table
        Schema::create('cast_types', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        // Create genders table
        Schema::create('genders', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->timestamps();
        });

        // Create images table
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('image_type_id')->constrained()->onDelete('restrict');
            $table->text('description')->nullable();
            $table->string('file_path');
            $table->timestamps();
            $table->softDeletes();
            
            // Add indexes
            $table->index('user_id');
            $table->index('image_type_id');
        });

        // Create image_cast_types pivot table
        Schema::create('image_cast_types', function (Blueprint $table) {
            $table->id();
            $table->foreignId('image_id')->constrained()->onDelete('cascade');
            $table->foreignId('cast_type_id')->constrained()->onDelete('restrict');
            $table->timestamps();
            
            // Add unique constraint to prevent duplicates
            $table->unique(['image_id', 'cast_type_id']);
            
            // Add composite index for filtering
            $table->index(['cast_type_id', 'image_id']);
        });

        // Create image_genders pivot table
        Schema::create('image_genders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('image_id')->constrained()->onDelete('cascade');
            $table->foreignId('gender_id')->constrained()->onDelete('restrict');
            $table->timestamps();
            
            // Add unique constraint to prevent duplicates
            $table->unique(['image_id', 'gender_id']);
            
            // Add composite index for filtering
            $table->index(['gender_id', 'image_id']);
        });

        // Create comments table
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('image_id')->constrained()->onDelete('cascade');
            $table->foreignId('parent_id')->nullable()->references('id')->on('comments')->onDelete('cascade');
            $table->text('body');
            $table->timestamps();
            $table->softDeletes();
            
            // Add indexes
            $table->index('user_id');
            $table->index('image_id');
            $table->index('parent_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Drop tables in reverse order to avoid foreign key constraints
        Schema::dropIfExists('comments');
        Schema::dropIfExists('image_genders');
        Schema::dropIfExists('image_cast_types');
        Schema::dropIfExists('images');
        Schema::dropIfExists('genders');
        Schema::dropIfExists('cast_types');
        Schema::dropIfExists('image_types');
        
        // Remove added columns from users table
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'avatar')) {
                $table->dropColumn('avatar');
            }
            
            if (Schema::hasColumn('users', 'deleted_at')) {
                $table->dropSoftDeletes();
            }
        });
    }
};