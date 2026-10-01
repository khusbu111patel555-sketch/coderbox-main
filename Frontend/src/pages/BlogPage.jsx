// // // src/pages/BlogPage.jsx
// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { supabase } from '../lib/supabaseClient';
// // import {
// //   Search, Loader2, Calendar, ArrowRight, FileText, ChevronRight,
// // } from 'lucide-react';

// // const BlogPage = () => {
// //   const [blogs, setBlogs] = useState([]);
// //   const [filtered, setFiltered] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [activeCategory, setActiveCategory] = useState('all');
// //   const [search, setSearch] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [visibleCount, setVisibleCount] = useState(6);

// //   /* ---------- FETCH PUBLISHED BLOGS ---------- */
// //   useEffect(() => {
// //     const load = async () => {
// //       setLoading(true);
// //       const { data, error } = await supabase
// //         .from('blogs')
// //         .select('*')
// //         .eq('status', 'published')
// //         .order('published_at', { ascending: false });

// //       if (error) {
// //         console.error('Fetch error:', error.message);
// //         setBlogs([]);
// //         setFiltered([]);
// //       } else {
// //         const list = data || [];
// //         setBlogs(list);
// //         setFiltered(list);

// //         const cats = [...new Set(list.map((b) => b.category_name).filter(Boolean))];
// //         setCategories(cats);
// //       }
// //       setLoading(false);
// //     };
// //     load();
// //   }, []);

// //   /* ---------- FILTER ---------- */
// //   useEffect(() => {
// //     let result = [...blogs];

// //     if (activeCategory !== 'all') {
// //       result = result.filter((b) => b.category_name === activeCategory);
// //     }

// //     if (search.trim()) {
// //       const q = search.toLowerCase();
// //       result = result.filter(
// //         (b) =>
// //           b.title?.toLowerCase().includes(q) ||
// //           b.excerpt?.toLowerCase().includes(q) ||
// //           b.category_name?.toLowerCase().includes(q)
// //       );
// //     }

// //     setFiltered(result);
// //     setVisibleCount(6);
// //   }, [activeCategory, search, blogs]);

// //   const visibleBlogs = filtered.slice(0, visibleCount);
// //   const hasMore = visibleCount < filtered.length;

// //   return (
// //     <div className="min-h-screen bg-[#F3F4F1]">

// //       {/* ============================================================
// //           HERO
// //          ============================================================ */}
// //       <section className="relative overflow-hidden bg-[#08111F] text-white pt-32 pb-16 sm:pt-40 sm:pb-20 px-5">
// //         <div
// //           className="pointer-events-none absolute inset-0 opacity-[.25]"
// //           style={{
// //             backgroundImage:
// //               'linear-gradient(rgba(143,203,242,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(143,203,242,.12) 1px, transparent 1px)',
// //             backgroundSize: '56px 56px',
// //             maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
// //             WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
// //           }}
// //         />
// //         <span className="pointer-events-none absolute -right-[180px] -top-[180px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(1,173,240,.28),transparent_65%)] blur-3xl" />
// //         <span className="pointer-events-none absolute -left-[160px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,198,251,.2),transparent_65%)] blur-3xl" />

// //         <div className="relative max-w-[1320px] mx-auto text-center">
// //           <motion.h1
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //             className="font-['Sora'] text-5xl md:text-7xl font-extrabold tracking-[-.04em] leading-[1.05]"
// //           >
// //             Our{' '}
// //             <span className="font-['Instrument_Serif'] italic font-normal text-[#8FCBF2]">
// //               Blog
// //             </span>
// //           </motion.h1>

// //           <motion.p
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.15 }}
// //             className="mt-5 max-w-2xl mx-auto text-[15px] sm:text-base md:text-lg text-[#AFC0D4] leading-[1.7]"
// //           >
// //             Follow our latest news and thoughts on design, technology, marketing and digital transformation.
// //           </motion.p>

// //           {/* Breadcrumb */}
// //           <motion.ul
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.3 }}
// //             className="mt-6 flex items-center justify-center gap-2 text-sm text-[#AFC0D4]"
// //           >
// //             <li>
// //               <Link to="/" className="hover:text-white hover:underline">Home</Link>
// //             </li>
// //             <li className="opacity-60">/</li>
// //             <li>Blog</li>
// //           </motion.ul>
// //         </div>
// //       </section>

// //       {/* ============================================================
// //           FILTERS
// //          ============================================================ */}
// //       <section className="max-w-[1320px] mx-auto px-5 pt-12 pb-6">
// //         <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
// //           {/* Category pills */}
// //           <div className="flex gap-2 flex-wrap">
// //             <button
// //               onClick={() => setActiveCategory('all')}
// //               className={`px-4 py-2 rounded-full text-[13px] font-semibold transition ${
// //                 activeCategory === 'all'
// //                   ? 'bg-[#18239d] text-white shadow-lg shadow-[#18239d]/25'
// //                   : 'bg-white text-[#4A4A52] border border-[#D9DDD6] hover:border-[#18239d] hover:text-[#18239d]'
// //               }`}
// //             >
// //               All Posts
// //             </button>
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => setActiveCategory(cat)}
// //                 className={`px-4 py-2 rounded-full text-[13px] font-semibold transition ${
// //                   activeCategory === cat
// //                     ? 'bg-[#18239d] text-white shadow-lg shadow-[#18239d]/25'
// //                     : 'bg-white text-[#4A4A52] border border-[#D9DDD6] hover:border-[#18239d] hover:text-[#18239d]'
// //                 }`}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Search */}
// //           <div className="relative w-full lg:w-[320px]">
// //             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7585]" />
// //             <input
// //               type="text"
// //               placeholder="Search articles..."
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //               className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#D9DDD6] text-[14px] focus:outline-none focus:border-[#18239d] focus:ring-2 focus:ring-[#18239d]/10"
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* ============================================================
// //           GRID
// //          ============================================================ */}
// //       <section className="max-w-[1320px] mx-auto px-5 pb-20">
// //         {loading ? (
// //           <div className="flex items-center justify-center py-32">
// //             <Loader2 className="w-10 h-10 animate-spin text-[#18239d]" />
// //           </div>
// //         ) : visibleBlogs.length === 0 ? (
// //           <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-[#D9DDD6]">
// //             <FileText className="w-14 h-14 mx-auto text-[#B9C0C9] mb-4" />
// //             <h3 className="font-['Sora'] text-xl font-bold text-[#0B1526] mb-2">
// //               No blogs found
// //             </h3>
// //             <p className="text-[#6B7585] text-sm">
// //               {search
// //                 ? 'Try a different search term.'
// //                 : 'No published blogs yet. Check back soon!'}
// //             </p>
// //           </div>
// //         ) : (
// //           <>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
// //               {visibleBlogs.map((blog, i) => (
// //                 <motion.article
// //                   key={blog.id}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true, margin: '-50px' }}
// //                   transition={{ duration: 0.5, delay: 0.05 * Math.min(i, 5) }}
// //                   className="group"
// //                 >
// //                   <Link
// //                     to={`/blog/${blog.slug}`}
// //                     className="block bg-white rounded-[20px] overflow-hidden border border-[#E8EAE4] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,40,80,.12)] hover:-translate-y-1"
// //                   >
// //                     {/* FEATURED IMAGE */}
// //                     <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#18239d] to-[#01ADF0]">
// //                       {blog.featured_image ? (
// //                         <img
// //                           src={blog.featured_image}
// //                           alt={blog.featured_image_alt || blog.title}
// //                           loading="lazy"
// //                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //                         />
// //                       ) : (
// //                         <div className="w-full h-full flex items-center justify-center">
// //                           <FileText className="w-12 h-12 text-white/60" />
// //                         </div>
// //                       )}

// //                       {/* Overlay on hover */}
// //                       <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

// //                       {/* Read button */}
// //                       <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B1526] font-bold text-[13px] rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
// //                         Read Article
// //                         <ArrowRight className="w-3.5 h-3.5" />
// //                       </span>
// //                     </div>

// //                     {/* META + TITLE */}
// //                     <div className="p-6">
// //                       {/* Category badge + date */}
// //                       <div className="flex items-center gap-3 mb-3 flex-wrap">
// //                         {blog.category_name && (
// //                           <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#18239d] text-white text-[10.5px] font-bold uppercase tracking-[.08em]">
// //                             {blog.category_name}
// //                           </span>
// //                         )}
// //                         <span className="inline-flex items-center gap-1.5 text-[12px] text-[#6B7585] font-medium">
// //                           <Calendar className="w-3.5 h-3.5" />
// //                           {new Date(blog.published_at || blog.created_at).toLocaleDateString(
// //                             'en-IN',
// //                             { day: 'numeric', month: 'short', year: 'numeric' }
// //                           )}
// //                         </span>
// //                       </div>

// //                       {/* Title */}
// //                       <h3 className="font-['Sora'] text-[19px] leading-[1.28] font-bold text-[#0B1526] mb-2 group-hover:text-[#18239d] transition-colors line-clamp-2">
// //                         {blog.title}
// //                       </h3>

// //                       {/* Excerpt */}
// //                       {blog.excerpt && (
// //                         <p className="text-[14px] leading-[1.6] text-[#56627A] line-clamp-2">
// //                           {blog.excerpt}
// //                         </p>
// //                       )}

// //                       {/* Read more */}
// //                       <span className="inline-flex items-center gap-1.5 mt-4 text-[13.5px] font-bold text-[#18239d] group-hover:gap-2.5 transition-all">
// //                         Read More
// //                         <ChevronRight className="w-4 h-4" />
// //                       </span>
// //                     </div>
// //                   </Link>
// //                 </motion.article>
// //               ))}
// //             </div>

// //             {/* LOAD MORE */}
// //             {hasMore && (
// //               <div className="flex justify-center mt-14">
// //                 <button
// //                   onClick={() => setVisibleCount((c) => c + 6)}
// //                   className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#18239d] hover:bg-[#0B1526] text-white font-semibold text-[14px] rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#18239d]/25"
// //                 >
// //                   Load More Articles
// //                   <ArrowRight className="w-4 h-4" />
// //                 </button>
// //               </div>
// //             )}

// //             {/* Count */}
// //             {filtered.length > 0 && (
// //               <p className="text-center text-[12.5px] text-[#6B7585] mt-6">
// //                 Showing {visibleBlogs.length} of {filtered.length} article
// //                 {filtered.length !== 1 ? 's' : ''}
// //               </p>
// //             )}
// //           </>
// //         )}
// //       </section>
// //     </div>
// //   );
// // };

// // export default BlogPage;







// // src/pages/BlogPage.jsx
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { supabase } from '../lib/supabaseClient';
// import {
//   Search, Loader2, Calendar, ArrowRight, FileText, ChevronRight,
//   // Blog-related icons for hero particles
//   PenTool, BookOpen, Sparkles, MessageSquare, Star, Lightbulb, Hash,
// } from 'lucide-react';

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [visibleCount, setVisibleCount] = useState(6);

//   /* ---------- FETCH PUBLISHED BLOGS ---------- */
//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from('blogs')
//         .select('*')
//         .eq('status', 'published')
//         .order('published_at', { ascending: false });

//       if (error) {
//         console.error('Fetch error:', error.message);
//         setBlogs([]);
//         setFiltered([]);
//       } else {
//         const list = data || [];
//         setBlogs(list);
//         setFiltered(list);
//         const cats = [...new Set(list.map((b) => b.category_name).filter(Boolean))];
//         setCategories(cats);
//       }
//       setLoading(false);
//     };
//     load();
//   }, []);

//   /* ---------- FILTER ---------- */
//   useEffect(() => {
//     let result = [...blogs];
//     if (activeCategory !== 'all') result = result.filter((b) => b.category_name === activeCategory);
//     if (search.trim()) {
//       const q = search.toLowerCase();
//       result = result.filter(
//         (b) =>
//           b.title?.toLowerCase().includes(q) ||
//           b.excerpt?.toLowerCase().includes(q) ||
//           b.category_name?.toLowerCase().includes(q)
//       );
//     }
//     setFiltered(result);
//     setVisibleCount(6);
//   }, [activeCategory, search, blogs]);

//   const visibleBlogs = filtered.slice(0, visibleCount);
//   const hasMore = visibleCount < filtered.length;

//   return (
//     <div className="min-h-screen bg-[#F3F4F1] overflow-x-hidden">

//       {/* ============================================================
//           HERO — About Us style
//          ============================================================ */}
//       <section
//         className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
//         style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
//       >
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {/* Center glow */}
//           <div
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
//             style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
//           />
//           {/* Vignette */}
//           <div
//             className="absolute inset-0"
//             style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
//           />

//           {/* Floating orbs */}
//           <motion.div
//             className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
//             style={{
//               background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)',
//               boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)',
//               filter: 'blur(2px)',
//             }}
//             animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
//             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <motion.div
//             className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
//             style={{
//               background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)',
//               boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)',
//               filter: 'blur(2px)',
//             }}
//             animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
//             transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//           />
//           <motion.div
//             className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
//             style={{
//               background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)',
//               boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)',
//               filter: 'blur(2px)',
//             }}
//             animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
//             transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
//           />

//           {/* Rotating wireframe diamond */}
//           <motion.svg
//             className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
//             viewBox="0 0 500 500"
//             fill="none"
//             style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
//             animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
//             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//           >
//             <defs>
//               <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
//                 <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
//                 <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
//               </linearGradient>
//             </defs>
//             <motion.polygon
//               points="250,40 460,250 250,460 40,250"
//               stroke="url(#wireGrad)"
//               strokeWidth="1.2"
//               fill="none"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
//               style={{ transformOrigin: '250px 250px' }}
//             />
//             <motion.polygon
//               points="250,80 420,250 250,420 80,250"
//               stroke="url(#wireGrad)"
//               strokeWidth="0.8"
//               fill="none"
//               opacity="0.6"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
//               style={{ transformOrigin: '250px 250px' }}
//             />
//             <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
//             <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
//           </motion.svg>

//           {/* Blog-related floating icons */}
//           {[
//             { Icon: PenTool,       top: '12%', left: '12%', size: 26, delay: 0,   dur: 7 },
//             { Icon: BookOpen,      top: '22%', left: '85%', size: 30, delay: 0.5, dur: 8 },
//             { Icon: Sparkles,      top: '40%', left: '18%', size: 22, delay: 1,   dur: 6 },
//             { Icon: MessageSquare, top: '60%', left: '80%', size: 24, delay: 1.5, dur: 7.5 },
//             { Icon: Star,          top: '75%', left: '15%', size: 20, delay: 2,   dur: 6.5 },
//             { Icon: Lightbulb,     top: '82%', left: '75%', size: 26, delay: 2.5, dur: 8 },
//             { Icon: FileText,      top: '30%', left: '45%', size: 22, delay: 0.8, dur: 7 },
//             { Icon: Hash,          top: '70%', left: '50%', size: 20, delay: 1.8, dur: 6 },
//           ].map(({ Icon, top, left, size, delay, dur }, i) => (
//             <motion.div
//               key={i}
//               className="absolute"
//               style={{ top, left }}
//               initial={{ opacity: 0 }}
//               animate={{
//                 opacity: [0.15, 0.55, 0.15],
//                 y: [0, -18, 0, 14, 0],
//                 rotate: [0, 12, 0, -12, 0],
//               }}
//               transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
//             >
//               <Icon
//                 size={size}
//                 strokeWidth={1.5}
//                 style={{
//                   color: '#52dcff',
//                   filter: 'drop-shadow(0 0 8px rgba(82, 220, 255, 0.6))',
//                   opacity: 0.85,
//                 }}
//               />
//             </motion.div>
//           ))}

//           {/* Small twinkling particles */}
//           {[...Array(8)].map((_, i) => {
//             const size = Math.random() * 3 + 2;
//             return (
//               <motion.div
//                 key={`dot-${i}`}
//                 className="absolute rounded-full"
//                 style={{
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   width: `${size}px`,
//                   height: `${size}px`,
//                   background: 'rgba(180, 230, 255, 0.9)',
//                   boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
//                 }}
//                 animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
//                 transition={{
//                   duration: 2 + Math.random() * 3,
//                   repeat: Infinity,
//                   delay: Math.random() * 3,
//                   ease: 'easeInOut',
//                 }}
//               />
//             );
//           })}
//         </div>

//         <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="text-center"
//           >
//             <motion.span
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.05 }}
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//             >
//               Our Blog
//             </motion.span>

//             <motion.h2
//               className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
//               style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.35, delay: 0.1 }}
//             >
//               Stories, Insights &{' '}
//               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//                 Ideas
//               </span>
//             </motion.h2>

//             <motion.p
//               className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
//               style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.35, delay: 0.15 }}
//             >
//               Follow our latest news and thoughts on design, technology, marketing and digital transformation.
//             </motion.p>

//             {/* Breadcrumb */}
//             <motion.ul
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70"
//             >
//               <li>
//                 <Link to="/" className="hover:text-white hover:underline transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li className="opacity-60">/</li>
//               <li className="text-white/90">Blog</li>
//             </motion.ul>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           FILTERS
//          ============================================================ */}
//       <section className="max-w-[1320px] mx-auto px-5 pt-12 pb-6">
//         <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
//           <div className="flex gap-2 flex-wrap">
//             <button
//               onClick={() => setActiveCategory('all')}
//               className={`px-4 py-2 rounded-full text-[13px] font-semibold transition ${
//                 activeCategory === 'all'
//                   ? 'bg-[#18239d] text-white shadow-lg shadow-[#18239d]/25'
//                   : 'bg-white text-[#4A4A52] border border-[#D9DDD6] hover:border-[#18239d] hover:text-[#18239d]'
//               }`}
//             >
//               All Posts
//             </button>
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-4 py-2 rounded-full text-[13px] font-semibold transition ${
//                   activeCategory === cat
//                     ? 'bg-[#18239d] text-white shadow-lg shadow-[#18239d]/25'
//                     : 'bg-white text-[#4A4A52] border border-[#D9DDD6] hover:border-[#18239d] hover:text-[#18239d]'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="relative w-full lg:w-[320px]">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7585]" />
//             <input
//               type="text"
//               placeholder="Search articles..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#D9DDD6] text-[14px] focus:outline-none focus:border-[#18239d] focus:ring-2 focus:ring-[#18239d]/10"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ============================================================
//           GRID
//          ============================================================ */}
//       <section className="max-w-[1320px] mx-auto px-5 pb-20">
//         {loading ? (
//           <div className="flex items-center justify-center py-32">
//             <Loader2 className="w-10 h-10 animate-spin text-[#18239d]" />
//           </div>
//         ) : visibleBlogs.length === 0 ? (
//           <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-[#D9DDD6]">
//             <FileText className="w-14 h-14 mx-auto text-[#B9C0C9] mb-4" />
//             <h3 className="font-['Sora'] text-xl font-bold text-[#0B1526] mb-2">
//               No blogs found
//             </h3>
//             <p className="text-[#6B7585] text-sm">
//               {search ? 'Try a different search term.' : 'No published blogs yet. Check back soon!'}
//             </p>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//               {visibleBlogs.map((blog, i) => (
//                 <motion.article
//                   key={blog.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: '-50px' }}
//                   transition={{ duration: 0.5, delay: 0.05 * Math.min(i, 5) }}
//                   className="group"
//                 >
//                   <Link
//                     to={`/blog/${blog.slug}`}
//                     className="block bg-white rounded-[20px] overflow-hidden border border-[#E8EAE4] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,40,80,.12)] hover:-translate-y-1"
//                   >
//                     <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#18239d] to-[#01ADF0]">
//                       {blog.featured_image ? (
//                         <img
//                           src={blog.featured_image}
//                           alt={blog.featured_image_alt || blog.title}
//                           loading="lazy"
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center">
//                           <FileText className="w-12 h-12 text-white/60" />
//                         </div>
//                       )}
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                       <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B1526] font-bold text-[13px] rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
//                         Read Article
//                         <ArrowRight className="w-3.5 h-3.5" />
//                       </span>
//                     </div>

//                     <div className="p-6">
//                       <div className="flex items-center gap-3 mb-3 flex-wrap">
//                         {blog.category_name && (
//                           <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#18239d] text-white text-[10.5px] font-bold uppercase tracking-[.08em]">
//                             {blog.category_name}
//                           </span>
//                         )}
//                         <span className="inline-flex items-center gap-1.5 text-[12px] text-[#6B7585] font-medium">
//                           <Calendar className="w-3.5 h-3.5" />
//                           {new Date(blog.published_at || blog.created_at).toLocaleDateString(
//                             'en-IN',
//                             { day: 'numeric', month: 'short', year: 'numeric' }
//                           )}
//                         </span>
//                       </div>

//                       <h3 className="font-['Sora'] text-[19px] leading-[1.28] font-bold text-[#0B1526] mb-2 group-hover:text-[#18239d] transition-colors line-clamp-2">
//                         {blog.title}
//                       </h3>

//                       {blog.excerpt && (
//                         <p className="text-[14px] leading-[1.6] text-[#56627A] line-clamp-2">
//                           {blog.excerpt}
//                         </p>
//                       )}

//                       <span className="inline-flex items-center gap-1.5 mt-4 text-[13.5px] font-bold text-[#18239d] group-hover:gap-2.5 transition-all">
//                         Read More
//                         <ChevronRight className="w-4 h-4" />
//                       </span>
//                     </div>
//                   </Link>
//                 </motion.article>
//               ))}
//             </div>

//             {hasMore && (
//               <div className="flex justify-center mt-14">
//                 <button
//                   onClick={() => setVisibleCount((c) => c + 6)}
//                   className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#18239d] hover:bg-[#0B1526] text-white font-semibold text-[14px] rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#18239d]/25"
//                 >
//                   Load More Articles
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             )}

//             {filtered.length > 0 && (
//               <p className="text-center text-[12.5px] text-[#6B7585] mt-6">
//                 Showing {visibleBlogs.length} of {filtered.length} article
//                 {filtered.length !== 1 ? 's' : ''}
//               </p>
//             )}
//           </>
//         )}
//       </section>
//     </div>
//   );
// };

// export default BlogPage;








// src/pages/BlogPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';
import {
  Search, Loader2, Calendar, ArrowRight, FileText, ChevronRight,
  PenTool, BookOpen, Sparkles, MessageSquare, Star, Lightbulb, Hash,
} from 'lucide-react';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Fetch error:', error.message);
        setBlogs([]);
        setFiltered([]);
      } else {
        const list = data || [];
        setBlogs(list);
        setFiltered(list);
        const cats = [...new Set(list.map((b) => b.category_name).filter(Boolean))];
        setCategories(cats);
      }
      setLoading(false);
    };
    load();
  }, []);

  useEffect(() => {
    let result = [...blogs];
    if (activeCategory !== 'all') result = result.filter((b) => b.category_name === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.category_name?.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
    setVisibleCount(6);
  }, [activeCategory, search, blogs]);

  const visibleBlogs = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-[#F3F4F1] overflow-x-hidden">

      {/* HERO — About Us style */}
      <section
        className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
        style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }} />
          <div className="absolute inset-0"
               style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }} />

          <motion.div
            className="absolute top-[10%] left-[5%] w-[160px] h-[160px] rounded-full"
            style={{ background: 'radial-gradient(circle at 30% 30%, rgba(1, 173, 240, 0.65) 0%, rgba(0, 111, 166, 0.25) 55%, transparent 75%)', boxShadow: '0 0 60px rgba(1, 173, 240, 0.25)', filter: 'blur(2px)' }}
            animate={{ y: [0, -30, 0, 20, 0], x: [0, 20, 0, -15, 0], scale: [1, 1.05, 1, 0.98, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[10%] left-[10%] w-[180px] h-[180px] rounded-full"
            style={{ background: 'radial-gradient(circle at 40% 40%, rgba(3, 180, 246, 0.55) 0%, rgba(0, 143, 209, 0.2) 60%, transparent 80%)', boxShadow: '0 0 70px rgba(3, 180, 246, 0.2)', filter: 'blur(2px)' }}
            animate={{ y: [0, 35, 0, -25, 0], x: [0, -25, 0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[55%] right-[5%] w-[170px] h-[170px] rounded-full"
            style={{ background: 'radial-gradient(circle at 60% 40%, rgba(77, 211, 255, 0.5) 0%, rgba(1, 173, 240, 0.18) 60%, transparent 80%)', boxShadow: '0 0 70px rgba(77, 211, 255, 0.2)', filter: 'blur(2px)' }}
            animate={{ y: [0, -25, 0, 30, 0], x: [0, 25, 0, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.svg
            className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
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
            <line x1="250" y1="40" x2="250" y2="460" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
            <line x1="40" y1="250" x2="460" y2="250" stroke="url(#wireGrad)" strokeWidth="0.6" opacity="0.5" />
          </motion.svg>

          {[
            { Icon: PenTool,       top: '12%', left: '12%', size: 26, delay: 0,   dur: 7 },
            { Icon: BookOpen,      top: '22%', left: '85%', size: 30, delay: 0.5, dur: 8 },
            { Icon: Sparkles,      top: '40%', left: '18%', size: 22, delay: 1,   dur: 6 },
            { Icon: MessageSquare, top: '60%', left: '80%', size: 24, delay: 1.5, dur: 7.5 },
            { Icon: Star,          top: '75%', left: '15%', size: 20, delay: 2,   dur: 6.5 },
            { Icon: Lightbulb,     top: '82%', left: '75%', size: 26, delay: 2.5, dur: 8 },
            { Icon: FileText,      top: '30%', left: '45%', size: 22, delay: 0.8, dur: 7 },
            { Icon: Hash,          top: '70%', left: '50%', size: 20, delay: 1.8, dur: 6 },
          ].map(({ Icon, top, left, size, delay, dur }, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ top, left }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -18, 0, 14, 0], rotate: [0, 12, 0, -12, 0] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
            >
              <Icon size={size} strokeWidth={1.5} style={{ color: '#52dcff', filter: 'drop-shadow(0 0 8px rgba(82, 220, 255, 0.6))', opacity: 0.85 }} />
            </motion.div>
          ))}

          {[...Array(8)].map((_, i) => {
            const size = Math.random() * 3 + 2;
            return (
              <motion.div
                key={`dot-${i}`}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: 'rgba(180, 230, 255, 0.9)',
                  boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
                }}
                animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
                transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3, ease: 'easeInOut' }}
              />
            );
          })}
        </div>

        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="sec-badge inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Our Blog
            </motion.span>

            <motion.h2
              className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              Stories, Insights &{' '}
              <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                Ideas
              </span>
            </motion.h2>

            <motion.p
              className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              Follow our latest news and thoughts on design, technology, marketing and digital transformation.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70"
            >
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors">Home</Link>
              </li>
              <li className="opacity-60">/</li>
              <li className="text-white/90">Blog</li>
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-[1320px] mx-auto px-5 pt-12 pb-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="flex gap-2 flex-wrap">
            {/* ✅ Active filter — Deep Blue #006FA6 */}
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition ${
                activeCategory === 'all'
                  ? 'bg-[#006FA6] text-white shadow-lg shadow-[#006FA6]/25'
                  : 'bg-white text-[#4A4A52] border border-[#D9DDD6] hover:border-[#006FA6] hover:text-[#006FA6]'
              }`}
            >
              All Posts
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-[#006FA6] text-white shadow-lg shadow-[#006FA6]/25'
                    : 'bg-white text-[#4A4A52] border border-[#D9DDD6] hover:border-[#006FA6] hover:text-[#006FA6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7585]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#D9DDD6] text-[14px] focus:outline-none focus:border-[#006FA6] focus:ring-2 focus:ring-[#006FA6]/10"
            />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-[1320px] mx-auto px-5 pb-20">
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-10 h-10 animate-spin text-[#006FA6]" />
          </div>
        ) : visibleBlogs.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-[#D9DDD6]">
            <FileText className="w-14 h-14 mx-auto text-[#B9C0C9] mb-4" />
            <h3 className="font-['Sora'] text-xl font-bold text-[#0B1526] mb-2">No blogs found</h3>
            <p className="text-[#6B7585] text-sm">
              {search ? 'Try a different search term.' : 'No published blogs yet. Check back soon!'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {visibleBlogs.map((blog, i) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.05 * Math.min(i, 5) }}
                  className="group"
                >
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="block bg-white rounded-[20px] overflow-hidden border border-[#E8EAE4] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(15,40,80,.12)] hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#00C6FB] to-[#01ADF0]">
                      {blog.featured_image ? (
                        <img
                          src={blog.featured_image}
                          alt={blog.featured_image_alt || blog.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FileText className="w-12 h-12 text-white/60" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* ✅ Read Article button — Recommended Gradient #00C6FB → #01ADF0 */}
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] text-white font-bold text-[13px] rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl shadow-[#01ADF0]/40">
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        {/* ✅ Category badge — Deep Blue #006FA6 */}
                        {blog.category_name && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#006FA6] text-white text-[10.5px] font-bold uppercase tracking-[.08em]">
                            {blog.category_name}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-[#6B7585] font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(blog.published_at || blog.created_at).toLocaleDateString(
                            'en-IN',
                            { day: 'numeric', month: 'short', year: 'numeric' }
                          )}
                        </span>
                      </div>

                      <h3 className="font-['Sora'] text-[19px] leading-[1.28] font-bold text-[#0B1526] mb-2 group-hover:text-[#006FA6] transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      {blog.excerpt && (
                        <p className="text-[14px] leading-[1.6] text-[#56627A] line-clamp-2">{blog.excerpt}</p>
                      )}

                      {/* ✅ Read More link — Deep Blue #006FA6 */}
                      <span className="inline-flex items-center gap-1.5 mt-4 text-[13.5px] font-bold text-[#006FA6] group-hover:gap-2.5 transition-all">
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* ✅ Load More — Deep Blue #006FA6 */}
            {hasMore && (
              <div className="flex justify-center mt-14">
                <button
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#006FA6] hover:bg-[#003F7D] text-white font-semibold text-[14px] rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#006FA6]/25"
                >
                  Load More Articles
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {filtered.length > 0 && (
              <p className="text-center text-[12.5px] text-[#6B7585] mt-6">
                Showing {visibleBlogs.length} of {filtered.length} article
                {filtered.length !== 1 ? 's' : ''}
              </p>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default BlogPage;