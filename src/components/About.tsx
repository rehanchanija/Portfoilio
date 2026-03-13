"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building Scalable <br />
              <span className="text-primary tracking-tight">Digital Solutions</span>
            </h2>
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>{portfolioData.summary}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-1">
              <div className="w-full h-full rounded-[1.4rem] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                 <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-primary mb-1">3+</div>
                        <div className="text-sm text-muted">Years Experience</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-accent mb-1">10+</div>
                        <div className="text-sm text-muted">Projects Delivered</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-secondary mb-1">5+</div>
                        <div className="text-sm text-muted">Govt Projects</div>
                    </div>
                    <div className="glass p-6 rounded-2xl text-center">
                        <div className="text-3xl font-bold text-white mb-1">24/7</div>
                        <div className="text-sm text-muted">Innovation Mindset</div>
                    </div>
                 </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
