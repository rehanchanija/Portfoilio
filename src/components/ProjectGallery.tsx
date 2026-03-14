"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  layout?: "mobile" | "desktop";
}

export default function ProjectGallery({ images, title, layout = "desktop" }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const isMobile = layout === "mobile";

  return (
    <div className="w-full flex flex-col items-center space-y-8">
      {/* Gallery Main View */}
      <div className={`relative ${isMobile ? "h-[12cm] w-[6cm]" : "w-full aspect-video"} group`}>
        
        {/* Mobile Frame Decoration */}
        {isMobile && (
          <div className="absolute inset-[-10px] border-[8px] border-[#1a1a1a] rounded-[2.5rem] shadow-2xl z-20 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1a1a1a] rounded-b-xl" /> {/* Notch */}
          </div>
        )}

        {/* Image Container */}
        <div className={`relative w-full h-full overflow-hidden shadow-2xl ${isMobile ? "rounded-[2rem]" : "rounded-3xl glass border-white/10"}`}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-30 hover:bg-primary hover:text-black"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-30 hover:bg-primary hover:text-black"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Pagination Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === idx ? "bg-primary w-6" : "bg-white/30 w-1.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-full justify-center">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative flex-shrink-0 ${isMobile ? "w-12 aspect-[9/16]" : "w-24 aspect-video"} rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === idx ? "border-primary scale-110 shadow-lg shadow-primary/20" : "border-transparent opacity-40 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
