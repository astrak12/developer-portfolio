<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'summary',
        'description',
        'category',
        'status',
        'is_featured',
        'tech_stack',
        'live_url',
        'repository_url',
    ];
}
