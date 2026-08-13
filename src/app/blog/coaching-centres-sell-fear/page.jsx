import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("coaching-centres-sell-fear");

export default function CoachingCentresSellFearBlog() {
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
            <h1 className="text-4xl font-bold text-white mb-4">How Coaching Centres Sell Fear — And Why It Reminds Me of Training an LLM</h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>August 13, 2026</span>
              <span>&bull;</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-white p-3">
            <img
              src="/blog/coaching-centres-sell-fear.png"
              alt="Coaching centres and LLM training"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>I still remember what happened after my 10th.</p>
            <p>I had scored good marks.</p>
            <p>Naturally, the next question was:</p>
            <p><strong className="text-white">“Which coaching class should I join?”</strong></p>
            <p>Like many parents, mine weren&apos;t simply looking for tuition.</p>
            <p>They were looking for a <strong className="text-white">better career, better opportunities, and some certainty about the future.</strong></p>
            <p>And that&apos;s where I noticed something that has stayed with me.</p>
            <p>A lot of coaching centres don&apos;t begin by telling parents how capable their child is.</p>
            <p>They begin by showing them <strong className="text-white">where their child is falling behind.</strong></p>
            <p>Your child scored 90?</p>
            <p>Someone else scored 95.</p>
            <p>Your child is good at mathematics?</p>
            <p>But can they solve this advanced problem?</p>
            <p>Your child is already performing well?</p>
            <p><strong className="text-white">Imagine how much better they could perform with us.</strong></p>
            <p>And slowly, something changes.</p>
            <p>A student who was doing well starts feeling like they aren&apos;t doing enough.</p>
            <p>A parent who was satisfied starts worrying.</p>
            <p><strong className="text-white">A gap has been created.</strong></p>
            <p>And once that gap feels big enough, the solution becomes easy to sell:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “Don&apos;t worry. We can fix this.”
              </blockquote>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">The Algorithm of Fear</h2>
            
            <p>If I had to reduce this entire process to an algorithm, it might look like this:</p>
            
            <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm text-neutral-300 font-mono">
{`Student Performance
        ↓
Find a Weakness
        ↓
Compare With a Benchmark
        ↓
Highlight the Gap
        ↓
Amplify the Gap
        ↓
Create Urgency
        ↓
Offer the Solution
        ↓
Enroll`}
            </pre>

            <p>The interesting part is that this reminds me of something completely different:</p>
            <p><strong className="text-white">training an LLM.</strong></p>
            <p>An LLM starts with a current state.</p>
            <p>It makes a prediction.</p>
            <p>The system measures the error.</p>
            <p>That error becomes a signal.</p>
            <p>The model updates itself.</p>
            <p>Then it repeats.</p>

            <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm text-neutral-300 font-mono">
{`Current State
      ↓
Prediction
      ↓
Measure Error
      ↓
Calculate Loss
      ↓
Update
      ↓
Repeat`}
            </pre>

            <p>The analogy isn&apos;t perfect. Students aren&apos;t neural networks, and learning isn&apos;t gradient descent.</p>
            <p>But the psychological parallel is fascinating.</p>
            <p>A healthy learning system uses <strong className="text-white">error as information</strong>.</p>
            <p>A manipulative system can turn <strong className="text-white">error into fear</strong>.</p>
            <p>That&apos;s the distinction that matters.</p>

            <h2 className="text-2xl font-bold text-white mt-8">The Problem Isn&apos;t Comparison</h2>

            <p>Comparison itself isn&apos;t bad.</p>
            <p>In fact, comparison can be extremely useful.</p>
            <p>Knowing where you currently stand can help you identify what to improve.</p>
            <p>A student might genuinely benefit from knowing:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “You understand this topic, but you&apos;re struggling with application-based questions.”
              </blockquote>
            </div>

            <p>That&apos;s useful information.</p>
            <p>The problem begins when <strong className="text-white">comparison becomes the product.</strong></p>
            <p>When the question changes from:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “Is my child learning?”
              </blockquote>
            </div>

            <p>to:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “Is my child ahead of everyone else?”
              </blockquote>
            </div>

            <p>Education can slowly become an <strong className="text-white">anxiety market</strong>.</p>
            <p>The benchmark keeps moving.</p>
            <p>There is always another student who scored higher.</p>
            <p>Another exam.</p>
            <p>Another rank.</p>
            <p>Another chapter you haven&apos;t mastered.</p>
            <p>Another test you haven&apos;t taken.</p>
            <p>And therefore, there is always another reason to feel behind.</p>

            <h2 className="text-2xl font-bold text-white mt-8">Technology Can Make This Even More Powerful</h2>

            <p>This is where educational technology needs to be particularly careful.</p>
            <p>An AI learning platform can know far more about a student&apos;s weaknesses than a traditional classroom ever could.</p>
            <p>It can know:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>which concepts they repeatedly get wrong,</li>
              <li>which questions take them too long,</li>
              <li>which chapters they avoid,</li>
              <li>where they lose marks,</li>
              <li>how their performance changes over time.</li>
            </ul>

            <p>Technically, that&apos;s incredibly powerful.</p>
            <p>But there is a dangerous version of it.</p>
            <p>Imagine opening an app and seeing:</p>
            <p><strong className="text-white">“You are weak in 17 concepts.”</strong></p>
            <p>Then:</p>
            <p><strong className="text-white">“You&apos;re behind 72% of students.”</strong></p>
            <p>Then a notification:</p>
            <p><strong className="text-white">“You haven&apos;t completed today&apos;s target.”</strong></p>
            <p>Then another:</p>
            <p><strong className="text-white">“Your peers are studying more than you.”</strong></p>

            <p>Every individual feature might look like good product design.</p>
            <p>Together, they can create something very different:</p>
            <p><strong className="text-white">a machine that continuously reminds a student that they are not enough.</strong></p>
            <p>That&apos;s not adaptive learning.</p>
            <p><strong className="text-white">That&apos;s anxiety with analytics.</strong></p>

            <h2 className="text-2xl font-bold text-white mt-8">The Difference Between Diagnosis and Manipulation</h2>

            <p>The same data can be used in two completely different ways.</p>
            <p>A system can say:</p>
            
            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">“You are weak in renal physiology. Let&apos;s identify exactly which concept is causing the problem and practise it.”</strong>
              </blockquote>
            </div>

            <p>Or it can say:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">“Your renal physiology score is in the bottom 30%.”</strong>
              </blockquote>
            </div>

            <p>The first creates a <strong className="text-white">path forward</strong>.</p>
            <p>The second creates a <strong className="text-white">status threat</strong>.</p>
            <p>One tells you what to do next.</p>
            <p>The other tells you how inadequate you are.</p>
            <p>That&apos;s a small difference in wording, but potentially a huge difference in psychology.</p>

            <h2 className="text-2xl font-bold text-white mt-8">The Learning System I Want to Build</h2>

            <p>This is something I&apos;ve started thinking about deeply while building educational technology.</p>
            <p>If we&apos;re going to use AI to understand a student&apos;s weaknesses, the goal shouldn&apos;t be to make the student feel inadequate.</p>
            <p>It should be:</p>
            <p><strong className="text-white">Understand → Diagnose → Explain → Practise → Improve.</strong></p>
            <p>Not:</p>
            <p><strong className="text-white">Compare → Frighten → Pressure → Sell.</strong></p>
            <p>A weakness should be treated as <strong className="text-white">information</strong>, not an identity.</p>
            <p>A wrong answer shouldn&apos;t mean:</p>
            
            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “I&apos;m bad at this.”
              </blockquote>
            </div>

            <p>It should mean:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “The system has found something I can work on.”
              </blockquote>
            </div>

            <p>That distinction is incredibly important.</p>
            <p>Because the best teacher doesn&apos;t constantly remind you that you&apos;re behind.</p>
            <p>The best teacher helps you understand <strong className="text-white">why</strong> you&apos;re behind, <strong className="text-white">what</strong> you&apos;re missing, and <strong className="text-white">what to do next.</strong></p>

            <h2 className="text-2xl font-bold text-white mt-8">From Loss to Learning</h2>

            <p>Maybe that&apos;s the part of the LLM analogy I find most interesting.</p>
            <p>In machine learning, loss isn&apos;t an insult.</p>
            <p>It&apos;s a signal.</p>
            <p>A higher loss doesn&apos;t mean the model is stupid.</p>
            <p>It means:</p>
            <p><strong className="text-white">there is more to learn.</strong></p>
            <p>I think education should work the same way.</p>
            <p>A student getting a question wrong shouldn&apos;t be made to feel smaller.</p>
            <p>The mistake should simply tell the system:</p>
            <p><strong className="text-white">“Here is where we need to teach differently.”</strong></p>
            <p>That&apos;s the kind of adaptive learning I believe technology should enable.</p>
            <p>Not systems that manufacture insecurity.</p>
            <p>Not endless rankings.</p>
            <p>Not artificial urgency.</p>
            <p>Not selling students the fear of being left behind.</p>
            <p>But systems that can look at a student&apos;s current state and calmly say:</p>
            
            <p><strong className="text-white">“Here is where you are.”</strong></p>
            <p><strong className="text-white">“Here is what you don&apos;t understand yet.”</strong></p>
            <p><strong className="text-white">“Here is why.”</strong></p>
            <p><strong className="text-white">“And here is the next step.”</strong></p>

            <p>Because ultimately, the best learning system shouldn&apos;t convince a student that they are behind.</p>
            <p><strong className="text-white">It should give them the clarity and confidence to move forward.</strong></p>
          </div>
        </article>
      </div>
    </div>
  );
}
