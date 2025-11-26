"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROJECTS, type Project } from "./data";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.2", "end 0.8"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-6xl px-4 py-32">
      <div className="grid gap-16 md:grid-cols-[220px_1fr]">
        <div className="relative h-full">
          <p className="font-mono text-sm uppercase tracking-[0.4em] text-white/60">
            Chapters
          </p>
          <div className="relative mt-6 h-full min-h-[660px]">
            <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-white/15" />
            <motion.span
              className="absolute left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full bg-linear-to-b from-acm-blue via-acm-blue-light to-transparent"
              style={{ height: lineHeight }}
            />
          </div>
        </div>

        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div
        className={`absolute inset-0 opacity-20 blur-3xl bg-linear-to-br ${project.tone}`}
      />
      <div className="relative z-10">
        <p className="font-mono text-sm uppercase tracking-[0.4em] text-white/60">
          {project.id}
        </p>
        <h3 className="mt-2 text-4xl font-display font-bold">
          {project.title}
        </h3>
        <p className="text-white/70">{project.subtitle}</p>
        <p className="mt-6 text-lg text-white/80">{project.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/70">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-white/20 px-4 py-2"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
