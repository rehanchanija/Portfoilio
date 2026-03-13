"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional <br /> <span className="text-primary">Journey</span></h2>
            <p className="text-muted text-lg max-w-sm">
              My career path reflects a commitment to technical excellence and solving complex business challenges.
            </p>
          </div>

          <div className="md:w-2/3 space-y-8">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-10 border-l-2 border-primary/20 pb-8 last:pb-0"
              >
                <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                
                <div className="glass p-8 rounded-3xl hover:border-primary/20 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-medium mb-4">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
