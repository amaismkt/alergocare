<?php

Route::get("/blog", "BlogController@index");
Route::post("/publish-post", "BlogController@store");

Route::post("/login", "AuthController@authenticate");
Route::post("/logout", "AuthController@logout");
Route::get("/user-check", "AuthController@check");