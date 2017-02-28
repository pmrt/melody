<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class MusicController extends Controller
{
    public function index()
    {
        $products = \App\Models\Product::get();
        return response()->json([
                "response" => "success",
                "products" => $products->toArray()
            ], 200
        );
    }

    public function get_product( $id )
    {
        try
        {
            $product = \App\Models\Product::findOrFail($id);

            return response()->json([
                    "response" => "success",
                    "product" => $product->toArray()
                ], 200
            );
        } catch (ModelNotFoundException $e)
        {
            return response()->json([
                    "response" => "error",
                    "description" => "No results for search"
                ], 200
            );
        }
    }

    public function store( Request $request)
    {
        $product = new \App\Models\Product();

        $product->name = $request->name;
        $product->img_url = $request->img_url;
        $product->desc = $request->desc;
        $product->price = $request->price;
        $product->sale = $request->sale;
        $product->stock = $request->stock;
        $product->save();

        return response()->json([
                "response" => "success",
                "id" => "0"
            ], 200
        );

    }

    public function destroy( $id )
    {
        $product = \App\Models\Product::find($id);
        $product->delete();

        return response()->json([
                "response" => "success",
                "id" => $id
            ], 200
        );
    }
}
