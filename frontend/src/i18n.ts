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
                        title: "Real-time AI Object Detection",
                        subtitle: "WEB AI VISION SYSTEM",
                        desc: "Aplikasi deteksi objek langsung di browser menggunakan TensorFlow.js dan Webcam API. Diadaptasi dari proyek Python (YOLOv8) menjadi arsitektur modern web.",
                        tech: ["React", "TensorFlow.js", "COCO-SSD", "Tailwind"],
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
            contactForm: {
                title: "Kirim Pesan",
                desc: "Isi form di bawah dan pesan Anda akan dikirim ke backend / disimpan di database.",
                nameLabel: "Nama",
                namePlaceholder: "Nama Anda",
                emailLabel: "Email",
                emailPlaceholder: "email@contoh.com",
                subjectLabel: "Subjek (Opsional)",
                subjectPlaceholder: "Topik pesan",
                messageLabel: "Pesan",
                messagePlaceholder: "Tulis pesan Anda di sini...",
                submit: "Kirim Pesan",
                sending: "Mengirim...",
                success: "✓ Pesan berhasil dikirim! Terima kasih.",
                error: "✗ Gagal mengirim pesan. Pastikan backend berjalan, lalu coba lagi."
            },
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
            objectDetectionLab: {
                title: "Lab: Real-time Object Detection",
                subtitle: "Sistem computer vision di dalam browser menggunakan TensorFlow.js, mengadaptasi model YOLOv8 menjadi web AI yang interaktif.",
                tabs: {
                    dashboard: "📊 Beranda & Abstrak",
                    kebutuhan: "📋 Analisis Kebutuhan",
                    perancangan: "⚙️ Perancangan Sistem",
                    playground: "🚀 Live Web AI"
                },
                dashboardContent: {
                    aboutTitle: "📜 Abstrak Ekstraksi Proyek",
                    aboutDesc: "Proyek aslinya dibangun menggunakan Python, YOLOv8, dan antarmuka Tkinter. Untuk keperluan portofolio interaktif ini, model AI telah di-porting ke arsitektur Web menggunakan TensorFlow.js (COCO-SSD) agar pengunjung dapat mencoba deteksi objek real-time langsung melalui webcam browser tanpa instalasi.",
                    modelTitle: "🤖 Neural Network",
                    modelDesc: "Berpindah dari Ultralytics (YOLOv8) lokal ke TensorFlow.js Web Model yang berjalan sepenuhnya di sisi klien (Client-side inference).",
                    guiTitle: "🖥️ Modern Web UI",
                    guiDesc: "Menggantikan antarmuka lawas Tkinter dengan React.js dan Tailwind CSS untuk pengalaman pengguna yang mulus dan responsif.",
                    datasetTitle: "⚡ Real-time Webcam API",
                    datasetDesc: "Menggunakan HTML5 MediaDevices API untuk menangkap frame video secara langsung dengan latensi rendah."
                },
                kebutuhanContent: {
                    title: "Analisis Kebutuhan Sistem Terintegrasi",
                    funcTitle: "✅ Kebutuhan Fungsional (Web AI)",
                    funcItems: [
                        "Meminta dan mengelola izin akses perangkat kamera (Webcam) secara aman.",
                        "Menangkap aliran video real-time dan merendernya ke dalam elemen HTML5 Canvas.",
                        "Melakukan inferensi deteksi objek secara terus-menerus (loop) di sisi klien.",
                        "Menggambar kotak pembatas (bounding box) dan skor keyakinan di atas objek yang terdeteksi."
                    ],
                    nonFuncTitle: "⚙️ Kebutuhan Non-Fungsional (Performa)",
                    nonFuncItems: [
                        "Proses inferensi AI tidak boleh memblokir thread utama antarmuka pengguna (UI).",
                        "Aplikasi harus menyesuaikan skala resolusi secara otomatis berdasarkan spesifikasi perangkat keras pengguna.",
                        "Privasi terjamin: Video tidak pernah dikirim ke server, diproses 100% di browser."
                    ]
                },
                perancanganContent: {
                    title: "Perancangan & Alur Kerja Web AI",
                    desc: "Infrastruktur dibangun menggunakan komponen fungsional React dengan manajemen siklus hidup untuk membersihkan memori kamera secara otomatis saat keluar dari lab.",
                    workflowTitle: "// Workflow Eksekusi (Real-time Browser):",
                    workflowItems: [
                        "1. Mount: Memuat bobot model TensorFlow (COCO-SSD) dari jaringan pengiriman konten (CDN).",
                        "2. Izin: Memanggil navigator.mediaDevices.getUserMedia() untuk menyalakan indikator kamera.",
                        "3. Loop Inferensi: requestAnimationFrame digunakan untuk memproses frame video menjadi Tensor image.",
                        "4. Prediksi & Render: Model mengembalikan array [x, y, width, height] yang dirender pada layer kanvas sekunder."
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
                        title: "Real-time AI Object Detection",
                        subtitle: "WEB AI VISION SYSTEM",
                        desc: "In-browser real-time object detection using TensorFlow.js and Webcam API. Adapted from a Python YOLOv8 project into a modern web architecture.",
                        tech: ["React", "TensorFlow.js", "COCO-SSD", "Tailwind"],
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
            contactForm: {
                title: "Send a Message",
                desc: "Fill out the form below and your message will be delivered to the backend / stored in the database.",
                nameLabel: "Name",
                namePlaceholder: "Your name",
                emailLabel: "Email",
                emailPlaceholder: "email@example.com",
                subjectLabel: "Subject (Optional)",
                subjectPlaceholder: "Message topic",
                messageLabel: "Message",
                messagePlaceholder: "Write your message here...",
                submit: "Send Message",
                sending: "Sending...",
                success: "✓ Message sent successfully! Thank you.",
                error: "✗ Failed to send the message. Make sure the backend is running, then try again."
            },
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
            objectDetectionLab: {
                title: "Lab: Real-time Object Detection",
                subtitle: "In-browser computer vision system using TensorFlow.js, adapting the YOLOv8 model into an interactive web AI.",
                tabs: {
                    dashboard: "📊 Home & Abstract",
                    kebutuhan: "📋 Requirements",
                    perancangan: "⚙️ System Design",
                    playground: "🚀 Live Web AI"
                },
                dashboardContent: {
                    aboutTitle: "📜 Project Extraction Abstract",
                    aboutDesc: "The original project was built using Python, YOLOv8, and Tkinter GUI. For this interactive portfolio, the AI model has been ported to a Web architecture using TensorFlow.js (COCO-SSD) so visitors can experience real-time object detection directly through their browser webcam without installation.",
                    modelTitle: "🤖 Neural Network",
                    modelDesc: "Transitioned from local Ultralytics (YOLOv8) to a TensorFlow.js Web Model that runs entirely on the client-side.",
                    guiTitle: "🖥️ Modern Web UI",
                    guiDesc: "Replaced the legacy Tkinter interface with React.js and Tailwind CSS for a seamless and responsive user experience.",
                    datasetTitle: "⚡ Real-time Webcam API",
                    datasetDesc: "Utilizes the HTML5 MediaDevices API to capture live video frames with minimal latency."
                },
                kebutuhanContent: {
                    title: "Integrated System Requirements",
                    funcTitle: "✅ Functional Requirements (Web AI)",
                    funcItems: [
                        "Securely request and manage camera (Webcam) device permissions.",
                        "Capture real-time video streams and render them onto an HTML5 Canvas element.",
                        "Perform continuous object detection inference loops on the client-side.",
                        "Draw bounding boxes and confidence scores over detected objects."
                    ],
                    nonFuncTitle: "⚙️ Non-Functional Requirements (Performance)",
                    nonFuncItems: [
                        "The AI inference process must not block the main User Interface (UI) thread.",
                        "The application must automatically scale resolution based on user hardware specifications.",
                        "Privacy guaranteed: Video is never sent to a server; it is processed 100% within the browser."
                    ]
                },
                perancanganContent: {
                    title: "Web AI Design & Workflow",
                    desc: "The infrastructure is built using React functional components with lifecycle management to automatically clear camera memory upon exiting the lab.",
                    workflowTitle: "// Execution Workflow (Real-time Browser):",
                    workflowItems: [
                        "1. Mount: Loads TensorFlow model weights (COCO-SSD) from a content delivery network (CDN).",
                        "2. Permission: Invokes navigator.mediaDevices.getUserMedia() to trigger the camera indicator.",
                        "3. Inference Loop: requestAnimationFrame is used to process video frames into image Tensors.",
                        "4. Predict & Render: The model returns [x, y, width, height] arrays rendered on a secondary canvas layer."
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