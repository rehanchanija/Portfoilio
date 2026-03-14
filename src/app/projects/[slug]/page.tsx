"use client";

import { useParams, useRouter } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import ProjectGallery from "@/components/ProjectGallery";

export default function ProjectDetail() {
  const { slug } = useParams();
  const router = useRouter();

  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>

            <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">
              <div className="lg:w-1/2">
                <span className="text-xs uppercase tracking-widest font-bold text-primary px-3 py-1 bg-primary/10 rounded-full mb-6 inline-block">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                <p className="text-muted text-lg md:text-xl leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a 
                    href={project.liveLink || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a 
                    href={project.sourceLink || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                  >
                    <Github size={18} /> Source Code
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <ProjectGallery 
                  images={project.images || [project.image]} 
                  title={project.title} 
                  layout={project.layout as any}
                />
              </div>
            </div>

            {project.details && (
              <div className="space-y-32">
                {/* Overview Section */}
                <div className="max-w-4xl">
                  <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                  <p className="text-muted text-xl leading-relaxed">
                    {project.details.overview}
                  </p>
                </div>

                {/* Features Grid */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Core Components & Functionality</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.details.features.map((feature, i) => (
                      <motion.div 
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 glass rounded-[2rem] border-white/5 group hover:border-primary/20 transition-all"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <CheckCircle2 size={24} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted leading-relaxed">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Table */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Technical Architecture</h2>
                  <div className="glass rounded-[2rem] overflow-hidden border-white/5">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-white/5">
                          <th className="px-8 py-6 font-bold text-primary uppercase tracking-widest text-xs">Component</th>
                          <th className="px-8 py-6 font-bold text-primary uppercase tracking-widest text-xs">Technology</th>
                          <th className="px-8 py-6 font-bold text-primary uppercase tracking-widest text-xs">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {project.details.techStack.map((item, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="px-8 py-6 font-semibold text-white">{item.component}</td>
                            <td className="px-8 py-6 text-muted-foreground italic">{item.tech}</td>
                            <td className="px-8 py-6 text-muted">{item.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Workflow Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Operational Workflow</h2>
                  <div className="grid md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />
                    {project.details.workflow.map((step, idx) => (
                      <motion.div 
                        key={step.step}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative z-10 p-8 glass rounded-[2rem] text-center group"
                      >
                        <div className="w-16 h-16 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-all duration-500">
                          <span className="text-2xl font-black text-primary">{idx + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">{step.step}</h3>
                        <p className="text-sm text-muted leading-relaxed">{step.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>


      <Contact />
    </main>
  );
}
