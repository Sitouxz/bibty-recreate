"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll progress to horizontal movement for desktop
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="process" ref={targetRef} className="bg-bibty-charcoal text-white relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 left-10 z-20">
           <h2 className="text-bibty-lime font-bold tracking-widest uppercase mb-2">How It Works</h2>
           <h3 className="font-display text-5xl font-bold">THE PROCESS</h3>
        </div>

        <motion.div style={{ x }} className="flex gap-10 px-10 md:px-20 min-w-[100vw] md:min-w-max">
          {PROCESS_STEPS.map((step) => (
            <div 
              key={step.id} 
              className="relative w-[85vw] md:w-[600px] h-[60vh] bg-gray-800 rounded-[3rem] p-10 md:p-16 flex flex-col justify-center border border-gray-700 hover:border-bibty-lime transition-colors group"
            >
               <div className="absolute top-10 right-10 text-8xl opacity-10 font-display font-bold group-hover:opacity-20 group-hover:text-bibty-lime transition-all">
                 0{step.id}
               </div>
               
               <div className="mb-8 text-6xl md:text-8xl group-hover:scale-110 transition-transform origin-left duration-500">
                 {step.icon}
               </div>
               
               <h4 className="font-display text-4xl md:text-5xl font-bold mb-6 group-hover:text-bibty-lime transition-colors">
                 {step.title}
               </h4>
               
               <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                 {step.description}
               </p>
               
               {/* Connecting Line Decoration */}
               {step.id !== PROCESS_STEPS.length && (
                 <div className="absolute -right-10 top-1/2 w-10 h-2 bg-gray-700 hidden md:block" />
               )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

