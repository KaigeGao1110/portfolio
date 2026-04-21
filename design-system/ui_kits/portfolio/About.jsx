'use strict';

const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '3', label: 'Cloud Platforms' },
  { value: '1', label: 'Goal: Founder' },
];

function KGAbout() {
  const sectionStyle = {
    position: 'relative',
    padding: 'var(--section-py) var(--section-px)',
    background: 'linear-gradient(to bottom, #faf8f5, #f0eeeb)',
  };

  const containerStyle = {
    width: '100%', maxWidth: 'min(100%,1400px)', margin: '0 auto',
  };

  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom: 80 }}>
          <span style={{ fontSize:'clamp(0.6875rem,1.5vw,0.875rem)', fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#3b82f6' }}>
            About Me
          </span>
          <h2 style={{
            fontSize:'clamp(1.75rem,5vw,3.75rem)', fontWeight:700, lineHeight:1.1, marginTop:16,
            background:'linear-gradient(135deg,#1a1a1a 0%,#3b82f6 50%,#1a1a1a 100%)',
            backgroundSize:'200% auto', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            backgroundClip:'text', animation:'shimmer 3s ease-in-out infinite',
          }}>Who I Am</h2>
        </div>

        {/* Content grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'clamp(2rem,5vw,6rem)', alignItems:'center' }}>
          <div>
            <p style={{ color:'rgba(26,26,26,0.7)', lineHeight:1.7, marginBottom:24, fontSize:'clamp(1rem,1.5vw,1.25rem)', maxWidth:'70ch' }}>
              I am a full-stack AI agent architect and cloud infrastructure engineer obsessed
              with building autonomous systems that operate at scale. I specialize in designing
              multi-agent pipelines, hybrid LLM judgment layers, and production-grade cloud
              deployments on GCP and AWS.
            </p>
            <p style={{ color:'rgba(26,26,26,0.7)', lineHeight:1.7, fontSize:'clamp(1rem,1.5vw,1.25rem)', maxWidth:'70ch' }}>
              When I'm not architecting agents, I'm shipping products — from sales intelligence
              platforms to longevity research systems. My north star is becoming a founding
              engineer at a company that matters.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
            {stats.map(s => (
              <div key={s.label}
                style={{ background:'#fff', border:'1px solid rgba(0,0,0,0.08)', borderRadius:16, padding:'clamp(1.25rem,3vw,2rem)', textAlign:'center', boxShadow:'0 1px 3px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.04)', transition:'all 0.3s', cursor:'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(59,130,246,0.3)'; e.currentTarget.querySelector('.stat-val').style.transform='scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(0,0,0,0.08)'; e.currentTarget.querySelector('.stat-val').style.transform='scale(1)'; }}>
                <div className="stat-val" style={{ fontSize:40, fontWeight:900, color:'#3b82f6', marginBottom:8, transition:'transform 0.3s', display:'block' }}>{s.value}</div>
                <div style={{ fontSize:11, fontWeight:500, color:'rgba(26,26,26,0.5)', textTransform:'uppercase', letterSpacing:'0.1em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { KGAbout });
