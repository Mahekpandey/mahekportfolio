import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("are-we-educating-students-or-training-them-for-a-job");

export default function AreWeEducatingStudentsOrTrainingThemForAJobBlog() {
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
              Are We Educating Students, or Training Them for a Job?
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>September 11, 2026</span>
              <span>&bull;</span>
              <span>3 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/are-we-educating-students-or-training-them-for-a-job.png"
              alt="Students exploring education beyond job training"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>I sometimes wonder what education is actually preparing us for.</p>

            <p>We spend years in school.</p>
            <p>Then years in college.</p>
            <p>Then we spend more years collecting degrees, certificates, internships and skills.</p>

            <p>
              And somewhere along the way, education quietly becomes{" "}
              <strong className="text-white">job training</strong>.
            </p>

            <p>Learn this because it will come in the exam.</p>
            <p>Get this grade because it will help with college.</p>
            <p>Choose this stream because it has better career options.</p>
            <p>Learn these skills because companies want them.</p>

            <p>But what if a student doesn&apos;t want any of that?</p>

            <p>What if a 12-year-old wants to become a scientist?</p>

            <p>What if another wants to spend their life understanding history?</p>

            <p>
              What if someone wants to build things, paint, write, explore space, study animals,
              understand the ocean or simply invent something that doesn&apos;t exist yet?
            </p>

            <p>
              Why do we make everyone walk through almost the same educational tunnel before
              allowing them to discover what they actually care about?
            </p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              The world has changed. Education hasn&apos;t changed enough.
            </h2>

            <p>Technology is moving incredibly fast.</p>

            <p>AI is changing how we work.</p>
            <p>Robotics is changing industries.</p>
            <p>Science is discovering things we couldn&apos;t imagine a few decades ago.</p>

            <p>But much of education still feels designed around an older world.</p>

            <p>
              We teach students to remember answers when the world is increasingly asking them to{" "}
              <strong className="text-white">find better questions</strong>.
            </p>

            <p>
              We teach them to compete for marks when the real world rewards curiosity, creativity,
              communication and the ability to learn continuously.
            </p>

            <p>And the biggest problem isn&apos;t even that the curriculum is outdated.</p>

            <p>
              It&apos;s that{" "}
              <strong className="text-white">
                we decide what a child should learn before the child has had enough freedom to
                discover what they love.
              </strong>
            </p>

            <p>Imagine if we approached education differently.</p>

            <p>
              A child who loves science shouldn&apos;t just{" "}
              <em className="text-white">study science</em> for a few hours a week.
            </p>

            <p>They should be surrounded by it.</p>

            <p>Experiments.</p>
            <p>Laboratories.</p>
            <p>Nature.</p>
            <p>Astronomy.</p>
            <p>Mathematics.</p>
            <p>Scientific papers explained at their level.</p>
            <p>Questions they are allowed to investigate.</p>

            <p>
              If they want to become a scientist, why shouldn&apos;t their education gradually become
              more scientific?
            </p>

            <p>Not because we are forcing them into a career.</p>

            <p>
              But because we are giving them the freedom to{" "}
              <strong className="text-white">go deeper into what makes them curious.</strong>
            </p>

            <hr className="border-white/10 my-10" />

            <p>
              Of course, children need foundations. Reading, mathematics, science, history and
              other subjects matter.
            </p>

            <p>
              But foundations shouldn&apos;t become <strong className="text-white">walls</strong>.
            </p>

            <p>
              The purpose of education should not be to make every student equally good at
              everything.
            </p>

            <p>It should be to give every student enough exposure to discover:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                This is what I want to understand.
              </blockquote>
            </div>

            <p>And then give them the freedom to chase it.</p>

            <p>
              Because when education becomes completely controlled by exams, marks, jobs and
              expectations, something very important gets lost.
            </p>

            <p className="text-xl font-semibold text-white">Choice.</p>

            <p>
              And without choice, education can start feeling less like freedom and more like a very
              sophisticated form of obedience.
            </p>

            <p>Study what you&apos;re told.</p>
            <p>Choose what society approves.</p>
            <p>Get the degree.</p>
            <p>Get the job.</p>
            <p>Repeat.</p>

            <p>We call it education.</p>

            <p>
              Sometimes, I wonder if we should call it{" "}
              <strong className="text-white">training for compliance</strong>.
            </p>

            <hr className="border-white/10 my-10" />

            <p>
              Maybe the future of education isn&apos;t about teaching children{" "}
              <em className="text-white">more</em>.
            </p>

            <p>
              Maybe it&apos;s about giving them more{" "}
              <strong className="text-white">freedom to explore, question and choose</strong>.
            </p>

            <p>Because the goal of education shouldn&apos;t be to create better employees.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                It should be to create people who know how to think&mdash;and have the freedom to
                decide what they want to think about.
              </blockquote>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
