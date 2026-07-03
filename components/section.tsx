import type { ReactNode } from "react";

/**
 * Page section primitive — gives every block consistent vertical
 * rhythm and an optional eyebrow / title pair.
 */
export function Section({
  eyebrow,
  title,
  children,
  className = "",
  id,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mt-20 scroll-mt-24 md:mt-28 ${className}`}>
      {eyebrow ? (
        <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-stone-500">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
          {title}
        </h2>
      ) : null}
      <div className={eyebrow || title ? "mt-6" : ""}>{children}</div>
    </section>
  );
}

/** Slim divider used to break long pages. */
export function Hairline() {
  return <hr className="mt-20 border-stone-200/70 md:mt-28" />;
}
