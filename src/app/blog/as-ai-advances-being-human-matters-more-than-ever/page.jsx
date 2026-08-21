import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("as-ai-advances-being-human-matters-more-than-ever");

export default function AsAIAdvancesBeingHumanMattersMoreThanEverBlog() {
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
            <h1 className="text-4xl font-bold text-white mb-4">As AI Advances, Being Human Matters More Than Ever</h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>August 21, 2026</span>
              <span>&bull;</span>
              <span>3 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-3">
            <img
              src="/blog/as-ai-advances-being-human-matters-more-than-ever.png"
              alt="As AI Advances, Being Human Matters More Than Ever"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>I&apos;ve been thinking a lot about what it actually means to be human in a world where AI is becoming increasingly capable.</p>

            <p>Artificial Intelligence is changing the way we work, communicate, create, and solve problems. It is making us faster, more efficient, and capable of doing things that once seemed impossible.</p>

            <p>But I keep coming back to one thought:</p>

            <p><strong className="text-white">As technology becomes more intelligent, being human may matter more than ever.</strong></p>

            <p>Progress shouldn&apos;t only be measured by how advanced our technology becomes. It should also be measured by whether we continue to preserve the qualities that make us human.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p><strong className="text-white">Empathy.</strong></p>
              <p><strong className="text-white">Integrity.</strong></p>
              <p><strong className="text-white">Compassion.</strong></p>
              <p><strong className="text-white">Curiosity.</strong></p>
              <p><strong className="text-white">Critical thinking.</strong></p>
              <p><strong className="text-white">Genuine human connection.</strong></p>
            </div>

            <p>The more we allow technology to automate tasks, generate ideas, and even influence decisions, the more important it becomes for us to understand <em className="text-white">why</em> we are making those decisions in the first place.</p>

            <p>AI can process information.</p>
            <p>But what we choose to do with that information still reflects our values.</p>

            <p>AI can generate words.</p>
            <p>But meaning comes from the person using them.</p>

            <p>AI can help us solve problems.</p>
            <p>But deciding <strong className="text-white">which problems are worth solving</strong> is a deeply human question.</p>

            <p>Maybe the challenge of the AI era isn&apos;t simply teaching machines to become more human.</p>

            <p>Maybe it&apos;s making sure that, as machines become more intelligent, <strong className="text-white">we don&apos;t become less human.</strong></p>

            <p>Technology should expand what we are capable of - not replace what makes us who we are.</p>

            <p>And perhaps that is one of the most important conversations we need to have as AI continues to evolve:</p>

            <p><strong className="text-white">How do we become more capable without becoming less human?</strong></p>
          </div>
        </article>
      </div>
    </div>
  );
}
