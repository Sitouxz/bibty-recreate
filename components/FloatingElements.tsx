"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SHAPES = ["circle", "square", "triangle", "cross"];
const COLORS = ["#FF5F1F", "#5B21B6", "#CCFF00", "#FDFBF7", "#111827"];

export default function FloatingElements() {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    // Generate random elements only on client to avoid hydration mismatch
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 30 + 10,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute opacity-10"
          style={{
            left: `${el.initialX}%`,
            top: `${el.initialY}%`,
            width: el.size,
            height: el.size,
            backgroundColor: el.shape === "triangle" ? "transparent" : el.color,
            border: el.shape === "triangle" ? "none" : undefined,
            borderRadius: el.shape === "circle" ? "50%" : el.shape === "square" ? "4px" : "0",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: [0, 0, 1, 1] as const,
            delay: el.delay,
          }}
        >
          {el.shape === "triangle" && (
             <div 
               style={{
                 width: 0,
                 height: 0,
                 borderLeft: `${el.size/2}px solid transparent`,
                 borderRight: `${el.size/2}px solid transparent`,
                 borderBottom: `${el.size}px solid ${el.color}`
               }} 
             />
          )}
          {el.shape === "cross" && (
             <div className="relative w-full h-full flex items-center justify-center">
               <div className="absolute w-full h-[20%] bg-current" style={{ backgroundColor: el.color }} />
               <div className="absolute h-full w-[20%] bg-current" style={{ backgroundColor: el.color }} />
             </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

