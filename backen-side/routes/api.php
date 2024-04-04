<?php
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
// Routes for user authentication

    Route::prefix('auth')->group(function(){
        Route::post('register', [UserController::class, 'register']);
        Route::post('login', [UserController::class, 'loginUser']);
    });

   Route::middleware('auth:sanctum')->group(function(){
    Route::get('/books-show', [BookController::class, 'index']); // Retrieve all books
    Route::post('/books', [BookController::class, 'store']); // Create a new book
    Route::get('/books/{id}', [BookController::class, 'show']); // Retrieve a specific book
    Route::put('/books/{id}', [BookController::class, 'update']); // Update a specific book
    Route::delete('/books/{id}', [BookController::class, 'destroy']); // Delete a specific book

   });

