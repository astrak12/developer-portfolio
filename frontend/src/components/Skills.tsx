// frontend/src/components/Skills.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Skills: React.FC = () => {
    const { t } = useTranslation();

    const skillCategories = [
        {
            title: "Web Development",
            skills: ["React", "Laravel", "PHP", "Tailwind CSS", "HTML/CSS", "JavaScript"]
        },
        {
            title: "Database & Tools",
            skills: ["SQLite", "MySQL", "Git", "GitHub", "VS Code", "XAMPP"]
        },
        {
            title: "Office & Documentation",
            skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Technical Writing", "RAB Budgeting"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Judul Bagian */}
            <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-wider flex items-center space-x-2">
                    <span className="text-blue-600 dark:text-space-starlight">//</span>
                    <span>02. {t('skills.title')}</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{t('skills.subtitle')}</p>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 dark:from-space-starlight to-transparent mt-3"></div>
            </div>

            {/* Grid Kartu Kategori */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillCategories.map((cat, index) => (
                    <div
                        key={index}
                        className="relative p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0B1021]/90 backdrop-blur-md border border-slate-200 dark:border-space-starlight/20 hover:border-purple-500 dark:hover:border-space-nebula/50 transition-all shadow-xl dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 dark:from-space-starlight/10 to-transparent rounded-bl-full pointer-events-none"></div>

                        <h3 className="text-lg font-bold font-sans text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-space-starlight transition-colors">
                            {cat.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-slate-100 dark:bg-space-light/40 border border-slate-200 dark:border-space-starlight/20 rounded-md font-mono text-xs text-blue-600 dark:text-space-starlight shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};