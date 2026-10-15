import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

/* ============================================================
   Blog Section — Supabase Connected
   ============================================================ */

const TONES = ['accent', 'blue', 'ink', 'sand'];
const VISUAL_KINDS = ['stat', 'chart', 'network', 'radar'];

const TONE = {
  accent: 'bg-[#0057D9] text-white',
  blue:   'bg-[#E3ECFF] text-[#0057D9]',
  ink:    'bg-[#111114] text-[#F5F4EF]',
  sand:   'bg-[#E9E5DA] text-[#111114]',
};

const MONO = "'JetBrains Mono', ui-monospace, monospace";
const pad  = (n) => (n < 10 ? `0${n}` : `${n}`);

/* ---------- MAP SUPABASE BLOG → DESIGN FORMAT ---------- */
const mapBlog = (blog, index) => {
  const tone = TONES[index % TONES.length];
  const visualKind = VISUAL_KINDS[index % VISUAL_KINDS.length];

  let visual = { kind: visualKind };
  if (visualKind === 'stat') {
    const match = blog.title?.match(/(\d+[K%+]?)/);
    visual = {
      kind: 'stat',
      big: match ? match[0] : `${(index + 1) * 100}+`,
      small: blog.category_name || 'views and growing',
    };
  }

  return {
    id: blog.id,
    number: pad(index + 1),
    tag: blog.category_name || 'Insights',
    tone,
    visual,
    title: blog.title,
    description: blog.excerpt || 'Read the full article on our blog.',
    link: `/blog/${blog.slug}`,
    featured_image: blog.featured_image,
  };
};

/* ============================================================
   CARD VISUAL (SVG art)
   ============================================================ */
const CardVisual = ({ visual }) => {
  if (visual.kind === 'stat') {
    return (
      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1.5">
        <b
          className="sec-h2 block leading-[.88] tracking-[-.045em] m-0"
          style={{ fontSize: 'clamp(60px, 19cqw, 96px)' }}
        >
          {visual.big}
        </b>
        <span className="sec-p text-xs sm:text-sm opacity-85 m-0">
          {visual.small}
        </span>
      </div>
    );
  }

  if (visual.kind === 'chart') {
    return (
      <svg viewBox="0 0 320 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="w-full h-full block">
        <g fill="currentColor">
          <rect x="56"  y="206" width="26" height="54"  rx="4" opacity=".18" />
          <rect x="98"  y="184" width="26" height="76"  rx="4" opacity=".26" />
          <rect x="140" y="194" width="26" height="66"  rx="4" opacity=".34" />
          <rect x="182" y="150" width="26" height="110" rx="4" opacity=".5" />
          <rect x="224" y="118" width="26" height="142" rx="4" opacity=".7" />
          <rect x="266" y="76"  width="26" height="184" rx="4" />
          <circle cx="279" cy="64" r="6" />
        </g>
        <polyline
          points="69,196 111,174 153,184 195,140 237,108 279,64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 5"
        />
      </svg>
    );
  }

  if (visual.kind === 'network') {
    return (
      <svg viewBox="0 0 320 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="w-full h-full block">
        <defs>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="13" cy="13" r="1.5" fill="#F5F4EF" opacity=".28" />
          </pattern>
        </defs>
        <rect width="320" height="300" fill="url(#dots)" />
        <path
          d="M70 190 L160 130 L250 190 L190 250 M160 130 L190 250 M70 190 L190 250 M250 190 L270 96 M160 130 L270 96"
          fill="none"
          stroke="#F5F4EF"
          strokeWidth="1.5"
          opacity=".7"
        />
        <g fill="#F5F4EF">
          <circle cx="70"  cy="190" r="8" />
          <circle cx="250" cy="190" r="8" />
          <circle cx="190" cy="250" r="8" />
          <circle cx="270" cy="96"  r="8" />
        </g>
        <circle cx="160" cy="130" r="16" fill="#0057D9" />
        <circle cx="160" cy="130" r="30" fill="none" stroke="#0057D9" strokeWidth="1.5" opacity=".7" />
      </svg>
    );
  }

  if (visual.kind === 'radar') {
    return (
      <svg viewBox="0 0 320 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="w-full h-full block">
        <g fill="none" stroke="#111114" strokeWidth="1.5">
          <circle cx="220" cy="190" r="40" />
          <circle cx="220" cy="190" r="80"  opacity=".55" />
          <circle cx="220" cy="190" r="120" opacity=".3" />
          <circle cx="220" cy="190" r="160" opacity=".15" />
        </g>
        <circle cx="220" cy="190" r="14" fill="#0057D9" />
        <g fill="#111114">
          <circle cx="163" cy="133" r="7" />
          <circle cx="110" cy="250" r="5" />
          <circle cx="104" cy="112" r="4" />
        </g>
      </svg>
    );
  }

  return null;
};

/* ============================================================
   BLOG CARD
   ============================================================ */
const BlogCard = ({ blog }) => {
  const tone = TONE[blog.tone];

  return (
    <Link
      to={blog.link}
      data-card
      className="post w-[280px] md:w-[320px] flex-shrink-0 flex flex-col gap-5 md:gap-6 snap-start rounded-[22px] focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4 group"
    >
      <div
        className={`relative h-[260px] md:h-[300px] rounded-[22px] overflow-hidden ${tone}`}
        style={{ containerType: 'inline-size' }}
      >
        {blog.featured_image ? (
          <img
            src={blog.featured_image}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105">
            <CardVisual visual={blog.visual} />
          </div>
        )}

        <div
          className="absolute top-5 left-5 right-5 flex justify-between items-center text-xs tracking-[.06em]"
          style={{ fontFamily: MONO }}
        >
          <span>{blog.number}</span>
          <span className="px-2.5 py-[5px] rounded-full border border-current uppercase bg-black/20 backdrop-blur-sm">
            {blog.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-1">
        <h3 className="sec-h3 leading-[1.08] tracking-[-.015em] m-0 group-hover:underline decoration-1 underline-offset-[5px]">
          {blog.title}
        </h3>
        <p className="sec-p leading-[1.6] m-0 text-[#4A4A52] line-clamp-2">
          {blog.description}
        </p>
        <span className="inline-flex items-center gap-2 mt-1 text-sm font-semibold">
          Read article
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
};

/* ============================================================
   MAIN SECTION
   ============================================================ */
const BlogSection = () => {
  const trackRef = useRef(null);
  const [blogs, setBlogs]             = useState([]);
  const [loading, setLoading]         = useState(true);
  const [current, setCurrent]         = useState(1);
  const [canPrev, setCanPrev]         = useState(false);
  const [canNext, setCanNext]         = useState(true);
  const [fillPercent, setFillPercent] = useState(33);

  const total = blogs.length;

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, slug, excerpt, featured_image, category_name, published_at, created_at')
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(6);

      if (error) {
        console.error('Blog fetch error:', error.message);
        setBlogs([]);
      } else {
        setBlogs((data || []).map(mapBlog));
      }
      setLoading(false);
    };
    load();
  }, []);

  const isDownRef    = useRef(false);
  const startXRef    = useRef(0);
  const startLeftRef = useRef(0);
  const movedRef     = useRef(false);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector('[data-card]');
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 24;
    return card.getBoundingClientRect().width + gap;
  }, []);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track || total === 0) return;
    const s = getStep();
    if (!s) return;
    const max     = track.scrollWidth - track.clientWidth;
    const index   = Math.round(track.scrollLeft / s);
    const visible = Math.max(1, Math.floor(track.clientWidth / s));

    setCurrent(Math.min(total, index + 1));
    setFillPercent(Math.min(100, ((index + visible) / total) * 100));
    setCanPrev(track.scrollLeft > 2);
    setCanNext(track.scrollLeft < max - 2);
  }, [getStep, total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || blogs.length === 0) return;
    const onScroll = () => requestAnimationFrame(update);
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [update, blogs.length]);

  const scrollPrev = () => trackRef.current?.scrollBy({ left: -getStep(), behavior: 'smooth' });
  const scrollNext = () => trackRef.current?.scrollBy({ left:  getStep(), behavior: 'smooth' });

  const handleMouseDown = (e) => {
    isDownRef.current    = true;
    movedRef.current     = false;
    startXRef.current    = e.pageX;
    startLeftRef.current = trackRef.current?.scrollLeft || 0;
    if (trackRef.current) {
      trackRef.current.style.scrollSnapType = 'none';
      trackRef.current.style.scrollBehavior = 'auto';
    }
  };

  useEffect(() => {
    const onMove = (e) => {
      if (!isDownRef.current || !trackRef.current) return;
      const dx = e.pageX - startXRef.current;
      if (Math.abs(dx) > 5) movedRef.current = true;
      trackRef.current.scrollLeft = startLeftRef.current - dx;
    };
    const onUp = () => {
      if (!isDownRef.current || !trackRef.current) return;
      isDownRef.current = false;
      trackRef.current.style.scrollSnapType = '';
      trackRef.current.style.scrollBehavior = '';
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  const handleClickCapture = (e) => {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      movedRef.current = false;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollNext(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollPrev(); }
  };

  return (
    // ✅ Background lighter — from #E6F8FF to #F5FBFF
    <section className="relative bg-[#F5FBFF] text-[#111114] overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-9 lg:gap-16 py-[60px] pl-5 lg:pl-24 pr-0 max-w-[1600px] mx-auto">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:w-[360px] lg:flex-shrink-0 gap-7 lg:gap-12 pr-5 lg:pr-0 lg:justify-between"
        >
          <div className="flex flex-col gap-7">
            <motion.span
              className="sec-badge inline-block self-start"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Our Blog
            </motion.span>

            <h2 className="sec-h2 sec-text-dark leading-tight m-0">
              Latest{' '}
              <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                Insights & Case Studies
              </span>
            </h2>

            <p className="sec-p sec-text-dark-soft m-0">
              Stay updated with the latest trends, strategies and success stories from TheCoderBox.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4 text-[13px]" style={{ fontFamily: MONO }} aria-hidden="true">
              <span>{pad(current)}</span>
              {/* ✅ Track bg lighter — from #BFE5F6 to #D6EEFA */}
              <div className="flex-grow h-[2px] bg-[#D6EEFA] rounded-full overflow-hidden">
                <span
                  className="block h-full bg-[#111114] transition-[width] duration-[400ms] ease-out"
                  style={{ width: `${fillPercent}%` }}
                />
              </div>
              <span className="text-[#4A4A52]">{pad(total || 1)}</span>
            </div>

            <div className="flex items-center justify-between mt-7">
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canPrev}
                  aria-label="Previous articles"
                  className={`w-[52px] h-[52px] rounded-full border border-[#9CCDE8] bg-transparent text-[#111114] flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4 disabled:opacity-35 disabled:cursor-default ${
                    canPrev ? 'hover:bg-[#111114] hover:text-white hover:border-[#111114]' : ''
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canNext}
                  aria-label="Next articles"
                  className={`w-[52px] h-[52px] rounded-full border border-[#9CCDE8] bg-transparent text-[#111114] flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4 disabled:opacity-35 disabled:cursor-default ${
                    canNext ? 'hover:bg-[#111114] hover:text-white hover:border-[#111114]' : ''
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[15px] font-semibold pb-1 border-b-[1.5px] border-[#111114] transition-colors hover:text-[#0057D9] hover:border-[#0057D9] focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4"
              >
                View all
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* TRACK */}
        {loading ? (
          <div className="flex-1 flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#0057D9]" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-20 text-center pr-5 lg:pr-24">
            <p className="text-lg text-[#4A4A52]">No published blogs yet.</p>
            <Link to="/admin/login" className="mt-4 text-sm font-semibold text-[#0057D9] hover:underline">
              Admin? Create your first blog →
            </Link>
          </div>
        ) : (
          <div
            ref={trackRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseDown={handleMouseDown}
            onClickCapture={handleClickCapture}
            aria-label="Articles"
            className="flex-1 min-w-0 flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-5 lg:pr-24 cursor-grab active:cursor-grabbing overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-[#0057D9] focus-visible:outline-offset-4"
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;