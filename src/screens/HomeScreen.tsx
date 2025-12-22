import React from "react";
import HeroSlider from "../components/sections/HeroSlider";
import WhyChoose from "../components/sections/WhyChoose";
import ProcessSection from "../components/sections/ProcessSection";
import FeatureBox from "../components/sections/FeatureBox";
import PortfolioPreview from "../components/sections/PortfolioPreview";
import Testimonials from "../components/sections/Testimonials";
import ExcellenceBox from "../components/sections/ExcellenceBox";
import CTABanner from "../components/sections/CTABanner";

interface HomeScreenProps {
  setActiveTab: (tab: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setActiveTab }) => {
  return (
    <div className="animate-fade-in">
      <HeroSlider setActiveTab={setActiveTab} />
      <WhyChoose />
      <ProcessSection />
      <FeatureBox />
      <PortfolioPreview setActiveTab={setActiveTab} />
      <Testimonials />
      <ExcellenceBox />
      <CTABanner />
    </div>
  );
};

export default HomeScreen;
