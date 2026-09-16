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
                        demoUrl: "/labs/spk"
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
                        demoUrl: "/labs/object-detection"
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
            },
            // Kamus Terjemahan Standar untuk Lab SPK
            spkLab: {
                title: "Lab: SPK Bank Sampah Japos",
                subtitle: "Eksperimen interaktif Sistem Penunjang Keputusan menggunakan metode SAW dan TOPSIS secara real-time.",
                tabs: {
                    dashboard: "📊 Beranda Lab",
                    kriteria: "🎛️ Atur Kriteria",
                    pengepul: "👥 Data Pengepul",
                    perhitungan: "⚙️ Kalkulasi & Hasil"
                },
                dashboardContent: {
                    aboutTitle: "🎯 Tentang Sistem Ini",
                    aboutDesc: "Modul ini adalah ekstraksi logika engine dari proyek SPK Bank Sampah Japos Bersih 09. Sistem ini dirancang untuk mengatasi masalah subjektivitas dalam pemilihan mitra pengepul sampah secara objektif.",
                    sawTitle: "Metode SAW",
                    sawDesc: "Simple Additive Weighting (SAW) bekerja dengan mencari penjumlahan terbobot dari rating kinerja pada setiap alternatif di semua atribut.",
                    topsisTitle: "Metode TOPSIS",
                    topsisDesc: "Technique for Order of Preference by Similarity to Ideal Solution (TOPSIS) didasarkan pada konsep jarak terdekat dengan solusi ideal positif dan terjauh dari negatif.",
                    techTitle: "Teknologi Simulasi Lab",
                    techNote: "*Catatan: Proyek asli SPK Bank Sampah Japos dibangun menggunakan tumpukan Laravel, PHP, dan SQLite."
                },
                criteriaContent: {
                    title: "Pengaturan Bobot Kriteria",
                    desc: "Geser slider di bawah ini untuk mengubah bobot preferensi, lalu lihat perubahannya di tab Kalkulasi!"
                },
                pengepulContent: {
                    title: "Data Alternatif Pengepul"
                },
                resultContent: {
                    title: "Hasil Akhir & Ranking",
                    desc: "Pengepul dengan skor (V) tertinggi direkomendasikan sebagai pilihan terbaik.",
                    tableRank: "Rank",
                    tableName: "Nama Pengepul",
                    tableScore: "Skor (V)"
                }
            },
            // Kamus Terjemahan Standar untuk Lab Object Detection
            objectDetectionLab: {
                title: "Lab: AI Object Detection (YOLOv8)",
                subtitle: "Simulasi interaktif aplikasi pendeteksi objek berbasis model YOLOv8, OpenCV, dan GUI Python.",
                tabs: {
                    dashboard: "📊 Beranda & Abstrak",
                    kebutuhan: "📋 Analisis Kebutuhan",
                    perancangan: "⚙️ Perancangan Sistem",
                    playground: "🚀 Simulasi Lab"
                },
                dashboardContent: {
                    aboutTitle: "📜 Abstrak Sistem",
                    aboutDesc: "Aplikasi pendeteksi objek berbasis model YOLOv8 menggunakan bahasa pemrograman Python dengan antarmuka grafis Tkinter. Mampu melakukan deteksi objek pada gambar maupun video webcam secara real-time serta dilengkapi fitur pembuatan dataset dummy.",
                    modelTitle: "🤖 Model YOLOv8",
                    modelDesc: "Memanfaatkan library ultralytics untuk akurasi tinggi dan kecepatan inferensi optimal.",
                    guiTitle: "🖥️ GUI & OpenCV",
                    guiDesc: "Pengolahan citra digital menggunakan OpenCV (cv2) dan Tkinter untuk tata letak jendela.",
                    datasetTitle: "📦 Dataset Generator",
                    datasetDesc: "Fitur pendukung untuk membuat data latih tiruan secara programatik guna eksperimen model."
                },
                kebutuhanContent: {
                    title: "Analisis Kebutuhan Sistem",
                    funcTitle: "✅ Kebutuhan Fungsional",
                    funcItems: [
                        "Memuat dan menampilkan berkas gambar untuk deteksi objek.",
                        "Melakukan inferensi deteksi objek pada gambar.",
                        "Mengakses perangkat webcam dan mendeteksi secara real-time.",
                        "Menyimpan tangkapan layar hasil deteksi.",
                        "Membersihkan area kanvas (clear canvas).",
                        "Membuat dataset dummy untuk latihan pelatihan model."
                    ],
                    nonFuncTitle: "⚙️ Kebutuhan Non-Fungsional",
                    nonFuncItems: [
                        "Antarmuka perangkat lunak harus responsif dan mudah digunakan.",
                        "Model deteksi harus stabil dengan pengaturan threshold fleksibel.",
                        "Berbasis pustaka open-source Python (ultralytics dan Tkinter)."
                    ]
                },
                perancanganContent: {
                    title: "Perancangan & Alur Kerja Sistem",
                    desc: "Sistem dirancang secara modular yang terdiri dari modul antarmuka GUI, modul pemrosesan model YOLOv8, serta modul generator dataset dummy.",
                    workflowTitle: "// Workflow Eksekusi:",
                    workflowItems: [
                        "1. Pengguna memilih sumber input (Gambar / Webcam / Dataset Dummy).",
                        "2. Modul OpenCV membaca frame gambar dan mengirimkannya ke objek YOLO.",
                        "3. Model menghasilkan koordinat kotak pembatas (bounding box) dan tingkat konfidensi.",
                        "4. Hasil render divisualisasikan pada kanvas antarmuka."
                    ]
                }
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
                        demoUrl: "/labs/spk"
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
                        demoUrl: "/labs/object-detection"
                    }
                ]
            },
            github: {
                title: "GITHUB ACTIVITY",
                subtitle: "Recent contribution track record and public repositories.",
            },
            contact: {
                title: "Let's Connect",
                subtitle: "06 — CONTACT & TRANSMISSION",
                desc: "Please reach out to me through the telemetry channel below for project collaboration or career opportunities.",
                emailLabel: "// Direct Email",
                emailAction: "Send Email Message",
                githubLabel: "// GitHub Profile",
                githubAction: "Explore Repositories",
                location: "South Tangerang, Indonesia",
                availability: "Available for full-stack projects & internships"
            },
            // Lab SPK Translation Dictionary (English)
            spkLab: {
                title: "Lab: Japos Waste Bank DSS",
                subtitle: "Interactive Decision Support System experiment using SAW and TOPSIS methods in real-time.",
                tabs: {
                    dashboard: "📊 Lab Home",
                    kriteria: "🎛️ Adjust Criteria",
                    pengepul: "👥 Collectors",
                    perhitungan: "⚙️ Calculation & Results"
                },
                dashboardContent: {
                    aboutTitle: "🎯 About This System",
                    aboutDesc: "This module extracts the engine logic from the Japos Bersih 09 Waste Bank DSS project, designed to eliminate subjectivity in selecting waste collector partners.",
                    sawTitle: "SAW Method",
                    sawDesc: "Simple Additive Weighting (SAW) finds the weighted sum of performance ratings for each alternative across all attributes.",
                    topsisTitle: "TOPSIS Method",
                    topsisDesc: "Technique for Order of Preference by Similarity to Ideal Solution is based on the concept of shortest distance to the positive-ideal solution.",
                    techTitle: "Lab Simulation Stack",
                    techNote: "*Note: The original project was built using Laravel, PHP, and SQLite."
                },
                criteriaContent: {
                    title: "Criteria Weight Settings",
                    desc: "Drag the sliders below to adjust preference weights, then see the changes in the Calculation tab!"
                },
                pengepulContent: {
                    title: "Collector Alternatives Data"
                },
                resultContent: {
                    title: "Final Results & Ranking",
                    desc: "Collectors with the highest (V) score are recommended as the best choice.",
                    tableRank: "Rank",
                    tableName: "Collector Name",
                    tableScore: "Score (V)"
                }
            },
            // Lab Object Detection Translation Dictionary (English)
            objectDetectionLab: {
                title: "Lab: AI Object Detection (YOLOv8)",
                subtitle: "Interactive simulation of an object detection application based on the YOLOv8 model, OpenCV, and Python GUI.",
                tabs: {
                    dashboard: "📊 Home & Abstract",
                    kebutuhan: "📋 Requirements",
                    perancangan: "⚙️ System Design",
                    playground: "🚀 Lab Simulation"
                },
                dashboardContent: {
                    aboutTitle: "📜 System Abstract",
                    aboutDesc: "An object detection application based on the YOLOv8 model using Python and a Tkinter graphical interface. Capable of performing real-time object detection on images and webcam feeds, equipped with a dummy dataset generator feature.",
                    modelTitle: "🤖 YOLOv8 Model",
                    modelDesc: "Utilizes the ultralytics library for high accuracy and optimal inference speed.",
                    guiTitle: "🖥️ GUI & OpenCV",
                    guiDesc: "Digital image processing using OpenCV (cv2) and Tkinter for window layouts.",
                    datasetTitle: "📦 Dataset Generator",
                    datasetDesc: "Supporting feature to programmatically generate mock training data for model experiments."
                },
                kebutuhanContent: {
                    title: "System Requirements Analysis",
                    funcTitle: "✅ Functional Requirements",
                    funcItems: [
                        "Load and display image files for object detection.",
                        "Perform object detection inference on images.",
                        "Access webcam devices for real-time detection.",
                        "Save detection result screenshots.",
                        "Clear the canvas area.",
                        "Generate dummy datasets for model training exercises."
                    ],
                    nonFuncTitle: "⚙️ Non-Functional Requirements",
                    nonFuncItems: [
                        "The software interface must be responsive and user-friendly.",
                        "The detection model must be stable with flexible threshold settings.",
                        "Built on open-source Python libraries (ultralytics and Tkinter)."
                    ]
                },
                perancanganContent: {
                    title: "System Design & Workflow",
                    desc: "The system is designed modularly, consisting of a GUI interface module, a YOLOv8 model processing module, and a dummy dataset generator module.",
                    workflowTitle: "// Execution Workflow:",
                    workflowItems: [
                        "1. User selects the input source (Image / Webcam / Dummy Dataset).",
                        "2. OpenCV module reads the image frame and sends it to the YOLO object.",
                        "3. The model generates bounding box coordinates and confidence levels.",
                        "4. Rendered results are visualized on the interface canvas."
                    ]
                }
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