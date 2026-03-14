"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GovernmentHighlight() {
  const govtProjects = portfolioData.projects.filter(p => p.highlight);

  return (
    <section className="py-24 bg-primary/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                <CheckCircle2 size={14} /> Official Government Stack
             </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Government <br /><span className="text-gradient">Solutions Delivered</span></h2>
            <p className="text-muted text-lg mb-8 max-w-lg">
              Spearheading digital transformation for government offices, delivering secure, scalable, and high-impact platforms for millions of citizens.
            </p>
            <div className="space-y-4">
               {["High Security Architecture", "Scalable Citizen Engagement", "Real-time Field Monitoring", "AI-Powered Media Management"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                     <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-primary" />
                     </div>
                     <span className="font-medium">{item}</span>
                  </div>
               ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid gap-6 w-full">
            {govtProjects.map((project, idx) => (
              <Link key={project.title} href={`/projects/${project.slug}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="glass p-6 md:p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/20 transition-all"
                >
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                     <p className="text-sm text-muted mb-6 leading-relaxed">
                       {project.description}
                     </p>
                     <div className="flex flex-wrap gap-2">
                       {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-primary font-medium">
                             {t}
                          </span>
                       ))}
                     </div>
                  </div>
                  {/* Visual accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
