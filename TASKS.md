# Portfolio — task list

Living roadmap. Reorder freely. Cross items off with `~~strikethrough~~`
or just delete them when done.

Priority logic: every task is ranked by **leverage** — how much each
hour of work moves the needle on the goal (recruiter actually visits
this page and walks away with a strong impression). Tasks below the
fold do less, not nothing.

---

## ✅ Done

- [x] Bootstrap Next.js + Tailwind 4 portfolio scaffold
- [x] Index page (`/`) — header + case studies grid + experience + education
- [x] Case study #1 — French AI Learning App (`/case-studies/french-ai-learning-app`)
- [x] Case study #2 — Household ops platform / Oikero (`/case-studies/household-ops-platform`)
- [x] `lib/site.ts` — single source of truth for personal data
- [x] `noindex` meta + `robots.txt` → disallow all (unlisted)
- [x] CopyButton component for CV-ready summary blocks
- [x] README with screenshot shotlists for both case studies
- [x] Fix Gemini multi-focus scan validation (french_app — separate repo)
- [x] Fix Gemini translation focus — extract idiomatic expressions (not full sentences) + reinforce vocab no-cap rule (french_app — separate repo)
- [x] Add "Now · this month" section to index page
- [x] Add "How I work" principles section to index page
- [x] OG image HTML template at `public/og.html` — manual screenshot workflow documented in file header

---

## 🔴 Week 1 — Unblock the deploy

Without these, every screenshot slot on the live site is a placeholder
box. A recruiter would land, see the boxes, and bounce in 3 seconds.
This is the bottleneck. Everything else can wait.

### Screenshots

- [x] **French app — 4 screenshots wired** → `public/case-studies/french-ai/` (notes-before, card-after, home, parcours). Scanner upload + revision library + standalone card detail not yet captured — case study tour trimmed accordingly.
- [x] **Oikero — 6 screenshots wired** → `public/case-studies/oikero/` (investments as hero, claims-dashboard, insurance-analytics, budget, lab-result, plants). 5-module home hero and claim-detail-with-AI-prefill not yet captured — hero uses investments instead.
- [ ] (Later) Optional: capture the missing French app screens (scanner, revision, card detail) and the missing Oikero screens (5-module home, claim-detail with AI prefill) to round out the product tour.

### ~~Original shotlist — completed above~~

<details>
<summary>Original detailed list (kept for reference)</summary>

- [ ] **French app — 7 screenshots** → `public/case-studies/french-ai/`
  - `notes-before.jpg` — a page of handwritten French notes (write a few lines yourself, don't use real tutor notes)
  - `card-after.png` — the generated vocab card UI
  - `home.png` — home dashboard with 3 hub tiles
  - `scanner.png` — scanner upload screen
  - `card.png` — vocabulary card detail view
  - `revision.png` — revision library list
  - `parcours.png` — weekly course path view (wide)
- [ ] **Oikero — 6 screenshots** → `public/case-studies/oikero/`
  - `home.png` — hero, dark-mode dashboard with 5 module tiles
  - `investments.png` — Investments dashboard (mock all currency figures)
  - `claim-detail.png` — **AI showcase**: claim form with AI-filled badges (mock provider, amounts, dates, filenames)
  - `budget.png` — Cash Flow Lite KPIs + chart (mock income/expenses)
  - `lab-result.png` — Lab result detail with reference-range flags (mock person + lab + values)
  - `plants.png` — Plants list or detail with moisture timeline
- [x] Swap placeholder boxes for real images (done — both case studies render via `next/image`)

</details>

### Open Graph image — preview card when link is shared

- [x] Wire `og.png` into metadata (already done — Next reads from `/public/og.png`)
- [x] Create OG template HTML — `public/og.html` (self-contained, no tooling)
- [ ] **Generate `public/og.png` from the template**
  - Open `public/og.html` in Chrome
  - DevTools (F12) → device toolbar (Ctrl+Shift+M) → custom size 1200 × 630 → reload
  - Run command (Ctrl+Shift+P in DevTools) → "Capture full size screenshot"
  - Save the PNG as `public/og.png`
- [ ] (Optional) Per-case-study OG images — different hero per share. Default OG works fine for v1.

### Deploy

- [ ] Buy domain `jakubsykulski.com` (Cloudflare Registrar ~$10/yr)
- [ ] Create new GitHub repo `cvportfolio` (private is fine — keeps lib/site.ts contact details out of the public web)
- [ ] Push current state to repo
- [ ] Import to Vercel, set custom domain
- [ ] Verify `noindex` is live (View Source on prod page → check meta tag)
- [ ] Verify `robots.txt` returns `Disallow: /`

### CV + LinkedIn — drive the traffic

- [ ] **Update CV PDF**: add `jakubsykulski.com` line under email in header
- [ ] **Update LinkedIn About** — first 3 lines must hook, before "see more" fold:
  > Hook idea: *"I build AI-assisted internal tools where messy input becomes structured data. Currently shipping a household operations platform with AI-assisted insurance claim intake, and an AI scanner that turns handwritten classroom notes into revision cards in 4 seconds. Case studies: jakubsykulski.com"*
- [ ] LinkedIn Featured section: pin a post linking to the portfolio with one screenshot

---

## 🟡 Week 2 — The wow moment

This is what turns a recruiter from "this is fine" into "I want to talk
to him". Without video, the page is words. With video, it's a product.

### Demo video — French app (60-90s)

- [ ] Record screen capture: handwritten note → upload → AI processes → card appears
  - **Tool**: Loom (free) or QuickTime. Loom auto-uploads + gives shareable URL.
  - **Length**: 60-90s. Anything longer, recruiters bounce.
  - **Voiceover (recommended)**: your English is a selling point — use it. ~150 words at conversational pace.
  - **Silent fallback**: caption overlays in iMovie / DaVinci Resolve / CapCut. Acceptable, weaker.
  - **First 5s = the hook**: open on the handwritten page, then "watch what happens in 4 seconds"
  - **End**: "Same pipeline runs on insurance claim documents — case study at jakubsykulski.com"
- [ ] Export at 1080p, < 50 MB
- [ ] Upload to Loom (gets unlisted shareable URL) OR self-host as MP4 in `public/`
- [ ] Embed at the top of `/case-studies/french-ai-learning-app` — replace or accompany the before/after hero
  - Use `<video src="/demo-french.mp4" autoPlay muted loop playsInline />` for self-hosted
  - Loom embed: paste the iframe Loom gives

### Demo video — Oikero (60-90s)

- [ ] Same shape, focused on the insurance claim AI flow:
  - Open the home dashboard (5 modules visible)
  - Click into Insurance Claims
  - Upload a claim document (use a mocked PDF)
  - Show the AI-filled form appearing with badges
  - Show the human-review step
  - "Same shape as enterprise claim intake — case study at …"
- [ ] Embed on `/case-studies/household-ops-platform`

### Public docs repos (sanitized)

Currently your public GitHub shows one HTML repo. With these, it shows
4 repos, all signal:

- [ ] **`cvportfolio`** — make the current portfolio repo public (already low-sensitivity)
- [ ] **`french-ai-app-architecture`** — new public repo containing only sanitized docs
  - `README.md` — high-level architecture
  - `SECURITY.md` — threat model + 3-layer prompt-injection defence writeup
  - `AGENTS.md` — guardrails for AI assistants (this is rare and recruiter-magnet)
  - Sanitized prompt fragments (no API keys, no real classroom content)
- [ ] **`oikero-architecture`** — new public repo, mirror structure
  - Reuse content from `PORTFOLIO_INVENTORY.md`
  - Schema diagrams (sanitized)
  - Decision log
  - Insurance AI pipeline writeup

### Index polish — "Now" + "How I work"

- [x] **Now · this month** section added below header — edit copy in `lib/site.ts` (the `now` object) when cycling
- [x] **How I work** section added between case studies and experience — 5 principles in `lib/site.ts` (the `principles` array)

---

## 🟢 Week 3+ — Demand generation

The page is ready. Now you need eyeballs on it.

### Outbound

- [ ] **LinkedIn post #1** — "I just shipped X. Here's the workflow. [URL]"
  - Format: hook line, screenshot/video embed, 2-3 paragraphs, link
  - Best day to post: Tuesday or Wednesday morning Swiss time
- [ ] Plan to post **1 piece per week** for 8 weeks. Topics:
  - Why I dropped the Italian rollout (decision-making angle)
  - 3-layer defence against prompt injection (technical angle)
  - The same pipeline for handwritten notes runs on claim documents (transferable workflow angle)
  - "Production-aware prototyping" — what that means in practice
- [ ] **Cold outreach** to 5 specific Geneva-Lausanne-Zurich companies
  - Insurance: Helvetia, La Mobilière, Swiss Re, Allianz Suisse, Zurich Insurance
  - Wealth: Pictet, Lombard Odier, Mirabaud, UBS Wealth, Julius Baer
  - Healthtech: Roche Diagnostics, Sophia Genetics, MindMaze
  - Target: hiring manager, not recruiter. One-paragraph DM with portfolio URL.
- [ ] **Targeted applications** — every cover letter has the portfolio URL in line 1

### Inbound credibility

- [ ] **Anthropic Academy** — 2 free courses, certificates to LinkedIn
  - "Claude with the Anthropic API" (~2-3h)
  - "Prompt Engineering Interactive Tutorial" (~3-4h)
- [ ] **DeepLearning.AI** — one paid course for resume signal
  - "AI Agentic Design Patterns with AutoGen" or "Building Systems with the ChatGPT API"

### Optional — go semi-public

- [ ] **Show HN: "I built an AI scanner for handwritten classroom notes"** — if you ever drop the unlisted constraint
- [ ] **r/SwissJobs / r/cscareerquestionsEU** — modest, but real
- [ ] **Indie Hackers / Twitter/X** — only if you enjoy it

---

## 🪨 Backlog — nice but not now

- [ ] Third case study — pick one of: meeting-notes triage / policy-document compliance / a sharper personal-finance reporting take
- [ ] Improve frontend so it reads `options.missing_focuses` from scan response and shows a partial-success banner (french_app — separate repo)
- [ ] Per-device API keys for Plants Arduino ingest (Oikero — separate repo)
- [ ] Multi-household per user UI (Oikero — schema already supports it)
- [ ] Drop or rename "Oikero" if a better name surfaces
- [ ] Translate parts of the portfolio to French (Swiss market signal, but English carries fine on its own for v1)

---

## 📐 Principles for editing this list

- A task on this list should be **doable in one sitting** (≤ 3h). Bigger = break it down.
- If a task sits here for > 4 weeks untouched, kill it. Not all good ideas are good *now*.
- Done items stay in **Done** for the dopamine, then get archived once that section passes ~15 items.
- **The list is the plan.** If it's not on the list, you're not working on it.
