<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use App\Category;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Blog::all();
        $categories = Category::all();

        foreach($posts as $post){
            foreach($categories as $category){
                if($post->category_id == $category->id){
                    $post->category = $category->name;
                }
            }
        }
        return $posts;
    }

    public function fileUpload(Request $request)
    {
        $file = $request->file('file');
        $path = "../../blog-front/images/blog";
        $name = $file->getClientOriginalName();
        $file->move($path, $name);
        return 'success';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            Blog::create($request->input());
        }
        catch (Exception $e){
            echo "Não foi possível cadastrar o post: " . $e->getMessage();
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Blog::find($id);
        $categories = Category::all();

        foreach($categories as $category){
            if($post->category_id == $category->id){
                $post->category = $category->name;
            }
        }

        return $post;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
