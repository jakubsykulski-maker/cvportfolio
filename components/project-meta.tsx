/**
 * Compact at-a-glance metadata block — sits under the hero of each
 * case study. Recruiter skims it in 5 seconds and knows the scope
 * (timeline, role, tools, users, status) before deciding whether
 * to read the narrative.
 *
 * Format inspired by the Stuart Operations portfolio (deck-style
 * project sheets): each project gets a structured sidebar with
 * objective / outputs / role / tools / users metadata.
 *
 * Keep labels short, values concrete. No marketing adjectives.
 */

import type { ReactNode } from "react";

export type ProjectMetaRow = {
  label: string;
  value: ReactNode;
};

export function ProjectMeta({ rows }: { rows: ProjectMetaRow[] }) {
  return (
    <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-200/60 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {rows.map((row) => (
        <div key={row.label} className="bg-white/70 p-5">
          <dt className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-stone-500">
            {row.label}
          </dt>
          <dd className="mt-2 text-[14.5px] leading-[1.55] text-stone-800">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
