"use client";

import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Who We Are",
    subtitle: "COMMUNITY",
    description:
      "A multi-disciplinary student community passionate about exploring technology, creativity, and innovation at GGSIPU East Delhi Campus.",
    stats: { value: "50+", label: "Active Members" },
  },
  {
    id: 2,
    title: "What We Explore",
    subtitle: "DOMAINS",
    description:
      "Machine Learning, Web Development, UI/UX Design, Blockchain, and Content Creation. We believe in the transformative power of technology.",
    stats: { value: "12+", label: "Tech Domains" },
  },
  {
    id: 3,
    title: "Our Mission",
    subtitle: "PURPOSE",
    description:
      "Delivering experiences that engage, inspire, and achieve tangible results with meaningful impact for students and the tech community.",
    stats: { value: "100%", label: "Passion Driven" },
  },
  {
    id: 4,
    title: "Our Impact",
    subtitle: "RESULTS",
    description:
      "From hackathons to workshops, we've touched thousands of students across Delhi, building a legacy of innovation and excellence.",
    stats: { value: "25+", label: "Events Hosted" },
  },
];

// Falling particles data
const fallingParticles = [
  { id: 0, size: 20, x: 5, delay: 0, fallDuration: 15, driftAmount: 30 },
  { id: 1, size: 15, x: 12, delay: 2, fallDuration: 18, driftAmount: -20 },
  { id: 2, size: 25, x: 20, delay: 1, fallDuration: 20, driftAmount: 40 },
  { id: 3, size: 18, x: 28, delay: 3, fallDuration: 16, driftAmount: -35 },
  { id: 4, size: 22, x: 35, delay: 0.5, fallDuration: 22, driftAmount: 25 },
  { id: 5, size: 16, x: 42, delay: 2.5, fallDuration: 17, driftAmount: -15 },
  { id: 6, size: 28, x: 50, delay: 1.5, fallDuration: 19, driftAmount: 45 },
  { id: 7, size: 14, x: 58, delay: 3.5, fallDuration: 21, driftAmount: -40 },
  { id: 8, size: 24, x: 65, delay: 0.8, fallDuration: 15, driftAmount: 20 },
  { id: 9, size: 19, x: 72, delay: 2.2, fallDuration: 18, driftAmount: -30 },
  { id: 10, size: 26, x: 78, delay: 1.2, fallDuration: 23, driftAmount: 35 },
  { id: 11, size: 17, x: 85, delay: 3.2, fallDuration: 16, driftAmount: -25 },
  { id: 12, size: 21, x: 92, delay: 0.3, fallDuration: 20, driftAmount: 50 },
  { id: 13, size: 23, x: 8, delay: 4, fallDuration: 17, driftAmount: -45 },
  { id: 14, size: 15, x: 25, delay: 1.8, fallDuration: 22, driftAmount: 15 },
  { id: 15, size: 27, x: 45, delay: 2.8, fallDuration: 19, driftAmount: -20 },
  { id: 16, size: 18, x: 62, delay: 0.6, fallDuration: 21, driftAmount: 30 },
  { id: 17, size: 20, x: 80, delay: 3.8, fallDuration: 16, driftAmount: -35 },
  { id: 18, size: 16, x: 95, delay: 1.3, fallDuration: 18, driftAmount: 25 },
  { id: 19, size: 22, x: 15, delay: 2.6, fallDuration: 20, driftAmount: -40 },
];

// Floating boxes data (like Hero section)
const floatingSquares = [
  { id: 0, size: 40, x: 5, y: 20, delay: 0.5, duration: 18 },
  { id: 1, size: 30, x: 88, y: 15, delay: 1.2, duration: 16 },
  { id: 2, size: 25, x: 12, y: 70, delay: 0.8, duration: 20 },
  { id: 3, size: 35, x: 92, y: 75, delay: 1.5, duration: 17 },
  { id: 4, size: 22, x: 45, y: 8, delay: 0.3, duration: 19 },
  { id: 5, size: 38, x: 22, y: 40, delay: 1.0, duration: 15 },
  { id: 6, size: 28, x: 75, y: 35, delay: 0.7, duration: 21 },
  { id: 7, size: 32, x: 3, y: 55, delay: 1.8, duration: 18 },
  { id: 8, size: 24, x: 95, y: 50, delay: 0.4, duration: 16 },
  { id: 9, size: 36, x: 38, y: 85, delay: 1.3, duration: 17 },
  { id: 10, size: 26, x: 65, y: 22, delay: 0.9, duration: 20 },
  { id: 11, size: 20, x: 82, y: 62, delay: 1.6, duration: 19 },
];

function Card({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[38vw] xl:w-[32vw] h-[38vh] max-h-[340px] min-h-[500px]"
    >
      <div className="relative h-full w-full overflow-hidden p-6 md:p-10">
        {/* Minimal border that appears on hover */}
        <div className="absolute inset-0 rounded-[2px] border border-gray-800/0 group-hover:border-gray-700 transition-all duration-500" />
        
        {/* Subtle top line accent */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-acm-blue/50 to-transparent origin-left"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Section */}
          <div>
            {/* Number & Subtitle */}
            <div className="flex items-baseline justify-between mb-8 md:mb-12">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-[10px] md:text-[11px] font-light tracking-[0.4em] text-gray-600 uppercase"
              >
                {card.subtitle}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 0.1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-6xl md:text-7xl lg:text-8xl font-extralight text-white select-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {String(card.id).padStart(2, '0')}
              </motion.span>
            </div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 md:mb-8 tracking-tight leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {card.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-gray-500 text-sm md:text-base leading-[1.7] max-w-sm font-normal"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {card.description}
            </motion.p>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="pt-6 md:pt-8 mt-auto border-t border-gray-800/50"
          >
            <div className="flex items-end gap-3">
              <span className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                {card.stats.value}
              </span>
              <span className="text-[10px] md:text-[11px] font-normal tracking-[0.2em] text-gray-600 uppercase pb-2" style={{ fontFamily: "var(--font-body)" }}>
                {card.stats.label}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Hover gradient reveal */}
        <div className="absolute inset-0 bg-gradient-to-b from-acm-blue/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.1 });
  
  // Mouse tracking state
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [hoveredParticle, setHoveredParticle] = useState<number | null>(null);
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const [clickedSquares, setClickedSquares] = useState<Set<number>>(new Set());
  const rafRef = useRef<number | null>(null);
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });

  // Handle square click
  const handleSquareClick = useCallback((id: number) => {
    setClickedSquares(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  // Optimized mouse tracking with RAF and lerp
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!stickyRef.current) return;
    const rect = stickyRef.current.getBoundingClientRect();
    targetMouseRef.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  }, []);

  // Smooth animation loop for mouse position
  useEffect(() => {
    if (!mounted) return;
    
    const animate = () => {
      setMousePosition(prev => ({
        x: prev.x + (targetMouseRef.current.x - prev.x) * 0.08,
        y: prev.y + (targetMouseRef.current.y - prev.y) * 0.08,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    
    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
    const container = stickyRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Ultra-smooth spring physics - lower stiffness, higher damping for premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
    restDelta: 0.0001,
    mass: 0.5,
  });

  // Transform vertical scroll to horizontal movement - using numeric values for GPU optimization
  const xPercent = useTransform(smoothProgress, [0.05, 0.7], [5, -45]);
  // Header stays visible at start then fades
  const headerOpacity = useTransform(smoothProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const headerY = useTransform(smoothProgress, [0.08, 0.18], [0, -50]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-[400vh] bg-black z-20"
    >
      {/* Sticky Container - GPU accelerated */}
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden bg-black" style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}>
        {/* Interactive Mouse Follower Glow */}
        {mounted && (
          <motion.div
            className="absolute pointer-events-none z-0"
            style={{
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(0, 133, 202, 0.25) 0%, transparent 60%)",
              filter: "blur(60px)",
              left: `${mousePosition.x * 100}%`,
              top: `${mousePosition.y * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Floating Interactive Squares (like Hero section) */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            {floatingSquares.map((square) => {
              const isHovered = hoveredSquare === square.id;
              const isClicked = clickedSquares.has(square.id);
              const distanceX = (mousePosition.x * 100 - square.x) / 100;
              const distanceY = (mousePosition.y * 100 - square.y) / 100;
              const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
              const repelStrength = Math.max(0, 1 - distance * 2.5) * 80;
              const repelX = distanceX !== 0 ? (-distanceX / Math.max(distance, 0.1)) * repelStrength : 0;
              const repelY = distanceY !== 0 ? (-distanceY / Math.max(distance, 0.1)) * repelStrength : 0;
              
              return (
                <motion.div
                  key={`square-${square.id}`}
                  className="absolute pointer-events-auto cursor-pointer"
                  style={{
                    width: isHovered ? square.size * 1.4 : square.size,
                    height: isHovered ? square.size * 1.4 : square.size,
                    left: `${square.x}%`,
                    top: `${square.y}%`,
                    borderRadius: isClicked ? "50%" : "6px",
                    background: isClicked 
                      ? "rgba(0, 133, 202, 0.5)" 
                      : isHovered 
                        ? "rgba(0, 133, 202, 0.4)" 
                        : "rgba(0, 133, 202, 0.15)",
                    border: isHovered ? "1px solid rgba(0, 133, 202, 0.6)" : "1px solid rgba(0, 133, 202, 0.2)",
                    boxShadow: isHovered 
                      ? "0 0 30px rgba(0, 133, 202, 0.5), 0 0 60px rgba(0, 133, 202, 0.2)" 
                      : "none",
                    transform: `translate(${repelX}px, ${repelY}px)`,
                    transition: "width 0.3s, height 0.3s, background 0.3s, box-shadow 0.3s, border-radius 0.3s, border 0.3s, transform 0.15s ease-out",
                  }}
                  onMouseEnter={() => setHoveredSquare(square.id)}
                  onMouseLeave={() => setHoveredSquare(null)}
                  onClick={() => handleSquareClick(square.id)}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -15, 0, 10, 0],
                    x: [0, 8, 0, -8, 0],
                    rotate: isClicked ? [0, 360] : [0, 3, 0, -3, 0],
                  }}
                  transition={{
                    y: {
                      duration: square.duration,
                      delay: square.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    x: {
                      duration: square.duration * 0.8,
                      delay: square.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: isClicked 
                      ? { duration: 0.6, ease: "easeInOut" }
                      : {
                          duration: square.duration * 1.2,
                          delay: square.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Falling Interactive Particles */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
            {fallingParticles.map((particle) => {
              const isHovered = hoveredParticle === particle.id;
              const distanceX = (mousePosition.x * 100 - particle.x) / 100;
              const distanceY = (mousePosition.y * 100 - 50) / 100;
              const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
              const repelStrength = Math.max(0, 1 - distance * 3) * 60;
              const repelX = distanceX !== 0 ? (-distanceX / Math.max(distance, 0.1)) * repelStrength : 0;
              const repelY = distanceY !== 0 ? (-distanceY / Math.max(distance, 0.1)) * repelStrength : 0;
              
              return (
                <motion.div
                  key={particle.id}
                  className="absolute pointer-events-auto cursor-pointer"
                  style={{
                    width: isHovered ? particle.size * 1.5 : particle.size,
                    height: isHovered ? particle.size * 1.5 : particle.size,
                    left: `${particle.x}%`,
                    borderRadius: "4px",
                    background: isHovered 
                      ? "rgba(0, 133, 202, 0.7)" 
                      : "rgba(0, 133, 202, 0.25)",
                    boxShadow: isHovered 
                      ? "0 0 20px rgba(0, 133, 202, 0.6), 0 0 40px rgba(0, 133, 202, 0.3)" 
                      : "none",
                    transform: `translate(${repelX}px, ${repelY}px)`,
                    transition: "width 0.3s, height 0.3s, background 0.3s, box-shadow 0.3s, transform 0.2s ease-out",
                  }}
                  onMouseEnter={() => setHoveredParticle(particle.id)}
                  onMouseLeave={() => setHoveredParticle(null)}
                  animate={{
                    y: ["-10%", "110vh"],
                    x: [0, particle.driftAmount, 0, -particle.driftAmount / 2, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 1, 1, 0],
                  }}
                  transition={{
                    y: {
                      duration: particle.fallDuration,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    x: {
                      duration: particle.fallDuration / 2,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: particle.fallDuration,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    opacity: {
                      duration: particle.fallDuration,
                      delay: particle.delay,
                      repeat: Infinity,
                      times: [0, 0.1, 0.5, 0.9, 1],
                    },
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Minimal Background */}
        <div className="pointer-events-none absolute inset-0">
          {/* Single subtle gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full bg-acm-blue/[0.015] blur-[180px]" />
        </div>

        {/* Header - Fixed position at top */}
        <motion.div 
          ref={headerRef} 
          style={{ opacity: headerOpacity, y: headerY }}
          className="relative z-20 pt-20 md:pt-24 lg:pt-28 px-8 md:px-16 lg:px-24"
        >
          <div className="max-w-[1600px] mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-6 mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-[1px] bg-gray-700"
              />
              <span className="text-[11px] font-light tracking-[0.5em] text-gray-600 uppercase">
                About
              </span>
            </div>

            {/* Main Title - Editorial Style */}
            <div className="overflow-hidden pb-2">
              <motion.h2
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.1]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Shaping the future
              </motion.h2>
            </div>
          </div>
        </motion.div>

        {/* Horizontal Scroll Container - Positioned below header */}
        <motion.div
          ref={containerRef}
          style={{ 
            x: useTransform(xPercent, (v) => `${v}%`),
            transform: "translate3d(0,0,0)",
          }}
          className="absolute top-[33%] left-0 flex items-start gap-8 md:gap-16 lg:gap-24 pl-8 md:pl-16 lg:pl-24 pr-[20vw] will-change-transform backface-visibility-hidden"
        >
          {/* Opening Statement Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw]"
          >
            <div className="relative">
              {/* ACM Logo */}
              <div className="w-14 h-14 md:w-16 md:h-16 mb-6 md:mb-8 relative">
                <Image
                  src="/ACM_Logo_white_text.png"
                  alt="ACM"
                  fill
                  className="object-contain"
                />
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl font-normal text-gray-400 leading-[1.6]" style={{ fontFamily: "var(--font-body)" }}>
                We are a collective of{" "}
                <span className="text-white font-semibold">designers, developers,</span>
                {" "}and{" "}
                <span className="text-white font-semibold">innovators</span>
                {" "}building at the intersection of technology and creativity.
              </p>

              {/* Minimal line */}
              <div className="mt-6 md:mt-8 w-12 h-[1px] bg-gray-800" />
            </div>
          </motion.div>

          {/* Content Cards */}
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </motion.div>

        {/* Minimal Progress Indicator */}
        <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-4 z-30">
          <motion.div className="w-24 md:w-32 h-[1px] bg-gray-900 overflow-hidden">
            <motion.div
              className="h-full bg-gray-600"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator text */}
        <div className="absolute bottom-8 right-8 md:right-16 lg:right-24 z-30">
          <span className="text-[9px] md:text-[10px] font-light tracking-[0.3em] text-gray-700 uppercase">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
