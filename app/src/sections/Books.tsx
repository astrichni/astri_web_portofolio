import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';
import BookCard from '@/components/BookCard';

const categories = ['All', 'Design', 'Development', 'Productivity'];

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    description: 'A powerful primer on how design serves as the interface between object and user.',
    rating: 5,
    pages: '368',
    category: 'Design',
    color: 'bg-orange-400',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description: 'Even bad code can function. But if code is not clean, it can bring a development organization to its knees.',
    rating: 5,
    pages: '464',
    category: 'Development',
    color: 'bg-blue-500',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day.',
    rating: 5,
    pages: '320',
    category: 'Productivity',
    color: 'bg-yellow-400',
  },
  {
    title: 'Refactoring UI',
    author: 'Adam Wathan',
    description: 'Learn how to design beautiful user interfaces by yourself using specific tactics.',
    rating: 4,
    pages: '218',
    category: 'Design',
    color: 'bg-purple-500',
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    description: 'Rules for focused success in a distracted world. Master the ability to focus.',
    rating: 4,
    pages: '304',
    category: 'Productivity',
    color: 'bg-red-500',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    description: 'Cut through the increasing specialization and technicalities of modern software development.',
    rating: 5,
    pages: '352',
    category: 'Development',
    color: 'bg-green-500',
  },
];

export default function Books() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = activeCategory === 'All' || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="books" className="py-20 lg:py-32 bg-warm-bg relative">
      {/* Decorative elements */}
      <div className="absolute top-16 right-16">
        <BookOpen className="w-10 h-10 text-pink" strokeWidth={3} />
      </div>
      <div className="absolute bottom-32 left-12">
        <div className="w-8 h-8 bg-cream border-[3px] border-black rotate-45" />
      </div>

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
            <span className="text-sm font-bold uppercase tracking-wide">My Library</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
                My Reading <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal-sm">List</span>
              </h2>
              <p className="text-black/70 max-w-2xl text-lg font-medium">
                Books that inspire and educate me.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border-[3px] border-black shadow-brutal-sm outline-none focus:shadow-brutal transition-all"
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
          className="flex flex-wrap gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 border-[3px] border-black font-bold uppercase text-sm tracking-wide transition-all duration-150 ${
                activeCategory === category
                  ? 'bg-pink shadow-brutal-sm'
                  : 'bg-white hover:shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5'
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
            {filteredBooks.map((book, index) => (
              <BookCard
                key={book.title}
                {...book}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-cream border-[3px] border-black flex items-center justify-center mx-auto mb-4 shadow-brutal">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase">No books found</h3>
            <p className="text-black/60">Try adjusting your search or filter</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
