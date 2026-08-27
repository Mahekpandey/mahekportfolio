import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("i-didnt-build-an-ai-tutor-i-built-a-learning-system");

export default function IDidntBuildAITutorBlog() {
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
              I Didn&apos;t Build an AI Tutor. I Built a Learning System.
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>August 27, 2026</span>
              <span>&bull;</span>
              <span>4 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-white p-3">
            <img
              src="/blog/i-didnt-build-an-ai-tutor-i-built-a-learning-system.png"
              alt="Medical.Eklavya learning system"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>When I started building <strong className="text-white">Medical.Eklavya</strong>, I had one goal:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">Make learning adaptive without making the system unnecessarily complicated.</strong>
              </blockquote>
            </div>

            <p>My first instinct was actually to avoid generating everything with AI.</p>
            <p>Medical education is different. An AI-generated image can look convincing and still be inaccurate. So instead of asking, <em className="text-neutral-200">&quot;How much can AI generate?&quot;</em>, I started asking:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">&quot;How much can we understand, structure, and reuse correctly?&quot;</strong>
              </blockquote>
            </div>

            <p>That took me into data cleaning, content mapping, Hugging Face, medical study material, and eventually the harder engineering problem:</p>

            <p><strong className="text-white">How do we decide what a student should learn next?</strong></p>

            <p>A student&apos;s journey isn&apos;t a fixed sequence.</p>
            <p>They make mistakes.</p>
            <p>They ask for help.</p>
            <p>They struggle with concepts.</p>
            <p>They forget things.</p>
            <p>They improve.</p>

            <p>So instead of treating every interaction as just another database entry, we started turning these behaviours into <strong className="text-white">learning signals</strong>.</p>

            <p>From there, the system can rank weak areas, prioritise what needs attention, generate daily learning plans, schedule revision, and adapt the next interaction.</p>

            <p>Under the hood, it&apos;s not some magical neural recommender.</p>

            <p>It&apos;s mostly <strong className="text-white">deterministic engineering + adaptive rules</strong>, with LLMs supporting areas where language understanding and evaluation actually help.</p>

            <p>We use weighted prioritisation for daily learning, state-based decision logic for viva, SM-2-like spaced repetition for flashcards, and state machines for clinical cases.</p>

            <p>And I think that&apos;s where the interesting part begins.</p>

            <h2 className="text-2xl font-bold text-white mt-8">Engineering is often about deciding what happens next.</h2>

            <p>A traditional algorithm asks:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">Which node should I visit next?</strong>
              </blockquote>
            </div>

            <p>A learning system asks:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">Which concept should this student encounter next?</strong>
              </blockquote>
            </div>

            <p>The difference is that the &quot;node&quot; is a human being with context, mistakes, uncertainty, and progress.</p>

            <p>That&apos;s why I don&apos;t believe everything needs to be an AI model.</p>

            <p>Sometimes the best engineering decision is knowing <strong className="text-white">where not to use AI</strong>.</p>

            <p>Our first version of <strong className="text-white">Medical.Eklavya</strong> is now ready.</p>

            <p>It&apos;s not perfect. It&apos;s not meant to be.</p>

            <p>It&apos;s our first attempt at turning data, algorithms, learning science, and AI into something that feels less like a content platform and more like a <strong className="text-white">learning system that listens to the student.</strong></p>

            <p>Now, I&apos;d genuinely love constructive criticism.</p>

            <p>Tell me where the learning logic can be better.</p>
            <p>Tell me where the engineering is wrong.</p>
            <p>Tell me what you would change.</p>

            <p>Because we&apos;re not just building the system.</p>

            <p><strong className="text-white">We&apos;re learning how to build it.</strong></p>
          </div>
        </article>
      </div>
    </div>
  );
}
