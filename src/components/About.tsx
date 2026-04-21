'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '3', label: 'Cloud Platforms' },
  { value: '1', label: 'Goal: Founder' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] via-[#faf8f5] to-[#f0eeeb]" />

      <div className="relative z-10 fluid-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="text-[#3b82f6] text-sm font-semibold tracking-[0.2em] uppercase"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="fluid-heading mt-4 gradient-text"
          >
            Who I Am
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 items-center"
          style={{ gap: 'clamp(2rem, 5vw, 6rem)' }}
        >
          <motion.div variants={itemVariants}>
            <p className="text-gray-900/70 leading-relaxed mb-6 readable-width">
              I am a full-stack AI agent architect and cloud infrastructure engineer obsessed
              with building autonomous systems that operate at scale. I specialize in designing
              multi-agent pipelines, hybrid LLM judgment layers, and production-grade cloud
              deployments on GCP and AWS.
            </p>
            <p className="text-gray-900/70 leading-relaxed readable-width">
              When I&apos;m not architecting agents, I&apos;m shipping products — from sales intelligence
              platforms to longevity research systems. My north star is becoming a founding
              engineer at a company that matters.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass rounded-2xl text-center hover:border-[#3b82f6]/30 transition-all duration-300 group"
                style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}
              >
                <div className="text-5xl font-black text-[#3b82f6] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-900/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
