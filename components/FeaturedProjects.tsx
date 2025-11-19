"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BathroomGallery from "./BathroomGallery";

const PROJECTS = [
  { 
    id: 1, 
    title: "Serangoon North", 
    category: "HDB 4-Room", 
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    imageColor: "from-blue-100 to-blue-200", 
    features: ["Walk-in Shower", "Smart Storage", "Modern Fixtures"],
    year: "2024"
  },
  { 
    id: 2, 
    title: "Marine Parade", 
    category: "Condo", 
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80",
    imageColor: "from-purple-100 to-purple-200", 
    features: ["Marble Tiles", "Rain Shower", "Floating Vanity"],
    year: "2024"
  },
  { 
    id: 3, 
    title: "Punggol Waterway", 
    category: "HDB 5-Room", 
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    imageColor: "from-green-100 to-green-200", 
    features: ["Dual Sink", "Custom Carpentry", "LED Lighting"],
    year: "2023"
  },
  { 
    id: 4, 
    title: "Joo Chiat Place", 
    category: "Landed", 
    image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800&q=80",
    imageColor: "from-orange-100 to-orange-200", 
    features: ["Spa Bathtub", "Premium Finishes", "Smart Mirror"],
    year: "2023"
  },
  { 
    id: 5, 
    title: "Tiong Bahru", 
    category: "HDB 3-Room", 
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80",
    imageColor: "from-yellow-100 to-yellow-200", 
    features: ["Compact Design", "Glass Partition", "Built-in Shelves"],
    year: "2024"
  },
  { 
    id: 6, 
    title: "Orchard Blvd", 
    category: "Luxury Condo", 
    image: "https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80",
    imageColor: "from-pink-100 to-pink-200", 
    features: ["Italian Tiles", "Statement Lighting", "His & Hers Vanity"],
    year: "2023"
  },
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
              <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                
                {/* Actual Bathroom Image */}
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Moving Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: [0, 0, 1, 1] as const, repeatDelay: 2 }}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Animated Circle on Hover */}
                 <motion.div 
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30"
                    transition={{ duration: 0.3 }}
                 />

                {/* Project Info Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-between text-white font-display transition-all duration-500 p-6">
                  <div className="text-center opacity-90 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-4xl font-bold mb-2 block drop-shadow-lg">0{project.id}</span>
                    <span className="text-sm font-bold uppercase tracking-widest drop-shadow-lg">Before / After</span>
                  </div>
                  
                  {/* Feature Tags - Show on hover */}
                  <div className="flex flex-wrap gap-2 justify-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-bibty-charcoal">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="text-sm font-bold opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{project.year}</div>
                </div>
                
                {/* Bottom Overlay - Call to Action */}
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
