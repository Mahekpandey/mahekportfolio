import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata(
  "beyond-winning-sentinel-hackathon-2026"
);

export default function BeyondWinningSentinelHackathonBlog() {
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
              Beyond Winning: My Experience at Sentinel Hackathon 2026
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>October 16, 2026</span>
              <span>&bull;</span>
              <span>4 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/beyond-winning-sentinel-hackathon-2026.png"
              alt="Beyond Winning: My Experience at Sentinel Hackathon 2026"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p className="text-xl font-medium text-neutral-200">
              Sometimes, the most valuable experiences are the ones where you
              don&apos;t come home with a trophy.
            </p>

            <p>
              Recently, I had the opportunity to participate in the Sentinel
              Hackathon 2026, held at iHub Gujarat, Ahmedabad. It was an
              experience filled with excitement, challenges, learning,
              teamwork, and, ultimately, a little disappointment.
            </p>

            <p>
              But looking back, I feel there was much more to this journey than
              just the final result.
            </p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              The Beginning of the Journey
            </h2>

            <p>
              Getting selected for the offline round was itself an exciting
              moment. Knowing that we would get the opportunity to present our
              solution, interact with other talented developers, and work on a
              real-world problem gave us plenty of motivation.
            </p>

            <p>
              Our team, <strong className="text-white">Eklavya</strong>, had
              been working on DRISHTI, a solution aimed at bringing fragmented
              CCTV infrastructure together through a unified video management
              and analytics platform.
            </p>

            <p>
              The idea was not just to build another application, but to
              explore how technology could make a meaningful difference in
              real-world policing and public safety.
            </p>

            <p>
              From discussing ideas and planning the architecture to preparing
              for the final presentation, every stage came with its own
              challenges.
            </p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              The Hackathon Experience
            </h2>

            <p>
              Travelling to Ahmedabad and arriving at iHub Gujarat was exciting
              in itself.
            </p>

            <p>
              Being surrounded by people who shared the same passion for
              technology and problem-solving created a completely different
              environment from our usual day-to-day work.
            </p>

            <p>
              There were teams with different approaches, interesting ideas,
              and unique ways of solving problems.
            </p>

            <p>
              One thing I particularly enjoyed was seeing how differently
              people think when given the same problem statement.
            </p>

            <p>
              For me, hackathons have never been only about writing code. They
              are also about making decisions under pressure, communicating
              ideas, managing time, and trusting your teammates.
            </p>

            <p>And this hackathon reinforced that belief.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              The Challenges and the Learning
            </h2>

            <p>
              Working on a solution that involves multiple technical
              components is never straightforward.
            </p>

            <p>
              There are always moments when something doesn&apos;t work as
              expected, when priorities need to change, or when you realize
              that an idea that sounded simple requires much more effort to
              implement.
            </p>

            <p>
              These moments test more than technical knowledge. They test
              patience, adaptability, and teamwork.
            </p>

            <p>
              During this experience, I learned more about approaching
              large-scale problems, thinking beyond a working prototype, and
              presenting a technical solution in a way that communicates its
              actual value.
            </p>

            <p>
              I also realized how important it is to balance technical
              execution with clarity, usability, and the overall vision of a
              product.
            </p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              The Result Wasn&apos;t What We Hoped For
            </h2>

            <p>Unfortunately, we didn&apos;t win.</p>

            <p>And yes, it was disappointing.</p>

            <p>
              When you put your time, effort, and energy into something,
              naturally you hope for a positive outcome.
            </p>

            <p>
              I personally felt that disappointment because I knew how much we
              had invested in preparing for this opportunity.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                One result doesn&apos;t define the effort, the skills, or the
                potential of a team.
              </blockquote>
            </div>

            <p>
              There are things we could have done better, and there are lessons
              I will definitely carry into future competitions.
            </p>

            <p>
              Rather than seeing this as a failure, I see it as an experience
              that showed me where I can improve.
            </p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              More Than Just a Competition
            </h2>

            <p>
              One of the best parts of this journey was getting to meet people,
              exchange ideas, and make new connections.
            </p>

            <p>
              Conversations with other participants and exposure to different
              technical approaches made the experience worthwhile beyond the
              competition itself.
            </p>

            <p>
              As a software engineer, I spend a lot of time building,
              debugging, and improving systems. But opportunities like these
              remind me why I enjoy technology in the first place: the
              possibility of solving meaningful problems alongside people who
              are equally passionate about building things.
            </p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              What I Take Away
            </h2>

            <p>
              This experience taught me that growth doesn&apos;t always come
              with recognition.
            </p>

            <p>
              Sometimes, it comes through challenges, mistakes, uncomfortable
              moments, and results you didn&apos;t expect.
            </p>

            <p>
              I&apos;m grateful to my teammates for the effort, collaboration,
              and memories we shared throughout this journey.
            </p>

            <p>
              We may not have achieved the result we wanted, but we gained
              experience, perspective, and connections that will stay with us.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                We didn&apos;t return with a trophy, but we definitely returned
                with lessons, memories, and a stronger motivation to build
                something even better.
              </blockquote>
            </div>

            <p>And for me, that&apos;s what makes this journey worth remembering.</p>

            <p className="text-xl font-semibold text-white">
              On to the next challenge. 🚀
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
