<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Illuminate\Database\Eloquent\ModelNotFoundException;

class UsernameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = \App\Username::get();
        return response()->json([
                "response" => "success",
                "users" => $users->toArray()
            ], 200
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new \App\Username();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->address = '';
        $user->admin = false;

        $user->save();

        return response()->json([
                "response" => "success",
                "description" => "User created",
                "email" => $user->email
            ], 200
        );
    }

    public function user_guard( Request $request )
    {
        try
        {
            $user = \App\Username::where('email', $request->email)->get();

            if ( !isset($user[0]) ) {
                throw new ModelNotFoundException("Email incorrect");
                
            }

            if ( $request->password != $user[0]->password ) {
                throw new ModelNotFoundException( "Password incorrect");
            }

            return response()->json([
                    "response" => "success",
                    "user" => $user->toArray()
                ], 200
            );
        } catch (ModelNotFoundException $e)
        {
            return response()->json([
                    "response" => "error",
                    "description" => "Email or password incorrect"
                ], 200
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id )
    {
        $product = \App\Username::find($id);
        $product->delete();

        return response()->json([
                "response" => "success",
                "id" => $id
            ], 200
        );
    }
}
