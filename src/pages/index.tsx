import { Header } from "../components/header/Header";
import { HeroSection } from "../features/hero/HeroSection";
import { AboutSection } from "../features/about/AboutSection";
import { ExperiencesSection } from "../features/experiences/ExperiencesSection";
import { ProjectsSection } from "../features/projects/ProjectsSection";

export function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
      <ProjectsSection />
    </>
  );
}
