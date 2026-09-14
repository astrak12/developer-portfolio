namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Education;
use App\Models\Experience;

class ResumeSeeder extends Seeder
{
    public function run(): void
    {
        Education::create([
            'institution' => 'Universitas / Instansi Pendidikan',
            'degree' => 'Sarjana Komputer (S.Kom)',
            'field_of_study' => 'Teknik Informatika / Ilmu Komputer',
            'start_year' => '2020',
            'end_year' => '2024',
            'description' => 'Fokus pada rekayasa perangkat lunak, arsitektur basis data, dan pengembangan web modern.'
        ]);

        Experience::create([
            'company' => 'Freelance & Independent Projects',
            'role' => 'Full-Stack Developer',
            'period' => '2024 - Present',
            'description' => 'Membangun aplikasi web kustom menggunakan ekosistem React, Laravel, Tailwind CSS, dan integrasi API pihak ketiga dengan alur kerja modern (vibe coding).'
        ]);
    }
}
