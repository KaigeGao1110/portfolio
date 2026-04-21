'use client';

import { useState } from 'react';

const projects = [
  {
    slug: 'scout', title: 'Scout', subtitle: 'Sales Intelligence Agent',
    description: 'Multi-agent sales research platform that turns raw company signals into actionable sales strategy. Continuously monitors target companies for buying signals — layoffs, funding rounds, hiring shifts — and auto-generates one-page AI sales briefs.',
    tags: ['Python', 'FastAPI', 'Cloud Run', 'Multi-Agent', 'GCP', 'CRM'],
    url: 'https://scout-ui-594674305905.us-central1.run.app',
    github: 'https://github.com/KaigeGao1110/scout',
    stats: ['GCP Cloud Run', 'Multi-Agent', '~$0.01/cycle', 'Web UI Deployed'],
    features: [
      { title: '3-Level Agent Architecture', desc: 'Scout → Research + Monitor agents → specialist sub-agents running in parallel' },
      { title: 'Signal Detection Engine', desc: 'Layoffs +10, funding +8, rating drops +7 — alerts only fire above threshold' },
      { title: 'CRM Integration', desc: 'Syncs AI-generated briefs directly to Salesforce and HubSpot' },
      { title: 'Web Dashboard', desc: 'Live Scout WebUI for real-time monitoring and alert management' },
    ],
  },
  {
    slug: 'hybridagent', title: 'HybridAgent', subtitle: 'Hybrid AI Agent',
    description: 'Hybrid AI agent that automates employee onboarding. An LLM judgment router classifies every query as General or Time-Sensitive, then delegates to browser automation or search adapter while an FSM orchestrator drives the full IAM provisioning lifecycle.',
    tags: ['Python', 'Playwright', 'Hybrid Agent', 'Claude Sonnet', 'WebSocket', 'SSE'],
    url: 'https://agent.kaigegao777.com',
    github: 'https://github.com/KaigeGao1110/HybridAgents',
    stats: ['Hybrid Architecture', '144 Tests Passing', 'Claude Sonnet 4.6', 'Live Demo UI'],
    features: [
      { title: 'LLM Judgment Router', desc: 'Routes every query to General or Time-Sensitive path using few-shot classification' },
      { title: 'Browser Agent', desc: 'Playwright executes multi-step UI workflows with human-in-the-loop checkpoints' },
      { title: 'FSM Orchestrator', desc: '6-state machine with crash-resume and dry-run support' },
      { title: 'RAGAS Evaluation', desc: 'Both search adapters scored 0.938 RAGAS faithfulness' },
    ],
  },
  {
    slug: 'cureforge', title: 'CureForge AI', subtitle: 'Longevity Research System',
    description: 'Autonomous multi-agent system for longevity research, built around a Drug → Pathway → Hallmark → Disease reasoning chain. A Digital Twin generates personalized lifespan estimates and biomarker predictions, validated through 5-level scientific review.',
    tags: ['Python', 'GCP', 'Knowledge Graph', 'Digital Twin', 'LangGraph'],
    url: 'https://aging-cure-agents-235616713901.us-central1.run.app/docs',
    github: 'https://github.com/KaigeGao1110/cureforge',
    stats: ['GCP Cloud Run', '5-Level Validation', 'Knowledge Graph'],
    features: [
      { title: '3-Layer Agent Architecture', desc: 'Director → 5 Domain Supervisors → 52 Simulation Workers' },
      { title: 'Knowledge Graph', desc: '78 nodes capturing Drug → Pathway → Hallmark → Disease relationships' },
      { title: 'Digital Twin', desc: 'Generates lifespan estimates and toxicity risk scores per compound' },
      { title: 'Scientific Validation', desc: 'Rapamycin scored 0.837 — peer-reviewed research quality at agent speed' },
    ],
  },
  {
    slug: 'doc-pipeline', title: 'AI Document Processing', subtitle: 'Serverless AWS Pipeline',
    description: 'End-to-end intelligent document extraction pipeline on AWS. Documents flow through Lambda and Textract for OCR and structure extraction, with a CloudFront HTTPS frontend and per-IP hourly quota enforcement. All infrastructure managed with Terraform.',
    tags: ['AWS', 'Terraform', 'Lambda', 'Textract', 'CloudFront'],
    url: 'https://docs.kaigegao777.com',
    github: 'https://github.com/KaigeGao1110',
    stats: ['Serverless', 'Terraform IaC', 'Presigned Uploads'],
    features: [
      { title: 'OCR + Extraction', desc: 'AWS Textract processes uploaded documents at scale via Lambda orchestration' },
      { title: 'Presigned S3 Uploads', desc: 'Secure, time-limited upload URLs with per-IP hourly quota enforcement' },
      { title: 'CloudFront CDN', desc: 'Global HTTPS delivery via CloudFront; API Gateway REST endpoints' },
      { title: 'DynamoDB State', desc: 'Document processing state tracked in DynamoDB with resume support' },
    ],
  },
];

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M7 7h10v10"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
);

function ProjectModal({ project, onClose }: { project: typeof projects[0] | null; onClose: () => void }) {
  if (!project) return null;
  return (
    <div style={{ position:'fixed', inset:0, zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}
         onClick={onClose}>
      <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.5)', backdropFilter:'blur(4px)' }}/>
      <div style={{ position:'relative', background:'#fff', borderRadius:20, padding:'clamp(1.5rem,4vw,3rem)', maxWidth:640, width:'100%', maxHeight:'85vh', overflowY:'auto', boxShadow:'0 20px 60px rgba(0,0,0,0.15)' }}
           onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position:'absolute', top:16, right:16, width:32, height:32, borderRadius:'50%', border:'1px solid rgba(0,0,0,0.1)', background:'transparent', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, color:'#6b7280' }}>×</button>
        <span style={{ fontSize:11, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'#3b82f6' }}>{project.subtitle}</span>
        <h2 style={{ fontSize:28, fontWeight:800, color:'#1a1a1a', margin:'8px 0 16px' }}>{project.title}</h2>
        <p style={{ color:'#6b7280', lineHeight:1.7, marginBottom:20, fontSize:14 }}>{project.description}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
          {project.tags.map(t => <span key={t} style={{ background:'#eff6ff', border:'1px solid #dbeafe', borderRadius:6, padding:'4px 10px', fontSize:11, fontWeight:500, color:'#3b82f6' }}>{t}</span>)}
        </div>
        {project.stats && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24 }}>
            {project.stats.map(s => (
              <span key={s} style={{ background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:8, padding:'4px 10px', fontSize:11, fontWeight:500, color:'#374151' }}>{s}</span>
            ))}
          </div>
        )}
        {project.features && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
            {project.features.map(f => (
              <div key={f.title} style={{ background:'#f9fafb', border:'1px solid #e5e7eb', borderRadius:12, padding:'14px 16px' }}>
                <div style={{ fontSize:13, fontWeight:700, color:'#1a1a1a', marginBottom:4 }}>{f.title}</div>
                <div style={{ fontSize:12, color:'#6b7280', lineHeight:1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        )}
        <div style={{ display:'flex', gap:12, marginTop:24, flexWrap:'wrap' }}>
          <a href={project.url} target="_blank" rel="noopener noreferrer"
             style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'9px 18px', background:'#3b82f6', color:'#fff', borderRadius:10, fontSize:13, fontWeight:700, textDecoration:'none' }}>
            View Live <ArrowUpRight/>
          </a>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'9px 18px', border:'1px solid rgba(59,130,246,0.3)', color:'#3b82f6', borderRadius:10, fontSize:13, fontWeight:600, textDecoration:'none' }}>
              GitHub <ArrowUpRight/>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" style={{ padding:'var(--section-py) var(--section-px)', background:'#faf8f5' }}>
      <div style={{ width:'100%', maxWidth:'min(100%,1400px)', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:80 }}>
          <span style={{ fontSize:'clamp(0.6875rem,1.5vw,0.875rem)', fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#3b82f6' }}>Portfolio</span>
          <h2 style={{ fontSize:'clamp(1.75rem,5vw,3.75rem)', fontWeight:700, lineHeight:1.1, marginTop:16, background:'linear-gradient(135deg,#1a1a1a 0%,#3b82f6 50%,#1a1a1a 100%)', backgroundSize:'200% auto', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', animation:'shimmer 3s ease-in-out infinite' }}>
            Featured Projects
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'clamp(1.25rem,3vw,2.5rem)' }}>
          {projects.map(p => (
            <div key={p.slug} onClick={() => setSelected(p)}
              style={{ position:'relative', background:'#fff', border:'1px solid rgba(0,0,0,0.08)', borderRadius:16, padding:'clamp(1.25rem,3vw,2.5rem)', boxShadow:'0 1px 3px rgba(0,0,0,0.06)', cursor:'pointer', transition:'all 0.3s', overflow:'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(59,130,246,0.4)'; e.currentTarget.style.transform='scale(1.02)'; e.currentTarget.style.boxShadow='0 4px 24px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,0,0,0.08)'; e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 1px 3px rgba(0,0,0,0.06)'; }}>
              <div style={{ position:'absolute', top:0, right:0, width:80, height:80, background:'rgba(59,130,246,0.05)', borderRadius:'50%', filter:'blur(20px)', pointerEvents:'none' }}/>
              <div style={{ position:'relative', zIndex:1 }}>
                <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:16 }}>
                  <div>
                    <h3 style={{ fontSize:20, fontWeight:700, color:'#1a1a1a', marginBottom:3 }}>{p.title}</h3>
                    <p style={{ fontSize:12, color:'#3b82f6', fontWeight:500, opacity:0.7 }}>{p.subtitle}</p>
                  </div>
                  <div style={{ display:'flex', gap:6 }}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                       style={{ width:32, height:32, border:'1px solid rgba(0,0,0,0.08)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', color:'#9ca3af', textDecoration:'none' }}>
                      <ArrowUpRight/>
                    </a>
                    <span style={{ width:32, height:32, border:'1px solid rgba(0,0,0,0.08)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', color:'#9ca3af' }}>
                      <ChevronRight/>
                    </span>
                  </div>
                </div>
                <p style={{ fontSize:13, color:'#6b7280', lineHeight:1.6, marginBottom:20 }}>{p.description}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                  {p.tags.map(t => <span key={t} style={{ background:'#eff6ff', border:'1px solid #dbeafe', borderRadius:6, padding:'4px 10px', fontSize:11, fontWeight:500, color:'#3b82f6' }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)}/>
    </section>
  );
}
