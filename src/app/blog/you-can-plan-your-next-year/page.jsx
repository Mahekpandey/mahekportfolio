import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("you-can-plan-your-next-year");

export default function YouCanPlanYourNextYearBlog() {
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
              You Can Plan Your Next Year. Life Might Have Other Plans.
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>August 7, 2026</span>
              <span>&bull;</span>
              <span>6 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/you-can-plan-your-next-year.png"
              alt="Planning the next year while life takes its own path"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              When I started engineering, I thought I had a pretty good idea of how the next four
              years would go.
            </p>

            <p>Study.</p>
            <p>Get internships.</p>
            <p>Build projects.</p>
            <p>Get a good job.</p>
            <p>Graduate.</p>

            <p>It sounded simple.</p>

            <p>
              Like most students, I had a rough picture of where I wanted to be by the time
              engineering ended.
            </p>

            <p>But looking back now, almost none of it happened exactly the way I imagined.</p>

            <p>And maybe that&apos;s one of the most important things engineering taught me.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                You can plan your future, but you can&apos;t plan how you&apos;ll get there.
              </blockquote>
            </div>

            <hr className="border-white/10 my-10" />

            <p>I still remember my first paycheck.</p>

            <p>It was &#8377;2,000.</p>

            <p>
              I was in my second year of engineering, and getting an internship as a fresher
              wasn&apos;t easy. I wasn&apos;t the student who studied the most, and I definitely didn&apos;t
              have everything figured out.
            </p>

            <p>But when I received that &#8377;2,000, I didn&apos;t think about how small the amount was.</p>

            <p>I thought:</p>

            <p className="text-xl font-semibold text-white">&quot;Finally, I&apos;ve started.&quot;</p>

            <p>That was enough.</p>

            <p>At the time, I had no idea where that first internship would lead.</p>

            <p>I didn&apos;t know what opportunities would come next.</p>

            <p>I didn&apos;t know which skills would become important.</p>

            <p>I didn&apos;t know what kind of work I&apos;d eventually be doing.</p>

            <p>I was simply taking the next step.</p>

            <p>And that step eventually led to another one.</p>

            <p>And another.</p>

            <p>
              A few years later, I found myself paying my final-year engineering fees, running into
              lakhs, from what I had earned during my second and third years.
            </p>

            <p>
              If someone had shown me that picture when I was earning my first &#8377;2,000, I probably
              wouldn&apos;t have believed them.
            </p>

            <p>The distance between those two moments was created one small decision at a time.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              We are constantly planning a future that doesn&apos;t exist yet.
            </h2>

            <p>There&apos;s something funny about being an engineering student.</p>

            <p>We are always thinking about the next milestone.</p>

            <p>&quot;Next month I&apos;ll learn this.&quot;</p>

            <p>&quot;Next semester I&apos;ll build that.&quot;</p>

            <p>&quot;After this internship, I&apos;ll do this.&quot;</p>

            <p>&quot;By the end of the year, I&apos;ll be here.&quot;</p>

            <p>I&apos;ve done it too.</p>

            <p>We make plans for the next month, the next semester, the next year.</p>

            <p>And then life happens.</p>

            <p>An unexpected opportunity appears.</p>

            <p>A plan doesn&apos;t work.</p>

            <p>Someone introduces you to something completely different.</p>

            <p>You discover that you enjoy something you never considered before.</p>

            <p>You stop doing something you were certain you&apos;d continue.</p>

            <p>Suddenly, the plan you made three months ago doesn&apos;t make sense anymore.</p>

            <p>And you have to make a new one.</p>

            <p>I used to think changing plans meant I wasn&apos;t being consistent.</p>

            <p>Now I think it means I&apos;m paying attention.</p>

            <p>Because how can you make a perfect plan for a future you haven&apos;t experienced yet?</p>

            <p>You can&apos;t.</p>

            <p>You can only make the best decision with the information you have today.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              Engineering teaches you this in a strange way.
            </h2>

            <p>You start with a problem.</p>

            <p>You make an approach.</p>

            <p>You write some code.</p>

            <p>It doesn&apos;t work.</p>

            <p>You debug it.</p>

            <p>You try another approach.</p>

            <p>Maybe you realise your original idea was wrong.</p>

            <p>So you change it.</p>

            <p>Sometimes you throw away hours of work because you discover a much simpler solution.</p>

            <p>And eventually, you learn something important:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                The goal was never to follow the original plan perfectly.
              </blockquote>
            </div>

            <p>The goal was to reach the right outcome.</p>

            <p>I think life works the same way.</p>

            <p>We sometimes become too attached to the path we&apos;ve imagined.</p>

            <p>But the path is not the destination.</p>

            <p>If something changes, you don&apos;t necessarily have to give up.</p>

            <p>Sometimes you just need to adjust.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              The most drastic changes often don&apos;t feel drastic while they&apos;re happening.
            </h2>

            <p>When you&apos;re living through them, most changes feel small.</p>

            <p>One internship.</p>

            <p>One project.</p>

            <p>One person you meet.</p>

            <p>One decision to try something new.</p>

            <p>One opportunity you almost didn&apos;t take.</p>

            <p>One rejection that forces you to try something else.</p>

            <p>None of these moments necessarily feel life-changing at the time.</p>

            <p>But years later, when you look back, you realise they completely changed your direction.</p>

            <p>That&apos;s what surprises me the most.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                We often understand the importance of a moment only after it has passed.
              </blockquote>
            </div>

            <p>My &#8377;2,000 paycheck didn&apos;t feel like the beginning of a story.</p>

            <p>It just felt like a first salary.</p>

            <p>But looking back, it was a beginning.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              So I&apos;ve stopped trying to predict everything.
            </h2>

            <p>I still make plans.</p>

            <p>I still think about what I want to achieve next month and next year.</p>

            <p>I still set goals.</p>

            <p>But I&apos;ve become much more comfortable knowing that those plans might change.</p>

            <p>Maybe I&apos;ll discover something better.</p>

            <p>Maybe something won&apos;t work.</p>

            <p>Maybe an opportunity will take me somewhere I didn&apos;t expect.</p>

            <p>Maybe I&apos;ll have to start again.</p>

            <p>That&apos;s okay.</p>

            <p>I don&apos;t think the goal is to have your entire life figured out at 21 or 22.</p>

            <p>The goal is to become someone who can handle whatever comes next.</p>

            <p>Someone who can learn.</p>

            <p>Adapt.</p>

            <p>Start again.</p>

            <p>Keep moving.</p>

            <hr className="border-white/10 my-10" />

            <p>
              Looking back at my engineering journey, the biggest lesson wasn&apos;t a particular
              programming language, framework, or project.
            </p>

            <p>
              It was learning that{" "}
              <strong className="text-white">progress rarely happens according to plan.</strong>
            </p>

            <p>Sometimes the opportunity you wanted doesn&apos;t come.</p>

            <p>Sometimes an unexpected one does.</p>

            <p>Sometimes the thing you thought would take a year happens in a month.</p>

            <p>Sometimes something you planned for months disappears overnight.</p>

            <p>
              And sometimes a &#8377;2,000 beginning eventually takes you somewhere you never imagined.
            </p>

            <p>So make the plan.</p>

            <p>Set the goal.</p>

            <p>Think about the future.</p>

            <p>But don&apos;t be afraid when the plan changes.</p>

            <p>Because it probably will.</p>

            <p>And maybe that&apos;s not a failure of the plan.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                Maybe that&apos;s just how life works.
              </blockquote>
            </div>

            <p>You don&apos;t need to know exactly where you&apos;ll be five years from now.</p>

            <p>You just need to make the next good decision.</p>

            <p>Then another.</p>

            <p>Then another.</p>

            <p>
              And one day, you might look back and realise that all those small, unplanned turns
              brought you somewhere much better than the place you originally planned to go.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
