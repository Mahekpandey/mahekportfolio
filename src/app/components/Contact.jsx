"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { GeometricBackground } from "./ui/geometric-background";
import Link from "next/link";

export const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-black">
      <GeometricBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-sm max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:mahekpandey0303@gmail.com"
                className="flex items-center justify-center space-x-3 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>mahekpandey0303@gmail.com</span>
              </a>
              <a
                href="https://github.com/Mahekpandey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-neutral-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>github.com/Mahekpandey</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mahek-pandey-39243b258/\"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 