"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BLOG_CATEGORIES, visiblePosts } from "../blog/posts";
import { Reveal } from "./ui/motion";

const PAGE = 8;

export const Blogs = () => {
  const [category, setCategory] = useState("All");
  const [count, setCount] = useState(PAGE);

  const latest = visiblePosts.slice(0, 2);
  const rest = useMemo(() => visiblePosts.slice(2), []);
  const filtered = category === "All" ? rest : rest.filter((p) => p.category === category);
  const shown = filtered.slice(0, count);

  return (
    <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-dim">Writing</p>
        <h2 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.75rem)] text-[#f6f2ea]">Notes from the build</h2>
      </Reveal>

      {/* Latest two, with covers */}
      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10">
        {latest.map((post, i) => (
          <Reveal key={post.link} delay={i * 0.08}>
            <Link href={post.link} className="group block">
              <div className="overflow-hidden rounded-2xl bg-[#171717]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 text-sm font-light text-dim">
                {post.date} <span className="text-[#bfa273]">·</span> {post.readTime}
              </p>
              <h3 className="mt-2 text-2xl font-normal leading-snug text-[#f6f2ea] transition group-hover:text-[#d1c0a3]">{post.title}</h3>
              <p className="mt-3 line-clamp-2 font-light leading-relaxed text-muted">{post.description}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Everything else, as a quiet list */}
      <div className="mt-24 flex flex-wrap gap-x-6 gap-y-2 text-sm" role="tablist" aria-label="Filter posts by topic">
        {BLOG_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={category === c}
            onClick={() => {
              setCategory(c);
              setCount(PAGE);
            }}
            className={`pb-1 transition ${category === c ? "border-b border-[#bfa273] text-[#f6f2ea]" : "font-light text-dim hover:text-muted"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-6 border-b border-[var(--line)]">
        {shown.map((post) => (
          <li key={post.link}>
            <Link
              href={post.link}
              className="group grid gap-1 border-t border-[var(--line)] py-6 md:grid-cols-[150px_1fr_110px_auto] md:items-baseline md:gap-8"
            >
              <span className="text-sm font-light text-dim">{post.date}</span>
              <span className="text-lg font-normal leading-snug text-[#f6f2ea] transition group-hover:text-[#d1c0a3]">{post.title}</span>
              <span className="text-xs uppercase tracking-widest text-dim">{post.category}</span>
              <ArrowUpRight className="hidden h-4 w-4 text-dim transition group-hover:text-[#bfa273] md:block" />
            </Link>
          </li>
        ))}
      </ul>

      {count < filtered.length && (
        <button onClick={() => setCount((c) => c + PAGE)} className="mt-8 text-sm text-[#f6f2ea] transition hover:text-[#d1c0a3]">
          Show more <span className="font-light text-dim">({filtered.length - count})</span>
        </button>
      )}
    </div>
  );
};
