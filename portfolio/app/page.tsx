import { DecorativeEffects } from "@/components/DecorativeEffects";
import { PageTransition } from "@/components/PageTransition";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { BusinessSystemsSection } from "@/components/sections/BusinessSystemsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata;

export default function Home() {
  return (
    <PageTransition>
      <main id="main" className="relative overflow-hidden">
        <DecorativeEffects />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BusinessSystemsSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </PageTransition>
  );
}
