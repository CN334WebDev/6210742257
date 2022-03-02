<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Education;

class EducationController extends Controller
{
    public function index()
    {
        $Education = Education::all();
        return $Education;
    }

    public function store(Request $request)
    {
        $Education = new Education();
        $Education->university = $request->university;
        $Education->faculty = $request->faculty;
        $Education->major = $request->major;
        $Education->level = $request->level;
        $Education->grade = $request->grade;

        $Education->save();
    }

    public function show($id)
    {
        $Education = Education::find($id);
        return $Education;
    }

    public function update(Request $request, $id)
    {
        $Education = Education::findOrFail($request->id);
        $Education->university = $request->university;
        $Education->faculty = $request->faculty;
        $Education->major = $request->major;
        $Education->level = $request->level;
        $Education->grade = $request->grade;

        $Education->save();
        return $Education;
    }

    public function destroy($id)
    {
        $Education = Education::destroy($id);
        return $Education;
    }
}
