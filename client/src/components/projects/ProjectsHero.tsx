"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Animated gradient text shimmer
function GradientShimmer() {
  return (
    <motion.div
      className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
      animate={{ x: ["-100%", "100%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      style={{ width: "50%" }}
    />
  );
}

// Floating tech words
function FloatingWords() {
  const words = [
    { text: "REACT", x: "10%", y: "20%", size: "text-xs" },
    { text: "NEXT.JS", x: "85%", y: "15%", size: "text-sm" },
    { text: "THREE.JS", x: "15%", y: "70%", size: "text-xs" },
    { text: "FRAMER", x: "80%", y: "75%", size: "text-xs" },
    { text: "TYPESCRIPT", x: "5%", y: "45%", size: "text-[10px]" },
    { text: "AI/ML", x: "90%", y: "50%", size: "text-sm" },
    { text: "WEBGL", x: "25%", y: "85%", size: "text-[10px]" },
    { text: "NODE", x: "70%", y: "88%", size: "text-xs" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {words.map((word, i) => (
        <motion.span
          key={word.text}
          className={`absolute font-mono ${word.size} tracking-[0.3em] text-white/3 uppercase hidden lg:block`}
          style={{ left: word.x, top: word.y, fontFamily: "var(--font-body)" }}
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 4 + i * 0.5, 
            repeat: Infinity, 
            delay: i * 0.3,
            ease: "easeInOut" 
          }}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
}

// Animated orbs
function AnimatedOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-acm-blue/8 blur-[180px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-acm-blue/5 blur-[200px] pointer-events-none"
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, start: () => setHasStarted(true) };
}

export default function ProjectsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Stats counters
  const projectsCounter = useCountUp(5, 1500);
  const techCounter = useCountUp(12, 1500);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#030303]"
    >
      {/* Animated Background Orbs */}
      <AnimatedOrbs />

      {/* Floating Tech Words */}
      <FloatingWords />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(255,255,255,0.5) 100px,
              rgba(255,255,255,0.5) 101px
            )`,
          }}
        />
      </div>

      {/* Corner Decorative Elements */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12">
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 border-l-2 border-t-2 border-white/10" />
          <motion.div 
            className="absolute top-0 left-0 w-2 h-2 bg-acm-blue"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
      
      <div className="absolute top-8 right-8 md:top-12 md:right-12">
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 border-r-2 border-t-2 border-white/10" />
          <motion.div 
            className="absolute top-0 right-0 w-2 h-2 bg-acm-blue"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      </div>

      <div className="absolute bottom-20 left-8 md:bottom-28 md:left-12">
        <div className="w-20 h-20 md:w-24 md:h-24 border-l-2 border-b-2 border-white/10" />
      </div>

      <div className="absolute bottom-20 right-8 md:bottom-28 md:right-12">
        <div className="w-20 h-20 md:w-24 md:h-24 border-r-2 border-b-2 border-white/10" />
      </div>

      {/* Side Labels */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
          <span 
            className="text-[9px] tracking-[0.5em] text-white/30 uppercase"
            style={{ fontFamily: "var(--font-body)", writingMode: "vertical-lr", transform: "rotate(180deg)" }}
          >
            Portfolio
          </span>
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
          <span 
            className="text-[9px] tracking-[0.5em] text-white/30 uppercase"
            style={{ fontFamily: "var(--font-body)", writingMode: "vertical-lr" }}
          >
            2024–25
          </span>
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-[1400px] mx-auto w-full text-center">
          {/* Pre-title Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-acm-blue"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span
                className="text-[10px] md:text-[11px] tracking-[0.4em] text-white/50 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Crafted with Precision
              </span>
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-acm-blue"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <div className="relative mb-4">
            {/* Title Glow Effect */}
            <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none">
              <div 
                className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-acm-blue text-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OUR
              </div>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-white tracking-normal leading-[0.9]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OUR
              </motion.h1>
            </div>
          </div>

          {/* Subtitle "PROJECTS" with gradient */}
          <div className="relative mb-10">
            <div className="overflow-hidden pt-2">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-[20vw] sm:text-[18vw] md:text-[14vw] lg:text-[11vw] font-black tracking-normal leading-none overflow-hidden"
                style={{ 
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #0085CA 0%, #00A3E0 50%, #0085CA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                PROJECTS
                <GradientShimmer />
              </motion.h2>
            </div>
            
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-32 h-0.5 bg-linear-to-r from-transparent via-acm-blue to-transparent mx-auto mt-6"
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/40 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-14"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Every pixel <span className="text-white/60">tells a story</span>. Every interaction is <span className="text-white/60">choreographed</span>. 
            <span className="text-acm-blue"> Welcome</span> to our portfolio of innovation.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onAnimationComplete={() => {
              projectsCounter.start();
              techCounter.start();
            }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-20"
          >
            {[
              { value: "05", label: "Projects Built", icon: "◈" },
              { value: "∞", label: "Iterations", icon: "◇" },
              { value: "12+", label: "Technologies", icon: "✦" },
              { value: "24/7", label: "Dedication", icon: "★" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="group relative text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative px-4 py-3">
                  <motion.div 
                    className="text-acm-blue text-sm mb-2 opacity-60"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-[9px] md:text-[10px] tracking-[0.25em] text-white/30 uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-lg bg-acm-blue/0 group-hover:bg-acm-blue/5 transition-colors duration-300 -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span 
            className="text-[9px] tracking-[0.4em] text-white/30 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore
          </span>
          <div className="w-px h-10 bg-linear-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#030303] to-transparent pointer-events-none z-10" />
    </section>
  );
}
