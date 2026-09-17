import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("is-it-laziness-or-is-my-mind-just-too-full");

export default function IsItLazinessOrIsMyMindJustTooFullBlog() {
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
              Is It Laziness, or Is My Mind Just Too Full?
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>September 17, 2026</span>
              <span>&bull;</span>
              <span>1 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/lazyness.png"
              alt="Is It Laziness, or Is My Mind Just Too Full?"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              Sometimes, I have so many ideas in my mind. Things I want to build, create,
              and bring to life. I imagine how they could look, how they could help people,
              and how much I want to make them real.
            </p>

            <p>But then there are the backlogs.</p>

            <p>
              Tasks waiting to be completed, responsibilities piling up, and unfinished
              work that keeps growing. Even when I want to contribute, I find myself
              unable to start.
            </p>

            <p>
              And then I wonder:{" "}
              <strong className="text-white">
                Am I being lazy, or is something else going on?
              </strong>
            </p>

            <p>
              Maybe it isn&apos;t always laziness. Sometimes, having too much on your mind
              makes even the simplest task feel overwhelming. Your ideas are moving
              faster than your energy, and your responsibilities leave little room to create.
            </p>

            <p>
              That doesn&apos;t mean we should ignore our backlogs. But it does mean we
              should understand ourselves before judging ourselves.
            </p>

            <p>
              Perhaps the answer is not to do everything at once, but to take one small
              step toward finishing what is already in front of us.
            </p>

            <p>
              Because having great ideas is wonderful. But giving yourself the space
              and energy to bring them to life matters just as much.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
