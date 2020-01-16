<?php

Route::get("/posts", "BlogController@index");
Route::get("/categories", "CategoriesController@index");
Route::get("/post/{post}", "BlogController@show");
Route::post("/publish-post", "BlogController@store");
Route::post("/file-upload", "BlogController@fileUpload");
Route::post("/store-category", "CategoriesController@store");
Route::post("/delete-category", "CategoriesController@destroy");

Route::post("/login", "AuthController@authenticate");
Route::post("/logout", "AuthController@logout");
Route::get("/user-check", "AuthController@check");