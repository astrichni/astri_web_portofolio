import { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, Truck, Wrench, Sparkles, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky border-[3px] border-black mb-6 shadow-brutal-sm">
            <Wrench className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">Technical Competencies</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
            TOOLING & <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal-sm">SKILL SET</span>
          </h2>
          <p className="text-black/80 max-w-2xl text-lg font-medium">
            Equipped with modern software tools, mathematical methodologies, and industrial domain knowledge to execute data projects end-to-end.
          </p>
        </motion.div>

        {/* Skill Category Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`p-4 border-[3px] border-black font-bold uppercase text-left transition-all flex items-center justify-between gap-3 ${
                activeCategoryIndex === idx
                  ? `${category.color} shadow-brutal translate-x-[-2px] translate-y-[-2px]`
                  : 'bg-white hover:bg-cream'
              }`}
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                {getIcon(category.iconName)}
                <span>{category.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Skill List Grid */}
        <motion.div
          key={activeCategoryIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategoryIndex].skills.map((skill) => (
            <div
              key={skill.name}
              className="brutal-card p-5 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-black uppercase tracking-tight">
                    {skill.name}
                  </h4>
                  <span className="px-2.5 py-0.5 bg-mint border-[2px] border-black text-[11px] font-bold uppercase">
                    {skill.level}
                  </span>
                </div>
                <p className="text-black/70 text-sm font-medium leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 pt-3 border-t-[2px] border-black/10">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Verified in Project Work</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quick Tech Badge Marquee / Cloud */}
        <div className="mt-16 p-6 bg-white border-[3px] border-black shadow-brutal">
          <div className="text-xs font-bold uppercase tracking-wider text-black/70 mb-3 text-center sm:text-left">
            Core Technology Stack & Libraries:
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
            {[
              'SQL (PostgreSQL)', 'Python 3', 'Pandas', 'NumPy', 'Scikit-Learn', 'IndoBERT',
              'Power BI (DAX)', 'Tableau', 'R', 'Advanced Excel (VBA)', 'Git / GitHub',
              'Supply Chain EOQ', 'Prophet Forecasting', 'Lean Six Sigma', 'PostgreSQL'
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-cream border-[2px] border-black text-xs font-bold uppercase shadow-brutal-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
