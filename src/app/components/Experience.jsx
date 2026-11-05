"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/motion";

const EKLAVYA_INTRO =
  "Eklavya.io is an AI learning platform for Indian students — state-board learning across states and languages, JEE and NEET preparation, and medical education. I work on the AI underneath it: how it remembers each learner, finds the right context, and decides what a student should learn next.";

const EKLAVYA = [
  {
    name: "Medical.Eklavya",
    kind: "AI study companion for MBBS & NEET-PG — implemented end to end",
    href: "https://medical.eklavya.io",
    paras: [
      [
        "Clinical cases.",
        "Students interview an AI patient, order investigations and then face an examiner, scored against a rubric. The AI plays the patient, but findings and scoring are stored deterministically — so it can never move the goalposts.",
      ],
      [
        "Multimodal.",
        "Text, voice and images in one system: a conversation mode where students speak to the patient or examiner and their spoken answers are transcribed and scored, plus diagnostic visuals like ECGs, X-rays and scans.",
      ],
      [
        "An image pipeline without the image-generation bill.",
        "Training visuals like ECG strips are drawn deterministically in code. When an AI image is genuinely needed, it is checked against a render plan, generated once per asset version, checksummed, stored and reused for every student — and licensed images are tracked by source, licence and review status.",
      ],
      [
        "Persistence & concurrency.",
        "Every case attempt is event-sourced with idempotent actions and snapshots, so a student can close the app mid-case and continue where they left off. Redis locks stop concurrent requests from corrupting a session, and heavy work like voice runs on background queues.",
      ],
      [
        "Learning engine.",
        "Every answer, mistake and request for help becomes a learning signal: weak topics are ranked, daily plans are built, revision is scheduled with SM-2-style spaced repetition, and viva practice adapts as the student answers. It also includes a 3D anatomy lab — rotate a structure, label it, explode it into parts, and watch the heart beat.",
      ],
    ],
  },
  {
    name: "AI Tutor Memory",
    kind: "Memory for 50,000+ learners",
    text: "Memory across six backends, so the tutor remembers each learner across sessions and devices. Vector search with structured prompt injection, async summarisation that cut unnecessary LLM calls by about 60%, and a Redis + BullMQ pipeline with feature flags and graceful degradation.",
  },
  {
    name: "State-board learning",
    kind: "Across states and languages",
    text: "Helping school students find the right textbook for their board, class and subject — and learn from it in their own language — without a treasure hunt across portals and PDFs.",
  },
];

const STORYMIRROR = [
  { name: "FixMyText.in", text: "A GenAI proofreading SaaS on Gemini, scaled to 20,000+ monthly users, with white-label subdomains and multi-tenant SSO." },
  { name: "LLM speed & cost", text: "Concurrent batching for 21× faster processing, and a caching + de-duplication layer that cut LLM spend by 60%." },
  { name: "AI book translator", text: "Full-length book localisation into Hindi, Tamil and more, with a layout-preservation engine." },
  { name: "Shop StoryMirror", text: "Backend for 10,000+ monthly orders, payment reconciliation and shipment tracking across 40+ carriers." },
];

const RECOGNITION = [
  "Top 10 in India — Evolumin National Hackathon",
  "Top 3, Zonal — Avishkar (Medicine & Pharmacy)",
  "1st Rank — Smart India Hackathon internal round, 2023 & 2024",
];

function Item({ name, kind, text, paras, href }) {
  return (
    <Reveal>
      <div className="mt-10">
        <h4 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-lg font-normal text-[#f6f2ea]">{name}</span>
          {kind && <span className="text-sm font-light text-dim">{kind}</span>}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-sm font-light text-[#bfa273] transition hover:text-[#d1c0a3]"
            >
              Visit <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </h4>
        {text && <p className="mt-3 text-[17px] font-light leading-8 text-muted">{text}</p>}
        {paras && (
          <div className="mt-4 space-y-5">
            {paras.map(([lead, body]) => (
              <p key={lead} className="text-[17px] font-light leading-8 text-muted">
                <span className="text-[#f6f2ea]">{lead}</span> {body}
              </p>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

function Company({ name, role, intro, children }) {
  return (
    <div className="mt-24 first:mt-0">
      <Reveal>
        <h3 className="font-display text-5xl text-[#f6f2ea] sm:text-6xl">{name}</h3>
        <p className="mt-3 text-sm font-light text-muted">{role}</p>
        {intro && <p className="mt-8 text-lg font-light leading-8 text-[#c9c5bc]">{intro}</p>}
      </Reveal>
      {children}
    </div>
  );
}

export const Experience = () => {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 sm:px-8 md:py-36">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.35em] text-dim">Work</p>
        <h2 className="font-display mt-4 text-[clamp(2.6rem,6vw,4.75rem)] text-[#f6f2ea]">What I&apos;m building</h2>
      </Reveal>

      <div className="mt-20">
        <Company name="Eklavya.io" role="AI Engineer, Malpani Ventures · May 2026 — Present" intro={EKLAVYA_INTRO}>
          {EKLAVYA.map((p) => (
            <Item key={p.name} {...p} />
          ))}
        </Company>

        <Company name="StoryMirror" role="Software Developer (PPO offer) · Aug 2025 — May 2026">
          {STORYMIRROR.map((p) => (
            <Item key={p.name} {...p} />
          ))}
        </Company>
      </div>

      <Reveal>
        <div className="mt-24">
          <h3 className="text-xs uppercase tracking-[0.35em] text-dim">Recognition</h3>
          <ul className="mt-6 space-y-3 text-[17px] font-light leading-7 text-muted">
            {RECOGNITION.map((r) => (
              <li key={r} className="flex gap-4">
                <span className="mt-[0.85rem] h-px w-4 shrink-0 bg-[#bfa273]" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
};
