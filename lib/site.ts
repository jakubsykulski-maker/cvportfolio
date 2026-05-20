/**
 * Single source of truth for personal data on the portfolio.
 *
 * Editing here updates the index page, the case-study footer, and
 * any future contact CTAs. Keep mailto subject lines stable so
 * recruiters' inbox filters don't break across edits.
 */

export const site = {
  name: "Jakub Sykulski",
  title: "Operations & Analytics · AI-assisted product prototyping",
  location: "Nyon · Geneva area, Switzerland",
  languages: "EN proficient · FR intermediate · PL native",

  summary:
    "Operations and analytics professional with 8+ years across the Bank for International Settlements, Stuart (DPD Group), and FlixBus. Since 2025, prototyping AI-assisted internal tools around a single pattern — messy input becomes structured, validated, auditable data — with two shipped instances so far: a household operations platform and a language-learning app.",

  email: "jakub.sykulski@gmail.com",
  phone: "+41 76 746 5124",

  // Public profiles. Update once GitHub username is confirmed for public use.
  github: "https://github.com/jakubsykulski-maker",
  linkedin: "https://www.linkedin.com/in/jakubsykulski/",

  // Used by mailto buttons. Stable subject = recruiter filter friendly.
  demoMailto: (caseStudy: string) =>
    `mailto:jakub.sykulski@gmail.com?subject=${encodeURIComponent(
      `Demo access — ${caseStudy}`,
    )}&body=${encodeURIComponent(
      "Hi Jakub,\n\nI saw your case study at https://...\n\nI'd like to see a live demo. Could you share access?\n\nThanks,\n",
    )}`,
};

export type CaseStudy = {
  slug: string;
  title: string;
  oneLiner: string;
  domain: string; // e.g. "Education · Knowledge workflows"
  status: "Live, private" | "In progress" | "Concept";
  href: string;
  accent: "blue" | "amber" | "emerald";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "household-ops-platform",
    title: "Household operations platform (Oikero)",
    oneLiner:
      "Five-module household OS — investments, insurance, budget, lab results, plants — with AI-assisted insurance claim intake via Gemini.",
    domain: "Insurance · Wealth · Health · Document AI",
    status: "Live, private",
    href: "/case-studies/household-ops-platform",
    accent: "emerald",
  },
  {
    slug: "french-ai-learning-app",
    title: "French AI Learning App",
    oneLiner:
      "Photo of handwritten classroom notes → structured vocabulary cards, explanations and revision material, via Gemini.",
    domain: "Education · Knowledge workflows",
    status: "Live, private",
    href: "/case-studies/french-ai-learning-app",
    accent: "blue",
  },
];

export const experience = [
  {
    role: "AI-assisted Product Prototyping",
    org: "Independent · Switzerland",
    period: "September 2025 – Present",
    bullets: [
      "Working a single pattern across two shipped prototypes: messy input → structured, validated data via Gemini with response_schema, persisted with audit trail and human review.",
      "Oikero — modular household operations platform (investments, insurance claims, budget, lab results, plants) with AI-assisted claim document intake (Gemini 2.5 Flash → Pydantic-validated claim fields). Event-sourced investments, immutable audit log, household-scoped Row Level Security as defence-in-depth.",
      "French Learning App — photo of handwritten classroom notes → structured vocabulary cards with multi-focus extraction (vocab, grammar, conjugation, translation), print-ready revision output. Three-layer defence against prompt injection.",
      "Across both: defined the data model and prompt architecture, made the cuts (Italian rollout dropped after Wave A), and accelerated implementation with Cursor, Claude Code and Codex.",
    ],
  },
  {
    role: "Operations Manager",
    org: "Bank for International Settlements · Basel",
    period: "November 2024 – August 2025",
    bullets: [
      "Innovation Hub Strategy Team: capacity planning and reporting across 8 global innovation teams in 5 time zones.",
      "Coordinated the BIS Academia Workshop (CHF 200,000 budget) end-to-end, including final reporting.",
      "Translated planning data into senior-leadership recommendations on resourcing and delivery timelines.",
    ],
  },
  {
    role: "Operations Manager / Business Analyst",
    org: "Stuart (DPD Group) · Warsaw",
    period: "March 2021 – April 2024",
    bullets: [
      "Built 50+ dashboards in SQL, Excel, Power BI and Tableau used for daily operational decisions across 7 cities.",
      "Coordinated a courier network scaling from 120 to 800 weekly couriers alongside 600%+ delivery volume growth.",
      "Managed €500k+ monthly courier payouts with automated verification — 100% payout accuracy.",
      "Reduced financial losses ~50% on €350k/month courier transactions via fraud-detection controls (with Data & Finance).",
      "Designed SQL → Excel → Mailchimp pipeline delivering personalised weekly performance reports to 800+ couriers.",
    ],
  },
  {
    role: "Operations Executive",
    org: "FlixBus · Warsaw",
    period: "September 2018 – January 2021",
    bullets: [
      "Managed 20 bus partner relationships, ensuring standards compliance and stronger collaboration.",
      "Built Power BI dashboards on NPS and customer feedback to inform operational decisions.",
    ],
  },
];

/**
 * What you're shipping this month + what you're open to. Recruiter
 * reads this in 5 seconds and knows whether to bother. Update the
 * `month` string when you cycle.
 */
export const now = {
  month: "November 2026",
  bullets: [
    "Shipping a household operations platform (Oikero) — five modules, AI-assisted insurance claim intake live for two users.",
    "Hardening the French learning app — multi-focus scan reliability, partial-success UX, public sanitized architecture docs.",
    "Open to Data, BI, Operations and Product roles in the Geneva-Lausanne-Zurich area. Insurance, wealth and healthtech especially welcome.",
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
    body: "The Italian rollout was reverted after one wave when the upside stopped justifying the surface. The planning docs stayed; the code went. Knowing when to cut is a feature.",
  },
  {
    title: "Structured data over freeform.",
    body: "Typed content blocks instead of MDX. Pydantic-validated AI output instead of free-text JSON. Response schemas instead of trust. The shape of the data does the heavy lifting.",
  },
  {
    title: "Write the decisions down.",
    body: "Every non-trivial call lives in a doc — AGENTS.md, SECURITY.md, ITALIAN-ROLLOUT.md, PORTFOLIO_INVENTORY.md. Future-me gets the why, not just the what.",
  },
];

export const earlierRoles = [
  "Junior Supply Chain Specialist · Alstom · Warsaw (2018)",
  "Supply Chain Planning Intern · Reckitt · Warsaw (2015, 2017)",
];

export const education = [
  {
    degree: "MSc, Business Management and Quality Sciences",
    school: "Warsaw School of Economics",
  },
  {
    degree: "BEng, Logistics",
    school: "Poznan University of Technology",
  },
  {
    degree: "Exchange Semester, Logistics",
    school: "University of Maribor, Slovenia",
  },
];

export const certifications = [
  "Data Science for Business — Harvard Business School (2024)",
  "Leveraging Big Data for Business Intelligence — University of Cambridge (2024)",
];
