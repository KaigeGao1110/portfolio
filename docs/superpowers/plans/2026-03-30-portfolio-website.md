# Portfolio Website Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A stunning dark-cyber personal portfolio for Kaige Gao — AI agent & cloud architect — built with Next.js 14, framer-motion, and tsparticles.

**Architecture:** Single-page App Router application with 7 sections assembled in page.tsx. Each section is a standalone client component. Particle background is a full-screen fixed canvas behind all content. Smooth scroll navigation via anchor links. All animations via framer-motion whileInView + useInView hooks.

**Tech Stack:** Next.js 16 (App Router, TypeScript, Tailwind v4), framer-motion 12, @tsparticles/react + @tsparticles/slim, lucide-react, Inter font via next/font/google.

---

## File Structure

```
src/app/
  globals.css          # Dark theme base, scrollbar, selection styles
  layout.tsx           # Metadata, Inter font, body wrapper
  page.tsx             # Assembles all 7 sections + particle background

src/components/
  Navbar.tsx           # Fixed frosted-glass nav, smooth scroll links
  Hero.tsx             # tsparticles bg, typewriter, gradient orbs, CTAs
  About.tsx            # Bio text + 3 animated stat cards
  Projects.tsx         # 2×2 glassmorphism grid, accordion expand
  Skills.tsx           # Two-col skill bars with scroll-triggered fill
  Contact.tsx          # Email, GitHub, open-to line
  ParticleBackground.tsx  # tsparticles "links" preset, cyan color
  Footer.tsx           # Built-with line + copyright
```

---

## Task 1: globals.css — Dark Theme Base

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Rewrite globals.css with dark cyber theme**

```css
@import "tailwindcss";

:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #0d1117;
  --accent-cyan: #00d4ff;
  --accent-purple: #7c3aed;
  --text-primary: #ffffff;
  --text-secondary: #9ca3af;
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
}

@theme inline {
  --color-bg-primary: var(--bg-primary);
  --color-bg-secondary: var(--bg-secondary);
  --color-accent-cyan: var(--accent-cyan);
  --color-accent-purple: var(--accent-purple);
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --font-sans: var(--font-inter);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-inter), system-ui, sans-serif;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--bg-primary);
}
::-webkit-scrollbar-thumb {
  background: var(--accent-cyan);
  border-radius: 3px;
}

/* Selection */
::selection {
  background: rgba(0, 212, 255, 0.3);
  color: #fff;
}

/* Gradient text utility */
.gradient-text {
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glass card utility */
.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Glow border on hover */
.glow-border {
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.glow-border:hover {
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.15), 0 0 40px rgba(124, 58, 237, 0.1);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: dark cyber theme base styles"
```

---

## Task 2: layout.tsx — Metadata + Inter Font

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx with Inter font + portfolio metadata**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaige Gao — AI Agent Builder & Cloud Architect",
  description:
    "Portfolio of Kaige Gao, a Chicago-based developer building autonomous AI agent systems and cloud-native architectures.",
  openGraph: {
    title: "Kaige Gao — AI Agent Builder & Cloud Architect",
    description:
      "Building autonomous systems that work while I sleep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add Inter font and portfolio metadata"
```

---

## Task 3: ParticleBackground.tsx — tsparticles Canvas

**Files:**
- Create: `src/components/ParticleBackground.tsx`

- [ ] **Step 1: Create ParticleBackground with tsparticles slim**

```tsx
"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="particles"
        init={init}
        className="h-full w-full"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#00d4ff" },
            links: {
              color: "#00d4ff",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: { enable: true },
              value: 80,
            },
            opacity: {
              value: { min: 0.1, max: 0.4 },
              animation: { enable: true, speed: 1, sync: false },
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: { enable: true },
            },
            modes: {
              grab: {
                distance: 200,
                links: { opacity: 0.3 },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ParticleBackground.tsx
git commit -m "feat: add tsparticles neural network background"
```

---

## Task 4: Navbar.tsx — Fixed Frosted Glass Nav

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Create Navbar with frosted glass + smooth scroll**

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-widest gradient-text"
        >
          KG
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu — simple, no JS framework needed */}
        <a
          href="#contact"
          className="md:hidden text-sm px-4 py-1.5 rounded-full border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add frosted glass Navbar component"
```

---

## Task 5: Hero.tsx — Typewriter + Gradient Orbs + CTAs

**Files:**
- Create: `src/components/Hero.tsx`

- [ ] **Step 1: Create Hero with typewriter, gradient orbs, CTAs, scroll indicator**

```tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";

const roles = ["AI Agent Builder", "Cloud Architect", "Indie Founder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(displayed.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00d4ff]/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-6"
        >
          Welcome
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="gradient-text">{displayed}</span>
          <span className="inline-block w-1 h-[0.9em] ml-1 bg-[#00d4ff] align-middle animate-pulse" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl mt-6 mb-10"
        >
          Building autonomous systems that work while I sleep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#00d4ff] text-black font-semibold hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 hover:border-[#00d4ff]/50 hover:bg-white/5 transition-all"
          >
            Get in Touch <Mail size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#00d4ff] transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: add Hero with typewriter, gradient orbs, CTAs"
```

---

## Task 6: About.tsx — Bio + 3 Animated Stat Cards

**Files:**
- Create: `src/components/About.tsx`

- [ ] **Step 1: Create About with bio text and animated stat counters**

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 4, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "", label: "Cloud Platforms" },
  { value: 1, suffix: "", label: "Goal: Founder" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#00d4ff] text-sm tracking-[0.2em] uppercase mb-4">About</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The person behind the code
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Kaige Gao is a Chicago-based developer exploring the limits of AI agent
            orchestration and cloud-native architectures. Currently building autonomous
            systems that run 24/7 — from multi-agent research platforms to hybrid AI
            workflows. Goal: build a one-person company powered entirely by agents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center glow-border"
            >
              <div className="text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.tsx
git commit -m "feat: add About with animated stat counters"
```

---

## Task 7: Projects.tsx — 2×2 Glassmorphism Grid + Accordion

**Files:**
- Create: `src/components/Projects.tsx`

- [ ] **Step 1: Create Projects with glassmorphism cards and inline accordion**

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";

const projects = [
  {
    title: "Scout — Sales Intelligence Agent",
    description:
      "Multi-agent sales research platform. LLM-powered company briefs, automated monitoring, and buying signal detection.",
    tags: ["Python", "FastAPI", "Cloud Run", "Brave Search", "Multi-Agent"],
    url: "https://scout-api-594674305905.us-central1.run.app/docs",
    details:
      "3-level spawn architecture: Scout orchestrator → Research/Monitor agents → Researcher/Watcher sub-agents. Change detection engine with significance scoring.",
  },
  {
    title: "CCCIS Employee Onboarding Agent",
    description:
      "Hybrid AI agent with LLM judgment layer routing queries to browser automation or web search in real time.",
    tags: ["Python", "FastAPI", "AWS IAM", "Playwright", "Hybrid Agent"],
    url: "https://cccis-api-594674305905.us-central1.run.app/docs",
    details:
      "FSM orchestrator (6 states) for AWS IAM provisioning + MFA enforcement. Search adapter evaluation using RAGAS faithfulness (Brave Search selected, 3× faster, 0.790 relevance).",
  },
  {
    title: "CureForge AI — Longevity Research Agent",
    description:
      "Autonomous multi-agent system for aging research and drug discovery. Deployed on GCP Cloud Run.",
    tags: ["Python", "GCP", "Knowledge Graph", "Digital Twin", "LLM"],
    url: "https://aging-cure-agents-235616713901.us-central1.run.app",
    details:
      "3-layer architecture: Director → 5 Domain Supervisors → 52 Simulation Workers. Knowledge Graph with 78 nodes. 5-level scientific validation (Rapamycin score: 0.837).",
  },
  {
    title: "AI Document Processing",
    description:
      "Serverless AWS pipeline for intelligent document extraction with presigned uploads and CloudFront HTTPS frontend.",
    tags: ["AWS", "Terraform", "Lambda", "Textract", "S3", "CloudFront"],
    url: "https://github.com/KaigeGao1110",
    details:
      "S3 + Lambda + Textract + DynamoDB pipeline. API Gateway REST endpoints. Per-IP hourly quota control. Full infra as code with Terraform.",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-card rounded-2xl overflow-hidden glow-border"
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex-shrink-0 p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-[#00d4ff] transition-colors"
            aria-label="View live project"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff]"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          {expanded ? "Hide Details" : "View Details"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 border-t border-white/5 pt-6">
              <p className="text-sm text-gray-500 leading-relaxed">{project.details}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#0d1117]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#00d4ff] text-sm tracking-[0.2em] uppercase mb-4">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add Projects section with glassmorphism cards and accordion"
```

---

## Task 8: Skills.tsx — Animated Skill Bars

**Files:**
- Create: `src/components/Skills.tsx`

- [ ] **Step 1: Create Skills with scroll-triggered animated bars**

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = {
  "AI & Agents": [
    { name: "Multi-Agent Orchestration", level: 95 },
    { name: "FastAPI / Python", level: 90 },
    { name: "LLM Integration", level: 90 },
    { name: "Browser Automation", level: 80 },
  ],
  "Cloud & Infra": [
    { name: "AWS (IAM/Lambda/S3)", level: 85 },
    { name: "GCP / Cloud Run", level: 85 },
    { name: "Terraform", level: 80 },
    { name: "Docker / K8s", level: 75 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-[#00d4ff]">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#00d4ff] text-sm tracking-[0.2em] uppercase mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">What I work with</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {Object.entries(skillGroups).map(([group, skills], gi) => (
            <div key={group}>
              <h3 className="text-lg font-semibold mb-8 text-white/90">{group}</h3>
              {skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={gi * 0.1 + si * 0.08}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Skills.tsx
git commit -m "feat: add Skills with scroll-triggered animated bars"
```

---

## Task 9: Contact.tsx + Footer.tsx

**Files:**
- Create: `src/components/Contact.tsx`
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create Contact.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0d1117]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00d4ff] text-sm tracking-[0.2em] uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s build something</h2>
          <p className="text-gray-400 mb-12 leading-relaxed">
            Currently open to: Founding engineer roles, AI infrastructure projects, and
            interesting problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="mailto:kaige.gao@example.com"
              className="flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:border-[#00d4ff]/40 transition-all"
            >
              <Mail size={18} className="text-[#00d4ff]" />
              <span className="text-sm">kaige.gao@example.com</span>
            </a>
            <a
              href="https://github.com/KaigeGao1110"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full glass-card hover:border-[#00d4ff]/40 transition-all"
            >
              <Github size={18} className="text-white" />
              <span className="text-sm">github.com/KaigeGao1110</span>
              <ArrowUpRight size={14} className="text-gray-500" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create Footer.tsx**

```tsx
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          Built with Next.js &amp; deployed on Vercel
        </p>
        <p className="flex items-center gap-1.5">
          &copy; 2026 Kaige Gao
          <Heart size={12} className="text-[#7c3aed]" />
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Contact.tsx src/components/Footer.tsx
git commit -m "feat: add Contact and Footer sections"
```

---

## Task 10: page.tsx — Assemble All Sections

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace page.tsx with full section assembly**

```tsx
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Run build to verify everything compiles**

```bash
cd /mnt/openclaw-efs/.openclaw/workspace/projects/portfolio && npm run build 2>&1 | tail -40
```

Expected: Clean build, no TypeScript errors, all 7 sections rendered.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble all portfolio sections in page.tsx"
```

---

## Task 11: Final Review + Notified

**Files:**
- Verify: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`

- [ ] **Step 1: Run final build check**

```bash
cd /mnt/openclaw-efs/.openclaw/workspace/projects/portfolio && npm run build 2>&1 | tail -20
```

- [ ] **Step 2: Verify all 7 sections render**

Check Navbar, Hero, About, Projects (4 cards), Skills (2 cols, 8 bars), Contact, Footer are all present in built output.

- [ ] **Step 3: Send completion event**

```bash
openclaw system event --text "Done: Portfolio website built" --mode now
```
