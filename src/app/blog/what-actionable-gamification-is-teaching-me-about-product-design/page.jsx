import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata(
  "what-actionable-gamification-is-teaching-me-about-product-design"
);

export default function ActionableGamificationProductDesignBlog() {
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
              What &quot;Actionable Gamification&quot; Is Teaching Me About Product Design
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>August 27, 2026</span>
              <span>&bull;</span>
              <span>3 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-3">
            <img
              src="/blog/actionable-gami.png"
              alt="Actionable Gamification and product design"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              I&apos;ve been reading <strong className="text-white">Actionable Gamification</strong>,
              and I&apos;m slowly realizing that gamification isn&apos;t really about adding points,
              badges, or leaderboards.
            </p>

            <p>It&apos;s about understanding <strong className="text-white">why people act</strong>.</p>

            <p>That idea is already changing how I think about designing products.</p>

            <p>While working on Medical.Eklavya, I started looking at learning differently.</p>

            <p>A student doesn&apos;t always need another feature.</p>
            <p>Sometimes they need a reason to come back.</p>
            <p>Sometimes they need progress they can see.</p>
            <p>Sometimes they need a small challenge.</p>
            <p>Sometimes they need to feel that their effort actually matters.</p>

            <p>
              The book talks about different motivational drivers, and one idea that really stayed
              with me is that <strong className="text-white">people are motivated by very different things</strong>.
            </p>

            <p>Some want achievement.</p>
            <p>Some want exploration.</p>
            <p>Some want mastery.</p>
            <p>Some want competition.</p>
            <p>Some want meaning.</p>

            <p>So instead of asking:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">&quot;How do I gamify this product?&quot;</strong>
              </blockquote>
            </div>

            <p>I&apos;m learning to ask:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">&quot;What is motivating this user right now?&quot;</strong>
              </blockquote>
            </div>

            <p>That changes the design completely.</p>

            <p>For a learning product, a streak isn&apos;t the goal.</p>
            <p>The goal is creating a feeling of <strong className="text-white">progress</strong>.</p>

            <p>A badge isn&apos;t the goal.</p>
            <p>The goal is <strong className="text-white">recognition of achievement</strong>.</p>

            <p>A daily task isn&apos;t the goal.</p>
            <p>The goal is helping someone build a <strong className="text-white">habit of learning</strong>.</p>

            <p>And this is probably my biggest takeaway so far:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">
                  Good product design isn&apos;t about making users do more. It&apos;s about making the
                  right action feel meaningful.
                </strong>
              </blockquote>
            </div>

            <p>
              I&apos;m still reading, experimenting, and figuring out how much of this actually belongs
              in Medical.Eklavya.
            </p>

            <p>But it&apos;s already changing the questions I ask when I design.</p>

            <p><strong className="text-white">Not: &quot;What feature should we add?&quot;</strong></p>

            <p>
              <strong className="text-white">
                But: &quot;What human motivation are we designing for?&quot;
              </strong>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
