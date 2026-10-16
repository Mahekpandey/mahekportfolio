import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata(
  "the-engineering-culture-that-makes-you-better"
);

export default function EngineeringCultureBlog() {
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
              The Engineering Culture That Makes You Better
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>October 16, 2026</span>
              <span>&bull;</span>
              <span>4 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/the-engineering-culture-that-makes-you-better.png"
              alt="The Engineering Culture That Makes You Better"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              One thing I&apos;m increasingly grateful for while working on Eklavya
              Medical is the engineering culture I get to experience every day.
            </p>

            <p>
              As developers, we spend a lot of time talking about technologies,
              frameworks, architectures, deployments, and solving complex technical
              problems. But something I&apos;ve come to realise is that{" "}
              <strong className="text-white">
                the environment in which you solve problems matters just as much as
                the problems you solve.
              </strong>
            </p>

            <p>
              When you&apos;re building real products, you don&apos;t always have the
              answers. Sometimes, you spend hours debugging something that looks
              simple. Sometimes, your approach doesn&apos;t work. Sometimes, someone
              else sees a solution you completely missed.
            </p>

            <p>And that&apos;s where having the right team makes all the difference.</p>

            <p>
              I&apos;ve learned that a good engineering team isn&apos;t one where
              everyone is expected to know everything. It&apos;s one where you can ask
              questions without feeling embarrassed, admit that you don&apos;t
              understand something, challenge an approach respectfully, and learn
              from someone else&apos;s experience without feeling inferior.
            </p>

            <p>
              There&apos;s a big difference between an environment where developers
              compete to prove they&apos;re the smartest person in the room and one
              where they work together to solve the problem in front of them.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p className="text-xl">
                <strong className="text-white">
                  Healthy competition pushes you to improve. Unhealthy competition
                  makes you afraid to learn.
                </strong>
              </p>
            </div>

            <p>
              The best engineering discussions I&apos;ve experienced are the ones
              where people challenge each other&apos;s ideas, question assumptions,
              point out flaws, and keep exploring until they find a better solution.
              Someone might suggest an approach, another person might disagree, and
              a third might come up with something neither had considered. The goal
              isn&apos;t to win the argument. It&apos;s to get the solution right.
            </p>

            <p>That&apos;s something I genuinely value.</p>

            <p>
              Software engineering is full of things you don&apos;t know yet. New
              technologies emerge, systems become more complex, requirements change,
              and yesterday&apos;s solution might not work tomorrow. No matter how
              experienced you become, there will always be someone who knows
              something you don&apos;t.
            </p>

            <p>
              And I think that&apos;s a beautiful part of this profession. You never
              really stop learning.
            </p>

            <p>
              I&apos;m grateful to my teammates for the knowledge they share, the
              questions they encourage, the different perspectives they bring, and
              the way we can work through problems together. Every interaction,
              whether it&apos;s discussing an architecture decision, debugging an
              issue, reviewing code, or simply explaining a concept, becomes an
              opportunity to learn something new.
            </p>

            <p>
              As an engineer, you naturally want to become better at what you do. You
              want to write better code, design better systems, understand things
              more deeply, and build products that actually make a difference. But
              the people around you play a huge role in that journey.
            </p>

            <p>
              A supportive team doesn&apos;t mean everyone agrees with you. It means
              you can disagree without disrespect, make mistakes without being
              humiliated, and ask for help without feeling that you&apos;ve somehow
              failed.
            </p>

            <p>
              It means being surrounded by people who want the product to succeed
              more than they want individual credit.
            </p>

            <p>
              And when that culture exists, something interesting happens. People
              become more comfortable sharing ideas. Problems get discussed earlier.
              Knowledge spreads across the team. Developers become more confident in
              taking ownership, experimenting, and learning from mistakes.
            </p>

            <p>
              The result isn&apos;t just a happier workplace. It can be a stronger
              engineering team that builds better software.
            </p>

            <p>
              I&apos;m still early in my journey, and I know there is a lot left for me
              to learn. But experiences like these are teaching me that professional
              growth isn&apos;t just about the number of technologies you learn or the
              projects you complete. It&apos;s also about the people you work with, the
              questions you&apos;re encouraged to ask, and the freedom you have to
              figure things out.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p className="text-xl">
                <strong className="text-white">
                  A good workplace doesn&apos;t make you feel like you need to know
                  everything. It makes you feel comfortable learning anything.
                </strong>
              </p>
            </div>

            <p>
              And if there&apos;s one thing I want to carry forward throughout my
              engineering career, it&apos;s this: be the teammate who shares knowledge,
              encourages questions, challenges ideas respectfully, and helps others
              find solutions.
            </p>

            <p>
              Because at the end of the day, we aren&apos;t just building software
              together.
            </p>

            <p>We&apos;re learning, growing, and becoming better engineers together.</p>

            <p>And I&apos;m genuinely grateful for that.</p>
          </div>
        </article>
      </div>
    </div>
  );
}
