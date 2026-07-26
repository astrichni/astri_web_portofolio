import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Database, Mail, Send, Heart, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmailInput('');
      setMessageInput('');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-black text-white border-t-[4px] border-black">
      
      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink border-[3px] border-white flex items-center justify-center">
                <Database className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-2xl font-bold uppercase tracking-tight block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-pink-400">
                  Data Analyst & Industrial Engineer
                </span>
              </div>
            </div>

            <p className="text-white/80 text-base leading-relaxed max-w-lg font-normal">
              Interested in hiring a data analyst who understands operational systems, supply chains, and quantitative tools? Let's connect!
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-bold">
                <div className="w-8 h-8 bg-mint border-[2px] border-white flex items-center justify-center text-black">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-pink transition-colors">
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm font-bold">
                <div className="w-8 h-8 bg-sky border-[2px] border-white flex items-center justify-center text-black">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-white/90">{personalInfo.location} (Open to Remote / Relocation)</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-[3px] border-white text-black font-bold flex items-center justify-center hover:bg-pink transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-[3px] border-white text-black font-bold flex items-center justify-center hover:bg-mint transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-6 bg-white text-black p-6 sm:p-8 border-[4px] border-white shadow-brutal"
          >
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-black/70 text-xs sm:text-sm font-medium mb-6">
              Have a data project or role opportunity? Leave your contact details below.
            </p>

            {submitted ? (
              <div className="p-6 bg-mint border-[3px] border-black text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-black mx-auto" />
                <h4 className="text-lg font-bold uppercase">Message Received!</h4>
                <p className="text-xs font-bold">Thank you! Astri Cahyani will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-3 bg-warm-bg border-[3px] border-black text-sm outline-none focus:shadow-brutal transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">Message / Opportunity</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Hi Astri, we are looking for a Data Analyst..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="w-full px-4 py-3 bg-warm-bg border-[3px] border-black text-sm outline-none focus:shadow-brutal transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full brutal-btn bg-pink text-black font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 py-3"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-[3px] border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} Astri Cahyani. All rights reserved.
          </p>
          <p className="text-white/60 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            Designed for Data Analytics & Supply Chain <Heart className="w-3.5 h-3.5 text-pink fill-pink" />
          </p>
        </div>
      </div>

    </footer>
  );
}
