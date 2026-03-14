"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <Link href="/" className="text-xl font-bold text-gradient">
          {portfolioData.name}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Socials & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 border-l border-border pl-4">
            <Link href={portfolioData.socials.github} target="_blank" className="text-muted hover:text-primary">
              <Github size={20} />
            </Link>
            <Link href={portfolioData.socials.linkedin} target="_blank" className="text-muted hover:text-primary">
              <Linkedin size={20} />
            </Link>
          </div>
          <button className="md:hidden text-muted" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass p-6 rounded-2xl flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-muted hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t border-border">
            <Link href={portfolioData.socials.github} target="_blank" className="text-muted hover:text-primary">
              <Github size={24} />
            </Link>
            <Link href={portfolioData.socials.linkedin} target="_blank" className="text-muted hover:text-primary">
              <Linkedin size={24} />
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
