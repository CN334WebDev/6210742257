<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SoftSkill;

class SoftSkillController extends Controller
{
    public function index()
    {
        $SoftSkill = SoftSkill::all();
        return $SoftSkill;
    }

    public function store(Request $request)
    {
        $SoftSkill = new SoftSkill();
        $SoftSkill->soft_skill = $request->soft_skill;

        $SoftSkill->save();
    }

    public function show($id)
    {
        $SoftSkill = SoftSkill::find($id);
        return $SoftSkill;
    }

    public function update(Request $request, $id)
    {
        $SoftSkill = SoftSkill::findOrFail($request->id);
        $SoftSkill->soft_skill = $request->soft_skill;

        $SoftSkill->save();
        return $SoftSkill;
    }

    public function destroy($id)
    {
        $SoftSkill = SoftSkill::destroy($id);
        return $SoftSkill;
    }
}
