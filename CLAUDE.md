# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build + sitemap generation
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format:write # Prettier format
npm run typecheck    # TypeScript type check (no emit)
npm run preview      # Build then start production server
```

Pre-commit hooks (Husky + lint-staged) auto-run ESLint fix and Prettier on staged files. Commits must follow Conventional Commits format (enforced by Commitlint).

## Architecture

**Single-page app** using Next.js 15 App Router. The entire site renders from `src/app/page.tsx`, which composes all section components in order. Navigation uses anchor links (`#home`, `#about`, etc.) — there are no additional routes.

### Data flow

All portfolio content (projects, nav links) lives in `src/lib/data.tsx` as static arrays. To add/edit projects or nav items, edit that file. Site-level metadata (title, description, SEO keywords, URL) is in `src/lib/site-config.ts`.

### State management

`src/components/active-section-provider.tsx` provides a React Context that tracks which section is currently in the viewport. Components subscribe via `src/hooks/use-section-in-view.ts`, which uses `IntersectionObserver`. The header highlights the active nav link based on this context.

### Contact form

The contact form (`src/components/contact.tsx`) uses React Hook Form + Zod (`src/lib/form-schema.ts`) and submits via a Next.js Server Action (`src/actions/send-email.ts`). Email delivery uses the Resend API. The `RESEND_API_KEY` env var is required for this to work.

### Environment variables

Validated at build time via `@t3-oss/env-nextjs` in `src/env.mjs`:
- `RESEND_API_KEY` — required for contact form emails
- `SITE_URL` — used by next-sitemap during `postbuild`
- `GOOGLE_SITE_VERIFICATION_ID` — optional, for Search Console

### Styling

Tailwind CSS with a CSS-variable-based theme system. Light/dark colors are defined as HSL variables in `src/styles/globals.css`. Dark mode uses the `class` strategy via next-themes. Custom fonts: Inter (sans), Plus Jakarta Sans (heading), JetBrains Mono (mono) — configured in `src/lib/fonts.ts` and applied in the root layout.

Path alias: `@/*` maps to `src/*`.

### Animations

Framer Motion is used throughout for entrance and scroll-triggered animations. Components import `motion` from `framer-motion` and use `useInView`/variants for consistent animation patterns.
