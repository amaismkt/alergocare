<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = "posts";

    protected $fillable = [
        'title', 'text', 'category', 'author', 'image'
    ];
}
