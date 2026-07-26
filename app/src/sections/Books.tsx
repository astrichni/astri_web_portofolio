import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Star } from 'lucide-react';
import { booksData } from '@/data/portfolioData';

const categories = ['All', 'Data & Analytics', 'Supply Chain', 'Engineering', 'Productivity'];

export default function Books() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = booksData.filter(book => {
    const matchesCategory = activeCategory === 'All' || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="books" className="py-20 lg:py-32 bg-warm-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream border-[3px] border-black mb-6 shadow-brutal-sm">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">Continuous Learning</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
                RECOMMENDED <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal-sm">READING</span>
              </h2>
              <p className="text-black/80 max-w-2xl text-lg font-medium">
                Books that have shaped my data visualization, supply chain strategy, and engineering thinking.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/60" />
              <input
                type="text"
                placeholder="Search books or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border-[3px] border-black shadow-brutal-sm text-sm outline-none focus:shadow-brutal transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2.5 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 border-[3px] border-black font-bold uppercase text-xs tracking-wide transition-all ${
                activeCategory === category
                  ? 'bg-pink shadow-brutal-sm'
                  : 'bg-white hover:bg-cream'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Books Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredBooks.map((book) => (
              <div
                key={book.title}
                className="brutal-card p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-1 ${book.color} border-[2px] border-black text-[11px] font-bold uppercase`}>
                      {book.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(book.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-black stroke-[1.5]" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-black uppercase tracking-tight mb-1">
                    {book.title}
                  </h3>
                  <p className="text-xs font-bold text-pink-700 uppercase mb-3">
                    By {book.author}
                  </p>
                  <p className="text-black/80 text-sm font-medium leading-relaxed mb-4">
                    {book.description}
                  </p>
                </div>

                <div className="pt-3 border-t-[2px] border-black/10 flex items-center justify-between text-xs font-bold text-black/60 uppercase">
                  <span>Pages: {book.pages}</span>
                  <span className="text-emerald-700">Recommended</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16 brutal-card bg-white">
            <h3 className="text-xl font-bold uppercase mb-2">No books found</h3>
            <p className="text-black/70 text-sm font-medium">Try adjusting your search or filter</p>
          </div>
        )}

      </div>
    </section>
  );
}
