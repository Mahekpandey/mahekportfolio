"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToId } from "./ui/SmoothScroll";

const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false, loading: () => null });

const EASE = [0.22, 1, 0.36, 1];

export const Hero = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(true);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const lift = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden">
      {/* soft spotlight, like a studio backdrop */}
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_32%,#2a2927_0%,#161616_55%,#0d0d0d_100%)]" />

      {/* the 3D form gets its own space above the text, so the two never overlap */}
      <motion.div style={{ opacity: fade }} className="relative mt-16 min-h-[180px] flex-1">
        <HeroScene active={active} />
      </motion.div>

      <motion.div
        style={{ y: lift, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-5xl shrink-0 flex-col items-center px-5 pb-10 pt-4 text-center sm:pb-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="text-xs font-normal uppercase tracking-[0.35em] text-muted"
        >
          Mahek Pandey
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.45, ease: EASE }}
          className="mt-3 text-[clamp(3.4rem,10vw,7.75rem)] font-extralight leading-[0.95] tracking-[-0.05em] text-[#f6f2ea]"
        >
          AI Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted sm:text-lg"
        >
          I build AI learning systems at Eklavya.io — memory, retrieval and the logic that decides what a student should learn
          next.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
          className="glass mt-9 flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm"
        >
          <span className="font-normal text-[#f6f2ea]">Now building Eklavya.io</span>
          <button onClick={() => scrollToId("work")} className="btn-gold rounded-full px-5 py-2.5 text-sm font-medium transition hover:brightness-110">
            See my work
          </button>
        </motion.div>

        <motion.button
          onClick={() => scrollToId("about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-6 flex flex-col items-center gap-2 text-xs text-dim transition hover:text-muted"
        >
          Scroll to know more
          <span className="relative h-6 w-px overflow-hidden bg-white/10">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-[#bfa273]" style={{ animation: "scroll-cue 1.8s ease-in-out infinite" }} />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};
