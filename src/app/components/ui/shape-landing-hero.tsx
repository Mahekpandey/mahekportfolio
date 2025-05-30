"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, Github, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../../lib/utils";
import { GeometricBackground } from "./geometric-background";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Software Developer",
    title1 = "Mahek",
    title2 = "Pandey",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <GeometricBackground />

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            A passionate software developer specializing in mobile and web development, 
                            creating innovative solutions with modern technologies.
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center justify-center gap-6"
                    >
                        <motion.a
                            href="https://github.com/Mahekpandey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-black/50 backdrop-blur-sm rounded-full p-2 border border-white/10">
                                <Github className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
                            </div>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/mahek-pandey-39243b258/\"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-black/50 backdrop-blur-sm rounded-full p-2 border border-white/10">
                                <Linkedin className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
                            </div>
                        </motion.a>
                        <motion.a
                            href="https://instagram.com/mahekkpandey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-black/50 backdrop-blur-sm rounded-full p-2 border border-white/10">
                                <Instagram className="w-6 h-6 text-neutral-300 group-hover:text-white transition-colors" />
                            </div>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export { HeroGeometric }; 