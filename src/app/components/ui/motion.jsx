"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/** Fade + lift into view. */
export function Reveal({ children, delay = 0, y = 28, className = "", as = "div", once = true }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/** Splits a string into words and reveals them one after another (masked slide-up). */
export function SplitText({ text, className = "", wordClassName = "", delay = 0, stagger = 0.06 }) {
  const words = text.split(" ");
  // The viewport trigger lives on the (unclipped) wrapper: a word translated out of its
  // overflow-hidden mask never "intersects", so it can't be its own trigger.
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.08em]" aria-hidden="true">
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Counts up to a number when scrolled into view. */
export function Counter({ to, decimals = 0, prefix = "", suffix = "", duration = 2, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/** Element that is gently pulled toward the cursor. */
export function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={reset} style={{ x: sx, y: sy }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
}

/** 3D perspective tilt with a glare highlight that follows the cursor. */
export function TiltCard({ children, className = "", max = 10, glare = true }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 20 });
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useTransform(
    [gx, gy],
    ([a, b]) => `radial-gradient(600px circle at ${a} ${b}, rgba(196,181,253,0.18), transparent 40%)`
  );

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className={`relative h-full ${className}`}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
}

/** Small mono label + big heading used at the top of every section. */
export function SectionHeading({ index, kicker, title, accent, description, align = "left" }) {
  const alignCls = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-5 max-w-3xl ${alignCls}`}>
      <Reveal>
        <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-violet-300/80">
          {index && <span className="text-dim">{index}</span>}
          <span className="h-px w-10 bg-gradient-to-r from-violet-400/70 to-transparent" />
          {kicker}
        </span>
      </Reveal>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.02] text-white">
        <SplitText text={title} />
        {accent && (
          <>
            {" "}
            <SplitText text={accent} wordClassName="font-serif-italic text-gradient pr-1" delay={0.15} />
          </>
        )}
      </h2>
      {description && (
        <Reveal delay={0.2}>
          <p className="text-base sm:text-lg leading-relaxed text-muted max-w-2xl">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
