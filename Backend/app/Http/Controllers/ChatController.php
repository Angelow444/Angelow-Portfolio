<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\GlobalMessage;

class ChatController extends Controller
{
    public function index()
    {
        return response()->json(GlobalMessage::latest()->take(50)->get()->reverse()->values());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:50',
            'message' => 'required|string|max:1000',
        ]);

        $message = GlobalMessage::create($validated);

        return response()->json($message, 201);
    }
}
