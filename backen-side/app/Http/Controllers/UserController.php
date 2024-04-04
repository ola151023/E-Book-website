<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\LoginRequest;
use App\Models\User;
use App\Http\Requests\User\RegisterRequest;
use Illuminate\Http\JsonResponse;

use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(RegisterRequest $request): JsonResponse{
        // Create user
        $user = User::query()->create([
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'name' => $request->get('name')
        ]);

        $token = $user->createToken('access_token');

        return response()->json([
            'message' => 'user created',
            'data' => [
                'user' => $user,
                'access_token' => $token->plainTextToken
            ]
        ]);
    
    }
    public function loginUser(LoginRequest $request): JsonResponse{
        // Find user by email.
        $user = User::query()->where('email', '=', $request->get('email'))->first();
        if(!$user){
            return response()->json([
                'message' => 'Credintails not vaild'
            ], 400);
        }
        // Check on password.
        $checkPassword = Hash::check($request->get('password'), $user->password);
        if(!$checkPassword){
            return response()->json([
                'message' => 'Credintails not vaild'
            ], 400);
        }
        // Create access token for this user.
        $token = $user->createToken('access_token');

        return response()->json([
            'message' => 'user logged in',
            'data' => [
                'user' => $user,
                'access_token' => $token->plainTextToken
            ]
        ]);

    }
    
}    




