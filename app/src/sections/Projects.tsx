import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'NLP: Analysis Sentiment E-Wallet Reviews Using IndoBERT and Topic Modeling',
    description: '.',
    tags: ['Python', '', ''],
    color: 'bg-pink',
  },
  {
    title: 'ETL',
    description: 'Interactive dashboard with data visualization using D3.js and real-time analytics.',
    tags: ['TypeScript', 'D3.js', 'Firebase'],
    color: 'bg-mint',
  },
  {
    title: 'Data Science:',
    description: 'UI/UX design for a fitness tracking app with intuitive user interface.',
    tags: ['Figma', 'Prototyping', 'Mobile'],
    color: 'bg-sky',
  },
  {
    title: 'Rupiah Reader',
    description: 'Complete branding package for a startup including logo design and guidelines.',
    tags: ['Branding', 'Logo', 'Strategy'],
    color: 'bg-cream',
  },
  {
    title: 'NYC Taxi Fare Prediction',
    description: 'SaaS platform for project management with team collaboration features.',
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
    color: 'bg-purple-300',
  },
  {
    title: 'Creative Website',
    description: 'Award-winning website with smooth animations for a creative agency.',
    tags: ['GSAP', 'Three.js', 'WebGL'],
    color: 'bg-orange-300',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-warm-bg relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10">
        <Star className="w-8 h-8 text-pink fill-pink" strokeWidth={3} />
      </div>
      <div className="absolute bottom-40 left-10">
        <div className="w-6 h-6 bg-mint border-[3px] border-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint border-[3px] border-black mb-6 shadow-brutal-sm">
            <Star className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">My Work</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
            Featured <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal-sm">Projects</span>
          </h2>
          <p className="text-black/70 max-w-2xl text-lg font-medium">
            A selection of my recent work across web development, design, and creative projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="brutal-btn bg-white text-black inline-flex items-center gap-2 group">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
