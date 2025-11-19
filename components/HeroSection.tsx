"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { slideInLeft, slideInRight, floatAnimation } from "@/lib/motion";
import AnimatedBackgroundShapes from "./AnimatedBackgroundShapes";
import Scene3D from "./Scene3D";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden">
      <AnimatedBackgroundShapes />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-2xl"
        >
          <motion.div variants={slideInLeft} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-bibty-charcoal/10 shadow-sm">
            <Star className="text-bibty-orange fill-bibty-orange w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider text-bibty-charcoal">Top Rated Interior Studio</span>
          </motion.div>
          
          <motion.h1 
            variants={slideInLeft}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 text-bibty-charcoal"
          >
            BATHROOM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bibty-orange to-bibty-purple">
              OBSESSED
            </span> <br />
            INTERIORS.
          </motion.h1>
          
          <motion.p 
            variants={slideInLeft}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
          >
            We transform cramped, outdated Singapore bathrooms into stunning, spa-like retreats you'll never want to leave.
          </motion.p>
          
          <motion.div variants={slideInLeft} className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-bibty-charcoal text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:bg-bibty-orange transition-colors group"
            >
              Book Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-bibty-charcoal border-2 border-bibty-charcoal px-8 py-4 rounded-full font-bold text-lg shadow-md hover:bg-gray-50 transition-colors"
            >
              See Transformations
            </motion.button>
          </motion.div>

          <motion.div variants={slideInLeft} className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${i % 2 ? "from-blue-400 to-blue-600" : "from-purple-400 to-purple-600"} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {String.fromCharCode(64+i)}
                </div> 
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-bibty-orange">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold text-gray-500 mt-0.5">Trusted by 500+ homeowners</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Scene & Floating Elements */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="relative h-[500px] md:h-[600px] w-full hidden md:block"
        >
            <motion.div 
                variants={slideInRight} 
                className="absolute inset-0 z-10"
            >
                <Scene3D />
            </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={floatAnimation}
            className="absolute top-10 left-10 bg-bibty-lime text-bibty-charcoal p-4 rounded-full shadow-lg z-40 border-2 border-bibty-charcoal rotate-12"
          >
            <span className="font-display font-bold text-xl">SINCE<br/>2015</span>
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: [0, 0, 1, 1] as const }}
            className="absolute bottom-0 right-0 w-48 h-48 bg-bibty-orange rounded-full opacity-20 blur-3xl -z-10" 
          />
        </motion.div>
      </div>
    </section>
  );
}
