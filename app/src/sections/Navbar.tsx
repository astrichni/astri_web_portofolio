import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Database, Mail } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { personalInfo } from '@/data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#experience' },
  { name: 'Articles', href: '#blog' },
  { name: 'Books', href: '#books' },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white border-b-[3px] border-black shadow-brutal-sm' 
          : 'bg-white border-b-[2px] border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Logo Brand */}
          <motion.a
            href="#home"
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 bg-pink border-[3px] border-black flex items-center justify-center shadow-brutal-sm">
              <Database className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight uppercase block text-black leading-none">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-black/60 block">
                Data & Supply Chain Analyst
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all duration-150 ${
                  activeLink === link.name
                    ? 'bg-pink border-[2.5px] border-black shadow-brutal-sm'
                    : 'hover:bg-cream border-[2.5px] border-transparent'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href={`mailto:${personalInfo.email}?subject=Portfolio Inquiry`}
              className="brutal-btn bg-mint text-black font-bold text-xs uppercase tracking-wide inline-flex items-center gap-1.5 py-2 px-4"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center shadow-brutal-sm">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-warm-bg border-l-[3px] border-black p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b-[3px] border-black bg-white">
                    <span className="font-bold text-base uppercase tracking-tight">Navigation</span>
                  </div>
                  <nav className="flex flex-col p-4 gap-2.5">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => handleLinkClick(link.name)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                        className={`flex items-center gap-3 px-4 py-2.5 border-[2.5px] border-black text-xs font-bold uppercase tracking-wide transition-all ${
                          activeLink === link.name
                            ? 'bg-pink shadow-brutal-sm'
                            : 'bg-white hover:bg-cream'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                    <a
                      href={`mailto:${personalInfo.email}?subject=Portfolio Inquiry`}
                      className="w-full brutal-btn bg-mint text-black font-bold text-xs uppercase tracking-wide text-center block"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}
