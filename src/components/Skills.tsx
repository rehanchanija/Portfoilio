"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, Database, Layout, Lightbulb, Smartphone } from "lucide-react";

const skillIcons = {
  frontend: <Layout className="text-primary" size={24} />,
  backend: <Database className="text-secondary" size={24} />,
  mobile: <Smartphone className="text-accent" size={24} />,
  ai: <Lightbulb className="text-yellow-400" size={24} />,
};

export default function Skills() {
  const categories = [
    { id: "frontend", name: "Frontend Development", skills: portfolioData.skills.frontend },
    { id: "backend", name: "Backend Architecture", skills: portfolioData.skills.backend },
    { id: "mobile", name: "Mobile Development", skills: portfolioData.skills.mobile },
    { id: "ai", name: "AI Research", skills: portfolioData.skills.ai },
  ];

  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Specialties</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A comprehensive stack focused on building high-performance, scalable, and intuitive applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {skillIcons[category.id as keyof typeof skillIcons]}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-muted group-hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
