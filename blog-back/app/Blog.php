<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;

class Blog extends Model
{
    protected $table = "posts";

    protected $fillable = [
        'title', 'text', 'category_id', 'author', 'image'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
