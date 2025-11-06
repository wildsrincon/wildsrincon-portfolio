import {
  AboutSection,
  ExperienceSection,
  HeroSection,
  TestimonialsSection,
} from "@/components/sections";
import { SkillsSection } from "./sections/SkillsSection";

const PortfolioContent = async () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <SkillsSection />
      <ExperienceSection />
      {/* <EducationSection /> */}
      {/* <ProjectsSection /> */}
      {/* <CertificationsSection /> */}
      {/* <AchievementsSection /> */}
      {/* <ServicesSection /> */}
      {/* <BlogSection /> */}
      {/* <ContactSection /> */}
    </>
  )
}

export default PortfolioContent