import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Use Vite's glob import to load all images dynamically
const imageModules = import.meta.glob("../assets/Porfolio/*.jpg", {
  eager: true,
}) as Record<string, { default: string }>;

// Convert to array and sort by number
const allImages = Object.entries(imageModules)
  .map(([path, module]) => ({
    path,
    src: module.default,
    num: parseInt(path.match(/(\d+)/)?.[1] || "0"),
  }))
  .sort((a, b) => a.num - b.num)
  .map((item) => item.src);

const GalleryScreen: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setModalImageLoaded(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setModalImageLoaded(false);
      setSelectedIndex((prev) =>
        prev === 0 ? allImages.length - 1 : (prev || 0) - 1
      );
    }
  }, [selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setModalImageLoaded(false);
      setSelectedIndex((prev) =>
        prev === allImages.length - 1 ? 0 : (prev || 0) + 1
      );
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToPrevious, goToNext]);

  // Preload adjacent images
  useEffect(() => {
    if (selectedIndex !== null) {
      const preloadIndices = [
        selectedIndex - 1 >= 0 ? selectedIndex - 1 : allImages.length - 1,
        selectedIndex + 1 < allImages.length ? selectedIndex + 1 : 0,
      ];

      preloadIndices.forEach((idx) => {
        const img = new Image();
        img.src = allImages[idx];
      });
    }
  }, [selectedIndex]);

  return (
    <div className="bg-white min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-start mb-8 sm:mb-12 md:mb-16 border-b border-[#D9E1EC] pb-4 sm:pb-6">
          <span className="text-[#4F6F99] font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-1 sm:mb-2 block">
            Our Work
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#2C3852]">
            Portfolio Gallery
          </h1>
          <p className="text-[#9FA6B2] mt-2 text-sm sm:text-base">
            Explore our complete collection of {allImages.length} interior
            design projects.
          </p>
        </div>

        {/* Masonry-style Grid Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 md:gap-6 space-y-3 sm:space-y-4 md:space-y-6">
          {allImages.map((src, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Loading placeholder */}
              {!loadedImages[index] && (
                <div className="absolute inset-0 bg-[#F6F8FA] animate-pulse flex items-center justify-center min-h-[150px]">
                  <div className="w-6 h-6 border-2 border-[#C7A76A] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={src}
                alt={`Project ${index + 1}`}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                className={`w-full h-auto object-cover transform transition duration-500 group-hover:scale-105 ${
                  loadedImages[index] ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#2C3852]/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center">
                <div className="w-8 h-0.5 bg-[#C7A76A] transform scale-x-0 group-hover:scale-x-100 transition duration-500 delay-150"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 sm:left-6 z-10 w-10 h-10 sm:w-14 sm:h-14 bg-white/10 hover:bg-[#C7A76A] rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 sm:right-6 z-10 w-10 h-10 sm:w-14 sm:h-14 bg-white/10 hover:bg-[#C7A76A] rounded-full flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading spinner */}
            {!modalImageLoaded && (
              <div className="absolute">
                <div className="w-12 h-12 border-3 border-[#C7A76A] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={allImages[selectedIndex]}
              alt={`Project ${selectedIndex + 1}`}
              onLoad={() => setModalImageLoaded(true)}
              className={`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                modalImageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">
              {selectedIndex + 1} / {allImages.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryScreen;
