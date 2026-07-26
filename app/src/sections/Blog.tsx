import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Web Design in 2024',
    excerpt: 'Exploring the latest trends and technologies that are shaping the future of web design.',
    date: 'Jan 15, 2024',
    readTime: '5 min',
    category: 'Design',
    color: 'bg-pink',
    featured: true,
  },
  {
    title: 'Building Accessible Interfaces',
    excerpt: 'Best practices for creating inclusive web experiences that work for everyone.',
    date: 'Jan 10, 2024',
    readTime: '4 min',
    category: 'Development',
    color: 'bg-mint',
    featured: false,
  },
  {
    title: 'My Creative Process',
    excerpt: 'How I approach new projects and challenges, from ideation to delivery.',
    date: 'Jan 5, 2024',
    readTime: '6 min',
    category: 'Process',
    color: 'bg-sky',
    featured: false,
  },
];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 lg:py-32 bg-cream border-y-[3px] border-black relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-1/4">
        <Sparkles className="w-8 h-8 text-pink" strokeWidth={3} />
      </div>
      <div className="absolute bottom-20 right-20">
        <div className="w-8 h-8 bg-sky border-[3px] border-black rotate-12" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky border-[3px] border-black mb-6 shadow-brutal-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">My Thoughts</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
            Latest <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal-sm">Articles</span>
          </h2>
          <p className="text-black/70 max-w-2xl text-lg font-medium">
            Thoughts on design, development, and creativity.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group bg-white border-[3px] border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 lg:row-span-2"
            >
              <div className={`h-64 lg:h-80 ${featuredPost.color} border-b-[3px] border-black relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 bg-white/40 border-[3px] border-black" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white border-[3px] border-black text-sm font-bold uppercase">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-pink border-[2px] border-black text-xs font-bold uppercase">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-bold">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-bold">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-pink transition-colors duration-150 uppercase tracking-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-black/70 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-black font-bold uppercase tracking-wide group/link"
                >
                  <span className="border-b-[3px] border-pink">Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          )}

          {/* Other Posts */}
          <div className="flex flex-col gap-6">
            {otherPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                className="group bg-white border-[3px] border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 flex flex-col sm:flex-row"
              >
                <div className={`sm:w-40 h-40 sm:h-auto ${post.color} border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-black relative overflow-hidden flex-shrink-0`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/40 border-[3px] border-black" />
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-1 border-[2px] border-black text-xs font-bold uppercase ${
                      post.category === 'Development' ? 'bg-mint' : 'bg-sky'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-xs font-bold">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-pink transition-colors duration-150 uppercase tracking-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-black/70 text-sm line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-bold uppercase group/link"
                  >
                    <span className="border-b-2 border-pink">Read</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
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
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
