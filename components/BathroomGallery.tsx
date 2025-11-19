"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

// Gallery items with real bathroom images
const GALLERY_ITEMS = [
  { 
    id: 1, 
    title: "Modern Minimalist", 
    type: "HDB 4-Room", 
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", 
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", 
    desc: "Converted a dark utility space into a bright, airy sanctuary.",
    challenge: "Small footprint, lack of natural light.",
    solution: "Mirrored cabinets, light color palette, glass partitions."
  },
  { 
    id: 2, 
    title: "Industrial Chic", 
    type: "Condo", 
    before: "https://images.unsplash.com/photo-1585128720796-b5e2ba878f71?w=800&q=80", 
    after: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80", 
    desc: "Exposed pipes and concrete textures meet warm wood tones.",
    challenge: "Outdated fixtures and dull concrete finish.",
    solution: "Black matte fixtures, wood accents, statement lighting."
  },
  { 
    id: 3, 
    title: "Luxe Marble", 
    type: "Landed", 
    before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80", 
    after: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&q=80", 
    desc: "Floor-to-ceiling marble tiles with gold accents for ultimate luxury.",
    challenge: "Large space lacking character and warmth.",
    solution: "Italian marble, brass fixtures, heated flooring."
  },
];

export default function BathroomGallery({ isOpen, onClose, initialSlide = 0 }: { isOpen: boolean; onClose: () => void; initialSlide?: number }) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  useEffect(() => {
    setCurrentSlide(initialSlide);
  }, [initialSlide, isOpen]);

  if (!isOpen) return null;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % GALLERY_ITEMS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bibty-charcoal/95 backdrop-blur-xl p-4"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-bibty-orange transition-colors z-50">
            <X size={32} />
          </button>

          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
            {/* Image Area (Before/After Slider) */}
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/5] md:aspect-square bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
            >
              {/* After Image */}
              <img 
                src={GALLERY_ITEMS[currentSlide].after}
                alt={`${GALLERY_ITEMS[currentSlide].title} - After`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Label */}
              <div className="absolute top-4 left-4 bg-bibty-lime text-bibty-charcoal px-3 py-1 rounded-full text-xs font-bold uppercase">
                After
              </div>
              
              {/* Navigation Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button onClick={prevSlide} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors">
                  <ArrowLeft size={20} />
                </button>
                <button onClick={nextSlide} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-sm transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Content Area */}
            <div className="text-white">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="inline-block px-3 py-1 rounded-full border border-bibty-orange text-bibty-orange text-xs font-bold uppercase tracking-widest mb-4">
                  {GALLERY_ITEMS[currentSlide].type}
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  {GALLERY_ITEMS[currentSlide].title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {GALLERY_ITEMS[currentSlide].desc}
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="text-bibty-lime font-bold uppercase text-xs mb-1">The Challenge</h4>
                    <p className="text-sm text-gray-400">{GALLERY_ITEMS[currentSlide].challenge}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="text-bibty-lime font-bold uppercase text-xs mb-1">The Solution</h4>
                    <p className="text-sm text-gray-400">{GALLERY_ITEMS[currentSlide].solution}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

