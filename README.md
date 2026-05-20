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

Drop the .png into `public/case-studies/french-ai/`, using the
filenames already wired in the case-study page (look for
`SCREENSHOT:` comments). The placeholder boxes auto-render until
the file exists. To swap them for real images, replace the inner
content of `ImageSlot` / `BeforeAfterSlot` in
`app/case-studies/french-ai-learning-app/page.tsx` with
`<Image src=... />` from `next/image`.

### French Learning App — `public/case-studies/french-ai/`

| Filename            | What                                  |
| ------------------- | ------------------------------------- |
| `notes-before.jpg`  | A page of handwritten French notes    |
| `card-after.png`    | The generated vocab card UI           |
| `home.png`          | Home dashboard with 3 hub tiles       |
| `scanner.png`       | Scanner upload screen                 |
| `card.png`          | Vocabulary card detail view           |
| `revision.png`      | Revision library list                 |
| `parcours.png`      | Weekly course path view (wide)        |

Use mock content only — never your tutor's real notes.

### Household ops platform (Oikero) — `public/case-studies/oikero/`

| Filename            | What                                                       | Mock before capture                                              |
| ------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| `home.png`          | Hero — home control centre with 5 module tiles (dark mode) | Net worth / portfolio value, attention item titles, display name |
| `investments.png`   | Investments dashboard — allocation + top holdings + P&L    | All currency figures, ticker names, broker / account labels      |
| `claim-detail.png`  | **AI showcase** — claim form with AI-filled badges + attachment | Provider, service date, CHF amounts, tags, attachment filename |
| `budget.png`        | Cash Flow Lite — monthly KPIs + chart                      | Income, expenses estimate, net-worth trend                       |
| `lab-result.png`    | Lab result detail — results table with reference-range flags | Person name, lab name, test names, numeric results, ranges     |
| `plants.png`        | Plants list or detail — moisture timeline (wide)           | Plant names, room labels, moisture % timeline                    |

Every figure on a Oikero screen is sensitive. Mock everything, or
spin up a fresh household with seed data, before capture.

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
