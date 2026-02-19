import ChaseNav from "@/components/ChaseNav";
import HeroSection from "@/components/HeroSection";
import ProductCards from "@/components/ProductCards";
import PromoBanner from "@/components/PromoBanner";
import FeaturesGrid from "@/components/FeaturesGrid";
import ChaseFooter from "@/components/ChaseFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ChaseNav />
      <HeroSection />
      <ProductCards />
      <PromoBanner />
      <FeaturesGrid />
      <ChaseFooter />
    </div>
  );
};

export default Index;
