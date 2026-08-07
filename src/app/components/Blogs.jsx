"use client";

import { motion } from "framer-motion";
import { GeometricBackground } from "./ui/geometric-background";
import Link from "next/link";

const blogPosts = [
  {
    title: "What Gradient Descent Taught Me About Life",
    date: "August 7, 2026",
    readTime: "8 min read",
    description: "A personal reflection on gradient descent, feedback, learning rates, failure, and how small corrections shape growth over time.",
    image: "/blog/what-gradient-descent-taught-me-about-life.png",
    imageFit: "contain",
    link: "/blog/what-gradient-descent-taught-me-about-life"
  },
  {
    title: "You Can Plan Your Next Year. Life Might Have Other Plans.",
    date: "August 7, 2026",
    readTime: "6 min read",
    description: "A reflection on engineering, first internships, changing plans, and why progress rarely happens exactly the way we imagined.",
    image: "/blog/you-can-plan-your-next-year.png",
    imageFit: "contain",
    link: "/blog/you-can-plan-your-next-year"
  },
  {
    title: "Hi, I'm Mahek Pandey",
    date: "July 30, 2026",
    readTime: "4 min read",
    description: "A personal introduction to what I am building at Eklavya, how product thinking changed my engineering mindset, and what this blog will be about.",
    image: "/blog/mahek-pandey-intro.png",
    imageFit: "contain",
    link: "/blog/hi-im-mahek-pandey"
  },
  {
    title: "Most AI Agent Problems Aren't AI Problems",
    date: "July 30, 2026",
    readTime: "5 min read",
    description: "Why reliable AI agents are built in the harness around the model: memory, retrieval, tools, retries, stop conditions, and workflows.",
    image: "/blog/ai-agent-harness.png",
    imageFit: "contain",
    link: "/blog/ai-agent-problems"
  },
  {
    title: "The Rise of AI Agents: Revolutionizing Work in 2025",
    date: "January 15, 2025",
    readTime: "12 min read",
    description: "Explore how AI agents are transforming the workplace, enhancing human capabilities, and revolutionizing industries across the board.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/ai-agents-2025"
  },
  {
    title: "Tech Startups: Navigating the New Frontier",
    date: "February 1, 2025",
    readTime: "10 min read",
    description: "Discover how quantum computing, sustainable tech, and evolving funding models are reshaping the startup ecosystem in 2025.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/tech-startups-2025"
  },
  {
    title: "The Future of Brain-Computer Interfaces",
    date: "February 20, 2025",
    readTime: "15 min read",
    description: "Delve into the revolutionary advances in BCI technology and their impact on medicine, education, and human augmentation.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/brain-computer-interfaces"
  }
];

export const Blogs = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black py-20">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-neutral-400">Exploring the frontiers of technology and innovation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Link href={post.link} className="block h-full">
                <div className="h-full bg-neutral-900/50 rounded-2xl overflow-hidden border border-neutral-800 backdrop-blur-sm hover:border-neutral-700 transition-colors flex flex-col">
                  <div className={`h-60 overflow-hidden flex items-center justify-center ${post.imageFit === "contain" ? "bg-white p-3" : ""}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full h-full transform group-hover:scale-105 transition-transform duration-300 ${
                        post.imageFit === "contain" ? "object-contain" : "object-cover"
                      }`}
                    />
                  </div>
                  <div className="p-6 flex flex-1 flex-col">
                    <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 min-h-[3.5rem] line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}; 
