"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import AnimatedText from "../AnimatedText";
import SplitText from "../SplitText";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const [clickedSquares, setClickedSquares] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });

  // Optimized mouse tracking with RAF and lerp for smooth 60fps
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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
        x: prev.x + (targetMouseRef.current.x - prev.x) * 0.1,
        y: prev.y + (targetMouseRef.current.y - prev.y) * 0.1,
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

  useEffect(() => {
    setMounted(true);
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove]);

  // Floating squares animation data - static values to avoid hydration mismatch
  const floatingSquares = [
    { id: 0, size: 45, x: 8, y: 15, delay: 0.5, duration: 20 },
    { id: 1, size: 32, x: 85, y: 10, delay: 1.2, duration: 18 },
    { id: 2, size: 28, x: 15, y: 75, delay: 0.8, duration: 22 },
    { id: 3, size: 38, x: 92, y: 80, delay: 1.5, duration: 19 },
    { id: 4, size: 25, x: 50, y: 5, delay: 0.3, duration: 21 },
    { id: 5, size: 42, x: 25, y: 45, delay: 1.0, duration: 17 },
    { id: 6, size: 30, x: 70, y: 35, delay: 0.7, duration: 23 },
    { id: 7, size: 35, x: 5, y: 55, delay: 1.8, duration: 20 },
    { id: 8, size: 27, x: 95, y: 50, delay: 0.4, duration: 18 },
    { id: 9, size: 40, x: 40, y: 85, delay: 1.3, duration: 19 },
    { id: 10, size: 33, x: 60, y: 20, delay: 0.9, duration: 22 },
    { id: 11, size: 29, x: 12, y: 30, delay: 1.6, duration: 21 },
    { id: 12, size: 36, x: 78, y: 65, delay: 0.6, duration: 17 },
    { id: 13, size: 31, x: 88, y: 25, delay: 1.1, duration: 20 },
    { id: 14, size: 26, x: 22, y: 60, delay: 0.2, duration: 18 },
    { id: 15, size: 44, x: 55, y: 90, delay: 1.4, duration: 23 },
    { id: 16, size: 34, x: 35, y: 12, delay: 0.8, duration: 19 },
    { id: 17, size: 39, x: 72, y: 78, delay: 1.7, duration: 21 },
    { id: 18, size: 28, x: 48, y: 42, delay: 0.5, duration: 20 },
    { id: 19, size: 37, x: 82, y: 58, delay: 1.0, duration: 22 },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center z-40"
    >
      {/* Interactive Mouse Follower Glow */}
      {mounted && (
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(0, 133, 202, 0.4) 0%, transparent 60%)",
            filter: "blur(80px)",
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Floating Background Squares - Fully Interactive */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {floatingSquares.map((square) => {
            const isHovered = hoveredSquare === square.id;
            const isClicked = clickedSquares.has(square.id);
            const distanceX = (mousePosition.x * 100 - square.x) / 100;
            const distanceY = (mousePosition.y * 100 - square.y) / 100;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const repelStrength = Math.max(0, 1 - distance * 2) * 80;
            const repelX = distanceX !== 0 ? (-distanceX / distance) * repelStrength : 0;
            const repelY = distanceY !== 0 ? (-distanceY / distance) * repelStrength : 0;
            
            return (
              <motion.div
                key={square.id}
                className="absolute cursor-pointer"
                style={{
                  width: isHovered ? square.size * 1.3 : square.size,
                  height: isHovered ? square.size * 1.3 : square.size,
                  left: `${square.x}%`,
                  top: `${square.y}%`,
                  borderRadius: isClicked ? "50%" : "8px",
                  background: isClicked 
                    ? "linear-gradient(135deg, #0085ca 0%, #00a3ff 100%)" 
                    : isHovered 
                      ? "rgba(0, 133, 202, 0.6)" 
                      : "rgba(0, 133, 202, 0.3)",
                  boxShadow: isHovered 
                    ? "0 0 30px rgba(0, 133, 202, 0.5), 0 0 60px rgba(0, 133, 202, 0.3)" 
                    : isClicked
                      ? "0 0 40px rgba(0, 163, 255, 0.6), inset 0 0 20px rgba(255,255,255,0.2)"
                      : "none",
                  transform: `translate(${repelX}px, ${repelY}px)`,
                  transition: "width 0.3s, height 0.3s, background 0.3s, box-shadow 0.3s, border-radius 0.5s, transform 0.15s ease-out",
                  zIndex: isHovered ? 10 : 1,
                }}
                onMouseEnter={() => setHoveredSquare(square.id)}
                onMouseLeave={() => setHoveredSquare(null)}
                onClick={() => handleSquareClick(square.id)}
                animate={{
                  y: [0, -80, 0],
                  x: [0, square.id % 2 === 0 ? 60 : -60, 0],
                  rotate: isClicked ? [0, 360] : [0, 90, 0],
                }}
                transition={{
                  duration: isClicked ? 2 : square.duration,
                  delay: square.delay,
                  repeat: Infinity,
                  ease: isClicked ? "linear" : "linear",
                }}
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0, 133, 202, 0.05) 0%, transparent 60%)",
        }}
      />

      {/* Dynamic Gradient Glows */}
      {mounted && (
        <>
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: "800px",
              height: "800px",
              background:
                "radial-gradient(circle, rgba(0, 133, 202, 0.5) 0%, transparent 50%)",
              filter: "blur(100px)",
            }}
            animate={{
              x: ["20%", "80%", "20%"],
              y: ["10%", "70%", "10%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: "700px",
              height: "700px",
              background:
                "radial-gradient(circle, rgba(0, 163, 255, 0.4) 20%, transparent 50%)",
              filter: "blur(120px)",
            }}
            animate={{
              x: ["-70%", "10%", "-70%"],
              y: ["-60%", "10%", "-60%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(0, 133, 202, 0.35) 0%, transparent 50%)",
              filter: "blur(110px)",
            }}
            animate={{
              x: ["-50%", "60%", "-50%"],
              y: ["-50%", "70%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo and Supported Tools Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-4"
          >
            <Image
              src="/ACM_Logo_white_text.png"
              alt="ACM Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            {/* <div className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full flex items-center gap-2">
              <span className="text-xs text-gray-400">50+</span>
              <span className="text-xs text-gray-300">
                Active Enthusiastic Members
              </span>
            </div> */}
          </motion.div>

          {/* Main Headline */}
          <div className="mb-6 max-w-6xl">
            <AnimatedText delay={0.4}>
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-acm-blue to-acm-blue-light">
                  The Next Era of
                </span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.6}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-normal" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="text-white">GGSIPU EDC ACM</span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.8}>
              <h1 className="font-bold leading-[1.1] tracking-tight mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-normal" style={{ fontFamily: "var(--font-heading)" }}>
                  Student Chapter
                </span>
              </h1>
            </AnimatedText>
          </div>

          {/* Description */}
          <AnimatedText delay={1.0} className="max-w-3xl mb-8">
            <p className="text-sm md:text-md lg:text-lg text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Empowering students to innovate, collaborate, and lead in the
              world of computing, transforming ideas into impact through
              cutting-edge research, hands-on projects and a thriving technical
              community.
            </p>
          </AnimatedText>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <button className="group relative px-2 md:px-4 py-2 md:py-4 bg-white text-black hover:bg-acm-blue hover:text-white border border-gray-800 rounded-full overflow-hidden transition-all duration-500">
              <span className="relative font-bold tracking-wide text-xs md:text-sm">
                Join Our Community
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
