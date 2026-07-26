import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Star } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  rating: number;
  pages: string;
  color: string;
  index: number;
}

export default function BookCard({ title, author, description, rating, pages, color, index }: BookCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: "easeOut"
      }}
      className="group bg-white border-[3px] border-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1"
    >
      <div className="flex gap-4 p-5">
        {/* Book Cover */}
        <div className={`w-24 h-32 ${color} border-[3px] border-black flex-shrink-0 flex items-center justify-center relative`}>
          <div className="w-10 h-10 bg-white/40 border-[2px] border-black" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-bold text-black line-clamp-1 group-hover:text-pink transition-colors duration-150 uppercase tracking-tight text-sm">
                {title}
              </h3>
              <p className="text-xs font-bold text-black/60 uppercase">By {author}</p>
            </div>
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex-shrink-0 p-1.5 border-[2px] border-black transition-all duration-150 ${
                isBookmarked ? 'bg-pink shadow-brutal-sm' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-black' : ''}`} />
            </button>
          </div>

          <p className="text-xs text-black/70 mt-2 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < rating ? 'text-black fill-black' : 'text-gray-300'
                  }`}
                  strokeWidth={2}
                />
              ))}
            </div>
            <span className="text-xs font-bold">{pages}p</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full py-3 bg-pink border-t-[3px] border-black font-bold text-sm uppercase tracking-wide hover:bg-pink/90 transition-colors">
        Read Preview
      </button>
    </motion.div>
  );
}
