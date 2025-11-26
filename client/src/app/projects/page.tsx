"use client";

import { HeroSection, TimelineSection } from "@/components/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <TimelineSection />
    </main>
  );
}
