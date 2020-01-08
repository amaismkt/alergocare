<?php

Route::get("/blog", "BlogController@index");
Route::post("/login", "AuthController@authenticate");