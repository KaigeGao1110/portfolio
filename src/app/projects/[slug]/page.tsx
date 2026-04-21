import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

const projects = [
  {
    slug: 'scout',
    title: 'Scout',
    subtitle: 'Sales Intelligence Agent',
    description:
      'Multi-agent sales research platform with automated company monitoring and buying signal detection. Deployed on Cloud Run with horizontal auto-scaling. Scout continuously monitors target companies, detects buying signals from job postings, funding rounds, and news events, and surfaces qualified leads to sales teams in real time.',
    tags: ['Python', 'FastAPI', 'Cloud Run', 'Multi-Agent', 'GCP', 'LLM'],
    details: [
      { label: 'Architecture', value: 'Multi-agent orchestration with separate research, analysis, and notification agents' },
      { label: 'Deployment', value: 'Google Cloud Run with horizontal auto-scaling (0 → 100+ instances)' },
      { label: 'Key Features', value: 'Automated company monitoring, buying signal detection, real-time lead surfacing' },
      { label: 'Tech Stack', value: 'Python, FastAPI, Cloud Run, GCP Pub/Sub, LLM integration' },
    ],
    url: 'https://scout-api-594674305905.us-central1.run.app/docs',
    live: true,
    accent: '#00d4ff',
  },
  {
    slug: 'hybridagent',
    title: 'Hybrid Agent',
    subtitle: 'Autonomous AI Agent',
    description:
      'Hybrid AI agent with LLM judgment layer routing queries to browser automation or web search. Combines Playwright with search APIs for intelligent query resolution. The agent decides whether a task requires real browser interaction or can be answered through API calls, optimizing for speed and cost.',
    tags: ['Python', 'AWS IAM', 'Playwright', 'Hybrid Agent', 'LLM'],
    details: [
      { label: 'Architecture', value: 'LLM-powered routing layer that classifies queries and dispatches to optimal execution path' },
      { label: 'Browser Automation', value: 'Playwright for complex UI interactions, form fills, and data extraction' },
      { label: 'Routing Logic', value: 'LLM judgment layer analyzes query intent and routes to search API or browser automation' },
      { label: 'Tech Stack', value: 'Python, AWS IAM, Playwright, FastAPI, Claude/GPT integration' },
    ],
    url: 'https://agent.kaigegao777.com',
    live: true,
    accent: '#00d4ff',
  },
  {
    slug: 'cureforge',
    title: 'CureForge AI',
    subtitle: 'Longevity Research System',
    description:
      'Autonomous multi-agent longevity research system with 3-layer architecture and 5-level scientific validation. Built on GCP with knowledge graph integration. CureForge automates the end-to-end research pipeline — from literature review to hypothesis generation to experimental design — with strict scientific rigor at every step.',
    tags: ['Python', 'GCP', 'Knowledge Graph', 'Digital Twin', 'Multi-Agent'],
    details: [
      { label: 'Architecture', value: '3-layer system: data ingestion → analysis → hypothesis generation, with 5-level validation gate' },
      { label: 'Scientific Rigor', value: '5-level validation: source credibility, methodology review, statistical significance, replication check, expert peer review' },
      { label: 'Knowledge Graph', value: 'GCP hosted knowledge graph for cross-linking research papers, genes, pathways, and compounds' },
      { label: 'Tech Stack', value: 'Python, GCP (Cloud Run, BigQuery, Knowledge Graph), LangChain, Neo4j' },
    ],
    url: 'https://aging-cure-agents-235616713901.us-central1.run.app',
    live: true,
    accent: '#00ffcc',
  },
  {
    slug: 'doc-pipeline',
    title: 'AI Document Processing',
    subtitle: 'Serverless AWS Pipeline',
    description:
      'Serverless AWS pipeline for intelligent document extraction with presigned uploads and CloudFront HTTPS frontend. IaC with Terraform. Supports PDF, scanned images, and mixed-format documents with OCR via AWS Textract.',
    tags: ['AWS', 'Terraform', 'Lambda', 'Textract', 'CloudFront'],
    details: [
      { label: 'Architecture', value: 'Serverless event-driven pipeline: S3 trigger → Lambda → Textract → S3 output' },
      { label: 'IaC', value: 'Fully infrastructure-as-code with Terraform, including IAM policies and VPC configuration' },
      { label: 'Frontend', value: 'CloudFront-distributed static site with presigned S3 URLs for secure direct uploads' },
      { label: 'Tech Stack', value: 'AWS (S3, Lambda, Textract, CloudFront, API Gateway), Terraform' },
    ],
    url: 'https://github.com/KaigeGao1110',
    live: false,
    accent: '#00d4ff',
  },
];

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Kaige Gao`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-6">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#3b82f6] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="ml-auto">
            <Link
              href="#"
              className="text-xl font-bold tracking-wider text-[#00d4ff] hover:text-[#00ffcc] transition-colors"
            >
              KG
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
            <div>
              <p
                className="text-sm font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: project.accent }}
              >
                {project.subtitle}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                {project.title}
              </h1>
            </div>
            {project.live && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all text-sm font-semibold mt-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  backgroundColor: `${project.accent}15`,
                  color: project.accent,
                  border: `1px solid ${project.accent}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Project Details</h2>
            <dl className="space-y-6">
              {project.details.map((d) => (
                <div key={d.label} className="grid sm:grid-cols-[180px_1fr] gap-2">
                  <dt className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{d.label}</dt>
                  <dd className="text-gray-700 text-sm leading-relaxed">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
