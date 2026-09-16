// frontend/src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom'; // Tambahan untuk navigasi aman dari halaman lab

export const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate(); // Tambahan router navigate
    const location = useLocation(); // Tambahan cek lokasi halaman aktif
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Deteksi scroll untuk efek liquid glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Inisialisasi tema dark/light dari dokumen
    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) {
            setDarkMode(true);
        }
    }, []);

    // Fungsi toggle Light/Dark Mode
    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    };

    // Daftar menu navigasi
    const navItems = [
        { id: 'about', label: t('nav.about') },
        { id: 'skills', label: t('nav.skills') },
        { id: 'experience', label: t('nav.experience') },
        { id: 'projects', label: 'PROJEK' },
        { id: 'github', label: t('nav.activity') },
        { id: 'contact', label: t('nav.contact') },
    ];

    // Fungsi penanganan klik menu yang aman dari halaman lab maupun beranda
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);
        setMobileMenuOpen(false);

        if (location.pathname !== '/') {
            // Jika sedang di halaman lab (misal /labs/spk), arahkan dulu ke beranda, lalu scroll ke elemen
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 150);
        } else {
            // Jika sudah di beranda, langsung scroll mulus
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Fungsi klik logo agar bisa kembali ke beranda / atas halaman
    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Fungsi ganti bahasa (ID / EN) yang disesuaikan agar logikanya akurat
    const toggleLanguage = () => {
        const currentLang = i18n.language || 'ID';
        const nextLang = currentLang.startsWith('EN') ? 'ID' : 'EN';
        i18n.changeLanguage(nextLang);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'py-3 bg-[#0B1021]/70 backdrop-blur-xl border-b border-space-starlight/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Logo / Identitas */}
                <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2 group cursor-pointer">
                    <span className="w-2.5 h-2.5 rounded-full bg-space-starlight animate-ping"></span>
                    <span className="font-mono font-bold text-white tracking-wider text-sm sm:text-base group-hover:text-space-starlight transition-colors">
                        // RANGGA IVANO
                    </span>
                </a>

                {/* Liquid Navigation Menu (Desktop) */}
                <nav className="hidden md:flex items-center p-1.5 rounded-full bg-[#050814]/60 backdrop-blur-md border border-space-starlight/20 shadow-[inset_0_0_15px_rgba(56,189,248,0.1)]">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className={`relative px-4 py-2 rounded-full font-mono text-xs transition-all duration-300 ${isActive
                                    ? 'text-space-dark font-bold bg-gradient-to-r from-space-starlight to-space-nebula shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                                    : 'text-slate-300 hover:text-white hover:bg-space-light/20'
                                    }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                {/* Kontrol Kanan (Tombol Bahasa, Tema, & Mobile Menu) */}
                <div className="flex items-center space-x-3">
                    {/* Tombol Terjemahan Bahasa */}
                    <button
                        onClick={toggleLanguage}
                        className="px-3.5 py-2 rounded-full font-mono text-xs font-bold bg-space-light/40 backdrop-blur-md border border-space-starlight/30 text-space-starlight hover:bg-space-starlight hover:text-space-dark transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.2)] active:scale-95"
                        title="Ubah Bahasa / Change Language"
                    >
                        {i18n.language && i18n.language.startsWith('EN') ? 'ID' : 'EN'}
                    </button>

                    {/* Tombol Toggle Light / Dark Theme */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2.5 rounded-full font-mono text-xs bg-space-light/40 backdrop-blur-md border border-space-starlight/30 text-space-starlight hover:bg-space-starlight hover:text-space-dark transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.2)]"
                        title="Ganti Tema Terang/Gelap"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>

                    {/* Tombol Menu Hamburger (Mobile) */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2.5 rounded-xl bg-space-light/40 border border-space-starlight/30 text-space-starlight"
                    >
                        <span className="sr-only">Open Menu</span>
                        ☰
                    </button>
                </div>
            </div>

            {/* Menu Dropdown Mobile (Liquid Drawer) */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B1021]/95 backdrop-blur-2xl border-b border-space-starlight/20 py-4 px-6 shadow-2xl animate-fadeIn">
                    <div className="flex flex-col space-y-3 font-mono text-xs">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => handleNavClick(e, item.id)}
                                className="px-4 py-3 rounded-xl bg-space-light/20 text-slate-200 hover:text-space-starlight hover:bg-space-light/40 transition-all"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};