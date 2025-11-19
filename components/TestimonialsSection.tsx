"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-bibty-orange font-bold tracking-widest uppercase mb-2">Love Notes</h2>
          <h3 className="font-display text-5xl font-bold text-bibty-charcoal">WHAT CLIENTS SAY</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-bibty-cream p-8 rounded-3xl relative border border-transparent hover:border-bibty-orange transition-colors"
            >
              <Quote className="text-bibty-orange w-10 h-10 mb-6 opacity-50" />
              
              <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full" />
                <div>
                  <h4 className="font-bold text-bibty-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

