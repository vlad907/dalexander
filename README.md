# Law Offices of Daniel H. Alexander, APLC — Website

A redesigned marketing site for a Chico, CA estate planning, probate and
business planning firm. Content and photography come from dalexander.com.
Built with Next.js (App Router) + TypeScript + Tailwind CSS v4, statically
exported. Motion is restrained (GSAP + ScrollTrigger with Lenis smooth scroll)
and fully disabled under `prefers-reduced-motion`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`
(Settings → Pages → Source: "GitHub Actions").

## Project structure

- `src/lib/site.ts` — **single source of truth** for firm content (contact
  details, offices, services, team, stats, reviews, FAQs).
- `src/app/page.tsx` — the one-page home assembled from section components.
- `src/app/{estate-planning,probate,business-planning}` — service detail pages
  carrying the firm's long-form copy.
- `src/app/{privacy,disclaimer}` — legal pages.
- `src/components/PageShell.tsx` — chrome shared by all standalone pages.

## Before launch

- **Contact form endpoint** — set `FORM_ENDPOINT` in
  `src/components/ContactForm.tsx`. Until configured, the form falls back to a
  pre-filled email to the office.
- **Downloadable questionnaires** — the old site offers estate planning
  questionnaires and a fee agreement as downloads; add the PDFs to `public/`
  and link them from `src/app/estate-planning/page.tsx`.
- **Phone numbers** — the old site lists both (530) 317-3669 and
  (530) 891-8000; the home-page number is used here. Confirm with the firm.
