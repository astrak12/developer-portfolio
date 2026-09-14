// frontend/src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    ID: {
        translation: {
            nav: {
                about: "TENTANG",
                skills: "KEAHLIAN",
                education: "PENDIDIKAN",
                experience: "PENGALAMAN",
                activity: "AKTIVITAS",
                contact: "KONTAK",
            },
            hero: {
                badge: "Sistem Telemetri Astro Online",
                titleMain: "Menavigasi kosmos dari",
                titleGradient: "arsitektur web modern.",
                desc: "Halo, saya Rangga Ivano. Mengukir kode di luasnya ruang angkasa digital menggunakan ekosistem React dan Laravel.",
                btnExplore: "Mulai Jelajah 🚀",
                btnContact: "Buka Saluran Komunikasi",
            },
            about: {
                title: "TENTANG SAYA",
                subtitle: "Mengenal lebih dekat latar belakang dan filosofi rekayasa perangkat lunak.",
            },
            skills: {
                title: "KEAHLIAN TEKNIS",
                subtitle: "Teknologi dan kerangka kerja yang digunakan dalam pengembangan sistem.",
            },
            resume: {
                educationTitle: "PENDIDIKAN",
                experienceTitle: "PENGALAMAN",
            },
            projects: {
                title: "PROJEK UNGGULAN",
                subtitle: "Daftar sistem dan aplikasi web yang telah dikembangkan.",
                demoBtn: "Demo Langsung",
                codeBtn: "Kode Sumber",
            },
            github: {
                title: "AKTIVITAS GITHUB",
                subtitle: "Rekam jejak kontribusi dan repositori publik terbaru.",
            },
            contact: {
                title: "KONTAK & TRANSMISI",
                subtitle: "Kirimkan pesan atau pertanyaan melalui saluran telemetri di bawah.",
                nameLabel: "Nama Anda",
                emailLabel: "Alamat Email",
                subjectLabel: "Subjek",
                messageLabel: "Pesan",
                sendBtn: "Kirim Transmisi",
                successMsg: "Pesan berhasil dikirim ke sistem!",
            }
        }
    },
    EN: {
        translation: {
            nav: {
                about: "ABOUT",
                skills: "SKILLS",
                education: "EDUCATION",
                experience: "EXPERIENCE",
                activity: "ACTIVITY",
                contact: "CONTACT",
            },
            hero: {
                badge: "Astro-Telemetry System Online",
                titleMain: "Navigating the cosmos of",
                titleGradient: "modern web architecture.",
                desc: "Hello, I'm Rangga Ivano. Crafting code in the vast digital cosmos using the React and Laravel ecosystem.",
                btnExplore: "Initiate Launch 🚀",
                btnContact: "Open Comm Channel",
            },
            about: {
                title: "ABOUT ME",
                subtitle: "Getting closer to background and software engineering philosophy.",
            },
            skills: {
                title: "TECHNICAL SKILLS",
                subtitle: "Technologies and frameworks utilized in system development.",
            },
            resume: {
                educationTitle: "EDUCATION",
                experienceTitle: "EXPERIENCE",
            },
            projects: {
                title: "FEATURED PROJECTS",
                subtitle: "List of developed web systems and applications.",
                demoBtn: "Live Demo",
                codeBtn: "Source Code",
            },
            github: {
                title: "GITHUB ACTIVITY",
                subtitle: "Recent contribution track record and public repositories.",
            },
            contact: {
                title: "CONTACT & TRANSMISSION",
                subtitle: "Send a message or inquiry through the telemetry channel below.",
                nameLabel: "Your Name",
                emailLabel: "Email Address",
                subjectLabel: "Subject",
                messageLabel: "Message",
                sendBtn: "Transmit Message",
                successMsg: "Message successfully transmitted to system!",
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ID",
        fallbackLng: "ID",
        interpolation: { escapeValue: false }
    });

export default i18n;