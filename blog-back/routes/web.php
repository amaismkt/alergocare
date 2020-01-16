<?php

Route::get("/posts", "BlogController@index");
Route::get("/categories", "CategoriesController@index");
Route::get("/post/{post}", "BlogController@show");
Route::post("/publish-post", "BlogController@store");
Route::post("/update-post", "BlogController@update");
Route::post("/file-upload", "BlogController@fileUpload");
Route::post("/store-category", "CategoriesController@store");
Route::get("/delete-category/{category}", "CategoriesController@destroy");
Route::get("/delete-post/{post}", "BlogController@destroy");
Route::get("/edit-post/{post}", "BlogController@edit");

Route::post("/login", "AuthController@authenticate");
Route::post("/logout", "AuthController@logout");
Route::get("/user-check", "AuthController@check");