// frontend/src/components/labs/DemoShell.tsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const DemoShell: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#060913] text-slate-900 dark:text-white font-sans transition-colors duration-300">
            {/* Header Demo */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B1021]/80 backdrop-blur-md border-b border-slate-200 dark:border-space-starlight/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Tombol Back & Title */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate('/')}
                            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-space-starlight/10 transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center"
                        >
                            <span className="mr-2">←</span> Back to Portfolio
                        </button>
                        <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block"></div>
                        <h1 className="font-bold text-lg hidden sm:block">Interactive Labs</h1>
                    </div>

                    {/* Demo Badge & GitHub Link */}
                    <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-xs font-mono rounded-full border border-amber-200 dark:border-amber-700/50 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mr-2"></span>
                            Demo Data Only
                        </span>
                    </div>
                </div>
            </header>

            {/* Konten Utama Demo (Akan dirender di sini berdasarkan URL) */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};