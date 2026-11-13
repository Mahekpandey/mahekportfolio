import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";
import {
  Bets,
  ChinaShare,
  FollowTheGPU,
  IndiaStats,
  PingProof,
  PullQuote,
  SPOFAudit,
  ThreeDoors,
  TLDR,
  WeekTimeline,
} from "./widgets";

export const metadata = createBlogMetadata("ai-single-point-of-failure");

const H2 = ({ children, id }) => (
  <h2 id={id} className="scroll-mt-24 pt-10 text-3xl font-light tracking-tight text-white sm:text-4xl">
    {children}
  </h2>
);

const SOURCES = [
  ["Huang Resigns From Nvidia. Here Are the Stakes for U.S. Foreign Policy. — Council on Foreign Relations (Nov 12, 2026)", "https://www.cfr.org/articles/nvidia-chinese-espionage-and-the-ai-race-four-foreign-policy-issues-to-watch"],
  ["Why did Nvidia CEO Jensen Huang resign, and who is Colette Kress? — Al Jazeera (Nov 12, 2026)", "https://www.aljazeera.com/news/2026/11/12/why-did-nvidia-ceo-jensen-huang-resign-and-who-is-colette-kress"],
  ["Trump heads to China amid Nvidia scandal: Will he get tougher on Beijing? — Al Jazeera (Nov 12, 2026)", "https://www.aljazeera.com/news/2026/11/12/trump-heads-to-china-amid-nvidia-scandal-will-he-get-tougher-on-beijing"],
  ["China warns against new U.S. export controls on chips in wake of Nvidia's Huang scandal — CBS News (Nov 13, 2026)", "https://www.cbsnews.com/news/china-us-export-controls-chips-nvidia-huang-scandal/"],
  ["China warns US over chip curbs as suspected spy's firm got banned chips — Euronews (Nov 13, 2026)", "https://www.euronews.com/2026/11/13/china-warns-us-over-chip-curbs-as-suspected-spys-firm-got-banned-chips"],
  ["Calls for Nvidia probes, new chip export limits intensify — Roll Call (Nov 12, 2026)", "https://rollcall.com/2026/11/12/calls-for-nvidia-probes-new-chip-export-limits-intensify/"],
  ["Beyond the spy scandal: What the Nvidia-Megaspeed case reveals about export controls — Atlantic Council (Nov 12, 2026)", "https://www.atlanticcouncil.org/dispatches/beyond-the-spy-scandal-what-the-nvidia-megaspeed-case-reveals-about-export-controls/"],
  ["Nvidia privately confirmed it could track chips to fight smuggling — MIT Technology Review (Nov 12, 2026)", "https://www.technologyreview.com/2026/11/12/1148483/nvidia-chip-tracking/"],
  ["Amid Nvidia scandal, lawmakers push for tighter controls on AI chip exports — WBUR Here & Now (Nov 11, 2026)", "https://www.wbur.org/hereandnow/2026/11/11/ai-chip-exports"],
  ["US Commerce Department AI remote access rule, citing The Information — Lapaas Voice (Nov 13, 2026)", "https://lapaasvoice.com/us-commerce-department-finalizes-ai-remote-access-rule-to-restrict-chinas-access-to-advanced-chips"],
  ["China's AI chip market reshuffles as Nvidia shipments halve, citing IDC — BigGo Finance (Oct 15, 2026)", "https://finance.biggo.com/news/56a53bec-1f5a-4478-9a54-b222c7001677"],
  ["NVIDIA AI accelerator market share 2024–2026 — Silicon Analysts", "https://siliconanalysts.com/analysis/nvidia-ai-accelerator-market-share-2024-2026"],
  ["How dependent is India's AI Mission on Nvidia chips? — Outlook India (Nov 11, 2026)", "https://www.outlookindia.com/international/india-ai-mission-nvidia-alternatives-chinese-spy-jensen-huang"],
  ["MeitY targets an indigenous GPU in 24 months — Elets CIO (Nov 6, 2026)", "https://cio.eletsonline.com/artificial-intelligence/meity-indigenous-gpu-chip/76737/"],
];

export default function SinglePointOfFailureBlog() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#121212]">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 sm:px-6 lg:px-8">
        <Link href="/#blogs" className="mb-10 inline-flex items-center text-sm text-[#a8a399] transition-colors hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>

        <article>
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[#d1c0a3] ring-1 ring-white/10">AI</span>
              <span className="text-[#8a857c]">November 13, 2026</span>
              <span className="text-[#8a857c]">·</span>
              <span className="text-[#8a857c]">11 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-light leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              The AI World Has a Single Point of Failure.{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>
                This Week, It Wobbled.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#a8a399]">
              Nvidia&apos;s CEO resigned, a spy story hit the chip supply chain, and Trump and Xi are about to meet. I&apos;m not here for the
              gossip. As an engineer, I read it as a system-design problem — with lessons for anyone building with AI, especially in India.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full btn-gold text-sm font-bold text-black">MP</span>
              <div className="text-sm">
                <p className="font-medium text-white">Mahek Pandey</p>
                <p className="text-[#8a857c]">AI Engineer, Eklavya.io</p>
              </div>
            </div>
          </header>

          <div className="mb-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#171717]">
            <img
              src="/blog/ai-single-point-of-failure.png"
              alt="Dark title card reading “The AI world has a single point of failure. This week, it wobbled.”, with many small nodes all wired to one glowing gold hub"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <TLDR />

          <div className="space-y-6 text-[17px] leading-8 text-[#c9c5bc] sm:text-lg">
            <p>
              Every engineer learns this phrase early: <strong className="text-white">single point of failure</strong>. One server, one
              database, one person who knows the password. If it goes down, everything goes down with it.
            </p>
            <p>This week, the whole AI industry got a reminder that it has one.</p>
            <p>
              On 12 November, Jensen Huang — who co-founded Nvidia in 1993 and ran it for 33 years — resigned as CEO, effective immediately.
              Nvidia makes the chips that train and run almost every AI model you have ever used. Its value dipped below $4 trillion the same
              day.
            </p>
            <p>
              Most coverage is about the personal side. I&apos;m going to skip that as much as I can. What interests me is what the week
              exposed about how fragile the AI supply chain is — and what that means for people like us who build on top of it.
            </p>

            <H2 id="facts">What happened (just the facts)</H2>
            <WeekTimeline />
            <p>
              Two things are worth keeping apart. Huang&apos;s affair and resignation are confirmed. The spying allegation is not: it comes
              from reports about a US intelligence memo, Beijing denies it, and nobody has been charged. I&apos;ve labelled everything above
              so you can see which is which.
            </p>
            <p>
              But even if you ignore the allegation completely, a bigger question is left on the table. How did banned chips reportedly end
              up in Shanghai? That is an engineering question as much as a political one.
            </p>

            <H2 id="spof">Why one resignation shakes the whole AI world</H2>
            <p>
              Nvidia isn&apos;t just a big company. In AI, it is the closest thing we have to a single point of failure. Analysts estimate it
              earns roughly three-quarters or more of all AI chip revenue worldwide. And its software, CUDA, is what most AI code is written
              for. When I fine-tune a model, almost every library quietly assumes there&apos;s an Nvidia GPU underneath.
            </p>
            <p>Now zoom out. Every top AI chip passes through a chain where nearly every link is a monopoly, or close to one:</p>
            <FollowTheGPU />
            <p>
              Look at that with an engineer&apos;s eyes. One company designs most of the chips. One company makes the machines that print
              them. One island prints most of them. If any single link breaks — a war, an earthquake, a sanction, a scandal at the top — the
              whole AI industry feels it.
            </p>
            <p>
              The Council on Foreign Relations used a finance phrase for part of this: <em>key man risk</em>. Engineers have a funnier name —
              the <strong className="text-white">bus factor</strong>. How many people would have to get hit by a bus before your project
              stalls? Nvidia&apos;s day-to-day work will be fine; Colette Kress has been its CFO since 2013. But reporting suggests the White
              House adopted many of Huang&apos;s own positions on selling chips to China. That kind of influence doesn&apos;t transfer to an
              interim CEO overnight.
            </p>

            <H2 id="leaky-pipe">The leaky pipe: how banned chips still reach China</H2>
            <p>
              Here&apos;s the part I find most interesting. US export controls are basically an access-control system. And like any
              access-control system, it only works if every door is locked.
            </p>
            <ThreeDoors />
            <p>
              The Megaspeed case sits on door two: chips sold legally in Southeast Asia that may have been passed on. Door three is wider
              still. You don&apos;t need to move a chip at all if you can rent it over the internet — and right now, that&apos;s legal.
            </p>
            <p>
              If you&apos;ve ever built auth for an app, this will feel familiar. You can lock down your database, but if a public API returns
              the same data, the lock doesn&apos;t matter.
            </p>
            <PullQuote>Export controls are an access-control system. Right now, the API is public.</PullQuote>

            <H2 id="physics">The fix is pure engineering: make the chip prove where it is</H2>
            <p>
              The most interesting proposal on the table is the <strong className="text-white">Chip Security Act</strong>. It would require
              top AI chips to have a way to verify their location before they are exported. One method lawmakers describe is ping-based: the
              GPU checks in when it comes online. Time that check-in carefully, and it becomes very hard to fake where the chip is.
            </p>
            <p>
              The chip industry&apos;s main trade group called these tracking rules “new, untested, and potentially infeasible” in March. But
              according to MIT Technology Review, Representative Bill Foster says Nvidia&apos;s people privately told him: “yeah, of course we
              can do this.”
            </p>
            <p>It works because of the one thing nobody can bribe: the speed of light.</p>
            <PingProof />
            <p>
              I love this idea because it&apos;s so simple. No signal can travel faster than light. So a chip can always pretend to be further
              away, but never closer. Put a few trusted servers around the world, and a chip in Shanghai simply cannot pass as one in
              Singapore.
            </p>
            <p>
              It isn&apos;t perfect. It tells you where a chip is, not who is using it, so renting over the internet still slips past. Foster
              says he wants stricter rules next year that would require a licence before a GPU can even connect. But it&apos;s the first idea
              in this debate that is checked with physics instead of paperwork.
            </p>

            <H2 id="china">Meanwhile, China is building its own road</H2>
            <ChinaShare />
            <p>
              While Washington argues about locks, China is building a different house. In the first half of 2026, Nvidia&apos;s share of AI
              chips shipped in China fell to about a third, and Huawei alone took 28%. Beijing calls the spy claims a “pretext for imposing a
              technological blockade” — and it is acting like a country that expects the blockade to stay.
            </p>
            <p>
              Earlier this week I wrote about{" "}
              <Link href="/blog/food-app-frontier-ai" className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
                Meituan training a 1.6-trillion-parameter model on Chinese-made chips
              </Link>
              . This week explains why that matters. Every scandal and every new rule gives Chinese labs one more reason to stop depending on
              Nvidia at all.
            </p>

            <H2 id="india">And India?</H2>
            <IndiaStats />
            <p>
              India is in an interesting spot. We&apos;re on the friendly side of US policy, and Outlook India notes there&apos;s no evidence
              so far that the scandal has affected our chip supply. But look at where our compute comes from. Yotta&apos;s Shakti Cloud, one of the
              biggest pieces of our national AI push, runs on more than 20,000 Nvidia GPUs. Our AI mission is built, in large part, on chips
              designed in California and made in Taiwan.
            </p>
            <p>
              That&apos;s why MeitY Secretary S. Krishnan&apos;s target of an Indian GPU in about 24 months matters, even if it slips. He
              pointed out that only a handful of companies in the world make AI accelerators, which keeps prices high for everyone else.
            </p>
            <p>
              My honest take: the first Indian AI chip won&apos;t beat a Blackwell. That&apos;s fine — China&apos;s first domestic chips
              didn&apos;t either. The harder part isn&apos;t the silicon. It&apos;s the software. CUDA&apos;s real moat is nearly 20 years of
              libraries, tools and habits. India is a software country. If we&apos;re smart, we&apos;ll put as much energy into compilers,
              runtimes and open tooling as into the chip itself.
            </p>

            <H2 id="engineers">What this means for engineers like us</H2>
            <p>You don&apos;t need to be a policymaker to act on this. Here&apos;s what I&apos;m taking into my own work at Eklavya.</p>
            <p>
              <strong className="text-white">1. Write portable code.</strong> Don&apos;t hard-code CUDA when you don&apos;t have to.
              PyTorch, and serving engines like vLLM and SGLang, increasingly run on AMD GPUs and other accelerators. Portability is cheap to
              keep and expensive to add later.
            </p>
            <p>
              <strong className="text-white">2. Treat your model provider as a dependency, not a religion.</strong> Route between providers,
              keep a fallback, and keep evals so you know when a swap is safe.
            </p>
            <p>
              <strong className="text-white">3. Know where your compute lives.</strong> Which country, which provider, which rules. Soon,
              “where is this GPU?” might be a question your code has to answer, not just your lawyer.
            </p>
            <p>
              <strong className="text-white">4. Raise your bus factor.</strong> If one person on your team holds all the infra knowledge,
              write it down this week. The biggest chip company in the world just learned this the hard way.
            </p>
            <SPOFAudit />

            <H2 id="bets">My bets for the next two years</H2>
            <p>Screenshot this. Let&apos;s check back in 2028.</p>
            <Bets />

            <H2 id="takeaway">My takeaway</H2>
            <p>
              In system design, we don&apos;t ask “will this fail?” We ask “when this fails, what else goes down with it?”
            </p>
            <p>
              This week, the AI world got a live answer. One resignation shook the most important company in AI, pulled chips into a
              presidential summit, and made every country — including ours — check how much of its AI future runs through a single company.
            </p>
            <PullQuote>Great systems aren&apos;t the ones that never fail. They&apos;re the ones where no single failure takes everything down.</PullQuote>
            <p>Read past the gossip. Look at the system. And maybe go check your own stack for single points of failure today.</p>
          </div>

          {/* Sources */}
          <section className="mt-16 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
            <h2 className="text-lg font-medium text-white">Sources</h2>
            <ol className="mt-4 space-y-2.5 text-sm">
              {SOURCES.map(([label, href], i) => (
                <li key={href} className="flex gap-3">
                  <span className="font-mono text-[#8a857c]">{i + 1}.</span>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#c4bfb5] underline decoration-white/20 underline-offset-2 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs leading-relaxed text-[#8a857c]">
              This is a fast-moving story. The espionage allegation is unconfirmed, Beijing denies it, and no one named in these reports has
              been charged. Market-share figures are analyst estimates or secondhand IDC data. The ping demo and the stack audit are my own
              illustrations, not measured data. Facts are as of 13 November 2026.
            </p>
          </section>

          {/* Keep reading */}
          <section className="mt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8a857c]">Keep reading</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["China's Zomato Just Built a Frontier AI. Then It Gave It Away for Free.", "/blog/food-app-frontier-ai"],
                ["The AI Race Is Getting Wild", "/blog/ai-race"],
              ].map(([t, href]) => (
                <Link key={href} href={href} className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-[#bfa273]/40">
                  <span className="font-medium text-white">{t}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8a857c] transition group-hover:text-white" />
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
