import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";
import {
  BenchmarkChart,
  Bets,
  MoEKitchen,
  OrderReceipt,
  PullQuote,
  RevolutStats,
  RouterFlow,
  SuperAppMap,
  TLDR,
  TutorBill,
  UsageVsMoney,
} from "./widgets";

export const metadata = createBlogMetadata("food-app-frontier-ai");

const H2 = ({ children, id }) => (
  <h2 id={id} className="scroll-mt-24 pt-10 text-3xl font-light tracking-tight text-white sm:text-4xl">
    {children}
  </h2>
);

const SOURCES = [
  ["Meituan releases the open weights of its LongCat-2.5 LLM with vision under a permissive MIT License — VentureBeat (Nov 9, 2026)", "https://venturebeat.com/technology/meituan-releases-the-open-weights-of-its-longcat-2-5-llm-with-vision-under-a-permissive-mit-license"],
  ["LongCat-2.5 model card — Hugging Face", "https://huggingface.co/meituan-longcat/LongCat-2.5"],
  ["Meituan Releases LongCat 2.5 on Chinese Chips; Benchmark Claims Await Independent Tests — Tech Times (Nov 3, 2026)", "https://www.techtimes.com/articles/329925/20261103/meituan-releases-longcat-25-chinese-chips-benchmark-claims-await-independent-tests.htm"],
  ["Meituan CEO Wang Xing: AI “super entrance” — EEO (Mar 26, 2026)", "https://www.eeo.news/2026/0326/819129.shtml"],
  ["New AI Division Setup and Tabbit's Swift Rise: Can Meituan Grab a Spot at the AI Table? — 36Kr (Jun 25, 2026)", "https://eu.36kr.com/en/p/3868284948108296"],
  ["Meituan's 2025 results: LongCat and the Xiaotuan assistant — AIBase (Mar 27, 2026)", "https://news.aibase.com/news/26606"],
  ["Meituan's open-source LongCat-Flash-Thinking — VentureBeat (Sep 2025)", "https://venturebeat.com/technology/chinese-food-delivery-firm-meituans-open-source-ai-model-longcat-flash"],
  ["Meituan — Wikipedia", "https://en.wikipedia.org/wiki/Meituan"],
  ["Xiaomi's MiMo-V2.6-Pro debuts as the top open-weights model — VentureBeat (Sep 21, 2026)", "https://venturebeat.com/technology/better-than-deepseek-xiaomis-mimo-v2-6-pro-debuts-as-the-top-open-weights-model-in-the-world-alongside-cheaper-v2-6-flash"],
  ["A phone maker now has the world's top open-weight AI model — The Next Web (Sep 22, 2026)", "https://thenextweb.com/news/xiaomi-mimo-v2-6-open-weight-model-anthropic-distillation"],
  ["Tencent launches Hy4 with vision and computer use capabilities — TechNode (Nov 4, 2026)", "https://technode.com/2026/11/04/tencent-launches-hy4-with-vision-and-computer-use-capabilities/"],
  ["Doubao in China 2026, citing QuestMobile — Sanbi (Oct 15, 2026)", "https://sanbi.ai/blog/doubao-china-scale-sources-citations-agentic-commerce"],
  ["Robbyant (Ant Group) on Hugging Face", "https://huggingface.co/robbyant"],
  ["Robbyant open-sources LingBot-VLA 2.0 with 50,000 hours of real robot data (Jul 9, 2026)", "https://www.kucoin.com/news/flash/ant-group-s-robbyant-opens-source-lingbot-vla-2-0-with-50-000-hours-real-robot-data"],
  ["Simon Willison on AI in China (Kimi K3.1 Pro pricing)", "https://simonwillison.net/tags/ai-in-china/"],
  ["What's next for Chinese open-source AI — MIT Technology Review (Feb 12, 2026)", "https://www.technologyreview.com/2026/02/12/1132811/whats-next-for-chinese-open-source-ai/"],
  ["Chinese open-weight AI handles most developer tokens; closed models capture 96% of revenue — Tech Times (Sep 17, 2026)", "https://www.techtimes.com/articles/327646/20260917/chinese-open-weight-ai-handles-most-developer-tokens-closed-models-capture-96-revenue.htm"],
  ["Revolut moves 2,000 engineers onto self-hosted AI — Dealroom (Nov 3, 2026)", "https://dealroom.co/news/169124-revolut-moves-2-000-engineers-onto-self-hosted-ai-cutting-coding-costs-9/"],
  ["Revolut cuts AI coding costs 90% with open-weight GLM — Trending Topics (Nov 3, 2026)", "https://www.trendingtopics.eu/revolut-glm-open-weight-coding-costs/"],
  ["Revolut sidelines Claude Code for a self-hosted Chinese model — MACCUS (Nov 3, 2026)", "https://maccus.fr/en/revolut-glm-self-hosted/"],
];

const FINE_PRINT = [
  ["The scores are self-reported.", "No independent lab had published its own tests of LongCat-2.5 when I wrote this, and Meituan marks some of its comparison numbers as “indicative only”."],
  ["It still trails on the hardest work.", "On Terminal-Bench 4.0 it scores 38.5 to Claude Opus 5's 53.9. And Meituan compared itself with Opus 5, not the newer Opus 5.5 or Fable 5.2."],
  ["The price is a promo.", "The $0.30 / $1.20 API price is a limited-time offer. Prices in this market change almost monthly."],
  ["“Free” is 3.5 TB.", "You can download it for free. You cannot run it on a laptop. You'll need a rack of server GPUs or a provider that hosts it for you."],
  ["Where your data goes matters.", "Running the open weights on your own servers keeps your data with you. Sending it to a China-hosted API is a different decision, and some companies and governments restrict it."],
  ["Open weights isn't open source.", "You get the trained model, not the training data or the full recipe."],
  ["Who learned from whom?", "In September, Anthropic accused seven Chinese labs, Xiaomi among them, of routing requests through Claude to harvest its answers for training. Xiaomi hadn't responded at the time. It's a live question for the whole industry."],
];

export default function FoodAppFrontierAIBlog() {
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
              <span className="text-[#8a857c]">November 10, 2026</span>
              <span className="text-[#8a857c]">·</span>
              <span className="text-[#8a857c]">10 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-light leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              China&apos;s Zomato Just Built a Frontier AI.{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>
                Then It Gave It Away for Free.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#a8a399]">
              Meituan, the app that delivers dinner to hundreds of millions of people in China, just open-sourced a 1.6-trillion-parameter
              model. I read the model card, priced it against Claude and GPT, checked the fine print — and came away thinking the model is about
              to become the cheapest part of AI.
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
              src="/blog/food-app-frontier-ai.png"
              alt="Dark title card reading “China's Zomato just built a frontier AI. Then it gave it away for free.”, with a gold delivery route drawn across a dotted city grid"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <TLDR />

          <div className="space-y-6 text-[17px] leading-8 text-[#c9c5bc] sm:text-lg">
            <p>
              Imagine opening Zomato tomorrow and seeing a new banner. Not a discount. Not a new restaurant. A full AI model — bigger than almost
              any model on the planet — and a button to download it for free.
            </p>
            <p>That is roughly what just happened in China.</p>
            <p>
              On 9 November, <strong className="text-white">Meituan</strong> posted the weights of <strong className="text-white">LongCat-2.5</strong>{" "}
              on Hugging Face under the MIT license, one of the most permissive licenses there is. Meituan is not an AI lab. It is the app China
              uses to order food, groceries, medicine and hotel rooms. More than 770 million people bought something through it in a single year.
            </p>
            <p>
              As an AI engineer, I couldn&apos;t scroll past this one. So I did my usual thing: read the model card, checked the numbers, and
              priced it.
            </p>

            <H2 id="what-dropped">What actually dropped</H2>
            <OrderReceipt />
            <p>
              A quick translation of that receipt. <em>Parameters</em> are the numbers a model learns during training. 1.6 trillion puts it in
              the heaviest weight class of open models. But it doesn&apos;t use all of them at once: for each token it reads, only about 48
              billion wake up. That trick is the reason any of this is affordable, and I&apos;ll show you how it works below.
            </p>
            <p>
              It also understands images and video natively. And Meituan says it trained the model on Chinese-made accelerators, not Nvidia
              GPUs — the second time in a row. LongCat-2.0, released in June, was trained on around 50,000 of them.
            </p>
            <p>
              This didn&apos;t come out of nowhere either. Meituan released its first big open model, the 560-billion-parameter LongCat-Flash,
              just over a year ago. It has been shipping steadily since.
            </p>

            <H2 id="why-food-app">Wait. Why is a food app building AI?</H2>
            <p>This was my first question too. The answer is a lot more interesting than “everyone is doing AI”.</p>
            <p>
              On Meituan&apos;s results call in March, CEO Wang Xing said its AI strategy is to attack, not defend, and that Meituan does not want
              to become a “token factory” — a company that just sells raw AI by the word. He also said Meituan&apos;s AI spending is probably the
              largest of any Chinese company apart from the cloud giants. One of its senior executives has put it at more than RMB 10 billion a
              year.
            </p>
            <p>
              Then there&apos;s my favourite argument I read all week. As 36Kr reported it, Wang&apos;s point is that even Einstein wouldn&apos;t
              know whether there are any seats free at a restaurant tonight. It is not a matter of intelligence. It is a matter of information.
            </p>
            <PullQuote>An LLM knows everything about Einstein. Meituan knows if the table is free.</PullQuote>
            <p>
              That is the whole strategy in one line. Any model can write a poem. Only Meituan knows which kitchen is open, which rider is two
              streets away and whether the paneer is sold out — live, across more than 2,800 cities and counties.
            </p>
            <p>
              And they already use it. Meituan&apos;s in-app assistant, Xiaotuan, can find restaurants in an area that meet your parking and
              taste requirements. Inside the company, more than 95% of coding work in one core business line runs through an in-house AI tool
              called CatPaw. Meituan even has a name for its next kind of customer: not consumers (“To C”) or businesses (“To B”), but AI agents —{" "}
              <strong className="text-white">“To A”</strong>. In May it opened up errand ordering to AI assistants.
            </p>
            <p>Read that again. A food app is getting ready for the day your AI orders dinner for you.</p>

            <H2 id="not-just-meituan">It&apos;s not just Meituan</H2>
            <p>
              Here&apos;s what made me sit up. In China, frontier models aren&apos;t only coming from AI labs. They&apos;re coming from the apps
              people already have on their phones.
            </p>
            <SuperAppMap />
            <p>
              Now imagine Zomato, PhonePe, Flipkart, Redmi and WhatsApp all dropping their own AI models within a few months, most of them free
              to download. That&apos;s China in 2026. And that&apos;s before you count the pure AI labs like DeepSeek, Moonshot (Kimi) and Z.ai
              (GLM).
            </p>

            <H2 id="is-it-good">Okay, but is it actually good?</H2>
            <p>Short answer: neck and neck with the best on a lot of tests, clearly behind on the hardest ones.</p>
            <BenchmarkChart />
            <p>
              Here&apos;s how I read this as an engineer. On web research and building things from screenshots, it&apos;s basically level with
              Claude Opus 5. On Terminal-Bench 4.0 — long, messy, real-world terminal work — it is more than 15 points behind. That is exactly the
              gap you feel when you let an agent loose on a real codebase.
            </p>
            <p>So: not the best model in the world. But a very good one. And now look at what it costs.</p>

            <H2 id="price">The plot twist is the price</H2>
            <p>The benchmarks are close. The prices are not even in the same universe.</p>
            <p>
              I build AI tutors at Eklavya, so I don&apos;t think in cost per token. I think in cost per student. Drag the slider:
            </p>
            <TutorBill />
            <p>
              At 10,000 students, LongCat-2.5 costs about <strong className="text-white">$480 a month</strong> at its current promo price.
              Claude Opus 5.5 would be about <strong className="text-white">$7,200</strong>. That&apos;s under 5 cents per student per month versus
              72 cents. In India, that gap is the difference between a product a school can afford and one it can&apos;t.
            </p>
            <p>And this isn&apos;t just a spreadsheet idea. A real, regulated company has already done it.</p>
            <RevolutStats />
            <p>
              Revolut moved the default coding assistant for about 2,000 engineers from Claude Code and Codex to GLM-5.3, an open model from the
              Chinese lab Z.ai, running on its own GPUs. Claude and Codex are still there — but as “the exception”, for the hardest problems.
            </p>
            <p>
              Two quotes from the talk stuck with me. “The bottleneck for engineering is not necessarily coding.” And, as Trending Topics reported
              it, “Long context is a scam.” (Revolut caps context at 256K tokens.) Spicy, but I get it. Most real tasks don&apos;t need a million
              tokens. They need the right ones.
            </p>
            <p>
              Notice the hidden lesson too. Out of the box, their setup was slow. It took 4-bit quantization and smarter GPU splitting to cut the
              wait for the first token from 14 seconds to 1.7. Open weights are free. Making them fast is engineering.
            </p>

            <H2 id="how-it-runs">How does 1.6 trillion even run?</H2>
            <p>
              The trick is called <strong className="text-white">Mixture-of-Experts</strong>. My favourite way to explain it: a cloud kitchen.
            </p>
            <MoEKitchen />
            <p>
              LongCat-2.5 does this with about 3% of itself for every token. Meituan also squeezes the experts&apos; numbers down to 4 bits each
              so they fit on chips with less memory. Put those two ideas together and a “huge” model becomes something you can actually serve.
            </p>
            <p>
              But let&apos;s be real about “free”. The download is 208 files, about 3.5 TB — roughly seven 512 GB laptops just to store it. You
              won&apos;t run this on your MacBook. The point isn&apos;t that you run it at home. It&apos;s that you <em>can</em> run it anywhere,
              keep your data, and nobody can change the price on you overnight.
            </p>

            <H2 id="usage-money">The weird gap in the market</H2>
            <UsageVsMoney />
            <p>
              This is the pattern I find most interesting right now. Chinese open models are winning on usage: Qwen is the most-downloaded open
              model family on Hugging Face, and Chinese models went from under 2% of tokens on OpenRouter in late 2024 to nearly 30% in some weeks
              of early 2026. But most of the money still goes to closed models.
            </p>
            <p>
              China is winning the developers. The US is still winning the bill. Whether that flips is, to me, the biggest open question in AI
              for the next two years.
            </p>

            <H2 id="fine-print">The fine print (I checked)</H2>
            <p>Here is what the headline doesn&apos;t tell you:</p>
            <ul className="list-none space-y-3 pl-0">
              {FINE_PRINT.map(([t, d]) => (
                <li key={t} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <strong className="text-white">{t}</strong> <span className="text-[#a8a399]">{d}</span>
                </li>
              ))}
            </ul>

            <H2 id="engineers">What this means for engineers like us</H2>
            <p>Here&apos;s how I&apos;m thinking about it, as someone who ships AI products every week.</p>
            <p>
              <strong className="text-white">1. The model is becoming an ingredient.</strong> UPI turned payments into boring, cheap
              infrastructure, and then everyone built on top of it. Intelligence is going the same way. When a food app can give away a frontier
              model, the model stops being the product. What you plug it into becomes the product.
            </p>
            <p>
              <strong className="text-white">2. Design for routing from day one.</strong> Don&apos;t marry one model. Send most traffic to a cheap
              open model, and save the expensive frontier model for the moments that truly need it.
            </p>
            <RouterFlow />
            <p>
              <strong className="text-white">3. Learn the unglamorous skills.</strong> Serving, quantization, caching and evals. Revolut&apos;s jump
              from 14 seconds to 1.7 wasn&apos;t a new model. It was engineering. These are the skills that will separate “I use AI” from “I
              build with AI”.
            </p>
            <p>
              <strong className="text-white">4. India&apos;s apps have the same superpower.</strong> Our food, grocery, payments and shopping apps
              sit on exactly the kind of live, real-world data Meituan is betting on. I would love to see one of them open-source a model. The
              talent is here. The data is here.
            </p>
            <p>
              <strong className="text-white">5. If you&apos;re a student, start small.</strong> Don&apos;t download 3.5 TB. Grab a small open model
              that runs on one GPU — Qwen 3.8 27B is Apache 2.0, and Xiaomi released a 9B distilled model with MiMo-V2.6 — and build something
              with data you actually have: your college timetable, your notes, your city&apos;s bus routes. That&apos;s the Meituan lesson at
              student scale.
            </p>

            <H2 id="bets">My bets for the next three years</H2>
            <p>Screenshot this. Let&apos;s check back in 2029.</p>
            <Bets />

            <H2 id="takeaway">My takeaway</H2>
            <p>
              A food delivery company built a frontier AI model and gave it away. Two years ago, that sentence would have sounded like a meme.
            </p>
            <p>
              But it tells you where this is all going. The smartest model won&apos;t automatically win. The winners will be the ones who know
              whether the table is free — the ones with the data, the riders, the kitchens and the trust.
            </p>
            <PullQuote>The model is the menu. The moat is the delivery.</PullQuote>
            <p>Read past the headline. Check the license. And next time you order momos, remember the app might be smarter than you think.</p>
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
              Benchmark scores are Meituan&apos;s own and have not been independently checked. Revolut&apos;s figures are self-reported. Prices are
              list prices at the time of writing and change often. The tutor-cost calculator and the cloud-kitchen demo use my own assumptions to
              explain the idea; they are not measured data.
            </p>
          </section>

          {/* Keep reading */}
          <section className="mt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8a857c]">Keep reading</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["AI Can Now Smell Your Coffee. It Still Can't Miss Home.", "/blog/ai-can-now-smell"],
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
