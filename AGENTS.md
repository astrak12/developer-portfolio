# AGENTS.md

Monorepo portfolio: `frontend/` (React 19 + Vite + TypeScript + Tailwind 3.4) and `backend/` (Laravel 12, PHP 8.2+, SQLite). `prd.md` is the product spec — especially §44 "Vibe Coding Guardrails" (don't invent content/APIs, no secrets in frontend, graceful degradation) — read it before feature work.

## Frontend (`frontend/`)
- Commands: `npm run dev` (Vite, port 5173); `npm run build` = `tsc -b --clean && tsc -b && vite build` (typecheck gates the build); `npm run lint` = **oxlint** (not ESLint; config in `.oxlintrc.json`). No test runner installed (Vitest from the PRD is not set up).
- All site copy is bilingual and lives inline in `src/i18n.ts` (`ID` and `EN` resource blocks, default `lng: "ID"`). Change content in BOTH blocks. `src/utils/translations.ts` is a stale duplicate — unused, don't edit it.
- The site is currently static: `src/services/api.ts` defines API calls but no component uses them. `GitHubActivity` calls the public GitHub API for `astrak12` directly (intentional — the backend proxy caused localhost failures). Content edits go in `i18n.ts`, not the API.
- Interactive labs: `/labs/spk` (SAW/TOPSIS engine) and `/labs/object-detection` (TensorFlow.js COCO-SSD + webcam). Routes live in `src/App.tsx`; `vercel.json` rewrites all paths to `index.html` for SPA deploys.
- API base URL comes from `frontend/.env` (`VITE_API_URL`, committed) with a localhost fallback in `services/api.ts`.
- Tailwind is **v3** with a custom "space" palette, Plus Jakarta Sans / Fira Code fonts in `tailwind.config.js`. This deviates from the PRD §29 locked tokens (Geist/Inter, emerald accent) — the implemented config is the source of truth for styling.

## Backend (`backend/`)
- `composer run dev` starts artisan serve (port 8000) + queue:listen + pail + vite concurrently. `composer run setup` bootstraps a fresh install (.env, key, migrate, npm build).
- SQLite via `DB_CONNECTION=sqlite`; the db file `database/database.sqlite` is gitignored. `backend/.env` is NOT tracked — copy `.env.example`, run `php artisan key:generate` and `php artisan migrate`.
- Tests are PHPUnit (`tests/Feature`, `tests/Unit`; only example tests exist). `composer test` runs `config:clear && artisan test` against in-memory SQLite. Pest (mentioned in the PRD) is not installed — trust `composer.json`.
- API routes in `routes/api.php`: `/profile`, `/skills`, `/projects(/{slug})`, `/education`, `/experiences`, `POST /contact`, `/github/repos`. **Many controllers are stubs or mismatched with routes** (e.g., `ProfileController` only defines `show()` while the route calls `index`; `Project`/`Skill` are empty skeletons). The frontend doesn't consume these yet.
- CORS (`config/cors.php`) allows only `http://localhost:5173` / `http://127.0.0.1:5173` — add your dev origin if the frontend actually starts calling the API.

## Repo-wide
- Root `package.json` holds only Tailwind/postcss devDeps, and root `node_modules` is committed to git — don't commit more there, and don't add a root Tailwind 4 setup; the real config lives in `frontend/`.
- No CI workflows (`.github/` absent) and no root README/.gitignore. Default branch: `main`.
- Secrets: PRD §23 requires Gemini keys to live only in the Laravel backend; never in frontend code or commits.