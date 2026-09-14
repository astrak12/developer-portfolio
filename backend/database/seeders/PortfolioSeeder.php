namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Profile;
use App\Models\Skill;
use App\Models\Project;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Data Profil Utama
        Profile::create([
            'name' => 'Rangga Ivano',
            'headline' => 'Full-Stack Software Engineer & Vibe Coder',
            'bio' => 'Passionate developer focused on building high-performance web applications, API integrations, and immersive user experiences.',
            'location' => 'South Tangerang, Indonesia',
            'availability' => 'Available for hire / freelance',
            'email' => 'rangga@example.com',
            'resume_url' => '#',
        ]);

        // 2. Data Skills
        Skill::insert([
            ['name' => 'React / TypeScript', 'category' => 'Frontend', 'proficiency_label' => 'Primary', 'years_experience' => 3, 'is_featured' => true],
            ['name' => 'Laravel / PHP', 'category' => 'Backend', 'proficiency_label' => 'Primary', 'years_experience' => 4, 'is_featured' => true],
            ['name' => 'Tailwind CSS', 'category' => 'Frontend', 'proficiency_label' => 'Strong', 'years_experience' => 3, 'is_featured' => true],
            ['name' => 'MySQL / SQLite', 'category' => 'Database', 'proficiency_label' => 'Strong', 'years_experience' => 3, 'is_featured' => true],
            ['name' => 'Gemini API & AI Tools', 'category' => 'AI / LLM', 'proficiency_label' => 'Working Knowledge', 'years_experience' => 1, 'is_featured' => true],
        ]);

        // 3. Data Featured Projects
        Project::create([
            'title' => 'SPK Pengepul Web App',
            'slug' => 'spk-pengepul',
            'summary' => 'Web application featuring role-based access control for managing local waste collector data sources.',
            'description' => 'Developed a complete decision support system web application with admin, executive, and operator roles using modern PHP and relational database architecture.',
            'category' => 'Full-Stack Web App',
            'status' => 'Completed',
            'is_featured' => true,
            'tech_stack' => json_encode(['Laravel', 'SQLite', 'Tailwind CSS', 'Vite']),
            'live_url' => '#',
            'repository_url' => 'https://github.com/',
        ]);
    }
}