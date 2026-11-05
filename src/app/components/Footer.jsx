"use client";

import Link from "next/link";
import { scrollToId } from "./ui/SmoothScroll";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm font-light text-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {year} Mahek Pandey · AI Engineer, Mumbai</p>
        <div className="flex gap-6">
          <Link href="/papers" className="transition hover:text-[#f6f2ea]">
            Papers
          </Link>
          <a href="https://github.com/Mahekpandey" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#f6f2ea]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mahek-pandey-39243b258/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#f6f2ea]">
            LinkedIn
          </a>
          <button onClick={() => scrollToId("home")} className="transition hover:text-[#f6f2ea]">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
