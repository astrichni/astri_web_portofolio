import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sparkles } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Project', href: '#projects' },
  { name: 'Blog', href: '#blog' },
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
          ? 'bg-white border-b-[3px] border-black' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 bg-pink border-[3px] border-black flex items-center justify-center shadow-brutal-sm">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">Astri Cahyani</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-150 ${
                  activeLink === link.name
                    ? 'bg-pink border-[3px] border-black shadow-brutal-sm'
                    : 'hover:bg-gray-100 border-[3px] border-transparent'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="brutal-btn bg-mint text-black font-bold text-sm uppercase tracking-wide">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="w-10 h-10 bg-white border-[3px] border-black flex items-center justify-center shadow-brutal-sm">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-cream border-l-[3px] border-black p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b-[3px] border-black bg-white">
                    <span className="font-bold text-lg uppercase tracking-tight">Menu</span>
                  </div>
                  <nav className="flex flex-col p-4 gap-3">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => handleLinkClick(link.name)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center gap-3 px-4 py-3 border-[3px] border-black font-bold uppercase tracking-wide transition-all duration-150 ${
                          activeLink === link.name
                            ? 'bg-pink shadow-brutal-sm'
                            : 'bg-white hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                    <button className="w-full brutal-btn bg-mint text-black font-bold uppercase tracking-wide">
                      Contact Me
                    </button>
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
