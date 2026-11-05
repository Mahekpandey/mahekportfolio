import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GeometricBackground } from "../components/ui/geometric-background";
import { papers } from "./papers";

export const metadata = {
  title: "Papers, explained | Mahek Pandey",
  description: "Recent AI research papers in plain English — what each one found, with everyday examples and what I'd still ask.",
  alternates: { canonical: "/papers" },
};

export default function PapersIndex() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#121212]">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <Link href="/#papers" className="inline-flex items-center text-sm font-light text-[#a8a399] transition hover:text-[#f6f2ea]">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back home
        </Link>

        <header className="mt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#77736b]">Papers, explained</p>
          <h1 className="font-display mt-4 text-[clamp(2.8rem,8vw,5.5rem)] text-[#f6f2ea]">My understanding of new AI research</h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-[#a8a399]">
            I read recent papers and write down what I understood — in plain English, with everyday examples, and with the
            questions I&apos;m still left with. Always read the original too.
          </p>
        </header>

        <ul className="mt-16 border-b border-[rgba(246,242,234,0.1)]">
          {papers.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/papers/${p.slug}`}
                className="group grid gap-2 border-t border-[rgba(246,242,234,0.1)] py-8 md:grid-cols-[140px_1fr_auto] md:gap-8"
              >
                <span className="text-sm font-light text-[#77736b]">
                  {p.dateLabel}
                  <span className="mt-1 block text-xs uppercase tracking-widest text-[#bfa273]">{p.topic}</span>
                </span>
                <span>
                  <span className="block text-xl font-normal leading-snug text-[#f6f2ea] transition group-hover:text-[#d1c0a3]">{p.plainTitle}</span>
                  <span className="mt-2 block text-sm font-light text-[#77736b]">{p.paperTitle}</span>
                </span>
                <ArrowUpRight className="hidden h-5 w-5 text-[#77736b] transition group-hover:text-[#bfa273] md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
