import { motion } from 'framer-motion';
import { ArrowRight, FileText, Sparkles, Database, Truck, BarChart2 } from 'lucide-react';
import HeroBentoGrid from '@/components/HeroBentoGrid';
import { personalInfo } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-[80px] pb-16 flex items-center relative overflow-hidden bg-warm-bg"
    >
      {/* Decorative doodle background icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-24 left-[8%] w-10 h-10 bg-pink border-[3px] border-black rotate-12" />
        <div className="absolute top-48 right-[12%] w-8 h-8 rounded-full border-[3px] border-black bg-mint" />
        <div className="absolute bottom-36 left-[18%] w-12 h-12 bg-sky border-[3px] border-black -rotate-6" />
        <div className="absolute bottom-20 right-[8%] w-16 h-8 border-[3px] border-black bg-cream" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-mint border-[3px] border-black mb-6 shadow-brutal-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping inline-block" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                {personalInfo.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black leading-[0.95] mb-6 tracking-tight uppercase"
            >
              HI, I'M <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal mt-1">ASTRI CAHYANI</span>
              <br />
              <span className="text-3xl sm:text-5xl lg:text-5xl block mt-3 font-extrabold text-black/90">
                DATA ANALYST & INDUSTRIAL ENGINEER
              </span>
            </motion.h1>

            {/* Sub-headline Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-black/85 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#projects"
                className="brutal-btn bg-pink text-black flex items-center justify-center gap-2 group text-sm uppercase tracking-wide"
              >
                View Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn bg-white text-black flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
              >
                <FileText className="w-4 h-4 text-black" />
                View My CV
              </a>
            </motion.div>

            {/* 4 Quick Stat Pill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0"
            >
              <div className="p-3 bg-white border-[2.5px] border-black shadow-brutal-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-pink">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Degree</span>
                </div>
                <div className="text-xs font-bold text-black uppercase mt-1">Industrial Eng.</div>
              </div>

              <div className="p-3 bg-white border-[2.5px] border-black shadow-brutal-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <Database className="w-3.5 h-3.5" />
                  <span>Tooling</span>
                </div>
                <div className="text-xs font-bold text-black uppercase mt-1">SQL & Python</div>
              </div>

              <div className="p-3 bg-white border-[2.5px] border-black shadow-brutal-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-600">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Domain</span>
                </div>
                <div className="text-xs font-bold text-black uppercase mt-1">Supply Chain</div>
              </div>

              <div className="p-3 bg-white border-[2.5px] border-black shadow-brutal-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-600">
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>BI Tool</span>
                </div>
                <div className="text-xs font-bold text-black uppercase mt-1">Power BI / DAX</div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Hero Bento Grid Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <HeroBentoGrid />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
