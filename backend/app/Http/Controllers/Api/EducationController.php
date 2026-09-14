namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Education;

class EducationController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => Education::orderBy('id', 'desc')->get()
        ]);
    }
}