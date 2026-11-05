"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/motion";

const PROJECTS = [
  {
    title: "DyslexiaDX",
    line: "Early dyslexia detection with eye tracking, reading analysis, handwriting recognition and OCR.",
    tech: "React · Flask · TensorFlow · OpenCV · MediaPipe",
    href: "https://github.com/Mahekpandey/DyslexiaDetection",
  },
  {
    title: "PalletSense",
    line: "AI pallet tracking with deviation detection — 95% accuracy and an estimated 32% cost saving.",
    tech: "Anomaly detection · GPS · Mesh networking",
  },
  {
    title: "SoulBuddy",
    line: "Spiritual guidance through AI, 3D visualisation and hand tracking.",
    tech: "Next.js · Python · Langflow · AstraDB",
    href: "https://www.youtube.com/watch?v=rUX-Q9DhvLs",
  },
  {
    title: "Social Analytics",
    line: "Langflow + GPT insights that explain social media engagement.",
    tech: "Python · Langflow · AstraDB",
    href: "https://www.youtube.com/watch?v=P4HWShPgY8A",
  },
  {
    title: "Saksham Sevak",
    line: "An Android app for elderly independence, safety and family connection.",
    tech: "Kotlin · Firebase · Sensors",
    href: "https://drive.google.com/file/d/1yZvuHJQx_PEx0bDCPwWPbFF4ZSR0qbtx/view",
  },
  {
    title: "AI Travel Planner",
    line: "Personalised itineraries with AI and Google Maps.",
    tech: "Flutter · Google Cloud · Maps API",
    href: "https://drive.google.com/file/d/1sWnf1uZNM5AcEjouqL6Ky5C_1j90doQY/view?usp=sharing",
  },
];

export const Projects = () => {
  return (
    <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-dim">Projects</p>
        <h2 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.75rem)] text-[#f6f2ea]">Things I built to learn</h2>
      </Reveal>
      <ul className="mt-16 border-b border-[var(--line)]">
        {PROJECTS.map((p) => {
          const Tag = p.href ? "a" : "div";
          return (
            <li key={p.title}>
              <Tag
                {...(p.href ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group grid gap-2 border-t border-[var(--line)] py-7 md:grid-cols-[0.9fr_1.6fr_auto] md:items-baseline md:gap-10"
              >
                <span className="text-xl font-normal text-[#f6f2ea] transition group-hover:text-[#d1c0a3]">{p.title}</span>
                <span>
                  <span className="block font-light leading-relaxed text-muted">{p.line}</span>
                  <span className="mt-1 block text-sm font-light text-dim">{p.tech}</span>
                </span>
                {p.href ? (
                  <ArrowUpRight className="hidden h-5 w-5 text-dim transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#bfa273] md:block" />
                ) : (
                  <span className="hidden w-5 md:block" />
                )}
              </Tag>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
