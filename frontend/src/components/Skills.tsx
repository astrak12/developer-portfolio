// frontend/src/components/Skills.tsx
import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getSkills } from '../services/api';

interface SkillItem {
    id: number;
    name: string;
    category: string;
    proficiency_label: string;
    years_experience: number | null;
    is_featured: boolean;
}

export const Skills: React.FC = () => {
    const { t } = useTranslation();

    // State untuk data skill dari API + status loading/error
    const [skills, setSkills] = useState<SkillItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Ambil data skill dari backend (GET /api/skills)
        getSkills()
            .then((res) => {
                const payload = res.data;
                const items = Array.isArray(payload) ? payload : payload?.data ?? [];
                setSkills(items);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal mengambil data skills:", err);
                setError(true);
                setLoading(false);
            });
    }, []);

    // Kelompokkan skill berdasarkan kolom category dari backend
    const skillCategories = useMemo(() => {
        const grouped = new Map<string, string[]>();
        skills.forEach((skill) => {
            const category = skill.category || 'General';
            if (!grouped.has(category)) {
                grouped.set(category, []);
            }
            grouped.get(category)!.push(skill.name);
        });
        return Array.from(grouped, ([title, skills]) => ({ title, skills }));
    }, [skills]);

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

            {/* Status Loading */}
            {loading && (
                <p className="text-center font-mono text-xs text-slate-500">Syncing skill telemetry...</p>
            )}

            {/* Status Error — fallback rapi, aplikasi tetap berjalan */}
            {!loading && error && (
                <p className="text-center font-mono text-xs text-red-500">
                    Failed to load skills from API. Make sure the backend is running.
                </p>
            )}

            {/* Fallback Kosong */}
            {!loading && !error && skillCategories.length === 0 && (
                <p className="text-center font-mono text-xs text-slate-500">
                    No skill data available yet.
                </p>
            )}

            {/* Grid Kartu Kategori (data dari API) */}
            {!loading && !error && skillCategories.length > 0 && (
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
            )}
        </section>
    );
};