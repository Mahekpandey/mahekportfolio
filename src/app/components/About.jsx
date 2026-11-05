"use client";

import { Counter, Reveal } from "./ui/motion";

const NUMBERS = [
  { to: 50, suffix: "K+", label: "learners on the platform I build for" },
  { to: 60, prefix: "~", suffix: "%", label: "fewer unnecessary LLM calls" },
  { to: 21, suffix: "×", label: "faster AI processing at StoryMirror" },
  { to: 20, suffix: "K+", label: "monthly users on FixMyText.in" },
];

export const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-5 py-32 sm:px-8 md:py-44">
      <Reveal>
        <h2 className="font-display mx-auto max-w-4xl text-center text-[clamp(2.6rem,6vw,4.75rem)] text-[#f6f2ea]">
          What does it take to build AI that helps someone actually learn?
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 max-w-2xl space-y-6 text-center text-lg font-light leading-relaxed text-muted">
        <Reveal delay={0.1}>
          <p>
            Not a bigger model. A system that remembers what a student struggles with, finds the right context, and knows when
            not to call a model at all.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p>
            At <span className="text-[#f6f2ea]">Eklavya.io</span>, I build that system — the memory, retrieval and learning logic
            behind a platform that helps students from state-board classrooms to JEE, NEET and medicine.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <p>Before that, I shipped GenAI products and production backends at StoryMirror. And every week, I write about what I learn.</p>
        </Reveal>
      </div>

      <div className="mt-28 grid grid-cols-2 border-t border-[var(--line)] md:grid-cols-4">
        {NUMBERS.map((n, i) => (
          <Reveal key={n.label} delay={i * 0.06}>
            <div className={`py-10 ${i % 2 ? "pl-6" : "pr-6"} md:px-6 ${i > 0 ? "md:border-l md:border-[var(--line)]" : "md:pl-0"} ${i % 2 ? "border-l border-[var(--line)] md:border-l" : ""}`}>
              <p className="font-display text-5xl text-[#f6f2ea] sm:text-6xl">
                <Counter to={n.to} prefix={n.prefix} suffix={n.suffix} />
              </p>
              <p className="mt-3 text-sm font-light leading-snug text-muted">{n.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
