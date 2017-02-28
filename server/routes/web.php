<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$DEFAULT_URL = "api/v1/";

Route::get('/', function () {
    return view('welcome');
});


Route::get( $DEFAULT_URL.'products', 'MusicController@index');
Route::get( $DEFAULT_URL.'products/{id}', 'MusicController@get_product');
Route::post( $DEFAULT_URL.'products', 'MusicController@store');
Route::get( $DEFAULT_URL.'delete/{id}', 'MusicController@destroy');

//Route::post( $DEFAULT_URL.'user/new', 'UserController@store');
//Route::post( $DEFAULT_URL.'user/auth', 'UserController@auth');