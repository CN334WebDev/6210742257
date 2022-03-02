<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $Contact = Contact::all();
        return $Contact;
    }

    public function store(Request $request)
    {
        $Contact = new Contact();
        $Contact->email = $request->email;
        $Contact->phone = $request->phone;
        $Contact->address = $request->address;
        $Contact->linkedin = $request->linkedin;
        $Contact->github = $request->github;
        $Contact->facebook = $request->facebook;
        $Contact->ig = $request->ig;

        $Contact->save();
    }

    public function show($id)
    {
        $Contact = Contact::find($id);
        return $Contact;
    }

    public function update(Request $request, $id)
    {
        $Contact = Contact::findOrFail($request->id);
        $Contact->email = $request->email;
        $Contact->phone = $request->phone;
        $Contact->address = $request->address;
        $Contact->linkedin = $request->linkedin;
        $Contact->github = $request->github;
        $Contact->facebook = $request->facebook;
        $Contact->ig = $request->ig;

        $Contact->save();
        return $Contact;
    }

    public function destroy($id)
    {
        $Contact = Contact::destroy($id);
        return $Contact;
    }
}
