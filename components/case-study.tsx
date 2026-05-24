/**
 * Shared building blocks used across case-study pages.
 *
 * The two case-study `page.tsx` files used to declare these inline.
 * Pulled here so the styling lives in one place and new case studies
 * can drop them in without re-implementation.
 *
 * Strictly presentational — no data, no I/O. Each block accepts only
 * the content it renders.
 */

import type { ReactNode } from "react";
import Image from "next/image";

/* ── Cards ────────────────────────────────────────────────────────── */

/** Plain title + body card. Used for "Decisions & trade-offs" and the
 *  notes around the AI pipeline. */
export function TitleBodyCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white/60 p-6">
      <p className="font-display text-base font-semibold text-stone-900">
        {title}
      </p>
      <p className="mt-2 text-[15px] leading-[1.7] text-stone-700">{body}</p>
    </div>
  );
}

/** Title + body card with a leading emerald-tinted icon. Used for the
 *  "Production-aware prototyping" grids. Renders as an `<li>` so the
 *  containing `<ul>` semantics stay correct. */
export function IconCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="rounded-2xl border border-stone-200/80 bg-white/60 p-6">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-800 ring-1 ring-emerald-500/20">
        {icon}
      </div>
      <p className="mt-3 font-display text-base font-semibold text-stone-900">
        {title}
      </p>
      <p className="mt-2 text-[15px] leading-[1.7] text-stone-700">{body}</p>
    </li>
  );
}

/* ── Oikero module grid ───────────────────────────────────────────── */

export type ModuleTone =
  | "blue"
  | "emerald"
  | "amber"
  | "purple"
  | "lime"
  | "stone";

const MODULE_TONE: Record<ModuleTone, { wrap: string; icon: string }> = {
  blue: {
    wrap: "bg-accent/10 ring-accent/20",
    icon: "text-accent-deep",
  },
  emerald: {
    wrap: "bg-emerald-500/10 ring-emerald-500/20",
    icon: "text-emerald-800",
  },
  amber: {
    wrap: "bg-warm/15 ring-warm/30",
    icon: "text-warm-ink",
  },
  purple: {
    wrap: "bg-purple-500/10 ring-purple-500/20",
    icon: "text-purple-800",
  },
  lime: {
    wrap: "bg-lime-500/15 ring-lime-500/25",
    icon: "text-lime-800",
  },
  stone: {
    wrap: "bg-stone-500/10 ring-stone-500/20",
    icon: "text-stone-800",
  },
};

export function ModuleCard({
  icon,
  tone,
  title,
  tagline,
  body,
}: {
  icon: ReactNode;
  tone: ModuleTone;
  title: string;
  tagline: string;
  body: string;
}) {
  const t = MODULE_TONE[tone];
  return (
    <li className="rounded-2xl border border-stone-200/80 bg-white/60 p-6">
      <div
        className={`grid h-11 w-11 place-items-center rounded-xl ring-1 ${t.wrap} ${t.icon}`}
      >
        {icon}
      </div>
      <p className="mt-3 font-display text-lg font-semibold text-stone-900">
        {title}
      </p>
      <p className="mt-0.5 text-[12px] font-bold uppercase tracking-wider text-stone-500">
        {tagline}
      </p>
      <p className="mt-3 text-[14.5px] leading-[1.7] text-stone-700">{body}</p>
    </li>
  );
}

/* ── Numbered pipeline / workflow step ────────────────────────────── */

export type StepTone = "accent" | "emerald";

const STEP_TONE: Record<StepTone, string> = {
  accent: "bg-accent/10 text-accent-deep ring-1 ring-accent/20",
  emerald: "bg-emerald-500/10 text-emerald-800 ring-1 ring-emerald-500/20",
};

/** Numbered step in a pipeline or workflow grid. Same shape across
 *  both case studies; tone differs (French uses accent blue, Oikero
 *  uses emerald to match its "Insurance" green). */
export function NumberedStep({
  n,
  icon,
  label,
  sub,
  tone = "emerald",
}: {
  n: number;
  icon: ReactNode;
  label: string;
  sub: string;
  tone?: StepTone;
}) {
  return (
    <li className="relative rounded-2xl border border-stone-200/80 bg-white/60 p-5">
      <span className="absolute right-3 top-3 text-[10px] font-bold text-stone-300">
        0{n}
      </span>
      <div
        className={`grid h-10 w-10 place-items-center rounded-xl ${STEP_TONE[tone]}`}
      >
        {icon}
      </div>
      <p className="mt-3 font-display text-sm font-semibold text-stone-900">
        {label}
      </p>
      <p className="mt-0.5 text-[12px] text-stone-600">{sub}</p>
    </li>
  );
}

/* ── Architecture stack box ───────────────────────────────────────── */

export function StackBox({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white/60 p-5">
      <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
        {label}
      </p>
      <ul className="mt-3 space-y-1 text-[14px] text-stone-700">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

/* ── Product screenshot slot ──────────────────────────────────────── */

/** Renders a screenshot from /public/case-studies/<baseDir>/<filename>
 *  at natural aspect ratio. The label sits above (never overlaid) so
 *  it can't collide with the screenshot's own header text.
 *
 *  `variant: "dark"` wraps in a near-black frame for dashboard shots
 *  with their own dark chrome (Oikero); `"light"` uses a cream tint
 *  for screenshots with light backgrounds (French app).
 *
 *  `sizes` defaults to a single-column layout (`100vw` mobile, 1000px
 *  desktop). Pass `"(min-width: 768px) 50vw, 100vw"` for two-column
 *  grids. */
export function ImageSlot({
  baseDir,
  label,
  caption,
  filename,
  alt,
  width,
  height,
  variant = "light",
  sizes = "(min-width: 768px) 1000px, 100vw",
  wide = false,
  priority = false,
}: {
  baseDir: string;
  label: string;
  caption: string;
  filename: string;
  alt: string;
  width: number;
  height: number;
  variant?: "light" | "dark";
  sizes?: string;
  wide?: boolean;
  priority?: boolean;
}) {
  const frame =
    variant === "dark"
      ? "border-stone-200/60 bg-screen-dark shadow-[0_18px_48px_rgba(15,32,40,0.20)]"
      : "border-stone-200/80 bg-cream-deep/40";
  return (
    <figure className={wide ? "md:col-span-2" : ""}>
      <span className="inline-flex rounded-full border border-stone-300/70 bg-white/70 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-stone-600">
        {label}
      </span>
      <div className={`relative mt-3 overflow-hidden rounded-2xl border ${frame}`}>
        <Image
          src={`/case-studies/${baseDir}/${filename}`}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className="block h-auto w-full"
          priority={priority}
        />
      </div>
      <figcaption className="mt-3 text-[14px] leading-[1.6] text-stone-600">
        {caption}
      </figcaption>
    </figure>
  );
}
