import { AboutSection } from "../components/sections/about-section";
import { ContactSection } from "../components/sections/contact-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { FeaturedProjectSection } from "../components/sections/featured-project-section";
import { HeroSection } from "../components/sections/hero-section";
import { SkillsSection } from "../components/sections/skills-section";

export function PortfolioPage({ canMountHeavy }) {
  return (
    <main>
      <HeroSection canMountHeavy={canMountHeavy} />
      <AboutSection canMountHeavy={canMountHeavy} />
      <ExperienceSection />
      <FeaturedProjectSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}