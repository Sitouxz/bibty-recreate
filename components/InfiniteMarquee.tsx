"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee() {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative flex overflow-hidden bg-bibty-charcoal py-6 border-y-4 border-bibty-orange">
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <motion.div
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
                <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-widest">
                    Luxury Bathrooms
                </span>
                <span className="text-4xl text-bibty-orange">✦</span>
                <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-widest">
                    Spa Retreats
                </span>
                <span className="text-4xl text-bibty-orange">✦</span>
                <span className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-widest">
                    Premium Tiles
                </span>
                <span className="text-4xl text-bibty-orange">✦</span>
            </div>
        ))}
      </motion.div>
    </div>
  );
}

