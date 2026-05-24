# cvportfolio — orientation for AI assistants

This is a **portfolio-as-CV** for Jakub Sykulski. Next.js 16 (App Router) +
Tailwind 4 + TypeScript. One landing page that *is* the CV, two case-study
deep dives under `/case-studies/`.

Audience: recruiters and hiring managers in Geneva–Lausanne–Zurich. Read
mode is "scan in 6 seconds, optional 3-minute deep dive."

## Constraints you should not re-litigate

- **Site is unlisted.** `app/robots.ts` returns `Disallow: /`, every page
  has `noindex/nofollow`, no sitemap. Traffic comes from CV-PDF / LinkedIn
  direct links. Don't propose SEO work, schema.org markup, or sitemaps
  unless asked.
- **No public signup, no public demos.** Case studies link to a `mailto:`
  for demo access. Keep the friction — it's intentional.

## Where things live

- `lib/site.ts` — single source of truth for personal data (name,
  summary, experience, education, certs, case-studies list, principles,
  `now` block). **Never inline this data in page files.**
- `app/page.tsx` — the CV landing page.
- `app/case-studies/<slug>/page.tsx` — case-study deep dives. Long files
  by design (the content *is* the page).
- `components/section.tsx` — `<Section>` + `<Hairline>` page primitives.
- `components/case-study.tsx` — shared building blocks for case studies
  (`TitleBodyCard`, `IconCard`, `ModuleCard`, `NumberedStep`, `StackBox`,
  `ImageSlot`). Add new shared bits here, don't redeclare inline.
- `app/globals.css` — `@theme` tokens (colors, fonts). Extend here.
- `public/case-studies/<slug>/` — screenshots. README lists what's wired.

## Conventions

- **Visual tokens go in `@theme`.** No new inline hex like `bg-[#1a2f73]`
  in JSX. If you need a colour that isn't tokenized, add it to `@theme`
  first, then use `bg-token-name`. Existing tokens: `cream`, `cream-deep`,
  `stone-ink`, `accent`, `accent-deep`, `accent-darker`, `screen-dark`,
  `warm`, `warm-ink`, `emerald-ink`, `emerald-ink-deep`.
- **Fonts via utility, not inline style.** Use `font-display` (Sora) or
  `font-serif` (Literata, the default). No `style={{ fontFamily: ... }}`.
- **Copy tone:** recruiter-first, concrete, no marketing adjectives. State
  facts a reader can verify. The principles in `lib/site.ts` set the
  voice — match it.
- **Cut features, don't half-build.** TASKS.md is the living roadmap;
  every item should be doable in ≤3h. Bigger = break down or defer.

## When you edit content

- Update the relevant entry in `lib/site.ts`. Strings only — the page
  files render whatever's in there.
- For new screenshots: drop the file under `public/case-studies/<slug>/`
  *before* the page change that references it (the page renders straight
  `<Image>` — there's no placeholder fallback).
- If you change `now.month`, change it in `lib/site.ts` only. It's
  deliberately manual to force a monthly review cycle.

## Don't

- Don't add MDX, a CMS, or a content-fetch layer. The data file is the
  data layer.
- Don't add tests for the marketing copy. There's no logic to test.
- Don't write multi-paragraph code comments. One short line if a
  decision is non-obvious; nothing otherwise.
- Don't propose splitting case-study pages into many small files. The
  single-file structure is on purpose — the page reads like a document.
