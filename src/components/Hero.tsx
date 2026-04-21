'use client';

import { useEffect, useState } from 'react';

const roles = ['AI Agent Builder', 'Cloud Architect', 'Indie Founder'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;
    const t = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex(p => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, roleIndex]);

  const sectionStyle: React.CSSProperties = {
    position: 'relative', minHeight: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.04) 1px,transparent 1px)',
    backgroundSize: 'clamp(30px,5vw,50px) clamp(30px,5vw,50px)',
  };

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section style={sectionStyle}>
      {/* Orbs */}
      <div style={{ position:'absolute', top:'25%', left:'25%', width:'clamp(180px,25vw,400px)', height:'clamp(180px,25vw,400px)', borderRadius:'50%', background:'rgba(59,130,246,0.12)', filter:'blur(48px)', animation:'pulseGlow 4s ease-in-out infinite' }}/>
      <div style={{ position:'absolute', bottom:'25%', right:'25%', width:'clamp(150px,20vw,350px)', height:'clamp(150px,20vw,350px)', borderRadius:'50%', background:'rgba(139,92,246,0.10)', filter:'blur(48px)', animation:'pulseGlow 4s ease-in-out 2s infinite' }}/>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'clamp(280px,40vw,650px)', height:'clamp(280px,40vw,650px)', borderRadius:'50%', background:'rgba(59,130,246,0.08)', filter:'blur(80px)', animation:'pulseGlow 4s ease-in-out 1s infinite' }}/>

      {/* Floating shapes */}
      <div style={{ position:'absolute', top:'clamp(60px,10vw,120px)', right:'clamp(20px,5vw,120px)', width:'clamp(60px,8vw,140px)', height:'clamp(60px,8vw,140px)', borderRadius:16, border:'2px solid rgba(59,130,246,0.15)', transform:'rotate(12deg)', animation:'float 8s ease-in-out infinite' }}/>
      <div style={{ position:'absolute', bottom:'clamp(80px,15vw,180px)', left:'clamp(20px,4vw,80px)', width:'clamp(50px,6vw,100px)', height:'clamp(50px,6vw,100px)', borderRadius:'50%', border:'2px solid rgba(139,92,246,0.15)', animation:'float 10s ease-in-out 2s infinite' }}/>

      {/* Content */}
      <div style={{ position:'relative', zIndex:10, textAlign:'center', width:'100%', maxWidth:'min(100%,1400px)', margin:'0 auto', padding:'0 clamp(1rem,5vw,3rem)' }}>
        <div style={fadeStyle(0)}>
          <p style={{ textTransform:'uppercase', letterSpacing:'0.25em', color:'#3b82f6', fontSize:'clamp(0.7rem,1.5vw,0.875rem)', marginBottom:24, fontWeight:600 }}>
            Welcome to my digital universe
          </p>
        </div>
        <div style={fadeStyle(0.2)}>
          <h1 style={{
            fontSize:'clamp(2.5rem,8vw,6rem)', fontWeight:800, lineHeight:1.05,
            marginBottom:16, maxWidth:'18ch', marginLeft:'auto', marginRight:'auto',
            background:'linear-gradient(135deg,#1a1a1a 0%,#3b82f6 50%,#1a1a1a 100%)',
            backgroundSize:'200% auto',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            backgroundClip:'text',
            animation:'shimmer 3s ease-in-out infinite',
          }}>
            Hi, I am Kaige Gao
          </h1>
        </div>
        <div style={{ ...fadeStyle(0.4), height:'clamp(2.5rem,6vw,4rem)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:24 }}>
          <span style={{ fontSize:'clamp(1.25rem,3vw,2.5rem)', fontWeight:600, color:'rgba(26,26,26,0.9)' }}>
            {displayText}
            <span style={{ display:'inline-block', width:2, height:'clamp(1.5rem,4vw,2.5rem)', background:'#3b82f6', marginLeft:4, verticalAlign:'middle', animation:'blink 1s ease-in-out infinite' }}/>
          </span>
        </div>
        <div style={fadeStyle(0.6)}>
          <p style={{ color:'rgba(75,75,75,0.7)', fontSize:'clamp(1rem,1.5vw,1.25rem)', maxWidth:'55ch', margin:'0 auto 40px', lineHeight:1.6 }}>
            Building autonomous systems that work while I sleep.
          </p>
        </div>
        <div style={{ ...fadeStyle(0.8), display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(0.75rem,2vw,1.5rem)', flexWrap:'wrap' }}>
          <a href="#projects"
            style={{ padding:'clamp(0.625rem,1.5vw,0.875rem) clamp(1.25rem,3vw,2rem)', borderRadius:12, background:'#3b82f6', color:'#fff', fontSize:'clamp(1rem,1.5vw,1.25rem)', fontWeight:700, textDecoration:'none', transition:'all 0.3s', display:'inline-flex', alignItems:'center', gap:8 }}
            onMouseEnter={e => { e.currentTarget.style.background='#60a5fa'; e.currentTarget.style.boxShadow='0 4px 20px rgba(59,130,246,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#3b82f6'; e.currentTarget.style.boxShadow='none'; }}>
            View Projects
          </a>
          <a href="#contact"
            style={{ padding:'clamp(0.625rem,1.5vw,0.875rem) clamp(1.25rem,3vw,2rem)', borderRadius:12, border:'1px solid rgba(59,130,246,0.4)', color:'#3b82f6', fontSize:'clamp(1rem,1.5vw,1.25rem)', fontWeight:600, textDecoration:'none', transition:'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(59,130,246,0.1)'; e.currentTarget.style.borderColor='#3b82f6'; }}
            onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(59,130,246,0.4)'; }}>
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', opacity: visible ? 1 : 0, transition:'opacity 0.5s 1.5s' }}>
        <div style={{ borderRadius:'9999px', border:'2px solid rgba(0,0,0,0.12)', padding:4, width:24, height:40, display:'flex', alignItems:'flex-start', justifyContent:'center' }}>
          <div style={{ width:6, height:'clamp(8px,1.5vw,14px)', borderRadius:'9999px', background:'#3b82f6', animation:'scrollBob 1.5s ease-in-out infinite' }}/>
        </div>
      </div>
    </section>
  );
}
