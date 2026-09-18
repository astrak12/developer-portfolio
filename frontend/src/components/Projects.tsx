// frontend/src/components/Projects.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface ProjectItem {
    title: string;
    subtitle: string;
    desc: string;
    tech: string[];
    githubUrl: string;
    demoUrl: string;
}

export const Projects: React.FC = () => {
    const { t } = useTranslation();
    const projects = t('projects.items', { returnObjects: true }) as ProjectItem[];
    const navigate = useNavigate();

    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Judul Bagian */}
            <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-wider flex items-center space-x-2">
                    <span className="text-blue-600 dark:text-space-starlight">//</span>
                    <span>03. {t('projects.title')}</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{t('projects.subtitle')}</p>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 dark:from-space-starlight to-transparent mt-3"></div>
            </div>

            {/* Grid Daftar Proyek */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.isArray(projects) && projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0B1021]/90 backdrop-blur-md border border-slate-200 dark:border-space-starlight/20 hover:border-purple-500 dark:hover:border-space-nebula/50 transition-all flex flex-col justify-between shadow-xl dark:shadow-[0_0_25px_rgba(56,189,248,0.05)] group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 dark:from-space-starlight/10 to-transparent rounded-bl-full pointer-events-none"></div>

                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula flex items-center justify-center text-white dark:text-space-dark font-bold text-lg shadow-md">
                                    ⚡
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-space-starlight transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="font-mono text-[10px] text-blue-600 dark:text-space-starlight uppercase tracking-widest">
                                        {project.subtitle}
                                    </span>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-sm font-sans leading-relaxed mb-6">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((techItem, techIdx) => (
                                    <span
                                        key={techIdx}
                                        className="px-3 py-1 bg-slate-100 dark:bg-space-light/40 border border-slate-200 dark:border-space-starlight/20 rounded-md font-mono text-[11px] text-blue-600 dark:text-space-starlight shadow-sm"
                                    >
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 pt-4 border-t border-slate-200 dark:border-space-starlight/10 font-mono text-xs">
                            {/* Logika Tombol Demo Baru */}
                            {project.demoUrl.startsWith('/labs') ? (
                                <button
                                    onClick={() => navigate(project.demoUrl)}
                                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula text-white dark:text-space-dark font-bold text-center hover:opacity-90 transition-all shadow-md flex items-center justify-center space-x-2"
                                >
                                    <span>Try Demo</span>
                                    <span className="text-lg">🧪</span>
                                </button>
                            ) : project.demoUrl !== "#" ? (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula text-white dark:text-space-dark font-bold text-center hover:opacity-90 transition-all shadow-md"
                                >
                                    <span>{t('projects.demoBtn')} ↗</span>
                                </a>
                            ) : (
                                <button
                                    disabled
                                    className="flex-1 py-3 px-4 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-bold text-center cursor-not-allowed"
                                >
                                    <span>Segera Hadir</span>
                                </button>
                            )}

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-3 px-5 rounded-xl bg-slate-100 dark:bg-[#121829] border border-slate-200 dark:border-space-starlight/30 text-slate-800 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-space-starlight/10 transition-all text-center"
                            >
                                <span>{t('projects.codeBtn')}</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};