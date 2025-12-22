import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

// Use Vite's glob import to load all images dynamically
const imageModules = import.meta.glob("../../assets/Porfolio/*.jpg", {
  eager: true,
}) as Record<string, { default: string }>;

// Convert to array, sort by number, and take first 6
const allImages = Object.entries(imageModules)
  .map(([path, module]) => ({
    path,
    src: module.default,
    num: parseInt(path.match(/(\d+)/)?.[1] || "0"),
  }))
  .sort((a, b) => a.num - b.num)
  .slice(0, 6)
  .map((item) => item.src);

interface PortfolioPreviewProps {
  setActiveTab: (tab: string) => void;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({
  setActiveTab,
}) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12">
          <div className="mb-4 md:mb-0">
            <span className="text-[#4F6F99] font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-2 block">
              Our Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#2C3852]">
              Selected Works
            </h2>
            <p className="text-[#9FA6B2] mt-2 text-sm sm:text-base">
              Showcasing our best projects and design achievements.
            </p>
          </div>
          <button
            onClick={() => setActiveTab("gallery")}
            className="hidden md:flex items-center text-[#C7A76A] font-bold text-sm hover:text-[#2C3852] transition-colors"
          >
            View Full Portfolio <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {allImages.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer aspect-[4/3]"
            >
              {/* Loading placeholder */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-[#F6F8FA] animate-pulse"></div>
              )}
              <img
                src={src}
                alt={`Portfolio ${index + 1}`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                className={`w-full h-full object-cover transform transition duration-700 group-hover:scale-110 ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="absolute inset-0 bg-[#2C3852]/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-3 sm:p-6">
                <div className="w-6 sm:w-8 h-0.5 bg-[#C7A76A] transform scale-x-0 group-hover:scale-x-100 transition duration-500 delay-150"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setActiveTab("gallery")}
            className="btn-primary px-6 sm:px-10 py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-widest shadow-lg inline-flex items-center"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPreview;
