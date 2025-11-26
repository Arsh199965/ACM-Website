export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  metrics: string[];
  tone: string;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Solstice",
    subtitle: "Interactive Film Festival Showcase",
    summary:
      "A browser-based premiere room that stitched Dolby Atmos stems, live chat, and volumetric lighting so every premiere felt like a midnight screening.",
    metrics: ["92 countries", "11.4M watch minutes", "Realtime color grading"],
    tone: "from-acm-blue/40 via-indigo-500/40 to-purple-500/30",
  },
  {
    id: "02",
    title: "Pulse",
    subtitle: "Campus-wide Wellbeing Platform",
    summary:
      "Biometric wearables met journaling loops. We designed story-driven dashboards where every data pulse breathed like a slow-motion heartbeat.",
    metrics: ["18 labs", "4 neural models", "Zero downtime"],
    tone: "from-emerald-500/40 via-sky-500/30 to-cyan-500/30",
  },
  {
    id: "03",
    title: "Archive°",
    subtitle: "Living Museum for ACM Chapters",
    summary:
      "An infinite scroll atlas that maps code commits, photos, and oral histories into seasons—so every cohort can see their origin story.",
    metrics: ["120 stories", "35TB media", "AI curation"],
    tone: "from-orange-500/40 via-rose-500/30 to-yellow-400/30",
  },
];
