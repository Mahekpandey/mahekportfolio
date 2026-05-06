'use client';
import React from "react";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, GraduationCap, Building2, Code } from 'lucide-react';
import { AnimatedTabs } from './ui/animated-tabs';
import { GeometricBackground } from './ui/geometric-background';

const ExperienceCard = ({ title, company, location, date, points, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="bg-[#181818] hover:bg-[#282828] backdrop-blur-sm border border-white/5 rounded-lg p-5 w-full transition-all duration-300 group"
  >
    <div className="aspect-square w-full mb-4 rounded-md overflow-hidden relative">
      <img
        src={image}
        alt={company}
        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
    </div>
    <h3 className="text-xl font-bold text-white mb-1 truncate">{title}</h3>
    <div className="flex items-center gap-2 text-neutral-400 text-sm mb-2">
      <Building2 className="w-4 h-4" />
      <span className="truncate">{company}</span>
    </div>
    <div className="flex items-center gap-2 text-neutral-400 text-sm">
      <MapPin className="w-4 h-4" />
      <span className="truncate">{location}</span>
      <span>•</span>
      <span className="truncate">{date}</span>
    </div>
  </motion.div>
);

const SkillTag = ({ skill }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/50 transition-colors"
  >
    {skill}
  </motion.span>
);

export const About = () => {
  const skills = [
    "Kotlin", "C++", "C", "Java", "Python", "CSS", "React", "Node.js", "Next.js",
    "Dagger", "Firebase", "JavaScript", "XML", "REST API"
  ];

  const storyMirrorTimeline = [
    {
      phase: "HearMeOut",
      title: "AI Audiobook Generator",
      summary: "Built an end-to-end pipeline to convert books into audiobooks with chunking, async processing, voice customization, multilingual support, and stitched audio output.",
      highlight: "Optimized latency with batching and parallel execution.",
    },
    {
      phase: "Infrastructure",
      title: "GCP Migration & Deployment",
      summary: "Managed the production deployment on Google Cloud Platform using containerized services and scalable GCS storage.",
      highlight: "Added CDN-backed asset delivery, CI/CD pipelines, and Linux recovery scripts.",
    },
    {
      phase: "Optimization",
      title: "LLM Cost and Speed",
      summary: "Achieved a 21x speedup with concurrent batching in asyncio and reduced AI latency by 40%.",
      highlight: "Built caching and deduplication to cut API spend by 60%.",
    },
    {
      phase: "Creative AI",
      title: "Marketing Asset Suite",
      summary: "Automated book cover and marketing creative generation using Gemini Vision APIs and 50+ prompt templates.",
      highlight: "Reduced designer workload by 70%.",
    },
    {
      phase: "B2B SaaS",
      title: "FixMyText.in",
      summary: "Engineered a GenAI proofreading platform and scaled it to 1000+ monthly users.",
      highlight: "Implemented white-labeled subdomain routing and multi-tenant JWT-SSO.",
    },
    {
      phase: "Production E-commerce",
      title: "Shop StoryMirror",
      summary: "Led backend development for a production e-commerce platform handling 1000+ monthly orders.",
      highlight: "Built MongoDB aggregation pipelines for real-time KPI analytics.",
    },
    {
      phase: "Operations",
      title: "Payments and Logistics",
      summary: "Integrated Razorpay, Paytm, and Shiprocket for payment validation and shipment tracking.",
      highlight: "Automated reconciliation with hourly cron jobs across 40+ carriers.",
    },
    {
      phase: "Internal Tools",
      title: "CRM Buildout",
      summary: "Created a ground-up task management CRM using Node.js and PostgreSQL.",
      highlight: "Streamlined employee allocation and project tracking.",
    },
  ];

  const experiences = [
    {
      title: "Software Developer (PPO Intern)",
      company: "StoryMirror",
      location: "Mumbai, India",
      date: "AUG 2025 - MAY 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      points: [
        "HearMeOut AI Audiobook Generator: Developed end-to-end pipeline for book-to-audiobook conversion with chunking, async processing, voice customization, multilingual support, and audio stitching",
        "GCP Migration & Infrastructure: Managed production deployment on Google Cloud Platform with CDN-backed asset delivery, CI/CD pipelines, and Linux-based monitoring",
        "LLM Performance Optimization: Achieved 21x speedup via concurrent batching and developed intelligent caching layer reducing API costs by 60%",
        "AI Marketing Creative Suite: Built automated generator for marketing assets using Gemini Vision APIs with 50+ dynamic templates",
        "FixMyText.in (B2B SaaS): Engineered full-stack GenAI proofreading platform scaled to 20,000+ monthly users with white-labeled multi-tenant framework",
        "Shop StoryMirror (Production): Led backend development handling 10,000+ monthly orders with advanced MongoDB aggregation pipelines for real-time analytics",
        "Payment & Logistics: Integrated Razorpay/Paytm with automated reconciliation and real-time tracking across 40+ carriers via Shiprocket API"
      ]
    },
    {
      title: " Software Developer Intern",
      company: "AlphaCodeAi",
      location: "Mumbai",
      date: "November 2024 - March 2025",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      points: [
        "Transitioned from software development intern to full-time role and Tech Lead",
        "Built websites, mobile apps, a shop app, and a blockchain application",
        "Integrated APIs, collaborated with ML teams, and connected apps to Firebase",
        "Managed app deployments, ensuring readiness for Play Store launches"
      ]
    },
    {
      title: "Android App Developer Intern",
      company: "Yug-E-Visuals",
      location: "Remote",
      date: "June 2024 - September 2024",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop",
      points: [
        "Project: Xplore Muni",
        "Successfully integrated various APIs",
        "Collaborated with ML Team to integrate ML scripts",
        "Connected app to Firebase for real-time database management",
        "Managed deployment process for Play Store launch"
      ]
    },
    {
      title: "Android App Developer Intern",
      company: "Luxury In Taste",
      location: "Remote",
      date: "May 2024 - June 2024",
      image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      points: [
        "Technologies Used: Kotlin, MVVM, REST API, Jetpack Compose, Firebase",
        "Enhanced User Engagement through intuitive UI/UX design",
        "Integrated Firebase for cloud messaging and Google authentication",
        "Implemented ML scripts and various APIs",
        "Developed features using MVVM architecture and Kotlin coroutines"
      ]
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
          {/* Personal Info */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                mahekpandey.work@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                7304252771              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Thane, Maharashtra
              </span>
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-neutral-200">K.C College of Engineering and Management Studies</h4>
              <p className="text-neutral-400">Computer Engineering Bachelors</p>
              <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                <span>Maharashtra, India</span>
                <span>November 2022 - May 2026</span>
                <span>CGPA: 8.75</span>
              </div>
            </div>
          </motion.div>

          {/* StoryMirror Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-semibold text-white">StoryMirror Timeline</h3>
                </div>
                <p className="text-neutral-400 max-w-3xl">
                  A focused snapshot of the work I delivered at StoryMirror, from AI product engineering to infrastructure, growth, and production systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">AUG 2025 - PRESENT</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">Mumbai, India</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300">PPO</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="relative pl-6 md:pl-8 border-l border-blue-500/20 space-y-5">
                {storyMirrorTimeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="relative"
                  >
                    <span className="absolute -left-[2.15rem] top-2 h-4 w-4 rounded-full bg-blue-400 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] uppercase tracking-[0.24em] text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-2 py-1">
                          {item.phase}
                        </span>
                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm md:text-[15px] text-neutral-300 leading-6">{item.summary}</p>
                      <p className="mt-3 text-sm text-neutral-400 border-t border-white/10 pt-3">{item.highlight}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-4 content-start">
                <div className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 mb-3">Role Focus</p>
                  <h4 className="text-xl font-semibold text-white mb-2">End-to-end product ownership</h4>
                  <p className="text-neutral-400 leading-7">
                    I was brought in through a PPO and trusted with end-to-end product ownership, from shipping real products to improving AI throughput and keeping production systems reliable while reducing cost and latency.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-2xl font-bold text-white">21x</div>
                    <div className="text-sm text-neutral-400 mt-1">AI processing speedup</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-2xl font-bold text-white">60%</div>
                    <div className="text-sm text-neutral-400 mt-1">LLM cost reduction</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-sm text-neutral-400 mt-1">FixMyText monthly users</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-sm text-neutral-400 mt-1">Shop orders/month</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">Skills</h3>
            </div>
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 hover:border-blue-500/50 transition-colors whitespace-nowrap"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 