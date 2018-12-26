<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function allUsers(Request $request)
    {
        return factory(User::class, 50)->make();
    }
}
