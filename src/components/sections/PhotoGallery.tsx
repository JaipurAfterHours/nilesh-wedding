import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Divider } from "../OrnateFrame";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryProps {
  photos: string[];
  title?: string;
  subtitle?: string;
}

export const PhotoGallery = ({
  photos,
  title = "Our Moments",
  subtitle = "A glimpse of our beautiful journey together",
}: PhotoGalleryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Create placeholder photos if none provided
  const displayPhotos = photos.length > 0 ? photos : [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop",
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-cream-dark via-ivory to-cream overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-script text-5xl md:text-7xl text-magenta mb-4">
          {title}
        </h2>
        <p className="font-body text-brown-light max-w-md mx-auto">
          {subtitle}
        </p>
        <Divider className="max-w-xs mx-auto mt-4" />
      </motion.div>

      {/* Gallery Carousel */}
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-xl border-4 border-gold/30 bg-cream shadow-2xl">
            {/* Ornate frame decoration */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="frameGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b45309" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>
                </defs>
                {/* Corner decorations */}
                <path d="M0 0 L50 0 Q0 0 0 50" stroke="url(#frameGold)" strokeWidth="3" fill="none" />
                <path d="M100% 0 L calc(100% - 50px) 0 Q100% 0 100% 50" stroke="url(#frameGold)" strokeWidth="3" fill="none" />
                <path d="M0 100% L50 100% Q0 100% 0 calc(100% - 50px)" stroke="url(#frameGold)" strokeWidth="3" fill="none" />
                <path d="M100% 100% L calc(100% - 50px) 100% Q100% 100% 100% calc(100% - 50px)" stroke="url(#frameGold)" strokeWidth="3" fill="none" />
              </svg>
            </div>

            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {displayPhotos.map((photo, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="aspect-[4/3] md:aspect-[16/9]">
                    <img
                      src={photo}
                      alt={`Couple photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-cream/90 hover:bg-cream text-gold p-3 rounded-full shadow-lg transition-all hover:scale-110 border-2 border-gold/50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-cream/90 hover:bg-cream text-gold p-3 rounded-full shadow-lg transition-all hover:scale-110 border-2 border-gold/50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {displayPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gold scale-125"
                    : "bg-gold/30 hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 overflow-x-auto pb-4"
        >
          <div className="flex gap-3 justify-center">
            {displayPhotos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-gold scale-105 shadow-lg"
                    : "border-gold/30 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
