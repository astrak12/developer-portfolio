// frontend/src/components/Projects.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [scrollVelocity, setScrollVelocity] = useState<number>(0);

    // Efek Velocity Scroll ringan yang diisolasi khusus untuk section Projects
    useEffect(() => {
        let lastScrollTop = window.pageYOffset;
        let ticking = false;

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;
            const delta = currentScrollTop - lastScrollTop;

            // Batasi nilai velocity dan nonaktifkan di layar kecil (mobile)
            if (window.innerWidth > 768) {
                const clampedVelocity = Math.max(Math.min(delta * 0.1, 10), -10);
                setScrollVelocity(clampedVelocity);
            } else {
                setScrollVelocity(0);
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Mengambil daftar projek dari i18n
    const projectItems = t('projects.items', { returnObjects: true }) as Array<{
        title: string;
        subtitle: string;
        desc: string;
        tech: string[];
        githubUrl: string;
        demoUrl: string;
    }>;

    return (
        <section
            id="projects"
            className="relative z-30 px-4 sm:px-6 lg:px-8 py-20 -mt-6 sm:-mt-10 transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${scrollVelocity}px)` }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                        <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                            {t('projects.title')}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                        {t('projects.subtitle')}
                    </h2>
                </div>

                {/* Grid Kartu Projek */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectItems && projectItems.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/90 dark:bg-[#0B1021]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-space-starlight/20 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                                            {project.subtitle}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-emerald-500 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                {/* Teknologi Badge */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((techItem, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2.5 py-1 bg-slate-100 dark:bg-space-starlight/10 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-mono border border-slate-200 dark:border-space-starlight/20"
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tombol Aksi */}
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    {t('projects.codeBtn')} ↗
                                </a>

                                {project.demoUrl !== "#" ? (
                                    <a
                                        href={project.demoUrl}
                                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-mono font-semibold transition-colors shadow-sm"
                                    >
                                        {t('projects.demoBtn')} 🚀
                                    </a>
                                ) : (
                                    <span className="text-xs font-mono text-slate-400 dark:text-slate-600 cursor-not-allowed">
                                        Internal System
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};