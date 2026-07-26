import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Search, Filter } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { projectsData } from '@/data/portfolioData';
import type { Project } from '@/types/portfolio';

const categories = ['All', 'NLP & ML', 'Supply Chain', 'Data Analytics', 'BI Dashboards'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 lg:py-32 bg-warm-bg relative">
      {/* Decorative stars */}
      <div className="absolute top-20 right-10 pointer-events-none">
        <Star className="w-8 h-8 text-pink fill-pink" strokeWidth={3} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint border-[3px] border-black mb-6 shadow-brutal-sm">
            <Star className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">Data & Analytics Portfolio</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
                FEATURED <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal-sm">CASE STUDIES</span>
              </h2>
              <p className="text-black/80 max-w-2xl text-lg font-medium">
                End-to-end data analytics, machine learning, and supply chain optimization projects focused on business ROI.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/60" />
              <input
                type="text"
                placeholder="Search tools or topics (e.g. SQL, IndoBERT)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border-[3px] border-black shadow-brutal-sm text-sm font-medium outline-none focus:shadow-brutal transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-black/70 flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter By:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 border-[3px] border-black font-bold uppercase text-xs tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-pink shadow-brutal-sm translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white hover:bg-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={(proj) => setActiveProjectModal(proj)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 brutal-card bg-white">
            <h3 className="text-xl font-bold uppercase mb-2">No matching case studies found</h3>
            <p className="text-black/70 text-sm font-medium">Try clearing your search query or selecting another filter category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="brutal-btn bg-pink text-black text-xs uppercase font-bold mt-4"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
}
