'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Network, Radio, Database, Bell, Sparkles } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  url: string;
  github?: string;
  live?: boolean;
  stats?: string[];
  features?: Feature[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  network: Network,
  radio: Radio,
  database: Database,
  bell: Bell,
  sparkles: Sparkles,
  default: Sparkles,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const DEFAULT_FEATURES: Feature[] = [
  { icon: 'sparkles', title: 'AI-Powered', description: 'Leverages advanced ML models' },
  { icon: 'radio', title: 'Real-time', description: 'Live data streaming capabilities' },
  { icon: 'database', title: 'Data Storage', description: 'Persistent and scalable storage' },
  { icon: 'network', title: 'Integrations', description: 'Connects to third-party APIs' },
];

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  const features = project.features || DEFAULT_FEATURES;
  const stats = project.stats || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#faf8f5]/90 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3b82f6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {/* Header Section */}
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-3 pr-10">
                  {project.title}
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border border-blue-200 bg-blue-50 text-[#3b82f6]">
                    {project.subtitle}
                  </span>
                </div>
                {/* Gradient line */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6]/50 to-transparent" />
              </div>

              {/* Stats Bar */}
              {stats.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-gray-50 border border-gray-200 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                      {stat}
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Description Section */}
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>

              {/* Key Features Section */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-[#3b82f6] uppercase tracking-widest mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {features.slice(0, 4).map((feature, index) => {
                    const IconComponent = ICON_MAP[feature.icon] || ICON_MAP.default;
                    return (
                      <motion.div
                        key={feature.title}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="group p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#3b82f6]/30 transition-all duration-200"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/20 transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-0.5">
                              {feature.title}
                            </h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Tech Stack Section */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-[#3b82f6] uppercase tracking-widest mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-50 text-[#3b82f6] border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3b82f6] text-white font-semibold hover:bg-[#2563eb] transition-colors duration-200"
                  >
                    View Live <ExternalLink className="w-4 h-4" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                    >
                      GitHub <Code className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
