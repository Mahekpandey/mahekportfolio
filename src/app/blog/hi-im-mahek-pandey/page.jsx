"use client";

import { useEffect } from "react";
import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HiImMahekPandeyBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Link
          href="/#blogs"
          className="inline-flex items-center text-neutral-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Hi, I&apos;m Mahek Pandey</h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>July 30, 2026</span>
              <span>&bull;</span>
              <span>4 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-white p-3">
            <img
              src="/blog/mahek-pandey-intro.png"
              alt="Mahek Pandey blog introduction"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>I&apos;m Mahek Pandey, a software engineer who enjoys building AI products.</p>

            <p>
              Right now, I&apos;m working on <strong className="text-white">Eklavya</strong>, where
              I&apos;ve contributed to core parts of the platform like the AI memory system, backend
              architecture, and several product features. Before this, I worked on projects that
              didn&apos;t just ship; they also created real business value.
            </p>

            <p>
              Outside of coding, I love swimming. I also enjoy mathematics, even though I&apos;m not
              the best at it.
            </p>

            <p>
              One thing that&apos;s changed a lot over the last three months is how I think about
              software.
            </p>

            <p>
              Before joining Eklavya, I looked at work like most engineers do: build features, learn
              new technologies, and add another project to the resume.
            </p>

            <p>Today, I think differently.</p>

            <p>
              Whenever I build something, my first question is no longer{" "}
              <em className="text-neutral-200">&quot;Does it work?&quot;</em> It&apos;s{" "}
              <em className="text-neutral-200">&quot;Does this actually help the student?&quot;</em> Will
              someone enjoy using it? Will it make learning easier? Is this solving a real problem,
              or is it just another feature?
            </p>

            <p>That shift has probably been my biggest learning so far.</p>

            <p>
              This blog is where I&apos;ll share things I learn, mistakes I make, ideas I explore, and
              opinions I form while building products. I&apos;m still learning every day, and I hope we
              can learn together.
            </p>

            <p className="text-xl font-semibold text-white">Welcome!</p>
          </div>
        </article>
      </div>
    </div>
  );
}
