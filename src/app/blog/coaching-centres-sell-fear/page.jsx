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
            <p>They wanted a <strong className="text-white">better career, better opportunities, and some certainty about the future.</strong></p>
            <p>And that&apos;s where I noticed something that has stayed with me.</p>
            <p>Many coaching centres don&apos;t start by telling parents how capable their child is.</p>
            <p>They start by showing them <strong className="text-white">where their child is falling behind.</strong></p>
            <p>Your child scored 90?</p>
            <p>Someone else scored 95.</p>
            <p>Your child is good at mathematics?</p>
            <p>But can they solve this advanced problem?</p>
            <p>Your child is already performing well?</p>
            <p><strong className="text-white">Imagine how much better they could perform with us.</strong></p>
            <p>Slowly, something changes.</p>
            <p>A student who was doing well starts feeling like they aren&apos;t doing enough.</p>
            <p>A parent who was satisfied starts worrying.</p>
            <p><strong className="text-white">First, they create the gap. Then they sell themselves as the solution.</strong></p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “Don&apos;t worry. We can fix this.”
              </blockquote>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8">The Algorithm of Fear</h2>
            
            <p>If I had to reduce this process to an algorithm, it might look like this:</p>
            
            <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm text-neutral-300 font-mono">
{`Student Performance
        ↓
Find a Weakness
        ↓
Compare With a Benchmark
        ↓
Highlight the Gap
        ↓
Make the Gap Feel Bigger
        ↓
Create Urgency
        ↓
Offer the Solution
        ↓
Enroll`}
            </pre>

            <p>And interestingly, this reminds me of something completely different:</p>
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
            <p>But there is an important difference.</p>
            <p>A healthy learning system uses <strong className="text-white">error as information</strong>.</p>
            <p>A manipulative system can use <strong className="text-white">error as fear</strong>.</p>
            <p>That&apos;s where things go wrong.</p>

            <h2 className="text-2xl font-bold text-white mt-8">The Problem Isn&apos;t Comparison</h2>

            <p>Comparison itself isn&apos;t bad.</p>
            <p>Knowing where you stand can help you understand what you need to improve.</p>
            <p>For example:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “You understand this topic, but you&apos;re struggling with application-based questions.”
              </blockquote>
            </div>

            <p>That&apos;s useful.</p>
            <p>But the problem starts when <strong className="text-white">comparison becomes the product.</strong></p>
            <p>Instead of asking:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “Is my child learning?”
              </blockquote>
            </div>

            <p>the question becomes:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “Is my child ahead of everyone else?”
              </blockquote>
            </div>

            <p>And there is always someone ahead.</p>
            <p>Another student with higher marks.</p>
            <p>Another rank.</p>
            <p>Another exam.</p>
            <p>Another chapter you haven&apos;t mastered.</p>
            <p>Another test you haven&apos;t taken.</p>
            <p>So there is always another reason to feel behind.</p>
            <p><strong className="text-white">That&apos;s how education can turn into an anxiety market.</strong></p>

            <h2 className="text-2xl font-bold text-white mt-8">Technology Can Make This Even Worse</h2>

            <p>This is where educational technology needs to be careful.</p>
            <p>An AI learning platform can know much more about a student&apos;s weaknesses than a traditional classroom.</p>
            <p>It can know:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>which concepts they repeatedly get wrong,</li>
              <li>which questions take them too long,</li>
              <li>which chapters they avoid,</li>
              <li>where they lose marks,</li>
              <li>how their performance changes over time.</li>
            </ul>

            <p>That&apos;s incredibly powerful.</p>
            <p>But imagine using that information like this:</p>
            <p><strong className="text-white">“You are weak in 17 concepts.”</strong></p>
            <p>Then:</p>
            <p><strong className="text-white">“You&apos;re behind 72% of students.”</strong></p>
            <p>Then:</p>
            <p><strong className="text-white">“You haven&apos;t completed today&apos;s target.”</strong></p>
            <p>Then:</p>
            <p><strong className="text-white">“Your peers are studying more than you.”</strong></p>

            <p>Each feature might look harmless on its own.</p>
            <p>Together, they can create something very different:</p>
            <p><strong className="text-white">a system that constantly reminds students that they are not enough.</strong></p>
            <p>That&apos;s not adaptive learning.</p>
            <p><strong className="text-white">That&apos;s anxiety with analytics.</strong></p>

            <h2 className="text-2xl font-bold text-white mt-8">The Difference Between Diagnosis and Manipulation</h2>

            <p>The same data can be used in two completely different ways.</p>
            <p>A system can say:</p>
            
            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">“You are weak in renal physiology. Let&apos;s find the exact concept you&apos;re struggling with and practise it.”</strong>
              </blockquote>
            </div>

            <p>Or it can say:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">“Your renal physiology score is in the bottom 30%.”</strong>
              </blockquote>
            </div>

            <p>The first gives you a <strong className="text-white">path forward</strong>.</p>
            <p>The second creates a <strong className="text-white">status threat</strong>.</p>
            <p>One tells you what to do next.</p>
            <p>The other tells you how far behind you are.</p>
            <p>That&apos;s a small difference in wording, but a huge difference in psychology.</p>

            <h2 className="text-2xl font-bold text-white mt-8">The Learning System I Want to Build</h2>

            <p>This is something I&apos;ve started thinking about deeply while building educational technology.</p>
            <p>If we&apos;re going to use AI to understand a student&apos;s weaknesses, we shouldn&apos;t use those weaknesses to make the student feel smaller.</p>
            <p>We should use them to help the student improve.</p>
            <p>The system should be:</p>
            <p><strong className="text-white">Understand → Diagnose → Explain → Practise → Improve.</strong></p>
            <p>Not:</p>
            <p><strong className="text-white">Compare → Frighten → Pressure → Sell.</strong></p>
            <p>A weakness should be treated as <strong className="text-white">information, not an identity.</strong></p>
            <p>A wrong answer shouldn&apos;t mean:</p>
            
            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “I&apos;m bad at this.”
              </blockquote>
            </div>

            <p>It should mean:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                “The system found something I need to work on.”
              </blockquote>
            </div>

            <p>That&apos;s what good adaptive learning should do.</p>

            <h2 className="text-2xl font-bold text-white mt-8">From Loss to Learning</h2>

            <p>Maybe that&apos;s the part of the LLM analogy I find most interesting.</p>
            <p>In machine learning, loss isn&apos;t an insult.</p>
            <p>It&apos;s a signal.</p>
            <p>A higher loss doesn&apos;t mean the model is stupid.</p>
            <p>It means:</p>
            <p><strong className="text-white">there is more to learn.</strong></p>
            <p>Education should work the same way.</p>
            <p>A student getting a question wrong shouldn&apos;t become a reason to make them feel smaller.</p>
            <p>The mistake should simply tell the system:</p>
            <p><strong className="text-white">“Here is where we need to teach differently.”</strong></p>
            <p>That&apos;s the kind of AI-powered education I want to build.</p>
            <p>Not systems that manufacture insecurity.</p>
            <p>Not endless rankings.</p>
            <p>Not artificial urgency.</p>
            <p>Not selling students the fear of being left behind.</p>
            <p>But systems that can simply say:</p>
            
            <p><strong className="text-white">“Here is where you are.”</strong></p>
            <p><strong className="text-white">“Here is what you don&apos;t understand yet.”</strong></p>
            <p><strong className="text-white">“Here is why.”</strong></p>
            <p><strong className="text-white">“And here is what you should do next.”</strong></p>

            <p>Because ultimately, the best learning system shouldn&apos;t convince a student that they are behind.</p>
            <p><strong className="text-white">It should give them the clarity and confidence to move forward.</strong></p>
          </div>
        </article>
      </div>
    </div>
  );
}
