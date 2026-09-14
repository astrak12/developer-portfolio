// frontend/src/components/Contact.tsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Impor i18next

export const Contact: React.FC = () => {
    const { t } = useTranslation(); // Panggil hook

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {/* Judul Bagian */}
            <div className="mb-12 text-center">
                <h3 className="font-mono text-xs text-space-starlight tracking-widest uppercase mb-2">
                    {t('contact.subtitle')}
                </h3>
                <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white mb-3">
                    {t('contact.title')}
                </h2>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                    {t('contact.desc')}
                </p>
            </div>

            {/* Kartu Informasi Kontak Langsung */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">

                {/* Direct Email */}
                <a
                    href="mailto:ranggaivano321@gmail.com"
                    className="p-6 rounded-xl bg-[#0B1021]/80 backdrop-blur-md border border-space-starlight/20 hover:border-space-starlight/60 transition-all group flex flex-col justify-between shadow-[0_0_15px_rgba(56,189,248,0.05)] hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
                >
                    <div>
                        <span className="font-mono text-[10px] text-space-starlight tracking-wider block mb-2 uppercase">
                            {t('contact.emailLabel')}
                        </span>
                        <span className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-space-starlight transition-colors">
                            ranggaivano321@gmail.com
                        </span>
                    </div>
                    <div className="mt-4 font-mono text-xs text-slate-400 flex items-center space-x-1">
                        <span>{t('contact.emailAction')}</span>
                        <span>→</span>
                    </div>
                </a>

                {/* GitHub Profile */}
                <a
                    href="https://github.com/astrak12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-xl bg-[#0B1021]/80 backdrop-blur-md border border-space-starlight/20 hover:border-space-nebula/60 transition-all group flex flex-col justify-between shadow-[0_0_15px_rgba(139,92,246,0.05)] hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
                >
                    <div>
                        <span className="font-mono text-[10px] text-space-nebula tracking-wider block mb-2 uppercase">
                            {t('contact.githubLabel')}
                        </span>
                        <span className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-space-nebula transition-colors">
                            github.com/astrak12 ↗
                        </span>
                    </div>
                    <div className="mt-4 font-mono text-xs text-slate-400 flex items-center space-x-1">
                        <span>{t('contact.githubAction')}</span>
                        <span>→</span>
                    </div>
                </a>

            </div>

            {/* Status Lokasi & Ketersediaan */}
            <div className="text-center space-y-2 font-mono text-xs text-slate-400">
                <div className="flex items-center justify-center space-x-2">
                    <span className="text-red-400">📍</span>
                    <span>{t('contact.location')}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-space-starlight animate-pulse"></span>
                    <span className="text-space-starlight">{t('contact.availability')}</span>
                </div>
            </div>

        </section>
    );
};