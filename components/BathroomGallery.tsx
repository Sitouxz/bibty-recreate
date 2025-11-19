"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Placeholder for gallery items
const GALLERY_ITEMS = [
  { id: 1, title: "Modern Minimalist", type: "HDB 4-Room", before: "/placeholder-before.jpg", after: "/placeholder-after.jpg", desc: "Converted a dark utility space into a bright, airy sanctuary." },
  { id: 2, title: "Industrial Chic", type: "Condo", before: "/placeholder-before.jpg", after: "/placeholder-after.jpg", desc: "Exposed pipes and concrete textures meet warm wood tones." },
  { id: 3, title: "Luxe Marble", type: "Landed", before: "/placeholder-before.jpg", after: "/placeholder-after.jpg", desc: "Floor-to-ceiling marble tiles with gold accents for ultimate luxury." },
];

export default function BathroomGallery({ isOpen, onClose, initialSlide = 0 }: { isOpen: boolean; onClose: () => void; initialSlide?: number }) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

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
            {/* Image Area (Slider Placeholder) */}
            <div className="relative aspect-[4/5] md:aspect-square bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 font-display text-2xl">AFTER IMAGE {currentSlide + 1}</p>
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
            </div>

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
                    <p className="text-sm text-gray-400">Small footprint, lack of natural light.</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="text-bibty-lime font-bold uppercase text-xs mb-1">The Solution</h4>
                    <p className="text-sm text-gray-400">Mirrored cabinets, light color palette, glass partitions.</p>
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

