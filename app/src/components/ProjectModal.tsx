import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText, CheckCircle2, Cpu, BarChart2 } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const isGoogleDoc = project.githubUrl?.includes('docs.google.com');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white border-[4px] border-black shadow-brutal-lg max-h-[90vh] flex flex-col my-auto overflow-hidden"
        >
          {/* Header */}
          <div className={`p-6 border-b-[3px] border-black ${project.color} flex items-start justify-between relative`}>
            <div>
              <span className="px-3 py-1 bg-white border-[2px] border-black text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black">
                {project.title}
              </h2>
              <p className="text-black/80 font-medium text-sm sm:text-base mt-1">
                {project.subtitle}
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center font-bold hover:bg-pink transition-colors shadow-brutal-sm flex-shrink-0"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Key Metric highlight */}
            <div className="p-4 bg-cream border-[3px] border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink border-[2px] border-black flex items-center justify-center">
                  <BarChart2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-black/70">Key Business Outcome</div>
                  <div className="text-2xl font-bold text-black">{project.keyMetric}</div>
                </div>
              </div>
              <span className="text-xs font-bold uppercase px-3 py-1 bg-white border-[2px] border-black">
                {project.metricLabel}
              </span>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-pink" />
                Project Overview
              </h3>
              <p className="text-black/80 leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <div className="p-4 bg-red-50 border-[2px] border-black">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-700 mb-1">Problem Statement</h4>
                <p className="text-sm font-medium text-black/80">{project.problemStatement}</p>
              </div>
            )}

            {/* Methodology */}
            {project.methodology && project.methodology.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-3">
                  Analytical Methodology
                </h3>
                <ul className="space-y-2">
                  {project.methodology.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-black/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Business Impact */}
            {project.businessImpact && project.businessImpact.length > 0 && (
              <div className="p-4 bg-mint/30 border-[2px] border-black">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-2">
                  Business Impact & Deliverables
                </h3>
                <ul className="space-y-1.5">
                  {project.businessImpact.map((impact, idx) => (
                    <li key={idx} className="text-xs sm:text-sm font-bold text-black flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-black inline-block" />
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools Used */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-black/70 mb-2">Tech Stack & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-white border-[2px] border-black text-xs font-bold uppercase">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-gray-50 border-t-[3px] border-black flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-white text-black text-xs uppercase flex items-center gap-2"
                >
                  {isGoogleDoc ? (
                    <>
                      <FileText className="w-4 h-4" />
                      Google Docs Documentation
                    </>
                  ) : (
                    <>
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </>
                  )}
                </a>
              )}
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-pink text-black text-xs uppercase flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="brutal-btn bg-black text-white text-xs uppercase"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
