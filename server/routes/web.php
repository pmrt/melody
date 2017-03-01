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

$DEFAULT_URL = "v1/";

Route::get('/', function () {
    return view('welcome');
});


Route::get( $DEFAULT_URL.'products', 'MusicController@index');
Route::get( $DEFAULT_URL.'products/{id}', 'MusicController@get_product');
Route::post( $DEFAULT_URL.'products', 'MusicController@store');
Route::get( $DEFAULT_URL.'delete/{id}', 'MusicController@destroy');

Route::get( $DEFAULT_URL.'users', 'UsernameController@index');
Route::post( $DEFAULT_URL.'user/create', 'UsernameController@store');
Route::post( $DEFAULT_URL.'user/update', 'UsernameController@update');
Route::post( $DEFAULT_URL.'user/auth', 'UsernameController@user_guard');
Route::get( $DEFAULT_URL.'user/delete/{id}', 'UsernameController@destroy');


//Route::post( $DEFAULT_URL.'user/new', 'UserController@store');
//Route::post( $DEFAULT_URL.'user/auth', 'UserController@auth');