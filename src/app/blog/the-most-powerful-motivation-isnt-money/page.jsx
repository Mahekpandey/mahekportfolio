import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("the-most-powerful-motivation-isnt-money");

export default function TheMostPowerfulMotivationIsntMoneyBlog() {
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
            <h1 className="text-4xl font-bold text-white mb-4">What I&apos;m Learning: The Octalysis Framework</h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>August 19, 2026</span>
              <span>&bull;</span>
              <span>3 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-3">
            <img
              src="/blog/octalysis-framework.png"
              alt="What I'm Learning: The Octalysis Framework"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>I&apos;m currently reading <em className="text-white">Actionable Gamification</em> and just finished <strong className="text-white">Chapter 3: The Octalysis Framework</strong>.</p>

            <p>The biggest takeaway for me?</p>

            <p><strong className="text-white">People don&apos;t just act because of rewards. They act because something motivates them.</strong></p>

            <p>The chapter breaks motivation into <strong className="text-white">8 Core Drives</strong> - from purpose and accomplishment to curiosity, social influence, ownership, scarcity, and even the fear of loss.</p>

            <h2 className="text-2xl font-semibold text-white pt-4">Key Takeaways</h2>

            <ul className="space-y-4">
              <li><strong className="text-white">Meaning can be stronger than rewards.</strong> People often work harder when they believe what they&apos;re doing matters.</li>
              <li><strong className="text-white">Progress creates motivation.</strong> Challenges, mastery, and achievement make us want to keep going.</li>
              <li><strong className="text-white">Intrinsic motivation sticks.</strong> Making something genuinely enjoyable can be more powerful than constantly offering external rewards.</li>
              <li><strong className="text-white">Not all motivation feels good.</strong> Curiosity, scarcity, and fear of loss can drive engagement, but they can also create unhealthy obsession.</li>
              <li><strong className="text-white">Good design is about understanding people.</strong> Gamification isn&apos;t just adding points, badges, or leaderboards - it&apos;s about understanding <em>why</em> someone wants to take an action.</li>
            </ul>

            <p><strong className="text-white">My biggest realization:</strong></p>

            <p>Before designing <em>what people should do</em>, I should first understand <strong className="text-white">what makes them want to do it.</strong></p>

            <p>That changes the way I look at products, learning, and even my own habits.</p>
          </div>
        </article>
      </div>
    </div>
  );
}
