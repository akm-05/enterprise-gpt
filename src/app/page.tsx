import CarouselIntro from "@/components/CarouselIntro";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import MCPSection from "@/components/MCPSection";
import { FeaturesIntro } from "@/components/FeaturesIntro";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { StackedCards } from "@/components/ui/glass-cards";
import PersonasSection from "@/components/PersonasSection";
import SecuritySection from "@/components/SecuritySection";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <div className="text-white">
          <Hero />
        </div>
        <div className="w-full bg-[#f7f7f7]">
          <FeaturesIntro />
          <FeatureGrid />
          <MCPSection />
          <CarouselIntro />
          <StackedCards />
          <SecuritySection />
          <WhyChooseSection />
          <PersonasSection />
          <FaqSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
