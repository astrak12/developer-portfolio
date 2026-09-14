// frontend/src/App.tsx
import { Starfield } from './components/Starfield';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ResumeSection } from './components/ResumeSection';
import { Projects } from './components/Projects';
import { GitHubActivity } from './components/GitHubActivity';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-transparent transition-colors duration-300 text-slate-900 dark:text-slate-100 font-sans antialiased relative z-0">
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ResumeSection />
        <Projects />
        <GitHubActivity />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs font-mono text-blue-400/70 border-t border-blue-500/20 bg-[#050814]/50 backdrop-blur-sm relative z-10">
        © {new Date().getFullYear()} Rangga Ivano. Built with React, Tailwind CSS, &amp; Laravel. {/* Astro-Telemetry Theme */}
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;