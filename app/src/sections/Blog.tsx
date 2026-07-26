import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Sparkles, BookOpen } from 'lucide-react';
import { blogPostsData } from '@/data/portfolioData';

export default function Blog() {
  const featuredPost = blogPostsData.find(post => post.featured);
  const otherPosts = blogPostsData.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 lg:py-32 bg-cream border-y-[3px] border-black relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-1/4 pointer-events-none">
        <Sparkles className="w-8 h-8 text-pink" strokeWidth={3} />
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
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wide">Data & Operations Insights</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 tracking-tight uppercase">
            TECHNICAL <span className="bg-pink px-2 border-[3px] border-black inline-block shadow-brutal-sm">ARTICLES</span>
          </h2>
          <p className="text-black/80 max-w-2xl text-lg font-medium">
            Sharing analytical methodologies, supply chain optimization algorithms, and real-world data lessons.
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
              className="group bg-white border-[3px] border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 lg:row-span-2 flex flex-col justify-between"
            >
              <div className={`p-8 ${featuredPost.color} border-b-[3px] border-black relative overflow-hidden`}>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white border-[2px] border-black text-xs font-bold uppercase tracking-wider">
                    Featured Case Writeup
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black uppercase tracking-tight leading-snug">
                  {featuredPost.title}
                </h3>
              </div>

              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4 text-xs font-bold">
                    <span className="px-3 py-1 bg-pink border-[2px] border-black uppercase">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1 text-black/70">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1 text-black/70">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <p className="text-black/80 mb-6 font-medium text-sm sm:text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-black font-bold uppercase text-xs tracking-wide group/link"
                >
                  <span className="border-b-[3px] border-pink">Read Full Article</span>
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
                className="group bg-white border-[3px] border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 p-6"
              >
                <div className="flex items-center gap-3 mb-3 text-xs font-bold">
                  <span className={`px-2.5 py-1 border-[2px] border-black uppercase ${post.color}`}>
                    {post.category}
                  </span>
                  <span className="text-black/60">{post.date}</span>
                  <span className="text-black/60">• {post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-pink transition-colors duration-150 uppercase tracking-tight text-black">
                  {post.title}
                </h3>
                
                <p className="text-black/70 text-sm font-medium line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase group/link"
                >
                  <span className="border-b-2 border-pink">Read Insight</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
