"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Info, Star, Table2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];
const GOLD = "#c9a15f"; // emphasis ("after" / the one that matters)
const GREY = "#6e6a63"; // context ("before")

function useWidth(ref, initial = 640) {
  const [w, setW] = useState(initial);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width));
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
          <figcaption className="text-lg font-normal text-[#f6f2ea]">{title}</figcaption>
          {subtitle && <p className="mt-1 text-sm font-light text-[#a8a399]">{subtitle}</p>}
        </div>
        {badge}
      </div>
      <div className="mt-6">{children}</div>
      {source && <div className="mt-5 border-t border-white/[0.06] pt-4 text-xs font-light leading-relaxed text-[#8a857c]">{source}</div>}
    </figure>
  );
}

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 underline-offset-2 hover:text-[#f6f2ea]">
    {children}
  </a>
);

const TableToggle = ({ table, setTable }) => (
  <button
    onClick={() => setTable((t) => !t)}
    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-light text-[#c4bfb5] hover:text-[#f6f2ea]"
    aria-pressed={table}
  >
    <Table2 className="h-3.5 w-3.5" /> {table ? "Chart" : "Table"}
  </button>
);

/* ------------------------------------------------------------------ */
/* 1. Case files — what teams actually did                             */
/* ------------------------------------------------------------------ */
const CASES = [
  {
    who: "Anthropic · Growth Marketing",
    date: "Jan 2026",
    title: "A marketer who had never coded built his own ad tools",
    text: "With Claude Code he built a Figma plugin for ad variations and a Google Ads workflow that exports 15 headlines and 4 descriptions per ad — ready to upload after a manual review.",
    stat: "30 min → 30 sec",
    statLabel: "per ad",
    href: "https://claude.com/blog/how-anthropic-uses-claude-marketing",
  },
  {
    who: "Anthropic · Marketing Ops",
    date: "Jul 2026",
    title: "The weekly metrics report now writes — and checks — itself",
    text: "A scheduled Cowork task gathers the data every Sunday. A proofreading skill checks every number against a verified source and flags mismatches instead of guessing.",
    stat: "2 days → 2 hours",
    statLabel: "up to",
    href: "https://claude.com/blog/how-anthropics-marketing-operations-team-uses-claude-cowork-to-automate-reporting-and-campaign-builds",
  },
  {
    who: "Supermetrics",
    date: "Nov 3, 2026",
    title: "Claude can now build ad campaigns on six platforms",
    text: "Google Ads, Meta, Microsoft Advertising, TikTok, LinkedIn and Snapchat — from a Claude chat. New campaigns stay paused until a person approves them.",
    stat: "Paused",
    statLabel: "by default",
    href: "https://ppc.land/supermetrics-lets-claude-build-ad-campaigns-on-6-platforms-paused-by-default/",
  },
];

export function CaseFiles() {
  return (
    <div className="my-10 space-y-3">
      {CASES.map((c, i) => (
        <motion.a
          key={c.title}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          className="group grid gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-[#bfa273]/40 sm:grid-cols-[1fr_auto] sm:items-center"
        >
          <div>
            <p className="flex flex-wrap items-center gap-x-3 text-xs uppercase tracking-widest">
              <span className="text-[#bfa273]">{c.who}</span>
              <span className="text-[#8a857c]">{c.date}</span>
            </p>
            <p className="mt-2 font-normal leading-snug text-[#f6f2ea]">{c.title}</p>
            <p className="mt-1.5 text-sm font-light leading-relaxed text-[#a8a399]">{c.text}</p>
          </div>
          <div className="flex items-end justify-between gap-6 sm:block sm:text-right">
            <div>
              <p className="text-2xl font-light tracking-tight text-[#f6f2ea]">{c.stat}</p>
              <p className="text-xs font-light text-[#8a857c]">{c.statLabel}</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-[#8a857c] transition group-hover:text-[#bfa273] sm:ml-auto sm:mt-3" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Time per task — dumbbell chart on a log scale                    */
/* ------------------------------------------------------------------ */
const TASKS = [
  { task: "One ad's copy & creative variations", team: "Growth Marketing", before: 30, after: 0.5, beforeLabel: "30 min", afterLabel: "30 sec" },
  { task: "Drafting a customer case study", team: "Customer Marketing", before: 150, after: 30, beforeLabel: "2.5 hours", afterLabel: "30 min" },
  { task: "Weekly marketing metrics report", team: "Marketing Ops", before: 960, after: 120, beforeLabel: "up to 2 days", afterLabel: "up to 2 hours" },
];
const TICKS = [
  { v: 0.5, l: "30 sec" },
  { v: 5, l: "5 min", minor: true },
  { v: 30, l: "30 min" },
  { v: 120, l: "2 h", minor: true },
  { v: 960, l: "2 days" },
];

export function TimeChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const width = useWidth(ref);
  const [table, setTable] = useState(false);
  const [hover, setHover] = useState(null);

  const W = Math.max(280, Math.round(width));
  const narrow = W < 520;
  const rowH = narrow ? 74 : 64;
  // side margins leave room for the end labels ("30 sec" on the left, "up to 2 days" on the right)
  const m = { t: 8, r: 78, b: 34, l: 46 };
  const H = m.t + TASKS.length * rowH + m.b;
  const lo = Math.log10(0.35);
  const hi = Math.log10(1400);
  const sx = (v) => m.l + ((Math.log10(v) - lo) / (hi - lo)) * (W - m.l - m.r);

  return (
    <Figure
      title="How long the same task takes, before and after"
      subtitle="As reported by Anthropic's own marketing teams (log scale)"
      badge={<TableToggle table={table} setTable={setTable} />}
      source={
        <>
          Sources: <Ext href="https://claude.com/blog/how-anthropic-uses-claude-marketing">Anthropic Growth Marketing (Jan 2026)</Ext> and{" "}
          <Ext href="https://claude.com/blog/how-anthropics-marketing-operations-team-uses-claude-cowork-to-automate-reporting-and-campaign-builds">
            Marketing Ops (Jul 2026)
          </Ext>
          . Self-reported by the teams, not independently benchmarked. “Two days” is drawn as 16 working hours.
        </>
      }
    >
      <ul className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-light text-[#c4bfb5]">
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: GREY }} /> Before
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: GOLD }} /> With Claude
        </li>
      </ul>

      {table ? (
        <table className="w-full text-left text-sm font-light">
          <thead className="text-[#8a857c]">
            <tr className="border-b border-white/10">
              <th className="py-2 font-normal">Task</th>
              <th className="py-2 text-right font-normal">Before</th>
              <th className="py-2 text-right font-normal">With Claude</th>
            </tr>
          </thead>
          <tbody className="text-[#f6f2ea]">
            {TASKS.map((t) => (
              <tr key={t.task} className="border-b border-white/[0.06]">
                <td className="py-2.5 pr-3">
                  {t.task} <span className="text-[#8a857c]">· {t.team}</span>
                </td>
                <td className="py-2.5 text-right">{t.beforeLabel}</td>
                <td className="py-2.5 text-right">{t.afterLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div ref={ref} className="relative">
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} className="block overflow-visible" role="img" aria-label="Dumbbell chart of task time before and after using Claude">
            {TICKS.map((t) => (
              <g key={t.v}>
                <line x1={sx(t.v)} x2={sx(t.v)} y1={m.t} y2={H - m.b} stroke="#fff" strokeOpacity="0.06" />
                {(!narrow || !t.minor) && (
                  <text x={sx(t.v)} y={H - 12} textAnchor="middle" className="fill-[#8a857c] text-[11px]">
                    {t.l}
                  </text>
                )}
              </g>
            ))}
            {TASKS.map((t, i) => {
              const y = m.t + i * rowH + rowH * 0.62;
              const x1 = sx(t.before);
              const x2 = sx(t.after);
              return (
                <g key={t.task} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} opacity={hover === null || hover === i ? 1 : 0.4}>
                  <text x={0} y={y - 20} className="fill-[#c4bfb5] text-[12px]">
                    {t.task}
                  </text>
                  <motion.line
                    x1={x1}
                    x2={x1}
                    y1={y}
                    y2={y}
                    stroke={GOLD}
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    animate={{ x2: inView ? x2 : x1 }}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: EASE }}
                  />
                  <circle cx={x1} cy={y} r="6" fill={GREY} stroke="#171717" strokeWidth="2" />
                  <motion.circle
                    cy={y}
                    r="6"
                    fill={GOLD}
                    stroke="#171717"
                    strokeWidth="2"
                    initial={{ cx: x1 }}
                    animate={{ cx: inView ? x2 : x1 }}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: EASE }}
                  />
                  <text x={x1 + 10} y={y + 4} className="fill-[#8a857c] text-[11px]">
                    {t.beforeLabel}
                  </text>
                  <motion.text
                    x={x2 - 10}
                    y={y + 4}
                    textAnchor="end"
                    className="fill-[#f6f2ea] text-[11px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                  >
                    {t.afterLabel}
                  </motion.text>
                  <rect x={0} y={y - 30} width={W} height={rowH - 8} fill="transparent" tabIndex={0} onFocus={() => setHover(i)} onBlur={() => setHover(null)} aria-label={`${t.task}: ${t.beforeLabel} before, ${t.afterLabel} with Claude`} />
                </g>
              );
            })}
          </svg>
        </div>
      )}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 3. What marketers use AI for (Digiday+ Research, Q1 2026)           */
/* ------------------------------------------------------------------ */
const USES = [
  { label: "Analyse results and data", v: 67 },
  { label: "Create content", v: 57 },
  { label: "Edit content", v: 54 },
  { label: "Buy media inventory", v: 32, note: true },
];

export function UsesChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [table, setTable] = useState(false);
  return (
    <Figure
      title="Marketers let AI think and write. Spending money is another story."
      subtitle="Share of marketers using AI in social media campaigns who use it for each job"
      badge={<TableToggle table={table} setTable={setTable} />}
      source={
        <>
          Source:{" "}
          <Ext href="https://digiday.com/media-buying/marketers-ai-for-social-retail-media-skepticism-in-ai-ad-buying/">
            Digiday+ Research
          </Ext>{" "}
          (Jun 2026), survey of 100+ marketing professionals in Q1 2026. *Buying inventory is reported among marketers using AI in social
          or retail media campaigns.
        </>
      }
    >
      {table ? (
        <table className="w-full text-left text-sm font-light">
          <tbody className="text-[#f6f2ea]">
            {USES.map((u) => (
              <tr key={u.label} className="border-b border-white/[0.06]">
                <td className="py-2.5">
                  {u.label}
                  {u.note ? "*" : ""}
                </td>
                <td className="py-2.5 text-right tabular-nums">{u.v}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div ref={ref} className="space-y-5">
          {USES.map((u, i) => (
            <div key={u.label}>
              <div className="mb-1.5 flex items-baseline justify-between text-sm font-light">
                <span className="text-[#c4bfb5]">
                  {u.label}
                  {u.note ? "*" : ""}
                </span>
                <span className="text-[#f6f2ea]">{u.v}%</span>
              </div>
              <div className="h-2.5 w-full rounded-[4px] bg-white/[0.05]">
                <motion.div
                  className="h-full rounded-[4px]"
                  style={{ background: u.note ? GREY : GOLD }}
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${u.v}%` : 0 }}
                  transition={{ duration: 1, delay: i * 0.12, ease: EASE }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 4. The new marketing loop — diagram                                 */
/* ------------------------------------------------------------------ */
const LOOP = [
  { k: "Brief", who: "You", d: "Who is this for, and what's true about the product?" },
  { k: "Generate", who: "Claude", d: "Dozens of headlines, layouts and angles in seconds." },
  { k: "Check", who: "Rules", d: "Character limits, brand rules, every number against its source." },
  { k: "Choose", who: "You", d: "Pick the few that are true, kind and on-brand." },
  { k: "Launch", who: "You approve", d: "Paused by default until a person says go." },
  { k: "Learn", who: "Claude + you", d: "Read the results, write a better brief." },
];

export function MarketingLoop() {
  return (
    <Figure
      title="The new marketing loop"
      subtitle="Where Claude speeds things up — and where a person still decides"
      source="My summary of the workflows above. The steps in bronze are the ones that stay human."
    >
      <ol className="grid gap-3 sm:grid-cols-3">
        {LOOP.map((s, i) => {
          const human = s.who.startsWith("You");
          return (
            <motion.li
              key={s.k}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className={`rounded-2xl border p-4 ${human ? "border-[#bfa273]/40 bg-[#bfa273]/[0.06]" : "border-white/[0.08] bg-white/[0.02]"}`}
            >
              <p className="flex items-center justify-between text-xs uppercase tracking-widest">
                <span className={human ? "text-[#d1c0a3]" : "text-[#8a857c]"}>
                  {String(i + 1).padStart(2, "0")} · {s.who}
                </span>
              </p>
              <p className="mt-2 text-lg font-normal text-[#f6f2ea]">{s.k}</p>
              <p className="mt-1 text-sm font-light leading-snug text-[#a8a399]">{s.d}</p>
            </motion.li>
          );
        })}
      </ol>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Ad lab — you are the editor (no AI, just the shape of the work)  */
/* ------------------------------------------------------------------ */
const TONES = {
  Calm: [
    "Revise smarter for NEET",
    "Your NEET plan, made daily",
    "Know what to study next",
    "Revision that remembers you",
    "Study less, remember more for NEET with a plan built around you",
    "Weak topics, fixed first",
    "Calm, steady NEET prep",
  ],
  Bold: [
    "Stop guessing. Start scoring.",
    "Crack NEET with a daily plan",
    "Your weak topics end here",
    "The NEET plan that adapts",
    "Every mistake becomes your next lesson — prepare for NEET like a topper",
    "Beat the syllabus, daily",
    "Revise like it's exam day",
  ],
  Playful: [
    "Flashcards that don't nag",
    "Forgot it? We didn't.",
    "Your brain's new study buddy",
    "Revision, but make it fun",
    "Biology, physics, chemistry and a tiny bit of magic in one app",
    "Spaced repetition, no stress",
    "Study now, panic never",
  ],
};
const LIMIT = 30; // Google Ads responsive search ad headline limit

export function AdLab() {
  const [tone, setTone] = useState("Calm");
  const [picked, setPicked] = useState([]);
  const list = TONES[tone];

  const toggle = (h) =>
    setPicked((p) => (p.includes(h) ? p.filter((x) => x !== h) : p.length >= 3 ? p : [...p, h]));

  return (
    <Figure
      title="Try it: you're the editor"
      subtitle="An app for NEET students needs three search-ad headlines. The machine gave you seven. Pick three."
      badge={
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1.5 text-xs font-light text-amber-200 ring-1 ring-amber-300/20">
          <Info className="h-3.5 w-3.5" /> Illustrative — no AI on this page
        </span>
      }
      source={`Pre-written examples to show the shape of the workflow. Google search-ad headlines allow up to ${LIMIT} characters, so the rule check flags anything longer.`}
    >
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Tone">
        {Object.keys(TONES).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tone === t}
            onClick={() => {
              setTone(t);
              setPicked([]);
            }}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              tone === t ? "bg-[#f6f2ea] text-[#121212]" : "border border-white/10 font-light text-[#c4bfb5] hover:text-[#f6f2ea]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-2">
        {list.map((h) => {
          const len = h.length;
          const tooLong = len > LIMIT;
          const on = picked.includes(h);
          return (
            <li key={h}>
              <button
                onClick={() => !tooLong && toggle(h)}
                disabled={tooLong}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                  on
                    ? "border-[#bfa273]/60 bg-[#bfa273]/[0.08]"
                    : tooLong
                    ? "cursor-not-allowed border-white/[0.05] opacity-60"
                    : "border-white/[0.08] hover:border-white/20"
                }`}
              >
                <Star className={`h-4 w-4 shrink-0 ${on ? "fill-[#c9a15f] text-[#c9a15f]" : "text-[#6e6a63]"}`} />
                <span className={`flex-1 font-light ${tooLong ? "text-[#8a857c] line-through decoration-rose-300/60" : "text-[#f6f2ea]"}`}>{h}</span>
                <span className={`shrink-0 text-xs tabular-nums ${tooLong ? "text-rose-300" : "text-[#8a857c]"}`}>
                  {len}/{LIMIT}
                  {tooLong && " · too long"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 text-sm font-light text-[#a8a399]" aria-live="polite">
        {picked.length === 3 ? (
          <p className="flex items-start gap-2 text-[#d1c0a3]">
            <Check className="mt-0.5 h-4 w-4 shrink-0" />
            Done. Generating took a second; choosing took you longer — and that's the part that decides whether the ad is true, kind
            and on-brand.
          </p>
        ) : (
          <p>{picked.length} of 3 picked. Anything over {LIMIT} characters is blocked by the rule check — that part a machine can do.</p>
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
      className="my-12 border-l-2 border-[#bfa273] pl-6 text-2xl leading-snug text-[#f6f2ea] sm:text-3xl"
      style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
    >
      {children}
    </motion.blockquote>
  );
}
