// frontend/src/components/ResumeSection.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    desc: string;
    points: string[];
}

export const ResumeSection: React.FC = () => {
    const { t } = useTranslation();
    const experiences = t('experience.items', { returnObjects: true }) as ExperienceItem[];

    return (
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Judul Bagian */}
            <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-wider flex items-center space-x-2">
                    <span className="text-blue-600 dark:text-space-starlight">//</span>
                    <span>04. {t('experience.title')}</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{t('experience.subtitle')}</p>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 dark:from-space-starlight to-transparent mt-3"></div>
            </div>

            {/* Daftar Pengalaman dalam Kartu Seragam */}
            <div className="space-y-6 max-w-4xl">
                {Array.isArray(experiences) && experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="relative p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0B1021]/90 backdrop-blur-md border border-slate-200 dark:border-space-starlight/20 hover:border-purple-500 dark:hover:border-space-nebula/50 transition-all shadow-xl dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 dark:from-space-starlight/10 to-transparent rounded-bl-full pointer-events-none"></div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-space-starlight transition-colors">
                                {exp.role} <span className="text-blue-600 dark:text-space-starlight">@ {exp.company}</span>
                            </h3>
                            <span className="font-mono text-xs text-purple-600 dark:text-space-nebula mt-1 sm:mt-0">
                                {exp.period}
                            </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 font-sans leading-relaxed">
                            {exp.desc}
                        </p>

                        <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            {exp.points && exp.points.map((point, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                    <span className="text-blue-600 dark:text-space-starlight mt-1">▹</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};