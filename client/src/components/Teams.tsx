"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Network,
  PenTool,
  Camera,
  Film,
  Palette,
  LucideIcon,
} from "lucide-react";
import AnimatedText from "./AnimatedText";

interface TeamProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const techTeams: TeamProps[] = [
  {
    number: "01",
    icon: Brain,
    title: "Machine Learning",
    description:
      "Exploring the frontiers of AI, from neural networks to predictive modeling.",
  },
  {
    number: "02",
    icon: Code,
    title: "Web Development",
    description:
      "Building scalable, modern web applications with cutting-edge technologies.",
  },
  {
    number: "03",
    icon: Network,
    title: "DSA & System Design",
    description:
      "Mastering algorithms and architecting robust, high-performance systems.",
  },
];

const creativeTeams: TeamProps[] = [
  {
    number: "01",
    icon: PenTool,
    title: "Content & PR",
    description:
      "Crafting compelling narratives and managing our public presence.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Photo & Video",
    description: "Capturing moments and telling stories through visual media.",
  },
  {
    number: "03",
    icon: Film,
    title: "Video Editing",
    description:
      "Bringing visuals to life with professional post-production and effects.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Graphics & UI/UX",
    description: "Designing intuitive interfaces and stunning visual assets.",
  },
];

export default function Teams() {
  return (
    <section className="w-full bg-black text-white py-8 px-6 md:px-12 lg:px-16 flex justify-center">
      <div className="max-w-[1800px] mx-auto space-y-12">
        {/* Tech Teams */}
        <div className="mb-4 h-[105vh]">
          <AnimatedText className="mb-12">
            <h2 className="text-5xl md:text-7xl font-title font-bold text-white mb-6 tracking-tight">
              Technical Domains
            </h2>
            <div className="h-[2px] w-24 bg-acm-blue rounded-full" />
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 pt-12">
            {techTeams.map((team, index) => (
              <TeamCard key={index} {...team} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Creative Teams */}
        <div className="mb-4 h-[105vh]">
          <AnimatedText className="mb-12">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              Creative Domains
            </h2>
            <div className="h-[2px] w-24 bg-acm-blue rounded-full" />
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 pt-12">
            {creativeTeams.map((team, index) => (
              <TeamCard key={index} {...team} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  number,
  icon: Icon,
  title,
  description,
  delay,
}: TeamProps & { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
    >
      {/* Top Section: Number and Icon */}
      <div className="relative mb-6">
        {/* Large Background Number - Clipped to show top half */}
        <div className="relative h-24 overflow-hidden select-none pointer-events-none">
          <span className="absolute -top-4 left-0 text-[8rem] leading-none font-display font-bold text-[#1a1a1a] transition-colors duration-500 group-hover:text-[#222]">
            {number}
          </span>
        </div>
        <div className="-translate-y-6 bg-black">
          {/* Divider Line */}
          <div className="w-full h-px bg-linear-to-r from-gray-800 via-gray-500 to-gray-800 mb-8 group-hover:bg-gray-700 transition-colors duration-500" />

          {/* Icon */}
          <div className="mt-4 mb-6">
            <Icon
              size={28}
              strokeWidth={1.5}
              className="text-white group-hover:text-acm-blue transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-10">
        <h3 className="text-2xl md:text-3xl font-title  text-white tracking-wide group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-transparent bg-clip-text bg-linear-to-r from-gray-600 via-gray-500 to-gray-600 leading-tight text-xl md:text-2xl font-light max-w-sm group-hover:text-gray-500 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
