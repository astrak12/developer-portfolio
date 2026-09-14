# Product Requirements Document (PRD)
**Developer Portfolio — Telemetry / Engineering Edition**
**Document:** Master PRD v2.1 (Revised with Vibe Coding & Phase 0 Locks)
**Status:** Design Locked (Phase 0) / Ready for Phase 1 Foundation
**Purpose:** Single source of truth for Vibe Coding / AI-assisted development

---

## 1. Executive Summary
This project is a premium personal developer portfolio that should feel like a real software product rather than a conventional online CV.
The portfolio combines personal branding, engineering-focused storytelling, technical skills, selected project case studies, work experience, education and certifications, GitHub/open-source activity, contact and conversion paths, interactive browser experiences, optional AI-powered demonstrations, terminal/command mode, bilingual ID/EN content, and a light/dark theme.

### 1.1 Architecture decision
The approved target architecture is:
React Frontend (TypeScript, Vite, Tailwind) ↔ REST API (JSON) ↔ Laravel Backend (PHP, MySQL/SQLite)

### 1.2 Mandatory technology stack (Updated)
*   **Frontend:** React, TypeScript, Vite, Tailwind CSS
*   **Backend:** Laravel, PHP, REST API, Laravel Eloquent
*   **Database:** SQLite (Mandatory for local/MVP) / MySQL (Optional for scale)
*   **IDE/Environment:** Antigravity IDE (Recommended for vibe coding workflow)
*   **Version control:** Git + GitHub
*   **Animation/Browser:** CSS + Framer Motion (where useful), Canvas/Web APIs (selected experiences)
*   **AI:** Gemini API (External AI API)

### 1.3 Core principle
The portfolio itself must demonstrate the developer’s engineering ability. The website should therefore be visually polished, responsive, accessible, API-driven, maintainable, componentized, secure, observable, resilient to external API failures, and easy to extend.

---

## 2. Product Vision
Technical competence + clarity + credibility + personality + working software. The final experience should communicate: *“This person does not only know how to talk about software — they can design, build, integrate, and ship it.”*

## 3. Goals
### 3.1 Primary goals
*   Make the visitor understand who the developer is within 5–10 seconds.
*   Clearly communicate the developer’s primary technical stack.
*   Showcase real projects with technical evidence.
*   Demonstrate full-stack capability (React + Laravel API + Database).
*   Demonstrate external API integration (GitHub, Gemini API).
*   Work well on desktop, tablet, and mobile.
*   Support Bahasa Indonesia and English, Light and Dark themes.
*   Be structured for AI/Vibe Coding implementation without feature invention.

### 3.2 Secondary goals
*   Demonstrate clean frontend architecture and API error handling/caching.
*   Provide an architecture that can later support an admin dashboard.

## 4. Non-Goals
The initial release is not intended to become a social network, generic job board, a clone of the reference site, or an excuse to add technologies without a real feature need.

---

## 5. Target Users
*   **Recruiter / HR:** Needs identity, skills, experience, project evidence, resume, contact.
*   **Technical interviewer:** Needs architecture details, technology choices, GitHub activity, problem-solving.
*   **Potential client:** Needs capability, previous work, delivery evidence, clear CTA.
*   **Developer / technical peer:** Needs interesting implementation, source code, interactive demos.

---

## 6. Information Architecture
**Portfolio Structure:**
01 — Hero | 02 — About | 03 — Technical Skills | 04 — Featured Projects | 05 — Work Experience | 06 — Education | 07 — Certifications | 08 — GitHub Activity | 09 — Contact

**Backend/Admin Architecture (Future Scope):**
Dashboard | Profile | Skills | Projects | Experience | Education | Certifications | Social Links | Settings

---

## 7. Functional Requirements (Key Sections)

### 8.1 Navigation
Sticky desktop header, mobile menu/drawer, active section indicator, smooth navigation, ID/EN switcher, theme switcher, terminal button, resume CTA.

### 9. Hero
Status/availability, greeting, full name, professional title, positioning statement, primary CTA, metrics, telemetry/code visual.

### 11. Technical Skills Matrix
Categories: Web/Frontend, Backend/API, Mobile, Database, Cloud/DevOps, AI/LLM, Tools.
Proficiency labels: Primary, Strong, Working Knowledge, Familiar, Exploring (supported by evidence, no arbitrary percentages).

### 12. Masterpiece / Featured Projects
Title, short description, category, status, stack, visual, outcome, Live Demo, Source Code, Case Study. Focus on technical depth and measurable impact.

---

## 20. Database Requirements
### 20.1 Database Selection & Portability (Updated)
Pendekatan hibrida diterapkan untuk manajemen database:
*   **Development & MVP:** SQLite wajib digunakan untuk menyederhanakan konfigurasi path lokal, mempercepat iterasi saat vibe coding di Antigravity IDE, dan menekan kompleksitas infrastruktur.
*   **Production Scaling:** Struktur database harus dipertahankan sepenuhnya kompatibel dengan relasional melalui migrations Eloquent, memungkinkan transisi tanpa hambatan ke MySQL jika beban data atau skala produksi meningkat di masa depan.

---

## 23. API Integration Rules
### 23.3 AI API (Gemini Integration - Updated)
Integrasi AI pada portofolio akan difokuskan menggunakan layanan **Gemini API (Gemini Pro)**.
Alur integrasi wajib: `React ↓ Laravel (Server-side proxy) ↓ Gemini API`
*   Kunci API Gemini tidak boleh diekspos di frontend atau di-commit ke repositori.
*   Prompt engineering harus dienkapsulasi di dalam service layer Laravel (`AiService`), bukan di sisi client, untuk melindungi desain persona aplikasi dan logika instruksi.
*   Harus ada pembatasan rate limiting dan token size per user session untuk menghindari abuse biaya API.

## 24. AI / Interactive Demonstration Layer (Updated)
Demonstrasi AI (Opsional namun disarankan):
*   **Smart Companion/Assistant:** Menggunakan Gemini Pro dengan injeksi prompt yang dirancang khusus untuk menciptakan persona yang mampu menjawab pertanyaan teknis terkait pengalaman proyek, tech stack, atau memandu pengunjung menelusuri arsitektur portofolio secara interaktif (bahkan dapat diekspansi untuk mendukung interaksi voice-controlled eksperimental).

---

## 29. Visual Design System
### 29.1 Brand direction (PHASE 0 LOCKED)
**Canonical Tailwind Design Tokens:**
```javascript
colors: {
  canvas: { light: '#ffffff', dark: '#0f172a' },
  surface: { DEFAULT: '#f8fafc', code: '#f1f5f9', dark: '#1e293b', 'code-dark': '#334155' },
  slate: { 900: '#0f172a', 700: '#334155', 500: '#64748b' },
  accent: { DEFAULT: '#059669', dark: '#047857', live: '#10b981' }
},
fontFamily: {
  sans: ['Geist', 'Inter', 'sans-serif'],
  mono: ['"JetBrains Mono"', 'monospace'],
}
```

---

## 39. Testing Requirements (Tools & Scope - Updated)
Pengujian wajib menggunakan framework yang selaras dengan tumpukan teknologi modern:
*   **Frontend Testing:** Menggunakan **Vitest** (terintegrasi native dengan Vite) dan React Testing Library untuk memastikan komponen UI dan status API berjalan mulus.
*   **Backend Testing:** Menggunakan **Pest PHP** untuk menulis pengujian endpoint API dan logika database yang ekspresif dan minimalis.
*   **Cakupan Minimum:** Feature tests wajib ada untuk autentikasi admin, operasi CRUD proyek/skill, dan validasi contact form.

---

## 43. Git / Repository Structure & CI/CD (Updated)
Selain arsitektur monorepo, proyek ini harus memiliki pipeline integrasi berkelanjutan (CI) dasar:
*   **GitHub Actions:** File workflow YAML (misal: `.github/workflows/ci.yml`) harus dibuat untuk menjalankan linting (ESLint/PHP_CodeSniffer) dan test suite (Vitest & Pest) secara otomatis setiap kali ada Push atau Pull Request ke branch `main`.
*   Tujuannya adalah memastikan tidak ada kode yang merusak struktur saat di-generate secara cepat melalui vibe coding. Build aset statis untuk Vite juga harus divalidasi tanpa error.

---

## 44. Vibe Coding Guardrails (MANDATORY)
1. **Do not invent content:** Use marked placeholders if data is unknown.
2. **Do not invent APIs:** Use only defined internal endpoints.
3. **Do not expose secrets:** No API keys or DB credentials in frontend source.
4. **Do not overengineer:** No Redux unless needed, no unnecessary microservices.
5. **Preserve design intent:** Stick to the locked Tailwind tokens.
6. **API first for dynamic content.**
7. **Graceful degradation:** External API failures must not break the site.
8. **Mobile first in validation.**
9. **Security before convenience.**
10. **Explain architecture decisions.**

---

## 45. Development Phases
*   **Phase 0 — Design Lock:** (COMPLETED) Tailwind tokens, Typography, Navigation locked.
*   **Phase 1 — Project Foundation:** React+Vite+TS+Tailwind, Laravel+PHP+SQLite, Git repo setup.
*   **Phase 2 — Database & API:** Migrations, Eloquent models, Seeder, API Resources.
*   **Phase 3 — Public Portfolio UI:** Build frontend components consuming the API.
*   **Phase 4 — Admin:** Authentication, Dashboard, CRUD.
*   **Phase 5 — Integrations:** GitHub API, Contact form, Gemini AI endpoint.
*   **Phase 6 — Signature Features:** Terminal mode, Dark mode toggle.
*   **Phase 7 & 8 — Quality & Deployment:** Testing, Accessibility, Production build.

