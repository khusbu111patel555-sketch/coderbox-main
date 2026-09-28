import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// import { supabase } from '../lib/supabase';

const BlogGridSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(6);            // home page pe 6 blogs — chaho to badha lo
      if (error) console.error(error);
      setBlogs(data || []);
      setLoading(false);
    };
    load();
  }, []);

  const getTextStyles = (type) => {
    switch (type) {
      case 'teal-text':
        return { bg: 'bg-[#008df1]', category: 'text-white/80', title: 'text-white',
                 desc: 'text-white/85', arrowColor: 'text-white', readMore: 'text-white' };
      case 'black-text':
        return { bg: 'bg-[#005b8f]', category: 'text-white/80', title: 'text-white',
                 desc: 'text-white/85', arrowColor: 'text-white', readMore: 'text-white' };
      case 'white-text':
      default:
        return { bg: 'bg-white', category: 'text-gray-500', title: 'text-gray-900',
                 desc: 'text-gray-600', arrowColor: 'text-[#008df1]', readMore: 'text-[#008df1]' };
    }
  };

  if (loading) {
    return (
      <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f5f5f5]">
        <div className="text-center text-gray-500">Loading blogs…</div>
      </section>
    );
  }

  if (!blogs.length) return null;

  return (
    <section className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#f5f5f5] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-5 md:mb-6"
        >
          <motion.span
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Blog
          </motion.span>
          <motion.h2 className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
            Latest{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Insights & Case Studies
            </span>
          </motion.h2>
          <motion.p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
            Stay updated with the latest trends, strategies and success stories from TheCoderBox
          </motion.p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl">
          {blogs.map((blog, idx) => {
            const styles = getTextStyles(blog.type);
            const isImageFirst = blog.order === 'image-first';
            return (
              <motion.a
                key={blog.id}
                href={blog.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col sm:flex-row h-full min-h-[300px] sm:min-h-[340px] overflow-hidden cursor-pointer ${
                  isImageFirst ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* IMAGE */}
                <div className="relative w-full sm:w-1/2 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>

                {/* TEXT */}
                <div className={`relative w-full sm:w-1/2 p-6 sm:p-7 flex flex-col justify-center ${styles.bg} transition-all duration-500`}>
                  <p className={`text-xs font-medium uppercase tracking-wider mb-3 ${styles.category}`}>
                    {blog.category}
                  </p>
                  <h3 className={`sec-h3 leading-tight mb-3 ${styles.title} group-hover:opacity-90 transition-opacity duration-300`}>
                    {blog.title}
                  </h3>
                  <p className={`sec-p leading-relaxed mb-4 ${styles.desc} line-clamp-4`}>
                    {blog.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${styles.readMore}`}>
                      Read More
                    </span>
                    <ArrowRight className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-2 ${styles.arrowColor}`} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogGridSection;