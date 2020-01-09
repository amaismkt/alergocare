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
            session_start();
            $_SESSION["loggedIn"] = 1;
            $_SESSION["email"] = $email["email"];
            return "OK";
        }
        else {
            return "NO SUCH USER OR PASSWORD.";
        }
    }

    public function logout()
    {
        $_SESSION = [];
        session_destroy();
    }

    public function check()
    {
        session_start();
        if($_SESSION["loggedIn"]==1){
            return 1;
        }
        else{
            return 0;
        }
    }
}
