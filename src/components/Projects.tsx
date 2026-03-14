"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A selection of my recent works across web, mobile, and enterprise environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.title}
              className="group"
            >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-3xl overflow-hidden group hover:border-primary/20 transition-all h-full"
            >
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 opacity-20 bg-grid" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                
                {/* View Project Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-30 transition-opacity bg-background/40 backdrop-blur-[2px]">
                   <div className="bg-primary text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View Project <ArrowRight size={16} />
                   </div>
                </div>

                <div className="absolute inset-x-6 bottom-6 z-20">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-full mb-2 inline-block backdrop-blur-sm">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-muted mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-medium text-muted-foreground bg-white/5 px-2 py-1 rounded-md border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary transition-colors">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
