import IntroSection from "@/components/sections/IntroSection";
import SectionDivider from "@/components/layout/SectionDivider";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function Home() {
  return (
    <>
      <IntroSection />
      <SectionDivider />

      <AboutSection />
      <SectionDivider />

      <ProjectSection />
      <SectionDivider />

      <SkillsSection />
      <SectionDivider />

      <ExperienceSection />
      <SectionDivider />

      <ContactSection />
    </>
  );
}
