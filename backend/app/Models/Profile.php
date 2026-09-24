<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'name',
        'headline',
        'bio',
        'location',
        'availability',
        'email',
        'resume_url',
    ];
}
