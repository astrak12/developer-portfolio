// frontend/src/components/GitHubActivity.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getGitHubRepos } from '../services/api';

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
}

export const GitHubActivity: React.FC = () => {
    const { t } = useTranslation();
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear()); // State tahun aktif untuk tombol filter
    const githubUsername = 'astrak12'; // Username GitHub Anda tetap dipertahankan

    useEffect(() => {
        getGitHubRepos()
            .then((res) => {
                const data = res.data;
                setRepos(Array.isArray(data) ? data : data.repos || data.data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Gagal mengambil data GitHub:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="py-10 text-center font-mono text-slate-500">Syncing GitHub telemetry...</div>;
    }

    const availableYears = [2026, 2025, 2024, 2023, 2022];

    return (
        <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-4 mb-12">
                <span className="font-mono text-accent text-xs font-semibold uppercase tracking-wider">05 — {t('github.title')}</span>
                <h2 className="text-3xl font-bold font-sans text-slate-900 dark:text-white">{t('github.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                    @{githubUsername.toUpperCase()} — {t('github.subtitle')}
                </p>
            </div>

            {/* Baris Statistik Ringkas (Kartu Atas - Disesuaikan mirip referensi) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-major p-6 shadow-subtle flex flex-col justify-between">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400 font-bold">📦</span>
                        <span className="font-mono text-xs text-slate-500 uppercase">Repositori Publik</span>
                    </div>
                    <div className="text-3xl font-bold font-sans text-slate-900 dark:text-white">
                        {repos.length}+ <span className="text-xs font-mono font-normal text-slate-500">Repositori dibuat</span>
                    </div>
                </div>

                <div className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-major p-6 shadow-subtle flex flex-col justify-between">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="p-2 rounded-lg bg-purple-500/10 text-purple-400 font-bold">🌿</span>
                        <span className="font-mono text-xs text-slate-500 uppercase">Kontribusi</span>
                    </div>
                    <div className="text-3xl font-bold font-sans text-accent">
                        Active <span className="text-xs font-mono font-normal text-slate-500 block">Repositori kontribusi aktif</span>
                    </div>
                </div>

                <div className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-major p-6 shadow-subtle flex flex-col justify-between">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="p-2 rounded-lg bg-green-500/10 text-green-400 font-bold">⚡</span>
                        <span className="font-mono text-xs text-slate-500 uppercase">Platform Telemetri</span>
                    </div>
                    <div className="text-3xl font-bold font-sans text-slate-900 dark:text-white">
                        GitHub API <span className="text-xs font-mono font-normal text-slate-500 block">Real-time sync</span>
                    </div>
                </div>
            </div>

            {/* Kotak Heatmap Kontribusi dengan Filter Tahun & Legenda */}
            <div className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-major p-8 shadow-subtle mb-12 overflow-x-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div>
                        <h3 className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                            Contribution Heatmap ({selectedYear})
                        </h3>
                    </div>

                    {/* Tombol Filter Tahun */}
                    <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                        {availableYears.map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`px-3 py-1 rounded-md font-mono text-xs font-bold transition-all ${selectedYear === year
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <a
                        href={`https://github.com/${githubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-accent hover:underline flex items-center space-x-1"
                    >
                        <span>Lihat Profil ↗</span>
                    </a>
                </div>

                {/* Grafik Kontribusi Nyata Berbasis SVG dari ghchart */}
                <div className="flex justify-center py-4 overflow-x-auto w-full">
                    <img
                        key={selectedYear}
                        src={`https://ghchart.rshah.org/${githubUsername}`}
                        alt={`Grafik Kontribusi GitHub ${githubUsername}`}
                        className="w-full max-w-4xl opacity-90 dark:invert transition-opacity duration-300"
                    />
                </div>

                {/* Legenda Bawah (Sedikit ke Banyak) */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-xs font-mono text-slate-500">
                    <span>Aktivitas Publik & Repositori</span>
                    <div className="flex items-center space-x-2">
                        <span>Sedikit</span>
                        <div className="flex space-x-1">
                            <span className="w-3 h-3 rounded-sm bg-slate-200 dark:bg-slate-800"></span>
                            <span className="w-3 h-3 rounded-sm bg-blue-300 dark:bg-blue-900"></span>
                            <span className="w-3 h-3 rounded-sm bg-blue-500 dark:bg-blue-600"></span>
                            <span className="w-3 h-3 rounded-sm bg-blue-700 dark:bg-blue-400"></span>
                        </div>
                        <span>Banyak</span>
                    </div>
                </div>
            </div>

            {/* Grid Repositori Unggulan */}
            <div className="space-y-6">
                <h3 className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Pinned Repositories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-subtle hover:border-accent transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-mono text-xs text-accent font-semibold group-hover:underline truncate max-w-[180px]">
                                        {repo.name}
                                    </span>
                                    <span className="font-mono text-[10px] bg-surface-code dark:bg-surface-code-dark px-2 py-0.5 rounded text-slate-500">
                                        {repo.language || 'Code'}
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                                    {repo.description || 'No description provided.'}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 font-mono text-[11px] text-slate-500">
                                <div className="flex items-center space-x-3">
                                    <span>⭐ {repo.stargazers_count}</span>
                                    <span>🔀 {repo.forks_count}</span>
                                </div>
                                <span className="text-accent">View ↗</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};