"use client";

import { Reveal } from "./ui/motion";

const GROUPS = [
  { title: "AI & ML", items: "OpenAI, Gemini, RAG, embeddings & vector search, prompt design, LLM batching & caching, TensorFlow, scikit-learn, OpenCV, MediaPipe" },
  { title: "Backend", items: "Python (FastAPI, Django, Flask), Node.js, Redis, BullMQ, Celery, WebSockets, MongoDB, PostgreSQL" },
  { title: "Cloud", items: "GCP, Docker, Nginx, CI/CD, Sentry, Linux" },
  { title: "Frontend", items: "React, Next.js, Tailwind, Three.js, Kotlin, Flutter" },
];

export const Skills = () => {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-dim">Toolkit</p>
      </Reveal>
      <dl className="mt-8 border-b border-[var(--line)]">
        {GROUPS.map((g) => (
          <Reveal key={g.title}>
            <div className="grid gap-1 border-t border-[var(--line)] py-6 md:grid-cols-[0.9fr_1.6fr] md:gap-10">
              <dt className="text-lg font-normal text-[#f6f2ea]">{g.title}</dt>
              <dd className="font-light leading-relaxed text-muted">{g.items}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </div>
  );
};
