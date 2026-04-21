'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div
        className="flex items-center justify-between"
        style={{ padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.5rem)' }}
      >
        <a
          href="#"
          className="text-xl font-bold tracking-wider text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
        >
          KG
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[#3b82f6] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg bg-blue-50 text-[#3b82f6] border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-3 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm font-medium text-gray-600 hover:text-[#3b82f6] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-1 mb-2 text-center text-sm font-semibold px-4 py-2.5 rounded-lg bg-blue-50 text-[#3b82f6] border border-blue-200"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
