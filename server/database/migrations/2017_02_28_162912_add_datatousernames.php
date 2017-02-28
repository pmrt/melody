<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDatatousernames extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usernames', function( $table ) {
            $table->boolean('admin')->after('password');
            $table->string('address')->after('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('usernames', function ($table) {
            $table->dropColumn('admin');
            $table->dropColumn('address');
        });
    }
}
