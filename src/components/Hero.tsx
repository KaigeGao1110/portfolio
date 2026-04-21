'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = ['AI Agent Builder', 'Cloud Architect', 'Indie Founder'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Gradient Orbs — fluid sizing with clamp */}
      <div
        className="absolute rounded-full animate-pulse-glow"
        style={{
          top: '25%',
          left: '25%',
          width: 'clamp(180px, 25vw, 400px)',
          height: 'clamp(180px, 25vw, 400px)',
          background: 'rgba(59, 130, 246, 0.12)',
          filter: 'blur(48px)',
        }}
      />
      <div
        className="absolute rounded-full animate-pulse-glow"
        style={{
          bottom: '25%',
          right: '25%',
          width: 'clamp(150px, 20vw, 350px)',
          height: 'clamp(150px, 20vw, 350px)',
          background: 'rgba(139, 92, 246, 0.10)',
          filter: 'blur(48px)',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute rounded-full animate-pulse-glow"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(280px, 40vw, 650px)',
          height: 'clamp(280px, 40vw, 650px)',
          background: 'rgba(59, 130, 246, 0.08)',
          filter: 'blur(80px)',
          animationDelay: '1s',
        }}
      />

      {/* Floating shapes — fluid positioning */}
      <div
        className="absolute rounded-2xl border animate-float"
        style={{
          top: 'clamp(60px, 10vw, 120px)',
          right: 'clamp(20px, 5vw, 120px)',
          width: 'clamp(60px, 8vw, 140px)',
          height: 'clamp(60px, 8vw, 140px)',
          borderColor: 'rgba(59, 130, 246, 0.15)',
          transform: 'rotate(12deg)',
        }}
      />
      <div
        className="absolute rounded-full border animate-float-delayed"
        style={{
          bottom: 'clamp(80px, 15vw, 180px)',
          left: 'clamp(20px, 4vw, 80px)',
          width: 'clamp(50px, 6vw, 100px)',
          height: 'clamp(50px, 6vw, 100px)',
          borderColor: 'rgba(139, 92, 246, 0.15)',
        }}
      />
      <div
        className="absolute rounded-lg border animate-float-delayed-2"
        style={{
          top: 'clamp(100px, 18vw, 200px)',
          left: 'clamp(30px, 8vw, 150px)',
          width: 'clamp(30px, 5vw, 70px)',
          height: 'clamp(30px, 5vw, 70px)',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          transform: 'rotate(45deg)',
        }}
      />
      <div
        className="absolute rounded-full animate-float"
        style={{
          bottom: 'clamp(50px, 10vw, 100px)',
          right: 'clamp(30px, 8vw, 160px)',
          width: 'clamp(40px, 5vw, 90px)',
          height: 'clamp(40px, 5vw, 90px)',
          background: 'rgba(59, 130, 246, 0.04)',
          border: '1px solid rgba(59, 130, 246, 0.15)',
        }}
      />

      {/* Content — fluid width, always centered */}
      <div
        className="hero-content relative z-10 text-center"
        style={{
          paddingLeft: 'var(--section-px)',
          paddingRight: 'var(--section-px)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p
            className="uppercase tracking-[0.25em] mb-6"
            style={{ color: 'var(--accent)', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}
          >
            Welcome to my digital universe
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="fluid-hero-title mb-4 gradient-text"
          style={{ maxWidth: '18ch', marginLeft: 'auto', marginRight: 'auto' }}
        >
          Hi, I am Kaige Gao
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex items-center justify-center mb-6"
          style={{ height: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          <span className="fluid-subtitle" style={{ color: 'rgba(26,26,26,0.9)' }}>
            {displayText}
            <span
              className="inline-block ml-1 align-middle"
              style={{
                width: '2px',
                height: 'clamp(1.5rem, 4vw, 2.5rem)',
                background: 'var(--accent)',
                animation: 'pulse 1s ease-in-out infinite',
              }}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mb-10 text-center"
          style={{
            color: 'rgba(75,75,75,0.7)',
            fontSize: 'var(--text-body)',
            maxWidth: '55ch',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Building autonomous systems that work while I sleep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4 flex-wrap"
          style={{ gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}
        >
          <a
            href="#projects"
            className="font-bold transition-all duration-300"
            style={{
              padding: 'clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 2rem)',
              borderRadius: '0.75rem',
              background: 'var(--accent)',
              color: '#ffffff',
              fontSize: 'var(--text-body)',
              fontWeight: 700,
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#60a5fa';
              (e.target as HTMLElement).style.boxShadow = '0 4px 20px rgba(59,130,246,0.35)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'var(--accent)';
              (e.target as HTMLElement).style.boxShadow = 'none';
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-semibold transition-all duration-300"
            style={{
              padding: 'clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 2rem)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              color: 'var(--accent)',
              fontSize: 'var(--text-body)',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = 'rgba(59, 130, 246, 0.1)';
              (e.target as HTMLElement).style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'transparent';
              (e.target as HTMLElement).style.borderColor = 'rgba(59, 130, 246, 0.4)';
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div
          className="rounded-full flex items-start justify-center p-1"
          style={{ border: '2px solid rgba(0,0,0,0.12)' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full"
            style={{
              width: '6px',
              height: 'clamp(8px, 1.5vw, 14px)',
              background: 'var(--accent)',
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
