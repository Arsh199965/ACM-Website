"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import CinematicRevealText from "@/components/CinematicRevealText";

export default function HeroSection() {
  const stats = useMemo(
    () => [
      { label: "Studios", value: "07" },
      { label: "Live Projects", value: "28" },
      { label: "Awards", value: "16" },
      { label: "Chapters", value: "42" },
    ],
    []
  );

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,136,204,0.35),rgba(0,0,0,0))]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,_transparent_1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-acm-blue/40 via-transparent to-transparent" />
      <div className="absolute inset-x-1/4 top-0 bottom-0 hidden md:flex">
        {[0, 1, 2].map((index) => (
          <div key={index} className="relative flex-1">
            <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/10" />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex max-w-5xl flex-col items-center text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.8em] text-white/50">
          Projects Archive
        </p>
        <CinematicRevealText className="mt-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Stories crafted like midnight premieres and engineered with ACM
            precision.
          </h1>
        </CinematicRevealText>
        <p className="mt-8 max-w-2xl text-base text-white/60">
          Every project is treated like a film: table reads, script rewrites,
          choreography, and a crew list. Scroll to step into each act.
        </p>
      </motion.div>

      <div className="relative z-10 mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-white/5 bg-white/5 px-4 py-6 text-center backdrop-blur"
          >
            <p className="text-4xl font-semibold text-white">{stat.value}</p>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
