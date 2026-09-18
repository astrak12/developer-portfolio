// frontend/src/components/About.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
    const { t } = useTranslation();
    const [scrollVelocity, setScrollVelocity] = useState<number>(0);

    // Efek Velocity Scroll ringan yang diisolasi khusus untuk section About
    useEffect(() => {
        let lastScrollTop = window.pageYOffset;
        let ticking = false;

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;
            const delta = currentScrollTop - lastScrollTop;

            // Batasi nilai velocity agar tidak berlebihan dan nonaktifkan di layar kecil (mobile)
            if (window.innerWidth > 768) {
                const clampedVelocity = Math.max(Math.min(delta * 0.15, 15), -15);
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

    return (
        <section
            id="about"
            className="relative z-20 px-4 sm:px-6 lg:px-8 py-16 -mt-12 sm:-mt-20 transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${scrollVelocity}px)` }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Kontainer Utama dengan Efek Overlapping & Glassmorphism */}
                <div className="bg-white/90 dark:bg-[#0B1021]/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-space-starlight/20 transition-colors">

                    <div className="flex items-center space-x-3 mb-6">
                        <span className="h-2 w-8 bg-emerald-500 rounded-full"></span>
                        <h2 className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                            {t('about.title')}
                        </h2>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        {t('about.greeting')}
                    </h3>

                    <p className="text-emerald-700 dark:text-emerald-300 font-mono text-sm mb-6">
                        {t('about.role')}
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
                        {t('about.desc')}
                    </p>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-4 items-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs font-mono rounded-xl transition-colors shadow-sm"
                        >
                            <span>{t('about.downloadBtn')}</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};