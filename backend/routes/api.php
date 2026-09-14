<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ContactController;use App\Http\Controllers\Api\GitHubController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\ExperienceController;

Route::get('/profile', [ProfileController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{slug}', [ProjectController::class, 'show']);
Route::post('/contact', [ContactController::class, 'store']);
Route::get('/github/repos', [GitHubController::class, 'getGitHubData']);
Route::get('/education', [EducationController::class, 'index']);
Route::get('/experiences', [ExperienceController::class, 'index']);