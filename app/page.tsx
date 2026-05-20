/**
 * Portfolio index — single landing page that *is* the CV.
 *
 * Layout intent:
 *   1. Header with name + summary + contact (recruiter scan ≤ 6 s)
 *   2. Case-studies grid (the proof — currently 1 entry)
 *   3. Experience (condensed CV body)
 *   4. Education + certifications + languages
 *   5. Footer with contact
 *
 * Recruiter mental model: "Who · What proof · What experience · How to reach."
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Github, Linkedin, MapPin } from "lucide-react";
import {
  caseStudies,
  certifications,
  earlierRoles,
  education,
  experience,
  now,
  principles,
  site,
} from "@/lib/site";
import { Hairline, Section } from "@/components/section";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-20">
      {/* ── Header ────────────────────────────────────────────────── */}
      <header className="md:grid md:grid-cols-[1fr_auto] md:gap-12">
        <div className="min-w-0">
          <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-stone-500">
            Portfolio · {new Date().getFullYear()}
          </p>
          <h1
            className="shimmer mt-4 text-[clamp(2.75rem,8vw,5rem)] font-extrabold leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {site.name}
          </h1>
          <p
            className="mt-4 max-w-2xl text-xl font-medium text-stone-700 md:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {site.title}.
          </p>
        </div>

        {/* Portrait — square crop, cropping the wide source on the
            sides per Jakub's note. Tucked top-right on desktop, hidden
            on mobile so the headline gets the first viewport to itself. */}
        <div className="relative hidden h-40 w-40 shrink-0 self-start overflow-hidden rounded-2xl border border-stone-200/70 shadow-[0_18px_40px_rgba(28,26,22,0.12)] md:block md:h-48 md:w-48 lg:h-56 lg:w-56">
          <Image
            src="/me.jpg"
            alt="Portrait of Jakub Sykulski"
            fill
            sizes="(min-width: 1024px) 224px, 192px"
            className="object-cover object-[60%_30%]"
            priority
          />
        </div>

        <p className="mt-6 max-w-2xl text-[16px] leading-[1.75] text-stone-700 md:col-span-2">
          {site.summary}
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-600 md:col-span-2">
          <li className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-stone-400" aria-hidden />
            {site.location}
          </li>
          <li>{site.languages}</li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <Mail className="h-4 w-4 text-stone-400" aria-hidden />
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <Github className="h-4 w-4 text-stone-400" aria-hidden />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
            >
              <Linkedin className="h-4 w-4 text-stone-400" aria-hidden />
              LinkedIn
            </a>
          </li>
        </ul>
      </header>

      {/* ── Now — current focus + what you're open to ─────────────── */}
      <Section eyebrow={`Now · ${now.month}`} title="What I'm working on">
        <ul className="grid grid-cols-1 gap-3 text-[15.5px] leading-[1.7] text-stone-700 md:grid-cols-3">
          {now.bullets.map((line, i) => (
            <li
              key={i}
              className="rounded-2xl border border-stone-200/70 bg-white/50 p-5"
            >
              {line}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Case studies (the proof) ──────────────────────────────── */}
      <Section eyebrow="Selected work" title="Case studies">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <li key={cs.slug}>
              <Link
                href={cs.href}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-stone-200/80 bg-gradient-to-br from-[#5d6fff]/[0.10] via-white/60 to-white/40 p-7 shadow-[0_18px_48px_rgba(39,27,11,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_56px_rgba(39,27,11,0.12)]"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1a2f73]/70">
                    {cs.domain}
                  </p>
                  <h3
                    className="mt-2 text-2xl font-semibold tracking-tight text-stone-900"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cs.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-stone-700">
                    {cs.oneLiner}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                    {cs.status}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1a2f73] transition group-hover:gap-2">
                    Read case study
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Hairline />

      {/* ── Experience ────────────────────────────────────────────── */}
      <Section eyebrow="Track record" title="Experience">
        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`} className="grid gap-2 md:grid-cols-[1fr_2fr] md:gap-10">
              <div>
                <p
                  className="text-lg font-semibold text-stone-900"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {job.role}
                </p>
                <p className="text-sm text-stone-600">{job.org}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-stone-500">
                  {job.period}
                </p>
              </div>
              <ul className="space-y-2 text-[15px] leading-[1.7] text-stone-700">
                {job.bullets.map((b, i) => (
                  <li key={i} className="relative pl-5">
                    <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-stone-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-10 border-t border-stone-200/70 pt-6 text-sm text-stone-600">
          <p className="font-semibold uppercase tracking-wider text-stone-500">
            Earlier roles
          </p>
          <ul className="mt-2 space-y-1">
            {earlierRoles.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Hairline />

      {/* ── Education + certs ─────────────────────────────────────── */}
      <Section eyebrow="Foundations" title="Education & certifications">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Education
            </p>
            <ul className="mt-3 space-y-3 text-[15px] leading-[1.6] text-stone-700">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-semibold text-stone-900">{e.degree}</p>
                  <p className="text-stone-600">{e.school}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Certifications
            </p>
            <ul className="mt-3 space-y-2 text-[15px] leading-[1.6] text-stone-700">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Hairline />

      {/* ── How I work — principles drawn from real decisions.
           Moved below Education so it closes the page on a thoughtful
           note rather than interrupting CV scan flow. */}
      <Section eyebrow="The way I work" title="How I work">
        <p className="max-w-3xl text-[16px] leading-[1.75] text-stone-700">
          Five principles drawn from the two case studies above, not
          from a poster. Each one points at a real decision a recruiter
          can verify by clicking through.
        </p>
        <ol className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className="rounded-2xl border border-stone-200/80 bg-white/60 p-6"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-stone-400">
                0{i + 1}
              </p>
              <p
                className="mt-2 text-lg font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.title}
              </p>
              <p className="mt-2 text-[15px] leading-[1.7] text-stone-700">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="mt-24 border-t border-stone-200/70 pt-8 text-sm text-stone-600 md:mt-32">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>
            {site.name} · {site.location}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${site.email}`} className="hover:text-stone-900">
              {site.email}
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-stone-900">
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
