import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";
import { ENoseDemo, GithubCheck, PullQuote, ReceptorDots, ResultsChart, SensesTimeline, SmellPipeline } from "./widgets";

export const metadata = createBlogMetadata("ai-can-now-smell");

const H2 = ({ children, id }) => (
  <h2 id={id} className="scroll-mt-24 pt-10 text-3xl font-light tracking-tight text-white sm:text-4xl">
    {children}
  </h2>
);

const SOURCES = [
  ["Yang et al., “Scentronic: An artificial intelligence–assisted olfactory interface for remote odor sharing and transmission”, Science Advances (Oct 21, 2026)", "https://www.science.org/doi/10.1126/sciadv.aee9266"],
  ["Science Advances news release — EurekAlert (Oct 21, 2026)", "https://www.eurekalert.org/news-releases/1148253"],
  ["New tech passes the smell test — Ohio State News (Nov 4, 2026)", "https://news.osu.edu/new-tech-passes-the-smell-test"],
  ["Scentronic tech lets you smell the internet — New Atlas (Nov 1, 2026)", "https://newatlas.com/vr/scentronic-smells-sent-over-internet/"],
  ["AI is giving computers a sense of smell — MoveTheNeedle (Sep 23, 2026)", "https://www.movetheneedle.news/brands/ai-is-giving-computers-a-sense-of-smell/"],
  ["Number of types of olfactory receptors — BioNumbers 112608", "https://bionumbers.hms.harvard.edu/bionumber.aspx?id=112608"],
  ["OpenPOM on GitHub", "https://github.com/ARY2260/openpom"],
  ["Pyrfume Public Data Archive on GitHub", "https://github.com/pyrfume/pyrfume-data"],
  ["OdoriFy on GitHub", "https://github.com/the-ahuja-lab/OdoriFy"],
];

const FINE_PRINT = [
  ["It knows five smells.", "Coffee, beer, red wine, orange and chocolate cake — and it was trained on one product of each."],
  ["It doesn't make smells.", "Every scent the wearable releases has to be loaded into it in advance. It's closer to a playlist than a printer."],
  ["It can't copy a new smell.", "In New Atlas's words, it “cannot sniff an unfamiliar perfume, discover its complete molecular recipe, and faithfully recreate it.”"],
  ["People differ.", "The researchers note that some people are more sensitive to certain odours than others, and intensity varies a lot between individuals."],
];

export default function AICanSmellBlog() {
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
              <span className="text-[#8a857c]">November 5, 2026</span>
              <span className="text-[#8a857c]">·</span>
              <span className="text-[#8a857c]">6 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-light leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              AI Can Now Smell Your Coffee.{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>
                It Still Can&apos;t Miss Home.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#a8a399]">
              Researchers just sent smells over the internet to a wearable. I read past the headline, checked the fine print and
              the code on GitHub — and ended up thinking about why smell is the most human sense we have.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full btn-gold text-sm font-bold text-black">
                MP
              </span>
              <div className="text-sm">
                <p className="font-medium text-white">Mahek Pandey</p>
                <p className="text-[#8a857c]">AI Engineer, Eklavya.io</p>
              </div>
            </div>
          </header>

          <div className="mb-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#171717]">
            <img
              src="/blog/ai-can-now-smell.png"
              alt="A glowing 3D molecule with scent particles rising from it, and handwritten notes about AI learning to smell"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-[17px] leading-8 text-[#c9c5bc] sm:text-lg">
            <p>For most of history, we could only save two of our senses.</p>
            <p>
              A camera saves what we see. A microphone saves what we hear. Everything else — touch, taste, smell — disappears the
              moment it happens.
            </p>
            <p>
              This week a headline made me stop scrolling: <strong className="text-white">AI can now send smells over the internet.</strong>
            </p>
            <p>So I did what I always do now before believing a headline. I read past it.</p>

            <H2 id="what-happened">What actually happened</H2>
            <p>
              Researchers at Ohio State University and Zhejiang Laboratory in China published a paper in <em>Science Advances</em>{" "}
              on 21 October. They call the system <strong className="text-white">Scentronic</strong>, and Ohio State shared the
              story on 4 November.
            </p>
            <p>
              They built two things: an electronic nose that learns to recognise smells, and a wearable — a wristband with two
              scent channels, or a necklace with five — that releases a scent right under your nose.
            </p>
            <SmellPipeline />
            <ResultsChart />
            <p>
              The e-nose was almost perfect at telling its five foods apart. People wearing the device named the scent it released
              roughly three times out of four. For a first system, that is impressive.
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
            <p>
              So, can AI smell? It can recognise a handful of smells it was taught, and it can press “play” on a matching scent.
              That is real progress. It is not a nose.
            </p>

            <H2 id="why-hard">Why smell is so much harder than sight</H2>
            <p>There is a reason we have had cameras for two hundred years and digital smell only now.</p>
            <ReceptorDots />
            <p>
              Your eyes build every colour from three kinds of receptors. That is why a screen only needs red, green and blue
              pixels. Your nose works with around four hundred. There is no small set of “primary smells” to mix. And there is no
              huge public archive of smells the way there is for images and text — which is exactly what AI needs to learn from.
            </p>
            <SensesTimeline />

            <H2 id="be-the-nose">Try it: be the e-nose</H2>
            <p>
              Here is the idea behind an e-nose, in a toy version. It never “smells” coffee. It sees six numbers from six sensors,
              and looks for the pattern it has seen before.
            </p>
            <ENoseDemo />
            <p>
              Push the noise up and watch it get confused. Real e-noses face messier versions of the same problem — mixtures of
              smells, and air that is never quite the same twice. That is why the researchers&apos; next steps include more
              sensitive sensors, bigger training datasets and better handling of complex mixtures.
            </p>

            <H2 id="github">I checked GitHub too</H2>
            <p>
              When a result excites me, I want to know if I can run something myself. Here is what is open right now:
            </p>
            <GithubCheck />
            <p>
              If you are a student curious about AI for smell, OpenPOM and Pyrfume make a good weekend project. You will quickly
              notice that the hard part isn&apos;t the model. It is the data.
            </p>

            <H2 id="human-point">So what&apos;s the human point?</H2>
            <p>Smell is the strangest of our senses. It is the sense most famously tied to memory. One whiff can take you somewhere you haven&apos;t been in years.</p>
            <p>
              Maybe for you it is the first rain on dry ground in June. Cutting chai at a tapri after a long day. A grandmother&apos;s
              kitchen on a festival morning.
            </p>
            <p>
              An e-nose can label coffee with near-perfect accuracy. It will never know that coffee is the smell of someone&apos;s
              father getting ready for work at six in the morning.
            </p>
            <PullQuote>AI can recognise a smell. Only we can remember one.</PullQuote>
            <p>
              That is the line worth noticing. AI is getting very good at <em>recognising</em>. Recognising is not the same as
              experiencing. The camera never replaced seeing — it changed what we chose to look at, and what we chose to keep.
            </p>
            <p>
              Digital smell could do real good. Ohio State says it may help scientists study sensory loss. It could help catch
              spoiled food or a gas leak. Maybe one day it lets a student far from home smell their mother&apos;s cooking on a video
              call. It could also become one more way to sell us things. Which one it becomes depends on the people who build it.
            </p>

            <H2 id="takeaway">My takeaway</H2>
            <p>
              <strong className="text-white">
                AI is learning to smell, one label at a time. The meaning of a smell — the memory, the person, the place — still
                lives with us.
              </strong>
            </p>
            <p>Read past the headline. Check the GitHub. And maybe go and smell something you love today.</p>
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
              Accuracy figures are as reported by Ohio State News and New Atlas. The e-nose demo uses made-up sensor patterns to
              explain the idea; it is not data from the study.
            </p>
          </section>

          {/* Keep reading */}
          <section className="mt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8a857c]">Keep reading</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["A Good Teacher Remembers You. A Great One Knows What to Forget.", "/blog/a-good-teacher-knows-what-to-forget"],
                ["As AI Advances, Being Human Matters More Than Ever", "/blog/as-ai-advances-being-human-matters-more-than-ever"],
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
