"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string;
  color: string;
  alignRight: boolean;
  speed: number;
  date?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "SMART DELHI IDEATHON 2025",
    description:
      "Smart Delhi Ideathon 2025 brought together students across Delhi to develop tech-based ideas addressing civic challenges like air pollution, waste management, and women's safety. Hosted at GGSIPU East Delhi Campus, it fostered interdisciplinary collaboration and social innovation under 'Youth for Change'.",
    tags: "#ideathon #urbaninnovation #smartcity #youthforchange",
    color: "bg-[#1a1a2e]",
    alignRight: false,
    speed: -0.7,
    date: "Dec 24, 2024 – Feb 4, 2025",
    link: "https://sdi2025.in",
  },
  {
    title: "INDO-AMERICAN EDUCATION SEMINAR",
    description:
      "A joint ACM–ACM-W seminar featuring Dr. Ron Buckmire (Dean, Marist University, NY). The talk explored Indo-American higher-education linkages, global scholarships, and AI-driven curricula, inspiring students to pursue international academic opportunities.",
    tags: "#seminar #international #highereducation #collaboration",
    color: "bg-[#1e293b]",
    alignRight: true,
    speed: -0.25,
    date: "January 23, 2025",
  },
  {
    title: "KICKSTART WITH ACM",
    description:
      "The annual induction session introducing new members to ACM's mission and benefits. Students discovered opportunities in hackathons, research, and leadership roles while learning how to engage with the global ACM community.",
    tags: "#orientation #induction #community #acm",
    color: "bg-[#1a1a2e]",
    alignRight: false,
    speed: -0.75,
    date: "August 12, 2025",
  },
  {
    title: "BUILDING AI CHATBOTS",
    description:
      "An interactive, hands-on workshop where students built chatbots using Python and OpenAI APIs. Participants learned NLP fundamentals and deployed functional AI chatbots, bridging theory with practice.",
    tags: "#workshop #ai #python #openai #nlp",
    color: "bg-[#1e293b]",
    alignRight: true,
    speed: -0.25,
    date: "August 22, 2025",
  },
  {
    title: "FAANG WEEKEND EP 1",
    description:
      "The first episode of the flagship #FAANGWeekend series featuring Bharat Ahuja. The session focused on navigating placements at top-tier tech companies with strategies for interview prep, resumes, and resilience.",
    tags: "#faangweekend #career #microsoft #placements",
    color: "bg-[#1a1a2e]",
    alignRight: false,
    speed: -0.7,
    date: "August 30, 2025",
  },
  {
    title: "FAANG WEEKEND EP 2",
    description:
      "The second episode featured Sanket Singh (Software Engineer II, Meta), sharing practical guidance on SDE interviews, resume optimization, and career growth, broadcast live via YouTube.",
    tags: "#faangweekend #meta #sde #career #mentorship",
    color: "bg-[#1e293b]",
    alignRight: true,
    speed: -0.25,
    date: "September 21, 2025",
  },
  {
    title: "HELA CROSSROADS",
    description:
      "A collaborative workshop with HeLa Labs introducing students to Web3 fundamentals. Participants created and deployed decentralized applications, smart contracts, and tokens on the HeLa L1 test chain.",
    tags: "#web3 #blockchain #dapp #smartcontracts",
    color: "bg-[#1a1a2e]",
    alignRight: false,
    speed: -0.75,
    date: "September 26, 2025",
  },
  {
    title: "SILICON QUEST: ANIMEVERSE 2025",
    description:
      "Hosted during Elysian 2025, this anime-themed hackathon blended technology, storytelling, and innovation. Teams built creative prototypes in a gamified coding environment celebrating pop culture and tech.",
    tags: "#hackathon #elysian #anime #creative #tech",
    color: "bg-[#1e293b]",
    alignRight: true,
    speed: -0.25,
    date: "October 5 – 7, 2025",
    link: "https://unstop.com",
  },
  {
    title: "ACM CODECATALYST 0x6",
    description:
      "A 6-day online bootcamp covering Data Structures & Algorithms, Development, and Machine Learning through nightly live sessions. Designed to make advanced topics accessible and ignite continued learning.",
    tags: "#bootcamp #dsa #development #ml #coding",
    color: "bg-[#1a1a2e]",
    alignRight: false,
    speed: -0.7,
    date: "Oct 29 – Nov 3, 2025",
  },
];

/**
 * HOOK: useParallax
 * A simple custom hook to calculate parallax offset based on scroll position.
 */
export const useParallax = (ref: React.RefObject<HTMLDivElement | null>, speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate distance from center of viewport
      const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;

      // Multiply by speed to get the pixel offset
      setOffset(distanceFromCenter * speed);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);

  return offset;
};

/**
 * COMPONENT: ProjectItem
 * Replicates the structure of the provided reference code
 */
function ProjectItem({
  title,
  description,
  tags,
  color,
  alignRight = false,
  speed = -0.1,
  date,
  link,
}: Project) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply parallax to the entire container
  const yOffset = useParallax(containerRef, speed);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[100vh] max-w-7xl mx-auto py-24 px-6 md:px-12 flex flex-col ${alignRight ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 md:gap-24`}
      style={{ transform: `translate3d(0px, ${yOffset}px, 0px)` }}
    >
      {/* --- Visual Wrapper (Video Placeholder) --- */}
      <div className="w-full md:w-3/5 relative group">
        <div className="relative overflow-hidden rounded-lg shadow-2xl transition-transform duration-75 ease-out will-change-transform">
          {/* Placeholder for Video/Image */}
          <div
            className={`w-full aspect-video ${color} flex items-center justify-center text-white/20 font-bold text-xl tracking-widest uppercase`}
          >
            Video Placeholder
          </div>

          {/* Hover Button Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
            <div className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Site <ArrowUpRight size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* --- Info Wrapper --- */}
      <div className="w-full md:w-2/5 flex flex-col relative">
        {/* The 'Timeline' visual elements */}
        <div
          className={`hidden md:block absolute top-0 bottom-0 ${alignRight ? "-right-12" : "-left-12"
            } w-px bg-gray-700`}
        >
          <div className="absolute top-1/4 -left-[5px] w-[11px] h-[11px] border-2 border-gray-600 rounded-full bg-[#0d0d0d] z-10" />
        </div>

        <div
          className={`space-y-6 ${alignRight ? "md:text-right" : "md:text-left"
            }`}
        >
          {date && (
            <p className={`text-sm font-mono text-acm-blue ${alignRight ? "ml-auto" : ""}`}>
              📅 {date}
            </p>
          )}

          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {title}
          </h3>

          <div
            className={`h-px w-12 bg-gray-600 my-4 inline-block ${alignRight ? "ml-auto" : ""
              }`}
          />

          <div className="text-lg text-gray-400 leading-relaxed font-normal" style={{ fontFamily: "var(--font-body)" }}>
            {description}
          </div>

          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide leading-loose">
            {tags}
          </p>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 text-sm font-bold border-b-2 border-white text-white pb-1 w-max hover:text-acm-blue hover:border-acm-blue transition-colors inline-block ${alignRight ? "ml-auto" : "mr-auto"
                }`}
            >
              VIEW EVENT →
            </a>
          ) : (
            <button
              className={`mt-4 text-sm font-bold border-b-2 border-white text-white pb-1 w-max hover:text-acm-blue hover:border-acm-blue transition-colors ${alignRight ? "ml-auto" : "mr-auto"
                }`}
            >
              VIEW DETAILS
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-black overflow-hidden z-10"
    >
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-black z-5"/>
      {/* Grid Background - Contained within section */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(75, 85, 99, 0.9) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(75, 85, 99, 0.9) 2px, transparent 2px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Content container */}
      <div className="relative z-10 py-24 overflow-hidden">
        <div className="container mx-auto">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              color={project.color}
              alignRight={project.alignRight}
              speed={project.speed}
              date={project.date}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
