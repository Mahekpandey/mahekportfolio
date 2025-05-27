"use client";

import { motion } from "framer-motion";
import { GeometricBackground } from "../../components/ui/geometric-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function TechStartupsBlog() {
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
            <h1 className="text-4xl font-bold text-white mb-4">Tech Startups: Navigating the New Frontier</h1>
            <div className="flex items-center gap-2 text-neutral-400">
              <span>February 1, 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>

          <div className="aspect-video w-full mb-12 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
              alt="Tech Startups"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              The startup ecosystem of 2025 bears little resemblance to its predecessors. 
              With quantum computing becoming accessible, AI reaching new heights, and sustainable 
              technology taking center stage, entrepreneurs are redefining what's possible in the 
              tech industry.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">The Quantum Revolution</h2>
            <p>
              Quantum computing startups are no longer just research projects. We're seeing practical 
              applications in cryptography, drug discovery, and climate modeling. The democratization 
              of quantum computing has opened new frontiers for startups to explore previously 
              impossible solutions.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Sustainable Tech Innovation</h2>
            <p>
              Environmental consciousness isn't just a buzzword anymore—it's a fundamental requirement. 
              Startups are leading the charge in carbon capture technology, renewable energy solutions, 
              and sustainable computing practices. The intersection of profit and planet preservation 
              has become the new normal.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Key Trends Shaping 2025</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Decentralized Autonomous Organizations (DAOs) becoming the preferred business structure</li>
              <li>AI-first approaches to product development and customer service</li>
              <li>Quantum-secure encryption as a standard offering</li>
              <li>Biotech and digital health convergence</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8">Funding Evolution</h2>
            <p>
              Traditional venture capital has evolved. Tokenized investment platforms, AI-driven due 
              diligence, and real-time performance tracking have made funding more accessible and 
              transparent than ever before.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8">Challenges and Opportunities</h2>
            <p>
              While opportunities abound, startups face new challenges in cybersecurity, regulatory 
              compliance, and talent acquisition. The most successful companies are those that can 
              navigate these complexities while maintaining agility and innovation.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <blockquote className="text-xl text-neutral-300 italic">
                "The startups of 2025 aren't just building products—they're architecting the future 
                of human interaction with technology and the planet."
              </blockquote>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 