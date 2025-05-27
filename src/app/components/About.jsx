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

  const experiences = [
    {
      title: "Technical Lead - Software Developer",
      company: "AlphaCodeAi",
      location: "Mumbai",
      date: "November 2024 - Present",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      points: [
        "Transitioned from software development intern to full-time role and Tech Lead",
        "Built websites, mobile apps, a shop app, and a blockchain application",
        "Integrated APIs, collaborated with ML teams, and connected apps to Firebase",
        "Managed app deployments, ensuring readiness for Play Store launches"
      ]
    },
    {
      title: "Android App Developer",
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
      title: "Android App Developer",
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
                ganeshdubey767@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                9529876039
              </span>
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
                <span>November 2022 - July 2026</span>
                <span>CGPA: 7.0</span>
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