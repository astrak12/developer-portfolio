// frontend/src/components/ScrollToTop.tsx
import React, { useEffect, useState } from 'react';

export const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="fixed bottom-8 right-6 z-50 w-10 h-10 rounded-full bg-accent text-space-dark flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};
