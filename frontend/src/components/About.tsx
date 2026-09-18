// frontend/src/components/About.tsx
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null); // Menggunakan useRef untuk performa tinggi

    // Efek Velocity Scroll langsung ke DOM (Bypass React Re-render)
    useEffect(() => {
        let lastScrollTop = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (!sectionRef.current) return;

            const currentScrollTop = window.scrollY;
            const delta = currentScrollTop - lastScrollTop;

            // Batasi nilai velocity dan jalankan hanya di desktop
            if (window.innerWidth > 768) {
                // Manipulasi style secara langsung (Sangat ringan dan smooth)
                const clampedVelocity = Math.max(Math.min(delta * 0.2, 20), -20);
                sectionRef.current.style.transform = `translateY(${clampedVelocity}px)`;
            } else {
                sectionRef.current.style.transform = `translateY(0px)`;
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

        // Cleanup dan reset posisi saat komponen dilepas
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (sectionRef.current) sectionRef.current.style.transform = `translateY(0px)`;
        };
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            // Overlapping lebih agresif (-mt-24 dan -mt-32) & Akselerasi GPU (will-change-transform)
            className="relative z-20 px-4 sm:px-6 lg:px-8 py-16 -mt-24 sm:-mt-32 transition-transform duration-150 ease-out will-change-transform"
        >
            <div className="max-w-4xl mx-auto">
                {/* Efek kartu melayang ditingkatkan: backdrop-blur-xl dan shadow-2xl */}
                <div className="bg-white/80 dark:bg-[#0B1021]/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200/50 dark:border-space-starlight/40 transition-colors">

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