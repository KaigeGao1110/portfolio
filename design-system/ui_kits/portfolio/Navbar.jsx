'use strict';
const { useState, useEffect } = React;

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function KGNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'all 0.3s',
    ...(scrolled ? {
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    } : { background: 'transparent' }),
  };

  const innerStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: 'clamp(0.75rem,2vw,1rem) clamp(1rem,3vw,1.5rem)',
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <a href="#" style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.12em', color: '#3b82f6', textDecoration: 'none' }}>KG</a>

        {/* Desktop */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}
            className="desktop-nav">
          {navLinks.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{ fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='#3b82f6'}
                onMouseLeave={e => e.target.style.color='#6b7280'}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact"
          style={{ fontSize: 13, fontWeight: 600, padding: '7px 14px', borderRadius: 8, background: '#eff6ff', color: '#3b82f6', border: '1px solid #dbeafe', textDecoration: 'none', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background='#dbeafe'; e.currentTarget.style.borderColor='#93c5fd'; }}
          onMouseLeave={e => { e.currentTarget.style.background='#eff6ff'; e.currentTarget.style.borderColor='#dbeafe'; }}>
          Hire Me
        </a>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{ padding: '0 24px 16px', display: 'flex', flexDirection: 'column', gap: 12, background: 'rgba(255,255,255,0.97)', borderBottom: '1px solid #e5e7eb' }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
               style={{ fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', padding: '8px 0' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}

Object.assign(window, { KGNavbar });
