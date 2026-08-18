import SiteHeader from "./components/SiteHeader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import FeaturedProjects from "./components/FeaturedProjects";
import OpenSourceSection from "./components/OpenSourceSection";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E242C] text-white selection:bg-cyan-500/30">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <FeaturedProjects />
        <OpenSourceSection />
        <AchievementsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
