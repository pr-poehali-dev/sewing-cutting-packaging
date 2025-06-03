import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialtySection from "@/components/SpecialtySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SpecialtySection />
    </div>
  );
};

export default Index;
