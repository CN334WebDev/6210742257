<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\About;

class AboutController extends Controller
{
    public function index()
    {
        $About = About::all();
        return $About;
    }

    public function store(Request $request)
    {
        $About = new About();
        $About->about = $request->about;

        $About->save();
    }

    public function show($id)
    {
        $About = About::find($id);
        return $About;
    }

    public function update(Request $request, $id)
    {
        $About = About::findOrFail($request->id);
        $About->about = $request->about;

        $About->save();
        return $About;
    }

    public function destroy($id)
    {
        $About = About::destroy($id);
        return $About;
    }
}
