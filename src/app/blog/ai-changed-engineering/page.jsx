import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("ai-changed-engineering");

export default function AIChangedEngineeringBlog() {
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
            <h1 className="text-4xl font-bold text-white mb-4">AI Was Supposed to Replace Engineers. Instead, It Changed What Engineering Means.</h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>August 13, 2026</span>
              <span>&bull;</span>
              <span>3 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-white p-3">
            <img
              src="/blog/ai-changed-engineering.png"
              alt="AI and Engineering"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>I still remember writing my first DSA algorithm completely from scratch.</p>
            <p>I remember struggling with loops, logic, debugging, and finally seeing the code work.</p>
            <p>Back then, <strong className="text-white">writing the code was a big part of being an engineer.</strong></p>
            <p>Today, the dynamics are completely different.</p>
            <p>I can honestly say there are times when <strong className="text-white">I don&apos;t write a single line of code myself.</strong></p>
            <p>I describe what I want. AI writes the first version. Then my job becomes understanding it, reviewing it, debugging it, changing the architecture, and making sure it actually works.</p>
            <p>And that made me realize something:</p>
            <p><strong className="text-white">AI isn&apos;t simply replacing engineers. It&apos;s changing what we expect an engineer to do.</strong></p>
            <p>The mechanical part of programming is becoming cheaper.</p>
            <p>But understanding a problem is not.</p>
            <p>Knowing why something should be built, how it should work, what can go wrong, whether the architecture will scale, and whether the AI-generated code is actually correct — that still requires engineering judgment.</p>
            <p>In fact, I think fundamentals are becoming <strong className="text-white">more important</strong>, not less.</p>
            <p>If you don&apos;t understand algorithms, systems, databases, APIs, architecture, and debugging, AI can make you productive very quickly — but it can also make you confidently wrong.</p>
            <p>That&apos;s the interesting part.</p>
            <p>I don&apos;t think the future belongs to engineers who write the most code.</p>
            <p>I think it belongs to engineers who can say:</p>
            
            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">“I understand the problem. I know what needs to be built. Now let&apos;s use AI to build it.”</strong>
              </blockquote>
            </div>

            <p>The engineer didn&apos;t disappear.</p>
            <p><strong className="text-white">The engineer moved up a level.</strong></p>
            <p>And honestly, I&apos;m excited to see where that goes.</p>
          </div>
        </article>
      </div>
    </div>
  );
}
