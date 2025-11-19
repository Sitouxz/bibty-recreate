"use client";

import { motion } from "framer-motion";
import { BRAND_COLORS } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function AnimatedBackgroundShapes() {
  // Use state to ensure random values match on client/server or just mount
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" />;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Blob 1 - Purple */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: BRAND_COLORS.purple }}
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Orange */}
      <motion.div
        className="absolute top-1/3 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: BRAND_COLORS.orange }}
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Blob 3 - Lime */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: BRAND_COLORS.lime }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Floating Particles for "Crowded" feel */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-40"
          style={{
            backgroundColor: i % 2 === 0 ? BRAND_COLORS.orange : BRAND_COLORS.purple,
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Geometric Outlines */}
       <motion.div
        className="absolute top-1/4 left-1/2 w-40 h-40 border-4 border-bibty-charcoal/5 rounded-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-20 h-20 border-4 border-bibty-orange/10 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Halftone Texture Overlay (CSS Pattern) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#111827 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      />
    </div>
  );
}
