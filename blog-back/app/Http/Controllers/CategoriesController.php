<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return $categories;
    }

    public function store(Request $request)
    {
        Category::create($request->input());

        return "success";
    }

    public function destroy($id)
    {
        return $id;
        $category = Category::find($id);
        $category->delete();

        return "success";
    }
}
