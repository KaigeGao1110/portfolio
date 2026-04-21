'use client';

import { motion } from 'framer-motion';

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

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-semibold text-[#3b82f6]">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] via-[#faf8f5] to-[#faf8f5]" />

      <div className="relative z-10 fluid-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#3b82f6] text-sm font-semibold tracking-[0.2em] uppercase">
            Expertise
          </span>
          <h2 className="fluid-heading font-bold mt-4 gradient-text">Skills & Stack</h2>
        </motion.div>

        <div className="grid md:grid-cols-2"
          style={{ gap: 'clamp(1.5rem, 4vw, 4rem)' }}>
          {/* AI & Agents */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl" style={{ padding: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <span className="text-[#3b82f6] text-lg">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">AI & Agents</h3>
            </div>

            {aiSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
            ))}
          </motion.div>

          {/* Cloud & Infra */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl" style={{ padding: "clamp(1.25rem, 3vw, 2.5rem)" }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <span className="text-[#3b82f6] text-lg">☁️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cloud & Infra</h3>
            </div>

            {cloudSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
