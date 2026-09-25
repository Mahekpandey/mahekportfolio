import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata(
  "when-everything-is-a-priority-nothing-is"
);

export default function WhenEverythingIsAPriorityNothingIsBlog() {
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
              When Everything Is a Priority, Nothing Is
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>September 25, 2026</span>
              <span>&bull;</span>
              <span>1 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/prio.png"
              alt="When Everything Is a Priority, Nothing Is"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              There is a point where adding more priorities stops making us
              productive.
            </p>

            <p>It makes us slow.</p>

            <p>
              When there are 10 things to focus on, attention keeps moving from
              one thing to another.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p>Start this.</p>
              <p>Check that.</p>
              <p>Come back to this.</p>
              <p>Remember something else.</p>
              <p>Switch again.</p>
            </div>

            <p>A lot gets started.</p>

            <p>Not much gets finished.</p>

            <p>
              That&apos;s why keeping only{" "}
              <strong className="text-white">3 important priorities</strong> can
              make such a difference.
            </p>

            <p>Not because the other things don&apos;t matter.</p>

            <p>
              They just don&apos;t need attention{" "}
              <strong className="text-white">right now</strong>.
            </p>

            <p>
              With three clear priorities, there is less switching, less mental
              noise, and more room to actually think.
            </p>

            <p>One gets finished.</p>

            <p>Then another takes its place.</p>

            <p>The goal isn&apos;t to do everything at once.</p>

            <p>
              It&apos;s to know{" "}
              <strong className="text-white">
                what deserves your attention first.
              </strong>
            </p>

            <p>Because when everything is important,</p>

            <p>
              <strong className="text-white">
                nothing gets your full attention.
              </strong>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
