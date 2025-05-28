'use client';
import React from "react";
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { GeometricBackground } from './ui/geometric-background';
import { AnimatedProjects } from './ui/animated-projects';

export const Projects = () => {
  const projects = [
    {
      title: "Saksham Sevak",
      description: "SakshamSevak is a mobile application designed to support elderly individuals by enhancing their independence, safety, and connection to family and caregiver.",
      tech: ["Kotlin", "Firebase", "XML", "Sensors"],
      image: "/projects/saksham.png",
      liveUrl: "https://drive.google.com/file/d/1yZvuHJQx_PEx0bDCPwWPbFF4ZSR0qbtx/view",
      githubUrl: "https://github.com/ganeshdecoded/Evolumin_Saksham_Sevak"
    },
    {
      title: "Social Analytics Dashboard",
      description: "An innovative social media analytics platform that combines Langflow, DataStax Astra DB, and GPT to provide intelligent insights into social media engagement metrics.",
      tech: ["Python", "Langflow", "AI", "ML", "AstraDB"],
      image: "/projects/social-analytics.webp",
      liveUrl: "https://www.youtube.com/watch?v=P4HWShPgY8A",
       githubUrl: "https://github.com/ganeshdecoded/Social-Media-Performance-Analysis"
    },
    {
      title: "SoulBuddy",
      description: "SoulBuddy is a revolutionary web application that bridges ancient spiritual wisdom with modern technology. By combining AI, 3D visualization, and hand tracking, we create an immersive platform for personalized spiritual guidance and self-discovery.",
      tech: ["Next.js", "Python", "Langflow", "Firebase", "AstraDB"],
      image: "/projects/soulbuddy.webp",
      liveUrl: "https://www.youtube.com/watch?v=rUX-Q9DhvLs",
       githubUrl: "https://github.com/ganeshdecoded/AstroBuddy"
    },
    {
      title: "AI Travel Planner",
      description: "A Flutter application that helps users plan their trips using AI assistance. The app provides personalized travel itineraries, recommendations, and trip management features.",
      tech: ["Flutter", "Dart", "Google Cloud", "Google Maps API"],
      image: "/projects/travel-planner.webp",
      liveUrl: "https://drive.google.com/file/d/1sWnf1uZNM5AcEjouqL6Ky5C_1j90doQY/view?usp=sharing",
      // githubUrl: "https://github.com/ganeshdecoded/AI-Travel-Planner"
    }
    

   
  ];

  return (
    <div className="min-h-screen relative w-full bg-[#030303] flex flex-col items-center justify-center py-20 overflow-hidden">
      <GeometricBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Projects Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Here are some of my featured projects that showcase my skills and experience in web development, mobile applications, and software engineering.
            </p>
          </div>

          {/* Projects Showcase */}
          <AnimatedProjects projects={projects} />
        </motion.div>
      </div>
    </div>
  );
}; 