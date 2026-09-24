// frontend/src/components/ResumeSection.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getEducation, getExperiences } from '../services/api';

interface EducationItem {
    id: number;
    institution: string;
    degree: string;
    field_of_study: string;
    start_year: string;
    end_year: string;
    description: string | null;
}

interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
}

export const ResumeSection: React.FC = () => {
    const { t } = useTranslation();

    // State untuk data education & experience dari API + status loading/error
    const [education, setEducation] = useState<EducationItem[]>([]);
    const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Ambil data education & experience dari backend (GET /api/education & /api/experiences)
        Promise.all([getEducation(), getExperiences()])
            .then(([educationRes, experiencesRes]) => {
                const eduPayload = educationRes.data;
                const expPayload = experiencesRes.data;
                setEducation(Array.isArray(eduPayload) ? eduPayload : eduPayload?.data ?? []);
                setExperiences(Array.isArray(expPayload) ? expPayload : expPayload?.data ?? []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal mengambil data resume:", err);
                setError(true);
                setLoading(false);
            });
    }, []);

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

            {/* Status Loading */}
            {loading && (
                <p className="text-center font-mono text-xs text-slate-500">Syncing resume telemetry...</p>
            )}

            {/* Status Error — fallback rapi, aplikasi tetap berjalan */}
            {!loading && error && (
                <p className="text-center font-mono text-xs text-red-500">
                    Failed to load resume data from API. Make sure the backend is running.
                </p>
            )}

            {!loading && !error && (
                <>
                    {/* Bagian Pendidikan */}
                    <h3 className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-6">
                        {t('resume.educationTitle')}
                    </h3>
                    {education.length === 0 ? (
                        <p className="font-mono text-xs text-slate-500 mb-12">No education data available yet.</p>
                    ) : (
                        <div className="space-y-6 max-w-4xl mb-12">
                            {education.map((edu) => (
                                <div
                                    key={edu.id}
                                    className="relative p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0B1021]/90 backdrop-blur-md border border-slate-200 dark:border-space-starlight/20 hover:border-purple-500 dark:hover:border-space-nebula/50 transition-all shadow-xl dark:shadow-[0_0_20px_rgba(56,189,248,0.05)] group overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 dark:from-space-starlight/10 to-transparent rounded-bl-full pointer-events-none"></div>

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-space-starlight transition-colors">
                                            {edu.degree} <span className="text-blue-600 dark:text-space-starlight">@ {edu.institution}</span>
                                        </h3>
                                        <span className="font-mono text-xs text-purple-600 dark:text-space-nebula mt-1 sm:mt-0">
                                            {edu.start_year} - {edu.end_year}
                                        </span>
                                    </div>

                                    {edu.field_of_study && (
                                        <p className="font-mono text-[11px] text-blue-600 dark:text-space-starlight uppercase tracking-widest mb-3">
                                            {edu.field_of_study}
                                        </p>
                                    )}

                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 font-sans leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Bagian Pengalaman */}
                    <h3 className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-6">
                        {t('resume.experienceTitle')}
                    </h3>
                    {experiences.length === 0 ? (
                        <p className="font-mono text-xs text-slate-500">No experience data available yet.</p>
                    ) : (
                        <div className="space-y-6 max-w-4xl">
                            {experiences.map((exp) => (
                                <div
                                    key={exp.id}
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
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </section>
    );
};