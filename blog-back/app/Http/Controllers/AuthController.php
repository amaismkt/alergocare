<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $password = $request->only("password");
        $email = $request->only("email");
        $credentials["email"] = $email["email"];
        $credentials["password"] = $password["password"];

        if (Auth::attempt($credentials)) {
            $user = User::find(["email" => "lucasdelimamonteiro@gmail.com"]);
            var_dump($user->toArray());
        }
        else {
            return "NO SUCH USER OR PASSWORD!";
        }
    }
}
