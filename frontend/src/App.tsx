// frontend/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Starfield } from './components/Starfield';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ResumeSection } from './components/ResumeSection';
import { Projects } from './components/Projects';
import { GitHubActivity } from './components/GitHubActivity';
import { Contact } from './components/Contact';
import { DemoShell } from './components/labs/DemoShell';
import { SpkLab } from './components/labs/spk/SpkLab';
import { ObjectDetectionLab } from './components/labs/object-detection/ObjectDetectionLab';

// Komponen Pembungkus untuk Portofolio Utama
const MainPortfolio = () => (
  <div className="relative z-10">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <ResumeSection />
    <GitHubActivity />

    {/* Bagian Kontak — Form Terhubung ke API Backend */}
    <Contact />

    {/* Footer Sederhana */}
    <footer className="py-8 text-center text-slate-500 dark:text-slate-400 font-mono text-sm">
      <p>© {new Date().getFullYear()} Rangga Ivano. Built with React & Tailwind.</p>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-[#060913] selection:bg-blue-500/30">
        {/* Latar belakang bintang (Starfield) hanya muncul jika dibutuhkan, Anda bisa memodifikasinya nanti */}
        <div className="fixed inset-0 z-0 pointer-events-none hidden dark:block">
          <Starfield />
        </div>

        <Routes>
          {/* Rute Utama Portofolio */}
          <Route path="/" element={<MainPortfolio />} />

          {/* Rute Interactive Labs */}
          <Route path="/labs" element={<DemoShell />}>
            <Route index element={<div className="text-center py-20 text-slate-500">Pilih project demo dari halaman portofolio.</div>} />
            <Route path="spk" element={<SpkLab />} />

            {/* Rute Lab Object Detection ditambahkan di sini agar import di atas tidak error */}
            <Route path="object-detection" element={<ObjectDetectionLab />} />

            {/* Fallback route if path doesn't match */}
            <Route path="*" element={<div className="text-center py-20 text-red-500">Error 404: Route Not Found di dalam Labs</div>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;