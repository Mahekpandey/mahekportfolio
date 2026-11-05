import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";
import { AdLab, CaseFiles, MarketingLoop, PullQuote, TimeChart, UsesChart } from "./widgets";

export const metadata = createBlogMetadata("marketing-with-claude");

const H2 = ({ children, id }) => (
  <h2 id={id} className="scroll-mt-24 pt-10 text-3xl font-light tracking-tight text-[#f6f2ea] sm:text-4xl">
    {children}
  </h2>
);

const SOURCES = [
  ["How Anthropic's Growth Marketing team cut ad creation time from 30 minutes to 30 seconds with Claude Code — Claude blog (Jan 26, 2026)", "https://claude.com/blog/how-anthropic-uses-claude-marketing"],
  ["How Anthropic's marketing operations team uses Claude Cowork to automate reporting and campaign builds — Claude blog (Jul 8, 2026)", "https://claude.com/blog/how-anthropics-marketing-operations-team-uses-claude-cowork-to-automate-reporting-and-campaign-builds"],
  ["Supermetrics lets Claude build ad campaigns on 6 platforms, paused by default — PPC Land (Nov 3, 2026)", "https://ppc.land/supermetrics-lets-claude-build-ad-campaigns-on-6-platforms-paused-by-default/"],
  ["Marketers embrace AI for social and retail media, but show skepticism in AI ad buying — Digiday+ Research (Jun 10, 2026)", "https://digiday.com/media-buying/marketers-ai-for-social-retail-media-skepticism-in-ai-ad-buying/"],
  ["Anthropic Economic Index report: Cadences — Anthropic (Jun 26, 2026)", "https://www.anthropic.com/research/economic-index-june-2026-report"],
];

const LESSONS = [
  [
    "The templates were the real product.",
    "Our 50+ prompt templates came from what our designers already knew about good covers. The AI was fast because their taste had been written down.",
  ],
  [
    "Intent beats volume.",
    "When I worked on SEO for publish.storymirror.com, we moved from page 5 to the top 3 for searches like “publish story India” — not by publishing more, but by understanding what people were actually looking for.",
  ],
  [
    "Check the numbers before anything else.",
    "A wrong statistic in an ad is worse than no ad. It's no surprise that Anthropic's marketing ops team gives one piece of advice first: build a proofreading skill.",
  ],
  ["Keep a human “go” button.", "Drafts can be automatic. Publishing and spending should not be."],
];

export default function MarketingWithClaudeBlog() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#121212]">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 sm:px-6 lg:px-8">
        <Link href="/#writing" className="mb-10 inline-flex items-center text-sm font-light text-[#a8a399] transition-colors hover:text-[#f6f2ea]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to writing
        </Link>

        <article>
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest">
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[#d1c0a3] ring-1 ring-white/10">AI · Marketing</span>
              <span className="text-[#8a857c]">November 5, 2026</span>
              <span className="text-[#8a857c]">·</span>
              <span className="text-[#8a857c]">7 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-light leading-[1.08] tracking-[-0.04em] text-[#f6f2ea] sm:text-5xl md:text-6xl">
              Claude Can Write 100 Ads in a Minute.{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>
                Someone Still Has to Pick One.
              </span>
            </h1>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#a8a399]">
              How Claude is changing marketing — from ad copy and weekly reports to whole campaigns — what I learned building AI
              marketing tools at StoryMirror, and why choosing is becoming the real job.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="btn-gold flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium">MP</span>
              <div className="text-sm">
                <p className="font-normal text-[#f6f2ea]">Mahek Pandey</p>
                <p className="font-light text-[#8a857c]">AI Engineer, Eklavya.io</p>
              </div>
            </div>
          </header>

          <div className="mb-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#171717]">
            <img
              src="/blog/marketing-with-claude.png"
              alt="Claude can write 100 ads in a minute. Someone still has to pick one."
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-[17px] font-light leading-8 text-[#c9c5bc] sm:text-lg">
            <p>
              At StoryMirror, I built an AI marketing creative suite — an automated generator for book covers and marketing assets,
              built on Gemini Vision and more than fifty prompt templates. It cut our designers&apos; manual work by about 70%.
            </p>
            <p>
              So when I read how marketing teams are using Claude today, the idea didn&apos;t surprise me. What surprised me was how far
              it has gone in a single year.
            </p>

            <H2 id="changing">What&apos;s actually changing</H2>
            <p>Three stories from this year, each about a different part of the job:</p>
            <CaseFiles />
            <p>
              Making ads, reporting numbers, launching campaigns. A year ago each of these needed a specialist and a lot of clicking
              through tools. Now one person can describe what they want — and the first marketer in that list had never written code
              before he built his tools.
            </p>
            <p>
              Anthropic&apos;s write-up lists more: customer case studies drafted in 30 minutes instead of 2.5 hours, product marketing
              saving five to ten hours per launch, and partner marketing spending 40% less time on trade-show prep.
            </p>
            <TimeChart />

            <H2 id="bottleneck">The bottleneck moves</H2>
            <p>
              Here is the pattern I see in all of these stories. The work of <em>making</em> got dramatically faster. The work of{" "}
              <em>deciding</em> didn&apos;t.
            </p>
            <p>
              Look closely at each one. The ad file is ready to upload after a manual review. The weekly report&apos;s proofreading skill
              flags mismatched numbers instead of guessing. The new campaigns stay paused until a person approves them.
            </p>
            <p>
              Even the people building these tools design a human checkpoint into them. That isn&apos;t a weakness of the AI. It is the
              design.
            </p>
            <MarketingLoop />

            <H2 id="line">Marketers already know where to draw the line</H2>
            <p>
              A Digiday survey earlier this year captured this well. Marketers are comfortable letting AI analyse results and write.
              Far fewer let it spend the budget.
            </p>
            <UsesChart />
            <p>
              That instinct is right. A weak headline costs you a little. Spending a budget on the wrong audience costs you a lot.
              Trust in AI grows the way trust in a new colleague does — one approved decision at a time.
            </p>
            <p>
              Anthropic&apos;s own usage data points the same way: in its June Economic Index report, 80% of conversations that create
              marketing content were work-related. This is already part of the job, not an experiment on the side.
            </p>

            <H2 id="editor">Try being the editor</H2>
            <p>Here is what the job feels like now, in miniature:</p>
            <AdLab />

            <H2 id="storymirror">What building it taught me</H2>
            <ol className="list-none space-y-4 pl-0">
              {LESSONS.map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-xs text-[#d1c0a3]">{i + 1}</span>
                  <span>
                    <span className="text-[#f6f2ea]">{t}</span> <span className="text-[#a8a399]">{d}</span>
                  </span>
                </li>
              ))}
            </ol>

            <H2 id="human-point">So what&apos;s the human point?</H2>
            <p>
              When everyone can make a hundred ads in a minute, the hundred-and-first ad isn&apos;t an advantage. Everyone will have more
              options. The difference will be who chooses well.
            </p>
            <p>
              Marketing was always about understanding people — what they worry about, what they hope for, what they&apos;ll believe.
              Claude can help you say it faster and in more ways. It can&apos;t care whether what you say is true.
            </p>
            <PullQuote>AI makes options cheap. Judgment is what&apos;s expensive now.</PullQuote>
            <p>
              The real risk isn&apos;t that AI makes marketing worse. It&apos;s that it makes everything sound the same. The brands that
              stand out will be the ones that still sound like someone.
            </p>

            <H2 id="takeaway">My takeaway</H2>
            <p>
              <span className="text-[#f6f2ea]">
                Claude is turning marketing from a job of making things into a job of choosing things. Use it to explore more ideas
                than you ever could — and keep a human hand on the one that ships.
              </span>
            </p>
            <p>Write the brief like it matters. Read every number. And never let the “go” button be automatic.</p>
          </div>

          <section className="mt-16 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-lg font-normal text-[#f6f2ea]">Sources</h2>
            <ol className="mt-4 space-y-2.5 text-sm font-light">
              {SOURCES.map(([label, href], i) => (
                <li key={href} className="flex gap-3">
                  <span className="text-[#8a857c]">{i + 1}.</span>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#c4bfb5] underline decoration-white/20 underline-offset-2 hover:text-[#f6f2ea]">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs font-light leading-relaxed text-[#8a857c]">
              Time savings are as reported by the teams and companies themselves. The ad headlines in “Try being the editor” are
              pre-written examples for illustration.
            </p>
          </section>

          <section className="mt-12">
            <p className="text-xs uppercase tracking-widest text-[#8a857c]">Keep reading</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["AI Was Supposed to Replace Engineers. Instead, It Changed What Engineering Means.", "/blog/ai-changed-engineering"],
                ["As AI Advances, Being Human Matters More Than Ever", "/blog/as-ai-advances-being-human-matters-more-than-ever"],
              ].map(([t, href]) => (
                <Link key={href} href={href} className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-[#bfa273]/40">
                  <span className="font-normal text-[#f6f2ea]">{t}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8a857c] transition group-hover:text-[#f6f2ea]" />
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
