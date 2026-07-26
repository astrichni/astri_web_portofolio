import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Dribbble, Sparkles, Send, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Books', href: '#books' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Dribbble', icon: Dribbble, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-[3px] border-black">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1"
          >
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-pink border-[3px] border-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold uppercase tracking-tight">YOURNAME</span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Creative developer passionate about building beautiful, interactive web experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white border-[3px] border-white flex items-center justify-center text-black hover:bg-pink hover:border-pink transition-colors duration-150"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-pink transition-colors duration-150 text-sm font-bold uppercase tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Branding'].map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm font-bold uppercase tracking-wide">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to get the latest updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-3 bg-white border-[3px] border-white text-black placeholder:text-black/50 outline-none"
              />
              <button className="w-12 h-12 bg-pink border-[3px] border-white flex items-center justify-center hover:bg-pink/90 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-[3px] border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm font-bold uppercase tracking-wide">
              © {new Date().getFullYear()} YourName. All rights reserved.
            </p>
            <p className="text-white/50 text-sm font-bold uppercase tracking-wide flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-pink fill-pink" /> and coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
