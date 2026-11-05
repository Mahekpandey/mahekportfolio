"use client";

import { useState } from "react";
import { Reveal } from "./ui/motion";

const EMAIL = "mahekpandey.work@gmail.com";

const LINKS = [
  { label: "GitHub", href: "https://github.com/Mahekpandey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mahek-pandey-39243b258/" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,#24221f,transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-5 py-36 text-center sm:px-8 md:py-48">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-dim">Contact</p>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-[clamp(3rem,8vw,6.5rem)] text-[#f6f2ea]">
            Let&apos;s build something that matters
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-lg text-lg font-light leading-relaxed text-muted">
            AI products, learning systems, or a thought on one of my posts — my inbox is open.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="glass mx-auto mt-12 inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm">
            <button onClick={copy} className="font-normal text-[#f6f2ea]" aria-live="polite">
              {copied ? "Copied ✓" : EMAIL}
            </button>
            <a href={`mailto:${EMAIL}`} className="btn-gold rounded-full px-5 py-2.5 font-medium transition hover:brightness-110">
              Say hi
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center gap-8 text-sm font-light text-muted">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="transition hover:text-[#f6f2ea]"
              >
                {l.label}
              </a>
            ))}
            <span className="text-dim">Mumbai, India</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
