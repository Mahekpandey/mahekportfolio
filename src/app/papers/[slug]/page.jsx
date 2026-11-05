import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { GeometricBackground } from "../../components/ui/geometric-background";
import { getPaper, papers } from "../papers";

export function generateStaticParams() {
  return papers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPaper(slug);
  if (!p) return {};
  return {
    title: `${p.plainTitle} | Papers, explained — Mahek Pandey`,
    description: p.tldr,
    alternates: { canonical: `/papers/${p.slug}` },
    openGraph: { title: p.plainTitle, description: p.tldr, type: "article", publishedTime: p.date },
    twitter: { card: "summary", title: p.plainTitle, description: p.tldr },
  };
}

const LINE = "border-[rgba(246,242,234,0.1)]";

export default async function PaperNote({ params }) {
  const { slug } = await params;
  const p = getPaper(slug);
  if (!p) notFound();
  const i = papers.findIndex((x) => x.slug === slug);
  const newer = papers[i - 1];
  const older = papers[i + 1];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#121212]">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <Link href="/papers" className="inline-flex items-center text-sm font-light text-[#a8a399] transition hover:text-[#f6f2ea]">
          <ArrowLeft className="mr-2 h-4 w-4" /> All papers
        </Link>

        <article className="mt-14">
          <header>
            <p className="text-xs uppercase tracking-[0.35em] text-[#77736b]">
              Paper notes <span className="text-[#bfa273]">·</span> {p.topic}
            </p>
            <h1 className="font-display mt-5 text-[clamp(2.4rem,6.5vw,4.25rem)] text-[#f6f2ea]">{p.plainTitle}</h1>

            <div className={`mt-10 border-y ${LINE} py-6`}>
              <p className="text-[15px] font-normal leading-snug text-[#f6f2ea]">{p.paperTitle}</p>
              <p className="mt-2 text-sm font-light leading-relaxed text-[#a8a399]">{p.authors}</p>
              <p className="mt-1 text-sm font-light text-[#77736b]">
                {p.venue} · {p.dateLabel} · {p.readTime} read
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={p.arxiv} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium">
                  Read the paper <ArrowUpRight className="h-4 w-4" />
                </a>
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(246,242,234,0.18)] px-4 py-2 text-sm text-[#f6f2ea] transition hover:border-[#bfa273]"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </div>
          </header>

          <div className="mt-12 border-l-2 border-[#bfa273] pl-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#bfa273]">In one breath</p>
            <p className="mt-3 text-xl font-light leading-relaxed text-[#f6f2ea] sm:text-2xl">{p.tldr}</p>
          </div>

          {p.stats && (
            <div className={`mt-12 grid grid-cols-1 border-t ${LINE} ${p.stats.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
              {p.stats.map((s, k) => (
                <div key={s.l} className={`py-6 sm:px-5 ${k ? `border-t sm:border-l sm:border-t-0 ${LINE}` : "sm:pl-0"}`}>
                  <p className="font-display text-5xl text-[#f6f2ea]">{s.v}</p>
                  <p className="mt-2 text-sm font-light leading-snug text-[#a8a399]">{s.l}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 space-y-14">
            {p.sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-xs uppercase tracking-[0.35em] text-[#77736b]">{s.h}</h2>
                {s.quote && (
                  <blockquote className="mt-5 text-2xl leading-snug text-[#f6f2ea] sm:text-3xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                    {s.quote}
                  </blockquote>
                )}
                <div className="mt-5 space-y-5 text-[17px] font-light leading-8 text-[#c9c5bc] sm:text-lg">
                  {s.p.map((para, k) => (
                    <p key={k}>{para}</p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-xs uppercase tracking-[0.35em] text-[#77736b]">What I&apos;d still ask</h2>
              <ul className="mt-5 space-y-3 text-[17px] font-light leading-8 text-[#c9c5bc] sm:text-lg">
                {p.questions.map((q) => (
                  <li key={q} className="flex gap-4">
                    <span className="mt-[0.9rem] h-px w-4 shrink-0 bg-[#bfa273]" />
                    {q}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <p className={`mt-16 border-t ${LINE} pt-6 text-sm font-light leading-relaxed text-[#77736b]`}>
            These are my notes, written from the paper&apos;s abstract and framing to make the ideas easy to follow. The everyday
            examples are mine. For the full method and results, read the original paper.
          </p>

          <nav className="mt-10 grid gap-4 sm:grid-cols-2">
            {newer ? (
              <Link href={`/papers/${newer.slug}`} className={`group border-t ${LINE} pt-5`}>
                <span className="flex items-center gap-1 text-xs uppercase tracking-widest text-[#77736b]">
                  <ArrowLeft className="h-3 w-3" /> Newer
                </span>
                <span className="mt-2 block font-normal text-[#f6f2ea] group-hover:text-[#d1c0a3]">{newer.plainTitle}</span>
              </Link>
            ) : (
              <span />
            )}
            {older && (
              <Link href={`/papers/${older.slug}`} className={`group border-t ${LINE} pt-5 sm:text-right`}>
                <span className="flex items-center gap-1 text-xs uppercase tracking-widest text-[#77736b] sm:justify-end">
                  Older <ArrowRight className="h-3 w-3" />
                </span>
                <span className="mt-2 block font-normal text-[#f6f2ea] group-hover:text-[#d1c0a3]">{older.plainTitle}</span>
              </Link>
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}
