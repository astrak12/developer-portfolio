// frontend/src/components/labs/DemoShell.tsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from '../Navbar'; // Menggunakan Navbar utama portofolio

export const DemoShell: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#060913] text-slate-900 dark:text-white transition-colors">
            {/* Menggunakan Navbar utama yang konsisten di semua halaman */}
            <Navbar />

            {/* Container Khusus Halaman Labs */}
            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Tombol Navigasi Kembali ke Portofolio */}
                <div className="mb-6 flex items-center justify-between">
                    <Link
                        to="/"
                        className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        ← Kembali ke Portofolio Utama
                    </Link>
                </div>

                {/* Tempat di mana komponen Lab (seperti SpkLab) akan dirender */}
                <Outlet />
            </div>
        </div>
    );
};