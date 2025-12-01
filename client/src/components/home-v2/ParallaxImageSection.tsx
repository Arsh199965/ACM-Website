"use client";

import { useRef, useCallback, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/**
 * ParallaxImageSection
 * Video stays fixed and moves UP when scrolling DOWN
 * Visible between About section and Marquee section
 */
export default function ParallaxImageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Set video playback speed
  const handleVideoLoad = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4.0;
      setVideoLoaded(true);
    }
  }, []);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for butter-smooth motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  // Video moves UP when scrolling DOWN
  const videoY = useTransform(smoothProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black"
      style={{ zIndex: 10 }}
    >
      {/* Video container with overflow hidden for parallax effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Video moves inside this container */}
        <motion.div
          className="absolute w-full h-[100%] -top-[0%] left-0"
          style={{ y: videoY }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
            className="w-full h-full object-cover"
          >
            <source src="/home/EDC.mp4" type="video/mp4" />
          </video>

          {/* Dark gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)",
            }}
          />

          {/* Dark translucent glass overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "rgba(0, 0, 0, 0.35)",
              backdropFilter: "blur(1px)",
              WebkitBackdropFilter: "blur(1px)",
            }}
          />

          {/* Subtle blue tint */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              background: "linear-gradient(135deg, rgba(0,133,202,0.4) 0%, transparent 50%, rgba(0,133,202,0.3) 100%)",
            }}
          />
        </motion.div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/90 text-xs md:text-sm uppercase tracking-[0.4em] mb-4 font-medium"
            style={{ 
              fontFamily: "var(--font-body)", 
              textShadow: "0 2px 20px rgba(0,0,0,0.8)" 
            }}
          >
            Where Ideas Take Flight
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-6"
            style={{ 
              fontFamily: "var(--font-heading)", 
              fontWeight: 900, 
              textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" 
            }}
          >
            Building Tomorrow&apos;s
            <span 
              className="block mt-2"
              style={{ 
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                color: "#0085ca",
                textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)"
              }}
            >
              Innovators Today
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-white/95 text-sm md:text-base lg:text-lg max-w-xl mx-auto font-normal"
            style={{ 
              fontFamily: "var(--font-body)", 
              textShadow: "0 2px 20px rgba(0,0,0,0.8)" 
            }}
          >
            Join a community of passionate minds pushing the boundaries of technology
          </motion.p>
        </div>
      </div>
    </section>
  );
}
