import {
  HeaderV2,
  HeroV2,
  AboutSection,
  MarqueeSection,
  ProjectsSection,
  MarqueeColumnSection,
  ParallaxImageSection,
} from "@/components/home-v2";
import Hero from "@/components/home/Hero";
import Teams from "@/components/home/Teams";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutSection />
      <ParallaxImageSection />
      <MarqueeSection />
      <ProjectsSection />
      <MarqueeColumnSection />
      <Teams />
    </main>
  );
}
