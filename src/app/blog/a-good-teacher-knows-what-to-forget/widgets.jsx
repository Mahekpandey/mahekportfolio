"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Info, RotateCcw, Table2, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

/* Validated categorical palette for the dark chart surface (#0c0c16). */
const C1 = "#8b5cf6"; // violet
const C2 = "#0ea5c6"; // cyan
const MUTED = "#6f6e86";

/** Tracks an element's width so SVG text renders at 1:1 pixel size on every screen. */
function useWidth(ref, initial = 640) {
  const [w, setW] = useState(initial);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setW(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return w;
}

function Figure({ title, subtitle, children, source, badge }) {
  return (
    <figure className="my-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#171717] p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <figcaption className="text-lg font-normal text-white">{title}</figcaption>
          {subtitle && <p className="mt-1 text-sm text-[#a8a399]">{subtitle}</p>}
        </div>
        {badge}
      </div>
      <div className="mt-6">{children}</div>
      {source && <div className="mt-5 border-t border-white/[0.06] pt-4 text-xs leading-relaxed text-[#8a857c]">{source}</div>}
    </figure>
  );
}

const ModelBadge = ({ children = "Simplified model" }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1.5 text-xs text-amber-200 ring-1 ring-amber-300/20">
    <Info className="h-3.5 w-3.5" /> {children}
  </span>
);

/* ------------------------------------------------------------------ */
/* 1. This week in AI                                                  */
/* ------------------------------------------------------------------ */
const NEWS = [
  {
    tag: "Education",
    date: "Nov 3",
    title: "Google switches Gemini — and Search — off by default for school students",
    text: "Gemini, Gemini Notebook and Search stay off for K-12 student accounts until administrators turn them on. Schools that keep AI off lose Search too, because Google won't offer Search without AI Overviews.",
    href: "https://www.medianama.com/2026/11/223-google-schools-switch-off-gemini/",
    source: "MediaNama",
  },
  {
    tag: "Policy",
    date: "Oct 28",
    title: "New York bans AI chatbots from pretending to be human with children",
    text: "Bots can't claim to be a real person, to have human emotions, or build emotional dependency with under-18s. Fines of up to $25,000 per violation; it takes effect on 1 January.",
    href: "https://thenextweb.com/news/new-york-ai-chatbots-children-law-hochul-baby-monitors",
    source: "The Next Web",
  },
  {
    tag: "Pushback",
    date: "This week",
    title: "Senators, NYC's mayor and Common Sense Media push back on Google",
    text: "Senators Blumenthal and Hawley say children “are paying the price”; Mayor Zohran Mamdani accused Google of “using monopoly power” to push AI into schools.",
    href: "https://www.medianama.com/2026/11/223-google-schools-switch-off-gemini/",
    source: "MediaNama",
  },
  {
    tag: "Memory",
    date: "This year",
    title: "ChatGPT now builds its memory of you on its own",
    text: "OpenAI's “Dreaming” update learns from your chat history without being asked. You can edit or erase it from a memory summary screen.",
    href: "https://gigazine.net/gsc_news/en/20260605-chatgpt-memory-dreaming-v3",
    source: "GIGAZINE",
  },
];

export function NewsGrid() {
  return (
    <div className="my-10 grid gap-3 sm:grid-cols-2">
      {NEWS.map((n, i) => (
        <motion.a
          key={n.title}
          href={n.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
          className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-[#bfa273]/40 hover:bg-white/[0.045]"
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
            <span className="text-[#bfa273]">{n.tag}</span>
            <span className="text-[#8a857c]">{n.date}</span>
          </div>
          <p className="mt-3 font-medium leading-snug text-white">{n.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-[#a8a399]">{n.text}</p>
          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs text-[#8a857c] group-hover:text-white">
            {n.source} <ArrowUpRight className="h-3 w-3" />
          </span>
        </motion.a>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Ebbinghaus forgetting curve — real data (two series, log time)   */
/* ------------------------------------------------------------------ */
// Savings (share of relearning effort saved), Murre & Dros (2015), PLOS ONE, Table 3.
const INTERVALS = [
  { label: "20 min", short: "20m", min: 20 },
  { label: "1 hour", short: "1h", min: 60 },
  { label: "9 hours", short: "9h", min: 540 },
  { label: "1 day", short: "1d", min: 1440 },
  { label: "2 days", short: "2d", min: 2880 },
  { label: "6 days", short: "6d", min: 8640 },
  { label: "31 days", short: "31d", min: 44640 },
];
const CURVES = [
  { key: "eb", name: "Ebbinghaus (1880s)", color: C1, values: [58.2, 44.2, 35.8, 33.7, 27.8, 25.4, 21.1] },
  { key: "dros", name: "Dros replication (2015)", color: C2, values: [47.2, 37.3, 27.6, 31.7, 23.0, 16.8, 4.1] },
];

export function ForgettingCurve() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const width = useWidth(ref);
  const [hover, setHover] = useState(null);
  const [table, setTable] = useState(false);

  const W = Math.max(280, Math.round(width));
  const narrow = W < 520;
  const H = narrow ? 260 : 310;
  const m = narrow ? { t: 18, r: 16, b: 34, l: 40 } : { t: 18, r: 24, b: 38, l: 48 };
  const lx0 = Math.log10(14);
  const lx1 = Math.log10(60000);
  const sx = (min) => m.l + ((Math.log10(min) - lx0) / (lx1 - lx0)) * (W - m.l - m.r);
  const sy = (v) => m.t + (1 - v / 70) * (H - m.t - m.b);
  const ticksY = [0, 20, 40, 60];

  return (
    <Figure
      title="How fast we forget"
      subtitle="Share of the original learning effort saved when relearning a list of nonsense syllables"
      badge={
        <button
          onClick={() => setTable((t) => !t)}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#c4bfb5] hover:text-white"
          aria-pressed={table}
        >
          <Table2 className="h-3.5 w-3.5" /> {table ? "Chart" : "Table"}
        </button>
      }
      source={
        <>
          Source: Murre &amp; Dros,{" "}
          <a
            className="underline decoration-white/30 hover:text-white"
            href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0120644"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Replication and Analysis of Ebbinghaus’ Forgetting Curve”
          </a>
          , PLOS ONE (2015), Table 3. Ebbinghaus tested himself in 1879–80; Dros repeated the experiment on himself over 75 days in
          2011–12. Ebbinghaus’ first three intervals were actually 19 min, 63 min and 8.75 hours.
        </>
      }
    >
      <div ref={ref}>
        {/* legend */}
        <ul className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#c4bfb5]">
          {CURVES.map((c) => (
            <li key={c.key} className="flex items-center gap-2">
              <span className="h-[2px] w-5 rounded" style={{ background: c.color }} />
              <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
              {c.name}
            </li>
          ))}
        </ul>

        {table ? (
          <table className="w-full text-left text-sm">
            <thead className="text-[#8a857c]">
              <tr className="border-b border-white/10">
                <th className="py-2 font-medium">After</th>
                {CURVES.map((c) => (
                  <th key={c.key} className="py-2 text-right font-medium">
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="tabular-nums text-white">
              {INTERVALS.map((iv, i) => (
                <tr key={iv.label} className="border-b border-white/[0.06]">
                  <td className="py-2.5">{iv.label}</td>
                  {CURVES.map((c) => (
                    <td key={c.key} className="py-2.5 text-right">
                      {c.values[i].toFixed(1)}%
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="relative">
            <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block overflow-visible" role="img" aria-label="Line chart of savings falling from about 58% after 20 minutes to about 21% after 31 days for Ebbinghaus, and from 47% to 4% in the 2015 replication">
              {ticksY.map((t) => (
                <g key={t}>
                  <line x1={m.l} x2={W - m.r} y1={sy(t)} y2={sy(t)} stroke="#ffffff" strokeOpacity={t === 0 ? 0.16 : 0.07} />
                  <text x={m.l - 8} y={sy(t) + 4} textAnchor="end" className="fill-[#8a857c] text-[11px] tabular-nums">
                    {t}%
                  </text>
                </g>
              ))}
              {INTERVALS.map((iv) => (
                <text key={iv.label} x={sx(iv.min)} y={H - 12} textAnchor="middle" className="fill-[#8a857c] text-[11px]">
                  {narrow ? iv.short : iv.label}
                </text>
              ))}

              {/* hover guide */}
              {hover !== null && (
                <line x1={sx(INTERVALS[hover].min)} x2={sx(INTERVALS[hover].min)} y1={m.t} y2={H - m.b} stroke="#ffffff" strokeOpacity="0.18" />
              )}

              {CURVES.map((c, ci) => {
                const d = c.values.map((v, i) => `${i ? "L" : "M"}${sx(INTERVALS[i].min).toFixed(1)},${sy(v).toFixed(1)}`).join(" ");
                return (
                  <g key={c.key}>
                    <motion.path
                      d={d}
                      fill="none"
                      stroke={c.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: inView ? 1 : 0 }}
                      transition={{ duration: 1.6, delay: ci * 0.3, ease: EASE }}
                    />
                    {c.values.map((v, i) => (
                      <motion.circle
                        key={i}
                        cx={sx(INTERVALS[i].min)}
                        cy={sy(v)}
                        r={hover === i ? 5.5 : 4}
                        fill={c.color}
                        stroke="#171717"
                        strokeWidth="2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ delay: 0.4 + ci * 0.3 + i * 0.12 }}
                      />
                    ))}
                    {/* direct label at the end of each line */}
                    <motion.text
                      x={sx(INTERVALS[6].min) - (ci === 0 ? 6 : 10)}
                      y={sy(c.values[6]) + (ci === 0 ? -12 : 4)}
                      textAnchor="end"
                      className="fill-white text-[12px] font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ delay: 1.6 + ci * 0.3 }}
                    >
                      {c.values[6].toFixed(1)}%
                    </motion.text>
                  </g>
                );
              })}

              {/* hit areas: one column per interval */}
              {INTERVALS.map((iv, i) => {
                const x = sx(iv.min);
                const prev = i ? sx(INTERVALS[i - 1].min) : m.l;
                const next = i < INTERVALS.length - 1 ? sx(INTERVALS[i + 1].min) : W - m.r;
                const x0 = i ? (prev + x) / 2 : m.l;
                const x1 = i < INTERVALS.length - 1 ? (x + next) / 2 : W - m.r;
                return (
                  <rect
                    key={iv.label}
                    x={x0}
                    y={m.t}
                    width={Math.max(24, x1 - x0)}
                    height={H - m.t - m.b}
                    fill="transparent"
                    tabIndex={0}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    aria-label={`${iv.label}: Ebbinghaus ${CURVES[0].values[i]}%, replication ${CURVES[1].values[i]}%`}
                  />
                );
              })}
            </svg>

            {hover !== null && (
              <div
                className="pointer-events-none absolute z-10 min-w-[180px] rounded-xl border border-white/10 bg-[#1f1f1f] px-3 py-2 text-xs shadow-xl"
                style={{
                  left: Math.min(sx(INTERVALS[hover].min) + 10, W - 190),
                  top: 8,
                }}
              >
                <p className="font-medium text-white">After {INTERVALS[hover].label}</p>
                {CURVES.map((c) => (
                  <p key={c.key} className="mt-1 flex items-center justify-between gap-4 text-[#c4bfb5]">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                      {c.name}
                    </span>
                    <span className="tabular-nums text-white">{c.values[hover].toFixed(1)}%</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Spaced repetition — interactive model                            */
/* ------------------------------------------------------------------ */
const PLANS = [
  { id: "once", label: "Learn once", reviews: [] },
  { id: "cram", label: "One review (day 1)", reviews: [1] },
  { id: "spaced", label: "Spaced (days 1, 3, 7, 14)", reviews: [1, 3, 7, 14] },
];
const S0 = 0.3; // initial stability (days)
const GROWTH = 2.5; // each review makes the memory this much more stable

// Power-law forgetting, the shape spaced-repetition schedulers use: R = (1 + t / 9S)^-1
function retentionSeries(reviews, days = 30, step = 0.1) {
  const pts = [];
  let S = S0;
  let last = 0;
  const queue = [...reviews];
  for (let t = 0; t <= days + 1e-9; t += step) {
    if (queue.length && t >= queue[0] - 1e-9) {
      last = queue.shift();
      S *= GROWTH;
    }
    pts.push([t, 1 / (1 + (t - last) / (9 * S))]);
  }
  return pts;
}

export function SpacedRepetition() {
  const ref = useRef(null);
  const width = useWidth(ref);
  const [plan, setPlan] = useState("spaced");

  const W = Math.max(280, Math.round(width));
  const narrow = W < 520;
  const H = narrow ? 220 : 260;
  const m = { t: 14, r: 14, b: 32, l: narrow ? 38 : 44 };
  const sx = (d) => m.l + (d / 30) * (W - m.l - m.r);
  const sy = (r) => m.t + (1 - r) * (H - m.t - m.b);

  const series = useMemo(() => Object.fromEntries(PLANS.map((p) => [p.id, retentionSeries(p.reviews)])), []);
  const active = PLANS.find((p) => p.id === plan);
  const path = (pts) => pts.map(([t, r], i) => `${i ? "L" : "M"}${sx(t).toFixed(1)},${sy(r).toFixed(1)}`).join(" ");
  const at30 = series[plan][series[plan].length - 1][1];
  const base30 = series.once[series.once.length - 1][1];

  return (
    <Figure
      title="Forgetting, unless you come back"
      subtitle="How much of a lesson you'd remember over 30 days — pick a study plan"
      badge={<ModelBadge />}
      source="A simple power-law forgetting model (memory stability grows 2.5× after each review), similar in shape to the curves spaced-repetition apps use. It is for intuition, not a measurement of any student."
    >
      <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Study plan">
        {PLANS.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={plan === p.id}
            onClick={() => setPlan(p.id)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              plan === p.id ? "bg-white font-medium text-black" : "border border-white/10 text-[#c4bfb5] hover:text-white"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div ref={ref} className="relative">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block overflow-visible" role="img" aria-label={`Model: ${active.label} keeps about ${Math.round(at30 * 100)}% after 30 days`}>
          {[0, 0.5, 1].map((t) => (
            <g key={t}>
              <line x1={m.l} x2={W - m.r} y1={sy(t)} y2={sy(t)} stroke="#fff" strokeOpacity={t === 0 ? 0.16 : 0.07} />
              <text x={m.l - 8} y={sy(t) + 4} textAnchor="end" className="fill-[#8a857c] text-[11px]">
                {t * 100}%
              </text>
            </g>
          ))}
          {[0, 7, 14, 21, 30].map((d) => (
            <text key={d} x={sx(d)} y={H - 10} textAnchor="middle" className="fill-[#8a857c] text-[11px]">
              {d === 0 ? "Day 0" : d}
            </text>
          ))}
          {/* baseline for comparison */}
          {plan !== "once" && <path d={path(series.once)} fill="none" stroke={MUTED} strokeWidth="1.5" strokeOpacity="0.8" />}
          <motion.path
            key={plan}
            d={path(series[plan])}
            fill="none"
            stroke={C1}
            strokeWidth="2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
          {active.reviews.map((d) => (
            <g key={d}>
              <line x1={sx(d)} x2={sx(d)} y1={sy(1)} y2={H - m.b} stroke={C1} strokeOpacity="0.25" />
              <text x={sx(d)} y={sy(1) - 4} textAnchor="middle" className="fill-[#d1c0a3] text-[10px]">
                review
              </text>
            </g>
          ))}
          <circle cx={sx(30)} cy={sy(at30)} r="5" fill={C1} stroke="#171717" strokeWidth="2" />
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="flex items-center gap-2 text-[#c4bfb5]">
          <span className="h-[2px] w-5 rounded" style={{ background: C1 }} /> {active.label}
        </span>
        {plan !== "once" && (
          <span className="flex items-center gap-2 text-[#c4bfb5]">
            <span className="h-[2px] w-5 rounded" style={{ background: MUTED }} /> Learn once
          </span>
        )}
        <span className="ml-auto text-[#a8a399]">
          Remembered on day 30: <span className="text-lg font-medium text-white">{Math.round(at30 * 100)}%</span>
          {plan !== "once" && <span className="text-[#8a857c]"> vs {Math.round(base30 * 100)}%</span>}
        </span>
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 4. How an AI tutor's memory works — diagram                         */
/* ------------------------------------------------------------------ */
const STAGES = [
  { title: "Conversation", text: "Every message in today's session", tag: "raw" },
  { title: "Session notes", text: "A few lines: what was learned, where they got stuck", tag: "summarise" },
  { title: "Learner profile", text: "Patterns that last — weak topics, how they like to learn", tag: "merge + fade" },
  { title: "Next lesson", text: "Only the memories relevant to this question", tag: "retrieve" },
];

export function MemoryDiagram() {
  return (
    <Figure
      title="How an AI tutor's memory works (simplified)"
      subtitle="Each step keeps less — on purpose"
      source="A simplified view of the memory pipeline I work on: summarise sessions asynchronously, merge them into a profile where old details fade unless reinforced, and retrieve only what is similar to the current question."
    >
      <div className="grid gap-3 md:grid-cols-4">
        {STAGES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
            className="relative"
          >
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#bfa273]">
                {String(i + 1).padStart(2, "0")} · {s.tag}
              </span>
              <p className="mt-2 font-medium text-white">{s.title}</p>
              <p className="mt-1 text-sm leading-snug text-[#a8a399]">{s.text}</p>
              {/* shrinking bar = how much is kept */}
              <div className="mt-4 h-1.5 w-full rounded-full bg-white/[0.05]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: C1 }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${[100, 30, 14, 6][i]}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: EASE }}
                />
              </div>
            </div>
            {i < STAGES.length - 1 && (
              <div aria-hidden="true" className="absolute left-1/2 top-full z-10 h-3 w-px bg-[#bfa273]/40 md:left-full md:top-1/2 md:h-px md:w-3" />
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-2xl border border-dashed border-white/10 p-4 text-sm">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#c4bfb5]">↘</span>
          <p className="text-[#a8a399]">
            <span className="font-medium text-white">Forgotten:</span> mistakes that were later fixed, exam dates that
            passed, details that never came up again.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-2xl border border-dashed border-[#bfa273]/30 p-4 text-sm">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#d1c0a3]">✎</span>
          <p className="text-[#a8a399]">
            <span className="font-medium text-white">The student's view:</span> they can see what the tutor remembers
            about them — and delete it.
          </p>
        </div>
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Memory triage — reader quiz                                      */
/* ------------------------------------------------------------------ */
const CHOICES = ["Keep", "Summarise", "Let it fade", "Forget"];
const ITEMS = [
  {
    memory: "Keeps mixing up oxidation and reduction",
    answer: "Keep",
    why: "It's a pattern that should change how the next lesson is taught — until it's fixed.",
  },
  {
    memory: "Got question 14 wrong on 3 March, then mastered the topic",
    answer: "Forget",
    why: "The mistake did its job. Keeping it only labels the student by who they used to be.",
  },
  {
    memory: "Learns faster with diagrams than with text",
    answer: "Keep",
    why: "A lasting preference that makes every future explanation better.",
  },
  {
    memory: "The full transcript of the last 40 messages",
    answer: "Summarise",
    why: "The tutor needs the three things that mattered, not every word.",
  },
  {
    memory: "Mock exam on 15 March",
    answer: "Let it fade",
    why: "Useful until the date passes, then it should quietly expire.",
  },
  {
    memory: "Typed “I'm so stupid” after a hard test",
    answer: "Forget",
    why: "Respond with care in the moment — but never store a bad moment as a personality trait.",
  },
];

export function MemoryQuiz() {
  const [picks, setPicks] = useState({});
  const done = Object.keys(picks).length;
  const agreed = ITEMS.filter((it, i) => picks[i] === it.answer).length;

  return (
    <Figure
      title="Your turn: what should the tutor remember?"
      subtitle="Pick what you'd do with each memory, then see what I'd do"
      badge={
        done > 0 && (
          <button
            onClick={() => setPicks({})}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#c4bfb5] hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        )
      }
    >
      <ol className="space-y-3">
        {ITEMS.map((it, i) => {
          const pick = picks[i];
          const correct = pick === it.answer;
          return (
            <li key={it.memory} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4">
              <p className="text-[15px] font-medium text-white">
                <span className="mr-2 font-mono text-xs text-[#8a857c]">{i + 1}.</span>“{it.memory}”
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {CHOICES.map((c) => {
                  const chosen = pick === c;
                  const isAnswer = pick && c === it.answer;
                  return (
                    <button
                      key={c}
                      disabled={!!pick}
                      onClick={() => setPicks((p) => ({ ...p, [i]: c }))}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition ${
                        isAnswer
                          ? "bg-[#bfa273]/25 text-white ring-1 ring-[#bfa273]/60"
                          : chosen
                          ? "bg-white/10 text-white ring-1 ring-white/20"
                          : pick
                          ? "text-[#6f6e86] ring-1 ring-white/5"
                          : "text-[#c4bfb5] ring-1 ring-white/10 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {isAnswer && <Check className="h-3 w-3" />}
                      {chosen && !correct && <X className="h-3 w-3" />}
                      {c}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence>
                {pick && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 text-sm leading-relaxed text-[#a8a399]"
                  >
                    <span className="font-medium text-[#d1c0a3]">I'd {it.answer.toLowerCase()} it.</span> {it.why}
                  </motion.p>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
      <div className="mt-5 text-sm text-[#a8a399]" aria-live="polite">
        {done === ITEMS.length ? (
          <p>
            We agreed on <span className="text-lg font-medium text-white">{agreed}</span> of {ITEMS.length}. There's no
            perfect score here — these are judgment calls, and that's the point.
          </p>
        ) : (
          <p>
            {done} of {ITEMS.length} answered.
          </p>
        )}
      </div>
    </Figure>
  );
}

export function PullQuote({ children }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: EASE }}
      className="my-12 border-l-2 border-[#bfa273] pl-6 text-2xl leading-snug text-white sm:text-3xl"
      style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
    >
      {children}
    </motion.blockquote>
  );
}
