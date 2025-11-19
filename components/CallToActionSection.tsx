"use client";

import { motion } from "framer-motion";
import { buttonHover, pulseAnimation } from "@/lib/motion";

export default function CallToActionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bibty-orange via-bibty-orange to-bibty-purple z-0" />
      
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />
      
      {/* Moving Shapes in Background */}
      <motion.div 
        className="absolute top-20 left-20 w-64 h-64 bg-bibty-purple rounded-full blur-3xl opacity-50 mix-blend-multiply"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-bibty-lime rounded-full blur-3xl opacity-40 mix-blend-multiply"
        animate={{ 
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-12 md:p-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            READY FOR YOUR <br/>
            <span className="text-bibty-lime">DREAM BATHROOM?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's turn that tired old space into the highlight of your home. 
            Book a free consultation and let's get creative.
          </p>
          
          <motion.button
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="bg-white text-bibty-orange px-10 py-5 rounded-full font-bold text-xl shadow-2xl"
          >
            Book Free Consultation
          </motion.button>
        </motion.div>
        
        {/* Floating Mascot/Element */}
        <motion.div
          animate={pulseAnimation}
          className="absolute -bottom-10 right-10 md:right-40 w-32 h-32 md:w-48 md:h-48 bg-bibty-lime rounded-full flex items-center justify-center shadow-lg rotate-12 hidden md:flex"
        >
          <span className="font-display font-bold text-2xl md:text-4xl text-bibty-charcoal text-center leading-none">
            BOOK<br/>NOW!
          </span>
        </motion.div>
      </div>
    </section>
  );
}

