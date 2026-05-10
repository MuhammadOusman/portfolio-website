import { Dock, HamburgerMenu, StickyCVCTA } from "@/components/layout/Navigation";
import Hero from "@/components/layout/Hero";
import Manifesto from "@/components/layout/Manifesto";
import TechStack from "@/components/layout/TechStack";
import ProjectsGrid from "@/components/layout/ProjectsGrid";
import Hackathons, { Certifications } from "@/components/layout/Credentials";
import SocialsAndGitHub from "@/components/layout/Socials";
import Contact from "@/components/layout/Contact";
import { YTMusicWidget, VisitorCounter } from "@/components/ui/Widgets";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HamburgerMenu />
      <Dock />
      <StickyCVCTA />

      <Hero />
      <Manifesto />
      <TechStack />
      <ProjectsGrid />
      <Hackathons />
      <Certifications />
      <SocialsAndGitHub />
      <Contact />
      <VisitorCounter />

      <YTMusicWidget />
    </div>
  );
}
