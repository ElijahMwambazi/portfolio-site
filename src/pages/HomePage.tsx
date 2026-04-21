import { HeroSection } from "../components/sections/home/HeroSection";
import { AboutSection } from "../components/sections/home/AboutSection";
import { ContactSection } from "../components/sections/home/ContactSection";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
