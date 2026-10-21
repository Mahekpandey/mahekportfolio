import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata(
  "i-knew-nothing-about-medicine-but-i-wanted-to-figure-it-out"
);

export default function FiguringOutMedicineBlog() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Link
          href="/#blogs"
          className="mb-8 inline-flex items-center text-neutral-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-white">
              I Knew Nothing About Medicine. But I Wanted to Figure It Out.
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>October 21, 2026</span>
              <span>&bull;</span>
              <span>3 min read</span>
            </div>
          </div>

          <div className="mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-[#f6f3eb]">
            <img
              src="/blog/eklavya-anatomy-lab-thumbnail_1.png"
              alt="Eklavya Anatomy Lab showing an interactive 3D model of the human heart"
              className="h-full w-full object-contain object-center"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>Nobody tells you how attached you can get to a product you&apos;re building.</p>

            <p>
              When I started working on Eklavya Medical, I knew <em>nothing</em> about
              medicine. Zero. The syllabus was massive, the concepts were unfamiliar,
              and honestly, sometimes I wondered how I was even going to understand what
              students needed.
            </p>

            <p>
              But there was this little voice in my head that kept saying, <em>I&apos;ll
              figure it out. I always do.</em> (A little confidence never hurts. :))
            </p>

            <p>
              And so I did what developers do best. I explored, experimented, broke
              things, fixed them, and kept asking, <em>What else can we make better?</em>
            </p>

            <p>
              Somewhere between those late nights and endless ideas, I stopped looking
              at it as just a project. I started caring about it.
            </p>

            <p>
              I found myself thinking about students, their struggles, their exams, and
              whether something we built could actually make their lives a little easier.
            </p>

            <p>And that&apos;s when I realised something.</p>

            <div className="my-8 border-l-4 border-blue-500 pl-6">
              <p className="text-xl">
                <strong className="text-white">
                  Writing code is one thing. Building something people genuinely care
                  about is a completely different game.
                </strong>
              </p>
            </div>

            <p>
              You can build a feature in a few hours. But understanding what students
              actually need, making them trust your product, getting them to use it, and
              figuring out how to reach them? That&apos;s a whole different challenge.
            </p>

            <p>
              Even when your product is free, getting people to use it isn&apos;t easy. You
              can build something useful and still struggle to get it noticed.
            </p>

            <p>That&apos;s the part nobody really prepares you for as a developer.</p>

            <p>
              You don&apos;t just need to think like an engineer anymore. You need to think
              like a student, a product builder, and sometimes even a marketer.
            </p>

            <p>I&apos;m still learning. Still exploring. Still figuring things out.</p>

            <p>But this experience has changed how I look at development.</p>

            <p>
              I don&apos;t just want to build things that work. I want to build things that{" "}
              <strong className="text-white">matter</strong>.
            </p>

            <p>
              Because somewhere out there, there&apos;s a student who might genuinely benefit
              from something we&apos;re building today.
            </p>

            <p>And honestly? That&apos;s what makes all those late nights worth it.</p>

            <a
              href="https://medical.eklavya.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-blue-400 no-underline transition-colors hover:text-blue-300"
            >
              Explore Eklavya Medical
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
