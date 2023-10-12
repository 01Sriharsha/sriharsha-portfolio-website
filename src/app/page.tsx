import IntroSection from "@/components/sections/IntroSection";
import SectionDivider from "@/components/layout/SectionDivider";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import AutoReplyEmailTemplate from "@/email/AutoReplyEmailTemplate";

export default async function Home() {
  return (
    <main className="max-w-screen-md m-auto pb-5 px-4">
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
    </main>
  );
}
