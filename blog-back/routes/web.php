<?php

Route::get("/blog", "BlogController@index");
Route::middleware('auth:api')->get('/login', function (Request $request) {
    return $request->user();
});
