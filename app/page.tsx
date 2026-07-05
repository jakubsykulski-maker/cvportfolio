/**
 * Portfolio index — single landing page that *is* the CV.
 *
 * Layout intent:
 *   1. Sticky mini-nav (the page runs ~6 screens; recruiters jump)
 *   2. Header: name + availability + summary + CTAs (scan ≤ 6 s)
 *   3. Case-studies grid — the proof, straight after the hero
 *   4. Now — current focus
 *   5. Experience (condensed CV body)
 *   6. Education + certifications
 *   7. How I work + contact CTA + footer
 *
 * Recruiter mental model: "Who · What proof · What's current ·
 * What experience · How to reach."
 */

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
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
    <>
      {/* ── Sticky mini-nav ───────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 border-b border-stone-200/60 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 md:px-10">
          <a
            href="#top"
            className="font-display text-sm font-bold tracking-tight text-stone-900"
          >
            <span className="md:hidden">JS</span>
            <span className="hidden md:inline">Jakub Sykulski</span>
          </a>
          <div className="flex items-center gap-5 text-sm text-stone-600">
            <a href="#work" className="transition hover:text-stone-900">
              Work
            </a>
            <a href="#experience" className="transition hover:text-stone-900">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-stone-900">
              Contact
            </a>
            <a
              href={site.cvPdf}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-lg border border-stone-300/70 bg-white/60 px-3 py-1.5 font-medium text-stone-700 transition hover:bg-white md:inline-flex"
            >
              <FileDown className="h-3.5 w-3.5" aria-hidden />
              CV (PDF)
            </a>
          </div>
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
        {/* ── Header ──────────────────────────────────────────────── */}
        <header className="md:grid md:grid-cols-[1fr_auto] md:gap-12">
          <div className="min-w-0">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-stone-500">
                Portfolio · {new Date().getFullYear()}
              </p>
              {/* Mobile-only avatar — most first visits arrive from a
                  LinkedIn DM on a phone. Keeps the hero human without
                  eating the viewport. */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-stone-200/70 shadow-sm md:hidden">
                <Image
                  src="/me.jpg"
                  alt="Portrait of Jakub Sykulski"
                  fill
                  sizes="56px"
                  className="object-cover object-[60%_30%]"
                />
              </div>
            </div>
            <h1 className="shimmer mt-4 font-display text-[clamp(2.75rem,8vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
              {site.name}
            </h1>
            <p className="mt-4 max-w-2xl font-display text-xl font-medium text-stone-700 md:text-2xl">
              {site.title}
            </p>

            {/* Availability — the one fact every recruiter scans for. */}
            <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-600/25 bg-emerald-500/10 px-3.5 py-1.5 text-[13px] font-semibold leading-snug text-emerald-900">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                aria-hidden
              />
              {site.availability}
            </p>

            <p className="mt-6 max-w-2xl text-[16px] leading-[1.75] text-stone-700">
              {site.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-deep px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-darker"
              >
                See the case studies
                <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={site.cvPdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300/70 bg-white/60 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-white"
              >
                <FileDown className="h-4 w-4" aria-hidden />
                Download CV (PDF)
              </a>
            </div>
          </div>

          {/* Portrait — desktop only; the summary fills the space
              beside it so the hero carries no dead band. */}
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

          {/* Employer strip — names recruiters pattern-match on.
              Employers only; certs stay in Education. */}
          <div className="mt-10 flex flex-wrap items-center gap-2 md:col-span-2">
            <span className="mr-1 text-[11px] font-bold uppercase tracking-[0.14em] text-stone-500">
              Previously at
            </span>
            {site.previously.map((org) => (
              <span
                key={org}
                className="rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-[12.5px] font-medium text-stone-700"
              >
                {org}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-2 text-sm text-stone-600 md:col-span-2">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-stone-400" aria-hidden />
                {site.location}
              </li>
              <li>{site.languages}</li>
            </ul>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
                >
                  <Phone className="h-4 w-4 text-stone-400" aria-hidden />
                  {site.phone}
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
          </div>
        </header>

        {/* ── Case studies (the proof — straight after the hero) ──── */}
        <Section id="work" eyebrow="Selected work" title="Case studies">
          <p className="-mt-2 max-w-2xl text-[15px] leading-[1.65] text-stone-600">
            Two private AI-assisted prototypes around the same pattern:
            messy input becomes structured, validated data. Click either
            card for the full architecture, decisions and screenshots.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => {
              const isEmerald = cs.accent === "emerald";
              return (
                <li key={cs.slug}>
                  <Link
                    href={cs.href}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_18px_48px_rgba(39,27,11,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(39,27,11,0.14)] ${
                      isEmerald
                        ? "hover:border-emerald-400/40"
                        : "hover:border-accent/40"
                    }`}
                    aria-label={`Read the ${cs.title} case study`}
                  >
                    {/* Thumbnail — the visual hook. Aspect-locked so
                        cards align in the grid regardless of source. */}
                    <div
                      className={`relative aspect-[16/10] overflow-hidden ${
                        isEmerald ? "bg-screen-dark" : "bg-cream-deep"
                      }`}
                    >
                      <Image
                        src={cs.thumbnail.src}
                        alt={cs.thumbnail.alt}
                        width={cs.thumbnail.width}
                        height={cs.thumbnail.height}
                        sizes="(min-width: 768px) 500px, 100vw"
                        className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                      <span
                        className={`absolute left-4 top-4 inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] backdrop-blur-sm ${
                          isEmerald
                            ? "bg-white/15 text-white/95"
                            : "bg-white/85 text-stone-700"
                        }`}
                      >
                        {cs.status}
                      </span>
                      <span
                        className={`absolute right-4 top-4 inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] backdrop-blur-sm ${
                          isEmerald
                            ? "bg-white/15 text-white/95"
                            : "bg-white/85 text-stone-700"
                        }`}
                      >
                        {cs.readMinutes}-min read
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-7">
                      <p
                        className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
                          isEmerald
                            ? "text-emerald-800/80"
                            : "text-accent-deep/70"
                        }`}
                      >
                        {cs.domain}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-stone-900">
                        {cs.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.65] text-stone-700">
                        {cs.oneLiner}
                      </p>

                      {/* Stat chips — concrete facts, scannable */}
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {cs.stats.map((s) => (
                          <li
                            key={s}
                            className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11.5px] font-medium text-stone-600"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>

                      {/* Prominent CTA — pushes to bottom of card */}
                      <span
                        className={`mt-6 inline-flex w-fit items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition group-hover:gap-3 ${
                          isEmerald
                            ? "bg-emerald-700 group-hover:bg-emerald-800"
                            : "bg-accent-deep group-hover:bg-accent-darker"
                        }`}
                      >
                        Read case study
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* ── Now — current focus + what you're open to ───────────── */}
        <Section id="now" eyebrow={`Now · ${now.month}`} title="What I'm working on">
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

        <Hairline />

        {/* ── Experience ──────────────────────────────────────────── */}
        <Section id="experience" eyebrow="Track record" title="Experience">
          <ol className="space-y-10">
            {experience.map((job) => (
              <li
                key={`${job.org}-${job.period}`}
                className="grid gap-2 md:grid-cols-[1fr_2fr] md:gap-10"
              >
                <div>
                  <p className="font-display text-lg font-semibold text-stone-900">
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

        {/* ── Education + certs ───────────────────────────────────── */}
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

        {/* ── How I work — principles drawn from real decisions. ──── */}
        <Section id="how-i-work" eyebrow="The way I work" title="How I work">
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
                <p className="mt-2 font-display text-lg font-semibold text-stone-900">
                  {p.title}
                </p>
                <p className="mt-2 text-[15px] leading-[1.7] text-stone-700">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Hairline />

        {/* ── Contact CTA — the page shouldn't end without an ask ── */}
        <Section id="contact" eyebrow="Contact" title="Let's talk">
          <p className="max-w-3xl text-[16px] leading-[1.75] text-stone-700">
            The fastest way to reach me is email. Send a role description
            and I&apos;ll answer honestly whether it fits. Happy to walk
            through either case study on a 20-minute call.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent-deep px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-darker"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email me
            </a>
            <a
              href={site.cvPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300/70 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-white"
            >
              <FileDown className="h-4 w-4" aria-hidden />
              Download CV (PDF)
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300/70 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-white"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300/70 bg-white/60 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-white"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          </div>
        </Section>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <footer className="mt-24 border-t border-stone-200/70 pt-8 text-sm text-stone-600 md:mt-32">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>
              {site.name} · {site.location}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${site.email}`} className="hover:text-stone-900">
                {site.email}
              </a>
              <a
                href={site.cvPdf}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-900"
              >
                CV (PDF)
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-900"
              >
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
    </>
  );
}
