"use client";

import { motion } from "framer-motion";
import { GeometricBackground } from "../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BrainComputerInterfacesBlog() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <Link 
          href="/#contact" 
          className="inline-flex items-center text-neutral-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">The Future of Brain-Computer Interfaces</h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>February 20, 2025</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2070&auto=format&fit=crop"
              alt="Brain-Computer Interface"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              In early 2025, brain-computer interfaces (BCIs) have moved from the realm of science 
              fiction into our daily reality. These revolutionary devices are reshaping how we 
              interact with technology, learn new skills, and even communicate with each other.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">The Neural Revolution</h2>
            <p>
              Non-invasive BCIs have become sophisticated enough to interpret complex thought 
              patterns with remarkable accuracy. From controlling smart home devices with thoughts 
              to experiencing immersive virtual reality through direct neural feedback, the 
              applications are boundless.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Medical Breakthroughs</h2>
            <p>
              The medical field has seen extraordinary advances through BCI technology. Patients 
              with paralysis can now control robotic limbs with natural precision, while those 
              with speech impediments can communicate fluently through neural-to-text interfaces.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Key Applications in 2025</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Enhanced Learning: Direct neural feedback accelerates skill acquisition</li>
              <li>Mental Health: Real-time monitoring and intervention for mental health conditions</li>
              <li>Gaming and Entertainment: Thought-controlled immersive experiences</li>
              <li>Workplace Integration: Neural interfaces for improved productivity and collaboration</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Ethical Considerations</h2>
            <p>
              As BCIs become more prevalent, important discussions around privacy, security, and 
              cognitive liberty have taken center stage. The development of robust ethical 
              frameworks and regulations is keeping pace with technological advancement.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Future Prospects</h2>
            <p>
              Research is already underway on next-generation BCIs that could enable direct 
              brain-to-brain communication, enhanced memory storage and recall, and even the 
              possibility of backing up neural patterns. The implications for human evolution 
              and society are profound.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                "Brain-computer interfaces are not just changing how we interact with computers—they're 
                fundamentally altering what it means to be human in the digital age."
              </blockquote>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 