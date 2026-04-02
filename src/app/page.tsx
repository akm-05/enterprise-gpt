import CarouselIntro from "@/components/CarouselIntro";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import { FeaturesIntro } from "@/components/FeaturesIntro";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { StackedCards } from "@/components/ui/glass-cards";
import PersonasSection from "@/components/PersonasSection";

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
          <CarouselIntro />
          <StackedCards />
          <PersonasSection />
          <FaqSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
