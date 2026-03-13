"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Let&apos;s <span className="text-primary">Connect</span></h2>
            <p className="text-muted text-lg">Currently open to new opportunities and collaborations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[3rem] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase font-bold tracking-widest">Email</p>
                      <p className="text-lg font-medium">{portfolioData.email}</p>
                    </div>
                  </a>
                  <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase font-bold tracking-widest">Phone</p>
                      <p className="text-lg font-medium">{portfolioData.phone}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm font-bold text-muted uppercase tracking-widest mb-4">Location</p>
                <p className="text-xl font-medium">{portfolioData.location}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "LinkedIn", icon: <Linkedin />, link: portfolioData.socials.linkedin, color: "hover:bg-blue-600" },
                { name: "GitHub", icon: <Github />, link: portfolioData.socials.github, color: "hover:bg-gray-800" },
                { name: "Naukri", icon: <ExternalLink />, link: portfolioData.socials.naukri, color: "hover:bg-orange-600" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className={`glass p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all ${social.color} hover:text-white border-white/5`}
                >
                  <div className="scale-125">{social.icon}</div>
                  <span className="font-bold">{social.name}</span>
                </motion.a>
              ))}
              
              <div className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center gap-2 border-primary/20 bg-primary/5">
                 <span className="text-primary font-bold">Available for hire</span>
                 <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              </div>
            </div>
          </div>

          <footer className="mt-24 pt-8 border-t border-white/5 text-center text-muted text-sm">
            <p>© {new Date().getFullYear()} {portfolioData.name}. Built with Next.js & Framer Motion.</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
