'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative bg-[#faf8f5]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] to-[#faf8f5]" />

      <div className="relative z-10 fluid-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#3b82f6] text-sm font-semibold tracking-[0.2em] uppercase">
            Contact
          </span>
          <h2 className="fluid-heading font-bold mt-4 mb-6 gradient-text">
            Let&apos;s Build Something
          </h2>
          <p className="text-gray-600 mb-12 mx-auto max-w-[42rem] text-center leading-relaxed">Currently seeking AI Agent and Cloud Architecture roles. Open to freelance development work — if you need an agent system built or cloud infrastructure designed, let&apos;s talk.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl mb-8 sm:mb-10"
          style={{ padding: 'clamp(1.25rem, 3vw, 2.5rem)' }}
        >
          <div className="grid sm:grid-cols-3 gap-8">
            <a
              href="mailto:kaigegao777@gmail.com"
              className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-100 transition-all duration-200">
                <Mail className="w-5 h-5 text-[#3b82f6]" />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                kaigegao777@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/KaigeGao1110"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-100 transition-all duration-200">
                <ExternalLink className="w-5 h-5 text-[#3b82f6]" />
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                KaigeGao1110
              </span>
            </a>

            <div className="group flex flex-col items-center gap-3 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#3b82f6]" />
              </div>
              <span className="text-sm font-medium text-gray-600">Chicago, IL</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-[#3b82f6]/60 font-medium tracking-wide"
        >
          Currently seeking: AI Agent roles, Cloud Architecture positions, freelance development
        </motion.p>

        <footer className="mt-24 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            © 2026 Kaige Gao. Built with Next.js & framer-motion.
          </p>
        </footer>
      </div>
    </section>
  );
}
