<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreImageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'image' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,webp', 'max:10240'],
            'image_type_id' => ['required', 'exists:image_types,id'],
            'description' => ['nullable', 'string', 'max:1000'],
            'cast_type_ids' => ['required', 'array', 'min:1'],
            'cast_type_ids.*' => ['exists:cast_types,id'],
            'gender_ids' => ['required', 'array', 'min:1'],
            'gender_ids.*' => ['exists:genders,id'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'image.required' => 'Please select an image to upload.',
            'image.image' => 'The file must be an image.',
            'image.max' => 'The image size must not exceed 10MB.',
            'image_type_id.required' => 'Please select an image type.',
            'cast_type_ids.required' => 'Please select at least one cast type.',
            'cast_type_ids.min' => 'Please select at least one cast type.',
            'gender_ids.required' => 'Please select at least one gender.',
            'gender_ids.min' => 'Please select at least one gender.',
        ];
    }
}
