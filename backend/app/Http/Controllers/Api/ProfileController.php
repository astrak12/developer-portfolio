namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class ProfileController extends Controller
{
    public function index()
{
        return response()->json([
            'success' => true,
            'data' => [
                'name' => 'Rangga Ivano',
                'title' => 'Full-Stack Developer & Software Engineer',
                'location' => 'South Tangerang, Indonesia',
                'bio' => 'Seorang pengembang perangkat lunak yang berfokus pada ekosistem React, Laravel, dan arsitektur web modern. Menyukai alur kerja vibe coding, efisiensi sistem, dan membangun aplikasi yang fungsional serta bersih.',
                'status' => 'Available for freelance / full-stack projects'
            ]
        ]);
    }
}