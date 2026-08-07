import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { createBlogMetadata } from "../blogMetadata";

export const metadata = createBlogMetadata("what-gradient-descent-taught-me-about-life");

function FormulaBlock() {
  return (
    <div className="my-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5 text-center">
      <p className="font-mono text-lg text-blue-100 sm:text-xl">
        &theta;<sub>new</sub> = &theta;<sub>old</sub> - &eta; &nabla;J(&theta;)
      </p>
    </div>
  );
}

export default function WhatGradientDescentTaughtMeAboutLifeBlog() {
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
              What Gradient Descent Taught Me About Life
            </h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>August 7, 2026</span>
              <span>&bull;</span>
              <span>8 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden bg-neutral-950 p-2 sm:p-3">
            <img
              src="/blog/what-gradient-descent-taught-me-about-life.png"
              alt="Gradient descent as a metaphor for learning from mistakes"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              I remember learning gradient descent and thinking it was just another machine learning
              algorithm I had to understand.
            </p>

            <p>There was a model.</p>
            <p>There were parameters.</p>
            <p>There was a loss function.</p>

            <p>And then there was a formula that looked unnecessarily complicated:</p>

            <FormulaBlock />

            <p>At the time, I was mostly concerned with understanding what each symbol meant.</p>

            <p>Today, I think about that formula a little differently.</p>

            <p>
              Because hidden inside those few symbols is an idea that has very little to do with
              machines.
            </p>

            <p>And a lot to do with us.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                Maybe learning is simply the process of becoming slightly better after every mistake.
              </blockquote>
            </div>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              A model doesn&apos;t get it right the first time
            </h2>

            <p>Imagine you&apos;re training a machine learning model.</p>

            <p>You give it some data and ask it to make a prediction.</p>

            <p>It makes one.</p>

            <p>Maybe it&apos;s completely wrong.</p>

            <p>The model doesn&apos;t panic.</p>

            <p>It doesn&apos;t decide that it&apos;s incapable of learning.</p>

            <p>It simply calculates how far its prediction was from the expected answer.</p>

            <p>
              That difference is called the <strong className="text-white">loss</strong>.
            </p>

            <p>Then comes the important part.</p>

            <p>
              The model changes its parameters slightly in a direction that should reduce that error.
            </p>

            <p>Mathematically, that&apos;s what gradient descent does:</p>

            <FormulaBlock />

            <p>Where:</p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">&theta;</strong> represents the model&apos;s parameters.
              </li>
              <li>
                <strong className="text-white">J(&theta;)</strong> represents the error or loss.
              </li>
              <li>
                <strong className="text-white">&nabla;J(&theta;)</strong> tells the model which
                direction the error increases.
              </li>
              <li>
                <strong className="text-white">&eta;</strong> is the learning rate &mdash; how big a
                step the model should take.
              </li>
            </ul>

            <p>Then it tries again.</p>

            <p>And again.</p>

            <p>And again.</p>

            <p>Not one giant leap.</p>

            <p>
              <strong className="text-white">Millions of small corrections.</strong>
            </p>

            <p>Eventually, the model can get surprisingly good.</p>

            <p>And that&apos;s where I started seeing the connection with life.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              We learn in almost exactly the same way
            </h2>

            <p>Think about the first time you learned something difficult.</p>

            <p>Maybe it was programming.</p>

            <p>Maybe mathematics.</p>

            <p>Maybe speaking in front of people.</p>

            <p>Maybe your first internship.</p>

            <p>Maybe your first real project.</p>

            <p>You probably weren&apos;t good at it initially.</p>

            <p>You made mistakes.</p>

            <p>You misunderstood things.</p>

            <p>You did things inefficiently.</p>

            <p>
              You probably looked at people who were already good at it and wondered how they made it
              look so easy.
            </p>

            <p>But then something happened.</p>

            <p>You tried again.</p>

            <p>You understood one thing you didn&apos;t understand before.</p>

            <p>You made a different mistake.</p>

            <p>You fixed that one.</p>

            <p>You tried again.</p>

            <p>And slowly, something changed.</p>

            <p>The thing that once seemed difficult became normal.</p>

            <p>That&apos;s learning.</p>

            <p>Not one huge moment where everything suddenly makes sense.</p>

            <p>
              Just <strong className="text-white">small corrections repeated over time.</strong>
            </p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              The interesting part is the gradient
            </h2>

            <p>The most beautiful part of gradient descent, for me, isn&apos;t even the formula.</p>

            <p>
              It&apos;s the idea of the <strong className="text-white">gradient</strong>.
            </p>

            <p>The gradient tells the model which direction it should move to reduce its error.</p>

            <p>Notice what it doesn&apos;t tell the model.</p>

            <p>It doesn&apos;t give it the entire path.</p>

            <p>It doesn&apos;t say:</p>

            <p className="text-xl italic text-neutral-200">
              &quot;Here is exactly where you will end up five years from now.&quot;
            </p>

            <p>It only says:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                From where you are right now, this direction is slightly better.
              </blockquote>
            </div>

            <p>Maybe that&apos;s all we need sometimes.</p>

            <p>We spend so much time trying to figure out our entire future.</p>

            <p>What job will I get?</p>

            <p>Where will I be in five years?</p>

            <p>What should I learn next?</p>

            <p>What if I make the wrong choice?</p>

            <p>What if I choose the wrong career?</p>

            <p>What if I fail?</p>

            <p>We want the entire map before taking the first step.</p>

            <p>But life rarely works like that.</p>

            <p>Sometimes you don&apos;t need the entire map.</p>

            <p>
              <strong className="text-white">
                You just need to know what the next better step is.
              </strong>
            </p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              Your learning rate matters too
            </h2>

            <p>There is another part of the formula that I find surprisingly relatable.</p>

            <p>
              The learning rate, <strong className="text-white">&eta;</strong>.
            </p>

            <p>It controls how big a step the model takes.</p>

            <p>If the learning rate is too small, learning can be painfully slow.</p>

            <p>
              If it&apos;s too large, the model can overshoot the solution and keep jumping around
              without settling down.
            </p>

            <p>And I think people can do the same thing.</p>

            <p>Sometimes we move too slowly because we&apos;re afraid of making mistakes.</p>

            <p>We wait until we&apos;re completely ready.</p>

            <p>We keep preparing.</p>

            <p>We keep planning.</p>

            <p>We tell ourselves we&apos;ll start when we know enough.</p>

            <p>But we never take the step.</p>

            <p>Other times, we want everything immediately.</p>

            <p>We want to become excellent in a month.</p>

            <p>We want the perfect job immediately.</p>

            <p>We want the perfect product immediately.</p>

            <p>We want years of experience without going through the years.</p>

            <p>We take huge jumps, get overwhelmed, and then wonder why things don&apos;t work.</p>

            <p>Maybe the answer isn&apos;t always to move faster.</p>

            <p>
              Maybe it&apos;s to find the <strong className="text-white">right step size</strong>.
            </p>

            <p>Small enough that you don&apos;t lose control.</p>

            <p>Big enough that you actually move forward.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              The same mistake isn&apos;t learning
            </h2>

            <p>There&apos;s one more thing I find important.</p>

            <p>Repeating something doesn&apos;t automatically mean you&apos;re learning.</p>

            <p>Imagine a model that keeps making the exact same mistake without changing anything.</p>

            <p>It can run a million iterations.</p>

            <p>It will still be wrong.</p>

            <p>Humans are not very different.</p>

            <p>You can study for hours without learning.</p>

            <p>You can write hundreds of lines of code without becoming a better engineer.</p>

            <p>
              You can attend dozens of interviews without improving if you never reflect on why they
              went wrong.
            </p>

            <p>The important part isn&apos;t simply repetition.</p>

            <p>
              It&apos;s <strong className="text-white">feedback</strong>.
            </p>

            <p>You do something.</p>

            <p>You see what went wrong.</p>

            <p>You understand why.</p>

            <p>You change your approach.</p>

            <p>Then you try again.</p>

            <p>That&apos;s what turns experience into learning.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              Maybe failure is just feedback
            </h2>

            <p>This changed the way I think about failure.</p>

            <p>We often attach our identity to our mistakes.</p>

            <p>We fail an exam and think:</p>

            <p className="text-xl italic text-neutral-200">&quot;I&apos;m not smart enough.&quot;</p>

            <p>We don&apos;t get an internship and think:</p>

            <p className="text-xl italic text-neutral-200">&quot;I&apos;m not good enough.&quot;</p>

            <p>We build something that nobody uses and think:</p>

            <p className="text-xl italic text-neutral-200">&quot;Maybe I can&apos;t build products.&quot;</p>

            <p>But a machine learning model doesn&apos;t think this way.</p>

            <p>It doesn&apos;t look at a high loss and conclude:</p>

            <p className="text-xl italic text-neutral-200">&quot;I am a bad model.&quot;</p>

            <p>The loss is simply information.</p>

            <p>It tells the model:</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                Something about the current approach needs to change.
              </blockquote>
            </div>

            <p>Maybe we should treat our failures the same way.</p>

            <p>
              A bad result doesn&apos;t necessarily mean <em className="text-neutral-200">you</em> are
              bad.
            </p>

            <p>It might simply mean that your current approach needs adjustment.</p>

            <p>That&apos;s a very different way of looking at failure.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              Looking back at my own journey
            </h2>

            <p>When I think about my engineering journey, I can see these iterations everywhere.</p>

            <p>My first internship.</p>

            <p>My first paycheck.</p>

            <p>My first project.</p>

            <p>The things I built that didn&apos;t work.</p>

            <p>The things I thought I was good at but wasn&apos;t.</p>

            <p>The opportunities I got.</p>

            <p>The opportunities I didn&apos;t.</p>

            <p>Every experience changed something.</p>

            <p>Some changed my technical skills.</p>

            <p>Some changed how I communicate.</p>

            <p>Some changed how I approach problems.</p>

            <p>Some simply taught me what I don&apos;t want to do.</p>

            <p>None of those moments completely transformed my life overnight.</p>

            <p>But together, they changed the direction I was moving in.</p>

            <p>That&apos;s probably the part we don&apos;t notice while we&apos;re living it.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                Our lives are being updated quietly.
              </blockquote>
            </div>

            <p>One experience at a time.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              We don&apos;t need to minimize every mistake
            </h2>

            <p>There&apos;s also an important detail in the formula.</p>

            <p>Gradient descent doesn&apos;t require the model to become perfect after one iteration.</p>

            <p>
              The objective is simply to <strong className="text-white">reduce the error</strong>.
            </p>

            <p>Maybe that&apos;s a better standard for ourselves too.</p>

            <p>Instead of asking:</p>

            <p className="text-xl italic text-neutral-200">&quot;Am I successful yet?&quot;</p>

            <p>Maybe ask:</p>

            <p className="text-xl italic text-neutral-200">
              &quot;Am I better than I was before?&quot;
            </p>

            <p>Did I understand something today that I didn&apos;t understand yesterday?</p>

            <p>Did I handle a situation better than I would have six months ago?</p>

            <p>Did I learn from the last mistake?</p>

            <p>Did I become a little more patient?</p>

            <p>A little more capable?</p>

            <p>A little more confident?</p>

            <p>A little more aware?</p>

            <p>Those changes can look insignificant individually.</p>

            <p>But compounded over years, they&apos;re not insignificant at all.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              There is no perfect optimization
            </h2>

            <p>Of course, life isn&apos;t literally a machine learning problem.</p>

            <p>There is no single loss function that tells us whether we&apos;re living correctly.</p>

            <p>There is no universal definition of the perfect destination.</p>

            <p>And unlike a model, we don&apos;t always know what we&apos;re optimizing for.</p>

            <p>That&apos;s probably what makes life harder.</p>

            <p>But maybe that&apos;s also what makes it meaningful.</p>

            <p>We have to decide what matters.</p>

            <p>We have to decide which mistakes are worth making.</p>

            <p>We have to decide which direction is worth pursuing.</p>

            <p>And sometimes, we have to change the objective itself.</p>

            <p>That&apos;s something an algorithm can&apos;t decide for us.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                The machine can optimize. We have to decide what is worth optimizing.
              </blockquote>
            </div>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">
              Maybe that&apos;s what growing up really is
            </h2>

            <p>I used to think growth meant reaching some point where everything would finally make sense.</p>

            <p>Now I don&apos;t think that point exists.</p>

            <p>Maybe growth is simply becoming better at navigating uncertainty.</p>

            <p>You make a decision.</p>

            <p>You see what happens.</p>

            <p>You learn.</p>

            <p>You adjust.</p>

            <p>You try again.</p>

            <p>Sometimes you move forward.</p>

            <p>Sometimes you move backward.</p>

            <p>Sometimes you realise you were optimizing for the wrong thing altogether.</p>

            <p>And that&apos;s okay.</p>

            <p>Because the goal isn&apos;t to perfectly predict the future.</p>

            <p>It&apos;s to keep learning from the present.</p>

            <hr className="border-white/10 my-10" />

            <h2 className="text-2xl font-bold text-white mt-8">One step at a time</h2>

            <p>
              A machine learning model doesn&apos;t become intelligent because it makes one perfect
              prediction.
            </p>

            <p>
              It becomes better because it is willing to learn from imperfect predictions over and over
              again.
            </p>

            <p>Maybe we can learn something from that.</p>

            <p>We don&apos;t have to know exactly where our lives are going.</p>

            <p>We don&apos;t have to get every decision right.</p>

            <p>We don&apos;t have to become the best version of ourselves overnight.</p>

            <p>We just need to remain willing to learn.</p>

            <p>To look at our mistakes honestly.</p>

            <p>To change direction when necessary.</p>

            <p>To take the next step.</p>

            <p>And then another.</p>

            <p>Because perhaps life isn&apos;t about finding the perfect path.</p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                Perhaps it&apos;s about continuously adjusting your direction until you find one worth
                following.
              </blockquote>
            </div>

            <p>
              And maybe, in its own strange way, that&apos;s what gradient descent was trying to teach me
              all along.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
