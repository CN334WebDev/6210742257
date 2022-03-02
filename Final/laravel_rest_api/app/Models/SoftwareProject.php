<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoftwareProject extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'language', 'framework', 'tool', 'project_url', 'mockup_url', 'demo_url', 'date', 'description'];
}
