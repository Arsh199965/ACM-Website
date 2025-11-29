import {
  HeaderV2,
  HeroV2,
  AboutSection,
  MarqueeSection,
  ProjectsSection,
  ProcessSection,
  GallerySection,
  ContactSection,
  FooterSection,
} from "@/components/home-v2";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeaderV2 />
      <HeroV2 />
      <AboutSection />
      <MarqueeSection />
      <ProjectsSection />
      <GallerySection />
      <ProcessSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
