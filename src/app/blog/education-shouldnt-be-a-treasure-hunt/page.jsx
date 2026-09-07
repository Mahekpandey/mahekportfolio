import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("education-shouldnt-be-a-treasure-hunt");

export default function EducationShouldntBeATreasureHuntBlog() {
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
              Education Shouldn&apos;t Be a Treasure Hunt
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>September 7, 2026</span>
              <span>&bull;</span>
              <span>2 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/education-shouldnt-be-a-treasure-hunt.png"
              alt="Students trying to find the right textbook through complicated portals"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>Two days ago, I was working on the Bihar Eklavya app.</p>

            <p>
              My task was simple:{" "}
              <strong className="text-white">help students find their textbooks.</strong>
            </p>

            <p>I thought this would be easy.</p>

            <p>It wasn&apos;t.</p>

            <p>
              I started looking for Bihar textbooks online and quickly found myself jumping
              between different pages, portals, book lists, filters, PDFs and links.
            </p>

            <p>The books were there.</p>

            <p>
              But finding the right book, for the right class, for the right subject, in a
              way that felt obvious to a student, was surprisingly difficult.
            </p>

            <p>And that made me think.</p>

            <p>
              We talk a lot about <strong className="text-white">access to education</strong>.
            </p>

            <p>
              We talk about digital classrooms, AI tutors, smart learning, online content
              and digital India.
            </p>

            <p>But sometimes, access is much simpler than that.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">
                  Can a student find their textbook without struggling?
                </strong>
              </blockquote>
            </div>

            <p>
              The irony is that the student is expected to navigate an increasingly
              complicated digital world just to reach the very first thing they need to
              study.
            </p>

            <p>And maybe this reflects something bigger about our education system.</p>

            <p>
              We have built a system around{" "}
              <strong className="text-white">
                classes, subjects, chapters, examinations and marks.
              </strong>
            </p>

            <p>But somewhere along the way, we forgot to ask:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">
                  How does a student actually experience all of this?
                </strong>
              </blockquote>
            </div>

            <p>
              A government portal can have thousands of resources and still feel
              inaccessible.
            </p>

            <p>A textbook can be freely available and still be difficult to discover.</p>

            <p>
              And a curriculum can be designed for students without necessarily being
              designed <em className="text-neutral-200">around</em> students.
            </p>

            <p>
              India&apos;s education policies have spoken about flexibility, experiential
              learning and moving beyond rote learning.
            </p>

            <p>
              But sometimes, before we completely redesign how a student learns, perhaps we
              should solve something more basic.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">Make learning easier to reach.</strong>
              </blockquote>
            </div>

            <p>Because education shouldn&apos;t be a treasure hunt.</p>

            <p>
              A student shouldn&apos;t need to know which portal hosts the book, which category
              it belongs to, or which obscure link leads to the PDF.
            </p>

            <p>They should simply be able to say:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                <strong className="text-white">
                  &quot;I am in Class 8. I need my Science textbook.&quot;
                </strong>
              </blockquote>
            </div>

            <p>And get it.</p>

            <p>
              Maybe good educational technology isn&apos;t always about adding more
              intelligence.
            </p>

            <p>
              Sometimes, it&apos;s about removing the unnecessary struggle between a student
              and the thing they came to learn.
            </p>

            <p>
              <strong className="text-white">
                The best education system isn&apos;t necessarily the one with the most content.
              </strong>
            </p>

            <p>
              <strong className="text-white">
                It&apos;s the one where a student can actually find their way to it.
              </strong>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
