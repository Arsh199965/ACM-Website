"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function EventsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (e.clientX - innerWidth / 2) / innerWidth,
        y: (e.clientY - innerHeight / 2) / innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleWord1 = "THE";
  const titleWord2 = "EVENTS";

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] overflow-hidden bg-[#030303]"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Dynamic background gradient following mouse */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: `
              radial-gradient(ellipse 60% 50% at ${50 + mousePosition.x * 10}% ${40 + mousePosition.y * 10}%, rgba(0, 133, 202, 0.08), transparent 50%),
              radial-gradient(ellipse 80% 60% at 20% 80%, rgba(0, 133, 202, 0.04), transparent 40%),
              radial-gradient(ellipse 40% 30% at 80% 20%, rgba(0, 100, 180, 0.03), transparent 30%),
              linear-gradient(180deg, #030303 0%, #050508 50%, #030303 100%)
            `,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating geometric shapes */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large rotating ring */}
            <motion.div
              className="absolute top-1/4 -right-32 w-[500px] h-[500px] border border-white/[0.03] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{
                x: mousePosition.x * -30,
                y: mousePosition.y * -30,
              }}
            />
            
            {/* Medium rotating ring */}
            <motion.div
              className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] border border-acm-blue/[0.05] rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              style={{
                x: mousePosition.x * 20,
                y: mousePosition.y * 20,
              }}
            />

            {/* Floating squares */}
            <motion.div
              className="absolute top-[20%] left-[15%] w-20 h-20 border border-white/[0.04] rotate-45"
              animate={{ 
                y: [0, -20, 0],
                rotate: [45, 50, 45],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              className="absolute bottom-[30%] right-[20%] w-12 h-12 border border-acm-blue/[0.06] rotate-12"
              animate={{ 
                y: [0, 15, 0],
                rotate: [12, 18, 12],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Diagonal lines */}
            <motion.div
              className="absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-white/[0.03] to-transparent"
              style={{ rotate: "15deg" }}
            />
            <motion.div
              className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-acm-blue/[0.04] to-transparent"
              style={{ rotate: "-10deg" }}
            />
          </div>
        )}

        {/* Main content */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 will-change-transform"
        >
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 mb-10"
          >
            <motion.div 
              className="w-16 md:w-24 h-px bg-linear-to-r from-transparent to-acm-blue/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <span 
              className="text-[10px] md:text-[11px] tracking-[0.5em] text-white/30 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Experiences & Workshops
            </span>
            <motion.div 
              className="w-16 md:w-24 h-px bg-linear-to-l from-transparent to-acm-blue/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Main title - THE */}
          <div className="overflow-hidden mb-2 md:mb-4">
            <motion.div className="flex">
              {titleWord1.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 150, opacity: 0, rotateX: -45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-white/90 tracking-tight leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Main title - EVENTS */}
          <div className="overflow-hidden">
            <motion.div className="flex">
              {titleWord2.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 200, opacity: 0, rotateX: -45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.6 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tight leading-none"
                  style={{ 
                    fontFamily: "var(--font-heading)",
                    background: "linear-gradient(135deg, #0085CA 0%, #00A3FF 50%, #0085CA 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 md:mt-12 max-w-xl text-center text-base md:text-lg text-white/40 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Where innovation meets inspiration. Explore our journey through hackathons, workshops, and transformative experiences.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 md:mt-16 flex items-center gap-6 sm:gap-8 md:gap-16"
          >
            {[
              { value: "11", label: "Events" },
              { value: "1000+", label: "Participants" },
              { value: "6", label: "Categories" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + i * 0.1 }}
                className="text-center"
              >
                <span 
                  className="block text-2xl md:text-3xl font-black text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </span>
                <span 
                  className="text-[10px] tracking-[0.2em] text-white/30 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span 
              className="text-[9px] tracking-[0.4em] text-white/20 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Scroll to explore
            </span>
            <motion.div
              className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5"
            >
              <motion.div
                className="w-1 h-2 bg-acm-blue/60 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/[0.06]" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/[0.06]" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/[0.06]" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/[0.06]" />

        {/* Film grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  );
}
