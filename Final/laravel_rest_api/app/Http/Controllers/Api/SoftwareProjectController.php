<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SoftwareProject;

class SoftwareProjectController extends Controller
{
    public function index()
    {
        $SoftwareProject = SoftwareProject::all();
        return $SoftwareProject;
    }

    public function store(Request $request)
    {
        $SoftwareProject = new SoftwareProject();
        $SoftwareProject->name = $request->name;
        $SoftwareProject->language = $request->language;
        $SoftwareProject->framework = $request->framework;
        $SoftwareProject->tool = $request->tool;
        $SoftwareProject->project_url = $request->project_url;
        $SoftwareProject->mockup_url = $request->mockup_url;
        $SoftwareProject->demo_url = $request->demo_url;
        $SoftwareProject->date = $request->date;
        $SoftwareProject->description = $request->description;

        $SoftwareProject->save();
    }

    public function show($id)
    {
        $SoftwareProject = SoftwareProject::find($id);
        return $SoftwareProject;
    }

    public function update(Request $request, $id)
    {
        $SoftwareProject = SoftwareProject::findOrFail($request->id);
        $SoftwareProject->name = $request->name;
        $SoftwareProject->language = $request->language;
        $SoftwareProject->framework = $request->framework;
        $SoftwareProject->tool = $request->tool;
        $SoftwareProject->project_url = $request->project_url;
        $SoftwareProject->mockup_url = $request->mockup_url;
        $SoftwareProject->demo_url = $request->demo_url;
        $SoftwareProject->date = $request->date;
        $SoftwareProject->description = $request->description;

        $SoftwareProject->save();
        return $SoftwareProject;
    }

    public function destroy($id)
    {
        $SoftwareProject = SoftwareProject::destroy($id);
        return $SoftwareProject;
    }
}
