"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BathroomGallery from "./BathroomGallery";

const PROJECTS = [
  { id: 1, title: "Serangoon North", category: "HDB 4-Room", imageColor: "from-blue-100 to-blue-200", pattern: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.5), transparent)" },
  { id: 2, title: "Marine Parade", category: "Condo", imageColor: "from-purple-100 to-purple-200", pattern: "linear-gradient(45deg, rgba(255,255,255,0.5) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.5) 75%, transparent 75%, transparent)" },
  { id: 3, title: "Punggol Waterway", category: "HDB 5-Room", imageColor: "from-green-100 to-green-200", pattern: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.2) 20px, rgba(255,255,255,0.2) 40px)" },
  { id: 4, title: "Joo Chiat Place", category: "Landed", imageColor: "from-orange-100 to-orange-200", pattern: "radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2.5px)" },
  { id: 5, title: "Tiong Bahru", category: "HDB 3-Room", imageColor: "from-yellow-100 to-yellow-200", pattern: "conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 50%, rgba(255,255,255,0.5) 100%)" },
  { id: 6, title: "Orchard Blvd", category: "Luxury Condo", imageColor: "from-pink-100 to-pink-200", pattern: "linear-gradient(135deg,  rgba(255,255,255,0.4) 25%, transparent 25%)" },
];

const CATEGORIES = ["All", "HDB 4-Room", "HDB 5-Room", "Condo", "Landed"];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-bibty-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-bibty-purple font-bold tracking-widest uppercase mb-2">Our Portfolio</h2>
            <h3 className="font-display text-5xl md:text-6xl font-bold text-bibty-charcoal">FEATURED<br/>BATHROOMS</h3>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  activeCategory === cat ? "text-white" : "text-bibty-charcoal hover:bg-gray-200"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-bibty-purple rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br ${project.imageColor} mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                
                {/* Moving Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: [0, 0, 1, 1] as const, repeatDelay: 2 }}
                />

                {/* Pattern Background */}
                <div 
                    className="absolute inset-0 opacity-40"
                    style={{ backgroundImage: project.pattern, backgroundSize: '20px 20px' }} 
                />

                {/* Animated Circle on Hover */}
                 <motion.div 
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    transition={{ duration: 0.3 }}
                 />

                {/* Image Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-bibty-charcoal/30 font-display group-hover:scale-110 transition-transform duration-500">
                  <span className="text-5xl font-bold opacity-20">0{project.id}</span>
                  <span className="text-xl font-bold opacity-40 uppercase tracking-widest mt-2">Before / After</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bibty-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Transformation <span>→</span>
                  </p>
                </div>
              </div>
              
              <h4 className="font-display text-2xl font-bold text-bibty-charcoal">{project.title}</h4>
              <p className="text-gray-500 font-medium">{project.category}</p>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Centered Button */}
        <div className="mt-16 text-center">
          <button className="border-2 border-bibty-charcoal text-bibty-charcoal px-8 py-3 rounded-full font-bold hover:bg-bibty-charcoal hover:text-white transition-colors uppercase tracking-wide">
            View All Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      <BathroomGallery 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
        initialSlide={selectedProject ? (selectedProject % 3) : 0} // Just mapping to demo slides
      />
    </section>
  );
}
