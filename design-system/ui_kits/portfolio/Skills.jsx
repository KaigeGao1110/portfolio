'use strict';
const { useRef, useEffect, useState } = React;

const aiSkills = [
  { name: 'Multi-Agent Orchestration', level: 95 },
  { name: 'LLM Integration & Prompting', level: 92 },
  { name: 'ReAct / Hybrid Agent Patterns', level: 90 },
  { name: 'Python / FastAPI', level: 90 },
  { name: 'Browser Automation (Playwright)', level: 80 },
  { name: 'RAG & Vector Search', level: 85 },
];

const cloudSkills = [
  { name: 'GCP (Cloud Run, BigQuery, GCS)', level: 88 },
  { name: 'AWS (Lambda, API Gateway, S3)', level: 85 },
  { name: 'Docker & Containerization', level: 85 },
  { name: 'Terraform / IaC', level: 80 },
  { name: 'CI/CD (GitHub Actions, Cloud Build)', level: 82 },
];

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
        <span style={{ fontSize:13, fontWeight:500, color:'#374151' }}>{name}</span>
        <span style={{ fontSize:13, fontWeight:600, color:'#3b82f6' }}>{level}%</span>
      </div>
      <div style={{ height:6, background:'#f3f4f6', borderRadius:9999, overflow:'hidden' }}>
        <div style={{
          height:'100%', borderRadius:9999,
          background:'linear-gradient(to right,#3b82f6,#60a5fa)',
          width: animate ? `${level}%` : '0%',
          transition: animate ? `width 1s cubic-bezier(0.25,0.46,0.45,0.94)` : 'none',
        }}/>
      </div>
    </div>
  );
}

function SkillPanel({ title, icon, skills }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background:'rgba(255,255,255,0.85)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', border:'1px solid rgba(0,0,0,0.08)', borderRadius:16, padding:'clamp(1.25rem,3vw,2.5rem)', boxShadow:'0 1px 3px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.04)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:32 }}>
        <div style={{ width:40, height:40, borderRadius:12, background:'#eff6ff', border:'1px solid #dbeafe', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>{icon}</div>
        <h3 style={{ fontSize:18, fontWeight:700, color:'#1a1a1a' }}>{title}</h3>
      </div>
      {skills.map(s => <SkillBar key={s.name} name={s.name} level={s.level} animate={animate}/>)}
    </div>
  );
}

function KGSkills() {
  return (
    <section id="skills" style={{ padding:'var(--section-py) var(--section-px)', position:'relative', background:'#faf8f5' }}>
      <div style={{ width:'100%', maxWidth:'min(100%,1400px)', margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:80 }}>
          <span style={{ fontSize:'clamp(0.6875rem,1.5vw,0.875rem)', fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#3b82f6' }}>Expertise</span>
          <h2 style={{ fontSize:'clamp(1.75rem,5vw,3.75rem)', fontWeight:700, lineHeight:1.1, marginTop:16, background:'linear-gradient(135deg,#1a1a1a 0%,#3b82f6 50%,#1a1a1a 100%)', backgroundSize:'200% auto', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', animation:'shimmer 3s ease-in-out infinite' }}>
            Skills & Stack
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'clamp(1.5rem,4vw,4rem)' }}>
          <SkillPanel title="AI & Agents" icon="🤖" skills={aiSkills}/>
          <SkillPanel title="Cloud & Infra" icon="☁️" skills={cloudSkills}/>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { KGSkills });
