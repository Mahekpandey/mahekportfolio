"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const AnimatedProjects = ({
  projects,
  autoplay = false,
  className,
}: {
  projects: Project[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Predefined rotation values for consistent server/client rendering
  const rotations = [5, -5, 3, -3];
  const getRotation = (index: number) => rotations[index % rotations.length];

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            {/* Navigation Arrows Container - Moved inside the image container */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-[1000] px-4">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="pointer-events-auto -translate-x-4 md:-translate-x-12 h-10 w-10 rounded-full bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center group/button hover:bg-neutral-700 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="pointer-events-auto translate-x-4 md:translate-x-12 h-10 w-10 rounded-full bg-neutral-800/80 backdrop-blur-sm flex items-center justify-center group/button hover:bg-neutral-700 transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>

            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: getRotation(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : getRotation(index),
                    zIndex: isActive(index)
                      ? 999
                      : projects.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: getRotation(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white">
              {projects[active].title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {projects[active].tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.p className="text-lg text-neutral-400 mt-6">
              {projects[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <div className="flex gap-4 mt-8">
              {projects[active].liveUrl && (
                <a
                  href={projects[active].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors"
                >
                  Video Demo
                </a>
              )}
              {projects[active].githubUrl && (
                <a
                  href={projects[active].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-neutral-800 text-white text-sm hover:bg-neutral-700 transition-colors"
                >
                  View Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 