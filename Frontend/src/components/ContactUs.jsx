// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";
// import { supabase } from "../lib/supabaseClient";

// /* ============================================
//    DATA & HELPERS
//    ============================================ */
// const OFFICES = [
//   { code: "BLR", num: "01", city: "Bengaluru",   country: "India", lat: 12.9166, lon: 77.6101, tz: "Asia/Kolkata", tzs: "IST", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
//   { code: "NMB", num: "02", city: "Navi Mumbai", country: "India", lat: 19.0330, lon: 73.0297, tz: "Asia/Kolkata", tzs: "IST", address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703" },
//   { code: "NOI", num: "03", city: "Noida",       country: "India", lat: 28.5355, lon: 77.3910, tz: "Asia/Kolkata", tzs: "IST", address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309" },
//   { code: "HYD", num: "04", city: "Hyderabad",   country: "India", lat: 17.3850, lon: 78.4867, tz: "Asia/Kolkata", tzs: "IST", address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081" },
//   { code: "DXB", num: "05", city: "Dubai",       country: "UAE",   lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai",   tzs: "GST", address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates" },
// ];
// const HOURS = { open: 9 * 60, close: 18 * 60 };
// const SERVICES = ["Web design", "Development", "Branding", "SEO & growth", "Something else"];
// const ZOOM = 2.2;

// const proj = (o) => ({ x: (o.lon - 30) * 12, y: (38 - o.lat) * 12 });
// const hav = (p, q) => {
//   const R = 6371, r = Math.PI / 180;
//   const dLat = (q.lat - p.lat) * r, dLon = (q.lon - p.lon) * r;
//   const h = Math.sin(dLat / 2) ** 2 + Math.cos(p.lat * r) * Math.cos(q.lat * r) * Math.sin(dLon / 2) ** 2;
//   return 2 * R * Math.asin(Math.sqrt(h));
// };

// const LAND_PATH = "M-240 -144 L-240 756 L72 756 L126 576 L111.6 540 L120 492 L144 468 L180 438 L210 408 L234 378 L252 331.2 L254.4 314.4 L204 322.8 L174 331.2 L159.6 314.4 L150 304.8 L138 294 L114 270 L102 240 L86.4 204 L66 168 L48 126 L31.2 97.2 L27.6 81.6 L0 79.2 L-60 74.4 L-120 81.6 L-132 92.4 L-180 72 L-240 54 L-240 12 L-120 12 L-96 18 L-48 0 L-42 -24 L-24 -36 L72 -36 L78 14.4 L72 21.6 L70.8 33.6 L66 50.4 L58.8 66 L51.6 80.4 L45.6 99.6 L51.6 122.4 L60 102 L72 126 L96 168 L109.2 196.8 L138 234 L152.4 270 L160.8 303.6 L180 302.4 L228 284.4 L266.4 268.8 L300 252 L320.4 240 L333.6 228 L345.6 211.2 L357.6 186 L343.2 172.8 L324 169.2 L316.8 158.4 L315.6 140.4 L306 150 L288 166.8 L270 165.6 L259.2 165.6 L255.6 142.8 L249.6 151.2 L242.4 141.6 L235.2 132 L222 120 L216 97.2 L234 96 L246 105.6 L258 121.2 L282 134.4 L300 136.8 L314.4 130.8 L327.6 146.4 L348 151.2 L378 153.6 L408 152.4 L438 151.2 L447.6 158.4 L458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L726 189.6 L741.6 187.2 L747.6 204 L756 222 L771.6 240 L770.4 264 L783.6 266.4 L811.2 258 L812.4 276 L822 300 L824.4 336 L819.6 360 L828 366 L960 366 L960 -144 Z";
// const LAND_PATH_2 = "M598.8 338.4 L609.6 344.4 L622.8 366 L619.2 380.4 L607.2 385.2 L600 376.8 L596.4 357.6 Z";
// const LAND_PATH_3 = "M458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L705.6 186 L703.2 164.4 L696 152.4 L717.6 144 L744 153.6 L747.6 168 L738 177.6 L751.2 177.6 L759.6 168 L774 150 L783.6 135.6 L804 122.4 L792 108 L768 110.4 L744 122.4 L716.4 117.6 L706.8 128.4 L698.4 121.2 L696 138 L672 127.2 L648 126 L618 111.6 L603.6 96 L588 84 L585.6 66 L594 48 L573.6 30 L552 26.4 L534 36 L525.6 44.4 L534 62.4 L540 69.6 L535.2 84 L526.8 96 L504 120 L489.6 122.4 L475.2 138 L486 150 L474 164.4 Z";
// const LAND_PATH_4 = "M259.2 165.6 L270 165.6 L288 166.8 L306 150 L315.6 140.4 L316.8 158.4 L309.6 165.6 L302.4 183.6 L264 180 Z";

// /* ============================================
//    MAIN COMPONENT
//    ============================================ */
// const ContactUs = () => {
//   const [active, setActive] = useState(0);
//   const [overview, setOverview] = useState(false);
//   const [scale, setScale] = useState(1);
//   const [flapText, setFlapText] = useState("5 OFFICES");
//   const [hudVerb, setHudVerb] = useState("NETWORK");
//   const [hudCoords, setHudCoords] = useState("—");
//   const [clockText, setClockText] = useState("--:--:--");
//   const [isOpen, setIsOpen] = useState(true);
//   const [overviewRows, setOverviewRows] = useState([]);
//   const [copied, setCopied] = useState(false);

//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chips, setChips] = useState([]);
//   const [emailValid, setEmailValid] = useState(false);

//   const camRef = useRef(null);
//   const mapRef = useRef(null);
//   const mapWrapRef = useRef(null);
//   const tabIndRef = useRef(null);
//   const tabButtonsRef = useRef([]);
//   const pinsRef = useRef(null);
//   const routesRef = useRef(null);
//   const prevSecRef = useRef(-1);
//   const secTurnsRef = useRef(0);

//   const currentOffice = OFFICES[active];
//   const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   /* Sync chips → formData.service */
//   useEffect(() => {
//     setFormData((prev) => ({ ...prev, service: chips.join(", ") }));
//     if (chips.length > 0 && errors.service) {
//       setErrors((prev) => ({ ...prev, service: "" }));
//     }
//   }, [chips]);

//   /* TITLE SPLIT */
//   useEffect(() => {
//     let d = 0.12;
//     document.querySelectorAll("[data-split]").forEach((w) => {
//       const textNode = w.firstChild;
//       if (!textNode || textNode.nodeType !== 3) return;
//       const text = textNode.textContent;
//       const rest = [...w.childNodes].slice(1);
//       w.textContent = "";
//       [...text].forEach((c) => {
//         const s = document.createElement("span");
//         s.className = "ch";
//         s.textContent = c;
//         s.style.animationDelay = d.toFixed(2) + "s";
//         d += 0.045;
//         s.setAttribute("aria-hidden", "true");
//         w.appendChild(s);
//       });
//       rest.forEach((n) => w.appendChild(n));
//       d += 0.08;
//     });
//   }, []);

//   /* CLOCK */
//   const tInfo = useCallback((o) => {
//     const d = new Date();
//     const p = new Intl.DateTimeFormat("en-US", {
//       timeZone: o.tz, weekday: "short", hour: "2-digit",
//       minute: "2-digit", second: "2-digit", hour12: false,
//     }).formatToParts(d);
//     const g = (t) => (p.find((x) => x.type === t) || {}).value;
//     const h = parseInt(g("hour"), 10) % 24;
//     const m = parseInt(g("minute"), 10);
//     const s = parseInt(g("second"), 10);
//     const mins = h * 60 + m;
//     const open = !["Sat", "Sun"].includes(g("weekday")) && mins >= HOURS.open && mins < HOURS.close;
//     const pad = (n) => String(n).padStart(2, "0");
//     return { h, m, s, open, text: `${pad(h)}:${pad(m)}:${pad(s)}`, hm: `${pad(h)}:${pad(m)}` };
//   }, []);

//   useEffect(() => {
//     const tick = () => {
//       const o = OFFICES[active];
//       const t = tInfo(o);
//       setClockText(t.text);
//       setIsOpen(t.open);
//       if (prevSecRef.current !== -1 && t.s < prevSecRef.current) secTurnsRef.current++;
//       prevSecRef.current = t.s;
//       const hS = document.getElementById("hS");
//       const hM = document.getElementById("hM");
//       const hH = document.getElementById("hH");
//       if (hS) hS.style.transform = `rotate(${secTurnsRef.current * 360 + t.s * 6}deg)`;
//       if (hM) hM.style.transform = `rotate(${t.m * 6 + t.s * 0.1}deg)`;
//       if (hH) hH.style.transform = `rotate(${(t.h % 12) * 30 + t.m * 0.5}deg)`;

//       if (overview) {
//         setOverviewRows(OFFICES.map((o, i) => {
//           const ti = tInfo(o);
//           return { i, o, open: ti.open, hm: ti.hm };
//         }));
//       }
//     };
//     tick();
//     const interval = setInterval(tick, 1000);
//     return () => clearInterval(interval);
//   }, [active, overview, tInfo]);

//   /* CAMERA */
//   const camera = useCallback(() => {
//     if (!camRef.current || !mapRef.current || !pinsRef.current) return;
//     const narrow = window.innerWidth <= 720;
//     const a = proj(OFFICES[active]);
//     let S, tx, ty;
//     if (overview) {
//       S = narrow ? 1.15 : 1.3;
//       const cx = 442, cy = 207;
//       const tgt = narrow ? [400, 316] : [420, 290];
//       tx = tgt[0] - S * cx;
//       ty = tgt[1] - S * cy;
//     } else {
//       S = ZOOM;
//       const tgt = narrow ? [400, 300] : [500, 250];
//       tx = tgt[0] - S * a.x;
//       ty = tgt[1] - S * a.y;
//     }
//     setScale(S);
//     camRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${S})`;
//     pinsRef.current.querySelectorAll(".pin .inner").forEach((el) => (el.style.transform = `scale(${1 / S})`));
//     const scaleBar = document.getElementById("scaleBar");
//     if (scaleBar && mapRef.current) {
//       const r = Math.max(mapRef.current.clientWidth / 800, mapRef.current.clientHeight / 632);
//       scaleBar.style.width = (21.6 * S * r).toFixed(1) + "px";
//     }
//   }, [active, overview]);

//   /* ROUTES */
//   const buildRoutes = useCallback(() => {
//     if (!routesRef.current) return;
//     const NS = "http://www.w3.org/2000/svg";
//     const svgEl = (tag, attrs = {}) => {
//       const e = document.createElementNS(NS, tag);
//       for (const k in attrs) e.setAttribute(k, attrs[k]);
//       return e;
//     };
//     routesRef.current.innerHTML = "";
//     const S = scale || 1;
//     const a = OFFICES[active];
//     const ap = proj(a);
//     let n = 0;
//     OFFICES.forEach((o, i) => {
//       if (i === active) return;
//       const b = proj(o);
//       const mx = (ap.x + b.x) / 2, my = (ap.y + b.y) / 2;
//       const dx = b.x - ap.x, dy = b.y - ap.y, k = 0.22;
//       let cx = mx - dy * k, cy = my + dx * k;
//       if (cy > my) { cx = mx + dy * k; cy = my - dx * k; }
//       const dStr = `M${ap.x.toFixed(1)} ${ap.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
//       const id = "rt" + i;
//       const delay = 0.9 + n * 0.14;
//       const base = svgEl("path", { id, d: dStr, fill: "none", stroke: "#4FA3FF", "stroke-opacity": "0.35", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3) });
//       const flow = svgEl("path", { d: dStr, fill: "none", stroke: "#8CC4FF", "stroke-opacity": "0.9", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3), "stroke-dasharray": `${(3 / S).toFixed(2)} ${(5 / S).toFixed(2)}`, opacity: "0" });
//       routesRef.current.append(base, flow);
//       const len = base.getTotalLength();
//       base.style.strokeDasharray = len;
//       base.style.strokeDashoffset = len;
//       base.getBoundingClientRect();
//       base.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.6,0,.2,1) ${delay}s`;
//       requestAnimationFrame(() => { base.style.strokeDashoffset = 0; });
//       setTimeout(() => {
//         flow.style.opacity = "1";
//         flow.style.animation = "flow 1.2s linear infinite";
//       }, (delay + 1) * 1000);

//       if (!reduce) {
//         const km0 = hav(a, o);
//         const trav = svgEl("circle", { r: (2.8 / S).toFixed(2), fill: "#D6EBFF", opacity: "0" });
//         const mot = svgEl("animateMotion", { dur: (2.2 + km0 / 1400).toFixed(2) + "s", repeatCount: "indefinite", rotate: "auto" });
//         const mp = svgEl("mpath");
//         mp.setAttribute("href", "#" + id);
//         mp.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + id);
//         mot.appendChild(mp);
//         trav.appendChild(mot);
//         routesRef.current.appendChild(trav);
//         setTimeout(() => trav.setAttribute("opacity", "1"), (delay + 1) * 1000);
//       }

//       const lx = 0.25 * ap.x + 0.5 * cx + 0.25 * b.x;
//       const ly = 0.25 * ap.y + 0.5 * cy + 0.25 * b.y;
//       const km = Math.round(hav(a, o) / 10) * 10;
//       const lg = svgEl("g", { transform: `translate(${lx.toFixed(1)} ${ly.toFixed(1)}) scale(${(1 / S).toFixed(4)})`, opacity: "0" });
//       lg.style.transition = "opacity .5s";
//       lg.innerHTML = `<rect x="-34" y="-10" width="68" height="20" rx="10" fill="#0B1B30" stroke="#2A5283"/><text y="3.5" fill="#A9C6EA" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">~${km.toLocaleString("en-IN")} km</text>`;
//       routesRef.current.appendChild(lg);
//       setTimeout(() => (lg.style.opacity = "1"), (delay + 0.9) * 1000);
//       n++;
//     });
//   }, [active, scale, reduce]);

//   /* PINS */
//   const renderPins = useCallback(() => {
//     if (!pinsRef.current) return;
//     const NS = "http://www.w3.org/2000/svg";
//     pinsRef.current.innerHTML = "";
//     OFFICES.forEach((o, i) => {
//       const p = proj(o);
//       const lw = Math.round(o.city.length * 7.1 + 26);
//       const lx = o.code === "NMB" ? -(lw + 14) : 14;
//       const isAct = i === active && !overview;
//       const g = document.createElementNS(NS, "g");
//       g.setAttribute("class", "pin" + (isAct ? " active" : ""));
//       g.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
//       g.setAttribute("tabindex", "0");
//       g.setAttribute("role", "button");
//       g.setAttribute("aria-label", `${o.city} office`);
//       g.style.cursor = "pointer";
//       g.innerHTML = `<g class="inner" style="transition:transform 1.4s cubic-bezier(0.65,0,0.2,1)">
//         <g class="fx" style="opacity:${isAct ? 1 : 0};transition:opacity .6s">
//           <circle r="46" fill="url(#glow)"/>
//           <path d="M0 0 L64 0 A64 64 0 0 0 45.3 -45.3 Z" fill="url(#sweepGrad)" style="transform-origin:0 0;animation:spin 3.6s linear infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) .8s infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) 1.6s infinite"/>
//           <rect x="-1.5" y="-78" width="3" height="78" rx="1.5" fill="url(#beamGrad)" style="transform-box:fill-box;transform-origin:bottom;transform:scaleY(${isAct ? 1 : 0});transition:transform .9s cubic-bezier(.22,.8,.18,1) .5s"/>
//         </g>
//         <circle class="burst" r="10" fill="none" stroke="#fff" stroke-width="2" opacity="0" style="transform-box:fill-box;transform-origin:center"/>
//         <circle class="dot" r="${isAct ? 9 : 6}" fill="${isAct ? '#2F8CFF' : '#8DB8EA'}" stroke="#fff" stroke-width="2.5" style="transition:r .4s,fill .4s"/>
//         <circle r="2.6" fill="#fff"/>
//         <g class="chip" transform="translate(${lx} -12)">
//           <rect width="${lw}" height="24" rx="12" fill="${isAct ? '#0062D6' : 'rgba(7,21,42,0.9)'}" stroke="${isAct ? '#5AA8FF' : '#2A4F7C'}" style="transition:fill .4s,stroke .4s"/>
//           <text x="13" y="16" fill="${isAct ? '#fff' : '#C4D6EE'}" font-family="DM Sans, sans-serif" font-size="12" font-weight="700" style="transition:fill .4s">${o.city}</text>
//         </g>
//       </g>`;
//       g.addEventListener("click", () => { setActive(i); setOverview(false); });
//       g.addEventListener("keydown", (e) => {
//         if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); setOverview(false); }
//       });
//       pinsRef.current.appendChild(g);
//     });
//   }, [active, overview]);

//   useEffect(() => { renderPins(); }, [active, overview, renderPins]);

//   useEffect(() => {
//     camera();
//     buildRoutes();
//     if (tabButtonsRef.current[active] && tabIndRef.current) {
//       const t = tabButtonsRef.current[active];
//       tabIndRef.current.style.width = t.offsetWidth + "px";
//       tabIndRef.current.style.transform = `translateX(${t.offsetLeft}px)`;
//       tabIndRef.current.style.opacity = overview ? "0" : "1";
//     }
//     if (overview) {
//       setHudVerb("NETWORK");
//       setFlapText("5 OFFICES");
//       setHudCoords(`ZOOM ${scale.toFixed(1)}× · IN + AE · IST / GST`);
//     } else {
//       setHudVerb("CONNECTING");
//       setFlapText(OFFICES[active].city.toUpperCase());
//       setHudCoords(`${OFFICES[active].lat.toFixed(4)}° N · ${OFFICES[active].lon.toFixed(4)}° E · ZOOM ${scale.toFixed(1)}×`);
//     }
//   }, [active, overview, camera, buildRoutes, scale]);

//   useEffect(() => {
//     const onResize = () => { camera(); buildRoutes(); };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [camera, buildRoutes]);

//   useEffect(() => {
//     const wrap = mapWrapRef.current, map = mapRef.current;
//     if (!wrap || !map || reduce || !window.matchMedia("(hover: hover)").matches) return;
//     const onMove = (e) => {
//       const r = map.getBoundingClientRect();
//       const x = (e.clientX - r.left) / r.width - 0.5;
//       const y = (e.clientY - r.top) / r.height - 0.5;
//       map.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
//     };
//     const onLeave = () => (map.style.transform = "");
//     wrap.addEventListener("mousemove", onMove);
//     wrap.addEventListener("mouseleave", onLeave);
//     return () => { wrap.removeEventListener("mousemove", onMove); wrap.removeEventListener("mouseleave", onLeave); };
//   }, [reduce]);

//   useEffect(() => {
//     const t = setTimeout(() => { setActive(0); setOverview(false); }, reduce ? 0 : 2300);
//     return () => clearTimeout(t);
//   }, [reduce]);

//   /* FORM */
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;
//     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
//     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
//     if (chips.length === 0 && !formData.service) { newErrors.service = "Please select a service."; isValid = false; }
//     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsLoading(true);
//     if (overview) setOverview(false);

//     const serviceValue = chips.length > 0 ? chips.join(", ") : formData.service;

//     try {
//       const { error } = await supabase.from("contacts").insert([{
//         name: formData.name.trim(),
//         email: formData.email.trim(),
//         phone: formData.phone,
//         service: serviceValue,
//         message: formData.message.trim(),
//       }]);
//       if (error) throw error;

//       const pin = pinsRef.current?.querySelectorAll(".pin")[active];
//       if (pin) {
//         pin.classList.remove("landed");
//         void pin.getBoundingClientRect();
//         pin.classList.add("landed");
//       }
//       setTimeout(() => {
//         setIsSuccess(true);
//         setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//         setErrors({ name: "", email: "", phone: "", service: "", message: "" });
//         setChips([]);
//       }, 700);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({ ...prev, message: "Failed to send message. Please try again later." }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleFormMove = (e) => {
//     const card = e.currentTarget;
//     const r = card.getBoundingClientRect();
//     card.style.setProperty("--mx", e.clientX - r.left + "px");
//     card.style.setProperty("--my", e.clientY - r.top + "px");
//   };

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(currentOffice.address);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch (err) { /* noop */ }
//   };

//   return (
//     /* 👇 MORE TOP SPACE HERE — was pt-10, now pt-16 sm:pt-20 */
//     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white pt-16 sm:pt-20">

//       {/* INLINE KEYFRAMES */}
//       <style>{`
//         @keyframes chIn { to { opacity: 1; transform: none; } }
//         @keyframes wipe { to { clip-path: inset(0 0 0 0 round 24px); } }
//         @keyframes scan { from { top: -120px; } to { top: 110%; } }
//         @keyframes pulseRing { 0% { transform: scale(.4); opacity: .75; } 100% { transform: scale(3.4); opacity: 0; } }
//         @keyframes burst { 0% { transform: scale(.5); opacity: 1; } 100% { transform: scale(5); opacity: 0; } }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @keyframes flow { to { stroke-dashoffset: -20; } }
//         @keyframes blink { 50% { opacity: .25; } }
//         @keyframes flip { 0% { transform: scaleY(1); } 50% { transform: scaleY(.1); } 100% { transform: scaleY(1); } }
//         @keyframes passIn { from { opacity: 0; transform: translateY(18px) rotate(-1.5deg) scale(.97); } to { opacity: 1; transform: none; } }
//         @keyframes shake { 10%,90% { transform: translateX(-2px); } 20%,80% { transform: translateX(4px); } 30%,50%,70% { transform: translateX(-7px); } 40%,60% { transform: translateX(7px); } }
//         @keyframes pop { 0% { transform: scale(.5); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: none; opacity: 1; } }
//         @keyframes draw { to { stroke-dashoffset: 0; } }
//         @keyframes rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
//         .ch { display: inline-block; opacity: 0; transform: translateY(60%) rotate(8deg); animation: chIn 0.9s cubic-bezier(0.22,0.8,0.18,1) forwards; }
//         .pin.landed .burst { animation: burst 1s ease-out; }
//         .fl input:focus + label, .fl input:not(:placeholder-shown) + label,
//         .fl textarea:focus + label, .fl textarea:not(:placeholder-shown) + label {
//           transform: translateY(-9px) scale(0.78);
//           color: #0062D6;
//           font-weight: 600;
//         }
//         .fl input::placeholder, .fl textarea::placeholder { color: transparent; }
//         .fl input:focus::placeholder, .fl textarea:focus::placeholder { color: #9AA5B8; }
//         .land-label { fill: #6F8FB8; font-family: 'JetBrains Mono', monospace; font-size: 7px; letter-spacing: 2px; text-anchor: middle; }
//         .land-label.sea { fill: #4C6C95; font-style: italic; }
//       `}</style>

//       {/* HERO — 👇 MORE TOP SPACE HERE — was pt-32 pb-32, now pt-40 sm:pt-44 pb-32 */}
//       <section className="relative pt-40 sm:pt-44 pb-32">
//         <div className="relative mx-auto max-w-4xl px-6 text-center">
//           <h1 className="sec-hero-heading text-[#003F7D]">
//             Let's Build Something
//             <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h1>
//           <p className="sec-p sec-text-dark-soft mx-auto max-w-3xl">
//             We're here to answer your questions, discuss your ideas,
//             <br className="hidden md:block" />
//             and start your next big project.
//           </p>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
//         <div className="absolute inset-0 [background-image:radial-gradient(#D8E0EC_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] pointer-events-none" />

//         <div className="relative max-w-[1248px] mx-auto z-10">
//           {/* HEADER */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-8 sm:mb-10 md:mb-12"
//           >
//             <motion.span
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -3, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Let&apos;s Talk!
//             </motion.span>

//             <motion.h2
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//             >
//               Contact <span style={{ color: '#008df1' }}>Us</span>
//             </motion.h2>

//             <motion.p
//               className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Benefit of the society where we operate. A success website obviously needs great.
//             </motion.p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-8 items-start">

//             {/* LEFT (MAP) */}
//             <div className="flex flex-col gap-4 min-w-0">

//               <div className="relative grid grid-cols-5 gap-1.5 p-1.5 bg-white border border-[#E3E8F1] rounded-[18px] shadow-sm" role="tablist">
//                 <span ref={tabIndRef} className="absolute top-1.5 bottom-1.5 left-0 rounded-[13px] bg-[#0062D6] shadow-[0_10px_22px_-8px_rgba(0,98,214,0.6)] transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.22,0.8,0.18,1)] opacity-0" aria-hidden="true" />
//                 {OFFICES.map((o, i) => {
//                   const isActive = i === active && !overview;
//                   return (
//                     <button
//                       key={o.code}
//                       ref={(el) => (tabButtonsRef.current[i] = el)}
//                       type="button"
//                       role="tab"
//                       aria-selected={isActive}
//                       tabIndex={i === active ? 0 : -1}
//                       onClick={() => { setActive(i); setOverview(false); }}
//                       onKeyDown={(e) => {
//                         if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
//                           e.preventDefault();
//                           const n = (i + (e.key === "ArrowRight" ? 1 : -1) + OFFICES.length) % OFFICES.length;
//                           setActive(n); setOverview(false);
//                           tabButtonsRef.current[n]?.focus();
//                         }
//                       }}
//                       className={`relative z-10 flex items-center gap-2.5 min-h-[58px] px-3 rounded-[13px] text-left transition-colors duration-500 ${isActive ? "text-white" : "text-[#0B1220]"}`}
//                     >
//                       <span className={`flex-none w-8 h-8 rounded-[10px] grid place-items-center text-xs font-semibold transition-all duration-500 ${isActive ? "bg-white/20 text-white" : "bg-[#EEF2F8] text-[#3C4A63]"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                         {o.num}
//                       </span>
//                       <span className="flex flex-col min-w-0">
//                         <span className="text-[14.5px] font-bold whitespace-nowrap">{o.city}</span>
//                         <span className={`text-[11.5px] font-medium transition-colors duration-500 ${isActive ? "text-white/80" : "text-[#56627A]"}`}>{o.country}</span>
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>

//               <div ref={mapWrapRef} className="relative" style={{ perspective: "1400px" }}>
//                 <div
//                   ref={mapRef}
//                   className="relative h-[640px] rounded-[24px] overflow-hidden bg-[#07152A] shadow-[0_34px_70px_-28px_rgba(7,21,42,0.65)]"
//                   style={{
//                     clipPath: "inset(0 0 100% 0 round 24px)",
//                     animation: "wipe 1.2s cubic-bezier(0.7,0,0.2,1) 0.6s forwards",
//                     transformStyle: "preserve-3d",
//                     transition: "transform 0.5s cubic-bezier(0.22,0.8,0.18,1)",
//                   }}
//                 >
//                   <svg viewBox="0 0 800 632" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full block">
//                     <defs>
//                       <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.05" fill="#28507E" /></pattern>
//                       <pattern id="dotsHi" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.25" fill="#4C8BD6" /></pattern>
//                       <radialGradient id="glow"><stop offset="0" stopColor="#2F8CFF" stopOpacity="0.55" /><stop offset="1" stopColor="#2F8CFF" stopOpacity="0" /></radialGradient>
//                       <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5AB0FF" stopOpacity="0" /><stop offset="1" stopColor="#5AB0FF" stopOpacity="0.38" /></linearGradient>
//                       <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#7CC0FF" stopOpacity="0.9" /><stop offset="1" stopColor="#7CC0FF" stopOpacity="0" /></linearGradient>
//                       <path id="landPath" d={LAND_PATH} />
//                     </defs>
//                     <rect x="-2000" y="-2000" width="5000" height="5000" fill="#07152A" />
//                     <g ref={camRef} style={{ transformOrigin: "0 0", transition: "transform 1.4s cubic-bezier(0.65,0,0.2,1)" }}>
//                       <g fill="none" stroke="#7FA8DC" strokeOpacity="0.08" vectorEffect="non-scaling-stroke">
//                         {[-120,-60,0,60,120,180,240,300,360,420,480,540,600,660,720,780,840,900].map((x) => (<path key={"v" + x} d={`M${x} -200V900`} />))}
//                         {[696,636,576,516,456,396,336,276,216,156,96,36,-24,-84].map((y) => (<path key={"h" + y} d={`M-200 ${y}H1400`} />))}
//                       </g>
//                       <use href="#landPath" fill="#0D213A" />
//                       <use href="#landPath" fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_2} fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_3} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_4} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
//                       <g>
//                         <text className="land-label" x="582" y="186">INDIA</text>
//                         <text className="land-label sea" x="402" y="276">ARABIAN SEA</text>
//                         <text className="land-label sea" x="696" y="270">BAY OF BENGAL</text>
//                         <text className="land-label sea" x="504" y="440">INDIAN OCEAN</text>
//                         <text className="land-label" x="330" y="212">OMAN</text>
//                         <text className="land-label" x="180" y="190">SAUDI ARABIA</text>
//                         <text className="land-label" x="452" y="110">PAKISTAN</text>
//                         <text className="land-label" x="330" y="84">IRAN</text>
//                         <text className="land-label" x="420" y="48">AFGHANISTAN</text>
//                         <text className="land-label" x="648" y="104">NEPAL</text>
//                         <text className="land-label" x="204" y="262">YEMEN</text>
//                         <text className="land-label" x="612" y="398">SRI LANKA</text>
//                       </g>
//                       <g ref={routesRef} />
//                       <g ref={pinsRef} />
//                     </g>
//                   </svg>

//                   <div className="absolute left-0 right-0 h-[120px] -top-[120px] pointer-events-none bg-gradient-to-b from-transparent via-[rgba(90,176,255,0.10)] to-transparent" style={{ animation: "scan 1.6s ease-in-out 1.3s 1 forwards" }} aria-hidden="true" />
//                   <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 70% at 60% 42%,rgba(7,21,42,0) 55%,rgba(3,10,22,0.62) 100%)" }} aria-hidden="true" />

//                   <div className="absolute top-5 left-5 flex flex-col px-3.5 py-2.5 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[11.5px] leading-[1.7] text-[#C4D6EE]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                     <span className="flex items-center gap-2 tracking-[0.06em]">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#3FD68F] animate-pulse" />
//                       <span>{hudVerb}</span>{" "}
//                       <span className="inline-flex gap-px">
//                         {[...(flapText || "")].map((ch, i) => (
//                           <span key={i} className={`inline-block min-w-[0.72em] text-center px-px rounded-sm font-semibold ${ch === " " ? "bg-transparent" : "bg-white/[0.07] text-[#E8F1FC]"}`}>{ch}</span>
//                         ))}
//                       </span>
//                     </span>
//                     <span className="text-[#7F9CC2]">{hudCoords}</span>
//                   </div>

//                   <button
//                     type="button"
//                     className="absolute top-5 right-5 h-11 px-4 flex items-center gap-2 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[#E3EDFA] text-[13px] font-semibold hover:bg-[rgba(20,44,74,0.92)] hover:border-[rgba(120,170,230,0.45)] transition-colors"
//                     aria-pressed={overview}
//                     onClick={() => setOverview((v) => !v)}
//                   >
//                     <svg className={`transition-transform duration-500 ${overview ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M12 3l9 5-9 5-9-5 9-5z" />
//                       <path d="M3 13l9 5 9-5" />
//                     </svg>
//                     <span>{overview ? "Focus office" : "All offices"}</span>
//                   </button>

//                   <div className="absolute right-5 bottom-5 flex flex-col items-end gap-1.5 text-[10.5px] text-[#8FA9CC] pointer-events-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                     <span>200 km</span>
//                     <b id="scaleBar" className="block h-1.5 border-[1.5px] border-[#8FA9CC] border-t-0 transition-[width] duration-[1.4s] [transition-timing-function:cubic-bezier(0.65,0,0.2,1)]" />
//                     <span className="text-[#6A86AD]">Illustrative map</span>
//                   </div>

//                   {!overview && (
//                     <article key={active} className="absolute left-5 bottom-5 w-[392px] grid grid-cols-[minmax(0,1fr)_104px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] text-[#0B1220]" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
//                       <div className="p-[20px_18px_18px_20px] flex flex-col gap-3 min-w-0">
//                         <div className="flex items-center justify-between gap-2">
//                           <span className="whitespace-nowrap text-[11.5px] font-semibold text-[#0062D6] tracking-[0.06em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                             {currentOffice.num}/05 · {currentOffice.country.toUpperCase()}
//                           </span>
//                           <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${isOpen ? "bg-[#ECFDF3] text-[#067647]" : "bg-[#FFF4E5] text-[#93370D]"}`}>
//                             <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-[#12B76A]" : "bg-[#F79009]"}`} />
//                             <span>{isOpen ? "Open now" : "Closed"}</span>
//                           </span>
//                         </div>
//                         <h2 className="m-0 text-3xl leading-none font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{currentOffice.city}</h2>
//                         <p className="m-0 text-[13.5px] leading-[1.5] text-[#56627A]">{currentOffice.address}</p>
//                         <div className="flex gap-2 mt-0.5">
//                           <a className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl bg-[#0062D6] text-white text-[13.5px] font-semibold no-underline hover:bg-[#004FAD] hover:-translate-y-px transition-all [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5" href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(currentOffice.address)} target="_blank" rel="noopener noreferrer">
//                             <svg className="transition-transform duration-300" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
//                             Get directions
//                           </a>
//                           <button type="button" onClick={handleCopy} className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors">
//                             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg>
//                             <span>{copied ? "Copied" : "Copy"}</span>
//                           </button>
//                         </div>
//                       </div>
//                       <div className="relative border-l-2 border-dashed border-[#D5DDEA] py-[18px] px-2.5 flex flex-col items-center justify-between gap-2.5 bg-[#F7F9FD] rounded-r-[20px]">
//                         <div className="absolute -left-[11px] -top-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
//                         <div className="absolute -left-[11px] -bottom-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
//                         <div className="text-3xl font-extrabold leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
//                           {currentOffice.code}
//                           <small className="block mt-1 text-[9.5px] font-medium tracking-[0.12em] text-[#56627A] text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OFFICE</small>
//                         </div>
//                         <svg className="w-[62px] h-[62px]" viewBox="0 0 62 62">
//                           <circle cx="31" cy="31" r="29" fill="#fff" stroke="#DCE3EE" strokeWidth="2" />
//                           <g stroke="#B7C3D6" strokeWidth="2" strokeLinecap="round"><path d="M31 6v4M31 52v4M6 31h4M52 31h4" /></g>
//                           <line id="hH" x1="31" y1="31" x2="31" y2="17" stroke="#0B1220" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
//                           <line id="hM" x1="31" y1="31" x2="31" y2="11" stroke="#0B1220" strokeWidth="2.2" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
//                           <line id="hS" x1="31" y1="35" x2="31" y2="9" stroke="#0A7CFF" strokeWidth="1.4" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.25s cubic-bezier(0.4,2.4,0.5,1)" }} />
//                           <circle cx="31" cy="31" r="2.6" fill="#0A7CFF" />
//                         </svg>
//                         <div className="text-[12.5px] font-semibold text-center leading-[1.3] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                           <span>{clockText}</span>
//                           <small className="block text-[9.5px] font-medium text-[#56627A] tracking-[0.08em]">{currentOffice.tzs} · {currentOffice.tz === "Asia/Dubai" ? "GMT+4" : "GMT+5:30"}</small>
//                         </div>
//                       </div>
//                     </article>
//                   )}

//                   {overview && (
//                     <article className="absolute left-5 bottom-5 w-[392px] p-[18px_12px_12px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] flex flex-col gap-1" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
//                       <header className="flex justify-between items-baseline px-2 pb-1.5">
//                         <h2 className="m-0 text-[22px] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>5 offices, 2 countries</h2>
//                         <span className="text-[11.5px] text-[#56627A]">Local time</span>
//                       </header>
//                       <div>
//                         {overviewRows.map((row) => (
//                           <button key={row.i} type="button" className="w-full flex items-center gap-3 h-11 px-2 border-0 rounded-[10px] bg-transparent text-left hover:bg-[#F1F5FC] transition-colors" onClick={() => { setActive(row.i); setOverview(false); }}>
//                             <span className="text-[11.5px] font-semibold text-[#0062D6]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.o.num}</span>
//                             <span className="flex-1 text-sm font-semibold">{row.o.city} <span className="font-medium text-[#56627A]">· {row.o.country}</span></span>
//                             <i className="w-[7px] h-[7px] rounded-full" style={{ background: row.open ? "#12B76A" : "#F79009" }} />
//                             <span className="text-[13px] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.hm} {row.o.tzs}</span>
//                           </button>
//                         ))}
//                       </div>
//                     </article>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT (FORM) */}
//             <aside
//               className="relative rounded-[24px] bg-white border border-[#E6EBF3] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_28px_56px_-18px_rgba(16,24,40,0.16)] p-8 min-h-[712px] flex flex-col overflow-hidden"
//               onMouseMove={handleFormMove}
//               style={{
//                 animation: "rise 0.9s cubic-bezier(0.22,0.8,0.18,1) 0.7s both",
//                 backgroundImage: "radial-gradient(420px circle at var(--mx,50%) var(--my,-20%), rgba(10,124,255,0.07), transparent 60%)",
//               }}
//             >
//               <div className="relative">
//                 <div className="mb-[22px]">
//                   <h2 id="form-title" className="m-0 mb-1 text-[28px] leading-[1.15] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Send us a message</h2>
//                   <p className="m-0 text-sm text-[#56627A]">We'll get back to you as soon as possible.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} noValidate className={`flex-col gap-4 ${isSuccess ? "hidden" : "flex"}`}>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <div className={`fl relative ${errors.name ? "invalid" : ""}`}>
//                       <input id="fName" type="text" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} name="name"
//                         className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.name ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
//                       <label htmlFor="fName" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Name</label>
//                     </div>
//                     <div className={`fl relative ${emailValid ? "valid" : ""} ${errors.email ? "invalid" : ""}`}>
//                       <input id="fEmail" type="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={(e) => { handleChange(e); setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.target.value.trim())); }} name="email"
//                         className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.email ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
//                       <label htmlFor="fEmail" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Email</label>
//                       <svg className={`absolute right-3 top-[19px] transition-all ${emailValid ? "opacity-100 scale-100" : "opacity-0 scale-[0.3] -rotate-30"}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
//                     </div>
//                   </div>

//                   <div className="flex items-stretch h-[54px] border-[1.5px] border-[#E1E7F0] rounded-xl bg-[#F6F8FC] hover:border-[#C5D0E0] focus-within:border-[#0A7CFF] focus-within:bg-white focus-within:ring-4 focus-within:ring-[rgba(10,124,255,0.14)] transition-all">
//                     <select aria-label="Country code" defaultValue="+91" className="border-0 bg-transparent pl-3.5 pr-1 text-[13.5px] font-semibold cursor-pointer outline-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                       <option value="+91">IN +91</option>
//                       <option value="+971">AE +971</option>
//                     </select>
//                     <span className="w-px mx-1 my-3.5 bg-[#DCE3EE]" />
//                     <div className="fl relative flex-1">
//                       <input id="fPhone" type="tel" autoComplete="tel-national" placeholder="98765 43210" value={formData.phone} onChange={handleChange} name="phone" maxLength={10} className="w-full h-full border-0 bg-transparent outline-none text-[14.5px] px-3 pt-[22px] pb-1.5" />
//                       <label htmlFor="fPhone" className="absolute left-3 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Phone (optional)</label>
//                     </div>
//                   </div>

//                   <fieldset className="m-0 p-0 border-0">
//                     <legend className="block mb-2.5 text-[13px] font-semibold text-[#2A3650]">What can we help with?</legend>
//                     <div className="flex flex-wrap gap-2">
//                       {SERVICES.map((s) => {
//                         const isOn = chips.includes(s);
//                         return (
//                           <button
//                             key={s}
//                             type="button"
//                             aria-pressed={isOn}
//                             onClick={() =>
//                               setChips((prev) =>
//                                 prev.includes(s) ? prev.filter((c) => c !== s) : [...prev, s]
//                               )
//                             }
//                             className={`h-9 px-3.5 inline-flex items-center rounded-full border-[1.5px] text-[13px] font-semibold transition-all active:scale-95 ${
//                               isOn
//                                 ? "bg-[#0062D6] border-[#0062D6] text-white gap-1.5"
//                                 : "bg-white border-[#DCE3EE] text-[#2A3650] hover:border-[#0A7CFF]"
//                             }`}
//                           >
//                             <svg className={`transition-all duration-200 ${isOn ? "w-3.5" : "w-0"}`} height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
//                             <span>{s}</span>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </fieldset>

//                   <div className="fl relative">
//                     <textarea id="fMsg" maxLength={500} placeholder="A few lines about your project, timeline or budget…" value={formData.message} onChange={handleChange} name="message"
//                       className="w-full h-28 pt-[26px] pb-1.5 px-3.5 rounded-xl border-[1.5px] border-[#E1E7F0] bg-[#F6F8FC] text-[14.5px] outline-none resize-none leading-[1.5] block hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)] transition-all" />
//                     <label htmlFor="fMsg" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Message</label>
//                     <span className="absolute right-3 bottom-2.5 text-[11px] text-[#6B778C]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{formData.message.length}/500</span>
//                   </div>

//                   <div className="mt-auto flex flex-col gap-3 pt-1">
//                     {errors.message && (<p className="m-0 text-[13px] font-medium text-[#B42318]" role="alert">{errors.message}</p>)}
//                     <p className="m-0 flex items-center gap-2 text-[13px] text-[#56627A]">
//                       <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
//                       <span>Flying to our <strong className="text-[#0B1220]">{currentOffice.city}</strong> team</span>
//                     </p>
//                     <button type="submit" disabled={isLoading}
//                       className={`relative h-14 flex items-center justify-center gap-2.5 border-0 rounded-[14px] bg-[#0062D6] text-white text-[15.5px] font-bold shadow-[0_12px_26px_-10px_rgba(0,98,214,0.6)] overflow-hidden group/send hover:bg-[#0058C2] hover:shadow-[0_18px_34px_-12px_rgba(0,98,214,0.7)] transition-all ${isLoading ? "opacity-70 cursor-wait" : ""}`}>
//                       <span className="relative z-10">{isLoading ? "Taking off…" : "Send message"}</span>
//                       <svg className="relative z-10 transition-transform group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5 group-hover/send:-rotate-8" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
//                       <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent -translate-x-full group-hover/send:translate-x-full transition-transform duration-700 pointer-events-none" />
//                     </button>
//                     <div className="flex justify-center gap-4.5 text-xs font-medium text-[#56627A]">
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /></svg>
//                         Secure
//                       </span>
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
//                         Encrypted
//                       </span>
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18" /><path d="M10.6 5.1A10 10 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.4 3.5M6.5 6.6C4.4 8 2.9 10 2 12c1 2.5 5 7 10 7 1.7 0 3.3-.5 4.6-1.3" /></svg>
//                         Private
//                       </span>
//                     </div>
//                   </div>
//                 </form>

//                 {isSuccess && (
//                   <div className="flex-1 flex flex-col items-center justify-center text-center gap-4.5" aria-live="polite">
//                     <div className="w-[92px] h-[92px] rounded-full bg-[#E6F0FF] grid place-items-center" style={{ animation: "pop 0.6s cubic-bezier(0.3,1.4,0.5,1) both" }}>
//                       <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M5 12.5l4.5 4.5L19 7.5" strokeDasharray="24" strokeDashoffset="24" style={{ animation: "draw 0.5s ease 0.35s forwards" }} />
//                       </svg>
//                     </div>
//                     <h2 className="m-0 text-3xl font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.3s both" }}>
//                       Landed in {currentOffice.city}
//                     </h2>
//                     <p className="m-0 max-w-[300px] text-[14.5px] leading-[1.55] text-[#56627A]" style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.42s both" }}>
//                       Thanks, {formData.name?.split(" ")[0] || "there"}. Our {currentOffice.city} team will reply as soon as possible.
//                     </p>
//                     <button type="button" className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors" onClick={() => setIsSuccess(false)} style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.54s both" }}>
//                       Send another message
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactUs;





// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { motion } from "framer-motion";
// import { supabase } from "../lib/supabaseClient";

// /* ============================================
//    DATA & HELPERS
//    ============================================ */
// const OFFICES = [
//   { code: "BLR", num: "01", city: "Bengaluru",   country: "India", lat: 12.9166, lon: 77.6101, tz: "Asia/Kolkata", tzs: "IST", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
//   { code: "NMB", num: "02", city: "Navi Mumbai", country: "India", lat: 19.0330, lon: 73.0297, tz: "Asia/Kolkata", tzs: "IST", address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703" },
//   { code: "NOI", num: "03", city: "Noida",       country: "India", lat: 28.5355, lon: 77.3910, tz: "Asia/Kolkata", tzs: "IST", address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309" },
//   { code: "HYD", num: "04", city: "Hyderabad",   country: "India", lat: 17.3850, lon: 78.4867, tz: "Asia/Kolkata", tzs: "IST", address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081" },
//   { code: "DXB", num: "05", city: "Dubai",       country: "UAE",   lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai",   tzs: "GST", address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates" },
// ];
// const HOURS = { open: 9 * 60, close: 18 * 60 };
// const SERVICES = ["Web design", "Development", "Branding", "SEO & growth", "Something else"];
// const ZOOM = 2.2;

// /* Contact-themed particles for hero */
// const HERO_GLYPHS = ['@', '✉', '☎', '✆', '⌘', '✧', '✦', '☏', '✉', '@', '☎'];
// const HERO_TAGS = ['EMAIL', 'CALL', 'VISIT', 'CHAT', 'SUPPORT', '24/7', 'REPLY', 'HELLO'];

// const proj = (o) => ({ x: (o.lon - 30) * 12, y: (38 - o.lat) * 12 });
// const hav = (p, q) => {
//   const R = 6371, r = Math.PI / 180;
//   const dLat = (q.lat - p.lat) * r, dLon = (q.lon - p.lon) * r;
//   const h = Math.sin(dLat / 2) ** 2 + Math.cos(p.lat * r) * Math.cos(q.lat * r) * Math.sin(dLon / 2) ** 2;
//   return 2 * R * Math.asin(Math.sqrt(h));
// };

// const LAND_PATH = "M-240 -144 L-240 756 L72 756 L126 576 L111.6 540 L120 492 L144 468 L180 438 L210 408 L234 378 L252 331.2 L254.4 314.4 L204 322.8 L174 331.2 L159.6 314.4 L150 304.8 L138 294 L114 270 L102 240 L86.4 204 L66 168 L48 126 L31.2 97.2 L27.6 81.6 L0 79.2 L-60 74.4 L-120 81.6 L-132 92.4 L-180 72 L-240 54 L-240 12 L-120 12 L-96 18 L-48 0 L-42 -24 L-24 -36 L72 -36 L78 14.4 L72 21.6 L70.8 33.6 L66 50.4 L58.8 66 L51.6 80.4 L45.6 99.6 L51.6 122.4 L60 102 L72 126 L96 168 L109.2 196.8 L138 234 L152.4 270 L160.8 303.6 L180 302.4 L228 284.4 L266.4 268.8 L300 252 L320.4 240 L333.6 228 L345.6 211.2 L357.6 186 L343.2 172.8 L324 169.2 L316.8 158.4 L315.6 140.4 L306 150 L288 166.8 L270 165.6 L259.2 165.6 L255.6 142.8 L249.6 151.2 L242.4 141.6 L235.2 132 L222 120 L216 97.2 L234 96 L246 105.6 L258 121.2 L282 134.4 L300 136.8 L314.4 130.8 L327.6 146.4 L348 151.2 L378 153.6 L408 152.4 L438 151.2 L447.6 158.4 L458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L726 189.6 L741.6 187.2 L747.6 204 L756 222 L771.6 240 L770.4 264 L783.6 266.4 L811.2 258 L812.4 276 L822 300 L824.4 336 L819.6 360 L828 366 L960 366 L960 -144 Z";
// const LAND_PATH_2 = "M598.8 338.4 L609.6 344.4 L622.8 366 L619.2 380.4 L607.2 385.2 L600 376.8 L596.4 357.6 Z";
// const LAND_PATH_3 = "M458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L705.6 186 L703.2 164.4 L696 152.4 L717.6 144 L744 153.6 L747.6 168 L738 177.6 L751.2 177.6 L759.6 168 L774 150 L783.6 135.6 L804 122.4 L792 108 L768 110.4 L744 122.4 L716.4 117.6 L706.8 128.4 L698.4 121.2 L696 138 L672 127.2 L648 126 L618 111.6 L603.6 96 L588 84 L585.6 66 L594 48 L573.6 30 L552 26.4 L534 36 L525.6 44.4 L534 62.4 L540 69.6 L535.2 84 L526.8 96 L504 120 L489.6 122.4 L475.2 138 L486 150 L474 164.4 Z";
// const LAND_PATH_4 = "M259.2 165.6 L270 165.6 L288 166.8 L306 150 L315.6 140.4 L316.8 158.4 L309.6 165.6 L302.4 183.6 L264 180 Z";

// /* ============================================
//    MAIN COMPONENT
//    ============================================ */
// const ContactUs = () => {
//   const [active, setActive] = useState(0);
//   const [overview, setOverview] = useState(false);
//   const [scale, setScale] = useState(1);
//   const [flapText, setFlapText] = useState("5 OFFICES");
//   const [hudVerb, setHudVerb] = useState("NETWORK");
//   const [hudCoords, setHudCoords] = useState("—");
//   const [clockText, setClockText] = useState("--:--:--");
//   const [isOpen, setIsOpen] = useState(true);
//   const [overviewRows, setOverviewRows] = useState([]);
//   const [copied, setCopied] = useState(false);

//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [chips, setChips] = useState([]);
//   const [emailValid, setEmailValid] = useState(false);

//   const camRef = useRef(null);
//   const mapRef = useRef(null);
//   const mapWrapRef = useRef(null);
//   const tabIndRef = useRef(null);
//   const tabButtonsRef = useRef([]);
//   const pinsRef = useRef(null);
//   const routesRef = useRef(null);
//   const prevSecRef = useRef(-1);
//   const secTurnsRef = useRef(0);

//   const currentOffice = OFFICES[active];
//   const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   useEffect(() => {
//     setFormData((prev) => ({ ...prev, service: chips.join(", ") }));
//     if (chips.length > 0 && errors.service) {
//       setErrors((prev) => ({ ...prev, service: "" }));
//     }
//   }, [chips]);

//   useEffect(() => {
//     let d = 0.12;
//     document.querySelectorAll("[data-split]").forEach((w) => {
//       const textNode = w.firstChild;
//       if (!textNode || textNode.nodeType !== 3) return;
//       const text = textNode.textContent;
//       const rest = [...w.childNodes].slice(1);
//       w.textContent = "";
//       [...text].forEach((c) => {
//         const s = document.createElement("span");
//         s.className = "ch";
//         s.textContent = c;
//         s.style.animationDelay = d.toFixed(2) + "s";
//         d += 0.045;
//         s.setAttribute("aria-hidden", "true");
//         w.appendChild(s);
//       });
//       rest.forEach((n) => w.appendChild(n));
//       d += 0.08;
//     });
//   }, []);

//   const tInfo = useCallback((o) => {
//     const d = new Date();
//     const p = new Intl.DateTimeFormat("en-US", {
//       timeZone: o.tz, weekday: "short", hour: "2-digit",
//       minute: "2-digit", second: "2-digit", hour12: false,
//     }).formatToParts(d);
//     const g = (t) => (p.find((x) => x.type === t) || {}).value;
//     const h = parseInt(g("hour"), 10) % 24;
//     const m = parseInt(g("minute"), 10);
//     const s = parseInt(g("second"), 10);
//     const mins = h * 60 + m;
//     const open = !["Sat", "Sun"].includes(g("weekday")) && mins >= HOURS.open && mins < HOURS.close;
//     const pad = (n) => String(n).padStart(2, "0");
//     return { h, m, s, open, text: `${pad(h)}:${pad(m)}:${pad(s)}`, hm: `${pad(h)}:${pad(m)}` };
//   }, []);

//   useEffect(() => {
//     const tick = () => {
//       const o = OFFICES[active];
//       const t = tInfo(o);
//       setClockText(t.text);
//       setIsOpen(t.open);
//       if (prevSecRef.current !== -1 && t.s < prevSecRef.current) secTurnsRef.current++;
//       prevSecRef.current = t.s;
//       const hS = document.getElementById("hS");
//       const hM = document.getElementById("hM");
//       const hH = document.getElementById("hH");
//       if (hS) hS.style.transform = `rotate(${secTurnsRef.current * 360 + t.s * 6}deg)`;
//       if (hM) hM.style.transform = `rotate(${t.m * 6 + t.s * 0.1}deg)`;
//       if (hH) hH.style.transform = `rotate(${(t.h % 12) * 30 + t.m * 0.5}deg)`;

//       if (overview) {
//         setOverviewRows(OFFICES.map((o, i) => {
//           const ti = tInfo(o);
//           return { i, o, open: ti.open, hm: ti.hm };
//         }));
//       }
//     };
//     tick();
//     const interval = setInterval(tick, 1000);
//     return () => clearInterval(interval);
//   }, [active, overview, tInfo]);

//   const camera = useCallback(() => {
//     if (!camRef.current || !mapRef.current || !pinsRef.current) return;
//     const narrow = window.innerWidth <= 720;
//     const a = proj(OFFICES[active]);
//     let S, tx, ty;
//     if (overview) {
//       S = narrow ? 1.15 : 1.3;
//       const cx = 442, cy = 207;
//       const tgt = narrow ? [400, 316] : [420, 290];
//       tx = tgt[0] - S * cx;
//       ty = tgt[1] - S * cy;
//     } else {
//       S = ZOOM;
//       const tgt = narrow ? [400, 300] : [500, 250];
//       tx = tgt[0] - S * a.x;
//       ty = tgt[1] - S * a.y;
//     }
//     setScale(S);
//     camRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${S})`;
//     pinsRef.current.querySelectorAll(".pin .inner").forEach((el) => (el.style.transform = `scale(${1 / S})`));
//     const scaleBar = document.getElementById("scaleBar");
//     if (scaleBar && mapRef.current) {
//       const r = Math.max(mapRef.current.clientWidth / 800, mapRef.current.clientHeight / 632);
//       scaleBar.style.width = (21.6 * S * r).toFixed(1) + "px";
//     }
//   }, [active, overview]);

//   const buildRoutes = useCallback(() => {
//     if (!routesRef.current) return;
//     const NS = "http://www.w3.org/2000/svg";
//     const svgEl = (tag, attrs = {}) => {
//       const e = document.createElementNS(NS, tag);
//       for (const k in attrs) e.setAttribute(k, attrs[k]);
//       return e;
//     };
//     routesRef.current.innerHTML = "";
//     const S = scale || 1;
//     const a = OFFICES[active];
//     const ap = proj(a);
//     let n = 0;
//     OFFICES.forEach((o, i) => {
//       if (i === active) return;
//       const b = proj(o);
//       const mx = (ap.x + b.x) / 2, my = (ap.y + b.y) / 2;
//       const dx = b.x - ap.x, dy = b.y - ap.y, k = 0.22;
//       let cx = mx - dy * k, cy = my + dx * k;
//       if (cy > my) { cx = mx + dy * k; cy = my - dx * k; }
//       const dStr = `M${ap.x.toFixed(1)} ${ap.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
//       const id = "rt" + i;
//       const delay = 0.9 + n * 0.14;
//       const base = svgEl("path", { id, d: dStr, fill: "none", stroke: "#4FA3FF", "stroke-opacity": "0.35", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3) });
//       const flow = svgEl("path", { d: dStr, fill: "none", stroke: "#8CC4FF", "stroke-opacity": "0.9", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3), "stroke-dasharray": `${(3 / S).toFixed(2)} ${(5 / S).toFixed(2)}`, opacity: "0" });
//       routesRef.current.append(base, flow);
//       const len = base.getTotalLength();
//       base.style.strokeDasharray = len;
//       base.style.strokeDashoffset = len;
//       base.getBoundingClientRect();
//       base.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.6,0,.2,1) ${delay}s`;
//       requestAnimationFrame(() => { base.style.strokeDashoffset = 0; });
//       setTimeout(() => {
//         flow.style.opacity = "1";
//         flow.style.animation = "flow 1.2s linear infinite";
//       }, (delay + 1) * 1000);

//       if (!reduce) {
//         const km0 = hav(a, o);
//         const trav = svgEl("circle", { r: (2.8 / S).toFixed(2), fill: "#D6EBFF", opacity: "0" });
//         const mot = svgEl("animateMotion", { dur: (2.2 + km0 / 1400).toFixed(2) + "s", repeatCount: "indefinite", rotate: "auto" });
//         const mp = svgEl("mpath");
//         mp.setAttribute("href", "#" + id);
//         mp.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + id);
//         mot.appendChild(mp);
//         trav.appendChild(mot);
//         routesRef.current.appendChild(trav);
//         setTimeout(() => trav.setAttribute("opacity", "1"), (delay + 1) * 1000);
//       }

//       const lx = 0.25 * ap.x + 0.5 * cx + 0.25 * b.x;
//       const ly = 0.25 * ap.y + 0.5 * cy + 0.25 * b.y;
//       const km = Math.round(hav(a, o) / 10) * 10;
//       const lg = svgEl("g", { transform: `translate(${lx.toFixed(1)} ${ly.toFixed(1)}) scale(${(1 / S).toFixed(4)})`, opacity: "0" });
//       lg.style.transition = "opacity .5s";
//       lg.innerHTML = `<rect x="-34" y="-10" width="68" height="20" rx="10" fill="#0B1B30" stroke="#2A5283"/><text y="3.5" fill="#A9C6EA" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">~${km.toLocaleString("en-IN")} km</text>`;
//       routesRef.current.appendChild(lg);
//       setTimeout(() => (lg.style.opacity = "1"), (delay + 0.9) * 1000);
//       n++;
//     });
//   }, [active, scale, reduce]);

//   const renderPins = useCallback(() => {
//     if (!pinsRef.current) return;
//     const NS = "http://www.w3.org/2000/svg";
//     pinsRef.current.innerHTML = "";
//     OFFICES.forEach((o, i) => {
//       const p = proj(o);
//       const lw = Math.round(o.city.length * 7.1 + 26);
//       const lx = o.code === "NMB" ? -(lw + 14) : 14;
//       const isAct = i === active && !overview;
//       const g = document.createElementNS(NS, "g");
//       g.setAttribute("class", "pin" + (isAct ? " active" : ""));
//       g.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
//       g.setAttribute("tabindex", "0");
//       g.setAttribute("role", "button");
//       g.setAttribute("aria-label", `${o.city} office`);
//       g.style.cursor = "pointer";
//       g.innerHTML = `<g class="inner" style="transition:transform 1.4s cubic-bezier(0.65,0,0.2,1)">
//         <g class="fx" style="opacity:${isAct ? 1 : 0};transition:opacity .6s">
//           <circle r="46" fill="url(#glow)"/>
//           <path d="M0 0 L64 0 A64 64 0 0 0 45.3 -45.3 Z" fill="url(#sweepGrad)" style="transform-origin:0 0;animation:spin 3.6s linear infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) .8s infinite"/>
//           <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) 1.6s infinite"/>
//           <rect x="-1.5" y="-78" width="3" height="78" rx="1.5" fill="url(#beamGrad)" style="transform-box:fill-box;transform-origin:bottom;transform:scaleY(${isAct ? 1 : 0});transition:transform .9s cubic-bezier(.22,.8,.18,1) .5s"/>
//         </g>
//         <circle class="burst" r="10" fill="none" stroke="#fff" stroke-width="2" opacity="0" style="transform-box:fill-box;transform-origin:center"/>
//         <circle class="dot" r="${isAct ? 9 : 6}" fill="${isAct ? '#2F8CFF' : '#8DB8EA'}" stroke="#fff" stroke-width="2.5" style="transition:r .4s,fill .4s"/>
//         <circle r="2.6" fill="#fff"/>
//         <g class="chip" transform="translate(${lx} -12)">
//           <rect width="${lw}" height="24" rx="12" fill="${isAct ? '#0062D6' : 'rgba(7,21,42,0.9)'}" stroke="${isAct ? '#5AA8FF' : '#2A4F7C'}" style="transition:fill .4s,stroke .4s"/>
//           <text x="13" y="16" fill="${isAct ? '#fff' : '#C4D6EE'}" font-family="DM Sans, sans-serif" font-size="12" font-weight="700" style="transition:fill .4s">${o.city}</text>
//         </g>
//       </g>`;
//       g.addEventListener("click", () => { setActive(i); setOverview(false); });
//       g.addEventListener("keydown", (e) => {
//         if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); setOverview(false); }
//       });
//       pinsRef.current.appendChild(g);
//     });
//   }, [active, overview]);

//   useEffect(() => { renderPins(); }, [active, overview, renderPins]);

//   useEffect(() => {
//     camera();
//     buildRoutes();
//     if (tabButtonsRef.current[active] && tabIndRef.current) {
//       const t = tabButtonsRef.current[active];
//       tabIndRef.current.style.width = t.offsetWidth + "px";
//       tabIndRef.current.style.transform = `translateX(${t.offsetLeft}px)`;
//       tabIndRef.current.style.opacity = overview ? "0" : "1";
//     }
//     if (overview) {
//       setHudVerb("NETWORK");
//       setFlapText("5 OFFICES");
//       setHudCoords(`ZOOM ${scale.toFixed(1)}× · IN + AE · IST / GST`);
//     } else {
//       setHudVerb("CONNECTING");
//       setFlapText(OFFICES[active].city.toUpperCase());
//       setHudCoords(`${OFFICES[active].lat.toFixed(4)}° N · ${OFFICES[active].lon.toFixed(4)}° E · ZOOM ${scale.toFixed(1)}×`);
//     }
//   }, [active, overview, camera, buildRoutes, scale]);

//   useEffect(() => {
//     const onResize = () => { camera(); buildRoutes(); };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [camera, buildRoutes]);

//   useEffect(() => {
//     const wrap = mapWrapRef.current, map = mapRef.current;
//     if (!wrap || !map || reduce || !window.matchMedia("(hover: hover)").matches) return;
//     const onMove = (e) => {
//       const r = map.getBoundingClientRect();
//       const x = (e.clientX - r.left) / r.width - 0.5;
//       const y = (e.clientY - r.top) / r.height - 0.5;
//       map.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
//     };
//     const onLeave = () => (map.style.transform = "");
//     wrap.addEventListener("mousemove", onMove);
//     wrap.addEventListener("mouseleave", onLeave);
//     return () => { wrap.removeEventListener("mousemove", onMove); wrap.removeEventListener("mouseleave", onLeave); };
//   }, [reduce]);

//   useEffect(() => {
//     const t = setTimeout(() => { setActive(0); setOverview(false); }, reduce ? 0 : 2300);
//     return () => clearTimeout(t);
//   }, [reduce]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "phone") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
//     let isValid = true;
//     if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
//     if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
//     if (chips.length === 0 && !formData.service) { newErrors.service = "Please select a service."; isValid = false; }
//     if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     setIsLoading(true);
//     if (overview) setOverview(false);

//     const serviceValue = chips.length > 0 ? chips.join(", ") : formData.service;

//     try {
//       const { error } = await supabase.from("contacts").insert([{
//         name: formData.name.trim(),
//         email: formData.email.trim(),
//         phone: formData.phone,
//         service: serviceValue,
//         message: formData.message.trim(),
//       }]);
//       if (error) throw error;

//       const pin = pinsRef.current?.querySelectorAll(".pin")[active];
//       if (pin) {
//         pin.classList.remove("landed");
//         void pin.getBoundingClientRect();
//         pin.classList.add("landed");
//       }
//       setTimeout(() => {
//         setIsSuccess(true);
//         setFormData({ name: "", email: "", phone: "", service: "", message: "" });
//         setErrors({ name: "", email: "", phone: "", service: "", message: "" });
//         setChips([]);
//       }, 700);
//     } catch (error) {
//       console.error("Supabase Error:", error);
//       setErrors((prev) => ({ ...prev, message: "Failed to send message. Please try again later." }));
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleFormMove = (e) => {
//     const card = e.currentTarget;
//     const r = card.getBoundingClientRect();
//     card.style.setProperty("--mx", e.clientX - r.left + "px");
//     card.style.setProperty("--my", e.clientY - r.top + "px");
//   };

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(currentOffice.address);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1800);
//     } catch (err) { /* noop */ }
//   };

//   return (
//     <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white">

//       {/* INLINE KEYFRAMES */}
//       <style>{`
//         @keyframes chIn { to { opacity: 1; transform: none; } }
//         @keyframes wipe { to { clip-path: inset(0 0 0 0 round 24px); } }
//         @keyframes scan { from { top: -120px; } to { top: 110%; } }
//         @keyframes pulseRing { 0% { transform: scale(.4); opacity: .75; } 100% { transform: scale(3.4); opacity: 0; } }
//         @keyframes burst { 0% { transform: scale(.5); opacity: 1; } 100% { transform: scale(5); opacity: 0; } }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @keyframes flow { to { stroke-dashoffset: -20; } }
//         @keyframes blink { 50% { opacity: .25; } }
//         @keyframes flip { 0% { transform: scaleY(1); } 50% { transform: scaleY(.1); } 100% { transform: scaleY(1); } }
//         @keyframes passIn { from { opacity: 0; transform: translateY(18px) rotate(-1.5deg) scale(.97); } to { opacity: 1; transform: none; } }
//         @keyframes shake { 10%,90% { transform: translateX(-2px); } 20%,80% { transform: translateX(4px); } 30%,50%,70% { transform: translateX(-7px); } 40%,60% { transform: translateX(7px); } }
//         @keyframes pop { 0% { transform: scale(.5); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: none; opacity: 1; } }
//         @keyframes draw { to { stroke-dashoffset: 0; } }
//         @keyframes rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
//         .ch { display: inline-block; opacity: 0; transform: translateY(60%) rotate(8deg); animation: chIn 0.9s cubic-bezier(0.22,0.8,0.18,1) forwards; }
//         .pin.landed .burst { animation: burst 1s ease-out; }
//         .fl input:focus + label, .fl input:not(:placeholder-shown) + label,
//         .fl textarea:focus + label, .fl textarea:not(:placeholder-shown) + label {
//           transform: translateY(-9px) scale(0.78);
//           color: #0062D6;
//           font-weight: 600;
//         }
//         .fl input::placeholder, .fl textarea::placeholder { color: transparent; }
//         .fl input:focus::placeholder, .fl textarea:focus::placeholder { color: #9AA5B8; }
//         .land-label { fill: #6F8FB8; font-family: 'JetBrains Mono', monospace; font-size: 7px; letter-spacing: 2px; text-anchor: middle; }
//         .land-label.sea { fill: #4C6C95; font-style: italic; }
//       `}</style>

//       {/* ============================================================
//           NEW PARTICLE HERO — contact-themed (About Us style)
//          ============================================================ */}
//       <section
//         className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
//         style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
//       >
//         {/* ============== PARTICLE LAYER ============== */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {/* Central glow */}
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

//           {/* Rotating wireframe SVG */}
//           <motion.svg
//             className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
//             viewBox="0 0 500 500" fill="none"
//             style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
//             animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
//             transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
//           >
//             <defs>
//               <linearGradient id="cuWireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
//                 <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
//                 <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
//               </linearGradient>
//             </defs>
//             <motion.polygon
//               points="250,40 460,250 250,460 40,250"
//               stroke="url(#cuWireGrad)" strokeWidth="1.2" fill="none"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
//               style={{ transformOrigin: '250px 250px' }}
//             />
//             <motion.polygon
//               points="250,80 420,250 250,420 80,250"
//               stroke="url(#cuWireGrad)" strokeWidth="0.8" fill="none" opacity="0.6"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
//               style={{ transformOrigin: '250px 250px' }}
//             />
//             <line x1="250" y1="40" x2="250" y2="460" stroke="url(#cuWireGrad)" strokeWidth="0.6" opacity="0.5" />
//             <line x1="40" y1="250" x2="460" y2="250" stroke="url(#cuWireGrad)" strokeWidth="0.6" opacity="0.5" />
//           </motion.svg>

//           {/* Floating contact glyphs (@ ✉ ☎ ✆ ⌘ ✧ ✦ ☏) */}
//           {HERO_GLYPHS.map((glyph, i) => {
//             const top = 8 + ((i * 41) % 84);
//             const left = 4 + ((i * 59) % 90);
//             const size = 16 + (i % 4) * 8;
//             const dur = 6 + (i % 5) * 1.6;
//             const delay = (i % 6) * 0.8;
//             return (
//               <motion.span
//                 key={`cg-${i}`}
//                 className="absolute select-none font-['Space_Grotesk'] font-bold"
//                 style={{
//                   top: `${top}%`, left: `${left}%`,
//                   fontSize: `${size}px`,
//                   color: 'rgba(143,203,242,0.5)',
//                   textShadow: '0 0 14px rgba(1,173,240,0.65)',
//                 }}
//                 animate={{
//                   y: [0, -22, 0, 18, 0],
//                   x: [0, 12, 0, -10, 0],
//                   opacity: [0.15, 0.8, 0.15],
//                   rotate: [0, 8, 0, -8, 0],
//                 }}
//                 transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
//               >
//                 {glyph}
//               </motion.span>
//             );
//           })}

//           {/* Sparkle dust */}
//           {[...Array(16)].map((_, i) => {
//             const size = Math.random() * 3 + 2;
//             return (
//               <motion.div
//                 key={`cs-${i}`}
//                 className="absolute rounded-full"
//                 style={{
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   width: `${size}px`, height: `${size}px`,
//                   background: 'rgba(180, 230, 255, 0.9)',
//                   boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
//                 }}
//                 animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
//                 transition={{
//                   duration: 2 + Math.random() * 3,
//                   repeat: Infinity, delay: Math.random() * 3,
//                   ease: 'easeInOut',
//                 }}
//               />
//             );
//           })}

//           {/* Orbiting contact-themed chips */}
//           <motion.div
//             className="absolute top-1/2 left-1/2 hidden lg:block"
//             style={{ width: 720, height: 720, translateX: '-50%', translateY: '-50%' }}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
//           >
//             {HERO_TAGS.map((label, i) => {
//               const angle = (i * 360) / HERO_TAGS.length;
//               const rad = (angle * Math.PI) / 180;
//               const x = 360 + Math.cos(rad) * 360;
//               const y = 360 + Math.sin(rad) * 360;
//               return (
//                 <motion.div
//                   key={`ctag-${label}`}
//                   className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#B8E2FF] backdrop-blur-sm"
//                   style={{ left: x, top: y }}
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
//                 >
//                   {label}
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* ============== CONTENT ============== */}
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
//               transition={{ duration: 0.3, delay: 0.1 }}
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//             >
//               Contact Us
//             </motion.span>

//             <motion.h2
//               className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
//               style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.35, delay: 0.15 }}
//             >
//               Let&apos;s Connect{' '}
//               <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//                 Worldwide
//               </span>
//             </motion.h2>

//             <motion.p
//               className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
//               style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.35, delay: 0.2 }}
//             >
//               Five offices across India and the UAE. One team ready to answer your questions,
//               discuss your ideas, and start your next big project.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================================
//           SECONDARY LIGHT HERO (existing)
//          ============================================================ */}
//       <section className="relative pt-16 sm:pt-20 pb-24">
//         <div className="relative mx-auto max-w-4xl px-6 text-center">
//           <h1 className="sec-hero-heading text-[#003F7D]">
//             Let&apos;s Build Something
//             <br />
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               Great Together
//             </span>
//           </h1>
//           <p className="sec-p sec-text-dark-soft mx-auto max-w-3xl">
//             We&apos;re here to answer your questions, discuss your ideas,
//             <br className="hidden md:block" />
//             and start your next big project.
//           </p>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
//         <div className="absolute inset-0 [background-image:radial-gradient(#D8E0EC_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] pointer-events-none" />

//         <div className="relative max-w-[1248px] mx-auto z-10">
//           {/* HEADER */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-8 sm:mb-10 md:mb-12"
//           >
//             <motion.span
//               className="sec-badge inline-block"
//               whileHover={{ scale: 1.05 }}
//               animate={{ y: [0, -3, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Let&apos;s Talk!
//             </motion.span>

//             <motion.h2
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.15 }}
//             >
//               Contact <span style={{ color: '#008df1' }}>Us</span>
//             </motion.h2>

//             <motion.p
//               className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               Benefit of the society where we operate. A success website obviously needs great.
//             </motion.p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-8 items-start">

//             {/* LEFT (MAP) */}
//             <div className="flex flex-col gap-4 min-w-0">

//               <div className="relative grid grid-cols-5 gap-1.5 p-1.5 bg-white border border-[#E3E8F1] rounded-[18px] shadow-sm" role="tablist">
//                 <span ref={tabIndRef} className="absolute top-1.5 bottom-1.5 left-0 rounded-[13px] bg-[#0062D6] shadow-[0_10px_22px_-8px_rgba(0,98,214,0.6)] transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.22,0.8,0.18,1)] opacity-0" aria-hidden="true" />
//                 {OFFICES.map((o, i) => {
//                   const isActive = i === active && !overview;
//                   return (
//                     <button
//                       key={o.code}
//                       ref={(el) => (tabButtonsRef.current[i] = el)}
//                       type="button"
//                       role="tab"
//                       aria-selected={isActive}
//                       tabIndex={i === active ? 0 : -1}
//                       onClick={() => { setActive(i); setOverview(false); }}
//                       onKeyDown={(e) => {
//                         if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
//                           e.preventDefault();
//                           const n = (i + (e.key === "ArrowRight" ? 1 : -1) + OFFICES.length) % OFFICES.length;
//                           setActive(n); setOverview(false);
//                           tabButtonsRef.current[n]?.focus();
//                         }
//                       }}
//                       className={`relative z-10 flex items-center gap-2.5 min-h-[58px] px-3 rounded-[13px] text-left transition-colors duration-500 ${isActive ? "text-white" : "text-[#0B1220]"}`}
//                     >
//                       <span className={`flex-none w-8 h-8 rounded-[10px] grid place-items-center text-xs font-semibold transition-all duration-500 ${isActive ? "bg-white/20 text-white" : "bg-[#EEF2F8] text-[#3C4A63]"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                         {o.num}
//                       </span>
//                       <span className="flex flex-col min-w-0">
//                         <span className="text-[14.5px] font-bold whitespace-nowrap">{o.city}</span>
//                         <span className={`text-[11.5px] font-medium transition-colors duration-500 ${isActive ? "text-white/80" : "text-[#56627A]"}`}>{o.country}</span>
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>

//               <div ref={mapWrapRef} className="relative" style={{ perspective: "1400px" }}>
//                 <div
//                   ref={mapRef}
//                   className="relative h-[640px] rounded-[24px] overflow-hidden bg-[#07152A] shadow-[0_34px_70px_-28px_rgba(7,21,42,0.65)]"
//                   style={{
//                     clipPath: "inset(0 0 100% 0 round 24px)",
//                     animation: "wipe 1.2s cubic-bezier(0.7,0,0.2,1) 0.6s forwards",
//                     transformStyle: "preserve-3d",
//                     transition: "transform 0.5s cubic-bezier(0.22,0.8,0.18,1)",
//                   }}
//                 >
//                   <svg viewBox="0 0 800 632" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full block">
//                     <defs>
//                       <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.05" fill="#28507E" /></pattern>
//                       <pattern id="dotsHi" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.25" fill="#4C8BD6" /></pattern>
//                       <radialGradient id="glow"><stop offset="0" stopColor="#2F8CFF" stopOpacity="0.55" /><stop offset="1" stopColor="#2F8CFF" stopOpacity="0" /></radialGradient>
//                       <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5AB0FF" stopOpacity="0" /><stop offset="1" stopColor="#5AB0FF" stopOpacity="0.38" /></linearGradient>
//                       <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#7CC0FF" stopOpacity="0.9" /><stop offset="1" stopColor="#7CC0FF" stopOpacity="0" /></linearGradient>
//                       <path id="landPath" d={LAND_PATH} />
//                     </defs>
//                     <rect x="-2000" y="-2000" width="5000" height="5000" fill="#07152A" />
//                     <g ref={camRef} style={{ transformOrigin: "0 0", transition: "transform 1.4s cubic-bezier(0.65,0,0.2,1)" }}>
//                       <g fill="none" stroke="#7FA8DC" strokeOpacity="0.08" vectorEffect="non-scaling-stroke">
//                         {[-120,-60,0,60,120,180,240,300,360,420,480,540,600,660,720,780,840,900].map((x) => (<path key={"v" + x} d={`M${x} -200V900`} />))}
//                         {[696,636,576,516,456,396,336,276,216,156,96,36,-24,-84].map((y) => (<path key={"h" + y} d={`M-200 ${y}H1400`} />))}
//                       </g>
//                       <use href="#landPath" fill="#0D213A" />
//                       <use href="#landPath" fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_2} fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_3} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
//                       <path d={LAND_PATH_4} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
//                       <g>
//                         <text className="land-label" x="582" y="186">INDIA</text>
//                         <text className="land-label sea" x="402" y="276">ARABIAN SEA</text>
//                         <text className="land-label sea" x="696" y="270">BAY OF BENGAL</text>
//                         <text className="land-label sea" x="504" y="440">INDIAN OCEAN</text>
//                         <text className="land-label" x="330" y="212">OMAN</text>
//                         <text className="land-label" x="180" y="190">SAUDI ARABIA</text>
//                         <text className="land-label" x="452" y="110">PAKISTAN</text>
//                         <text className="land-label" x="330" y="84">IRAN</text>
//                         <text className="land-label" x="420" y="48">AFGHANISTAN</text>
//                         <text className="land-label" x="648" y="104">NEPAL</text>
//                         <text className="land-label" x="204" y="262">YEMEN</text>
//                         <text className="land-label" x="612" y="398">SRI LANKA</text>
//                       </g>
//                       <g ref={routesRef} />
//                       <g ref={pinsRef} />
//                     </g>
//                   </svg>

//                   <div className="absolute left-0 right-0 h-[120px] -top-[120px] pointer-events-none bg-gradient-to-b from-transparent via-[rgba(90,176,255,0.10)] to-transparent" style={{ animation: "scan 1.6s ease-in-out 1.3s 1 forwards" }} aria-hidden="true" />
//                   <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 70% at 60% 42%,rgba(7,21,42,0) 55%,rgba(3,10,22,0.62) 100%)" }} aria-hidden="true" />

//                   <div className="absolute top-5 left-5 flex flex-col px-3.5 py-2.5 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[11.5px] leading-[1.7] text-[#C4D6EE]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                     <span className="flex items-center gap-2 tracking-[0.06em]">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#3FD68F] animate-pulse" />
//                       <span>{hudVerb}</span>{" "}
//                       <span className="inline-flex gap-px">
//                         {[...(flapText || "")].map((ch, i) => (
//                           <span key={i} className={`inline-block min-w-[0.72em] text-center px-px rounded-sm font-semibold ${ch === " " ? "bg-transparent" : "bg-white/[0.07] text-[#E8F1FC]"}`}>{ch}</span>
//                         ))}
//                       </span>
//                     </span>
//                     <span className="text-[#7F9CC2]">{hudCoords}</span>
//                   </div>

//                   <button
//                     type="button"
//                     className="absolute top-5 right-5 h-11 px-4 flex items-center gap-2 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[#E3EDFA] text-[13px] font-semibold hover:bg-[rgba(20,44,74,0.92)] hover:border-[rgba(120,170,230,0.45)] transition-colors"
//                     aria-pressed={overview}
//                     onClick={() => setOverview((v) => !v)}
//                   >
//                     <svg className={`transition-transform duration-500 ${overview ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <path d="M12 3l9 5-9 5-9-5 9-5z" />
//                       <path d="M3 13l9 5 9-5" />
//                     </svg>
//                     <span>{overview ? "Focus office" : "All offices"}</span>
//                   </button>

//                   <div className="absolute right-5 bottom-5 flex flex-col items-end gap-1.5 text-[10.5px] text-[#8FA9CC] pointer-events-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                     <span>200 km</span>
//                     <b id="scaleBar" className="block h-1.5 border-[1.5px] border-[#8FA9CC] border-t-0 transition-[width] duration-[1.4s] [transition-timing-function:cubic-bezier(0.65,0,0.2,1)]" />
//                     <span className="text-[#6A86AD]">Illustrative map</span>
//                   </div>

//                   {!overview && (
//                     <article key={active} className="absolute left-5 bottom-5 w-[392px] grid grid-cols-[minmax(0,1fr)_104px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] text-[#0B1220]" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
//                       <div className="p-[20px_18px_18px_20px] flex flex-col gap-3 min-w-0">
//                         <div className="flex items-center justify-between gap-2">
//                           <span className="whitespace-nowrap text-[11.5px] font-semibold text-[#0062D6] tracking-[0.06em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                             {currentOffice.num}/05 · {currentOffice.country.toUpperCase()}
//                           </span>
//                           <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${isOpen ? "bg-[#ECFDF3] text-[#067647]" : "bg-[#FFF4E5] text-[#93370D]"}`}>
//                             <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-[#12B76A]" : "bg-[#F79009]"}`} />
//                             <span>{isOpen ? "Open now" : "Closed"}</span>
//                           </span>
//                         </div>
//                         <h2 className="m-0 text-3xl leading-none font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{currentOffice.city}</h2>
//                         <p className="m-0 text-[13.5px] leading-[1.5] text-[#56627A]">{currentOffice.address}</p>
//                         <div className="flex gap-2 mt-0.5">
//                           <a className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl bg-[#0062D6] text-white text-[13.5px] font-semibold no-underline hover:bg-[#004FAD] hover:-translate-y-px transition-all [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5" href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(currentOffice.address)} target="_blank" rel="noopener noreferrer">
//                             <svg className="transition-transform duration-300" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
//                             Get directions
//                           </a>
//                           <button type="button" onClick={handleCopy} className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors">
//                             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg>
//                             <span>{copied ? "Copied" : "Copy"}</span>
//                           </button>
//                         </div>
//                       </div>
//                       <div className="relative border-l-2 border-dashed border-[#D5DDEA] py-[18px] px-2.5 flex flex-col items-center justify-between gap-2.5 bg-[#F7F9FD] rounded-r-[20px]">
//                         <div className="absolute -left-[11px] -top-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
//                         <div className="absolute -left-[11px] -bottom-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
//                         <div className="text-3xl font-extrabold leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
//                           {currentOffice.code}
//                           <small className="block mt-1 text-[9.5px] font-medium tracking-[0.12em] text-[#56627A] text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OFFICE</small>
//                         </div>
//                         <svg className="w-[62px] h-[62px]" viewBox="0 0 62 62">
//                           <circle cx="31" cy="31" r="29" fill="#fff" stroke="#DCE3EE" strokeWidth="2" />
//                           <g stroke="#B7C3D6" strokeWidth="2" strokeLinecap="round"><path d="M31 6v4M31 52v4M6 31h4M52 31h4" /></g>
//                           <line id="hH" x1="31" y1="31" x2="31" y2="17" stroke="#0B1220" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
//                           <line id="hM" x1="31" y1="31" x2="31" y2="11" stroke="#0B1220" strokeWidth="2.2" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
//                           <line id="hS" x1="31" y1="35" x2="31" y2="9" stroke="#0A7CFF" strokeWidth="1.4" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.25s cubic-bezier(0.4,2.4,0.5,1)" }} />
//                           <circle cx="31" cy="31" r="2.6" fill="#0A7CFF" />
//                         </svg>
//                         <div className="text-[12.5px] font-semibold text-center leading-[1.3] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                           <span>{clockText}</span>
//                           <small className="block text-[9.5px] font-medium text-[#56627A] tracking-[0.08em]">{currentOffice.tzs} · {currentOffice.tz === "Asia/Dubai" ? "GMT+4" : "GMT+5:30"}</small>
//                         </div>
//                       </div>
//                     </article>
//                   )}

//                   {overview && (
//                     <article className="absolute left-5 bottom-5 w-[392px] p-[18px_12px_12px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] flex flex-col gap-1" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
//                       <header className="flex justify-between items-baseline px-2 pb-1.5">
//                         <h2 className="m-0 text-[22px] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>5 offices, 2 countries</h2>
//                         <span className="text-[11.5px] text-[#56627A]">Local time</span>
//                       </header>
//                       <div>
//                         {overviewRows.map((row) => (
//                           <button key={row.i} type="button" className="w-full flex items-center gap-3 h-11 px-2 border-0 rounded-[10px] bg-transparent text-left hover:bg-[#F1F5FC] transition-colors" onClick={() => { setActive(row.i); setOverview(false); }}>
//                             <span className="text-[11.5px] font-semibold text-[#0062D6]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.o.num}</span>
//                             <span className="flex-1 text-sm font-semibold">{row.o.city} <span className="font-medium text-[#56627A]">· {row.o.country}</span></span>
//                             <i className="w-[7px] h-[7px] rounded-full" style={{ background: row.open ? "#12B76A" : "#F79009" }} />
//                             <span className="text-[13px] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.hm} {row.o.tzs}</span>
//                           </button>
//                         ))}
//                       </div>
//                     </article>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT (FORM) */}
//             <aside
//               className="relative rounded-[24px] bg-white border border-[#E6EBF3] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_28px_56px_-18px_rgba(16,24,40,0.16)] p-8 min-h-[712px] flex flex-col overflow-hidden"
//               onMouseMove={handleFormMove}
//               style={{
//                 animation: "rise 0.9s cubic-bezier(0.22,0.8,0.18,1) 0.7s both",
//                 backgroundImage: "radial-gradient(420px circle at var(--mx,50%) var(--my,-20%), rgba(10,124,255,0.07), transparent 60%)",
//               }}
//             >
//               <div className="relative">
//                 <div className="mb-[22px]">
//                   <h2 id="form-title" className="m-0 mb-1 text-[28px] leading-[1.15] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Send us a message</h2>
//                   <p className="m-0 text-sm text-[#56627A]">We'll get back to you as soon as possible.</p>
//                 </div>

//                 <form onSubmit={handleSubmit} noValidate className={`flex-col gap-4 ${isSuccess ? "hidden" : "flex"}`}>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <div className={`fl relative ${errors.name ? "invalid" : ""}`}>
//                       <input id="fName" type="text" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} name="name"
//                         className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.name ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
//                       <label htmlFor="fName" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Name</label>
//                     </div>
//                     <div className={`fl relative ${emailValid ? "valid" : ""} ${errors.email ? "invalid" : ""}`}>
//                       <input id="fEmail" type="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={(e) => { handleChange(e); setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.target.value.trim())); }} name="email"
//                         className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.email ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
//                       <label htmlFor="fEmail" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Email</label>
//                       <svg className={`absolute right-3 top-[19px] transition-all ${emailValid ? "opacity-100 scale-100" : "opacity-0 scale-[0.3] -rotate-30"}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
//                     </div>
//                   </div>

//                   <div className="flex items-stretch h-[54px] border-[1.5px] border-[#E1E7F0] rounded-xl bg-[#F6F8FC] hover:border-[#C5D0E0] focus-within:border-[#0A7CFF] focus-within:bg-white focus-within:ring-4 focus-within:ring-[rgba(10,124,255,0.14)] transition-all">
//                     <select aria-label="Country code" defaultValue="+91" className="border-0 bg-transparent pl-3.5 pr-1 text-[13.5px] font-semibold cursor-pointer outline-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
//                       <option value="+91">IN +91</option>
//                       <option value="+971">AE +971</option>
//                     </select>
//                     <span className="w-px mx-1 my-3.5 bg-[#DCE3EE]" />
//                     <div className="fl relative flex-1">
//                       <input id="fPhone" type="tel" autoComplete="tel-national" placeholder="98765 43210" value={formData.phone} onChange={handleChange} name="phone" maxLength={10} className="w-full h-full border-0 bg-transparent outline-none text-[14.5px] px-3 pt-[22px] pb-1.5" />
//                       <label htmlFor="fPhone" className="absolute left-3 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Phone (optional)</label>
//                     </div>
//                   </div>

//                   <fieldset className="m-0 p-0 border-0">
//                     <legend className="block mb-2.5 text-[13px] font-semibold text-[#2A3650]">What can we help with?</legend>
//                     <div className="flex flex-wrap gap-2">
//                       {SERVICES.map((s) => {
//                         const isOn = chips.includes(s);
//                         return (
//                           <button
//                             key={s}
//                             type="button"
//                             aria-pressed={isOn}
//                             onClick={() =>
//                               setChips((prev) =>
//                                 prev.includes(s) ? prev.filter((c) => c !== s) : [...prev, s]
//                               )
//                             }
//                             className={`h-9 px-3.5 inline-flex items-center rounded-full border-[1.5px] text-[13px] font-semibold transition-all active:scale-95 ${
//                               isOn
//                                 ? "bg-[#0062D6] border-[#0062D6] text-white gap-1.5"
//                                 : "bg-white border-[#DCE3EE] text-[#2A3650] hover:border-[#0A7CFF]"
//                             }`}
//                           >
//                             <svg className={`transition-all duration-200 ${isOn ? "w-3.5" : "w-0"}`} height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
//                             <span>{s}</span>
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </fieldset>

//                   <div className="fl relative">
//                     <textarea id="fMsg" maxLength={500} placeholder="A few lines about your project, timeline or budget…" value={formData.message} onChange={handleChange} name="message"
//                       className="w-full h-28 pt-[26px] pb-1.5 px-3.5 rounded-xl border-[1.5px] border-[#E1E7F0] bg-[#F6F8FC] text-[14.5px] outline-none resize-none leading-[1.5] block hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)] transition-all" />
//                     <label htmlFor="fMsg" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Message</label>
//                     <span className="absolute right-3 bottom-2.5 text-[11px] text-[#6B778C]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{formData.message.length}/500</span>
//                   </div>

//                   <div className="mt-auto flex flex-col gap-3 pt-1">
//                     {errors.message && (<p className="m-0 text-[13px] font-medium text-[#B42318]" role="alert">{errors.message}</p>)}
//                     <p className="m-0 flex items-center gap-2 text-[13px] text-[#56627A]">
//                       <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
//                       <span>Flying to our <strong className="text-[#0B1220]">{currentOffice.city}</strong> team</span>
//                     </p>
//                     <button type="submit" disabled={isLoading}
//                       className={`relative h-14 flex items-center justify-center gap-2.5 border-0 rounded-[14px] bg-[#0062D6] text-white text-[15.5px] font-bold shadow-[0_12px_26px_-10px_rgba(0,98,214,0.6)] overflow-hidden group/send hover:bg-[#0058C2] hover:shadow-[0_18px_34px_-12px_rgba(0,98,214,0.7)] transition-all ${isLoading ? "opacity-70 cursor-wait" : ""}`}>
//                       <span className="relative z-10">{isLoading ? "Taking off…" : "Send message"}</span>
//                       <svg className="relative z-10 transition-transform group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5 group-hover/send:-rotate-8" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
//                       <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent -translate-x-full group-hover/send:translate-x-full transition-transform duration-700 pointer-events-none" />
//                     </button>
//                     <div className="flex justify-center gap-4.5 text-xs font-medium text-[#56627A]">
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /></svg>
//                         Secure
//                       </span>
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
//                         Encrypted
//                       </span>
//                       <span className="inline-flex items-center gap-1.5">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18" /><path d="M10.6 5.1A10 10 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.4 3.5M6.5 6.6C4.4 8 2.9 10 2 12c1 2.5 5 7 10 7 1.7 0 3.3-.5 4.6-1.3" /></svg>
//                         Private
//                       </span>
//                     </div>
//                   </div>
//                 </form>

//                 {isSuccess && (
//                   <div className="flex-1 flex flex-col items-center justify-center text-center gap-4.5" aria-live="polite">
//                     <div className="w-[92px] h-[92px] rounded-full bg-[#E6F0FF] grid place-items-center" style={{ animation: "pop 0.6s cubic-bezier(0.3,1.4,0.5,1) both" }}>
//                       <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M5 12.5l4.5 4.5L19 7.5" strokeDasharray="24" strokeDashoffset="24" style={{ animation: "draw 0.5s ease 0.35s forwards" }} />
//                       </svg>
//                     </div>
//                     <h2 className="m-0 text-3xl font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.3s both" }}>
//                       Landed in {currentOffice.city}
//                     </h2>
//                     <p className="m-0 max-w-[300px] text-[14.5px] leading-[1.55] text-[#56627A]" style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.42s both" }}>
//                       Thanks, {formData.name?.split(" ")[0] || "there"}. Our {currentOffice.city} team will reply as soon as possible.
//                     </p>
//                     <button type="button" className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors" onClick={() => setIsSuccess(false)} style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.54s both" }}>
//                       Send another message
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </aside>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactUs;






import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabaseClient";

/* ============================================
   DATA & HELPERS
   ============================================ */
const OFFICES = [
  { code: "BLR", num: "01", city: "Bengaluru",   country: "India", lat: 12.9166, lon: 77.6101, tz: "Asia/Kolkata", tzs: "IST", address: "Vinir Tower, 6, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, 1st Stage, BTM Layout, Bengaluru, Karnataka 560068" },
  { code: "NMB", num: "02", city: "Navi Mumbai", country: "India", lat: 19.0330, lon: 73.0297, tz: "Asia/Kolkata", tzs: "IST", address: "18th Floor, Cyberone, Opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703" },
  { code: "NOI", num: "03", city: "Noida",       country: "India", lat: 28.5355, lon: 77.3910, tz: "Asia/Kolkata", tzs: "IST", address: "D-41, C Block, Sector 59, Noida, Uttar Pradesh 201309" },
  { code: "HYD", num: "04", city: "Hyderabad",   country: "India", lat: 17.3850, lon: 78.4867, tz: "Asia/Kolkata", tzs: "IST", address: "Sec-II, Village, HUDA Techno Enclave, Madhapur Hitech City, Hyderabad, Telangana 500081" },
  { code: "DXB", num: "05", city: "Dubai",       country: "UAE",   lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai",   tzs: "GST", address: "35V6+54, Al Sufouh, Dubai Internet City, Dubai, United Arab Emirates" },
];
const HOURS = { open: 9 * 60, close: 18 * 60 };
const SERVICES = ["Web design", "Development", "Branding", "SEO & growth", "Something else"];
const ZOOM = 2.2;

/* Contact-themed particles for hero */
const HERO_GLYPHS = ['@', '✉', '☎', '✆', '⌘', '✧', '✦', '☏', '✉', '@', '☎'];
const HERO_TAGS = ['EMAIL', 'CALL', 'VISIT', 'CHAT', 'SUPPORT', '24/7', 'REPLY', 'HELLO'];

const proj = (o) => ({ x: (o.lon - 30) * 12, y: (38 - o.lat) * 12 });
const hav = (p, q) => {
  const R = 6371, r = Math.PI / 180;
  const dLat = (q.lat - p.lat) * r, dLon = (q.lon - p.lon) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(p.lat * r) * Math.cos(q.lat * r) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const LAND_PATH = "M-240 -144 L-240 756 L72 756 L126 576 L111.6 540 L120 492 L144 468 L180 438 L210 408 L234 378 L252 331.2 L254.4 314.4 L204 322.8 L174 331.2 L159.6 314.4 L150 304.8 L138 294 L114 270 L102 240 L86.4 204 L66 168 L48 126 L31.2 97.2 L27.6 81.6 L0 79.2 L-60 74.4 L-120 81.6 L-132 92.4 L-180 72 L-240 54 L-240 12 L-120 12 L-96 18 L-48 0 L-42 -24 L-24 -36 L72 -36 L78 14.4 L72 21.6 L70.8 33.6 L66 50.4 L58.8 66 L51.6 80.4 L45.6 99.6 L51.6 122.4 L60 102 L72 126 L96 168 L109.2 196.8 L138 234 L152.4 270 L160.8 303.6 L180 302.4 L228 284.4 L266.4 268.8 L300 252 L320.4 240 L333.6 228 L345.6 211.2 L357.6 186 L343.2 172.8 L324 169.2 L316.8 158.4 L315.6 140.4 L306 150 L288 166.8 L270 165.6 L259.2 165.6 L255.6 142.8 L249.6 151.2 L242.4 141.6 L235.2 132 L222 120 L216 97.2 L234 96 L246 105.6 L258 121.2 L282 134.4 L300 136.8 L314.4 130.8 L327.6 146.4 L348 151.2 L378 153.6 L408 152.4 L438 151.2 L447.6 158.4 L458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L726 189.6 L741.6 187.2 L747.6 204 L756 222 L771.6 240 L770.4 264 L783.6 266.4 L811.2 258 L812.4 276 L822 300 L824.4 336 L819.6 360 L828 366 L960 366 L960 -144 Z";
const LAND_PATH_2 = "M598.8 338.4 L609.6 344.4 L622.8 366 L619.2 380.4 L607.2 385.2 L600 376.8 L596.4 357.6 Z";
const LAND_PATH_3 = "M458.4 172.8 L466.8 186 L480 182.4 L482.4 204 L498 206.4 L511.2 199.2 L513.6 228 L519.6 252 L525.6 270 L531.6 282 L537.6 301.2 L549.6 321.6 L555.6 342 L570 358.8 L578.4 349.2 L591.6 332.4 L598.8 332.4 L597.6 314.4 L603.6 298.8 L601.2 270 L614.4 259.2 L627.6 252 L648 236.4 L669.6 218.4 L684 204 L698.4 195.6 L708 193.2 L705.6 186 L703.2 164.4 L696 152.4 L717.6 144 L744 153.6 L747.6 168 L738 177.6 L751.2 177.6 L759.6 168 L774 150 L783.6 135.6 L804 122.4 L792 108 L768 110.4 L744 122.4 L716.4 117.6 L706.8 128.4 L698.4 121.2 L696 138 L672 127.2 L648 126 L618 111.6 L603.6 96 L588 84 L585.6 66 L594 48 L573.6 30 L552 26.4 L534 36 L525.6 44.4 L534 62.4 L540 69.6 L535.2 84 L526.8 96 L504 120 L489.6 122.4 L475.2 138 L486 150 L474 164.4 Z";
const LAND_PATH_4 = "M259.2 165.6 L270 165.6 L288 166.8 L306 150 L315.6 140.4 L316.8 158.4 L309.6 165.6 L302.4 183.6 L264 180 Z";

/* ============================================
   MAIN COMPONENT
   ============================================ */
const ContactUs = () => {
  const [active, setActive] = useState(0);
  const [overview, setOverview] = useState(false);
  const [scale, setScale] = useState(1);
  const [flapText, setFlapText] = useState("5 OFFICES");
  const [hudVerb, setHudVerb] = useState("NETWORK");
  const [hudCoords, setHudCoords] = useState("—");
  const [clockText, setClockText] = useState("--:--:--");
  const [isOpen, setIsOpen] = useState(true);
  const [overviewRows, setOverviewRows] = useState([]);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chips, setChips] = useState([]);
  const [emailValid, setEmailValid] = useState(false);

  const camRef = useRef(null);
  const mapRef = useRef(null);
  const mapWrapRef = useRef(null);
  const tabIndRef = useRef(null);
  const tabButtonsRef = useRef([]);
  const pinsRef = useRef(null);
  const routesRef = useRef(null);
  const prevSecRef = useRef(-1);
  const secTurnsRef = useRef(0);

  const currentOffice = OFFICES[active];
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: chips.join(", ") }));
    if (chips.length > 0 && errors.service) {
      setErrors((prev) => ({ ...prev, service: "" }));
    }
  }, [chips]);

  useEffect(() => {
    let d = 0.12;
    document.querySelectorAll("[data-split]").forEach((w) => {
      const textNode = w.firstChild;
      if (!textNode || textNode.nodeType !== 3) return;
      const text = textNode.textContent;
      const rest = [...w.childNodes].slice(1);
      w.textContent = "";
      [...text].forEach((c) => {
        const s = document.createElement("span");
        s.className = "ch";
        s.textContent = c;
        s.style.animationDelay = d.toFixed(2) + "s";
        d += 0.045;
        s.setAttribute("aria-hidden", "true");
        w.appendChild(s);
      });
      rest.forEach((n) => w.appendChild(n));
      d += 0.08;
    });
  }, []);

  const tInfo = useCallback((o) => {
    const d = new Date();
    const p = new Intl.DateTimeFormat("en-US", {
      timeZone: o.tz, weekday: "short", hour: "2-digit",
      minute: "2-digit", second: "2-digit", hour12: false,
    }).formatToParts(d);
    const g = (t) => (p.find((x) => x.type === t) || {}).value;
    const h = parseInt(g("hour"), 10) % 24;
    const m = parseInt(g("minute"), 10);
    const s = parseInt(g("second"), 10);
    const mins = h * 60 + m;
    const open = !["Sat", "Sun"].includes(g("weekday")) && mins >= HOURS.open && mins < HOURS.close;
    const pad = (n) => String(n).padStart(2, "0");
    return { h, m, s, open, text: `${pad(h)}:${pad(m)}:${pad(s)}`, hm: `${pad(h)}:${pad(m)}` };
  }, []);

  useEffect(() => {
    const tick = () => {
      const o = OFFICES[active];
      const t = tInfo(o);
      setClockText(t.text);
      setIsOpen(t.open);
      if (prevSecRef.current !== -1 && t.s < prevSecRef.current) secTurnsRef.current++;
      prevSecRef.current = t.s;
      const hS = document.getElementById("hS");
      const hM = document.getElementById("hM");
      const hH = document.getElementById("hH");
      if (hS) hS.style.transform = `rotate(${secTurnsRef.current * 360 + t.s * 6}deg)`;
      if (hM) hM.style.transform = `rotate(${t.m * 6 + t.s * 0.1}deg)`;
      if (hH) hH.style.transform = `rotate(${(t.h % 12) * 30 + t.m * 0.5}deg)`;

      if (overview) {
        setOverviewRows(OFFICES.map((o, i) => {
          const ti = tInfo(o);
          return { i, o, open: ti.open, hm: ti.hm };
        }));
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [active, overview, tInfo]);

  const camera = useCallback(() => {
    if (!camRef.current || !mapRef.current || !pinsRef.current) return;
    const narrow = window.innerWidth <= 720;
    const a = proj(OFFICES[active]);
    let S, tx, ty;
    if (overview) {
      S = narrow ? 1.15 : 1.3;
      const cx = 442, cy = 207;
      const tgt = narrow ? [400, 316] : [420, 290];
      tx = tgt[0] - S * cx;
      ty = tgt[1] - S * cy;
    } else {
      S = ZOOM;
      const tgt = narrow ? [400, 300] : [500, 250];
      tx = tgt[0] - S * a.x;
      ty = tgt[1] - S * a.y;
    }
    setScale(S);
    camRef.current.style.transform = `translate(${tx}px, ${ty}px) scale(${S})`;
    pinsRef.current.querySelectorAll(".pin .inner").forEach((el) => (el.style.transform = `scale(${1 / S})`));
    const scaleBar = document.getElementById("scaleBar");
    if (scaleBar && mapRef.current) {
      const r = Math.max(mapRef.current.clientWidth / 800, mapRef.current.clientHeight / 632);
      scaleBar.style.width = (21.6 * S * r).toFixed(1) + "px";
    }
  }, [active, overview]);

  const buildRoutes = useCallback(() => {
    if (!routesRef.current) return;
    const NS = "http://www.w3.org/2000/svg";
    const svgEl = (tag, attrs = {}) => {
      const e = document.createElementNS(NS, tag);
      for (const k in attrs) e.setAttribute(k, attrs[k]);
      return e;
    };
    routesRef.current.innerHTML = "";
    const S = scale || 1;
    const a = OFFICES[active];
    const ap = proj(a);
    let n = 0;
    OFFICES.forEach((o, i) => {
      if (i === active) return;
      const b = proj(o);
      const mx = (ap.x + b.x) / 2, my = (ap.y + b.y) / 2;
      const dx = b.x - ap.x, dy = b.y - ap.y, k = 0.22;
      let cx = mx - dy * k, cy = my + dx * k;
      if (cy > my) { cx = mx + dy * k; cy = my - dx * k; }
      const dStr = `M${ap.x.toFixed(1)} ${ap.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      const id = "rt" + i;
      const delay = 0.9 + n * 0.14;
      const base = svgEl("path", { id, d: dStr, fill: "none", stroke: "#4FA3FF", "stroke-opacity": "0.35", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3) });
      const flow = svgEl("path", { d: dStr, fill: "none", stroke: "#8CC4FF", "stroke-opacity": "0.9", "stroke-linecap": "round", "stroke-width": (1.6 / S).toFixed(3), "stroke-dasharray": `${(3 / S).toFixed(2)} ${(5 / S).toFixed(2)}`, opacity: "0" });
      routesRef.current.append(base, flow);
      const len = base.getTotalLength();
      base.style.strokeDasharray = len;
      base.style.strokeDashoffset = len;
      base.getBoundingClientRect();
      base.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.6,0,.2,1) ${delay}s`;
      requestAnimationFrame(() => { base.style.strokeDashoffset = 0; });
      setTimeout(() => {
        flow.style.opacity = "1";
        flow.style.animation = "flow 1.2s linear infinite";
      }, (delay + 1) * 1000);

      if (!reduce) {
        const km0 = hav(a, o);
        const trav = svgEl("circle", { r: (2.8 / S).toFixed(2), fill: "#D6EBFF", opacity: "0" });
        const mot = svgEl("animateMotion", { dur: (2.2 + km0 / 1400).toFixed(2) + "s", repeatCount: "indefinite", rotate: "auto" });
        const mp = svgEl("mpath");
        mp.setAttribute("href", "#" + id);
        mp.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + id);
        mot.appendChild(mp);
        trav.appendChild(mot);
        routesRef.current.appendChild(trav);
        setTimeout(() => trav.setAttribute("opacity", "1"), (delay + 1) * 1000);
      }

      const lx = 0.25 * ap.x + 0.5 * cx + 0.25 * b.x;
      const ly = 0.25 * ap.y + 0.5 * cy + 0.25 * b.y;
      const km = Math.round(hav(a, o) / 10) * 10;
      const lg = svgEl("g", { transform: `translate(${lx.toFixed(1)} ${ly.toFixed(1)}) scale(${(1 / S).toFixed(4)})`, opacity: "0" });
      lg.style.transition = "opacity .5s";
      lg.innerHTML = `<rect x="-34" y="-10" width="68" height="20" rx="10" fill="#0B1B30" stroke="#2A5283"/><text y="3.5" fill="#A9C6EA" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">~${km.toLocaleString("en-IN")} km</text>`;
      routesRef.current.appendChild(lg);
      setTimeout(() => (lg.style.opacity = "1"), (delay + 0.9) * 1000);
      n++;
    });
  }, [active, scale, reduce]);

  const renderPins = useCallback(() => {
    if (!pinsRef.current) return;
    const NS = "http://www.w3.org/2000/svg";
    pinsRef.current.innerHTML = "";
    OFFICES.forEach((o, i) => {
      const p = proj(o);
      const lw = Math.round(o.city.length * 7.1 + 26);
      const lx = o.code === "NMB" ? -(lw + 14) : 14;
      const isAct = i === active && !overview;
      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", "pin" + (isAct ? " active" : ""));
      g.setAttribute("transform", `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})`);
      g.setAttribute("tabindex", "0");
      g.setAttribute("role", "button");
      g.setAttribute("aria-label", `${o.city} office`);
      g.style.cursor = "pointer";
      g.innerHTML = `<g class="inner" style="transition:transform 1.4s cubic-bezier(0.65,0,0.2,1)">
        <g class="fx" style="opacity:${isAct ? 1 : 0};transition:opacity .6s">
          <circle r="46" fill="url(#glow)"/>
          <path d="M0 0 L64 0 A64 64 0 0 0 45.3 -45.3 Z" fill="url(#sweepGrad)" style="transform-origin:0 0;animation:spin 3.6s linear infinite"/>
          <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) infinite"/>
          <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) .8s infinite"/>
          <circle class="ring" r="12" fill="none" stroke="#5AB0FF" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:pulseRing 2.4s cubic-bezier(0.2,0.6,0.3,1) 1.6s infinite"/>
          <rect x="-1.5" y="-78" width="3" height="78" rx="1.5" fill="url(#beamGrad)" style="transform-box:fill-box;transform-origin:bottom;transform:scaleY(${isAct ? 1 : 0});transition:transform .9s cubic-bezier(.22,.8,.18,1) .5s"/>
        </g>
        <circle class="burst" r="10" fill="none" stroke="#fff" stroke-width="2" opacity="0" style="transform-box:fill-box;transform-origin:center"/>
        <circle class="dot" r="${isAct ? 9 : 6}" fill="${isAct ? '#2F8CFF' : '#8DB8EA'}" stroke="#fff" stroke-width="2.5" style="transition:r .4s,fill .4s"/>
        <circle r="2.6" fill="#fff"/>
        <g class="chip" transform="translate(${lx} -12)">
          <rect width="${lw}" height="24" rx="12" fill="${isAct ? '#0062D6' : 'rgba(7,21,42,0.9)'}" stroke="${isAct ? '#5AA8FF' : '#2A4F7C'}" style="transition:fill .4s,stroke .4s"/>
          <text x="13" y="16" fill="${isAct ? '#fff' : '#C4D6EE'}" font-family="DM Sans, sans-serif" font-size="12" font-weight="700" style="transition:fill .4s">${o.city}</text>
        </g>
      </g>`;
      g.addEventListener("click", () => { setActive(i); setOverview(false); });
      g.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); setOverview(false); }
      });
      pinsRef.current.appendChild(g);
    });
  }, [active, overview]);

  useEffect(() => { renderPins(); }, [active, overview, renderPins]);

  useEffect(() => {
    camera();
    buildRoutes();
    if (tabButtonsRef.current[active] && tabIndRef.current) {
      const t = tabButtonsRef.current[active];
      tabIndRef.current.style.width = t.offsetWidth + "px";
      tabIndRef.current.style.transform = `translateX(${t.offsetLeft}px)`;
      tabIndRef.current.style.opacity = overview ? "0" : "1";
    }
    if (overview) {
      setHudVerb("NETWORK");
      setFlapText("5 OFFICES");
      setHudCoords(`ZOOM ${scale.toFixed(1)}× · IN + AE · IST / GST`);
    } else {
      setHudVerb("CONNECTING");
      setFlapText(OFFICES[active].city.toUpperCase());
      setHudCoords(`${OFFICES[active].lat.toFixed(4)}° N · ${OFFICES[active].lon.toFixed(4)}° E · ZOOM ${scale.toFixed(1)}×`);
    }
  }, [active, overview, camera, buildRoutes, scale]);

  useEffect(() => {
    const onResize = () => { camera(); buildRoutes(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [camera, buildRoutes]);

  useEffect(() => {
    const wrap = mapWrapRef.current, map = mapRef.current;
    if (!wrap || !map || reduce || !window.matchMedia("(hover: hover)").matches) return;
    const onMove = (e) => {
      const r = map.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      map.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
    };
    const onLeave = () => (map.style.transform = "");
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => { wrap.removeEventListener("mousemove", onMove); wrap.removeEventListener("mouseleave", onLeave); };
  }, [reduce]);

  useEffect(() => {
    const t = setTimeout(() => { setActive(0); setOverview(false); }, reduce ? 0 : 2300);
    return () => clearTimeout(t);
  }, [reduce]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", service: "", message: "" };
    let isValid = true;
    if (!formData.name.trim()) { newErrors.name = "Please enter your name."; isValid = false; }
    if (!formData.email.trim()) { newErrors.email = "Please enter your email address."; isValid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = "Please enter a valid email address."; isValid = false; }
    if (chips.length === 0 && !formData.service) { newErrors.service = "Please select a service."; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = "Please write your message."; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    if (overview) setOverview(false);

    const serviceValue = chips.length > 0 ? chips.join(", ") : formData.service;

    try {
      const { error } = await supabase.from("contacts").insert([{
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone,
        service: serviceValue,
        message: formData.message.trim(),
      }]);
      if (error) throw error;

      const pin = pinsRef.current?.querySelectorAll(".pin")[active];
      if (pin) {
        pin.classList.remove("landed");
        void pin.getBoundingClientRect();
        pin.classList.add("landed");
      }
      setTimeout(() => {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setErrors({ name: "", email: "", phone: "", service: "", message: "" });
        setChips([]);
      }, 700);
    } catch (error) {
      console.error("Supabase Error:", error);
      setErrors((prev) => ({ ...prev, message: "Failed to send message. Please try again later." }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", e.clientX - r.left + "px");
    card.style.setProperty("--my", e.clientY - r.top + "px");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentOffice.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) { /* noop */ }
  };

  return (
    <main className="flex-grow overflow-hidden bg-gradient-to-b from-[#E6F8FF] to-white">

      {/* INLINE KEYFRAMES & UTILITIES */}
      <style>{`
        @keyframes chIn { to { opacity: 1; transform: none; } }
        @keyframes wipe { to { clip-path: inset(0 0 0 0 round 24px); } }
        @keyframes scan { from { top: -120px; } to { top: 110%; } }
        @keyframes pulseRing { 0% { transform: scale(.4); opacity: .75; } 100% { transform: scale(3.4); opacity: 0; } }
        @keyframes burst { 0% { transform: scale(.5); opacity: 1; } 100% { transform: scale(5); opacity: 0; } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes flow { to { stroke-dashoffset: -20; } }
        @keyframes blink { 50% { opacity: .25; } }
        @keyframes flip { 0% { transform: scaleY(1); } 50% { transform: scaleY(.1); } 100% { transform: scaleY(1); } }
        @keyframes passIn { from { opacity: 0; transform: translateY(18px) rotate(-1.5deg) scale(.97); } to { opacity: 1; transform: none; } }
        @keyframes shake { 10%,90% { transform: translateX(-2px); } 20%,80% { transform: translateX(4px); } 30%,50%,70% { transform: translateX(-7px); } 40%,60% { transform: translateX(7px); } }
        @keyframes pop { 0% { transform: scale(.5); opacity: 0; } 60% { transform: scale(1.08); opacity: 1; } 100% { transform: none; opacity: 1; } }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        .ch { display: inline-block; opacity: 0; transform: translateY(60%) rotate(8deg); animation: chIn 0.9s cubic-bezier(0.22,0.8,0.18,1) forwards; }
        .pin.landed .burst { animation: burst 1s ease-out; }
        .fl input:focus + label, .fl input:not(:placeholder-shown) + label,
        .fl textarea:focus + label, .fl textarea:not(:placeholder-shown) + label {
          transform: translateY(-9px) scale(0.78);
          color: #0062D6;
          font-weight: 600;
        }
        .fl input::placeholder, .fl textarea::placeholder { color: transparent; }
        .fl input:focus::placeholder, .fl textarea:focus::placeholder { color: #9AA5B8; }
        .land-label { fill: #6F8FB8; font-family: 'JetBrains Mono', monospace; font-size: 7px; letter-spacing: 2px; text-anchor: middle; }
        .land-label.sea { fill: #4C6C95; font-style: italic; }
        /* Hide scrollbar for tab bar */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ============================================================
          HERO SECTION
         ============================================================ */}
      <section
        className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 border-0 outline-none"
        style={{ background: 'linear-gradient(135deg, #001E3C 0%, #003F7D 45%, #001E3C 100%)' }}
      >
        {/* ============== PARTICLE LAYER ============== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Central glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(1, 173, 240, 0.12) 0%, transparent 55%)' }}
          />
          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
          />

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

          {/* Rotating wireframe SVG */}
          <motion.svg
            className="absolute top-[8%] right-[18%] w-[450px] h-[450px] opacity-70 hidden sm:block"
            viewBox="0 0 500 500" fill="none"
            style={{ filter: 'drop-shadow(0 0 10px rgba(1, 173, 240, 0.25))' }}
            animate={{ y: [0, 20, 0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <defs>
              <linearGradient id="cuWireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00C6FB" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#01ADF0" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00C6FB" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <motion.polygon
              points="250,40 460,250 250,460 40,250"
              stroke="url(#cuWireGrad)" strokeWidth="1.2" fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '250px 250px' }}
            />
            <motion.polygon
              points="250,80 420,250 250,420 80,250"
              stroke="url(#cuWireGrad)" strokeWidth="0.8" fill="none" opacity="0.6"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '250px 250px' }}
            />
            <line x1="250" y1="40" x2="250" y2="460" stroke="url(#cuWireGrad)" strokeWidth="0.6" opacity="0.5" />
            <line x1="40" y1="250" x2="460" y2="250" stroke="url(#cuWireGrad)" strokeWidth="0.6" opacity="0.5" />
          </motion.svg>

          {/* Floating contact glyphs (@ ✉ ☎ ✆ ⌘ ✧ ✦ ☏) */}
          {HERO_GLYPHS.map((glyph, i) => {
            const top = 8 + ((i * 41) % 84);
            const left = 4 + ((i * 59) % 90);
            const size = 16 + (i % 4) * 8;
            const dur = 6 + (i % 5) * 1.6;
            const delay = (i % 6) * 0.8;
            return (
              <motion.span
                key={`cg-${i}`}
                className="absolute select-none font-['Space_Grotesk'] font-bold"
                style={{
                  top: `${top}%`, left: `${left}%`,
                  fontSize: `${size}px`,
                  color: 'rgba(143,203,242,0.5)',
                  textShadow: '0 0 14px rgba(1,173,240,0.65)',
                }}
                animate={{
                  y: [0, -22, 0, 18, 0],
                  x: [0, 12, 0, -10, 0],
                  opacity: [0.15, 0.8, 0.15],
                  rotate: [0, 8, 0, -8, 0],
                }}
                transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
              >
                {glyph}
              </motion.span>
            );
          })}

          {/* Sparkle dust */}
          {[...Array(16)].map((_, i) => {
            const size = Math.random() * 3 + 2;
            return (
              <motion.div
                key={`cs-${i}`}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`, height: `${size}px`,
                  background: 'rgba(180, 230, 255, 0.9)',
                  boxShadow: `0 0 ${size * 2}px rgba(120, 210, 255, 0.6)`,
                }}
                animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.3, 1] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity, delay: Math.random() * 3,
                  ease: 'easeInOut',
                }}
              />
            );
          })}

          {/* Orbiting contact-themed chips */}
          <motion.div
            className="absolute top-1/2 left-1/2 hidden lg:block"
            style={{ width: 720, height: 720, translateX: '-50%', translateY: '-50%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          >
            {HERO_TAGS.map((label, i) => {
              const angle = (i * 360) / HERO_TAGS.length;
              const rad = (angle * Math.PI) / 180;
              const x = 360 + Math.cos(rad) * 360;
              const y = 360 + Math.sin(rad) * 360;
              return (
                <motion.div
                  key={`ctag-${label}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.14em] text-[#B8E2FF] backdrop-blur-sm"
                  style={{ left: x, top: y }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
                >
                  {label}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ============== CONTENT ============== */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="sec-badge inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Contact Us
            </motion.span>

            <motion.h2
              className="sec-h2 text-white mt-1.5 sm:mt-2 leading-tight"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              Let&apos;s Connect{' '}
              <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
                Worldwide
              </span>
            </motion.h2>

            <motion.p
              className="sec-p text-white/80 mt-1 max-w-2xl mx-auto"
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.35)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              Five offices across India and the UAE. One team ready to answer your questions,
              discuss your ideas, and start your next big project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 [background-image:radial-gradient(#D8E0EC_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)] pointer-events-none" />

        <div className="relative max-w-[1248px] mx-auto z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.span
              className="sec-badge inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Let&apos;s Talk!
            </motion.span>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Contact <span style={{ color: '#008df1' }}>Us</span>
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Benefit of the society where we operate. A success website obviously needs great.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-8 items-start">

            {/* LEFT (MAP) */}
            <div className="flex flex-col gap-4 min-w-0">

              {/* Tabs Container - Responsive Scrollable on Mobile */}
              <div className="relative flex overflow-x-auto md:grid md:grid-cols-5 gap-1.5 p-1.5 bg-white border border-[#E3E8F1] rounded-[18px] shadow-sm scrollbar-hide" role="tablist">
                <span ref={tabIndRef} className="absolute top-1.5 bottom-1.5 left-0 rounded-[13px] bg-[#0062D6] shadow-[0_10px_22px_-8px_rgba(0,98,214,0.6)] transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.22,0.8,0.18,1)] opacity-0" aria-hidden="true" />
                {OFFICES.map((o, i) => {
                  const isActive = i === active && !overview;
                  return (
                    <button
                      key={o.code}
                      ref={(el) => (tabButtonsRef.current[i] = el)}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={i === active ? 0 : -1}
                      onClick={() => { setActive(i); setOverview(false); }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                          e.preventDefault();
                          const n = (i + (e.key === "ArrowRight" ? 1 : -1) + OFFICES.length) % OFFICES.length;
                          setActive(n); setOverview(false);
                          tabButtonsRef.current[n]?.focus();
                        }
                      }}
                      // 👇 CHANGED: w-[130px] to w-[155px] to fix "Navi Mumbai" cut off
                      className={`relative z-10 flex shrink-0 w-[155px] md:w-auto items-center gap-2 md:gap-2.5 min-h-[58px] px-3 rounded-[13px] text-left transition-colors duration-500 ${isActive ? "text-white" : "text-[#0B1220]"}`}
                    >
                      <span className={`flex-none w-8 h-8 rounded-[10px] grid place-items-center text-xs font-semibold transition-all duration-500 ${isActive ? "bg-white/20 text-white" : "bg-[#EEF2F8] text-[#3C4A63]"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        {o.num}
                      </span>
                      <span className="flex flex-col min-w-0">
                        <span className="text-[13px] md:text-[14.5px] font-bold whitespace-nowrap">{o.city}</span>
                        <span className={`text-[10px] md:text-[11.5px] font-medium transition-colors duration-500 ${isActive ? "text-white/80" : "text-[#56627A]"}`}>{o.country}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <div ref={mapWrapRef} className="relative" style={{ perspective: "1400px" }}>
                <div
                  ref={mapRef}
                  className="relative h-[420px] sm:h-[520px] md:h-[640px] rounded-[24px] overflow-hidden bg-[#07152A] shadow-[0_34px_70px_-28px_rgba(7,21,42,0.65)]"
                  style={{
                    clipPath: "inset(0 0 100% 0 round 24px)",
                    animation: "wipe 1.2s cubic-bezier(0.7,0,0.2,1) 0.6s forwards",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.5s cubic-bezier(0.22,0.8,0.18,1)",
                  }}
                >
                  <svg viewBox="0 0 800 632" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full block">
                    <defs>
                      <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.05" fill="#28507E" /></pattern>
                      <pattern id="dotsHi" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.25" fill="#4C8BD6" /></pattern>
                      <radialGradient id="glow"><stop offset="0" stopColor="#2F8CFF" stopOpacity="0.55" /><stop offset="1" stopColor="#2F8CFF" stopOpacity="0" /></radialGradient>
                      <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5AB0FF" stopOpacity="0" /><stop offset="1" stopColor="#5AB0FF" stopOpacity="0.38" /></linearGradient>
                      <linearGradient id="beamGrad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#7CC0FF" stopOpacity="0.9" /><stop offset="1" stopColor="#7CC0FF" stopOpacity="0" /></linearGradient>
                      <path id="landPath" d={LAND_PATH} />
                    </defs>
                    <rect x="-2000" y="-2000" width="5000" height="5000" fill="#07152A" />
                    <g ref={camRef} style={{ transformOrigin: "0 0", transition: "transform 1.4s cubic-bezier(0.65,0,0.2,1)" }}>
                      <g fill="none" stroke="#7FA8DC" strokeOpacity="0.08" vectorEffect="non-scaling-stroke">
                        {[-120,-60,0,60,120,180,240,300,360,420,480,540,600,660,720,780,840,900].map((x) => (<path key={"v" + x} d={`M${x} -200V900`} />))}
                        {[696,636,576,516,456,396,336,276,216,156,96,36,-24,-84].map((y) => (<path key={"h" + y} d={`M-200 ${y}H1400`} />))}
                      </g>
                      <use href="#landPath" fill="#0D213A" />
                      <use href="#landPath" fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
                      <path d={LAND_PATH_2} fill="url(#dots)" stroke="#2C5889" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
                      <path d={LAND_PATH_3} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
                      <path d={LAND_PATH_4} fill="url(#dotsHi)" stroke="#5B9BE6" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
                      <g>
                        <text className="land-label" x="582" y="186">INDIA</text>
                        <text className="land-label sea" x="402" y="276">ARABIAN SEA</text>
                        <text className="land-label sea" x="696" y="270">BAY OF BENGAL</text>
                        <text className="land-label sea" x="504" y="440">INDIAN OCEAN</text>
                        <text className="land-label" x="330" y="212">OMAN</text>
                        <text className="land-label" x="180" y="190">SAUDI ARABIA</text>
                        <text className="land-label" x="452" y="110">PAKISTAN</text>
                        <text className="land-label" x="330" y="84">IRAN</text>
                        <text className="land-label" x="420" y="48">AFGHANISTAN</text>
                        <text className="land-label" x="648" y="104">NEPAL</text>
                        <text className="land-label" x="204" y="262">YEMEN</text>
                        <text className="land-label" x="612" y="398">SRI LANKA</text>
                      </g>
                      <g ref={routesRef} />
                      <g ref={pinsRef} />
                    </g>
                  </svg>

                  <div className="absolute left-0 right-0 h-[120px] -top-[120px] pointer-events-none bg-gradient-to-b from-transparent via-[rgba(90,176,255,0.10)] to-transparent" style={{ animation: "scan 1.6s ease-in-out 1.3s 1 forwards" }} aria-hidden="true" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 70% at 60% 42%,rgba(7,21,42,0) 55%,rgba(3,10,22,0.62) 100%)" }} aria-hidden="true" />

                  <div className="absolute top-4 left-4 md:top-5 md:left-5 flex flex-col px-3.5 py-2.5 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[11.5px] leading-[1.7] text-[#C4D6EE]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <span className="flex items-center gap-2 tracking-[0.06em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3FD68F] animate-pulse" />
                      <span>{hudVerb}</span>{" "}
                      <span className="inline-flex gap-px">
                        {[...(flapText || "")].map((ch, i) => (
                          <span key={i} className={`inline-block min-w-[0.72em] text-center px-px rounded-sm font-semibold ${ch === " " ? "bg-transparent" : "bg-white/[0.07] text-[#E8F1FC]"}`}>{ch}</span>
                        ))}
                      </span>
                    </span>
                    <span className="text-[#7F9CC2]">{hudCoords}</span>
                  </div>

                  <button
                    type="button"
                    className="absolute top-4 right-4 md:top-5 md:right-5 h-11 px-4 flex items-center gap-2 rounded-xl bg-[rgba(7,21,42,0.74)] backdrop-blur-md border border-[rgba(120,170,230,0.2)] text-[#E3EDFA] text-[13px] font-semibold hover:bg-[rgba(20,44,74,0.92)] hover:border-[rgba(120,170,230,0.45)] transition-colors"
                    aria-pressed={overview}
                    onClick={() => setOverview((v) => !v)}
                  >
                    <svg className={`transition-transform duration-500 ${overview ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l9 5-9 5-9-5 9-5z" />
                      <path d="M3 13l9 5 9-5" />
                    </svg>
                    <span>{overview ? "Focus office" : "All offices"}</span>
                  </button>

                  <div className="absolute right-4 bottom-4 md:right-5 md:bottom-5 flex flex-col items-end gap-1.5 text-[10.5px] text-[#8FA9CC] pointer-events-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <span>200 km</span>
                    <b id="scaleBar" className="block h-1.5 border-[1.5px] border-[#8FA9CC] border-t-0 transition-[width] duration-[1.4s] [transition-timing-function:cubic-bezier(0.65,0,0.2,1)]" />
                    <span className="text-[#6A86AD]">Illustrative map</span>
                  </div>

                  {!overview && (
                    <article key={active} className="absolute left-4 bottom-4 right-4 md:right-auto md:left-5 md:bottom-5 md:w-[392px] grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_104px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] text-[#0B1220]" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
                      <div className="p-4 md:p-[20px_18px_18px_20px] flex flex-col gap-3 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="whitespace-nowrap text-[11.5px] font-semibold text-[#0062D6] tracking-[0.06em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                            {currentOffice.num}/05 · {currentOffice.country.toUpperCase()}
                          </span>
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${isOpen ? "bg-[#ECFDF3] text-[#067647]" : "bg-[#FFF4E5] text-[#93370D]"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isOpen ? "bg-[#12B76A]" : "bg-[#F79009]"}`} />
                            <span>{isOpen ? "Open now" : "Closed"}</span>
                          </span>
                        </div>
                        <h2 className="m-0 text-2xl md:text-3xl leading-none font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{currentOffice.city}</h2>
                        <p className="m-0 text-[13px] md:text-[13.5px] leading-[1.5] text-[#56627A]">{currentOffice.address}</p>
                        <div className="flex gap-2 mt-0.5">
                          <a className="flex-1 h-11 flex items-center justify-center gap-2 rounded-xl bg-[#0062D6] text-white text-[13.5px] font-semibold no-underline hover:bg-[#004FAD] hover:-translate-y-px transition-all [&:hover_svg]:translate-x-0.5 [&:hover_svg]:-translate-y-0.5" href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(currentOffice.address)} target="_blank" rel="noopener noreferrer">
                            <svg className="transition-transform duration-300" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z" /></svg>
                            Get directions
                          </a>
                          <button type="button" onClick={handleCopy} className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg>
                            <span>{copied ? "Copied" : "Copy"}</span>
                          </button>
                        </div>
                      </div>
                      <div className="relative border-t-2 sm:border-t-0 sm:border-l-2 border-dashed border-[#D5DDEA] py-3 sm:py-[18px] px-4 sm:px-2.5 flex flex-row sm:flex-col items-center justify-between gap-2.5 bg-[#F7F9FD] rounded-b-[20px] sm:rounded-r-[20px] sm:rounded-bl-none">
                        <div className="hidden sm:block absolute -left-[11px] -top-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
                        <div className="hidden sm:block absolute -left-[11px] -bottom-2.5 w-5 h-5 rounded-full bg-[#07152A]" />
                        <div className="text-3xl font-extrabold leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                          {currentOffice.code}
                          <small className="block mt-1 text-[9.5px] font-medium tracking-[0.12em] text-[#56627A] text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>OFFICE</small>
                        </div>
                        <svg className="w-[52px] h-[52px] sm:w-[62px] sm:h-[62px]" viewBox="0 0 62 62">
                          <circle cx="31" cy="31" r="29" fill="#fff" stroke="#DCE3EE" strokeWidth="2" />
                          <g stroke="#B7C3D6" strokeWidth="2" strokeLinecap="round"><path d="M31 6v4M31 52v4M6 31h4M52 31h4" /></g>
                          <line id="hH" x1="31" y1="31" x2="31" y2="17" stroke="#0B1220" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
                          <line id="hM" x1="31" y1="31" x2="31" y2="11" stroke="#0B1220" strokeWidth="2.2" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.5s cubic-bezier(0.4,2.2,0.5,1)" }} />
                          <line id="hS" x1="31" y1="35" x2="31" y2="9" stroke="#0A7CFF" strokeWidth="1.4" strokeLinecap="round" style={{ transformOrigin: "31px 31px", transition: "transform 0.25s cubic-bezier(0.4,2.4,0.5,1)" }} />
                          <circle cx="31" cy="31" r="2.6" fill="#0A7CFF" />
                        </svg>
                        <div className="text-[11px] sm:text-[12.5px] font-semibold text-center leading-[1.3] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          <span>{clockText}</span>
                          <small className="block text-[9.5px] font-medium text-[#56627A] tracking-[0.08em]">{currentOffice.tzs} · {currentOffice.tz === "Asia/Dubai" ? "GMT+4" : "GMT+5:30"}</small>
                        </div>
                      </div>
                    </article>
                  )}

                  {overview && (
                    <article className="absolute left-4 bottom-4 right-4 md:right-auto md:left-5 md:bottom-5 md:w-[392px] p-4 md:p-[18px_12px_12px] rounded-[20px] bg-white shadow-[0_26px_54px_-18px_rgba(0,0,0,0.55)] flex flex-col gap-1" style={{ animation: "passIn 0.7s cubic-bezier(0.22,0.8,0.18,1) both" }}>
                      <header className="flex justify-between items-baseline px-2 pb-1.5">
                        <h2 className="m-0 text-lg md:text-[22px] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>5 offices, 2 countries</h2>
                        <span className="text-[11.5px] text-[#56627A]">Local time</span>
                      </header>
                      <div className="flex flex-col gap-1">
                        {overviewRows.map((row) => (
                          <button key={row.i} type="button" className="w-full flex items-center gap-2 md:gap-3 h-11 px-2 border-0 rounded-[10px] bg-transparent text-left hover:bg-[#F1F5FC] transition-colors" onClick={() => { setActive(row.i); setOverview(false); }}>
                            <span className="text-[11.5px] font-semibold text-[#0062D6]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.o.num}</span>
                            <span className="flex-1 text-xs md:text-sm font-semibold">{row.o.city} <span className="font-medium text-[#56627A]">· {row.o.country}</span></span>
                            <i className="w-[7px] h-[7px] rounded-full" style={{ background: row.open ? "#12B76A" : "#F79009" }} />
                            <span className="text-[11px] md:text-[13px] tabular-nums" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{row.hm} {row.o.tzs}</span>
                          </button>
                        ))}
                      </div>
                    </article>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT (FORM) */}
            <aside
              className="relative rounded-[24px] bg-white border border-[#E6EBF3] shadow-[0_1px_2px_rgba(16,24,40,0.04),0_28px_56px_-18px_rgba(16,24,40,0.16)] p-5 sm:p-8 min-h-0 md:min-h-[712px] flex flex-col overflow-hidden"
              onMouseMove={handleFormMove}
              style={{
                animation: "rise 0.9s cubic-bezier(0.22,0.8,0.18,1) 0.7s both",
                backgroundImage: "radial-gradient(420px circle at var(--mx,50%) var(--my,-20%), rgba(10,124,255,0.07), transparent 60%)",
              }}
            >
              <div className="relative">
                <div className="mb-[22px]">
                  <h2 id="form-title" className="m-0 mb-1 text-2xl md:text-[28px] leading-[1.15] font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Send us a message</h2>
                  <p className="m-0 text-sm text-[#56627A]">We'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className={`flex-col gap-4 ${isSuccess ? "hidden" : "flex"}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className={`fl relative ${errors.name ? "invalid" : ""}`}>
                      <input id="fName" type="text" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} name="name"
                        className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.name ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
                      <label htmlFor="fName" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Name</label>
                    </div>
                    <div className={`fl relative ${emailValid ? "valid" : ""} ${errors.email ? "invalid" : ""}`}>
                      <input id="fEmail" type="email" autoComplete="email" placeholder="you@company.com" value={formData.email} onChange={(e) => { handleChange(e); setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.target.value.trim())); }} name="email"
                        className={`w-full h-[54px] pt-[22px] pb-1.5 px-3.5 rounded-xl border-[1.5px] text-[14.5px] outline-none transition-all ${errors.email ? "border-[#F3B4AE] bg-[#FFF8F7]" : "border-[#E1E7F0] bg-[#F6F8FC] hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)]"}`} />
                      <label htmlFor="fEmail" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Email</label>
                      <svg className={`absolute right-3 top-[19px] transition-all ${emailValid ? "opacity-100 scale-100" : "opacity-0 scale-[0.3] -rotate-30"}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                    </div>
                  </div>

                  <div className="flex items-stretch h-[54px] border-[1.5px] border-[#E1E7F0] rounded-xl bg-[#F6F8FC] hover:border-[#C5D0E0] focus-within:border-[#0A7CFF] focus-within:bg-white focus-within:ring-4 focus-within:ring-[rgba(10,124,255,0.14)] transition-all">
                    <select aria-label="Country code" defaultValue="+91" className="border-0 bg-transparent pl-3.5 pr-1 text-[13.5px] font-semibold cursor-pointer outline-none" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      <option value="+91">IN +91</option>
                      <option value="+971">AE +971</option>
                    </select>
                    <span className="w-px mx-1 my-3.5 bg-[#DCE3EE]" />
                    <div className="fl relative flex-1">
                      <input id="fPhone" type="tel" autoComplete="tel-national" placeholder="98765 43210" value={formData.phone} onChange={handleChange} name="phone" maxLength={10} className="w-full h-full border-0 bg-transparent outline-none text-[14.5px] px-3 pt-[22px] pb-1.5" />
                      <label htmlFor="fPhone" className="absolute left-3 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Phone (optional)</label>
                    </div>
                  </div>

                  <fieldset className="m-0 p-0 border-0">
                    <legend className="block mb-2.5 text-[13px] font-semibold text-[#2A3650]">What can we help with?</legend>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => {
                        const isOn = chips.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            aria-pressed={isOn}
                            onClick={() =>
                              setChips((prev) =>
                                prev.includes(s) ? prev.filter((c) => c !== s) : [...prev, s]
                              )
                            }
                            className={`h-9 px-3.5 inline-flex items-center rounded-full border-[1.5px] text-[13px] font-semibold transition-all active:scale-95 ${
                              isOn
                                ? "bg-[#0062D6] border-[#0062D6] text-white gap-1.5"
                                : "bg-white border-[#DCE3EE] text-[#2A3650] hover:border-[#0A7CFF]"
                            }`}
                          >
                            <svg className={`transition-all duration-200 ${isOn ? "w-3.5" : "w-0"}`} height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                            <span>{s}</span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="fl relative">
                    <textarea id="fMsg" maxLength={500} placeholder="A few lines about your project, timeline or budget…" value={formData.message} onChange={handleChange} name="message"
                      className="w-full h-28 pt-[26px] pb-1.5 px-3.5 rounded-xl border-[1.5px] border-[#E1E7F0] bg-[#F6F8FC] text-[14.5px] outline-none resize-none leading-[1.5] block hover:border-[#C5D0E0] focus:border-[#0A7CFF] focus:bg-white focus:ring-4 focus:ring-[rgba(10,124,255,0.14)] transition-all" />
                    <label htmlFor="fMsg" className="absolute left-3.5 top-[17px] text-[14.5px] text-[#7A869C] pointer-events-none origin-left transition-all">Message</label>
                    <span className="absolute right-3 bottom-2.5 text-[11px] text-[#6B778C]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{formData.message.length}/500</span>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-1">
                    {errors.message && (<p className="m-0 text-[13px] font-medium text-[#B42318]" role="alert">{errors.message}</p>)}
                    <p className="m-0 flex items-center gap-2 text-[13px] text-[#56627A]">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                      <span>Flying to our <strong className="text-[#0B1220]">{currentOffice.city}</strong> team</span>
                    </p>
                    <button type="submit" disabled={isLoading}
                      className={`relative h-14 flex items-center justify-center gap-2.5 border-0 rounded-[14px] bg-[#0062D6] text-white text-[15.5px] font-bold shadow-[0_12px_26px_-10px_rgba(0,98,214,0.6)] overflow-hidden group/send hover:bg-[#0058C2] hover:shadow-[0_18px_34px_-12px_rgba(0,98,214,0.7)] transition-all ${isLoading ? "opacity-70 cursor-wait" : ""}`}>
                      <span className="relative z-10">{isLoading ? "Taking off…" : "Send message"}</span>
                      <svg className="relative z-10 transition-transform group-hover/send:translate-x-0.5 group-hover/send:-translate-y-0.5 group-hover/send:-rotate-8" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></svg>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/28 to-transparent -translate-x-full group-hover/send:translate-x-full transition-transform duration-700 pointer-events-none" />
                    </button>
                    <div className="flex justify-center gap-4.5 text-xs font-medium text-[#56627A]">
                      <span className="inline-flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" /></svg>
                        Secure
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                        Encrypted
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3l18 18" /><path d="M10.6 5.1A10 10 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.2 2.3-2.4 3.5M6.5 6.6C4.4 8 2.9 10 2 12c1 2.5 5 7 10 7 1.7 0 3.3-.5 4.6-1.3" /></svg>
                        Private
                      </span>
                    </div>
                  </div>
                </form>

                {isSuccess && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center gap-4.5" aria-live="polite">
                    <div className="w-[92px] h-[92px] rounded-full bg-[#E6F0FF] grid place-items-center" style={{ animation: "pop 0.6s cubic-bezier(0.3,1.4,0.5,1) both" }}>
                      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#0062D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeDasharray="24" strokeDashoffset="24" style={{ animation: "draw 0.5s ease 0.35s forwards" }} />
                      </svg>
                    </div>
                    <h2 className="m-0 text-3xl font-bold tracking-[-0.02em]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.3s both" }}>
                      Landed in {currentOffice.city}
                    </h2>
                    <p className="m-0 max-w-[300px] text-[14.5px] leading-[1.55] text-[#56627A]" style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.42s both" }}>
                      Thanks, {formData.name?.split(" ")[0] || "there"}. Our {currentOffice.city} team will reply as soon as possible.
                    </p>
                    <button type="button" className="h-11 px-3.5 flex items-center gap-2 rounded-xl bg-white border-[1.5px] border-[#DCE3EE] text-[13.5px] font-semibold hover:bg-[#EEF4FF] hover:border-[#B7D0F5] transition-colors" onClick={() => setIsSuccess(false)} style={{ animation: "rise 0.6s cubic-bezier(0.22,0.8,0.18,1) 0.54s both" }}>
                      Send another message
                    </button>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;