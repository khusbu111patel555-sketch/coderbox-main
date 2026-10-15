import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/* ---------- RING CARDS DATA ---------- */
const RING_CARDS = [
  {
    id: 0,
    name: "The Mom's Co.",
    sub: "Baby & Mom Care · D2C",
    tag: "D2C · Social & Performance",
    stat: "3X",
    statLabel: "Traffic",
    go: 0,
    img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
    bgClass: "from-[#dbe9fd] to-[#9fc1f5]",
    imgContain: true,
  },
  {
    id: 1,
    name: "Lodha · Navi Mumbai",
    sub: "Real Estate · Lead Generation",
    tag: "Real Estate · Lead Gen",
    stat: "672+",
    statLabel: "Leads",
    go: 3,
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    imgPos: "object-[30%_50%]",
  },
  {
    id: 2,
    name: "Ciora Cafe · Dubai",
    sub: "Café & Dining · Brand & Growth",
    tag: "Café · Brand & Growth",
    stat: "250K+",
    statLabel: "Reach / mo",
    go: 6,
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
  },
  {
    id: 3,
    name: "Shomi Healings",
    sub: "Wellness · Instagram Growth Strategy",
    tag: "Wellness · Instagram",
    stat: "5",
    statLabel: "Pillars",
    go: 9,
    isOrbit: true,
    orbitBg: "radial-gradient(circle at 50% 36%,#7b5fc4 0,#3a2566 38%,#1a1030 80%)",
  },
  {
    id: 4,
    name: "Ultra Fragrance Ltd",
    sub: "Fragrance · Website Strategy",
    tag: "Fragrance · Website",
    stat: "5",
    statLabel: "Parameters",
    go: 11,
    isBottle: true,
    bottleBg: "radial-gradient(circle at 50% 30%,#fff 0,#f4dfe4 35%,#c78196 100%)",
  },
  {
    id: 5,
    name: "SmileCare",
    sub: "Dental care app · UI/UX design",
    tag: "Healthcare · App UI/UX",
    stat: "4",
    statLabel: "Core screens",
    go: 13,
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    smileBg: "radial-gradient(circle at 50% 30%,#fff,#bfe9e6 60%,#6cc8c2)",
  },
  {
    id: 6,
    name: "SR Infra · Earth Work Solutions",
    sub: "Earthwork & infrastructure · Hyderabad",
    tag: "Infrastructure · Earthwork",
    stat: "15",
    statLabel: "Projects",
    go: 15,
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    imgPos: "object-[40%_50%]",
  },
  {
    id: 7,
    name: "Fairbanks Orthodontics",
    sub: "Orthodontics · SEO & Lead Generation",
    tag: "Orthodontics · SEO & Leads",
    stat: "Lehi",
    statLabel: "Utah",
    go: 18,
    isOrbit: true,
    orbitBg: "radial-gradient(circle at 50% 30%,#2a6aa8,#0f2340 75%)",
    orbitColor: "#5fd4b0",
  },
  {
    id: 8,
    name: "Your brand next",
    sub: "Start a project with CoderBox",
    tag: "Your brand next",
    isNext: true,
  },
];

/* ---------- RING CARD ---------- */
const RingCard = forwardRef(({ card, onClick }, ref) => {
  if (card.isNext) {
    return (
      <a
        ref={ref}
        href="#contact"
        onClick={onClick}
        className="absolute rounded-2xl overflow-hidden text-white block bg-gradient-to-br from-[#0d1b3d] via-[#16366f] to-[#0a8af0] p-6 flex flex-col justify-center"
        style={{
          width: "var(--cw, 280px)",
          aspectRatio: "304/337",
          left: "calc(var(--cw, 280px) / -2)",
          top: "calc(var(--cw, 280px) * -0.554)",
          backfaceVisibility: "hidden",
        }}
      >
        <span className="inline-block bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full w-fit shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
          Your brand next
        </span>
        <h3 className="text-[22px] leading-tight mt-10 mb-2.5 font-extrabold">
          Could your brand be the next case study?
        </h3>
        <p className="text-[13px] opacity-80 leading-[1.55] mb-4">
          Websites, social, performance marketing and lead generation, built around measurable results.
        </p>
        <span className="inline-flex items-center gap-2 bg-white text-[#0f1a2c] font-bold text-[13px] rounded-full px-4 py-2.5 w-fit">
          Start a project →
        </span>
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      className="absolute rounded-2xl overflow-hidden text-white block p-0 border-0 cursor-pointer text-left shadow-[0_22px_40px_-18px_rgba(15,26,44,.5)]"
      style={{
        width: "var(--cw, 280px)",
        aspectRatio: "304/337",
        left: "calc(var(--cw, 280px) / -2)",
        top: "calc(var(--cw, 280px) * -0.554)",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.bgClass || ""}`}
        style={
          card.orbitBg
            ? { background: card.orbitBg }
            : card.bottleBg
            ? { background: card.bottleBg }
            : card.smileBg
            ? { background: card.smileBg }
            : undefined
        }
      >
        {card.img && (
          <img
            src={card.img}
            alt={card.name}
            draggable="false"
            className={`w-full h-full object-cover ${card.imgPos || ""}`}
            style={card.imgContain ? { objectFit: "contain", paddingTop: 30, mixBlendMode: "multiply" } : undefined}
          />
        )}

        {/* CSS orbit art (Shomi / Fairbanks) */}
        {card.isOrbit && (
          <>
            <div
              className="absolute left-1/2 top-[40%] w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
              style={{ animation: "cbpSpinY 14s linear infinite" }}
            >
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="absolute inset-0 rounded-full border"
                  style={{
                    borderColor: card.orbitColor ? `${card.orbitColor}88` : "rgba(214,196,255,.55)",
                    transform:
                      i === 1 ? "rotateX(60deg)" : i === 2 ? "rotateX(-60deg)" : i === 3 ? "rotateY(90deg)" : undefined,
                  }}
                />
              ))}
            </div>
            <div
              className="absolute left-1/2 top-[40%] w-[44px] h-[44px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[1px]"
              style={{
                background: card.orbitColor
                  ? "radial-gradient(circle,#fff 0,#bff3e2 35%,rgba(95,212,176,0) 72%)"
                  : "radial-gradient(circle,#fff 0,#e7dcff 35%,rgba(185,163,240,0) 72%)",
              }}
            />
          </>
        )}

        {/* CSS bottle art (Ultra Fragrance) */}
        {card.isBottle && (
          <div
            className="absolute left-1/2 top-[14%] w-[92px] h-[138px] -translate-x-1/2 rounded-[20px] rounded-b-[26px]"
            style={{
              background: "linear-gradient(135deg,rgba(255,255,255,.9),rgba(255,255,255,.25) 45%,rgba(168,68,106,.35))",
              boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.8), 0 30px 40px -20px rgba(58,29,43,.6)",
              animation: "cbpFloat 5s ease-in-out infinite",
            }}
          >
            <span
              className="absolute left-1/2 -top-[30px] w-[34px] h-[30px] -translate-x-1/2 rounded-[6px] rounded-t-[3px]"
              style={{ background: "linear-gradient(180deg,#d9b27a,#9c7440)" }}
            />
            <span
              className="absolute bottom-9 left-0 right-0 text-center text-[34px]"
              style={{ fontFamily: "Fraunces,Georgia,serif", fontStyle: "italic", fontWeight: 600, color: "#3a1d2b" }}
            >
              U
            </span>
          </div>
        )}
      </div>

      {/* Gradient overlay */}
      <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050c1c]/85 pointer-events-none" />

      {/* Tag (top-left) */}
      <span className="absolute top-3 left-3 z-[2] bg-[#0ea5e9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-[0_0_0_2px_rgba(255,255,255,.35)]">
        {card.tag}
      </span>

      {/* Stat (top-right) — HIDDEN on mobile (shows from sm and up) */}
      {card.stat && (
        <span className="hidden sm:block absolute top-3 right-3 z-[2] bg-white/95 text-[#0f1a2c] font-extrabold text-[12px] rounded-[10px] px-2.5 py-1.5 leading-[1.1] text-center">
          {card.stat}
          <i className="block not-italic font-semibold text-[9px] text-[#5b6474] tracking-wider uppercase">
            {card.statLabel}
          </i>
        </span>
      )}

      {/* Name + sub (bottom) */}
      <div className="absolute left-[18px] right-[18px] bottom-4 z-[2]">
        <b className="block text-[19px] font-bold tracking-[-.01em]">{card.name}</b>
        <small className="block text-[12px] opacity-85 mt-1">{card.sub} · View case study →</small>
      </div>
    </button>
  );
});
RingCard.displayName = "RingCard";

/* ---------- MAIN COMPONENT ---------- */
const ClientRingCarousel = ({ onSelectCard }) => {
  const stageRef = useRef(null);
  const ringRef = useRef(null);
  const cardRefs = useRef([]);
  const ringState = useRef({ angle: 0, target: 0, radius: 0, dragging: false, hover: false, last: 0, front: -1 });
  const [ringName, setRingName] = useState(RING_CARDS[0].name);
  const [ringSub, setRingSub] = useState(RING_CARDS[0].sub);

  const RN = RING_CARDS.length;
  const RSTEP = 360 / RN;

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- LAYOUT ---------- */
  const layout = useCallback(() => {
    if (!stageRef.current || !ringRef.current) return;
    const w = window.innerWidth;
    const cw = w < 600 ? Math.min(230, w * 0.6) : w < 900 ? 250 : 280;
    stageRef.current.style.setProperty("--cw", `${cw}px`);
    /* Stage height — enough for cards to fit but not leave huge empty space */
    stageRef.current.style.setProperty(
      "--rh",
      `${Math.round(cw * 1.12 + (w < 600 ? 60 : 90))}px`
    );
    ringState.current.radius = Math.round(
      cw / 2 / Math.tan(Math.PI / RN) + (w < 600 ? 40 : 110)
    );
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      card.dataset.base = i * RSTEP;
    });
  }, [RN, RSTEP]);

  /* ---------- RING FRAME LOOP ---------- */
  useEffect(() => {
    if (reduce) return;
    let raf;
    const frame = () => {
      const s = ringState.current;
      if (!s.dragging && !s.hover && Date.now() - s.last > 3500) s.target -= 0.06;
      s.angle += (s.target - s.angle) * 0.09;
      const tilt = Math.max(-8, Math.min(8, (s.target - s.angle) * 0.4));
      if (ringRef.current) {
        ringRef.current.style.transform = `translateZ(${-s.radius}px) rotateX(${
          -6 + tilt * 0.3
        }deg) rotateY(${s.angle}deg)`;
      }
      let best = 0;
      let bestD = 999;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const a = (((+card.dataset.base + s.angle) % 360) + 540) % 360 - 180;
        const d = Math.abs(a);
        card.style.transform = `rotateY(${card.dataset.base}deg) translateZ(${s.radius}px)`;
        card.style.setProperty("--sx", `${-60 + a * 1.1}%`);
        card.style.zIndex = Math.round(200 - d);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      if (best !== s.front) {
        s.front = best;
        setRingName(RING_CARDS[best].name);
        setRingSub(RING_CARDS[best].sub);
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  useEffect(() => {
    layout();
    window.addEventListener("resize", layout);
    return () => window.removeEventListener("resize", layout);
  }, [layout]);

  /* ---------- DRAG ---------- */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reduce) return;
    let dragging = false, sx = 0, sa = 0, moved = 0;
    const onDown = (e) => {
      dragging = true; moved = 0; sx = e.clientX; sa = ringState.current.target;
      ringState.current.dragging = true;
      stage.classList.add("cursor-grabbing");
    };
    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - sx;
      moved = Math.max(moved, Math.abs(dx));
      ringState.current.target = sa + dx * 0.35;
      ringState.current.last = Date.now();
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      ringState.current.dragging = false;
      stage.classList.remove("cursor-grabbing");
      if (moved > 6) {
        ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP;
      }
      ringState.current.last = Date.now();
    };
    stage.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      stage.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [RSTEP, reduce]);

  const snapToRing = (i) => {
    const want = -i * RSTEP;
    const k = Math.round((ringState.current.target - want) / 360);
    ringState.current.target = want + k * 360;
    ringState.current.last = Date.now();
  };

  const handleRingCardClick = (i) => (e) => {
    if (i !== ringState.current.front) {
      e.preventDefault();
      snapToRing(i);
      return;
    }
    if (onSelectCard) {
      e.preventDefault();
      onSelectCard(i);
    }
  };

  const handlePrev = () => {
    ringState.current.last = Date.now();
    ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP + RSTEP;
  };
  const handleNext = () => {
    ringState.current.last = Date.now();
    ringState.current.target = Math.round(ringState.current.target / RSTEP) * RSTEP - RSTEP;
  };

  return (
    <div className="cbp-ring-root relative w-full">
      <style>{`
        @keyframes cbpSpinY { to { transform: rotateY(360deg); } }
        @keyframes cbpFloat { 50% { transform: translateY(-10px) rotate(2deg); } }
      `}</style>

      {/* ===== RING STAGE ===== */}
      <motion.div
        ref={stageRef}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative select-none cursor-grab [perspective:1500px] [perspective-origin:50%_40%] [touch-action:pan-y]"
        style={{ height: "var(--rh, 400px)" }}
        onMouseEnter={() => (ringState.current.hover = true)}
        onMouseLeave={() => (ringState.current.hover = false)}
      >
        <div
          ref={ringRef}
          className="absolute left-1/2 top-[42%] w-0 h-0 [transform-style:preserve-3d] will-change-transform"
        >
          {RING_CARDS.map((card, i) => (
            <RingCard
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)}
              card={card}
              onClick={handleRingCardClick(i)}
            />
          ))}
        </div>
      </motion.div>

      {/* ===== RING NAV ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex justify-center items-center gap-3.5 mt-2"
      >
        <button
          aria-label="Previous client"
          onClick={handlePrev}
          className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="min-w-[210px] text-center text-[13px] text-[#5b6474]">
          <b className="block text-[#0f1a2c] text-[15px]">{ringName}</b>
          <span dangerouslySetInnerHTML={{ __html: ringSub }} />
        </div>
        <button
          aria-label="Next client"
          onClick={handleNext}
          className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] grid place-items-center transition hover:bg-[#0f1a2c] hover:text-white hover:scale-105"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
};

/* ============================================================
   🎯 FULL SECTION — Header + Ring Carousel + Explore CTA
   ============================================================ */
const ClientPortfoliosSection = () => {
  return (
    <section
      id="client-portfolios"
      className="relative bg-[#f0f1f3] text-[#0f1a2c] overflow-clip pt-[60px] pb-[60px]"
    >
      {/* Background blurs */}
      <div className="absolute -left-36 -top-24 w-[460px] h-[460px] rounded-full bg-[#dde8f2] blur-[80px] opacity-60 pointer-events-none z-0" />
      <div className="absolute -right-44 top-[520px] w-[560px] h-[560px] rounded-full bg-[#e4eef8] blur-[80px] opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-4">
        {/* ===== HEADER (matches ServicesSection typography) ===== */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[760px] mx-auto"
        >
          <motion.span
            className="sec-badge inline-block"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Client Portfolios
          </motion.span>

          {/* Uses sec-h2 → Space Grotesk 700 — same weight as ServicesSection */}
          <motion.h2
            className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Real brands.{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              Real growth.
            </span>
          </motion.h2>

          <motion.p
            className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From D2C, real estate and cafés to wellness, healthcare, orthodontics and infrastructure: the strategy, creative and numbers behind the brands we partner with.
          </motion.p>
        </motion.header>

        {/* ===== RING CAROUSEL (cards sit below header, no overlap) ===== */}
        <div className="mt-4 sm:mt-6">
          <ClientRingCarousel />
        </div>

        {/* ===== EXPLORE OUR PORTFOLIO CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 sm:mt-10"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="sec-btn"
          >
            Explore Our Portfolio
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPortfoliosSection;