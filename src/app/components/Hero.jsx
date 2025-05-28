'use client';
import React from "react";
import { motion } from 'framer-motion';
import { SparklesCore } from './ui/sparkles';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { HeroGeometric } from './ui/shape-landing-hero';

export const Hero = () => {
  return (
    <HeroGeometric
      badge="Software Developer"
      title1="Mahek"
      title2="Pandey"
    />
  );
}; 