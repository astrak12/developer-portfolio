// frontend/src/components/Contact.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Impor i18next
import { sendContactMessage } from '../services/api'; // Fungsi API untuk menyimpan pesan ke backend

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type SendStatus = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export const Contact: React.FC = () => {
    const { t } = useTranslation(); // Panggil hook

    // State untuk input form (name, email, subject, message)
    const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
    // State untuk status pengiriman (loading, success, error)
    const [status, setStatus] = useState<SendStatus>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Kirim data form ke endpoint POST /api/contact melalui services/api.ts
            await sendContactMessage(form);
            setStatus('success');
            setForm(EMPTY_FORM); // Reset form setelah berhasil
        } catch (err) {
            console.error("Gagal mengirim pesan:", err);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {/* Judul Bagian */}
            <div className="mb-12 text-center">
                <h3 className="font-mono text-xs text-space-starlight tracking-widest uppercase mb-2">
                    {t('contact.subtitle')}
                </h3>
                <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white mb-3">
                    {t('contact.title')}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
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

            {/* Formulir Kontak — Terhubung ke API Backend (POST /api/contact) */}
            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0B1021]/80 backdrop-blur-md border border-space-starlight/20 shadow-[0_0_15px_rgba(56,189,248,0.05)]"
            >
                <h3 className="font-mono text-xs text-space-starlight tracking-widest uppercase mb-1">
                    // {t('contactForm.title')}
                </h3>
                <p className="font-mono text-xs text-slate-400 mb-6">
                    {t('contactForm.desc')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="contact-name" className="block font-mono text-[10px] uppercase tracking-wider text-space-starlight mb-1.5">
                            {t('contactForm.nameLabel')}
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder={t('contactForm.namePlaceholder')}
                            className="w-full px-4 py-2.5 rounded-lg bg-space-light/40 border border-space-starlight/30 text-white placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-space-starlight focus:ring-1 focus:ring-space-starlight/40 transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-email" className="block font-mono text-[10px] uppercase tracking-wider text-space-starlight mb-1.5">
                            {t('contactForm.emailLabel')}
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder={t('contactForm.emailPlaceholder')}
                            className="w-full px-4 py-2.5 rounded-lg bg-space-light/40 border border-space-starlight/30 text-white placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-space-starlight focus:ring-1 focus:ring-space-starlight/40 transition-colors"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="contact-subject" className="block font-mono text-[10px] uppercase tracking-wider text-space-starlight mb-1.5">
                        {t('contactForm.subjectLabel')}
                    </label>
                    <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder={t('contactForm.subjectPlaceholder')}
                        className="w-full px-4 py-2.5 rounded-lg bg-space-light/40 border border-space-starlight/30 text-white placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-space-starlight focus:ring-1 focus:ring-space-starlight/40 transition-colors"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="contact-message" className="block font-mono text-[10px] uppercase tracking-wider text-space-starlight mb-1.5">
                        {t('contactForm.messageLabel')}
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder={t('contactForm.messagePlaceholder')}
                        className="w-full px-4 py-3 rounded-lg bg-space-light/40 border border-space-starlight/30 text-white placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-space-starlight focus:ring-1 focus:ring-space-starlight/40 transition-colors resize-y"
                    />
                </div>

                {/* Tombol Kirim + Status Pengiriman */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="py-3 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-space-starlight dark:to-space-nebula text-white dark:text-space-dark font-mono text-xs font-bold hover:opacity-90 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? t('contactForm.sending') : t('contactForm.submit')}
                    </button>

                    {status === 'success' && (
                        <p role="status" className="font-mono text-xs text-emerald-400">
                            {t('contactForm.success')}
                        </p>
                    )}
                    {status === 'error' && (
                        <p role="alert" className="font-mono text-xs text-red-400">
                            {t('contactForm.error')}
                        </p>
                    )}
                </div>
            </form>

            {/* Status Lokasi & Ketersediaan */}
            <div className="text-center space-y-2 font-mono text-xs text-slate-600 dark:text-slate-400 mt-10">
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