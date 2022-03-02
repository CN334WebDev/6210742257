<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\General;

class GeneralController extends Controller
{
    public function index()
    {
        $General = General::all();
        return $General;
    }

    public function store(Request $request)
    {
        $General = new General();
        $General->fname = $request->fname;
        $General->lname = $request->lname;
        $General->profile = $request->profile;

        $General->save();
    }

    public function show($id)
    {
        $General = General::find($id);
        return $General;
    }

    public function update(Request $request, $id)
    {
        $General = General::findOrFail($request->id);
        $General->fname = $request->fname;
        $General->lname = $request->lname;
        $General->profile = $request->profile;

        $General->save();
        return $General;
    }

    public function destroy($id)
    {
        $General = General::destroy($id);
        return $General;
    }
}
