<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', function (Request $request) {
    $credentials = $request->validate([
        'username' => 'required',
        'password' => 'required'
    ]);

    if (Auth::attempt($credentials)) {
        // Return success response if matched
        return response()->json([
            'success' => true,
            'message' => 'Logged in successfully',
            'user' => Auth::user()
        ]);
    }

    return response()->json([
        'success' => false,
        'message' => 'Invalid username or password'
    ], 401);
});
