"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToId } from "./ui/SmoothScroll";

const NAV = [
  { id: "work", label: "Work" },
  { id: "papers", label: "Papers" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: "-45% 0px -50% 0px",
    });
    ["home", "about", ...NAV.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 60);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "glass-strong border-x-0 border-t-0" : "border-b border-transparent"}`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
          <button onClick={() => go("home")} className="text-sm font-normal tracking-wide text-[#f6f2ea]">
            Mahek Pandey
          </button>
          <ul className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className={`text-sm font-light transition-colors ${active === n.id ? "text-[#f6f2ea]" : "text-muted hover:text-[#f6f2ea]"}`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
          <button className="text-sm text-[#f6f2ea] md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
            {open ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#121212]/97 px-8 md:hidden"
          >
            {NAV.map((n, i) => (
              <motion.button
                key={n.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
                onClick={() => go(n.id)}
                className="font-display py-2 text-left text-6xl text-[#f6f2ea]"
              >
                {n.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
