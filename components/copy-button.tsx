"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Inline "copy to clipboard" button — used on the CV-ready summary so
 * a recruiter can paste your blurb straight into an internal tracker
 * or hiring manager email.
 */
export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API blocked (rare; HTTPS-only, user gesture required).
      // Silent fallback — button just doesn't flip state.
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-lg border border-stone-300/70 bg-white/70 px-3 py-1.5 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-white"
      aria-live="polite"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-600" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {label}
        </>
      )}
    </button>
  );
}
