"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, Copy, Table2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

/* Categorical pair validated for the dark chart surface (#171717):
   CVD ΔE 26.8 · normal-vision ΔE 31.8 · both ≥ 3:1 contrast.
   Colour follows the entity everywhere: orange = Chinese model, blue = US model. */
const CN = "#d95926";
const US = "#3987e5";

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

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 hover:text-white">
    {children}
  </a>
);

function TableToggle({ table, setTable }) {
  return (
    <button
      onClick={() => setTable((t) => !t)}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#c4bfb5] hover:text-white"
      aria-pressed={table}
    >
      <Table2 className="h-3.5 w-3.5" /> {table ? "Chart" : "Table"}
    </button>
  );
}

function Legend({ items }) {
  return (
    <ul className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#c4bfb5]">
      {items.map(([label, color]) => (
        <li key={label} className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: color }} /> {label}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* 0. TL;DR for the group chat                                         */
/* ------------------------------------------------------------------ */
const TLDR_LINES = [
  "Meituan — basically China's Zomato + Swiggy + Blinkit in one app — just put a 1.6-trillion-parameter AI model online for anyone to download (MIT license).",
  "On Meituan's own tests it's neck and neck with Claude Opus 5 on many tasks, clearly behind on the hardest coding ones — and its API costs a small fraction of US frontier models.",
  "It isn't alone. Xiaomi, Tencent, Alibaba, ByteDance and Ant Group all ship their own AI now. The model is becoming the cheap part. The data and the delivery are the moat.",
];

export function TLDR() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    const text = `TL;DR — China's Zomato just built a frontier AI\n\n${TLDR_LINES.map((l) => `• ${l}`).join("\n")}\n\nFull breakdown: mahekcode.in/blog/food-app-frontier-ai`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="mb-12 rounded-3xl border border-[#bfa273]/25 bg-[#bfa273]/[0.04] p-5 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#d1c0a3]">TL;DR · for the group chat</p>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#c4bfb5] transition hover:text-white"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[#d8d3c9]">
        {TLDR_LINES.map((l, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-[3px] font-mono text-xs text-[#bfa273]">0{i + 1}</span>
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. The model as a delivery receipt                                  */
/* ------------------------------------------------------------------ */
const RECEIPT = [
  ["Parameters", "1.6 trillion"],
  ["Active per token", "~48B (about 3%)"],
  ["Design", "Mixture-of-Experts"],
  ["Sees", "Text, images, video"],
  ["Context", "Up to 1M tokens"],
  ["Trained on", "Chinese-made chips"],
  ["Expert weights", "4-bit (W4A4)"],
  ["Download", "208 files · ~3.5 TB"],
  ["API, per 1M tokens", "$0.30 in · $1.20 out"],
  ["Pricing", "Limited-time promo"],
];

export function OrderReceipt() {
  return (
    <Figure
      title="Your order: LongCat-2.5"
      subtitle="Everything Meituan shipped on 9 November, written as the receipt it deserves"
      source={
        <>
          Sources:{" "}
          <Ext href="https://huggingface.co/meituan-longcat/LongCat-2.5">LongCat-2.5 model card on Hugging Face</Ext>,{" "}
          <Ext href="https://venturebeat.com/technology/meituan-releases-the-open-weights-of-its-longcat-2-5-llm-with-vision-under-a-permissive-mit-license">
            VentureBeat (Nov 9, 2026)
          </Ext>{" "}
          and{" "}
          <Ext href="https://www.techtimes.com/articles/329925/20261103/meituan-releases-longcat-25-chinese-chips-benchmark-claims-await-independent-tests.htm">
            Tech Times (Nov 3, 2026)
          </Ext>
          . Hugging Face metadata lists 1.8T parameters; Meituan&apos;s own write-up says 1.6T.
        </>
      }
    >
      <div className="mx-auto max-w-md rounded-2xl border border-dashed border-white/15 bg-[#121212] p-4 font-mono text-[12px] sm:p-6 sm:text-[13px]">
        <div className="flex items-baseline justify-between text-[11px] uppercase tracking-widest text-[#8a857c]">
          <span>Order #LC-2.5</span>
          <span>09 Nov 2026</span>
        </div>
        <p className="mt-3 text-[11px] uppercase tracking-widest text-[#8a857c]">From</p>
        <p className="text-white">Meituan LongCat team, Beijing</p>
        <p className="mt-2 text-[11px] uppercase tracking-widest text-[#8a857c]">Delivered to</p>
        <p className="text-white">Hugging Face · open to everyone</p>
        <div className="my-4 border-t border-dashed border-white/15" />
        <ul className="space-y-2.5">
          {RECEIPT.map(([k, v], i) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
              className="flex justify-between gap-4"
            >
              <span className="text-[#a8a399]">{k}</span>
              <span className="text-right text-white">{v}</span>
            </motion.li>
          ))}
        </ul>
        <div className="my-4 border-t border-dashed border-white/15" />
        <div className="flex justify-between gap-4">
          <span className="text-[#a8a399]">License</span>
          <span className="text-white">MIT</span>
        </div>
        <div className="mt-2 flex justify-between gap-4 text-base">
          <span className="text-[#d1c0a3]">Delivery fee</span>
          <span className="text-[#d1c0a3]">₹0</span>
        </div>
        <p className="mt-4 text-center text-[11px] uppercase tracking-widest text-[#8a857c]">Thank you for ordering · Rate your model ★★★★☆</p>
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 2. China's everyday apps → the AI they ship                         */
/* ------------------------------------------------------------------ */
const APPS = [
  {
    co: "Meituan",
    india: "≈ Zomato + Swiggy + Blinkit",
    model: "LongCat-2.5",
    when: "Nov 2026",
    fact: "1.6T parameters, sees images and video. Weights on Hugging Face under MIT.",
    open: "Open weights",
  },
  {
    co: "Xiaomi",
    india: "≈ the Redmi in your pocket",
    model: "MiMo-V2.6-Pro",
    when: "Sep 2026",
    fact: "1.02T parameters, 42B active. Highest open-weight score on the Artificial Analysis index at launch.",
    open: "Open weights",
  },
  {
    co: "Tencent",
    india: "≈ WhatsApp + Paytm in one app (WeChat)",
    model: "Hy4",
    when: "Nov 2026",
    fact: "770B parameters. Reads screens and drives software like Blender and CAD tools.",
    open: "Weights promised",
  },
  {
    co: "Alibaba",
    india: "≈ Flipkart + a cloud company",
    model: "Qwen",
    when: "Ongoing",
    fact: "The most-downloaded open model family on Hugging Face, ahead of Meta's Llama.",
    open: "Mostly open",
  },
  {
    co: "ByteDance",
    india: "≈ the company behind TikTok",
    model: "Doubao",
    when: "App",
    fact: "382 million monthly users in June 2026 — China's biggest AI app. Mostly closed.",
    open: "Closed",
  },
  {
    co: "Ant Group",
    india: "≈ PhonePe (it runs Alipay)",
    model: "LingBot",
    when: "Jul–Nov 2026",
    fact: "Robot brains, trained on 50,000 hours of real robot data. Now learning touch.",
    open: "Open weights",
  },
];

export function SuperAppMap() {
  const [india, setIndia] = useState(true);
  return (
    <Figure
      title="In China, the apps you use are the AI labs"
      subtitle="Six everyday companies and the models they ship"
      badge={
        <button
          onClick={() => setIndia((v) => !v)}
          aria-pressed={india}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#c4bfb5] hover:text-white"
        >
          {india ? "Hide" : "Show"} the India version
        </button>
      }
      source={
        <>
          Sources: <Ext href="https://venturebeat.com/technology/meituan-releases-the-open-weights-of-its-longcat-2-5-llm-with-vision-under-a-permissive-mit-license">VentureBeat</Ext> (LongCat),{" "}
          <Ext href="https://venturebeat.com/technology/better-than-deepseek-xiaomis-mimo-v2-6-pro-debuts-as-the-top-open-weights-model-in-the-world-alongside-cheaper-v2-6-flash">VentureBeat</Ext> (MiMo),{" "}
          <Ext href="https://technode.com/2026/11/04/tencent-launches-hy4-with-vision-and-computer-use-capabilities/">TechNode</Ext> (Hy4),{" "}
          <Ext href="https://www.technologyreview.com/2026/02/12/1132811/whats-next-for-chinese-open-source-ai/">MIT Technology Review</Ext> (Qwen),{" "}
          <Ext href="https://sanbi.ai/blog/doubao-china-scale-sources-citations-agentic-commerce">Sanbi, citing QuestMobile</Ext> (Doubao),{" "}
          <Ext href="https://huggingface.co/robbyant">Robbyant on Hugging Face</Ext> (LingBot). The India comparisons are mine — rough, not exact.
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {APPS.map((a, i) => (
          <motion.div
            key={a.co}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:border-[#bfa273]/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">{a.co}</p>
                {india && <p className="text-xs text-[#d1c0a3]">{a.india}</p>}
              </div>
              <span className="shrink-0 rounded-full bg-white/[0.06] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#c4bfb5] ring-1 ring-white/10">
                {a.open}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <ArrowRight className="h-3.5 w-3.5 text-[#8a857c]" />
              <span className="font-medium text-white">{a.model}</span>
              <span className="font-mono text-[11px] text-[#8a857c]">{a.when}</span>
            </div>
            <p className="mt-1.5 text-sm leading-snug text-[#a8a399]">{a.fact}</p>
          </motion.div>
        ))}
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Benchmarks: LongCat-2.5 vs Claude Opus 5 (self-reported)         */
/* ------------------------------------------------------------------ */
const BENCH = [
  { name: "BrowseComp", what: "digging up hard-to-find facts on the web", lc: 91.9, op: 90.8 },
  { name: "3DCodeBench", what: "writing code that builds 3D scenes", lc: 55.4, op: 54.3 },
  { name: "Terminal-Bench 2.1", what: "getting tasks done in a terminal", lc: 88.4, op: 89.1 },
  { name: "Vision2Web", what: "turning a screenshot into a working website", lc: 78.6, op: 80.2 },
  { name: "DeepSWE 1.1", what: "fixing real issues in real codebases", lc: 64.6, op: 68.8 },
  { name: "Terminal-Bench 4.0", what: "long, messy, much harder terminal tasks", lc: 38.5, op: 53.9 },
];

export function BenchmarkChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [table, setTable] = useState(false);
  const [hover, setHover] = useState(null);

  return (
    <Figure
      title="Is it actually good?"
      subtitle="LongCat-2.5 vs Claude Opus 5, score out of 100 — sorted from LongCat's best result to its worst"
      badge={<TableToggle table={table} setTable={setTable} />}
      source={
        <>
          Source: Meituan&apos;s <Ext href="https://huggingface.co/meituan-longcat/LongCat-2.5">LongCat-2.5 model card</Ext> and{" "}
          <Ext href="https://venturebeat.com/technology/meituan-releases-the-open-weights-of-its-longcat-2-5-llm-with-vision-under-a-permissive-mit-license">VentureBeat</Ext>.
          All numbers are Meituan&apos;s; some competitor scores were run in-house and are marked “indicative only”. Opus 5 is not Anthropic&apos;s newest model.
        </>
      }
    >
      <Legend items={[["LongCat-2.5 (Meituan, open)", CN], ["Claude Opus 5 (Anthropic, closed)", US]]} />
      {table ? (
        <table className="w-full text-left text-sm">
          <thead className="text-[#8a857c]">
            <tr className="border-b border-white/10">
              <th className="py-2 font-medium">Test</th>
              <th className="py-2 text-right font-medium">LongCat-2.5</th>
              <th className="py-2 text-right font-medium">Opus 5</th>
              <th className="py-2 text-right font-medium">Gap</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {BENCH.map((b) => (
              <tr key={b.name} className="border-b border-white/[0.06]">
                <td className="py-2.5 pr-4">{b.name}</td>
                <td className="py-2.5 text-right tabular-nums">{b.lc}</td>
                <td className="py-2.5 text-right tabular-nums">{b.op}</td>
                <td className="py-2.5 text-right tabular-nums text-[#c4bfb5]">{(b.lc - b.op > 0 ? "+" : "") + (b.lc - b.op).toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div ref={ref} className="space-y-6">
          {BENCH.map((b, i) => {
            const gap = b.lc - b.op;
            const active = hover === b.name;
            return (
              <div
                key={b.name}
                onMouseEnter={() => setHover(b.name)}
                onMouseLeave={() => setHover(null)}
                className="-mx-2 rounded-xl px-2 py-1 transition-colors"
                style={{ background: active ? "rgba(255,255,255,0.03)" : "transparent" }}
              >
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-[#c4bfb5]">
                    <span className="text-white">{b.name}</span>
                    <span className="hidden text-[#8a857c] sm:inline"> · {b.what}</span>
                  </span>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-[#c4bfb5]">
                    {gap > 0 ? "+" : ""}
                    {gap.toFixed(1)}
                  </span>
                </div>
                {[
                  ["LongCat-2.5", b.lc, CN],
                  ["Opus 5", b.op, US],
                ].map(([who, v, color], j) => (
                  <div key={who} className={`flex items-center gap-3 ${j === 0 ? "" : "mt-[2px]"}`}>
                    <div className="relative h-2.5 flex-1 rounded-[4px] bg-white/[0.04]">
                      <motion.div
                        className="absolute left-0 top-0 h-full rounded-[4px]"
                        style={{ background: color }}
                        initial={{ width: 0 }}
                        animate={{ width: inView ? `${v}%` : 0 }}
                        transition={{ duration: 1, delay: i * 0.1 + j * 0.05, ease: EASE }}
                      />
                    </div>
                    <span className="w-10 shrink-0 text-right font-mono text-xs tabular-nums text-white">{v}</span>
                  </div>
                ))}
                {active && (
                  <p className="mt-1.5 text-xs text-[#a8a399] sm:hidden">{b.what}</p>
                )}
              </div>
            );
          })}
          <p className="text-xs text-[#8a857c]">Number on the right of each pair: LongCat&apos;s score minus Opus 5&apos;s.</p>
        </div>
      )}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Price: what would an AI tutor cost per month?                    */
/* ------------------------------------------------------------------ */
const MODELS = [
  { name: "LongCat-2.5", by: "Meituan", cn: true, inP: 0.3, outP: 1.2, note: "limited-time price" },
  { name: "MiMo-V2.6-Pro", by: "Xiaomi", cn: true, inP: 0.435, outP: 0.87 },
  { name: "Hy4", by: "Tencent", cn: true, inP: 0.834, outP: 2.501 },
  { name: "Kimi K3.1 Pro", by: "Moonshot", cn: true, inP: 2, outP: 10 },
  { name: "GPT-6.1 Sol", by: "OpenAI", cn: false, inP: 2, outP: 10 },
  { name: "Claude Opus 5.5", by: "Anthropic", cn: false, inP: 4, outP: 20 },
  { name: "Claude Fable 5.2", by: "Anthropic", cn: false, inP: 8, outP: 40 },
];
const STUDENT_STEPS = [1000, 5000, 10000, 50000, 100000, 500000, 1000000];
const ANSWERS = 50; // AI answers per student per month
const IN_TOK = 1600; // tokens the model reads per answer
const OUT_TOK = 400; // tokens the model writes per answer

const usd = (n) =>
  n >= 1000 ? `$${Math.round(n).toLocaleString("en-US")}` : n >= 10 ? `$${n.toFixed(0)}` : `$${n.toFixed(2)}`;

export function TutorBill() {
  const [step, setStep] = useState(2);
  const [table, setTable] = useState(false);
  const [hover, setHover] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const students = STUDENT_STEPS[step];
  const rows = MODELS.map((m) => {
    const perStudent = (ANSWERS * (IN_TOK * m.inP + OUT_TOK * m.outP)) / 1e6;
    return { ...m, perStudent, monthly: perStudent * students };
  });
  const max = Math.max(...rows.map((r) => r.monthly));

  return (
    <Figure
      title="What would an AI tutor cost?"
      subtitle="Monthly API bill at list prices, if every student asks the tutor 50 questions a month"
      badge={<TableToggle table={table} setTable={setTable} />}
      source={
        <>
          Prices per 1M tokens (input / output) from{" "}
          <Ext href="https://venturebeat.com/technology/meituan-releases-the-open-weights-of-its-longcat-2-5-llm-with-vision-under-a-permissive-mit-license">VentureBeat, Nov 9</Ext> (LongCat-2.5, GPT-6.1 Sol, Claude Opus 5.5, Claude Fable 5.2),{" "}
          <Ext href="https://venturebeat.com/technology/better-than-deepseek-xiaomis-mimo-v2-6-pro-debuts-as-the-top-open-weights-model-in-the-world-alongside-cheaper-v2-6-flash">VentureBeat, Sep 21</Ext> (MiMo),{" "}
          <Ext href="https://technode.com/2026/11/04/tencent-launches-hy4-with-vision-and-computer-use-capabilities/">TechNode</Ext> (Hy4) and{" "}
          <Ext href="https://simonwillison.net/tags/ai-in-china/">Simon Willison</Ext> (Kimi). My assumptions: each answer reads 1,600 tokens and writes 400. No caching, discounts
          or self-hosting. These models are not equally good — this compares price, not quality.
        </>
      }
    >
      <div className="mb-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <label htmlFor="students" className="text-sm text-[#c4bfb5]">
            Students using the tutor
          </label>
          <span className="text-2xl font-medium tabular-nums text-white">{students.toLocaleString("en-US")}</span>
        </div>
        <input
          id="students"
          type="range"
          min={0}
          max={STUDENT_STEPS.length - 1}
          step={1}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="mt-3 w-full accent-[#bfa273]"
          aria-valuetext={`${students.toLocaleString("en-US")} students`}
        />
        <div className="mt-1 flex justify-between font-mono text-[10px] text-[#8a857c]">
          <span>1K</span>
          <span>10K</span>
          <span>100K</span>
          <span>1M</span>
        </div>
      </div>

      <Legend items={[["Chinese model", CN], ["US model", US]]} />

      {table ? (
        <table className="w-full text-left text-sm">
          <thead className="text-[#8a857c]">
            <tr className="border-b border-white/10">
              <th className="py-2 font-medium">Model</th>
              <th className="hidden py-2 text-right font-medium sm:table-cell">In / out per 1M</th>
              <th className="py-2 text-right font-medium">Per student</th>
              <th className="py-2 text-right font-medium">Per month</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-white/[0.06]">
                <td className="py-2.5 pr-3">
                  {r.name} <span className="text-[#8a857c]">· {r.by}</span>
                </td>
                <td className="hidden py-2.5 text-right tabular-nums text-[#c4bfb5] sm:table-cell">
                  ${r.inP} / ${r.outP}
                </td>
                <td className="py-2.5 text-right tabular-nums">${r.perStudent.toFixed(3)}</td>
                <td className="py-2.5 text-right tabular-nums">{usd(r.monthly)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div ref={ref} className="space-y-4">
          {rows.map((r, i) => {
            const color = r.cn ? CN : US;
            const active = hover === r.name;
            return (
              <div
                key={r.name}
                onMouseEnter={() => setHover(r.name)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(r.name)}
                onBlur={() => setHover(null)}
                tabIndex={0}
                className="-mx-2 rounded-xl px-2 py-1 outline-none transition-colors focus-visible:ring-1 focus-visible:ring-white/20"
                style={{ background: active ? "rgba(255,255,255,0.03)" : "transparent" }}
              >
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-white">
                    {r.name} <span className="text-[#8a857c]">· {r.by}</span>
                  </span>
                  <span className="shrink-0 font-medium tabular-nums text-white">{usd(r.monthly)}</span>
                </div>
                <div className="relative h-3 w-full rounded-[4px] bg-white/[0.04]">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-[4px]"
                    style={{ background: color, minWidth: 4 }}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${(r.monthly / max) * 100}%` : 0 }}
                    transition={{ duration: 0.8, delay: i * 0.06, ease: EASE }}
                  />
                </div>
                <p className="mt-1 h-4 text-xs text-[#8a857c]">
                  {active
                    ? `$${r.inP} in · $${r.outP} out per 1M tokens${r.note ? ` · ${r.note}` : ""} · ${(r.perStudent * 100).toFixed(1)}¢ per student`
                    : ""}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Revolut: a bank that switched (stat tiles)                       */
/* ------------------------------------------------------------------ */
const REVOLUT = [
  ["~2,000", "engineers moved to a self-hosted open model as their default"],
  ["56", "Nvidia B200 GPUs running GLM-5.3 from Chinese lab Z.ai"],
  ["~$0.30", "blended cost per 1M tokens, by Revolut's own maths"],
  ["1/10", "of what it used to pay for Claude Code and Codex"],
  ["1.7s", "time to first token, down from 14.3s after 4-bit quantization and tuning"],
  ["−70%", "lead time from picking up a task to merging it"],
];

export function RevolutStats() {
  return (
    <Figure
      title="A bank already made the switch"
      subtitle="Revolut's numbers from its talk at AI Engineer in New York"
      source={
        <>
          Self-reported by Revolut&apos;s David Abitbol, via{" "}
          <Ext href="https://dealroom.co/news/169124-revolut-moves-2-000-engineers-onto-self-hosted-ai-cutting-coding-costs-9/">Dealroom</Ext>,{" "}
          <Ext href="https://www.trendingtopics.eu/revolut-glm-open-weight-coding-costs/">Trending Topics</Ext> and{" "}
          <Ext href="https://maccus.fr/en/revolut-glm-self-hosted/">MACCUS</Ext> (Nov 3, 2026). The cost figure leaves out cloud, staff and monitoring. Token limits were removed at the
          same time, so the speed-up isn&apos;t only the model.
        </>
      }
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {REVOLUT.map(([n, d], i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
          >
            <p className="text-2xl font-medium tabular-nums text-white sm:text-3xl">{n}</p>
            <p className="mt-1 text-sm leading-snug text-[#a8a399]">{d}</p>
          </motion.div>
        ))}
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Interactive: Mixture-of-Experts as a cloud kitchen (illustrative) */
/* ------------------------------------------------------------------ */
const CHEFS = 64;
const ORDERS = [
  { k: "Fix my Python bug", e: [5, 42] },
  { k: "Write a Hindi shayari", e: [17, 58] },
  { k: "Read this chart", e: [9, 30] },
  { k: "Solve my maths homework", e: [23, 51] },
  { k: "Plan a Goa trip", e: [2, 37] },
];

export function MoEKitchen() {
  const [order, setOrder] = useState(0);
  const [dense, setDense] = useState(false);
  const awake = dense ? CHEFS : ORDERS[order].e.length;
  const lit = (i) => dense || ORDERS[order].e.includes(i);

  return (
    <Figure
      title="Try it: run a 64-chef cloud kitchen"
      subtitle="Pick an order. A router wakes only the chefs who know that dish."
      source={
        <>
          A toy model to explain the idea, not LongCat&apos;s real routing. Real Mixture-of-Experts models route every token (a word piece), not whole orders, and
          experts rarely specialise this neatly. The ~3% figure is LongCat-2.5&apos;s ~48B active out of 1.6T total, from its{" "}
          <Ext href="https://huggingface.co/meituan-longcat/LongCat-2.5">model card</Ext>.
        </>
      }
    >
      <div className="flex flex-wrap gap-2">
        {ORDERS.map((o, i) => (
          <button
            key={o.k}
            onClick={() => {
              setOrder(i);
              setDense(false);
            }}
            aria-pressed={!dense && order === i}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              !dense && order === i ? "border-[#bfa273]/60 bg-[#bfa273]/10 text-white" : "border-white/10 text-[#c4bfb5] hover:text-white"
            }`}
          >
            {o.k}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_190px] sm:items-center">
        <div className="grid grid-cols-8 gap-1.5" role="img" aria-label={`${awake} of ${CHEFS} chefs working`}>
          {Array.from({ length: CHEFS }).map((_, i) => (
            <motion.div
              key={i}
              className="flex aspect-square items-center justify-center rounded-md font-mono text-[9px]"
              animate={{
                backgroundColor: lit(i) ? "#bfa273" : "rgba(255,255,255,0.04)",
                color: lit(i) ? "#121212" : "#5c5852",
                scale: lit(i) && !dense ? 1.08 : 1,
              }}
              transition={{ duration: 0.35, delay: dense ? (i % 8) * 0.02 + Math.floor(i / 8) * 0.02 : 0 }}
            >
              {i + 1}
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#8a857c]">Chefs cooking</p>
            <p className="text-4xl font-medium tabular-nums text-white">
              {awake}
              <span className="text-lg text-[#8a857c]"> / {CHEFS}</span>
            </p>
            <p className="text-sm text-[#a8a399]">{dense ? "Everyone cooks every order. Slow and expensive." : "about 3% of the kitchen, like LongCat-2.5"}</p>
          </div>
          <button
            onClick={() => setDense((d) => !d)}
            aria-pressed={dense}
            className="w-full rounded-full border border-white/10 px-3 py-2 text-xs text-[#c4bfb5] transition hover:text-white"
          >
            {dense ? "Back to the smart kitchen" : "What if everyone cooked? (dense model)"}
          </button>
        </div>
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Usage vs money (stat tiles)                                      */
/* ------------------------------------------------------------------ */
const USAGE = [
  ["#1", "Qwen (Alibaba) is the most-downloaded open model family on Hugging Face", "MIT Technology Review, Feb 2026"],
  ["~30%", "of tokens on OpenRouter went to Chinese models in some weeks of early 2026, up from under 2% in late 2024", "MIT Technology Review · Tech Times"],
  ["~4%", "of model revenue went to open-weight providers in one 2025 analysis. Closed models took ~96%", "Linux Foundation, via Tech Times"],
];

export function UsageVsMoney() {
  return (
    <Figure
      title="China is winning the downloads. The US is winning the bill."
      subtitle="Three numbers that explain the open-model market in 2026"
      source={
        <>
          Sources: <Ext href="https://www.technologyreview.com/2026/02/12/1132811/whats-next-for-chinese-open-source-ai/">MIT Technology Review (Feb 12, 2026)</Ext> and{" "}
          <Ext href="https://www.techtimes.com/articles/327646/20260917/chinese-open-weight-ai-handles-most-developer-tokens-closed-models-capture-96-revenue.htm">
            Tech Times (Sep 17, 2026)
          </Ext>
          . The revenue split is from May–Sep 2025 data, so it is older than the usage figures.
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {USAGE.map(([n, d, s]) => (
          <div key={n} className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
            <p className="text-3xl font-medium tabular-nums text-white">{n}</p>
            <p className="mt-2 flex-1 text-sm leading-snug text-[#c4bfb5]">{d}</p>
            <p className="mt-3 text-[11px] leading-snug text-[#8a857c]">{s}</p>
          </div>
        ))}
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 8. How I'd wire it: route by default, escalate on purpose           */
/* ------------------------------------------------------------------ */
const ROUTE = [
  { k: "01", t: "Request", d: "A student asks a question, or an engineer opens a ticket." },
  { k: "02", t: "Router", d: "A small, cheap check decides: easy, normal or hard?" },
  { k: "03", t: "Open model", d: "Most traffic. Self-hosted or cheap API. Your data stays yours." },
  { k: "04", t: "Frontier model", d: "The exception. Hard reasoning, risky changes, final reviews." },
];

export function RouterFlow() {
  return (
    <Figure
      title="How I'd build with this"
      subtitle="Revolut's pattern, which is also how I think about our tutors at Eklavya"
      source="My own design sketch. The router itself is usually a small model or a few rules, checked against an eval set you trust."
    >
      <div className="grid gap-3 md:grid-cols-4">
        {ROUTE.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
            className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#bfa273]">{s.k}</span>
            <p className="mt-2 font-medium text-white">{s.t}</p>
            <p className="mt-1 text-sm leading-snug text-[#a8a399]">{s.d}</p>
            {i < ROUTE.length - 1 && (
              <div aria-hidden="true" className="absolute left-1/2 top-full z-10 h-3 w-px bg-[#bfa273]/40 md:left-full md:top-1/2 md:h-px md:w-3" />
            )}
          </motion.div>
        ))}
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 9. My bets (with how sure I am)                                     */
/* ------------------------------------------------------------------ */
const BETS = [
  ["The bill, not the benchmark, decides most AI choices.", "Most apps don't need the smartest model. They need a good-enough one they can afford at scale.", 85],
  ["Open models stay a few months behind the frontier — at a fraction of the price.", "The gap on easy tasks is already tiny. The gap on the hardest agent work is where the closed labs earn their money.", 75],
  ["Your AI agent becomes a customer.", "Meituan already calls it “To A”. Apps will be built for agents that order, book and pay, not just for people tapping screens.", 70],
  ["At least one big Indian consumer app ships its own open model.", "Our super-apps sit on the same kind of real-world data Meituan does. Someone will try it.", 60],
  ["Chips become China's real moat.", "LongCat was trained on Chinese accelerators twice in a row. Every export rule makes that muscle stronger.", 65],
];

export function Bets() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="my-10 space-y-3">
      {BETS.map(([t, d, p], i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
        >
          <div className="flex gap-3">
            <span className="font-mono text-xs text-[#bfa273]">0{i + 1}</span>
            <div className="flex-1">
              <p className="font-medium text-white">{t}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#a8a399]">{d}</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="relative h-1.5 flex-1 rounded-full bg-white/[0.06]">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-full bg-[#bfa273]"
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${p}%` : 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: EASE }}
                  />
                </div>
                <span className="w-24 text-right font-mono text-[11px] text-[#8a857c]">{p}% sure</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Pull quote                                                          */
/* ------------------------------------------------------------------ */
export function PullQuote({ children }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
      className="my-12 border-l-2 border-[#bfa273] pl-6 text-2xl font-light leading-snug text-white sm:text-3xl"
      style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
    >
      {children}
    </motion.blockquote>
  );
}
