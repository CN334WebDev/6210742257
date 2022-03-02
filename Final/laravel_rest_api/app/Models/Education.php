<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    public $table = "educations";
    use HasFactory;
    protected $fillable = ['university', 'faculty', 'major', 'level', 'grade'];
}
