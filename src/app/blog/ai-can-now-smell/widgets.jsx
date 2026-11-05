"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, Github, Info, Table2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

/* Validated categorical pair for the dark chart surface (#0c0c16). */
const MACHINE = "#8b5cf6";
const PEOPLE = "#0ea5c6";

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

/* ------------------------------------------------------------------ */
/* 1. How the Scentronic system works — flow                           */
/* ------------------------------------------------------------------ */
const FLOW = [
  { k: "01", t: "Sniff", d: "An e-nose with six metal-oxide gas sensors breathes in the air near the food." },
  { k: "02", t: "Recognise", d: "Machine learning matches the sensor pattern to one of five foods it was trained on." },
  { k: "03", t: "Send", d: "Only the label travels over the internet — not the smell itself." },
  { k: "04", t: "Release", d: "A wristband or necklace sprays a matching scent that was loaded into it in advance." },
];

export function SmellPipeline() {
  return (
    <Figure
      title="How “sending a smell” actually works"
      subtitle="Ohio State and Zhejiang Lab's Scentronic system, step by step"
      source={
        <>
          Based on the{" "}
          <Ext href="https://www.eurekalert.org/news-releases/1148253">Science Advances release (Oct 21, 2026)</Ext> and{" "}
          <Ext href="https://newatlas.com/vr/scentronic-smells-sent-over-internet/">New Atlas</Ext>.
        </>
      }
    >
      <div className="grid gap-3 md:grid-cols-4">
        {FLOW.map((s, i) => (
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
            {i < FLOW.length - 1 && (
              <div aria-hidden="true" className="absolute left-1/2 top-full z-10 h-3 w-px bg-[#bfa273]/40 md:left-full md:top-1/2 md:h-px md:w-3" />
            )}
          </motion.div>
        ))}
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Results — horizontal bars (machine vs people)                    */
/* ------------------------------------------------------------------ */
const RESULTS = [
  { label: "E-nose recognises which of the 5 foods it is", who: "machine", lo: 96, hi: 100, note: "96–100%, depending on the method" },
  { label: "People name a single replayed scent", who: "people", lo: 73, hi: 73, note: "about 73%" },
  { label: "People name a pair of replayed scents", who: "people", lo: 71, hi: 71, note: "about 71%" },
  { label: "People rank scent intensity correctly", who: "people", lo: 59, hi: 59, note: "about 59%" },
];

export function ResultsChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [table, setTable] = useState(false);

  return (
    <Figure
      title="How well it worked"
      subtitle="Lab results for five foods: coffee, beer, red wine, orange and chocolate cake"
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
          Sources: <Ext href="https://news.osu.edu/new-tech-passes-the-smell-test">Ohio State News</Ext> (73% and 71%) and{" "}
          <Ext href="https://newatlas.com/vr/scentronic-smells-sent-over-internet/">New Atlas</Ext> (e-nose accuracy and
          intensity ranking), reporting on Yang et al., Science Advances (2026). The human tests used a small group of
          volunteers.
        </>
      }
    >
      <ul className="mb-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#c4bfb5]">
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: MACHINE }} /> The machine
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: PEOPLE }} /> People smelling what it sent
        </li>
      </ul>

      {table ? (
        <table className="w-full text-left text-sm">
          <thead className="text-[#8a857c]">
            <tr className="border-b border-white/10">
              <th className="py-2 font-medium">Test</th>
              <th className="py-2 text-right font-medium">Accuracy</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {RESULTS.map((r) => (
              <tr key={r.label} className="border-b border-white/[0.06]">
                <td className="py-2.5 pr-4">{r.label}</td>
                <td className="py-2.5 text-right tabular-nums">{r.lo === r.hi ? `${r.lo}%` : `${r.lo}–${r.hi}%`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div ref={ref} className="space-y-5">
          {RESULTS.map((r, i) => {
            const color = r.who === "machine" ? MACHINE : PEOPLE;
            return (
              <div key={r.label}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-[#c4bfb5]">{r.label}</span>
                  <span className="shrink-0 font-medium tabular-nums text-white">{r.lo === r.hi ? `${r.lo}%` : `${r.lo}–${r.hi}%`}</span>
                </div>
                <div className="relative h-3 w-full rounded-[4px] bg-white/[0.04]">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-[4px]"
                    style={{ background: color }}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${r.lo}%` : 0 }}
                    transition={{ duration: 1.1, delay: i * 0.15, ease: EASE }}
                  />
                  {r.hi > r.lo && (
                    <motion.div
                      className="absolute top-0 h-full rounded-r-[4px]"
                      style={{ left: `${r.lo}%`, background: color, opacity: 0.4 }}
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${r.hi - r.lo}%` : 0 }}
                      transition={{ duration: 0.5, delay: 1.1, ease: EASE }}
                    />
                  )}
                </div>
              </div>
            );
          })}
          <div className="flex justify-between font-mono text-[10px] text-[#8a857c]">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      )}
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Why smell is hard — unit chart: 3 vs ~400 receptor types         */
/* ------------------------------------------------------------------ */
export function ReceptorDots() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const smell = Array.from({ length: 400 });

  return (
    <Figure
      title="Why there's no “RGB” for smell"
      subtitle="Each dot is one type of receptor the human body uses for that sense"
      source={
        <>
          Colour: the three cone types in the human retina. Smell: “~400 types” of olfactory receptors —{" "}
          <Ext href="https://bionumbers.hms.harvard.edu/bionumber.aspx?id=112608">BioNumbers 112608</Ext>, citing Malnic,
          Godfrey &amp; Buck (2004), PNAS, and Meister (2015), eLife.
        </>
      }
    >
      <div ref={ref} className="grid gap-6 sm:grid-cols-[170px_1fr] sm:gap-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#8a857c]">Colour vision</p>
          <div className="mt-3 flex gap-2">
            {["#e0478a", "#10a37a", "#0ea5c6"].map((c, i) => (
              <motion.span
                key={c}
                className="h-4 w-4 rounded-full"
                style={{ background: c }}
                initial={{ scale: 0 }}
                animate={{ scale: inView ? 1 : 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
          <p className="mt-3 text-4xl font-medium text-white">3</p>
          <p className="text-sm text-[#a8a399]">so every screen can mix any colour from red, green and blue</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#8a857c]">Smell</p>
          <div className="mt-3 grid grid-cols-[repeat(25,minmax(0,1fr))] gap-[3px] sm:grid-cols-[repeat(40,minmax(0,1fr))]" aria-hidden="true">
            {smell.map((_, i) => (
              <motion.span
                key={i}
                className="aspect-square rounded-full"
                style={{ background: MACHINE }}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 0.35 + ((i * 37) % 65) / 100 : 0 }}
                transition={{ delay: 0.2 + (i % 40) * 0.012 + Math.floor(i / 40) * 0.03 }}
              />
            ))}
          </div>
          <p className="mt-3 text-4xl font-medium text-white">~400</p>
          <p className="text-sm text-[#a8a399]">so there is no small set of “primary smells” a device can simply mix</p>
        </div>
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Interactive: how an e-nose "sees" a smell (illustrative)         */
/* ------------------------------------------------------------------ */
const SENSORS = ["S1", "S2", "S3", "S4", "S5", "S6"];
// Made-up fingerprints to show the idea of pattern matching — NOT data from the study.
const FOODS = {
  Coffee: [0.82, 0.45, 0.66, 0.3, 0.74, 0.52],
  Beer: [0.4, 0.78, 0.35, 0.62, 0.48, 0.7],
  "Red wine": [0.58, 0.7, 0.5, 0.82, 0.38, 0.6],
  Orange: [0.3, 0.42, 0.85, 0.48, 0.62, 0.36],
  "Chocolate cake": [0.7, 0.32, 0.46, 0.4, 0.86, 0.74],
};

function similarity(a, b) {
  const dot = a.reduce((s, v, i) => s + v * b[i], 0);
  const na = Math.hypot(...a);
  const nb = Math.hypot(...b);
  return dot / (na * nb);
}

export function ENoseDemo() {
  const [food, setFood] = useState("Coffee");
  const [noise, setNoise] = useState(0.15);
  const [reading, setReading] = useState(FOODS.Coffee);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // a "sniff": the true fingerprint plus random sensor noise
    const r = FOODS[food].map((v) => Math.min(1, Math.max(0.02, v + (Math.random() - 0.5) * 2 * noise)));
    setReading(r);
  }, [food, noise, tick]);

  const ranked = Object.entries(FOODS)
    .map(([name, fp]) => [name, similarity(reading, fp)])
    .sort((a, b) => b[1] - a[1]);
  const guess = ranked[0][0];
  const right = guess === food;

  return (
    <Figure
      title="Try it: how an e-nose “sees” a smell"
      subtitle="Pick a food, then add noise. The nose only sees six numbers and guesses the closest pattern it knows."
      badge={
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1.5 text-xs text-amber-200 ring-1 ring-amber-300/20">
          <Info className="h-3.5 w-3.5" /> Illustrative
        </span>
      }
      source="Made-up sensor patterns to show the idea of pattern matching. These are not readings from the Scentronic study."
    >
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Food">
        {Object.keys(FOODS).map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={food === f}
            onClick={() => setFood(f)}
            className={`rounded-full px-3.5 py-1.5 text-sm transition ${
              food === f ? "bg-white font-medium text-black" : "border border-white/10 text-[#c4bfb5] hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-[#8a857c]">Sensor reading</p>
          <div className="flex h-40 items-end gap-2">
            {reading.map((v, i) => (
              <div key={SENSORS[i]} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                <motion.div
                  className="w-full rounded-t-[4px]"
                  style={{ background: MACHINE }}
                  animate={{ height: `${v * 100}%` }}
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                />
                <span className="font-mono text-[10px] text-[#8a857c]">{SENSORS[i]}</span>
              </div>
            ))}
          </div>
          <label className="mt-5 block text-sm">
            <span className="flex justify-between text-[#c4bfb5]">
              <span>Sensor noise</span>
              <span className="tabular-nums text-white">{Math.round(noise * 100)}%</span>
            </span>
            <input
              type="range"
              min={0}
              max={0.5}
              step={0.05}
              value={noise}
              onChange={(e) => setNoise(+e.target.value)}
              className="mt-2 w-full accent-[#bfa273]"
            />
          </label>
          <button
            onClick={() => setTick((t) => t + 1)}
            className="mt-3 rounded-full border border-white/10 px-3 py-1.5 text-xs text-[#c4bfb5] hover:text-white"
          >
            Sniff again
          </button>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-[#8a857c]">Closest match</p>
          <ul className="space-y-2">
            {ranked.map(([name, s], i) => (
              <li key={name} className="text-sm">
                <div className="mb-1 flex justify-between">
                  <span className={i === 0 ? "font-medium text-white" : "text-[#a8a399]"}>{name}</span>
                  <span className="tabular-nums text-[#c4bfb5]">{(s * 100).toFixed(0)}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/[0.05]">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: i === 0 ? MACHINE : "#6f6e86" }}
                    animate={{ width: `${Math.max(0, (s - 0.8) / 0.2) * 100}%` }}
                    transition={{ type: "spring", stiffness: 140, damping: 20 }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className={`mt-4 rounded-xl px-3 py-2 text-sm ${right ? "bg-emerald-500/10 text-emerald-200" : "bg-rose-500/10 text-rose-200"}`} aria-live="polite">
            {right ? `✓ Guessed ${guess}.` : `✗ Guessed ${guess} — the noise fooled it.`} It has no idea what any of these
            smell <em>like</em>.
          </p>
        </div>
      </div>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Senses we've learned to record — timeline                       */
/* ------------------------------------------------------------------ */
const TIMELINE = [
  { year: "c. 1826", sense: "Sight", text: "Nicéphore Niépce makes the earliest surviving photograph." },
  { year: "1877", sense: "Sound", text: "Thomas Edison's phonograph records and plays back a voice." },
  { year: "2023", sense: "Smell", text: "A “Principal Odor Map” in Science predicts how molecules smell, beating the median human panellist on 53% of 400 new molecules." },
  { year: "2024", sense: "Smell", text: "Osmo recreates a plum's scent from machine data in its “scent teleportation” demo." },
  { year: "2026", sense: "Smell", text: "Scentronic recognises a food and replays its scent on a wearable over the internet." },
];

export function SensesTimeline() {
  return (
    <Figure
      title="The senses we've learned to record"
      subtitle="Sight and sound were first recorded in the 1800s. Smell is only starting now."
      source={
        <>
          2023: Lee et al., Science, via <Ext href="https://www.movetheneedle.news/brands/ai-is-giving-computers-a-sense-of-smell/">MoveTheNeedle</Ext>.
          2024: Osmo, same source. 2026: <Ext href="https://www.eurekalert.org/news-releases/1148253">Science Advances</Ext>.
        </>
      }
    >
      <ol className="relative ml-2 space-y-5 border-l border-white/10 pl-6">
        {TIMELINE.map((t, i) => (
          <motion.li
            key={t.year + t.text}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            className="relative"
          >
            <span
              className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-[#171717]"
              style={{ background: t.sense === "Smell" ? MACHINE : "#6f6e86" }}
            />
            {i === 2 && (
              <span className="mb-3 -ml-6 block font-mono text-[10px] uppercase tracking-widest text-[#6f6e86]">··· 146 years later ···</span>
            )}
            <p className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-white">{t.year}</span>
              <span className={`font-mono text-[10px] uppercase tracking-widest ${t.sense === "Smell" ? "text-[#bfa273]" : "text-[#8a857c]"}`}>
                {t.sense}
              </span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[#a8a399]">{t.text}</p>
          </motion.li>
        ))}
      </ol>
    </Figure>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Verified on GitHub                                              */
/* ------------------------------------------------------------------ */
const REPOS = [
  {
    repo: "ARY2260/openpom",
    href: "https://github.com/ARY2260/openpom",
    what: "An open replication of the Principal Odor Map paper (Lee et al., Science 2023), built on DeepChem.",
    tag: "MIT licence",
  },
  {
    repo: "pyrfume/pyrfume-data",
    href: "https://github.com/pyrfume/pyrfume-data",
    what: "The Pyrfume Public Data Archive — curated olfactory psychophysics and biology datasets.",
    tag: "Datasets",
  },
  {
    repo: "the-ahuja-lab/OdoriFy",
    href: "https://github.com/the-ahuja-lab/OdoriFy",
    what: "An open-source web server with deep-learning models that predict odorants and their receptors, with explainable AI.",
    tag: "Hosted at IIIT-Delhi",
  },
];

export function GithubCheck() {
  return (
    <div className="my-10 space-y-3">
      <div className="flex items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-400/[0.06] p-4 text-sm text-amber-100">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          <span className="font-medium">Scentronic itself:</span> I couldn&apos;t find a public code repository linked from the
          paper&apos;s release or the university&apos;s news story — only the paper.
        </p>
      </div>
      {REPOS.map((r, i) => (
        <motion.a
          key={r.repo}
          href={r.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
          className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-[#bfa273]/40"
        >
          <Github className="mt-0.5 h-5 w-5 shrink-0 text-white" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="truncate font-mono text-sm text-white">{r.repo}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-200 ring-1 ring-emerald-300/20">
                <Check className="h-3 w-3" /> verified live
              </span>
              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-[#c4bfb5]">{r.tag}</span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-[#a8a399]">{r.what}</p>
          </div>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8a857c] transition group-hover:text-white" />
        </motion.a>
      ))}
      <p className="text-xs text-[#8a857c]">Repositories checked on November 5, 2026.</p>
    </div>
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
