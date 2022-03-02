<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GeneralController;
use App\Http\Controllers\Api\SoftwareProjectController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\AboutController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MajorSkillController;
use App\Http\Controllers\Api\SoftSkillController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(GeneralController::class)->group(function () {
    Route::get('/generals', 'index');
    Route::post('/general', 'store');
    Route::get('/general/{id}', 'show');
    Route::put('/general/{id}', 'update');
    Route::delete('/general/{id}', 'destroy');
});

Route::controller(SoftwareProjectController::class)->group(function () {
    Route::get('/software-projects', 'index');
    Route::post('/software-project', 'store');
    Route::get('/software-project/{id}', 'show');
    Route::put('/software-project/{id}', 'update');
    Route::delete('/software-project/{id}', 'destroy');
});

Route::controller(EducationController::class)->group(function () {
    Route::get('/educations', 'index');
    Route::post('/education', 'store');
    Route::get('/education/{id}', 'show');
    Route::put('/education/{id}', 'update');
    Route::delete('/education/{id}', 'destroy');
});

Route::controller(AboutController::class)->group(function () {
    Route::get('/abouts', 'index');
    Route::post('/about', 'store');
    Route::get('/about/{id}', 'show');
    Route::put('/about/{id}', 'update');
    Route::delete('/about/{id}', 'destroy');
});

Route::controller(ContactController::class)->group(function () {
    Route::get('/contacts', 'index');
    Route::post('/contact', 'store');
    Route::get('/contact/{id}', 'show');
    Route::put('/contact/{id}', 'update');
    Route::delete('/contact/{id}', 'destroy');
});

Route::controller(SoftSkillController::class)->group(function () {
    Route::get('/soft-skills', 'index');
    Route::post('/soft-skill', 'store');
    Route::get('/soft-skill/{id}', 'show');
    Route::put('/soft-skill/{id}', 'update');
    Route::delete('/soft-skill/{id}', 'destroy');
});

Route::controller(MajorSkillController::class)->group(function () {
    Route::get('/major-skills', 'index');
    Route::post('/major-skill', 'store');
    Route::get('/major-skill/{id}', 'show');
    Route::put('/major-skill/{id}', 'update');
    Route::delete('/major-skill/{id}', 'destroy');
});
