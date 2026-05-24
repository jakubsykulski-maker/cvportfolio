# cvportfolio

Portfolio-as-CV for Jakub Sykulski. One Next.js site that serves
both as a CV-style landing page (`/`) and as a home for case-study
deep dives (`/case-studies/...`).

Currently one case study: **French AI Learning App**.

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind 4
- Fonts: Sora (display) + Literata (body), via `next/font/google`
- Icons: `lucide-react`
- Deploy: Vercel (free tier)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Edit your data

All personal data lives in **`lib/site.ts`** — name, summary,
experience, education, certs, contact links, case-studies list.
Edit there, never inline in page files.

## Add a screenshot

Drop the .jpg into the matching `public/case-studies/<slug>/`
folder, using the exact filename referenced from the case-study
page. The page renders straight `<Image>` — there are no
placeholder boxes any more, so a missing file 404s. Add files
before merging the page change that references them.

Filenames listed below are the ones currently wired in the two
case studies. Anything not listed isn't shipped (and the page
copy doesn't reference it). To add a new screen, drop the file
and add a matching `<ImageSlot>` in the case-study page.

### French Learning App — `public/case-studies/french-ai/`

| Filename            | What                                                         |
| ------------------- | ------------------------------------------------------------ |
| `notes-before.jpg`  | A page of handwritten French notes (hero — Before)           |
| `card-after.jpg`    | Generated vocab card UI (hero — After + index thumbnail)     |
| `home.jpg`          | Home dashboard with three hub tiles                          |
| `parcours.jpg`      | Weekly course path view                                      |
| `demo-mobile.mp4`   | Phone-recorded full lifecycle (autoplays muted in hero)      |

Use mock content only — never your tutor's real notes. Scanner
upload, card detail and revision-library screens were
intentionally skipped from the v1 product tour; capture them
later if the tour grows.

### Household ops platform (Oikero) — `public/case-studies/oikero/`

| Filename                     | What                                                              | Mock before capture                                                |
| ---------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| `investments.jpg`            | Investments dashboard (also serves as page hero + index thumbnail) | All currency figures, ticker names, broker / account labels        |
| `claims-dashboard.jpg`       | Insurance — KPIs + Needs Attention queue                           | Outstanding CHF, reimbursed CHF, person / provider names           |
| `insurance-analytics.jpg`    | Insurance — claimed-vs-reimbursed trends + distribution            | Per-year CHF amounts, claim types, person split                    |
| `budget.jpg`                 | Cash Flow Lite — multi-currency balance sheet                      | Net worth totals, per-country amounts (CHF / EUR / GBP / PLN)      |
| `lab-result.jpg`             | Lab result trends vs reference range                               | Person name, lab name, test names, numeric results, ranges         |
| `plants.jpg`                 | Plants list with moisture status                                   | Plant names, room labels, moisture % values                        |

Every figure on a Oikero screen is sensitive. Mock everything, or
spin up a fresh household with seed data, before capture. The
five-module home dashboard and the claim-detail AI-prefill view
are not yet wired — the page hero uses `investments.jpg` instead.

## Discoverability

The site is **unlisted**:

- `app/robots.ts` returns `Disallow: /` for every user agent
- `<meta name="robots" content="noindex, nofollow">` on every page
  via the root layout
- No sitemap

Recruiters reach the site via direct link from the CV PDF or
LinkedIn — not via Google.

## Deploy

1. Push this folder to its own GitHub repo (private is fine).
2. Connect the repo to Vercel.
3. Set custom domain (e.g. `jakubsykulski.com`) in Vercel
   project settings.
4. Done — no env vars, no API keys.

The French Learning App stays on its own Vercel project / domain;
this portfolio is intentionally decoupled.
