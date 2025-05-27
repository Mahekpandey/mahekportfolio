"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../../../lib/utils"

export function AnimeNavBar({ items, className, defaultActive = "Home" }) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState(null)
  const [activeTab, setActiveTab] = useState(defaultActive)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => ({
        id: item.name,
        element: document.querySelector(item.url)
      }));

      const scrollPosition = window.scrollY + 100; // Add offset for better detection

      for (const section of sections) {
        if (!section.element) continue;
        
        const sectionTop = section.element.offsetTop;
        const sectionBottom = sectionTop + section.element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveTab(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleClick = (e, item) => {
    e.preventDefault();
    const element = document.querySelector(item.url);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setActiveTab(item.name);
  };

  if (!mounted) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] py-6 bg-gradient-to-b from-black/90 to-black/50 backdrop-blur-md">
      <div className="flex justify-center">
        <motion.div 
          className="flex items-center gap-2 bg-black/80 border border-white/10 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg relative scale-95"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name
            const isHovered = hoveredTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={(e) => handleClick(e, item)}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-500/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-blue-500/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-blue-500/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-blue-500/5 rounded-full blur-3xl" />
                    
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0"
                      style={{
                        animation: "shine 3s ease-in-out infinite"
                      }}
                    />
                  </motion.div>
                )}

                <motion.span
                  className="hidden md:inline relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
                <motion.span 
                  className="md:hidden relative z-10"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} strokeWidth={2.5} />
                </motion.span>
          
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="anime-mascot"
                    className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="relative w-8 h-8">
                      <motion.div 
                        className="absolute w-7 h-7 bg-white rounded-full left-1/2 -translate-x-1/2"
                        animate={
                          hoveredTab ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, -5, 5, 0],
                            transition: {
                              duration: 0.5,
                              ease: "easeInOut"
                            }
                          } : {
                            y: [0, -2, 0],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }
                        }
                      >
                        <motion.div 
                          className="absolute w-1.5 h-1.5 bg-black rounded-full"
                          animate={
                            hoveredTab ? {
                              scaleY: [1, 0.2, 1],
                              transition: {
                                duration: 0.2,
                                times: [0, 0.5, 1]
                              }
                            } : {}
                          }
                          style={{ left: '25%', top: '40%' }}
                        />
                        <motion.div 
                          className="absolute w-1.5 h-1.5 bg-black rounded-full"
                          animate={
                            hoveredTab ? {
                              scaleY: [1, 0.2, 1],
                              transition: {
                                duration: 0.2,
                                times: [0, 0.5, 1]
                              }
                            } : {}
                          }
                          style={{ right: '25%', top: '40%' }}
                        />
                        <motion.div 
                          className="absolute w-1.5 h-1 bg-pink-300 rounded-full"
                          animate={{
                            opacity: hoveredTab ? 0.8 : 0.6
                          }}
                          style={{ left: '15%', top: '55%' }}
                        />
                        <motion.div 
                          className="absolute w-1.5 h-1 bg-pink-300 rounded-full"
                          animate={{
                            opacity: hoveredTab ? 0.8 : 0.6
                          }}
                          style={{ right: '15%', top: '55%' }}
                        />
                        
                        <motion.div 
                          className="absolute w-3 h-1.5 border-b-2 border-black rounded-full"
                          animate={
                            hoveredTab ? {
                              scaleY: 1.5,
                              y: -1
                            } : {
                              scaleY: 1,
                              y: 0
                            }
                          }
                          style={{ left: '30%', top: '60%' }}
                        />
                        <AnimatePresence>
                          {hoveredTab && (
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute -top-1 -right-1 w-1.5 h-1.5 text-yellow-300 text-[8px]"
                              >
                                ✨
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ delay: 0.1 }}
                                className="absolute -top-1.5 left-0 w-1.5 h-1.5 text-yellow-300 text-[8px]"
                              >
                                ✨
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-2.5 h-2.5 -translate-x-1/2"
                        animate={
                          hoveredTab ? {
                            y: [0, -2, 0],
                            transition: {
                              duration: 0.3,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }
                          } : {
                            y: [0, 1, 0],
                            transition: {
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }
                          }
                        }
                      >
                        <div className="w-full h-full bg-white rotate-45 transform origin-center" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
} 