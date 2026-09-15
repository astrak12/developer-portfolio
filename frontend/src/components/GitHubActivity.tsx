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
    const githubUsername = 'astrak12'; // Username GitHub Anda

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

    return (
        /* Diubah dari id="github-activity" menjadi id="github" agar sinkron dengan Navbar */
        <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-4 mb-12">
                <span className="font-mono text-accent text-xs font-semibold uppercase tracking-wider">05 — {t('github.title')}</span>
                <h2 className="text-3xl font-bold font-sans text-slate-900 dark:text-white">{t('github.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                    @{githubUsername.toUpperCase()} — {t('github.subtitle')}
                </p>
            </div>

            {/* Baris Statistik Ringkas (Kartu Atas) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-major p-6 shadow-subtle">
                    <div className="font-mono text-xs text-slate-500 uppercase mb-1">Repositori Publik</div>
                    <div className="text-3xl font-bold font-sans text-slate-900 dark:text-white">
                        {repos.length}+
                    </div>
                </div>
                <div className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-major p-6 shadow-subtle">
                    <div className="font-mono text-xs text-slate-500 uppercase mb-1">Status Kontribusi</div>
                    <div className="text-3xl font-bold font-sans text-accent">
                        Active Stream
                    </div>
                </div>
                <div className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-major p-6 shadow-subtle">
                    <div className="font-mono text-xs text-slate-500 uppercase mb-1">Platform</div>
                    <div className="text-3xl font-bold font-sans text-slate-900 dark:text-white">
                        GitHub API
                    </div>
                </div>
            </div>

            {/* Kotak Heatmap Kontribusi Asli dari GitHub */}
            <div className="bg-surface dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-major p-8 shadow-subtle mb-12 overflow-x-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                        Contribution Heatmap
                    </h3>
                    <a
                        href={`https://github.com/${githubUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-accent hover:underline flex items-center space-x-1"
                    >
                        <span>Lihat Profil ↗</span>
                    </a>
                </div>

                {/* Menampilkan Grafik Kontribusi Nyata Berbasis SVG dari ghchart */}
                <div className="flex justify-center py-4 overflow-x-auto w-full">
                    <img
                        src={`https://ghchart.rshah.org/${githubUsername}`}
                        alt={`Grafik Kontribusi GitHub ${githubUsername}`}
                        className="w-full max-w-4xl opacity-90 dark:invert transition-opacity duration-300"
                    />
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