import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata(
  "i-learned-more-from-things-that-broke-than-things-that-worked"
);

export default function ILearnedMoreFromThingsThatBrokeBlog() {
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
            <h1 className="text-4xl font-bold text-white mb-4">
              I Learned More From Things That Broke Than Things That Worked
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>September 25, 2026</span>
              <span>&bull;</span>
              <span>2 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/break_learn.png"
              alt="I Learned More From Things That Broke Than Things That Worked"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>When something works, I usually don&apos;t think about it for very long.</p>

            <p>
              I run the command, the app starts, the feature works, and I move on
              to the next thing.
            </p>

            <p>But when something breaks, everything changes.</p>

            <p>
              Suddenly, I have to understand <em>why</em> it broke.
            </p>

            <p>And that&apos;s where I usually learn the most.</p>

            <p>
              I&apos;ve been learning more about development, AWS, DevOps, and just
              building things in general. One thing I&apos;ve noticed is that the
              concepts I remember best aren&apos;t the ones I learned from tutorials.
            </p>

            <p>
              They&apos;re the ones I had to figure out because something wasn&apos;t
              working.
            </p>

            <p>
              A deployment that failed taught me more about deployment than a
              successful one.
            </p>

            <p>
              A bug that took hours to find made me understand that part of the
              code much better.
            </p>

            <p>
              An AWS configuration that didn&apos;t work made me actually understand
              what I was configuring instead of just following a tutorial.
            </p>

            <p>
              And sometimes, the most frustrating part is realizing that the
              problem was something ridiculously small.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p>A missing environment variable.</p>
              <p>A wrong port.</p>
              <p>A service that wasn&apos;t running.</p>
              <p>A configuration I assumed was correct.</p>
              <p>Something that looked obvious only after I found it.</p>
            </div>

            <p>But maybe that&apos;s the point.</p>

            <p>
              When everything works, I can get away with{" "}
              <em>knowing what to do</em>.
            </p>

            <p>
              When something breaks, I have to understand{" "}
              <em>why I&apos;m doing it</em>.
            </p>

            <p>That&apos;s a completely different kind of learning.</p>

            <h2 className="text-2xl font-semibold text-white pt-4">
              The things that break stay with me
            </h2>

            <p>I probably won&apos;t remember every AWS command I&apos;ve run.</p>

            <p>I won&apos;t remember every bug I&apos;ve fixed.</p>

            <p>
              But I&apos;ll remember the moment when I spent an unreasonable amount
              of time trying to understand why something wasn&apos;t working.
            </p>

            <p>Because after finally fixing it, I had a mental model for it.</p>

            <p>
              The next time I saw something similar, I didn&apos;t need to search for
              the answer from scratch.
            </p>

            <p>I had already been there.</p>

            <p>
              And I think that&apos;s one of the underrated parts of becoming a better
              developer.
            </p>

            <p>You don&apos;t just collect knowledge.</p>

            <p>You collect experiences.</p>

            <p>Some of them happen because you built something cool.</p>

            <p>
              Others happen because you broke something you probably shouldn&apos;t
              have.
            </p>

            <p>
              And honestly, I think I learn more from the second category.
            </p>

            <p>So now, when something breaks, I&apos;m still frustrated.</p>

            <p>I still want to fix it as quickly as possible.</p>

            <p>
              But I&apos;ve started seeing those moments a little differently.
            </p>

            <p>Maybe the broken thing isn&apos;t just an obstacle.</p>

            <p>Maybe it&apos;s the part that&apos;s actually teaching me something.</p>

            <p>
              Because sometimes,{" "}
              <strong className="text-white">the bug is the lesson.</strong>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
