"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Different parallax speeds for different images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y6 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const images = [
    {
      y: y1,
      className: "col-span-2 row-span-2",
      label: "Hackathon 2024",
      accent: true,
    },
    {
      y: y2,
      className: "col-span-1 row-span-1",
      label: "Workshop",
      accent: false,
    },
    {
      y: y3,
      className: "col-span-1 row-span-2",
      label: "Team Building",
      accent: true,
    },
    {
      y: y4,
      className: "col-span-1 row-span-1",
      label: "Tech Talk",
      accent: false,
    },
    {
      y: y5,
      className: "col-span-2 row-span-1",
      label: "Design Sprint",
      accent: true,
    },
    {
      y: y6,
      className: "col-span-1 row-span-1",
      label: "Community",
      accent: false,
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-black min-h-[200vh] z-10">
      {/* Sticky Container - works on both mobile and desktop */}
      <section
        ref={sectionRef}
        className="sticky top-0 w-full min-h-screen bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24 lg:px-20 overflow-hidden"
      >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-acm-blue/5 blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div ref={headerRef} className="mb-8 sm:mb-12 md:mb-20">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isHeaderInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl font-black text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              MOMENTS
            </motion.h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 h-px bg-acm-blue"
          />
        </div>

        {/* Masonry-style Grid */}
        <div className="grid auto-rows-[150px] sm:auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[250px] md:grid-cols-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              style={{ y: image.y }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden ${image.className}`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black transition-transform duration-700 group-hover:scale-110" />

              {/* Accent border on hover */}
              <div
                className={`absolute inset-0 border transition-colors duration-300 ${
                  image.accent
                    ? "border-transparent group-hover:border-acm-blue"
                    : "border-transparent group-hover:border-gray-700"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-acm-blue/0 transition-colors duration-300 group-hover:bg-acm-blue/10" />

              {/* Label - appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-linear-to-t from-black/80 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0">
                <span className="text-sm font-medium text-white">
                  {image.label}
                </span>
              </div>

              {/* Index Number */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="absolute right-2 top-2 sm:right-4 sm:top-4 font-mono text-2xl sm:text-4xl font-bold text-white/10 transition-colors duration-300 group-hover:text-acm-blue/30 md:text-6xl"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              {/* Corner accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`absolute bottom-4 left-4 ${
                  image.accent ? "block" : "hidden"
                }`}
              >
                <div className="h-px w-8 bg-acm-blue" />
                <div className="h-8 w-px bg-acm-blue" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}
