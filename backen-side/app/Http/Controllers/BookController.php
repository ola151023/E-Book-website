<?php

namespace App\Http\Controllers;

use App\Http\Requests\Book\AddBookRequest;
use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::query()->with('category')->get();
        return response()->json([
            'data' => $books
        ]);
    }

    public function store(AddBookRequest $request): JsonResponse
    {
        try {
            // Handle file uploads
            $coverImage = $request->file('cover_image')->store('public/covers');
            $pdfFile = $request->file('pdf_file')->store('public/pdfs');
            $pdfFile = str_replace('public', 'storage', $pdfFile);
            $coverImage = str_replace('public', 'storage', $coverImage);
      // Debugging: Dump coverImage and pdfFile paths
    //   dd($coverImage, $pdfFile);
 
            // Create a new book record
            $book = Book::query()->create([
                'title' => $request->get('title'),
                'author' => $request->get('author'),
                'description' => $request->get('description'),
                'cover_image' =>  $coverImage,
                'pdf_file' => $pdfFile,
                'category_id' => $request->get('category_id'),
                'user_id' => auth()->user()->id,
            ]);
       
                                                          

            return response()->json([
                'message' => 'Book created',
                'data' => [
                    'book' => $book,
                ]
            ], 200);
        } catch (\Exception $e) {
            // Handle any exceptions (e.g., file upload error)
            return response()->json(['error' => 'Failed to create book. ' . $e->getMessage()], 500);
        }
    }
    public function show($id)
    {
        try {
            $book = Book::findOrFail($id);
            return response()->json($book);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Book not found'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $book = Book::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'cover_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'pdf_file' => 'required|mimes:pdf|max:2048',
            'category_id' => 'required|exists:categories,id',

        ]);

        $book->update($request->all());

        return response()->json($book);
    }
    public function destroy($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return response()->json(['message' => 'Book deleted successfully']);
    }
}
