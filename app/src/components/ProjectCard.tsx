import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart2, Eye } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: "easeOut"
      }}
      className="group bg-white border-[3px] border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 flex flex-col justify-between"
    >
      <div>
        {/* Project Thumbnail Header */}
        <div className={`relative p-5 border-b-[3px] border-black ${project.color}`}>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-1 bg-white border-[2px] border-black text-[11px] font-bold uppercase tracking-wide">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border-[2px] border-black text-[11px] font-bold uppercase">
              <BarChart2 className="w-3.5 h-3.5 text-pink" />
              <span>{project.keyMetric}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-black uppercase tracking-tight group-hover:underline decoration-[3px] decoration-black">
            {project.title}
          </h3>
          <p className="text-xs font-semibold text-black/80 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <p className="text-black/80 text-sm mb-4 line-clamp-3 font-medium leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-cream border-[2px] border-black text-[11px] font-bold uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-4 bg-gray-50 border-t-[3px] border-black flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(project)}
          className="brutal-btn bg-pink text-black text-xs uppercase flex items-center gap-1.5 py-2 px-3"
        >
          <Eye className="w-4 h-4" />
          View Case Study
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white border-[2px] border-black flex items-center justify-center hover:bg-mint transition-colors"
              title="GitHub Repo"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white border-[2px] border-black flex items-center justify-center hover:bg-sky transition-colors"
              title="Live Link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
