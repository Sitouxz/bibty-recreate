"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { cardHover, staggerContainer, slideInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-bibty-orange font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
          <h3 className="font-display text-5xl md:text-6xl font-bold text-bibty-charcoal">WHAT WE DO</h3>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={slideInUp}
              className={cn(
                "relative p-8 rounded-3xl min-h-[320px] flex flex-col justify-between group cursor-pointer overflow-hidden border-2 border-transparent hover:border-bibty-charcoal transition-all duration-300",
                service.color,
                service.textColor
              )}
              whileHover={{ 
                  y: -10,
                  rotate: Math.random() * 2 - 1 // Subtle random rotation
              }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <span className="text-4xl md:text-5xl mb-4 block transform group-hover:scale-110 transition-transform duration-300 origin-left">
                        {service.icon}
                    </span>
                    <motion.div
                        initial={{ opacity: 0, x: -10, y: 10 }}
                        whileHover={{ opacity: 1, x: 0, y: 0 }}
                        className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
                    >
                        <ArrowUpRight size={20} />
                    </motion.div>
                </div>
                
                <div>
                  <h4 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-3">
                    {service.title}
                  </h4>
                  <p className={cn("text-sm md:text-base opacity-90 font-medium leading-relaxed")}>
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative Circle on Hover */}
              <div
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-white opacity-0 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              />
              
              {/* Grid Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
