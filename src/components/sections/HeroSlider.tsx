import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface HeroSliderProps {
  setActiveTab: (tab: string) => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ setActiveTab }) => {
  const heroImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen md:h-[90vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto md:mx-0 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded bg-[#C7A76A]/20 border border-[#C7A76A] text-[#C7A76A] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-sm">
            Crafting Dreams Into Reality
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
            Where Elegance Meets <br />
            <span className="text-[#C7A76A]">Exceptional Design</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#D9E1EC] mb-8 sm:mb-10 max-w-2xl font-light leading-relaxed mx-auto md:mx-0 px-2 sm:px-0">
            Transform your space into a masterpiece. We create stunning
            interiors that reflect your style, elevate your lifestyle, and
            inspire every moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center md:justify-start px-4 sm:px-0">
            <button
              onClick={() => setActiveTab("gallery")}
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center justify-center"
            >
              View All Designs{" "}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() =>
                window.open("https://wa.me/918490924225", "_blank")
              }
              className="btn-secondary-dark px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wider border border-gray-600 hover:border-[#2C3852] flex items-center justify-center"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              idx === currentImageIndex
                ? "bg-[#C7A76A] w-6 sm:w-8"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
