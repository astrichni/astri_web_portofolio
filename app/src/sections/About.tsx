import { motion } from 'framer-motion';
import { Database, Truck, BarChart3, Binary, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream border-y-[3px] border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink border-[3px] border-black mb-6 shadow-brutal-sm">
            <Binary className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">The Value Proposition</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
            BRIDGING <span className="bg-mint px-2 border-[3px] border-black inline-block shadow-brutal-sm">DATA ANALYTICS</span> & OPERATIONAL SYSTEMS
          </h2>
          <p className="text-black/80 max-w-3xl text-lg font-medium">
            As an Industrial Engineering fresh graduate specializing in Data Analytics, I bring a unique dual perspective: 
            rigorous technical tool mastery combined with a deep structural understanding of supply chains, cost drivers, and business optimization.
          </p>
        </motion.div>

        {/* 3 Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="brutal-card p-6 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-pink border-[3px] border-black flex items-center justify-center shadow-brutal-sm mb-6">
                <Database className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 uppercase tracking-tight">
                1. Analytical Skill Set
              </h3>
              <p className="text-black/70 text-sm font-medium leading-relaxed mb-4">
                Proficient in converting messy, unstructured data into clean data structures using SQL and Python. Experienced in statistical testing, regression modeling, and NLP classification (IndoBERT).
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t-[2px] border-black/10">
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> SQL & PostgreSQL
              </li>
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Python (Pandas, Scikit-learn)
              </li>
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Statistical Modeling & Testing
              </li>
            </ul>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="brutal-card p-6 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-mint border-[3px] border-black flex items-center justify-center shadow-brutal-sm mb-6">
                <Truck className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 uppercase tracking-tight">
                2. Business & Supply Chain
              </h3>
              <p className="text-black/70 text-sm font-medium leading-relaxed mb-4">
                Industrial Engineering background provides deep grounding in inventory control (EOQ/Safety Stock), lead-time reduction, demand forecasting, and bottleneck identification across supply chains.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t-[2px] border-black/10">
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Inventory Safety Stock Optimization
              </li>
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Demand Forecasting (Prophet/ARIMA)
              </li>
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Lean Six Sigma & Process Mapping
              </li>
            </ul>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="brutal-card p-6 bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-sky border-[3px] border-black flex items-center justify-center shadow-brutal-sm mb-6">
                <BarChart3 className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3 uppercase tracking-tight">
                3. BI Dashboards & Storytelling
              </h3>
              <p className="text-black/70 text-sm font-medium leading-relaxed mb-4">
                A good analysis is useless if stakeholders cannot act on it. I build clear, interactive Power BI & Tableau dashboards with custom DAX calculations that present actionable executive stories.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t-[2px] border-black/10">
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Power BI & DAX Modeling
              </li>
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Tableau & Interactive Visuals
              </li>
              <li className="flex items-center gap-2 text-xs font-bold uppercase text-black/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Executive Key Metric Reporting
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="brutal-card p-6 sm:p-8 bg-pink text-black flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="px-3 py-1 bg-white border-[2px] border-black text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              Industrial Engineering Major
            </span>
            <h4 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
              Ready to turn operational data into bottom-line profits?
            </h4>
            <p className="text-black/80 font-medium text-sm sm:text-base mt-1">
              Currently seeking Data Analyst, Business Intelligence, or Supply Chain Analytics roles.
            </p>
          </div>

          <a
            href="#contact"
            className="brutal-btn bg-white text-black uppercase font-bold text-sm tracking-wide inline-flex items-center gap-2 whitespace-nowrap"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
