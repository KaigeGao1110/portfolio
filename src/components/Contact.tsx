'use client';

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const contactItems = [
  { icon: <MailIcon/>, label: 'kaigegao777@gmail.com', href: 'mailto:kaigegao777@gmail.com' },
  { icon: <GithubIcon/>, label: 'KaigeGao1110', href: 'https://github.com/KaigeGao1110' },
  { icon: <MapPinIcon/>, label: 'Chicago, IL', href: null as string | null },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding:'var(--section-py) var(--section-px)', background:'#faf8f5' }}>
      <div style={{ width:'100%', maxWidth:'min(100%,1400px)', margin:'0 auto', textAlign:'center' }}>
        <span style={{ fontSize:'clamp(0.6875rem,1.5vw,0.875rem)', fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#3b82f6' }}>Contact</span>
        <h2 style={{ fontSize:'clamp(1.75rem,5vw,3.75rem)', fontWeight:700, lineHeight:1.1, marginTop:16, marginBottom:24, background:'linear-gradient(135deg,#1a1a1a 0%,#3b82f6 50%,#1a1a1a 100%)', backgroundSize:'200% auto', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', animation:'shimmer 3s ease-in-out infinite' }}>
          Let's Build Something
        </h2>
        <p style={{ color:'#6b7280', marginBottom:48, maxWidth:'42rem', margin:'0 auto 48px', lineHeight:1.7, fontSize:'clamp(1rem,1.5vw,1.25rem)' }}>
          Currently seeking AI Agent and Cloud Architecture roles. Open to freelance development work — if you need an agent system built or cloud infrastructure designed, let's talk.
        </p>

        {/* Contact card */}
        <div style={{ background:'rgba(255,255,255,0.85)', backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)', border:'1px solid rgba(0,0,0,0.08)', borderRadius:16, padding:'clamp(1.25rem,3vw,2.5rem)', marginBottom:32, boxShadow:'0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:24 }}>
            {contactItems.map(item => {
              const inner = (
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12, padding:'16px', borderRadius:12, cursor: item.href ? 'pointer' : 'default' }}>
                  <div style={{ width:48, height:48, borderRadius:12, background:'#eff6ff', border:'1px solid #dbeafe', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize:13, fontWeight:500, color:'#6b7280' }}>{item.label}</span>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                   style={{ textDecoration:'none', borderRadius:12, display:'block' }}>
                  {inner}
                </a>
              ) : <div key={item.label}>{inner}</div>;
            })}
          </div>
        </div>

        <p style={{ fontSize:13, color:'rgba(59,130,246,0.6)', fontWeight:500, letterSpacing:'0.04em' }}>
          Currently seeking: AI Agent roles, Cloud Architecture positions, freelance development
        </p>

        <footer style={{ marginTop:96, paddingTop:32, borderTop:'1px solid #e5e7eb' }}>
          <p style={{ fontSize:12, color:'#9ca3af' }}>© 2026 Kaige Gao. Built with Next.js.</p>
        </footer>
      </div>
    </section>
  );
}