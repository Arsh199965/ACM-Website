"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useState, useRef } from "react";
import { Plus } from "lucide-react";

interface ProcessItem {
  id: string;
  number: string;
  title: string;
  description: string[];
}

const processItems: ProcessItem[] = [
  {
    id: "01",
    number: "01",
    title: "Technical Development",
    description: [
      "Our technical wing focuses on building cutting-edge solutions across web development, machine learning, and data science. We emphasize hands-on learning through workshops, hackathons, and real-world projects.",
      "Members gain expertise in modern frameworks, cloud technologies, and industry-standard practices. From React and Next.js to Python and TensorFlow, we cover the full spectrum of technical skills.",
    ],
  },
  {
    id: "02",
    number: "02",
    title: "Creative Design",
    description: [
      "During the design phase, we explore UI/UX principles, visual design, and brand identity. Our creative team works to craft user-centered experiences that are both beautiful and functional.",
      "We adopt a collaborative approach, actively seeking feedback and iterating on designs. This ensures every project exceeds expectations with seamless user experiences.",
    ],
  },
  {
    id: "03",
    number: "03",
    title: "Content & Media",
    description: [
      "Content creation lies at the core of our communication strategy. From technical blogs and tutorials to social media content, we focus on creating engaging material that educates and inspires.",
      "Our media team handles photography, videography, and graphic design—capturing the essence of our events and showcasing the vibrant community we've built.",
    ],
  },
  {
    id: "04",
    number: "04",
    title: "Community Building",
    description: [
      "We believe that community is essential to growth. Through events, mentorship programs, and networking sessions, we create opportunities for members to connect, learn, and grow together.",
      "Our initiatives focus on fostering an inclusive environment where diverse perspectives come together to create extraordinary outcomes.",
    ],
  },
];

function ProcessAccordion({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: ProcessItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-b border-gray-800"
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-8 text-left transition-all duration-300 hover:bg-white/5 md:py-10"
      >
        <div className="flex items-center gap-6 md:gap-12">
          <motion.span
            animate={{
              color: isOpen ? "rgb(0, 133, 202)" : "rgb(107, 114, 128)",
            }}
            className="font-mono text-xs md:text-sm"
          >
            {item.number}
          </motion.span>
          <motion.h3
            animate={{
              color: isOpen ? "rgb(0, 133, 202)" : "rgb(255, 255, 255)",
            }}
            className="text-2xl font-extrabold transition-colors md:text-3xl lg:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {item.title}
          </motion.h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Plus
            className={`h-6 w-6 transition-colors duration-300 md:h-8 md:w-8 ${
              isOpen ? "text-acm-blue" : "text-white"
            }`}
            strokeWidth={1}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 pb-10 pl-12 pr-4 md:grid-cols-2 md:gap-12 md:pl-24 md:pr-8">
              {/* Image Placeholder with animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-4/3 overflow-hidden bg-gray-900"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-800 via-gray-900 to-black">
                  <span className="text-[15vw] font-bold text-gray-800/30 md:text-[8vw]">
                    {item.number}
                  </span>
                </div>
                {/* Accent corner */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-4 left-4 h-px bg-acm-blue"
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 60 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-4 left-4 w-px bg-acm-blue"
                />
              </motion.div>

              {/* Description with staggered reveal */}
              <div className="space-y-4">
                {item.description.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                    className="text-base leading-relaxed text-gray-400"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProcessSection() {
  const [openId, setOpenId] = useState<string | null>("01");
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative w-full bg-black px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[600px] w-[600px] rounded-full bg-acm-blue/5 blur-[200px]" />
        <div className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-acm-blue/3 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-16 grid grid-cols-1 gap-8 md:mb-24 md:grid-cols-2"
        >
          <motion.div style={{ y: headerY }}>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl font-black text-white md:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                WHAT WE
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl font-black text-acm-blue md:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                DO
              </motion.h2>
            </div>
          </motion.div>
          <div className="flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-gray-400 md:text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Things we can help you with:
            </motion.p>
          </div>
        </div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800"
        >
          {processItems.map((item, index) => (
            <ProcessAccordion
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
