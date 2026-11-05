"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, background: "linear-gradient(90deg, #d1c0a3, #bfa273 47%, #765d3a)" }}
      className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left"
    />
  );
}
