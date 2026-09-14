<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class GitHubController extends Controller
{
    public function getGitHubData()
    {
        $username = 'astrak12'; // Username GitHub Anda

        try {
            // 1. Ambil data repositori publik
            $reposResponse = Http::get("https://api.github.com/users/{$username}/repos", [
                'sort' => 'updated',
                'per_page' => 6,
            ]);

            // 2. Ambil data riwayat aktivitas publik (Events)
            $eventsResponse = Http::get("https://api.github.com/users/{$username}/events/public", [
                'per_page' => 5, // Ambil 5 aktivitas terbaru
            ]);

            if ($reposResponse->failed()) {
                return response()->json(['message' => 'Gagal mengambil data repositori dari GitHub'], 500);
            }

            return response()->json([
                'success' => true,
                'repos' => $reposResponse->json(),
                'events' => $eventsResponse->successful() ? $eventsResponse->json() : [],
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Terjadi kesalahan koneksi'], 500);
        }
    }
}