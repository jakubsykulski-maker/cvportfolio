/**
 * Case study #2 — Household operations platform.
 *
 * Recruiter-facing deep dive on a modular private platform that
 * unifies investments, insurance claims, budget, lab results and
 * plant monitoring under one household-scoped data model. The AI
 * angle is a Gemini-driven insurance-claim document extraction
 * pipeline; the engineering angle is the multi-module architecture
 * (event sourcing, immutable audit log, RLS, household-scoped auth).
 *
 * Shared building blocks (cards, steps, stack box, screenshot slot)
 * live in components/case-study.tsx — keep new ones there too.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  ShieldCheck,
  Wallet,
  FlaskConical,
  Sprout,
  Sparkles,
  FileText,
  CheckCircle2,
  Database,
  History,
  Lock,
  Layers,
  Mail,
  Github,
  Linkedin,
  Upload,
  Eye,
  FileDown,
} from "lucide-react";
import { Hairline, Section } from "@/components/section";
import { CopyButton } from "@/components/copy-button";
import { ProjectMeta } from "@/components/project-meta";
import {
  IconCard,
  ImageSlot,
  ModuleCard,
  NumberedStep,
  StackBox,
  TitleBodyCard,
} from "@/components/case-study";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Household operations platform · Case Study · Jakub Sykulski",
  description:
    "A modular private platform that unifies investments, insurance claims, budget, lab results and plant monitoring, with AI-assisted insurance claim intake via Gemini.",
  robots: { index: false, follow: false },
};

const CV_SUMMARY = `Household Operations Platform: AI-assisted modular prototype
Designed and built a private five-module household operations platform (investments, insurance claims, budget, lab results, plants) on Next.js, FastAPI and Supabase. The AI core is a Gemini 2.5 Flash pipeline that turns insurance claim documents (PDFs, photos) into structured, Pydantic-validated claim fields with response_schema, optional human-in-the-loop review, and full audit trail. Engineering depth: event-sourced investments, immutable audit log (DB trigger), Row Level Security as defence-in-depth, household-scoped data model. Same scan-to-structured-data pipeline transfers directly to enterprise claims intake.`;

export default function CaseStudy() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 transition hover:text-stone-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <header className="mt-10">
        <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-stone-500">
          Case study · Insurance · Wealth · Health · Document AI
        </p>
        <h1 className="shimmer mt-4 font-display text-[clamp(2.25rem,6.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight">
          A household operations platform
          <br />
          with AI-assisted claim intake.
        </h1>
        <p className="mt-5 max-w-3xl text-[17px] leading-[1.7] text-stone-700 md:text-lg">
          Five modules (investments, insurance claims, budget, lab results,
          plant monitoring) sharing one household-scoped data model. The AI
          core turns insurance claim documents into structured, validated
          claim fields through Gemini with response_schema and human review.
          A private working prototype for one household; the architecture is the
          transferable part.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={site.demoMailto("Household operations platform")}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-ink px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-ink-deep"
          >
            <Mail className="h-4 w-4" />
            Request demo access
          </a>
          <a
            href="#ai-pipeline"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300/70 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-white"
          >
            Jump to the AI pipeline
          </a>
        </div>

        {/* Hero visual: the investments dashboard tells the breadth
            story in one glance — five modules at once. */}
        <div className="mt-12">
          <HeroDashboardSlot />
        </div>
      </header>

      <ProjectMeta
        rows={[
          { label: "Timeline", value: "Sept 2025 – present" },
          { label: "Role", value: "Product · architecture · data model · AI integration" },
          { label: "Stack", value: "Next.js · FastAPI · Supabase · Gemini · Arduino" },
          { label: "Users", value: "Owner + spouse, single household" },
          { label: "Status", value: "Working prototype · in daily use" },
        ]}
      />

      <Hairline />

      {/* ── The problem ──────────────────────────────────────────── */}
      <Section eyebrow="Context" title="The problem">
        <div className="grid gap-6 text-[16px] leading-[1.75] text-stone-700 md:grid-cols-3">
          <p>
            A household runs on data scattered across broker CSVs, insurance
            paperwork, bank statements, lab PDFs, paper receipts, and a
            handful of spreadsheets. Nothing talks to anything else.
          </p>
          <p>
            Claim reimbursements get lost. Investment performance is hidden
            inside provider portals. Lab results trend invisibly across
            years. Net worth lives in a spreadsheet that only one person
            updates. Plants die when nobody is home.
          </p>
          <p>
            The platform pulls each stream into one household-scoped data
            model with consistent auth, audit and storage, and applies AI
            only where it pays off: the messiest input, insurance claim
            documents.
          </p>
        </div>
      </Section>

      {/* ── Modules ──────────────────────────────────────────────── */}
      <Section eyebrow="What's inside" title="Five modules, one platform">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ModuleCard
            icon={<TrendingUp />}
            tone="blue"
            title="Investments"
            tagline="Event-sourced portfolio across UBS and IBKR"
            body="Daily snapshots derived from a portfolio_events log (CSV imports parsed per broker). yfinance + Frankfurter feed market prices and FX. Scheduled refresh runs twice daily on a Render cron."
          />
          <ModuleCard
            icon={<ShieldCheck />}
            tone="emerald"
            title="Insurance claims"
            tagline="AI-assisted intake + manual workflow"
            body="Upload a claim document (PDF/photo), Gemini extracts the structured fields, a human reviews and confirms before any claim record is created. Attachments, tags, status transitions, exports."
          />
          <ModuleCard
            icon={<Wallet />}
            tone="amber"
            title="Budget"
            tagline="Cash Flow Lite + balance sheet"
            body="Income, contributions and net-worth movement reconcile into a monthly cash-flow estimate, without the burden of categorising every coffee. Balance sheet and monthly closing kept readable on purpose."
          />
          <ModuleCard
            icon={<FlaskConical />}
            tone="purple"
            title="Lab results"
            tagline="PDF parsing, candidate/verified states"
            body="Deterministic pdfplumber pipeline with rule parsers (multilingual, including a dedicated Diagnostyka parser). Results land as candidates; the household verifies or rejects each one. Trends render across time."
          />
          <ModuleCard
            icon={<Sprout />}
            tone="lime"
            title="Plants"
            tagline="Manual ingest + Arduino-ready"
            body="Soil-moisture readings via manual entry or an Arduino/ESP device hitting a hardened HTTPS ingest endpoint with a per-household device key. Moisture timelines, photos, alert thresholds."
          />
          <ModuleCard
            icon={<Layers />}
            tone="stone"
            title="Home control centre"
            tagline="Attention state across all modules"
            body="Top-level dashboard surfaces only what needs attention: unverified labs, claims awaiting reimbursement, plants below moisture threshold, market refresh errors. The platform decides what to show next."
          />
        </ul>
      </Section>

      {/* ── AI pipeline deep dive ────────────────────────────────── */}
      <Section
        eyebrow="The AI core"
        title="From claim document to structured record"
        className="scroll-mt-12"
      >
        <div id="ai-pipeline" />
        <p className="max-w-3xl text-[16px] leading-[1.75] text-stone-700">
          Insurance claim documents are the messiest input the household
          produces: scanned receipts, multi-page PDFs in three languages,
          provider statements with inconsistent layouts. This is where AI
          earns its keep.
        </p>

        <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-6">
          <NumberedStep n={1} icon={<Upload className="h-5 w-5" />} label="Upload" sub="PDF / JPEG / PNG, ≤ 10 MB" />
          <NumberedStep n={2} icon={<Lock className="h-5 w-5" />} label="Validate" sub="MIME + size + rate limit" />
          <NumberedStep n={3} icon={<Sparkles className="h-5 w-5" />} label="Gemini 2.5 Flash" sub="Multimodal, T = 0.1" />
          <NumberedStep n={4} icon={<FileText className="h-5 w-5" />} label="response_schema" sub="Structured JSON only" />
          <NumberedStep n={5} icon={<Eye className="h-5 w-5" />} label="Human review" sub="Prefilled, never auto" />
          <NumberedStep n={6} icon={<CheckCircle2 className="h-5 w-5" />} label="Claim record" sub="With audit trail" />
        </ol>

        <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <TitleBodyCard
            title="response_schema, not free-text JSON"
            body="Gemini is invoked with response_mime_type=application/json and a hand-written response_schema covering every claim field. Output is then re-validated through a Pydantic ExtractionResult with field-level validators (dates, currency, amounts, tag limits). Two gates, two formats; the same drift bug has to escape both."
          />
          <TitleBodyCard
            title="Human-in-the-loop is the default"
            body="No claim record is ever created from a model output alone. The frontend prefills a form, marks AI-filled fields with a badge, and the household member confirms each value before save. A feature flag (ENABLE_INSURANCE_AI_EXTRACTION) can disable the AI path entirely without touching the rest of the module."
          />
          <TitleBodyCard
            title="Persistence captures the raw model output too"
            body="Every call writes an insurance_ai_extractions row containing structured_result, raw_response, status, error_message and model_name. The structured output is what fills the form; the raw response is what we go back to when something looks wrong six months later."
          />
          <TitleBodyCard
            title="Rate limited and key-gated"
            body="The AI extraction endpoints sit on a parse tier (10 req/min). Missing GEMINI_API_KEY in the environment makes the route fail closed with an explicit error, so production won't silently degrade to a different code path."
          />
        </ul>
      </Section>

      {/* ── Product screenshots ──────────────────────────────────── */}
      <Section eyebrow="The product" title="What it looks like">
        <div className="space-y-10 md:space-y-14">
          <ImageSlot
            baseDir="oikero"
            variant="dark"
            label="Insurance · Dashboard"
            caption="Outstanding vs reimbursed, total claims, reimbursement rate, plus a 'Needs attention' queue of drafts and submitted-but-unpaid claims. Acts as the household's working surface, not just a report."
            filename="claims-dashboard.jpg"
            width={2268}
            height={1246}
            alt="Insurance Claims dashboard with KPIs for outstanding, reimbursed, total claims and reimbursement rate, plus a Needs Attention queue and breakdowns by year, person, status and type."
          />
          <ImageSlot
            baseDir="oikero"
            variant="dark"
            label="Insurance · Analytics"
            caption="Claimed vs reimbursed by year, distribution by type, person and status. The same data the dashboard surfaces, rendered for trend reading rather than action."
            filename="insurance-analytics.jpg"
            width={2313}
            height={1272}
            alt="Insurance Analytics view with a bar chart of claimed vs reimbursed by year, a donut chart of claims by type, a horizontal bar chart of claims by person and a status distribution stack."
          />
          <ImageSlot
            baseDir="oikero"
            variant="dark"
            label="Budget · Balance sheet"
            caption="Multi-currency net worth with per-country accounts (CHF / EUR / GBP / PLN) and monthly FX conversion. Cash Flow Lite chooses less reporting on purpose."
            filename="budget.jpg"
            width={2370}
            height={1118}
            alt="Budget Balance Sheet showing total net worth in CHF with per-country breakdowns for United Kingdom, Euro Zone, Poland and Switzerland."
          />
          <ImageSlot
            baseDir="oikero"
            variant="dark"
            label="Lab results · Trends"
            caption="Verified lab values plotted over time against the reference range. Deterministic pdfplumber pipeline parses results from upload; the human verifies before they enter the trend."
            filename="lab-result.jpg"
            width={2277}
            height={1030}
            alt="Lab results trends page showing a bar chart of glucose values over 12 data points across a year, with reference range and a table of dated readings."
          />
          <ImageSlot
            baseDir="oikero"
            variant="dark"
            label="Plants"
            caption="Per-plant moisture timelines, room labels, status badges. Readings arrive from manual entry or an Arduino device hitting a hardened HTTPS endpoint with a per-household key."
            filename="plants.jpg"
            width={2246}
            height={992}
            alt="Plants module dashboard with cards for six plants showing species, room, current moisture percentage and status; one plant is in LOW state, others OK."
          />
        </div>
      </Section>

      {/* ── Decisions ────────────────────────────────────────────── */}
      <Section eyebrow="The hard parts" title="Decisions & trade-offs">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <TitleBodyCard
            title="Modular household OS, not five separate apps"
            body="The first instinct was a portfolio tracker. The better one was a platform: one auth, one household model, one storage pattern, five modules sharing them. The cost is upfront wiring; the payoff is that every new module ships in days, not weeks."
          />
          <TitleBodyCard
            title="Event-sourced investments"
            body="Holdings and snapshots are derived from a portfolio_events table that is the single source of truth. Re-importing a corrected CSV doesn't mutate state; it appends events, and the daily snapshot pipeline rebuilds from there. Audit and correctness for free."
          />
          <TitleBodyCard
            title="FastAPI owns the business logic"
            body="Next.js stays thin: no API routes for domain data. Every domain call goes to FastAPI, which holds Pydantic schemas, household scoping, rate limits and the Gemini calls. The frontend can be rewritten without touching business logic, and the API can outlive the frontend."
          />
          <TitleBodyCard
            title="Supabase as plumbing, not as the app"
            body="Postgres + Auth + Storage. The backend uses the service_role key from server-side; the frontend never queries domain tables directly. Supabase is the database, not the application layer, which means it can be swapped for raw Postgres later if it ever stops fitting."
          />
          <TitleBodyCard
            title="Deterministic for labs, LLM only for claims"
            body="Lab PDFs come from a small number of providers with stable layouts, so a rule-based pdfplumber pipeline handles them with no token cost and full reproducibility. Insurance claim documents have no stable layout; that's where the LLM earns its keep. Match the tool to the shape of the data."
          />
          <TitleBodyCard
            title="Cash Flow Lite: chose less"
            body="A full budget app would have meant categorising every transaction across every bank. Instead I built the minimum that answers the actual question: where did the money go this month, roughly? Detailed expense tracking is deferred behind a feature flag rather than half-built."
          />
        </div>
      </Section>

      {/* ── Production-aware ─────────────────────────────────────── */}
      <Section
        eyebrow="What sets this apart"
        title="Production-aware prototyping"
      >
        <p className="max-w-3xl text-[16px] leading-[1.75] text-stone-700">
          A private household tool doesn't need the discipline of a SaaS,
          but treating it like one means the same code path will scale
          straight to a regulated environment when needed.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <IconCard
            icon={<History />}
            title="Immutable audit log"
            body="Every sensitive mutation writes a row into audit_log: who, when, which household, which entity, what action, what metadata. A Postgres trigger blocks updates and deletes on the table itself, so the log can be queried but never rewritten."
          />
          <IconCard
            icon={<Lock />}
            title="Row Level Security as defence-in-depth"
            body="Application-layer scoping is primary: every request carries a UserContext, and verify_household_access() runs on every sensitive route. Row Level Security on 16 domain tables is the fallback: if the application layer ever has a bug, a leaked anon key still can't cross household boundaries."
          />
          <IconCard
            icon={<Database />}
            title="Household-scoped data model"
            body="Every domain row carries a household_id and resolves through a household-aware repository layer. Multi-household memberships are in the schema today; the UI assumes a default household and switches per profile. Hardening the boundary in the data model meant the UI never had to enforce it."
          />
          <IconCard
            icon={<ShieldCheck />}
            title="Closed allowlist auth, no public signup"
            body="Production is Google OAuth via Supabase, but logins are gated by pre-provisioned app_profiles and household_memberships. An admin script provisions users; auto-provisioning on first login was deliberately rejected. Local dev runs a fail-closed dev_bypass that refuses to start if env is misconfigured."
          />
        </ul>
      </Section>

      {/* ── Stack ─────────────────────────────────────────────────── */}
      <Section eyebrow="Architecture" title="Stack">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <StackBox label="Frontend" items={["Next.js (App Router)", "TypeScript", "Tailwind 4", "Recharts"]} />
          <StackBox label="Backend" items={["FastAPI", "Python 3.12", "Pydantic", "PostgREST client"]} />
          <StackBox label="Data & auth" items={["Supabase Postgres", "Row Level Security", "Supabase Storage", "Google OAuth"]} />
          <StackBox label="AI" items={["Gemini 2.5 Flash", "response_schema", "Pydantic validators", "Feature-flagged"]} />
          <StackBox label="Market data" items={["yfinance", "Frankfurter FX", "Scheduled refresh", "Render cron"]} />
          <StackBox label="Imports & parsing" items={["UBS CSV parser", "IBKR Activity CSV", "pdfplumber rules", "Multilingual lab parsers"]} />
          <StackBox label="Hardware" items={["Arduino / ESP HTTPS ingest", "X-Device-Key auth", "Per-household scoping", "Production allowlist env"]} />
          <StackBox label="Ops" items={["Vercel (FE)", "Render (BE)", "GitHub Actions CI", "Rate-limit tiers"]} />
        </div>
      </Section>

      {/* ── Transferable workflow ────────────────────────────────── */}
      <Section eyebrow="Why this matters" title="The pattern, productised">
        <div className="rounded-3xl border border-stone-200/80 bg-gradient-to-br from-emerald-400/[0.10] via-white/60 to-white/40 p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-800/70">
            Transferable case · Enterprise insurance claim intake
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl">
            The same pipeline runs at 10,000 claims a day.
          </h3>
          <p className="mt-4 max-w-3xl text-[16px] leading-[1.75] text-stone-700">
            The code path that prefills my household&apos;s claim form is
            the same shape an insurer needs for first-notice-of-loss
            intake: a document arrives, validation gates run, Gemini
            extracts to a strict schema, Pydantic re-validates, an adjuster
            confirms or corrects, and the record lands with an audit trail.
            Add per-tenant isolation (already in the schema as household
            scoping), bump the rate-limit tier, and the prototype becomes a
            credible MVP for a regulated environment.
          </p>
          <p className="mt-3 max-w-3xl text-[16px] leading-[1.75] text-stone-700">
            The same shape applies to lab-result extraction from external
            providers, meeting-note triage, or policy-document compliance
            checks. The model is the easy part. What makes it work in
            production is the schema, the validators, the human-in-the-loop
            UX, and the audit log around it. All four are already in this
            codebase.
          </p>
        </div>
      </Section>

      {/* ── My role ──────────────────────────────────────────────── */}
      <Section eyebrow="Honest framing" title="My role">
        <p className="max-w-3xl text-[16px] leading-[1.75] text-stone-700">
          I led product decisions, data modelling and architecture;
          implementation was AI-assisted with Cursor, Claude Code and
          Codex. In practice that meant:
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 text-[15px] leading-[1.7] text-stone-700 md:grid-cols-2">
          {[
            "Picked the modules and the order to build them in: started with investments, the highest-pain household problem, and let it shape the shared foundations.",
            "Designed the data model: household scoping, event-sourced investments, audit log as a first-class table.",
            "Wrote the Gemini extraction schema, the prompt, and the human-review contract; chose where AI helps and where it doesn't.",
            "Made the cuts: deferred budget-planning UI, retired the Streamlit MVP, rejected auto-provisioning on login.",
            "Directed and reviewed AI-assisted implementation across frontend, backend and SQL migrations; treated AI output as a draft, not a finished commit.",
            "Operate it daily across two household members, so every weak spot surfaces fast, gets fixed, and feeds back into the architecture.",
          ].map((line) => (
            <li key={line} className="relative pl-5">
              <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-stone-400" />
              {line}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── CV-ready summary ─────────────────────────────────────── */}
      <Section eyebrow="For your tracker" title="CV-ready summary">
        <div className="rounded-2xl border border-stone-200/70 bg-white/60 p-6 md:p-8">
          <pre className="whitespace-pre-wrap font-serif text-[15px] leading-[1.7] text-stone-800">
{CV_SUMMARY}
          </pre>
          <div className="mt-5">
            <CopyButton text={CV_SUMMARY} label="Copy summary" />
          </div>
        </div>
      </Section>

      {/* ── Contact ──────────────────────────────────────────────── */}
      <Section eyebrow="Talk to me" title="Demo available on request">
        <p className="max-w-3xl text-[16px] leading-[1.75] text-stone-700">
          The platform holds real household financial and health data, so
          access is private by default. Happy to give a guided walkthrough
          on a 20-minute call, or share read-only access to a sanitized
          instance for a hiring loop.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={site.demoMailto("Household operations platform")}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-ink-deep"
          >
            <Mail className="h-4 w-4" />
            Request demo
          </a>
          <a
            href={site.cvPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300/70 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-white"
          >
            <FileDown className="h-4 w-4" />
            Download CV (PDF)
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300/70 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-white"
          >
            <Github className="h-4 w-4" />
            GitHub profile
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300/70 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-white"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </Section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="mt-24 border-t border-stone-200/70 pt-8 text-sm text-stone-600 md:mt-32">
        <p>
          {site.name} · {site.location} · {site.email}
        </p>
      </footer>
    </main>
  );
}

/** Hero variant of the screenshot slot — taller, deeper shadow, no
 *  label chip. Kept inline because it's used once and styled differently
 *  from the in-tour screenshots. */
function HeroDashboardSlot() {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-3xl border border-stone-200/60 bg-screen-dark shadow-[0_24px_72px_rgba(15,32,40,0.25)]">
        <Image
          src="/case-studies/oikero/investments.jpg"
          alt="Investments dashboard of the household operations platform: total value, daily change, valuation coverage, portfolio performance chart and period P/L."
          width={1292}
          height={1440}
          sizes="(min-width: 768px) 1000px, 100vw"
          className="block h-auto w-full"
          priority
        />
      </div>
      <figcaption className="mt-3 text-[14px] leading-[1.55] text-stone-600">
        Investments: event-sourced portfolio derived from a
        portfolio_events log, valued daily against yfinance and
        Frankfurter feeds. One of five modules sharing the same auth,
        household model and storage pattern.
      </figcaption>
    </figure>
  );
}
