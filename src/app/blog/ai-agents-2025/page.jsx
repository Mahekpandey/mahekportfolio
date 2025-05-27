"use client";

import { motion } from "framer-motion";
import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function AIAgentsBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-4xl font-bold text-white mb-4">The Rise of AI Agents: Revolutionizing Work in 2025</h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>January 15, 2025</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
              alt="AI Agents"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              As we step into 2025, the landscape of work has undergone a dramatic transformation, 
              largely driven by the widespread adoption of AI agents. These digital assistants have 
              evolved far beyond simple task automation, becoming integral partners in our daily work lives.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">The New Era of AI Collaboration</h2>
            <p>
              Today's AI agents are remarkably sophisticated, capable of understanding context, 
              learning from interactions, and even anticipating needs before they arise. In development 
              teams, AI coding assistants now participate in code reviews, suggest optimizations, and 
              help maintain documentation in real-time.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Impact Across Industries</h2>
            <p>
              The healthcare sector has seen AI agents revolutionize patient care coordination and 
              medical research analysis. In finance, these agents now handle complex risk assessments 
              and provide real-time market insights with unprecedented accuracy.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Key Developments in 2025</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Advanced Natural Language Understanding: AI agents now grasp nuanced communication, including cultural context and emotional undertones.</li>
              <li>Autonomous Decision Making: Within defined parameters, AI agents can make and execute decisions independently.</li>
              <li>Cross-Platform Integration: Seamless operation across different tools and platforms has become standard.</li>
              <li>Personalized Learning: Each AI agent develops a unique understanding of its user's preferences and work patterns.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">The Human Element</h2>
            <p>
              Despite these advances, human creativity and strategic thinking remain irreplaceable. 
              The most successful organizations have learned to leverage AI agents as enhancers of 
              human capability rather than replacements.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Looking Ahead</h2>
            <p>
              As we move forward, the symbiosis between humans and AI agents continues to evolve. 
              The next frontier appears to be emotional intelligence and creative collaboration, 
              with early prototypes showing promising results in understanding and responding to 
              human emotional states.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                "The true power of AI agents lies not in replacing human workers, but in amplifying 
                human potential and creativity to unprecedented levels."
              </blockquote>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 