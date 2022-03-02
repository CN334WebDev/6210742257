<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('software_projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('language');
            $table->string('framework');
            $table->string('tool');
            $table->text('project_url');
            $table->text('mockup_url');
            $table->text('demo_url');
            $table->string('date');
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('software_projects');
    }
};
