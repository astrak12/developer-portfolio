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
                badge: "Welcome to Rangga Ivano Portal",
                btnExplore: "Mulai Jelajah 🚀",
            },
            about: {
                title: "TENTANG SAYA",
                greeting: "Hi, I'm Rangga Ivano.",
                role: "Informatics Engineering Student & Aspiring Software Engineer",
                desc: "Saya membangun aplikasi web dan sistem digital dengan fokus pada solusi yang fungsional, scalable, dan user-friendly. Saat ini saya terus mengembangkan kemampuan dalam software engineering, modern web development, dan Artificial Intelligence melalui berbagai proyek dan eksperimen teknologi.",
                downloadBtn: "Unduh Resume 📄"
            },
            skills: {
                title: "KEAHLIAN TEKNIS",
                subtitle: "Teknologi dan kerangka kerja yang digunakan dalam pengembangan sistem.",
            },
            resume: {
                educationTitle: "PENDIDIKAN",
                experienceTitle: "PENGALAMAN",
            },
            experience: {
                title: "PENGALAMAN & PROJEK",
                subtitle: "Rekam jejak pengalaman akademik, organisasi, dan pengembangan sistem.",
                items: [
                    {
                        role: "Pengembang Web (Proyek Akademik)",
                        company: "Bank Sampah Japos Bersih",
                        period: "Agustus 2025 - November 2025",
                        desc: "Merancang dan mengembangkan website Sistem Informasi untuk Bank Sampah Japos Bersih dari tahap awal hingga selesai menggunakan PHP dan HTML.",
                        points: [
                            "Menerjemahkan kebutuhan operasional bank sampah menjadi fitur website fungsional untuk pencatatan dan pengelolaan data.",
                            "Memastikan website memiliki antarmuka yang mudah digunakan oleh para pengurus bank sampah."
                        ]
                    },
                    {
                        role: "Fasilitator / Pemateri Edukasi",
                        company: "SMPN 2 Kelapa Dua, Tangerang",
                        period: "14 November 2024",
                        desc: "Mengadakan dan memimpin sesi penyuluhan mengenai pengenalan Kecerdasan Buatan (AI) kepada siswa/i SMP.",
                        points: [
                            "Menyederhanakan konsep teknologi AI yang kompleks menjadi materi yang menarik dan mudah dipahami pelajar.",
                            "Membangun interaksi positif melalui sesi tanya jawab dan berkolaborasi dengan pihak sekolah."
                        ]
                    },
                    {
                        role: "Ketua Karang Taruna",
                        company: "Japos RW 09",
                        period: "September 2022 - November 2025",
                        desc: "Memimpin organisasi pemuda, merencanakan kegiatan sosial, dan mengelola administrasi serta pendanaan.",
                        points: [
                            "Menyusun proposal kegiatan menggunakan Microsoft Word untuk diajukan kepada perangkat desa dan donatur.",
                            "Merancang Rencana Anggaran Biaya (RAB) acara secara detail menggunakan Microsoft Excel."
                        ]
                    }
                ]
            },
            projects: {
                title: "PROJEK UNGGULAN",
                subtitle: "Daftar sistem, aplikasi web, dan eksperimen teknologi yang telah dikembangkan.",
                demoBtn: "Demo Langsung",
                codeBtn: "Kode Sumber",
                items: [
                    {
                        title: "SPK Bank Sampah Japos",
                        subtitle: "SISTEM PENDUKUNG KEPUTUSAN",
                        desc: "Sistem penunjang keputusan untuk menentukan pengepul terbaik di Bank Sampah Japos Bersih menggunakan metode SAW dan TOPSIS dengan kontrol akses multi-role.",
                        tech: ["Laravel", "PHP", "Tailwind CSS", "SQLite"],
                        githubUrl: "https://github.com/astrak12",
                        demoUrl: "#"
                    },
                    {
                        title: "Sistem Informasi Bank Sampah Japos",
                        subtitle: "PLATFORM MANAJEMEN OPERASIONAL",
                        desc: "Website sistem informasi operasional untuk Bank Sampah Japos Bersih guna mempermudah pencatatan, pengelolaan data nasabah, dan pelaporan sampah.",
                        tech: ["PHP", "HTML", "Tailwind CSS", "MySQL"],
                        githubUrl: "https://github.com/astrak12",
                        demoUrl: "#"
                    },
                    {
                        title: "Alhijaz Landing Page",
                        subtitle: "WEB TRAVEL HAJI & UMROH",
                        desc: "Website landing page profesional untuk layanan perjalanan haji plus dan umroh dengan informasi paket yang interaktif, elegan, dan responsif.",
                        tech: ["React", "Tailwind CSS", "Vite"],
                        githubUrl: "https://github.com/astrak12",
                        demoUrl: "https://alhijazindonesia.com/haji-plus"
                    },
                    {
                        title: "Object Detection & Notification",
                        subtitle: "COMPUTER VISION SYSTEM",
                        desc: "Sistem deteksi objek berbasis pemrosesan data cerdas yang dilengkapi fitur analitik dan sistem notifikasi otomatis menggunakan pustaka Pandas.",
                        tech: ["Python", "Pandas", "OpenCV", "AI Model"],
                        githubUrl: "https://github.com/astrak12",
                        demoUrl: "#"
                    }
                ]
            },
            github: {
                title: "AKTIVITAS GITHUB",
                subtitle: "Rekam jejak kontribusi dan repositori publik terbaru.",
            },
            contact: {
                subtitle: "06 — KONTAK & TRANSMISI",
                title: "Mari Terhubung",
                desc: "Silakan hubungi saya melalui saluran telemetri di bawah untuk kolaborasi proyek atau kesempatan berkarir.",
                emailLabel: "// Email Langsung",
                emailAction: "Kirim Pesan Email",
                githubLabel: "// Profil GitHub",
                githubAction: "Jelajahi Repositori",
                location: "Tangerang Selatan, Indonesia",
                availability: "Tersedia untuk proyek full-stack & magang"
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
                badge: "Welcome to Rangga Ivano Portal",
                btnExplore: "Initiate Launch 🚀",
            },
            about: {
                title: "ABOUT ME",
                greeting: "Hi, I'm Rangga Ivano.",
                role: "Informatics Engineering Student & Aspiring Software Engineer",
                desc: "I build web applications and digital systems with a focus on functional, scalable, and user-friendly solutions. I am continuously developing my skills in software engineering, modern web development, and Artificial Intelligence through various projects and technology experiments.",
                downloadBtn: "Download Resume 📄"
            },
            skills: {
                title: "TECHNICAL SKILLS",
                subtitle: "Technologies and frameworks utilized in system development.",
            },
            resume: {
                educationTitle: "EDUCATION",
                experienceTitle: "EXPERIENCE",
            },
            experience: {
                title: "EXPERIENCE & PROJECTS",
                subtitle: "Track record of academic experience, organization, and system development.",
                items: [
                    {
                        role: "Web Developer (Academic Project)",
                        company: "Bank Sampah Japos Bersih",
                        period: "August 2025 - November 2025",
                        desc: "Designed and developed an Information System website for Bank Sampah Japos Bersih from scratch using PHP and HTML.",
                        points: [
                            "Translated operational waste bank needs into functional website features for data recording and management.",
                            "Ensured the website features a user-friendly interface for waste bank administrators."
                        ]
                    },
                    {
                        role: "Educational Facilitator / Speaker",
                        company: "SMPN 2 Kelapa Dua, Tangerang",
                        period: "November 14, 2024",
                        desc: "Organized and led an introductory counseling session on Artificial Intelligence (AI) for middle school students.",
                        points: [
                            "Simplified complex AI technology concepts into engaging and digestible material for students.",
                            "Built positive interaction through Q&A sessions and collaborated with school management."
                        ]
                    },
                    {
                        role: "Head of Youth Organization (Karang Taruna)",
                        company: "Japos RW 09",
                        period: "September 2022 - November 2025",
                        desc: "Led youth organization, planned social activities, and managed administrative duties and funding.",
                        points: [
                            "Drafted activity proposals using Microsoft Word to secure approval and funding from local authorities and donors.",
                            "Designed detailed event Budget Plans (RAB) using Microsoft Excel."
                        ]
                    }
                ]
            },
            projects: {
                title: "FEATURED PROJECTS",
                subtitle: "List of systems, web applications, and technology experiments developed.",
                demoBtn: "Live Demo",
                codeBtn: "Source Code",
                items: [
                    {
                        title: "SPK Bank Sampah Japos",
                        subtitle: "DECISION SUPPORT SYSTEM",
                        desc: "A decision support system to determine the best collector in Japos Bersih Waste Bank using SAW and TOPSIS methods with multi-role access control.",
                        tech: ["Laravel", "PHP", "Tailwind CSS", "SQLite"],
                        githubUrl: "https://github.com/astrak12",
                        demoUrl: "#"
                    },
                    {
                        title: "Japos Waste Bank Info System",
                        subtitle: "OPERATIONAL MANAGEMENT PLATFORM",
                        desc: "An operational information system website for Japos Bersih Waste Bank to streamline data recording, customer management, and waste reporting.",
                        tech: ["PHP", "HTML", "Tailwind CSS", "MySQL"],
                        githubUrl: "https://github.com/astrak12",
                        demoUrl: "#"
                    },
                    {
                        title: "Alhijaz Landing Page",
                        subtitle: "HAJJ & UMRAH TRAVEL WEB",
                        desc: "A professional landing page website for Hajj Plus and Umrah travel services featuring interactive, elegant, and responsive package details.",
                        tech: ["React", "Tailwind CSS", "Vite"],
                        githubUrl: "https://github.com/astrak12",
                        demoUrl: "https://alhijazindonesia.com/haji-plus"
                    },
                    {
                        title: "Object Detection & Notification",
                        subtitle: "COMPUTER VISION SYSTEM",
                        desc: "An intelligent data processing-based object detection system equipped with analytics features and automated notifications using Pandas.",
                        tech: ["Python", "Pandas", "OpenCV", "AI Model"],
                        githubUrl: "https://github.com/astrak12",
                        demoUrl: "#"
                    }
                ]
            },
            github: {
                title: "GITHUB ACTIVITY",
                subtitle: "Recent contribution track record and public repositories.",
            },
            contact: {
                subtitle: "06 — CONTACT & TRANSMISSION",
                title: "Let's Connect",
                desc: "Please reach out to me through the telemetry channel below for project collaboration or career opportunities.",
                emailLabel: "// Direct Email",
                emailAction: "Send Email Message",
                githubLabel: "// GitHub Profile",
                githubAction: "Explore Repositories",
                location: "South Tangerang, Indonesia",
                availability: "Available for full-stack projects & internships"
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