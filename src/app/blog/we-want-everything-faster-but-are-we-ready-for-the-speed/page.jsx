import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata(
  "we-want-everything-faster-but-are-we-ready-for-the-speed"
);

export default function WeWantEverythingFasterBlog() {
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
              We Want Everything Faster. But Are We Ready for the Speed?
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>September 7, 2026</span>
              <span>&bull;</span>
              <span>2 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/we-want-everything-faster-but-are-we-ready-for-the-speed.png"
              alt="A developer thinking about speed, scalability, and sustainable systems"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              Lately, as a developer, I&apos;ve been learning more about{" "}
              <strong className="text-white">system design</strong>.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p>Scalability.</p>
              <p>Caching.</p>
              <p>Queues.</p>
              <p>Load balancing.</p>
              <p>Fault tolerance.</p>
              <p>Distributed systems.</p>
            </div>

            <p>
              At first, these felt like concepts I needed to learn to become a better
              engineer.
            </p>

            <p>
              But the more I learn, the more I realise they are not just technical
              concepts.
            </p>

            <p>
              They are lessons about <strong className="text-white">trade-offs</strong>.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p>We want applications to be faster.</p>
              <p>We want features shipped sooner.</p>
              <p>We want systems to handle millions of users.</p>
              <p>We want AI to generate code in seconds.</p>
            </div>

            <p>
              Everything is moving towards <strong className="text-white">faster</strong>.
            </p>

            <p>But I keep wondering:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">
                  Are we actually getting better at handling that speed?
                </strong>
              </blockquote>
            </div>

            <p>Because building something quickly is one problem.</p>

            <p>Keeping it reliable when thousands of people use it is another.</p>

            <p>
              A quick architectural decision can save days today but create months of
              problems later. Technical debt is essentially the interest we pay for some of
              those shortcuts.
            </p>

            <p>And I think this applies beyond software too.</p>

            <p>We have faster tools, faster communication, faster learning, faster delivery.</p>

            <p>
              But our ability to understand, verify, maintain, and adapt hasn&apos;t necessarily
              become faster.
            </p>

            <p>
              Maybe the real skill of a developer isn&apos;t simply learning how to{" "}
              <strong className="text-white">build faster</strong>.
            </p>

            <p>
              Maybe it is learning how to build systems that can{" "}
              <strong className="text-white">
                survive the speed at which we&apos;re building them.
              </strong>
            </p>

            <p>Because speed without stability isn&apos;t progress.</p>

            <p>Sometimes, it&apos;s just acceleration.</p>
          </div>
        </article>
      </div>
    </div>
  );
}
