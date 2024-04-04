<?php

namespace App\Http\Requests\Book;

use Illuminate\Foundation\Http\FormRequest;

class AddBookRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'cover_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'pdf_file' => 'required|mimes:pdf|max:2048',
            'category_id' => 'required|exists:categories,id',
        ];
    }
}
