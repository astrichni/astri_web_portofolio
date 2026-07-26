import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  color: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, color, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group bg-white border-[3px] border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1"
    >
      {/* Project Image/Thumbnail */}
      <div className={`relative h-48 overflow-hidden border-b-[3px] border-black ${color}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/40 border-[3px] border-black" />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <button className="w-12 h-12 bg-white border-[3px] border-black flex items-center justify-center shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
            <ExternalLink className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-white border-[3px] border-black flex items-center justify-center shadow-brutal-sm hover:shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
            <Github className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-pink transition-colors duration-150 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-black/70 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-cream border-[2px] border-black text-xs font-bold uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
