"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Copy, Table2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

/* Categorical slots validated for the dark chart surface (#171717), all pairs:
   worst CVD ΔE 9.4 · worst normal-vision ΔE 20.9 · all ≥ 3:1 contrast. */
const BLUE = "#3987e5"; // Nvidia
const ORANGE = "#d95926"; // Huawei
const AQUA = "#199e70"; // everyone else

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

const Pill = ({ children, strong }) => (
  <span
    className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ring-1 ${
      strong ? "bg-[#bfa273]/10 text-[#d1c0a3] ring-[#bfa273]/30" : "bg-white/[0.06] text-[#c4bfb5] ring-white/10"
    }`}
  >
    {children}
  </span>
);

/* ------------------------------------------------------------------ */
/* 0. TL;DR for the group chat                                         */
/* ------------------------------------------------------------------ */
const TLDR_LINES = [
  "Jensen Huang resigned as Nvidia's CEO on 12 November after reports linked him to a former executive of a Singapore data-centre firm that US officials reportedly suspect of spying for China. Beijing denies it.",
  "The real story is bigger than one person: ~80% of AI chips come from one company, most are made on one island, and the rules meant to keep them out of China are leaking through resellers and the cloud.",
  "For engineers, the lesson is old-school: never build on a single point of failure. Make your AI stack portable — chips, clouds, models and people.",
];

export function TLDR() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    const text = `TL;DR — The AI world has a single point of failure\n\n${TLDR_LINES.map((l) => `• ${l}`).join("\n")}\n\nFull breakdown: mahekcode.in/blog/ai-single-point-of-failure`;
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
/* 1. The week, with confirmed vs reported labels                      */
/* ------------------------------------------------------------------ */
const WEEK = [
  {
    d: "Sun 8 Nov",
    t: "Huang tells employees he had an affair",
    x: "He says he will cooperate with a board investigation.",
    k: "Confirmed",
  },
  {
    d: "Same week",
    t: "Reports link it to a Singapore chip buyer",
    x: "Reports say the affair was with a former executive of Megaspeed, a Singapore data-centre firm and Nvidia customer. A US intelligence memo reportedly alleged she worked for China's Ministry of State Security. That hasn't been publicly confirmed, and Beijing calls it “groundless speculation”.",
    k: "Reported",
  },
  {
    d: "Mon 9 Nov",
    t: "Justice Department takes over a probe",
    x: "It looks at whether Megaspeed helped Chinese companies get around US chip restrictions. Megaspeed denies wrongdoing and no charges have been filed. Nvidia shares close down more than 4%.",
    k: "Reported",
  },
  {
    d: "Wed 11 Nov",
    t: "Washington starts asking hard questions",
    x: "Senators Elizabeth Warren and Chris Coons ask officials to preserve every record on Nvidia chip exports to China. Calls for tighter export rules get louder.",
    k: "Confirmed",
  },
  {
    d: "Thu 12 Nov",
    t: "Huang resigns after 33 years",
    x: "He steps down as CEO and leaves the board, effective immediately. CFO Colette Kress becomes interim CEO. Shares fall more than 13% at one point, and Nvidia dips below $4 trillion in value.",
    k: "Confirmed",
  },
  {
    d: "Fri 13 Nov",
    t: "A firm she set up reportedly ended up with banned chips",
    x: "Bloomberg reports that servers with Nvidia H800 chips — banned for China since 2023 — reached a Shanghai company she founded. It is unclear how, or whether she was involved. China's foreign ministry warns against the “abuse of export control measures”.",
    k: "Reported",
  },
  {
    d: "18–19 Nov",
    t: "Trump expected to meet Xi in Shenzhen",
    x: "At the APEC summit, with chips hanging over the table. Congressional committee chairs have asked Huang for a closed-door interview on 1 December.",
    k: "Upcoming",
  },
];

export function WeekTimeline() {
  return (
    <Figure
      title="The week, in seven moves"
      subtitle="“Confirmed” means a company or official said it on record. “Reported” means news outlets reported it."
      source={
        <>
          Sources: <Ext href="https://www.cfr.org/articles/nvidia-chinese-espionage-and-the-ai-race-four-foreign-policy-issues-to-watch">Council on Foreign Relations</Ext>,{" "}
          <Ext href="https://www.cbsnews.com/news/china-us-export-controls-chips-nvidia-huang-scandal/">CBS News</Ext>,{" "}
          <Ext href="https://www.euronews.com/2026/11/13/china-warns-us-over-chip-curbs-as-suspected-spys-firm-got-banned-chips">Euronews</Ext>,{" "}
          <Ext href="https://www.aljazeera.com/news/2026/11/12/why-did-nvidia-ceo-jensen-huang-resign-and-who-is-colette-kress">Al Jazeera</Ext>,{" "}
          <Ext href="https://rollcall.com/2026/11/12/calls-for-nvidia-probes-new-chip-export-limits-intensify/">Roll Call</Ext> and{" "}
          <Ext href="https://www.atlanticcouncil.org/dispatches/beyond-the-spy-scandal-what-the-nvidia-megaspeed-case-reveals-about-export-controls/">Atlantic Council</Ext>,
          which in turn cite the New York Times, Wall Street Journal and Bloomberg.
        </>
      }
    >
      <ol className="relative space-y-5 border-l border-white/10 pl-6">
        {WEEK.map((w, i) => (
          <motion.li
            key={w.d}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            className="relative"
          >
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-[#bfa273] bg-[#171717]" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#8a857c]">{w.d}</span>
              <Pill strong={w.k === "Confirmed"}>{w.k}</Pill>
            </div>
            <p className="mt-1 font-medium text-white">{w.t}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#a8a399]">{w.x}</p>
          </motion.li>
        ))}
      </ol>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Follow one GPU                                                   */
/* ------------------------------------------------------------------ */
const CHAIN = [
  { k: "Design", where: "California, USA", who: "Nvidia", x: "The chip's blueprint. US law decides who it can be sold to.", risk: "Export licence needed for top chips going to China." },
  { k: "Tools", where: "Netherlands", who: "ASML", x: "The only company that makes the EUV lithography machines needed to print the most advanced chips.", risk: "Its most advanced machines can't be sold to China." },
  { k: "Fab", where: "Taiwan", who: "TSMC", x: "Prints the chip itself, then packages it with memory.", risk: "One island makes most of the world's top AI chips." },
  { k: "Memory", where: "South Korea · US", who: "SK hynix, Samsung, Micron", x: "High-bandwidth memory stacked right next to the chip. It has had its own shortages.", risk: "A second bottleneck few people talk about." },
  { k: "Server", where: "Worldwide", who: "Dell, Supermicro and others", x: "Eight GPUs go into one server, which gets sold to a data centre.", risk: "Leak point: servers sold to a reseller can be passed on." },
  { k: "Data centre", where: "Singapore, Malaysia…", who: "Cloud and hosting firms", x: "The server gets racked, powered and rented out by the hour.", risk: "Leak point: renting remote access is still legal." },
];

export function FollowTheGPU() {
  const [i, setI] = useState(4);
  const s = CHAIN[i];
  return (
    <Figure
      title="Follow one GPU"
      subtitle="Tap a stop. The gold ones are where this week's story says chips can slip through."
      source={
        <>
          My simplified map of a widely reported supply chain. Leak points based on the{" "}
          <Ext href="https://www.atlanticcouncil.org/dispatches/beyond-the-spy-scandal-what-the-nvidia-megaspeed-case-reveals-about-export-controls/">Atlantic Council</Ext> and{" "}
          <Ext href="https://www.cfr.org/articles/nvidia-chinese-espionage-and-the-ai-race-four-foreign-policy-issues-to-watch">CFR</Ext> analyses.
        </>
      }
    >
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6" role="tablist" aria-label="Supply chain stops">
        {CHAIN.map((c, j) => {
          const leak = j >= 4;
          const active = i === j;
          return (
            <button
              key={c.k}
              role="tab"
              aria-selected={active}
              onClick={() => setI(j)}
              className={`relative rounded-xl border px-2 py-3 text-left transition ${
                active
                  ? leak
                    ? "border-[#bfa273]/70 bg-[#bfa273]/10"
                    : "border-white/30 bg-white/[0.06]"
                  : leak
                    ? "border-[#bfa273]/30 bg-[#bfa273]/[0.03] hover:border-[#bfa273]/60"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <span className={`font-mono text-[10px] ${leak ? "text-[#bfa273]" : "text-[#8a857c]"}`}>0{j + 1}</span>
              <span className="mt-1 block text-sm font-medium text-white">{c.k}</span>
              <span className="block truncate text-[11px] text-[#8a857c]">{c.where}</span>
            </button>
          );
        })}
      </div>
      <motion.div
        key={s.k}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
        role="tabpanel"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-medium text-white">
            {s.k} · <span className="text-[#c4bfb5]">{s.who}</span>
          </p>
          <span className="text-xs text-[#8a857c]">{s.where}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[#a8a399]">{s.x}</p>
        <p className={`mt-3 text-sm ${i >= 4 ? "text-[#d1c0a3]" : "text-[#c4bfb5]"}`}>{s.risk}</p>
      </motion.div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Three doors to a banned chip                                     */
/* ------------------------------------------------------------------ */
const DOORS = [
  {
    t: "Buy it",
    s: "Mostly shut",
    x: "Top chips like the H800 have been banned for China since 2023. Since December 2025, some H200 sales are allowed case by case, with the US government taking a 25% cut.",
    fix: "Already in place",
  },
  {
    t: "Re-route it",
    s: "Leaking",
    x: "Chips are sold legally to a buyer in Singapore or Malaysia, then passed on. Megaspeed reportedly imported at least $4.6 billion of Nvidia tech in 2023–25; it denies wrongdoing. In a separate case, US prosecutors allege $2.5 billion of servers went to China this way.",
    fix: "Chip Security Act: chips must prove where they are. Cleared a House committee unanimously in March; a version is in the Senate’s defence bill.",
  },
  {
    t: "Rent it",
    s: "Wide open",
    x: "A Chinese company rents GPUs in a data centre abroad over the internet. The chip never moves, so today this is legal.",
    fix: "Remote Access Security Act: passed the House 369–22 in January, stuck in the Senate. Commerce is reportedly drafting its own rule.",
  },
];

export function ThreeDoors() {
  return (
    <Figure
      title="Three doors to a banned chip"
      subtitle="Export controls only work if all three are locked"
      source={
        <>
          Sources: <Ext href="https://www.atlanticcouncil.org/dispatches/beyond-the-spy-scandal-what-the-nvidia-megaspeed-case-reveals-about-export-controls/">Atlantic Council (Nov 12)</Ext>,{" "}
          <Ext href="https://rollcall.com/2026/11/12/calls-for-nvidia-probes-new-chip-export-limits-intensify/">Roll Call (Nov 12)</Ext>,{" "}
          <Ext href="https://www.aljazeera.com/news/2026/11/12/trump-heads-to-china-amid-nvidia-scandal-will-he-get-tougher-on-beijing">Al Jazeera (Nov 12)</Ext> and{" "}
          <Ext href="https://lapaasvoice.com/us-commerce-department-finalizes-ai-remote-access-rule-to-restrict-chinas-access-to-advanced-chips">Lapaas Voice, citing The Information</Ext>{" "}
          (the Commerce rule has not been published).
        </>
      }
    >
      <div className="grid gap-3 md:grid-cols-3">
        {DOORS.map((d, i) => (
          <motion.div
            key={d.t}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-lg font-medium text-white">
                <span className="mr-2 font-mono text-xs text-[#bfa273]">0{i + 1}</span>
                {d.t}
              </p>
              <Pill strong={i > 0}>{d.s}</Pill>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#a8a399]">{d.x}</p>
            <p className="mt-3 border-t border-white/[0.06] pt-3 text-xs leading-relaxed text-[#c4bfb5]">
              <span className="font-mono uppercase tracking-wider text-[#8a857c]">Fix · </span>
              {d.fix}
            </p>
          </motion.div>
        ))}
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Interactive: proving where a GPU is with the speed of light      */
/* ------------------------------------------------------------------ */
// Great-circle distance from Singapore, km (haversine).
const PLACES = [
  { k: "Singapore", km: 15 },
  { k: "Kuala Lumpur", km: 309 },
  { k: "Shenzhen", km: 2603 },
  { k: "Bengaluru", km: 3164 },
  { k: "Shanghai", km: 3806 },
  { k: "Beijing", km: 4472 },
];
const LIMIT_MS = 5; // the verifier's rule: answer within 5 ms or you're not "in Singapore"

export function PingProof() {
  const [p, setP] = useState(4);
  const [fake, setFake] = useState(0);
  const place = PLACES[p];
  const minRtt = place.km / 100; // light in fibre ≈ 200,000 km/s → 1 ms RTT per 100 km
  const measured = minRtt * 1.5 + 0.4 + fake; // real routes are never straight
  const pass = measured <= LIMIT_MS;
  const scaleMax = 80;

  return (
    <Figure
      title="Try it: catch a GPU lying about where it is"
      subtitle="The chip says it's in a Singapore data centre. A server in Singapore pings it. Physics does the rest."
      source={
        <>
          My illustration of the “ping-based location” idea described in{" "}
          <Ext href="https://www.technologyreview.com/2026/11/12/1148483/nvidia-chip-tracking/">MIT Technology Review (Nov 12)</Ext>. Assumes light in fibre at about 200,000
          km/s and real routes about 1.5× longer than a straight line. Real systems use several verifier servers and signed responses.
        </>
      }
    >
      <p className="text-sm text-[#c4bfb5]">Where is the chip really?</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {PLACES.map((pl, j) => (
          <button
            key={pl.k}
            onClick={() => setP(j)}
            aria-pressed={p === j}
            className={`rounded-full border px-3 py-1.5 text-xs transition ${
              p === j ? "border-[#bfa273]/60 bg-[#bfa273]/10 text-white" : "border-white/10 text-[#c4bfb5] hover:text-white"
            }`}
          >
            {pl.k}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="mb-1.5 flex justify-between text-sm">
            <span className="text-[#c4bfb5]">Fastest possible reply (speed of light)</span>
            <span className="font-mono tabular-nums text-white">{minRtt.toFixed(1)} ms</span>
          </div>
          <div className="relative h-3 rounded-[4px] bg-white/[0.04]">
            <motion.div className="absolute left-0 top-0 h-full rounded-[4px] bg-white/30" animate={{ width: `${Math.min(100, (minRtt / scaleMax) * 100)}%` }} transition={{ duration: 0.5, ease: EASE }} />
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-sm">
            <span className="text-[#c4bfb5]">Measured reply time</span>
            <span className="font-mono tabular-nums text-white">{measured.toFixed(1)} ms</span>
          </div>
          <div className="relative h-3 rounded-[4px] bg-white/[0.04]">
            <motion.div className="absolute left-0 top-0 h-full rounded-[4px] bg-[#bfa273]" animate={{ width: `${Math.min(100, (measured / scaleMax) * 100)}%` }} transition={{ duration: 0.5, ease: EASE }} />
            <div className="absolute top-[-4px] h-5 w-px bg-white/60" style={{ left: `${(LIMIT_MS / scaleMax) * 100}%` }} aria-hidden="true" />
          </div>
          <p className="mt-1 text-[11px] text-[#8a857c]">White line = the {LIMIT_MS} ms limit for “in Singapore”</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#8a857c]">Verdict</p>
          <p className="mt-1 text-lg font-medium text-white">{pass ? "✓ Plausibly in Singapore" : "✗ Can't be in Singapore"}</p>
          <p className="text-sm text-[#a8a399]">
            {pass
              ? "The reply came back fast enough. Nothing that far away could answer this quickly."
              : `About ${place.km.toLocaleString("en-US")} km away. No signal can make that round trip in ${LIMIT_MS} ms.`}
          </p>
        </div>
        <button
          onClick={() => setFake((f) => (f ? 0 : 20))}
          aria-pressed={fake > 0}
          className="shrink-0 rounded-full border border-white/10 px-3 py-2 text-xs text-[#c4bfb5] transition hover:text-white"
        >
          {fake ? "Remove fake delay" : "Try to cheat: add 20 ms delay"}
        </button>
      </div>
      {fake > 0 && (
        <p className="mt-3 text-sm text-[#d1c0a3]">
          Adding delay only makes you look <em>further</em> away. You can fake being far. You can&apos;t fake being close. That one-way door is why this idea works.
        </p>
      )}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Market share: global + China (part-to-whole)                     */
/* ------------------------------------------------------------------ */
const CHINA = [
  { k: "Nvidia", v: 34, c: BLUE, units: "678,000 units, down 44%" },
  { k: "Huawei", v: 28, c: ORANGE, units: "572,000 units, nearly doubled" },
  { k: "Everyone else", v: 38, c: AQUA, units: "Alibaba T-Head, Cambricon, Baidu Kunlun, AMD and others" },
];

export function ChinaShare() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [table, setTable] = useState(false);
  const [hover, setHover] = useState(null);
  const active = CHINA.find((c) => c.k === hover);

  return (
    <Figure
      title="China is already building around Nvidia"
      subtitle="Share of AI accelerators shipped in China, first half of 2026"
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
          IDC data as reported by <Ext href="https://finance.biggo.com/news/56a53bec-1f5a-4478-9a54-b222c7001677">BigGo Finance (Oct 15, 2026)</Ext>; I couldn&apos;t open the IDC report
          itself. Nvidia&apos;s China share was 55% the year before. Worldwide, analysts estimate Nvidia still has roughly 75–80% of AI accelerator revenue (
          <Ext href="https://siliconanalysts.com/analysis/nvidia-ai-accelerator-market-share-2024-2026">Silicon Analysts</Ext>, an estimate rather than a measured share).
        </>
      }
    >
      <ul className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#c4bfb5]">
        {CHINA.map((c) => (
          <li key={c.k} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: c.c }} /> {c.k}
          </li>
        ))}
      </ul>
      {table ? (
        <table className="w-full text-left text-sm">
          <thead className="text-[#8a857c]">
            <tr className="border-b border-white/10">
              <th className="py-2 font-medium">Maker</th>
              <th className="py-2 text-right font-medium">Share</th>
              <th className="hidden py-2 pl-4 font-medium sm:table-cell">Detail</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {CHINA.map((c) => (
              <tr key={c.k} className="border-b border-white/[0.06]">
                <td className="py-2.5">{c.k}</td>
                <td className="py-2.5 text-right tabular-nums">{c.v}%</td>
                <td className="hidden py-2.5 pl-4 text-[#a8a399] sm:table-cell">{c.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div ref={ref}>
          <div className="flex h-10 w-full gap-[2px] overflow-hidden rounded-[6px]">
            {CHINA.map((c, i) => (
              <motion.div
                key={c.k}
                onMouseEnter={() => setHover(c.k)}
                onMouseLeave={() => setHover(null)}
                className="flex h-full items-center justify-start overflow-hidden px-2 text-xs font-medium text-white"
                style={{ background: c.c, opacity: hover && hover !== c.k ? 0.45 : 1 }}
                initial={{ width: 0 }}
                animate={{ width: inView ? `${c.v}%` : 0 }}
                transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
              >
                {c.v}%
              </motion.div>
            ))}
          </div>
          <p className="mt-3 h-5 text-sm text-[#a8a399]">{active ? `${active.k}: ${active.v}% — ${active.units}` : "Hover a segment for details."}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
              <p className="text-2xl font-medium tabular-nums text-white sm:text-3xl">55% → 34%</p>
              <p className="mt-1 text-sm text-[#a8a399]">Nvidia&apos;s share of China&apos;s AI chips in about a year</p>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
              <p className="text-2xl font-medium tabular-nums text-white sm:text-3xl">~75–80%</p>
              <p className="mt-1 text-sm text-[#a8a399]">Nvidia&apos;s estimated share of AI chip revenue worldwide</p>
            </div>
          </div>
        </div>
      )}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 6. India in numbers                                                 */
/* ------------------------------------------------------------------ */
const INDIA = [
  ["45,000+", "GPUs in India's shared AI compute pool by June 2026", "Government figures, via Outlook India"],
  ["93 lakh", "GPU-hours sanctioned to 237 projects by August 2026", "Government figures, via Outlook India"],
  ["20,000+", "Nvidia Blackwell Ultra GPUs in Yotta's Shakti Cloud alone", "Outlook India"],
  ["~24 months", "India's target for its own GPU / AI accelerator", "MeitY Secretary S. Krishnan, Nov 4"],
];

export function IndiaStats() {
  return (
    <Figure
      title="Where India stands"
      subtitle="Lots of compute. Almost all of it borrowed."
      source={
        <>
          Sources: <Ext href="https://www.outlookindia.com/international/india-ai-mission-nvidia-alternatives-chinese-spy-jensen-huang">Outlook India (Nov 11, 2026)</Ext> and{" "}
          <Ext href="https://cio.eletsonline.com/artificial-intelligence/meity-indigenous-gpu-chip/76737/">Elets CIO (Nov 6, 2026)</Ext>, reporting S. Krishnan&apos;s interview with ETGovernment.
          The 24-month figure is a development target, not a launch date, and no specs have been named.
        </>
      }
    >
      <div className="grid grid-cols-2 gap-3">
        {INDIA.map(([n, d, s], i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4"
          >
            <p className="text-2xl font-medium tabular-nums text-white sm:text-3xl">{n}</p>
            <p className="mt-1 flex-1 text-sm leading-snug text-[#c4bfb5]">{d}</p>
            <p className="mt-3 text-[11px] leading-snug text-[#8a857c]">{s}</p>
          </motion.div>
        ))}
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Interactive: single-point-of-failure audit for your AI stack     */
/* ------------------------------------------------------------------ */
const AUDIT = [
  "Could your model code run on non-Nvidia hardware (AMD, TPU, an NPU) without a rewrite?",
  "Could you switch your main LLM provider in under a day?",
  "Do you have a fallback model if your main API goes down or gets blocked in your region?",
  "Do you know which country your data and GPUs actually sit in?",
  "Do you have evals, so you'd notice if a swapped-in model is worse?",
  "Does more than one person on your team understand your AI infrastructure?",
];

function verdict(n) {
  if (n <= 2) return ["SPOF city", "One outage, one price hike or one new rule could stop you. Start with the cheapest fix: a fallback model and a basic eval set."];
  if (n <= 4) return ["Some redundancy", "You've got backups in places. Find the box you left unticked that would hurt the most, and fix that one first."];
  return ["Built to bend", "If a chip, a cloud or a vendor disappears tomorrow, you have a plan. That's rarer than you'd think."];
}

export function SPOFAudit() {
  const [ticks, setTicks] = useState(() => AUDIT.map(() => false));
  const n = ticks.filter(Boolean).length;
  const [label, advice] = verdict(n);
  return (
    <Figure
      title="Audit your own AI stack"
      subtitle="Tick everything that's true for your project. Be honest — nobody's watching."
      source="My own checklist. It's for personal projects as much as startups."
    >
      <ul className="space-y-2">
        {AUDIT.map((q, i) => (
          <li key={q}>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition hover:border-white/15">
              <input
                type="checkbox"
                checked={ticks[i]}
                onChange={() => setTicks((t) => t.map((v, j) => (j === i ? !v : v)))}
                className="mt-1 h-4 w-4 shrink-0 accent-[#bfa273]"
              />
              <span className="text-sm leading-relaxed text-[#c4bfb5]">{q}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-lg font-medium text-white">{label}</p>
          <p className="font-mono text-sm tabular-nums text-[#c4bfb5]">
            {n} / {AUDIT.length}
          </p>
        </div>
        <div className="mt-3 flex gap-1" aria-hidden="true">
          {AUDIT.map((_, i) => (
            <span key={i} className="h-1.5 flex-1 rounded-full transition-colors" style={{ background: i < n ? "#bfa273" : "rgba(255,255,255,0.08)" }} />
          ))}
        </div>
        <p className="mt-3 text-sm text-[#a8a399]">{advice}</p>
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 8. My bets                                                          */
/* ------------------------------------------------------------------ */
const BETS = [
  ["Renting GPUs from abroad gets regulated.", "The cloud door is the easiest one to walk through today. After this week, it's the one Congress is staring at.", 70],
  ["Chips start proving where they are.", "Some form of location check becomes law or standard practice for top AI chips by the end of 2027. According to one congressman, Nvidia has privately said it's doable.", 65],
  ["Nvidia stays on top, but the share keeps slipping.", "Not because of this week alone. Because every government and big buyer just got a fresh reason to want a second supplier.", 75],
  ["“Compliance engineer for AI compute” becomes a real job.", "Someone has to write the code that checks who is using which GPU, from where. Today that's mostly paperwork.", 60],
  ["India's first home-grown AI chip ships late — but it ships.", "Twenty-four months is ambitious. The first version won't beat Nvidia. It doesn't need to. It needs to exist.", 55],
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
