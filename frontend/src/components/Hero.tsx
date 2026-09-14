// frontend/src/components/Hero.tsx
import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[75vh] text-center overflow-visible">

            {/* Badge Selamat Datang */}
            <div className="mb-8 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-space-light/50 backdrop-blur-md border border-space-starlight/30 shadow-[0_0_15px_rgba(56,189,248,0.2)] font-mono text-xs text-space-starlight animate-float" style={{ animationDelay: '0s' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-space-starlight animate-pulse shadow-[0_0_8px_#38BDF8]"></span>
                <span>Welcome to Rangga Ivano Portal</span>
            </div>

            {/* Nama Utama yang Menonjol */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-white max-w-4xl leading-[1.1] mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                Rangga Ivano
            </h1>

            {/* Deskripsi Singkat */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-sans leading-relaxed mb-10">
                Informatics Engineering Student &amp; Software Developer specializing in React and Laravel ecosystem.
            </p>

            {/* Tombol Aksi Tunggal */}
            <div className="flex flex-wrap items-center justify-center font-mono text-xs">
                <a
                    href="#projects"
                    className="relative px-8 py-4 bg-space-starlight text-space-dark font-bold rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] group hover:-translate-y-1"
                >
                    <span>Initiate Launch 🚀</span>
                </a>
            </div>

            {/* Elemen Hiasan Orbit Melayang */}
            <div className="absolute top-[10%] right-[5%] w-32 h-32 rounded-full border border-space-nebula/30 animate-float shadow-[0_0_50px_rgba(139,92,246,0.1)]" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-[20%] left-[5%] w-16 h-16 rounded-full border border-space-meteor/30 animate-float" style={{ animationDelay: '2.5s' }}></div>

        </section>
    );
};