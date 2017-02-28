<?php

namespace App\Http\Middleware;

use Closure;

class CheckApi
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $key = $request->key;
        if ($key != "UH6v4wp33xeeh1XWiRNo" || !isset($key) ) {
            return response()->json([
                "response" => "error",
                "description" => "Invalid api key"
            ], 200
            );
        }

        return $next($request);
    }
}