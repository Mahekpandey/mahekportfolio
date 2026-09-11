import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("the-day-i-lost-my-favourite-swimming-goggles");

export default function TheDayILostMyFavouriteSwimmingGogglesBlog() {
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
              The Day I Lost My Favourite Swimming Goggles
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>September 11, 2026</span>
              <span>&bull;</span>
              <span>3 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/the-day-i-lost-my-favourite-swimming-goggles.png"
              alt="Swimming goggles saved for the perfect day"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>I recently lost my favourite pair of swimming goggles.</p>

            <p>The funny part?</p>

            <p>I barely used them.</p>

            <p>
              I had bought them because I really liked them. They felt special, so I kept them safe.
            </p>

            <p>
              I thought I would use them on the <em className="text-white">perfect swimming day</em>.
            </p>

            <p>A better day.</p>
            <p>A proper day.</p>
            <p>A day when everything felt right.</p>

            <p>And somehow, while trying so hard to save them for that perfect day, I lost them.</p>

            <p>It sounds silly.</p>

            <p>But it made me think about how often we do exactly the same thing with our lives.</p>

            <hr className="border-white/10 my-10" />

            <p>Growing up, I&apos;ve seen this everywhere.</p>

            <p>A new remote comes with a plastic cover, and we keep the plastic on it.</p>

            <p>A new sofa gets covered so it doesn&apos;t get dirty.</p>

            <p>
              A new phone stays inside a case and sometimes even has the screen protector untouched
              for weeks.
            </p>

            <p>Good clothes are kept for &quot;special occasions.&quot;</p>

            <p>
              Nice crockery sits inside a cupboard because{" "}
              <em className="text-white">&quot;guests ke time use karenge.&quot;</em>
            </p>

            <p>And sometimes, we do the same with our own lives.</p>

            <p>We save the trip for later.</p>

            <p>We save the expensive perfume for a special day.</p>

            <p>We wait to wear our favourite clothes.</p>

            <p>We keep postponing the thing we really want to do.</p>

            <p>We keep thinking:</p>

            <p className="text-xl font-semibold text-white">&quot;Not today. Maybe someday.&quot;</p>

            <p>But life doesn&apos;t really work like that.</p>

            <hr className="border-white/10 my-10" />

            <p>The plastic cover can protect the sofa, but it cannot protect time.</p>

            <p>
              The goggles could have stayed perfect forever, but they couldn&apos;t guarantee another
              swimming day.
            </p>

            <p>
              And sometimes, while protecting things from being used, we forget that{" "}
              <strong className="text-white">the whole point of having them was to use them.</strong>
            </p>

            <p>Maybe we should stop waiting for the perfect day.</p>

            <p>Use the good plates.</p>

            <p>Wear the nice clothes.</p>

            <p>Take the trip.</p>

            <p>Call the person.</p>

            <p>Open the book.</p>

            <p>Go swimming.</p>

            <p>Use the things you&apos;ve been saving.</p>

            <p>
              Because the truth is,{" "}
              <strong className="text-white">
                today is also a day you once thought would be &quot;someday.&quot;
              </strong>
            </p>

            <hr className="border-white/10 my-10" />

            <p>My favourite swimming goggles taught me a very small lesson:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                Don&apos;t protect your life so much that you forget to live it.
              </blockquote>
            </div>

            <p>Use things.</p>

            <p>Make memories.</p>

            <p>Let the sofa get a little dirty.</p>

            <p>Let the clothes get worn.</p>

            <p>Let the plates get used.</p>

            <p>And most importantly&mdash;</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                Let your life be lived, not preserved.
              </blockquote>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
