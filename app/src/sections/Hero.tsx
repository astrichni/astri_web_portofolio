import { motion } from 'framer-motion';
import { ArrowRight, Download, Star, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-[72px] flex items-center relative overflow-hidden bg-warm-bg"
    >
      {/* Decorative doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[10%]"
        >
          <Star className="w-10 h-10 text-pink fill-pink" strokeWidth={3} />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -20, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-48 right-[15%]"
        >
          <Star className="w-8 h-8 text-mint fill-mint" strokeWidth={3} />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-[20%]"
        >
          <Star className="w-6 h-6 text-sky fill-sky" strokeWidth={3} />
        </motion.div>

        {/* Circles */}
        <div className="absolute top-24 right-[25%] w-8 h-8 rounded-full border-[3px] border-black bg-cream" />
        <div className="absolute bottom-32 right-[10%] w-12 h-12 rounded-full border-[3px] border-black bg-pink" />
        <div className="absolute top-1/2 left-[5%] w-6 h-6 rounded-full border-[3px] border-black bg-mint" />

        {/* Zigzag lines */}
        <svg className="absolute bottom-20 left-[30%] w-16 h-8" viewBox="0 0 64 32">
          <path d="M0 16 L16 4 L32 28 L48 8 L64 24" fill="none" stroke="black" strokeWidth="3" />
        </svg>
        <svg className="absolute top-40 right-[8%] w-12 h-6" viewBox="0 0 48 24">
          <path d="M0 12 L12 2 L24 22 L36 6 L48 18" fill="none" stroke="black" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink border-[3px] border-black mb-6 shadow-brutal-sm"
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[0.95] mb-6 tracking-tight"
            >
              HELLO, I'M A<br />
              <span className="bg-pink px-2 border-[3px] border-black inline-block mt-2 shadow-brutal">CREATIVE</span><br />
              DEVELOPER
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-black mb-8 max-w-xl mx-auto lg:mx-0 font-medium"
            >
              I build beautiful, interactive web experiences with modern technologies. 
              Passionate about creating user-friendly interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="brutal-btn bg-pink text-black flex items-center justify-center gap-2 group">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="brutal-btn bg-white text-black flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '5+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`px-4 py-3 border-[3px] border-black shadow-brutal-sm ${
                    index === 0 ? 'bg-mint' : index === 1 ? 'bg-sky' : 'bg-cream'
                  }`}
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main geometric composition - neo brutalism style */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-pink border-[4px] border-black shadow-brutal-lg"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -3, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[15%] right-[15%] w-32 h-32 bg-mint border-[4px] border-black shadow-brutal"
              />
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] left-[10%] w-24 h-24 bg-sky border-[4px] border-black shadow-brutal-sm"
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[25%] left-[15%] w-16 h-16 bg-cream border-[4px] border-black"
              />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-8 w-12 h-12 border-[4px] border-black bg-white"
              />
              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -15, 15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-16 right-12 w-8 h-8 bg-mint border-[3px] border-black"
              />
              <motion.div
                animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute top-1/2 left-4 w-6 h-6 bg-pink border-[3px] border-black rotate-12"
              />

              {/* Cross decorations */}
              <div className="absolute bottom-8 left-1/4">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0v24M0 12h24" stroke="black" strokeWidth="4" />
                </svg>
              </div>
              <div className="absolute top-16 right-1/4">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M12 0v24M0 12h24" stroke="black" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
