// frontend/src/components/Skills.tsx
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Skills: React.FC = () => {
    const { t } = useTranslation();
    const [scrollVelocity, setScrollVelocity] = useState<number>(0);

    // Efek Velocity Scroll sangat lembut yang diisolasi khusus untuk section Skills
    useEffect(() => {
        let lastScrollTop = window.pageYOffset;
        let ticking = false;

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;
            const delta = currentScrollTop - lastScrollTop;

            // Batasi nilai velocity dengan multiplier kecil dan nonaktifkan di layar kecil (mobile)
            if (window.innerWidth > 768) {
                // Multiplier 0.08 untuk pergerakan yang sangat subtle/lembut pada deretan skill
                const clampedVelocity = Math.max(Math.min(delta * 0.08, 8), -8);
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

    // Daftar Keahlian Statis
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React.js", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"]
        },
        {
            title: "Backend Development",
            skills: ["PHP", "Laravel", "Python"]
        },
        {
            title: "Database & Tools",
            skills: ["MySQL", "SQLite", "Git / GitHub", "VS Code", "OpenCV"]
        },
        {
            title: "Other Concepts",
            skills: ["Artificial Intelligence", "Decision Support System (SAW, TOPSIS)"]
        }
    ];

    return (
        <section
            id="skills"
            className="relative z-25 px-4 sm:px-6 lg:px-8 py-16 -mt-8 sm:-mt-12 transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${scrollVelocity}px)` }}
        >
            <div className="max-w-4xl mx-auto">
                <div className="bg-slate-50/90 dark:bg-[#060913]/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 dark:border-space-starlight/10 transition-colors">

                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            {t('skills.title')}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg mx-auto">
                            {t('skills.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1.5 bg-white dark:bg-space-starlight/5 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-mono font-medium shadow-sm border border-slate-200 dark:border-space-starlight/20 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};