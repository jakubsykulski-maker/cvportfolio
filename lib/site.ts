/**
 * Single source of truth for personal data on the portfolio.
 *
 * Editing here updates the index page, the case-study footer, and
 * any future contact CTAs. Keep mailto subject lines stable so
 * recruiters' inbox filters don't break across edits.
 */

export const site = {
  name: "Jakub Sykulski",
  title: "Operations & Business Analysis · Reporting & Business Intelligence",
  location: "Nyon · Geneva area, Switzerland",
  languages: "EN proficient · FR intermediate (B2.1) · PL native",

  summary:
    "Operations and business analysis professional with 8+ years across the Bank for International Settlements, Stuart (DPD Group), and FlixBus. Since 2025, building AI-assisted internal prototypes around a single pattern: messy input becomes structured, validated, auditable data. Two working prototypes so far, both private: a household operations platform in daily use, and a language-learning app built for my own coursework.",

  email: "jakub.sykulski@gmail.com",
  phone: "+41 76 746 5124",

  // The single fact a recruiter scans for — rendered as a green-dot
  // chip in the hero. Keep in sync with now.bullets[2].
  availability:
    "Open to Operations · Business Analysis · Reporting & BI roles in Geneva–Lausanne",

  // One-click artifact for recruiters; the file lives in /public.
  // Replace public/Jakub-Sykulski-CV.pdf when the CV updates.
  cvPdf: "/Jakub-Sykulski-CV.pdf",

  // Employer names recruiters pattern-match on — rendered as quiet
  // chips under the hero summary. Employers only; certs stay in the
  // Education section so the strip never overclaims.
  previously: [
    "Bank for International Settlements · Basel",
    "Stuart (DPD Group) · Warsaw",
    "FlixBus · Warsaw",
  ],

  // Public profiles. Update once GitHub username is confirmed for public use.
  github: "https://github.com/jakubsykulski-maker",
  linkedin: "https://www.linkedin.com/in/jakub-sykulski/",

  // Public canonical URL. When you wire the custom domain in Vercel,
  // update this; the og.html title and demoMailto pick it up.
  url: "https://jakubsykulski.com",

  // Used by mailto buttons. Stable subject = recruiter filter friendly.
  demoMailto: (caseStudy: string) =>
    `mailto:jakub.sykulski@gmail.com?subject=${encodeURIComponent(
      `Demo access: ${caseStudy}`,
    )}&body=${encodeURIComponent(
      "Hi Jakub,\n\nI saw your case study at https://jakubsykulski.com\n\nI'd like to see a live demo. Could you share access?\n\nThanks,\n",
    )}`,
};

export type CaseStudy = {
  slug: string;
  title: string;
  oneLiner: string;
  domain: string; // e.g. "Education · Knowledge workflows"
  status: "Private · in daily use" | "Private · in progress" | "Concept";
  href: string;
  accent: "blue" | "amber" | "emerald";
  /** Thumbnail rendered inside the card on the index page. Must be a
   *  static asset under /public. Aspect ~16/10 works best — the card
   *  crops top-left so the screenshot's header stays visible. */
  thumbnail: { src: string; alt: string; width: number; height: number };
  /** Short, scannable chips of concrete facts. Recruiters skim these
   *  in 2 s; longer copy lives inside the case study itself. */
  stats: string[];
  /** Approximate read time of the full case study — sets the
   *  recruiter's expectation before the click. */
  readMinutes: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "household-ops-platform",
    title: "Household operations platform",
    oneLiner:
      "Five-module household OS (investments, insurance, budget, lab results, plants) with AI-assisted insurance claim intake via Gemini.",
    domain: "Insurance · Wealth · Health · Document AI",
    status: "Private · in daily use",
    href: "/case-studies/household-ops-platform",
    accent: "emerald",
    thumbnail: {
      src: "/case-studies/oikero/investments.jpg",
      alt: "Dark-mode investments dashboard with portfolio metrics and performance chart.",
      width: 1292,
      height: 1440,
    },
    stats: [
      "5 modules",
      "AI claim extraction",
      "Event-sourced portfolio",
      "Arduino-ready",
    ],
    readMinutes: 4,
  },
  {
    slug: "french-ai-learning-app",
    title: "French AI Learning App",
    oneLiner:
      "Photo of handwritten classroom notes → structured vocabulary cards, explanations and revision material, via Gemini.",
    domain: "Education · Knowledge workflows",
    status: "Private · in daily use",
    href: "/case-studies/french-ai-learning-app",
    accent: "blue",
    thumbnail: {
      src: "/case-studies/french-ai/card-after.jpg",
      alt: "Generated vocabulary card showing 14 French entries with definitions and English translations.",
      width: 1302,
      height: 1236,
    },
    stats: [
      "Multi-focus extraction",
      "3-layer injection defence",
      "60-second lifecycle",
      "Print-ready revision sheets",
    ],
    readMinutes: 3,
  },
];

export const experience = [
  {
    role: "Independent Projects & Intensive French Studies",
    org: "Nyon / Lausanne, Switzerland",
    period: "September 2025 – Present",
    bullets: [
      "Completing a full-time intensive French programme (Interlangue and Voxea, Lausanne; 17.5 hours/week in class), progressing from A2.1 to B2.1 in four months.",
      "Working a single pattern across two working prototypes: messy input → structured, validated data via Gemini with response_schema, persisted with audit trail and human review. Both private, both working end-to-end.",
      "Household operations platform: five modules (investments, insurance claims, budget, lab results, plants) with AI-assisted claim document intake (Gemini 2.5 Flash → Pydantic-validated claim fields). Event-sourced investments, immutable audit log, household-scoped Row Level Security as defence-in-depth. In daily use.",
      "French Learning App: photo of handwritten classroom notes → structured vocabulary cards with multi-focus extraction (vocab, grammar, conjugation, translation), print-ready revision output. Three-layer defence against prompt injection.",
      "Across both: defined the data model, designed the prompt architecture, made the product cuts, and accelerated implementation with Cursor, Claude Code and Codex.",
    ],
  },
  {
    role: "Operations Manager",
    org: "Bank for International Settlements · Basel",
    period: "November 2024 – August 2025 · Fixed-term via Swisslinx AG",
    bullets: [
      "Innovation Hub Strategy Team: supported coordination of strategic projects across eight global innovation teams: planning calendars, trackers, documentation and deliverable follow-up across multiple time zones.",
      "Built planning templates and data structures for resource and scenario planning, aligning delivery goals with available capacity.",
      "Prepared reporting, presentations and analysis for the Head of the Strategy Team, informing resourcing priorities and delivery timelines.",
      "Coordinated the BIS Academia Workshop (CHF 200,000 budget) end-to-end, including final reporting.",
    ],
  },
  {
    role: "Operations Manager / Business Analyst",
    org: "Stuart (DPD Group) · Warsaw",
    period: "March 2021 – April 2024",
    bullets: [
      "Built 50+ dashboards in SQL, Excel, Power BI and Tableau used for daily operational and management decisions across 7 cities.",
      "Delivered analyses and presentations directly to Stuart Poland's General Manager, including centralised courier-compensation (\"multiplier\") management supporting demand-based pricing decisions.",
      "Coordinated capacity planning for a courier network scaling from 120 to 800 weekly couriers alongside 600%+ delivery volume growth; trained City Managers and colleagues on dashboards and reporting tools.",
      "Managed €500k+ monthly courier payouts with automated verification, reaching 100% payout accuracy.",
      "Reduced financial losses ~50% on €350k/month courier transactions via fraud-detection controls (with Data & Finance).",
      "Designed automated weekly reporting: SQL → Excel → Mailchimp pipeline delivering personalised performance reports to 800+ couriers, and SQL → Excel → PowerPoint KPI presentations for partner restaurants.",
    ],
  },
  {
    role: "Operations Executive",
    org: "FlixBus · Warsaw",
    period: "September 2018 – January 2021",
    bullets: [
      "Managed 20 bus partner relationships, ensuring standards compliance and stronger collaboration.",
      "Built Power BI dashboards analysing NPS and customer feedback across partners, routes and stations, supporting operational decisions with the Head of Operations.",
    ],
  },
];

/**
 * What you're working on this month + what you're open to. Recruiter
 * reads this in 5 seconds and knows whether to bother. Update the
 * `month` string when you cycle.
 */
export const now = {
  // Update this manually each month. Auto-dating tempts you to write
  // evergreen bullets, which is exactly the opposite of what this
  // section is for — recruiters want to know what's on your screen
  // *this month*. Force the cycle.
  month: "July 2026",
  bullets: [
    "Completing a full-time intensive French programme in Lausanne (Interlangue & Voxea): 17.5 hours/week in class, A2.1 to B2.1 in four months.",
    "Iterating on the household operations platform: five modules in daily use, with AI-assisted insurance claim intake working end-to-end for two household members.",
    "Open to Operations & Business Analysis and Reporting & BI roles in the Geneva–Lausanne area. Insurance, wealth and healthtech especially welcome.",
  ],
};

/**
 * Five principles drawn from how the two apps were actually built —
 * not generic platitudes. Each one points at a real decision visible
 * in a case study, so a recruiter can verify the claim by clicking.
 */
export const principles = [
  {
    title: "AI is a collaborator with bias, not an oracle.",
    body: "Every output gets read. Every decision stays mine. Cursor and Claude Code accelerate the typing; they don't make the calls.",
  },
  {
    title: "Production-aware from day one.",
    body: "Security, observability and dependency hygiene are wired in before launch, not bolted on. Magic-byte image validation, prompt-injection defence, immutable audit log, pip-audit in CI.",
  },
  {
    title: "Cut features when cost-to-value drops.",
    body: "Half-built features are tax on every future change. When the upside stops justifying the surface, I revert the code and keep the planning notes. Knowing when to cut is a feature.",
  },
  {
    title: "Structured data over freeform.",
    body: "Typed content blocks instead of MDX. Pydantic-validated AI output instead of free-text JSON. Response schemas instead of trust. The shape of the data does the heavy lifting.",
  },
  {
    title: "Write the decisions down.",
    body: "Every non-trivial call lives in a doc: AGENTS.md, SECURITY.md, ITALIAN-ROLLOUT.md, PORTFOLIO_INVENTORY.md. Future-me gets the why, not just the what.",
  },
];

export const earlierRoles = [
  "Junior Supply Chain Specialist · Alstom · Warsaw (2018)",
  "Supply Chain Planning Intern · Reckitt · Warsaw (2015, 2017)",
];

export const education = [
  {
    degree: "MSc, Business Management and Quality Sciences",
    school: "Warsaw School of Economics, 2022",
  },
  {
    degree: "BEng, Logistics",
    school: "Poznan University of Technology, 2015",
  },
  {
    degree: "Exchange Semester, Logistics",
    school: "University of Maribor, Slovenia",
  },
];

export const certifications = [
  "Leveraging Big Data for Business Intelligence · University of Cambridge (online programme, 2024)",
  "Data Science for Business · Harvard Business School (online programme, 2024)",
];
