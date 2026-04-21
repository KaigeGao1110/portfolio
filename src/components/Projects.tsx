'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  url: string;
  github?: string;
  live: boolean;
  stats?: string[];
  features?: Feature[];
};

const projects: Project[] = [
  {
    slug: 'scout',
    title: 'Scout',
    subtitle: 'Sales Intelligence Agent',
    description:
      'Multi-agent sales research platform that turns raw company signals into actionable sales strategy. Continuously monitors target companies for buying signals — layoffs, funding rounds, hiring shifts — and auto-generates one-page AI sales briefs with exactly what to say and how to approach.',
    tags: ['Python', 'FastAPI', 'Cloud Run', 'Multi-Agent', 'GCP', 'CRM'],
    url: 'https://scout-ui-594674305905.us-central1.run.app',
    github: 'https://github.com/KaigeGao1110/scout',
    live: true,
    stats: ['GCP Cloud Run', 'Multi-Agent', '~$0.01/cycle', 'Web UI Deployed'],
    features: [
      { icon: 'network', title: '3-Level Agent Architecture', description: 'Scout → Research + Monitor agents → specialist sub-agents (News, Funding, Reviews, Jobs) running in parallel' },
      { icon: 'radio', title: 'Signal Detection Engine', description: 'Layoffs +10, funding +8, rating drops +7, sentiment +6 — alerts only fire above threshold' },
      { icon: 'database', title: 'CRM Integration', description: 'Syncs AI-generated briefs directly to Salesforce and HubSpot customer records' },
      { icon: 'bell', title: 'Web Dashboard', description: 'Live Scout WebUI at scout-ui-594674305905.us-central1.run.app for real-time monitoring and alert management' },
    ],
  },
  {
    slug: 'hybridagent',
    title: 'HybridAgent',
    subtitle: 'Hybrid AI Agent',
    description:
      'Hybrid AI agent that automates employee onboarding. An LLM judgment router sits at the top, classifying every query as General or Time-Sensitive, then delegates to the appropriate executor — browser automation or search adapter — while an FSM orchestrator drives the full IAM provisioning lifecycle. Features real-time WebSocket/SSE updates for live progress monitoring.',
    tags: ['Python', 'Playwright', 'Hybrid Agent', 'Claude Sonnet', 'WebSocket', 'SSE'],
    url: 'https://agent.kaigegao777.com',
    github: 'https://github.com/KaigeGao1110/HybridAgents',
    live: true,
    stats: ['Hybrid Architecture', '144 Tests Passing', 'Claude Sonnet 4.6', 'Live Demo UI'],
    features: [
      { icon: 'sparkles', title: 'LLM Judgment Router', description: 'Routes every query to General (search adapter) or Time-Sensitive (browser agent) path using few-shot classification' },
      { icon: 'radio', title: 'Browser Agent', description: 'Playwright headful browser executes multi-step UI workflows — form fills, MFA setup, SSO flows — with human-in-the-loop checkpoints' },
      { icon: 'network', title: 'FSM Orchestrator', description: '6-state machine (INIT → PROVISION_AWS → CONFIGURE_IAM → SETUP_BROWSER → VERIFY_COMPLETE → COMPLETE) with crash-resume and dry-run' },
      { icon: 'database', title: 'RAGAS Evaluation', description: 'Both search adapters scored 0.938 RAGAS faithfulness; Brave selected as primary (+0.352 relevance advantage on insurance queries)' },
    ],
  },
  {
    slug: 'cureforge',
    title: 'CureForge AI',
    subtitle: 'Longevity Research System',
    description:
      'Autonomous multi-agent system for longevity research, designed around a Drug → Pathway → Hallmark → Disease reasoning chain. A Digital Twin generates personalized lifespan estimates, toxicity risk, and biomarker effect predictions, all validated through 5-level scientific review before delivery.',
    tags: ['Python', 'GCP', 'Knowledge Graph', 'Digital Twin', 'LangGraph'],
    url: 'https://aging-cure-agents-235616713901.us-central1.run.app/docs',
    github: 'https://github.com/KaigeGao1110/cureforge',
    live: true,
    stats: ['GCP Cloud Run', '5-Level Validation', 'Knowledge Graph'],
    features: [
      { icon: 'network', title: '3-Layer Agent Architecture', description: 'Director → 5 Domain Supervisors → 52 Simulation Workers, each owning a scientific validation layer' },
      { icon: 'database', title: 'Knowledge Graph', description: '78 nodes capturing Drug → Pathway → Hallmark → Disease relationships; enables multi-hop reasoning across scientific literature' },
      { icon: 'sparkles', title: 'Digital Twin', description: 'Generates lifespan estimates, toxicity risk scores, and biomarker effect predictions per compound' },
      { icon: 'radio', title: 'Scientific Validation', description: '5-level review pipeline; Rapamycin scored 0.837 — peer-reviewed research quality at research-agent speed' },
    ],
  },
  {
    slug: 'doc-pipeline',
    title: 'AI Document Processing',
    subtitle: 'Serverless AWS Pipeline',
    description:
      'End-to-end intelligent document extraction pipeline on AWS. Documents uploaded via presigned S3 URLs flow through Lambda and Textract for OCR and structure extraction, with a CloudFront HTTPS frontend and per-IP hourly quota enforcement. All infrastructure managed as code with Terraform.',
    tags: ['AWS', 'Terraform', 'Lambda', 'Textract', 'CloudFront'],
    url: 'https://docs.kaigegao777.com',
    github: 'https://github.com/KaigeGao1110',
    live: true,
    stats: ['Serverless', 'Terraform IaC', 'Presigned Uploads'],
    features: [
      { icon: 'sparkles', title: 'OCR + Extraction', description: 'AWS Textract processes uploaded documents at scale; Lambda orchestrates extraction workflow without server management' },
      { icon: 'radio', title: 'Presigned S3 Uploads', description: 'Secure, time-limited upload URLs with per-IP hourly quota enforcement — no credentials exposed to clients' },
      { icon: 'network', title: 'CloudFront CDN', description: 'Global HTTPS delivery via CloudFront; API Gateway REST endpoints for client integration' },
      { icon: 'database', title: 'DynamoDB State', description: 'Document processing state tracked in DynamoDB; supports resume on partial failures' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad relative bg-[#faf8f5]">
      <div className="fluid-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-[#3b82f6] text-sm font-semibold tracking-[0.2em] uppercase"
          >
            Portfolio
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="fluid-heading font-bold mt-4 gradient-text"
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid md:grid-cols-2"
          style={{ gap: 'clamp(1.25rem, 3vw, 2.5rem)' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-[#3b82f6]/40 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              {/* Glow blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/5 rounded-full blur-2xl group-hover:bg-[#3b82f6]/10 transition-all duration-500" />

              <div className="relative z-10" style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#3b82f6] font-medium mt-0.5 opacity-70">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.live && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-gray-200 hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/10 transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#3b82f6]" />
                      </a>
                    )}
                    <span className="p-2 rounded-lg border border-gray-200 group-hover:border-[#3b82f6]/30 group-hover:bg-[#3b82f6]/5 transition-all duration-200">
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-[#3b82f6] border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {!project.live && project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-[#3b82f6] transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on GitHub <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      </AnimatePresence>
    </section>
  );
}
