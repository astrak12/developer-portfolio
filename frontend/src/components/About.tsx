// frontend/src/components/About.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
    const { t } = useTranslation();

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Resume_Rangga_Ivano.pdf';
        link.download = 'Resume_Rangga_Ivano.pdf';
        link.click();
    };

    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Judul Bagian */}
            <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-wider flex items-center space-x-2">
                    <span className="text-blue-600 dark:text-space-starlight">//</span>
                    <span>01. {t('about.title')}</span>
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 dark:from-space-starlight to-transparent mt-3"></div>
            </div>

            {/* Kotak Kartu Utama dengan Warna Adaptif */}
            <div className="relative p-8 sm:p-10 rounded-2xl bg-white/80 dark:bg-[#0B1021]/90 backdrop-blur-md border border-slate-200 dark:border-space-starlight/20 shadow-xl dark:shadow-[0_0_25px_rgba(56,189,248,0.05)] overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 dark:from-space-starlight/10 to-transparent rounded-bl-full pointer-events-none"></div>

                <div className="max-w-3xl">
                    <span className="font-mono text-xs text-blue-600 dark:text-space-starlight uppercase tracking-widest block mb-2">
                        // PROFILE SYSTEM
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900 dark:text-white mb-3">
                        {t('about.greeting')}
                    </h3>
                    <p className="font-mono text-xs text-purple-600 dark:text-space-nebula uppercase tracking-wider mb-6">
                        {t('about.role')}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-sans leading-relaxed mb-8">
                        {t('about.desc')}
                    </p>

                    <button
                        onClick={handleDownloadResume}
                        className="py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula text-white dark:text-space-dark font-mono text-xs font-bold hover:opacity-90 transition-all shadow-lg dark:shadow-[0_0_15px_rgba(56,189,248,0.3)] inline-flex items-center space-x-2"
                    >
                        <span>{t('about.downloadBtn')}</span>
                    </button>
                </div>
            </div>
        </section>
    );
};