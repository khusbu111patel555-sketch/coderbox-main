import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import {
  ArrowLeft, Calendar, Clock, User, Loader2,
  Search, ChevronRight, Tag, ArrowRight,
  PenTool, BookOpen, Sparkles, MessageSquare, Star, Lightbulb, Hash, FileText,
} from 'lucide-react';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data } = await supabase
        .from('blogs').select('*').eq('slug', slug).eq('status', 'published').single();
      setBlog(data);
      setLoading(false);

      if (data) {
        supabase.from('blogs').update({ views_count: (data.views_count || 0) + 1 }).eq('id', data.id).then();

        const { data: recent } = await supabase
          .from('blogs')
          .select('id, title, slug, featured_image, category_name, published_at, created_at')
          .eq('status', 'published').neq('id', data.id)
          .order('published_at', { ascending: false }).limit(5);
        setRecentPosts(recent || []);

        const { data: catData } = await supabase.from('blogs').select('category_name').eq('status', 'published');
        const catCount = {};
        (catData || []).forEach((r) => { if (r.category_name) catCount[r.category_name] = (catCount[r.category_name] || 0) + 1; });
        setCategories(Object.entries(catCount).map(([name, count]) => ({ name, count })));

        const { data: tagData } = await supabase.from('blogs').select('tags').eq('status', 'published');
        const tagCount = {};
        (tagData || []).forEach((r) => {
          const list = Array.isArray(r.tags) ? r.tags : typeof r.tags === 'string' ? r.tags.split(',').map((t) => t.trim()) : [];
          list.forEach((t) => { if (t) tagCount[t] = (tagCount[t] || 0) + 1; });
        });
        setTags(Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([name, count]) => ({ name, count })));
      }
    };
    load();
  }, [slug]);

  const formatDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="w-10 h-10 animate-spin text-[#0A5E93]" />
        <p className="text-sm text-gray-500">Loading article...</p>
      </div>
    </div>
  );

  if (!blog) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <h1 className="text-3xl font-bold text-gray-900">Blog not found</h1>
      <p className="text-gray-500">The article you're looking for doesn't exist or has been removed.</p>
      <Link to="/blog" className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A5E93] text-white font-semibold text-sm hover:bg-[#084A75] transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-['DM_Sans'] overflow-x-hidden">

      {/* HERO */}
      <section
        className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(1,173,240,0.12) 0%, transparent 55%)' }} />
          <div className="absolute inset-0"
               style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />

          {/* Floating orbs */}
          <motion.div
            className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
              boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
              filter: 'blur(2px)',
            }}
            animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
              boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
              filter: 'blur(2px)',
            }}
            animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
            style={{
              background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
              boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
              filter: 'blur(2px)',
            }}
            animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Rotating wireframe diamond */}
          <motion.svg
            className="absolute top-[8%] right-[15%] w-[400px] h-[400px] opacity-60 hidden sm:block"
            viewBox="0 0 500 500" fill="none"
            style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
            animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <defs>
              <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <motion.polygon points="250,40 460,250 250,460 40,250" stroke="url(#wireGrad)" strokeWidth="1.2" fill="none"
              animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
            <motion.polygon points="250,80 420,250 250,420 80,250" stroke="url(#wireGrad)" strokeWidth="0.8" fill="none" opacity="0.6"
              animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '250px 250px' }} />
          </motion.svg>

          {/* Blog-related floating icon particles */}
          {[
            { Icon: PenTool,       top: '12%', left: '10%', size: 26, delay: 0,   dur: 7 },
            { Icon: BookOpen,      top: '22%', left: '88%', size: 30, delay: 0.5, dur: 8 },
            { Icon: Sparkles,      top: '40%', left: '15%', size: 22, delay: 1,   dur: 6 },
            { Icon: MessageSquare, top: '60%', left: '82%', size: 24, delay: 1.5, dur: 7.5 },
            { Icon: Star,          top: '75%', left: '18%', size: 20, delay: 2,   dur: 6.5 },
            { Icon: Lightbulb,     top: '82%', left: '78%', size: 26, delay: 2.5, dur: 8 },
            { Icon: FileText,      top: '28%', left: '42%', size: 22, delay: 0.8, dur: 7 },
            { Icon: Hash,          top: '70%', left: '48%', size: 20, delay: 1.8, dur: 6 },
            { Icon: Search,        top: '15%', left: '58%', size: 22, delay: 3,   dur: 7.5 },
            { Icon: PenTool,       top: '62%', left: '65%', size: 18, delay: 0.3, dur: 6.5 },
            { Icon: BookOpen,      top: '45%', left: '75%', size: 24, delay: 1.2, dur: 8 },
            { Icon: Sparkles,      top: '88%', left: '32%', size: 20, delay: 2.2, dur: 7 },
          ].map(({ Icon, top, left, size, delay, dur }, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ top, left }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.15, 0.55, 0.15],
                y: [0, -18, 0, 14, 0],
                rotate: [0, 12, 0, -12, 0],
              }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
            >
              <Icon
                size={size}
                strokeWidth={1.5}
                style={{
                  color: '#52dcff',
                  filter: 'drop-shadow(0 0 8px rgba(82, 220, 255, 0.6))',
                  opacity: 0.85,
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-5 text-center z-10">
          {blog.category_name && (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="inline-block px-4 py-2 rounded-full bg-[#01ADF0]/15 border border-[#01ADF0]/40 text-[#52dcff] text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
            >
              {blog.category_name}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15] text-white tracking-[-0.025em] max-w-4xl mx-auto"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
          >
            {blog.title}
          </motion.h1>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      {blog.featured_image && (
        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 -mt-16 sm:-mt-24 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,30,60,0.4)] border-4 border-white"
          >
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="w-full h-[260px] sm:h-[380px] md:h-[460px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-gray-600"
          >
            <span className="flex items-center gap-1.5 font-semibold text-gray-800">
              <User className="w-4 h-4 text-[#0A5E93]" />
              khusbu111patel555
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#0A5E93]" />
              30 September 2026
            </span>
            {blog.reading_time && (
              <>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0A5E93]" /> {blog.reading_time} min read
                </span>
              </>
            )}
          </motion.div>
        </div>
      )}

      {/* MAIN CONTENT + SIDEBAR */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

            <article className="lg:col-span-2 min-w-0">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A5E93] hover:text-[#01ADF0] transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>

              {blog.excerpt && (
                <p className="text-lg sm:text-xl text-gray-600 italic border-l-4 border-[#01ADF0] pl-5 mb-8 leading-relaxed">
                  {blog.excerpt}
                </p>
              )}

              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-[1.75] prose-p:my-4 prose-a:text-[#0A5E93] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5 prose-li:text-gray-700 prose-blockquote:border-l-[#01ADF0] prose-blockquote:bg-[#E6F8FF] prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-gray-800 prose-img:rounded-xl prose-img:shadow-lg prose-img:my-6 prose-table:border-collapse prose-table:my-6 prose-th:bg-[#0A5E93] prose-th:text-white prose-th:px-4 prose-th:py-3 prose-th:text-left prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-gray-200 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-[#0A5E93]"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {blog.tags && (
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider">
                      <Tag className="w-4 h-4 text-[#0A5E93]" /> Tags:
                    </span>
                    {(Array.isArray(blog.tags) ? blog.tags : typeof blog.tags === 'string' ? blog.tags.split(',').map((t) => t.trim()) : []).map((t) => (
                      <Link key={t} to={`/blog?tag=${encodeURIComponent(t)}`} className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-[#0A5E93] hover:text-white text-xs font-semibold text-gray-700 transition-colors">
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* ✅ FOLLOW US — Footer wale Facebook & LinkedIn links */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Follow Us:</span>

                  {/* Facebook — Footer link */}
                  <a
                    href="https://www.facebook.com/thecoderbox/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Follow on Facebook"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* LinkedIn — Footer link */}
                  <a
                    href="https://www.linkedin.com/company/thecoderbox/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label="Follow on LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* CTA — About Us wale button jaisa */}
              <div
                className="relative mt-10 rounded-2xl p-8 sm:p-10 text-white overflow-hidden shadow-lg"
                style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #001E3C 100%)' }}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#01ADF0]/30 blur-3xl" />
                  <div className="absolute -bottom-16 -left-12 w-40 h-40 rounded-full bg-[#00C6FB]/20 blur-3xl" />
                </div>
                <div className="relative text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                    Have a digital idea in mind?
                  </h3>
                  <p className="text-sm sm:text-base text-white/75 max-w-md mx-auto mb-6 leading-relaxed">
                    Let's turn it into reality. Talk to our team about your next big project.
                  </p>
                  <Link
                    to="/contact"
                    className="sec-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0B1526] font-bold shadow-none hover:bg-[#F09A36] hover:text-[#0B1526] transition-all duration-300"
                  >
                    Start a conversation
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </div>
              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider pb-3 mb-5 border-b-2 border-[#0A5E93]/20 relative">
                  Search
                  <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-[#0A5E93]" />
                </h3>
                <div className="relative">
                  <input type="text" placeholder="Search here..." className="w-full h-11 pl-4 pr-12 rounded-lg bg-gray-50 border border-gray-200 text-sm outline-none focus:border-[#0A5E93] focus:bg-white transition-colors" onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = `/blog?search=${encodeURIComponent(e.target.value)}`; }} />
                  <button className="absolute right-1 top-1 h-9 w-9 rounded-md bg-[#0A5E93] text-white flex items-center justify-center hover:bg-[#084A75] transition-colors" aria-label="Search">
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {categories.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider pb-3 mb-5 border-b-2 border-[#0A5E93]/20 relative">
                    Categories
                    <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-[#0A5E93]" />
                  </h3>
                  <ul className="space-y-1">
                    {categories.map((c) => (
                      <li key={c.name}>
                        <Link to={`/blog?category=${encodeURIComponent(c.name)}`} className="flex items-center justify-between py-2 px-3 -mx-3 rounded-lg text-sm text-gray-700 hover:bg-[#E6F8FF] hover:text-[#0A5E93] hover:pl-4 transition-all group">
                          <span className="flex items-center gap-2 font-medium">
                            <ChevronRight className="w-3.5 h-3.5 text-[#0A5E93] group-hover:translate-x-0.5 transition-transform" />
                            {c.name}
                          </span>
                          <span className="text-xs font-bold text-[#0A5E93] bg-[#0A5E93]/10 rounded-full px-2 py-0.5">{c.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {recentPosts.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider pb-3 mb-5 border-b-2 border-[#0A5E93]/20 relative">
                    Recent Posts
                    <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-[#0A5E93]" />
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((p) => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="group flex gap-3 items-start">
                        {p.featured_image && (
                          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                            <img src={p.featured_image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] text-gray-500 mb-1 font-medium">{formatDate(p.published_at || p.created_at)}</p>
                          <h4 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#0A5E93] transition-colors">{p.title}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {tags.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider pb-3 mb-5 border-b-2 border-[#0A5E93]/20 relative">
                    Tags
                    <span className="absolute bottom-0 left-0 w-10 h-[2px] bg-[#0A5E93]" />
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <Link key={t.name} to={`/blog?tag=${encodeURIComponent(t.name)}`} className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-[#0A5E93] hover:text-white text-[11px] font-semibold text-gray-700 transition-colors">
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="relative rounded-xl p-6 text-white overflow-hidden shadow-lg" style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 55%, #005B8F 100%)' }}>
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#01ADF0]/30 blur-3xl" />
                <div className="relative">
                  <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">Get in touch with our team to discuss your project.</p>
                  <Link
                    to="/contact"
                    className="sec-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0B1526] text-sm font-bold hover:bg-[#F09A36] hover:text-[#0B1526] transition-all duration-300"
                  >
                    Contact Us
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;