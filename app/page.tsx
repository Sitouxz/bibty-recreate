import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import FloatingElements from "@/components/FloatingElements";
import ScrollVelocityParallax from "@/components/ScrollVelocityParallax";

export default function Home() {
  return (
    <main className="min-h-screen bg-bibty-cream selection:bg-bibty-orange selection:text-white relative">
      <ScrollProgressBar />
      <FloatingElements />
      <NavBar />
      
      <HeroSection />
      <InfiniteMarquee />
      <ServicesSection />
      <ScrollVelocityParallax />
      <FeaturedProjects />
      <ProcessSection />
      <TestimonialsSection />
      <CallToActionSection />
      
      <Footer />
    </main>
  );
}
