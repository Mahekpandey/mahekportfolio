"use client";

import { useEffect, useRef } from "react";

/** A soft violet light that trails the cursor (desktop / fine pointers only). */
export function CursorGlow() {
  const glow = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let gx = x;
    let gy = y;
    let raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    };
    const tick = () => {
      gx += (x - gx) * 0.12;
      gy += (y - gy) * 0.12;
      if (glow.current) glow.current.style.transform = `translate3d(${gx - 300}px, ${gy - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    if (glow.current) glow.current.style.opacity = "1";
    if (dot.current) dot.current.style.opacity = "1";
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={glow}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[1] h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.11), transparent 60%)" }}
      />
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] h-1.5 w-1.5 rounded-full bg-violet-200 opacity-0 mix-blend-difference"
      />
    </>
  );
}
