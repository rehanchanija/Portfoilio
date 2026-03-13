"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Cpu, Mic, Sparkles } from "lucide-react";

export default function AIResearch() {
  const { title, description, stack } = portfolioData.aiResearch;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[3rem] border-accent/20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  <Sparkles size={14} /> Personal Research
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
               <p className="text-muted text-lg mb-8">
                 Inspired by platforms like Vapi, this research focuses on building low-latency voice AI systems using local models for speech-to-text, reasoning, and synthesis.
               </p>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                     <Mic className="text-accent" size={20} />
                     <span className="text-sm font-medium">Whisper STT</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <Cpu className="text-accent" size={20} />
                     <span className="text-sm font-medium">Ollama + Mistral</span>
                  </div>
               </div>
            </div>

            <div className="md:w-1/2 bg-white/5 rounded-2xl p-6 border border-white/10">
               <h4 className="text-sm font-bold uppercase text-muted mb-4 tracking-wider">Research Stack</h4>
               <div className="space-y-3">
                  {stack.map((tech, i) => (
                    <motion.div 
                      key={tech}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-white/5"
                    >
                      <span className="text-foreground font-medium">{tech}</span>
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(244,114,182,0.6)]" />
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
