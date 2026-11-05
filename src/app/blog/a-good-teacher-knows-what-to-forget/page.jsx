import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";
import { ForgettingCurve, MemoryDiagram, MemoryQuiz, NewsGrid, PullQuote, SpacedRepetition } from "./widgets";

export const metadata = createBlogMetadata("a-good-teacher-knows-what-to-forget");

const H2 = ({ children, id }) => (
  <h2 id={id} className="scroll-mt-24 pt-10 text-3xl font-light tracking-tight text-white sm:text-4xl">
    {children}
  </h2>
);

const A = ({ href, children }) => (
  <Link href={href} className="text-[#d1c0a3] underline decoration-[#bfa273]/50 underline-offset-2 hover:text-white">
    {children}
  </Link>
);

const SOURCES = [
  ["Google lets schools switch off Gemini, but AI in Search is all or nothing — MediaNama (Nov 4, 2026)", "https://www.medianama.com/2026/11/223-google-schools-switch-off-gemini/"],
  ["Google responds to political backlash over removing search from schools that ban AI — CNBC (Nov 3, 2026)", "https://www.cnbc.com/2026/11/03/google-responds-to-outrage-over-removing-search-in-schools-that-ban-ai.html"],
  ["New York bans AI chatbots from pretending to be human with children — The Next Web (Oct 30, 2026)", "https://thenextweb.com/news/new-york-ai-chatbots-children-law-hochul-baby-monitors"],
  ["ChatGPT's memory gets “Dreaming” — GIGAZINE, on OpenAI's announcement (Jun 2026)", "https://gigazine.net/gsc_news/en/20260605-chatgpt-memory-dreaming-v3"],
  ["Murre & Dros, “Replication and Analysis of Ebbinghaus' Forgetting Curve”, PLOS ONE 10(7): e0120644 (2015)", "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0120644"],
];

const LESSONS = [
  [
    "Remember patterns, not transcripts.",
    "“Keeps confusing oxidation and reduction” is useful forever. Forty messages of chat history mostly isn't.",
  ],
  [
    "Let old mistakes go.",
    <>
      Once a student has fixed a misconception, the record of getting it wrong has done its job. I wrote about treating
      errors as information, not insults, in <A href="/blog/coaching-centres-sell-fear">How Coaching Centres Sell Fear</A>.
    </>,
  ],
  ["Let memories fade unless they come back.", "If something hasn't mattered in months, it should weigh less — just like it does for us."],
  ["Show students what you remember.", "And let them correct it or delete it. A memory they can't see is a file kept on them, not for them."],
  [
    "Never pretend to be a friend.",
    "A tutor should remember you so you can learn, not so you'll need it. New York's new law draws almost exactly this line.",
  ],
];

export default function GoodTeacherForgetBlog() {
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
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[#d1c0a3] ring-1 ring-white/10">AI · Education</span>
              <span className="text-[#8a857c]">November 4, 2026</span>
              <span className="text-[#8a857c]">·</span>
              <span className="text-[#8a857c]">7 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-light leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              A Good Teacher Remembers You.{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>
                A Great One Knows What to Forget.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#a8a399]">
              This week, AI moved deeper into classrooms — and deeper into our memories. Here is what building memory for an
              AI tutor taught me about what is worth remembering, and why forgetting might be the most human feature we can
              build.
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
              src="/blog/good-teacher-forget.png"
              alt="A glowing sphere of memories with some points drifting away, and handwritten notes: remember patterns, forget old mistakes, let students delete"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-[17px] leading-8 text-[#c9c5bc] sm:text-lg">
            <p>Two news stories stayed with me this week, and both were about children and AI.</p>
            <p>
              In one, a company decided which AI students would see by default. In the other, a government decided what AI
              should never pretend to be.
            </p>
            <p>
              I have spent the last few months building memory for an AI tutor at Eklavya — the part that remembers a student
              across sessions and devices. So I read both stories with one question in my head:
            </p>
            <p>
              <strong className="text-white">What should an AI remember about a student? And what should it forget?</strong>
            </p>

            <H2 id="this-week">What happened in AI this week</H2>
            <NewsGrid />
            <p>
              Read together, these stories are about one thing: <em>trust</em>. Who decides what AI does around students, and
              how much it gets to know about them.
            </p>
            <p>
              There are fair points on every side. Teachers worry that students will hand over their thinking. Parents worry
              about privacy. The industry group Tech:NYC warned that New York&apos;s law could push companies to restrict minors&apos;
              access to tutoring tools and homework help. And the students who stand to gain the most are often the ones who
              have never had a good tutor at all.
            </p>
            <p>But underneath all of it sits a quieter design question — one I deal with every day.</p>

            <H2 id="forgetting">Humans forget — and that is a feature</H2>
            <p>
              In 1879, a German psychologist named Hermann Ebbinghaus did something strange. He memorised lists of made-up
              syllables, like DAX and BUP, and measured how much effort he saved when he relearned them after twenty minutes, an
              hour, a day, a month.
            </p>
            <p>
              Over a century later, two researchers, Murre and Dros, repeated the experiment almost exactly — one of them spent
              75 days relearning syllable lists. Here is what both found:
            </p>
            <ForgettingCurve />
            <p>
              Within twenty minutes, roughly half the effort was already gone. After a month, Ebbinghaus saved only about a fifth
              of it.
            </p>
            <p>
              That sounds like a flaw. I don&apos;t think it is. Forgetting is how the brain decides what matters. What we keep is
              what we come back to, use, and care about. Everything else fades, so there is room left to think.
            </p>
            <PullQuote>A good memory isn&apos;t one that keeps everything. It&apos;s one that keeps the right things.</PullQuote>

            <H2 id="coming-back">What beats forgetting: coming back</H2>
            <p>
              There is one reliable way to hold on to something: return to it just as you are about to lose it. That is the idea
              behind spaced repetition, and it is one of the reasons I wrote that{" "}
              <A href="/blog/i-didnt-build-an-ai-tutor-i-built-a-learning-system">I didn&apos;t build an AI tutor — I built a learning system</A>.
            </p>
            <SpacedRepetition />
            <p>
              Look at what keeps the memory alive. Not storing more. <em>Returning</em> to what matters, at the right time.
            </p>

            <H2 id="building-memory">What building AI memory taught me</H2>
            <p>
              When I started working on AI Tutor Memory — memory that spans six backends, for a platform with more than 50,000
              students — I assumed the hard part would be remembering.
            </p>
            <p>It wasn&apos;t. Storage is cheap. Embeddings are easy. You can keep everything, forever.</p>
            <p>The hard part was deciding what <em>not</em> to keep.</p>
            <MemoryDiagram />
            <p>A few rules I keep coming back to:</p>
            <ol className="list-none space-y-4 pl-0">
              {LESSONS.map(([title, text], i) => (
                <li key={i} className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] font-mono text-xs text-[#d1c0a3]">
                    {i + 1}
                  </span>
                  <span>
                    <strong className="text-white">{title}</strong> <span className="text-[#a8a399]">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p>
              There is a practical bonus, too. A smaller, sharper memory means shorter prompts and faster answers. But that is a
              side effect. The real reason is respect.
            </p>
            <p>Want to try being the tutor&apos;s memory for a minute?</p>
            <MemoryQuiz />

            <H2 id="human-point">So what&apos;s the human point?</H2>
            <p>Think about the best teacher you ever had.</p>
            <p>
              They probably didn&apos;t remember every mistake you made. They remembered what you were capable of. They remembered
              that you understood things better when someone drew them on the board. And if you once froze in front of the whole
              class, they let that day go.
            </p>
            <p>That isn&apos;t a weak memory. That is care.</p>
            <p>
              AI doesn&apos;t have to forget. It can keep every word a student has ever typed. Which means forgetting is no longer an
              accident of biology. It is a decision we make when we build these systems — what to keep, what to let fade, what
              deserves a second chance.
            </p>
            <PullQuote>We spent years teaching machines to remember. Now we have to teach them what to forget.</PullQuote>
            <p>
              Companies are deciding what AI students see. Governments are deciding what AI must never pretend to be. The people
              building these products get a decision too — maybe the most personal one: what does this system remember about a
              child, and for how long?
            </p>

            <H2 id="takeaway">My takeaway</H2>
            <p>
              <strong className="text-white">
                The best AI tutors won&apos;t be the ones that remember the most about a student. They will be the ones that
                remember the right things — and are kind enough to forget the rest.
              </strong>
            </p>
            <p>Remember to help. Forget to free. And always let the student see what you kept.</p>
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
              The forgetting-curve chart uses published data. The spaced-repetition chart is a simplified model for intuition,
              and the memory diagram is a simplified view of the kind of system I work on.
            </p>
          </section>

          {/* Keep reading */}
          <section className="mt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8a857c]">Keep reading</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["I Didn't Build an AI Tutor. I Built a Learning System.", "/blog/i-didnt-build-an-ai-tutor-i-built-a-learning-system"],
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
