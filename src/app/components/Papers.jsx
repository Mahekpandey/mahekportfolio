"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/motion";
import { papers } from "../papers/papers";

export const Papers = () => {
  const latest = papers.slice(0, 4);
  return (
    <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-dim">Papers, explained</p>
            <h2 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.75rem)] text-[#f6f2ea]">New AI research, in plain English</h2>
          </div>
          <p className="max-w-sm font-light leading-relaxed text-muted">
            I read recent papers and write down what I understood — with everyday examples and the questions I&apos;m still left
            with.
          </p>
        </div>
      </Reveal>

      <ul className="mt-16 border-b border-[var(--line)]">
        {latest.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={i * 0.05}>
              <Link
                href={`/papers/${p.slug}`}
                className="group grid gap-2 border-t border-[var(--line)] py-8 md:grid-cols-[150px_1fr_auto] md:items-baseline md:gap-10"
              >
                <span className="text-sm font-light text-dim">
                  {p.dateLabel}
                  <span className="mt-1 block text-xs uppercase tracking-widest text-[#bfa273]">{p.topic}</span>
                </span>
                <span>
                  <span className="block text-xl font-normal leading-snug text-[#f6f2ea] transition group-hover:text-[#d1c0a3] md:text-2xl">
                    {p.plainTitle}
                  </span>
                  <span className="mt-2 block text-sm font-light text-dim">{p.paperTitle}</span>
                </span>
                <span className="hidden items-center gap-1 text-sm font-light text-dim transition group-hover:text-[#bfa273] md:flex">
                  My notes <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <Link href="/papers" className="mt-10 inline-flex items-center gap-2 text-sm text-[#f6f2ea] transition hover:text-[#d1c0a3]">
          All {papers.length} papers <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </div>
  );
};
