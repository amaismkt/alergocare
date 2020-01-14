<?php

Route::get("/posts", "BlogController@index");
Route::get("/post/{post}", "BlogController@show");
Route::post("/publish-post", "BlogController@store");
Route::post("/file-upload", "BlogController@fileUpload");

Route::post("/login", "AuthController@authenticate");
Route::post("/logout", "AuthController@logout");
Route::get("/user-check", "AuthController@check");