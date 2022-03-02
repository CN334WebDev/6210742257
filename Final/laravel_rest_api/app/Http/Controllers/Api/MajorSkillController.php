<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MajorSkill;

class MajorSkillController extends Controller
{
    public function index()
    {
        $MajorSkill = MajorSkill::all();
        return $MajorSkill;
    }

    public function store(Request $request)
    {
        $MajorSkill = new MajorSkill();
        $MajorSkill->major_skill = $request->major_skill;

        $MajorSkill->save();
    }

    public function show($id)
    {
        $MajorSkill = MajorSkill::find($id);
        return $MajorSkill;
    }

    public function update(Request $request, $id)
    {
        $MajorSkill = MajorSkill::findOrFail($request->id);
        $MajorSkill->major_skill = $request->major_skill;

        $MajorSkill->save();
        return $MajorSkill;
    }

    public function destroy($id)
    {
        $MajorSkill = MajorSkill::destroy($id);
        return $MajorSkill;
    }
}
