// /* ============================================================
//    CoderBox · Combined Section
//    - PART 1: Growth Plans (16 proposals · 3D coverflow + cube-roll sheet)
//    - PART 2: Client Case Study Drum (below, scroll-driven roller)
//    ============================================================ */
// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
//   forwardRef,
//   Fragment,
// } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// /* ============================================================
//    PART 1 — GROWTH PLANS
//    ============================================================ */
// /* ---------- SIX SERVICE LEVERS ---------- */
// const SV = [
//   { k: 'web',  n: 'Web Development',       c: '#3d8bff' },
//   { k: 'seo',  n: 'SEO',                   c: '#1fb58f' },
//   { k: 'smm',  n: 'Social Media',          c: '#e1306c' },
//   { k: 'lead', n: 'Lead Generation',       c: '#f59e0b' },
//   { k: 'perf', n: 'Performance Marketing', c: '#7c5cff' },
//   { k: 'app',  n: 'App + WhatsApp API',    c: '#16a34a' },
// ];

// /* ---------- HEADER SERVICE CHIPS ---------- */
// const CHIPS = [
//   { n: 'Web Development',             c: '#3d8bff' },
//   { n: 'SEO',                         c: '#1fb58f' },
//   { n: 'Social Media Marketing',      c: '#e1306c' },
//   { n: 'Lead Generation',             c: '#f59e0b' },
//   { n: 'Performance Marketing',       c: '#7c5cff' },
//   { n: 'Mobile App + WhatsApp API',   c: '#25d366' },
// ];

// /* ---------- INDUSTRY COLOR THEMES ---------- */
// const IND = {
//   health:  { t1: '#10b3a8', t2: '#0b5f6b', acc: '#16c2b3', acc2: '#8ff0e6' },
//   d2c:     { t1: '#34c07a', t2: '#136b45', acc: '#2fbf73', acc2: '#a6f0c9' },
//   realty:  { t1: '#d8a741', t2: '#6b4a12', acc: '#e1b24a', acc2: '#ffe1a1' },
//   fintech: { t1: '#7c5cff', t2: '#2e1f7a', acc: '#8a6dff', acc2: '#cbbdff' },
//   hosp:    { t1: '#ff7a59', t2: '#8a2d1c', acc: '#ff8466', acc2: '#ffc4b5' },
//   trade:   { t1: '#c9956b', t2: '#5a3b22', acc: '#d7a176', acc2: '#f3d4bb' },
//   saas:    { t1: '#2f8cff', t2: '#123e82', acc: '#3d8bff', acc2: '#a9cdff' },
//   legal:   { t1: '#b0415e', t2: '#4c1426', acc: '#d0577a', acc2: '#f5b8c9' },
//   fit:     { t1: '#ff9f1c', t2: '#8a4a00', acc: '#ffa531', acc2: '#ffd9a3' },
// };

// /* ---------- 16 GROWTH PLANS ---------- */
// const P = [
//   {
//     n: 'Aarogya Health Network', m: 'AH', ind: 'health', indL: 'Healthcare · Multi-clinic group',
//     mk: 'india', mkL: 'India · Core market', tier: 'Tier A',
//     h: ['Every clinic.', 'One', 'booking engine.'], w: 'CARE',
//     lead: 'A growth plan to turn a multi-clinic group into one connected patient journey, from first search to confirmed appointment.',
//     about: 'Multi-clinic healthcare group looking for a stronger appointment funnel and lead generation.',
//     focus: 'Appointment funnel + lead generation',
//     ch: ['No appointment automation', 'Clinics marketed in isolation', 'Low-quality enquiries', 'Patients drop off before booking'],
//     so: ['One website with clinic, doctor and specialty pages', 'Local SEO for every clinic location', 'Awareness and doctor-led social content', 'Search and Meta campaigns for high-intent treatments', 'Booking app with WhatsApp reminders and follow-ups'],
//     sv: { web: 'Clinic and doctor pages with online booking', seo: 'Local SEO for each clinic and specialty', smm: 'Doctor-led reels and health awareness', lead: 'Treatment enquiry funnels', perf: 'Google Search + Meta for high-intent care', app: 'Patient app, WhatsApp booking and reminders' },
//     kpi: ['Appointments booked', 'Cost per appointment', 'No-show rate', 'Clinic-wise enquiries'],
//   },
//   {
//     n: 'Verdant D2C Skincare', m: 'VS', ind: 'd2c', indL: 'D2C · Skincare',
//     mk: 'india', mkL: 'India · Core market', tier: 'Tier A',
//     h: ['Lower CAC.', 'Clearer', 'identity.'], w: 'GLOW',
//     lead: 'A plan to give a fast-scaling skincare brand a sharper identity and a leaner customer acquisition engine.',
//     about: 'Scaling D2C skincare brand facing high customer acquisition cost and a weak brand identity.',
//     focus: 'Brand identity + efficient acquisition',
//     ch: ['High customer acquisition cost', 'Weak, inconsistent identity', 'Low repeat purchase', 'Store not built to convert'],
//     so: ['Conversion-first storefront and product pages', 'SEO around ingredients and skin concerns', 'Creator and UGC-led Instagram content', 'Quiz and sample funnels to capture buyers', 'Meta and Google Shopping tuned for ROAS; WhatsApp for repeat orders'],
//     sv: { web: 'Shopify storefront built for conversion', seo: 'Ingredient and skin-concern content hubs', smm: 'Creator collabs, reels and UGC', lead: 'Skin quiz and sample funnels', perf: 'Meta + Google Shopping, ROAS-led', app: 'WhatsApp commerce, reorders and cart recovery' },
//     kpi: ['CAC', 'ROAS', 'Repeat purchase rate', 'Store conversion rate'],
//   },
//   {
//     n: 'Meridian Realty', m: 'MR', ind: 'realty', indL: 'Real estate · Developer',
//     mk: 'india', mkL: 'India · Core market', tier: 'Tier A',
//     h: ['More leads.', 'Better', 'leads.'], w: 'HOMES',
//     lead: 'A lead engine for a developer that needs volume and quality, with AI scoring so sales calls the right buyers first.',
//     about: 'Real estate business with a lead volume challenge, needing lead generation and AI lead scoring.',
//     focus: 'Lead generation + AI scoring',
//     ch: ['Not enough enquiries', 'Low-intent portal leads', 'Slow follow-up', 'No way to rank leads'],
//     so: ['Fast project microsites with instant lead forms', 'SEO on project, locality and BHK searches', 'Walkthrough reels, floor-plan carousels and launch stories', 'Lead scoring so sales calls hot buyers first', 'Meta lead ads + Google PPC; WhatsApp site-visit booking'],
//     sv: { web: 'Project microsites and landing pages', seo: 'Locality, project and BHK keywords', smm: 'Walkthrough reels and launch creatives', lead: 'Instant forms with AI lead scoring', perf: 'Meta lead ads + Google Search PPC', app: 'WhatsApp price sheets and site-visit booking' },
//     kpi: ['Qualified leads', 'Cost per qualified lead', 'Site visits booked', 'Lead-to-visit rate'],
//   },
//   {
//     n: 'NimbusPay', m: 'NP', ind: 'fintech', indL: 'Fintech · Payments',
//     mk: 'india', mkL: 'India · Core market', tier: 'Tier A',
//     h: ['Launch-ready.', 'Trust', 'built in.'], w: 'PAY',
//     lead: 'A go-to-market plan for a payments company that needs a launch website and support that scales with AI.',
//     about: 'Fintech business with a go-to-market website requirement and a need for AI-powered support.',
//     focus: 'GTM website + AI support',
//     ch: ['No launch-ready website', 'Support load growing fast', 'Low brand trust in a new category', 'Signups leak between visit and KYC'],
//     so: ['Secure, fast GTM website with product and pricing pages', 'SEO and AEO for payment and use-case searches', 'LinkedIn and Instagram thought leadership', 'Demo and signup funnels with tracking', 'Performance campaigns; app onboarding with WhatsApp updates and AI support'],
//     sv: { web: 'GTM website, product and pricing pages', seo: 'SEO + AEO for payments use cases', smm: 'Founder and product thought leadership', lead: 'Demo request and signup funnels', perf: 'Google, Meta and LinkedIn acquisition', app: 'App onboarding, WhatsApp alerts, AI support agent' },
//     kpi: ['Signups', 'Signup-to-KYC completion', 'Cost per activated user', 'Support resolution time'],
//   },
//   {
//     n: 'Gulf Luxe Realty', m: 'GL', ind: 'realty', indL: 'Real estate · Luxury',
//     mk: 'dubai', mkL: 'Dubai, UAE',
//     h: ['Luxury homes.', 'Global', 'buyers.'], w: 'DUBAI',
//     lead: 'A plan to reach high-net-worth and overseas buyers for Dubai luxury property, with fast WhatsApp-first follow-up.',
//     about: 'Dubai real estate brand targeting qualified buyers through AI, automation and performance marketing.',
//     focus: 'Qualified international leads',
//     ch: ['Buyers spread across countries', 'Leads lost across time zones', 'Generic listing-portal presence', 'Slow, manual follow-up'],
//     so: ['Premium property website with multilingual listings', 'SEO for Dubai communities and off-plan searches', 'Cinematic reels and virtual tours', 'Geo-targeted lead funnels by buyer market', 'Meta, Google and YouTube for HNI audiences; WhatsApp concierge'],
//     sv: { web: 'Premium listings site, multilingual', seo: 'Community and off-plan keywords', smm: 'Cinematic reels and virtual tours', lead: 'Geo-targeted buyer funnels', perf: 'Meta, Google and YouTube to HNI audiences', app: 'WhatsApp concierge, brochures and viewing bookings' },
//     kpi: ['Qualified buyer leads', 'Viewings booked', 'Cost per qualified lead', 'Response time'],
//   },
//   {
//     n: 'Aurora Aesthetics Clinic', m: 'AA', ind: 'health', indL: 'Healthcare · Aesthetics',
//     mk: 'dubai', mkL: 'Dubai, UAE',
//     h: ['Beautiful results.', 'Booked', 'on WhatsApp.'], w: 'AURA',
//     lead: 'A plan to fill the treatment calendar of a Dubai aesthetics clinic with the right patients, and keep them coming back.',
//     about: 'Dubai aesthetics clinic, in a segment where AI, automation and performance marketing drive qualified leads.',
//     focus: 'Treatment bookings + retention',
//     ch: ['Competitive, ad-heavy market', 'Enquiries that never book', 'Before-and-after proof underused', 'No re-booking system'],
//     so: ['Treatment-led website with pricing guides', 'SEO for treatments across Dubai areas', 'Expert-led reels and patient stories', 'Consultation offers for key treatments', 'Meta and Google campaigns; WhatsApp booking and re-care reminders'],
//     sv: { web: 'Treatment pages and booking flow', seo: 'Treatment + area keywords across Dubai', smm: 'Expert reels and patient stories', lead: 'Consultation offer funnels', perf: 'Meta + Google for key treatments', app: 'Booking app, WhatsApp reminders and re-care' },
//     kpi: ['Consultations booked', 'Cost per booking', 'Show-up rate', 'Repeat treatments'],
//   },
//   {
//     n: 'NexaPay', m: 'NX', ind: 'fintech', indL: 'Fintech · Payments',
//     mk: 'dubai', mkL: 'Dubai, UAE',
//     h: ['Payments that', 'scale', 'across the Gulf.'], w: 'NEXA',
//     lead: 'A growth plan for a UAE fintech to earn trust fast and turn business interest into activated merchants.',
//     about: 'Dubai fintech, in a segment where AI, automation and performance marketing drive qualified leads.',
//     focus: 'Merchant acquisition',
//     ch: ['Low awareness in a crowded market', 'Long, complex sales cycles', 'Unclear product story', 'Leads not nurtured'],
//     so: ['Merchant-focused website with use cases', 'SEO and AEO for UAE payment searches', 'LinkedIn-led B2B content', 'Demo funnels with lead scoring', 'LinkedIn and Google campaigns; app onboarding with WhatsApp updates'],
//     sv: { web: 'Merchant site with use-case pages', seo: 'UAE payments SEO + AEO', smm: 'LinkedIn-first B2B content', lead: 'Demo funnels with lead scoring', perf: 'LinkedIn + Google acquisition', app: 'Merchant app, WhatsApp onboarding updates' },
//     kpi: ['Demo requests', 'Merchant activations', 'Cost per activation', 'Sales cycle length'],
//   },
//   {
//     n: 'Mirage Hospitality', m: 'MH', ind: 'hosp', indL: 'Hospitality',
//     mk: 'dubai', mkL: 'Dubai, UAE',
//     h: ['More direct', 'bookings,', 'fewer fees.'], w: 'STAY',
//     lead: 'A plan to shift a Dubai hospitality brand from commission-heavy platforms to direct bookings and loyal guests.',
//     about: 'Dubai hospitality business, in a segment where AI, automation and performance marketing drive qualified leads.',
//     focus: 'Direct bookings + guest loyalty',
//     ch: ['Reliance on booking platforms', 'Low direct-website bookings', 'Seasonal demand swings', 'Guests not re-engaged'],
//     so: ['Fast booking website with direct-rate offers', 'SEO for stays and experiences in Dubai', 'Experience-led reels and creator stays', 'Offer and event lead capture', 'Meta and Google hotel ads; WhatsApp concierge and guest app'],
//     sv: { web: 'Direct booking website and offers', seo: 'Stay and experience keywords', smm: 'Experience reels and creator stays', lead: 'Offer, event and group enquiries', perf: 'Meta + Google hotel campaigns', app: 'Guest app and WhatsApp concierge' },
//     kpi: ['Direct booking share', 'Cost per booking', 'Repeat guests', 'Event enquiries'],
//   },
//   {
//     n: 'Falcon Trading', m: 'FT', ind: 'trade', indL: 'Trading · B2B',
//     mk: 'dubai', mkL: 'Dubai, UAE',
//     h: ['From catalogue', 'to', 'closed orders.'], w: 'TRADE',
//     lead: 'A plan to give a Dubai trading company a digital storefront for buyers and a pipeline that turns enquiries into orders.',
//     about: 'Dubai trading business, in a segment where AI, automation and performance marketing drive qualified leads.',
//     focus: 'B2B enquiries + order pipeline',
//     ch: ['Offline-first sales', 'No digital product catalogue', 'Enquiries tracked manually', 'Limited reach beyond existing buyers'],
//     so: ['B2B website with a searchable product catalogue', 'SEO for product and supplier searches', 'LinkedIn presence for buyers and partners', 'RFQ forms with CRM routing', 'Google and LinkedIn campaigns; WhatsApp catalogue and quotes'],
//     sv: { web: 'B2B catalogue website', seo: 'Product and supplier keywords', smm: 'LinkedIn for buyers and partners', lead: 'RFQ forms routed to CRM', perf: 'Google + LinkedIn campaigns', app: 'WhatsApp catalogue, quotes and order updates' },
//     kpi: ['RFQs received', 'Quote-to-order rate', 'Cost per RFQ', 'New buyer accounts'],
//   },
//   {
//     n: 'Lotus Realty Group', m: 'LR', ind: 'realty', indL: 'Real estate',
//     mk: 'metro', mkL: 'Indian metros',
//     h: ['Metro buyers.', 'Always', 'followed up.'], w: 'LOTUS',
//     lead: 'A plan built on the needs in the pipeline: Google Ads for demand, WhatsApp API for speed and AI scoring for focus.',
//     about: 'Real estate group in the Indian metros needing Google Ads, WhatsApp API and AI lead scoring.',
//     focus: 'Google Ads + WhatsApp API + AI scoring',
//     ch: ['Leads going cold before follow-up', 'Search demand not captured', 'Sales time spent on low-intent leads', 'No single view of the funnel'],
//     so: ['Project landing pages built for speed', 'Local SEO for projects in each metro', 'Launch and walkthrough social content', 'AI lead scoring with CRM routing', 'Google Ads on high-intent searches; WhatsApp API instant follow-up'],
//     sv: { web: 'Fast project landing pages', seo: 'Metro locality and project SEO', smm: 'Launch and walkthrough content', lead: 'AI lead scoring, CRM routing', perf: 'Google Ads on high-intent search', app: 'WhatsApp API instant replies and visit booking' },
//     kpi: ['Qualified leads', 'Time to first response', 'Site visits booked', 'Cost per site visit'],
//   },
//   {
//     n: 'ByteForge', m: 'BF', ind: 'saas', indL: 'SaaS',
//     mk: 'metro', mkL: 'Indian metros',
//     h: ['Pipeline', 'for a', 'product-led team.'], w: 'BYTE',
//     lead: 'A plan for a SaaS company that needs AI services, LinkedIn growth and a go-to-market website to fill its pipeline.',
//     about: 'SaaS company in the Indian metros needing AI services, LinkedIn growth and a GTM website.',
//     focus: 'GTM website + LinkedIn growth',
//     ch: ['No clear GTM website', 'Low LinkedIn visibility', 'Trials that never convert', 'Marketing and sales out of sync'],
//     so: ['GTM website with product tours and pricing', 'SEO and AEO on problem and comparison searches', 'LinkedIn founder and product content', 'Trial and demo funnels with scoring', 'LinkedIn + Google ads; in-app and WhatsApp onboarding nudges'],
//     sv: { web: 'GTM site, product tours and pricing', seo: 'Problem and comparison SEO + AEO', smm: 'LinkedIn founder and product content', lead: 'Trial and demo funnels, scored', perf: 'LinkedIn + Google acquisition', app: 'In-app and WhatsApp onboarding nudges' },
//     kpi: ['Demo requests', 'Trial-to-paid rate', 'Pipeline created', 'CAC payback'],
//   },
//   {
//     n: 'Meridian Fintech', m: 'MF', ind: 'fintech', indL: 'Fintech',
//     mk: 'metro', mkL: 'Indian metros',
//     h: ['Thought leadership', 'that', 'converts.'], w: 'TRUST',
//     lead: 'A plan for a fintech that needs AI support, thought leadership and web development, turning credibility into customers.',
//     about: 'Fintech company in the Indian metros needing AI support, thought leadership and web development.',
//     focus: 'Web + thought leadership + AI support',
//     ch: ['Low brand authority', 'Dated web presence', 'Support can’t keep pace', 'Content with no conversion path'],
//     so: ['New website with product and trust pages', 'SEO on finance education topics', 'LinkedIn and Instagram thought leadership', 'Content-to-lead funnels (guides, calculators)', 'Search and social campaigns; app with WhatsApp alerts and AI support'],
//     sv: { web: 'New website, product and trust pages', seo: 'Finance education SEO', smm: 'Thought leadership on LinkedIn + Instagram', lead: 'Guides and calculators as lead magnets', perf: 'Search + social acquisition', app: 'App, WhatsApp alerts and AI support agent' },
//     kpi: ['Leads from content', 'App installs', 'Activation rate', 'Support deflection'],
//   },
//   {
//     n: 'Real Estate Agency', m: 'RE', ind: 'realty', indL: 'Real estate · Agency',
//     mk: 'aus', mkL: 'Australia', seg: true,
//     h: ['Listings that', 'sell,', 'appraisals booked.'], w: 'AUS',
//     lead: 'A segment plan for Australian agencies, built on the pipeline focus: website optimisation and Google Ads.',
//     about: 'Australian real estate agencies, where website optimisation and Google Ads are the key levers.',
//     focus: 'Website optimisation + Google Ads',
//     ch: ['Slow, dated agency websites', 'Appraisal requests too low', 'Heavy reliance on portals', 'Vendor leads not nurtured'],
//     so: ['Optimised agency website with suburb pages', 'Suburb and "sell my house" SEO', 'Listing reels and sold stories', 'Free appraisal funnels', 'Google Ads for appraisal and buyer searches; WhatsApp follow-up'],
//     sv: { web: 'Optimised site with suburb pages', seo: 'Suburb and seller-intent SEO', smm: 'Listing reels and sold stories', lead: 'Free appraisal funnels', perf: 'Google Ads, seller and buyer intent', app: 'WhatsApp follow-up and open-home reminders' },
//     kpi: ['Appraisal requests', 'Cost per appraisal', 'Listings won', 'Website conversion rate'],
//   },
//   {
//     n: 'D2C Brand', m: 'D2', ind: 'd2c', indL: 'D2C · Consumer brand',
//     mk: 'aus', mkL: 'Australia', seg: true,
//     h: ['A brand', 'people', 'follow.'], w: 'BRAND',
//     lead: 'A segment plan for Australian D2C brands, built on the pipeline focus: branding and Instagram growth.',
//     about: 'Australian D2C brands, where branding and Instagram growth are the key levers.',
//     focus: 'Branding + Instagram growth',
//     ch: ['Brand looks like everyone else', 'Slow Instagram growth', 'Paid social getting pricier', 'One-time buyers'],
//     so: ['Store redesign around a clear brand system', 'SEO for product and gifting searches', 'Instagram growth with creators and reels', 'Giveaway and waitlist funnels', 'Meta and TikTok ads; WhatsApp and SMS for repeat orders'],
//     sv: { web: 'Store redesign on a brand system', seo: 'Product and gifting SEO', smm: 'Instagram growth, creators and reels', lead: 'Giveaway and waitlist funnels', perf: 'Meta + TikTok, ROAS-led', app: 'WhatsApp repeat-order flows' },
//     kpi: ['Follower growth', 'ROAS', 'Repeat purchase rate', 'Email + WhatsApp subscribers'],
//   },
//   {
//     n: 'Legal Firm', m: 'LF', ind: 'legal', indL: 'Legal services',
//     mk: 'aus', mkL: 'Australia', seg: true,
//     h: ['Found first', 'by clients', 'who need you.'], w: 'LAW',
//     lead: 'A segment plan for Australian law firms, built on the pipeline focus: SEO and inbound lead generation.',
//     about: 'Australian legal firms, where SEO and inbound lead generation are the key levers.',
//     focus: 'SEO + inbound enquiries',
//     ch: ['Invisible for practice-area searches', 'Enquiries depend on referrals', 'Website doesn’t build trust', 'Slow intake process'],
//     so: ['Trust-first website with practice-area pages', 'SEO for practice areas and suburbs', 'LinkedIn and explainer content', 'Free consultation and case-review funnels', 'Google Ads on urgent legal searches; WhatsApp intake'],
//     sv: { web: 'Trust-first practice-area website', seo: 'Practice-area and suburb SEO', smm: 'LinkedIn and explainer content', lead: 'Consultation and case-review funnels', perf: 'Google Ads on urgent searches', app: 'WhatsApp intake and appointment reminders' },
//     kpi: ['Consultation requests', 'Organic enquiries', 'Cost per case enquiry', 'Intake response time'],
//   },
//   {
//     n: 'Fitness Studio', m: 'FS', ind: 'fit', indL: 'Fitness',
//     mk: 'aus', mkL: 'Australia', seg: true,
//     h: ['Trials in.', 'Members', 'stay.'], w: 'FIT',
//     lead: 'A segment plan for Australian fitness brands, built on the pipeline focus: WhatsApp nurturing.',
//     about: 'Australian fitness businesses, where WhatsApp nurturing is the key lever.',
//     focus: 'Trial sign-ups + WhatsApp nurturing',
//     ch: ['Trials that don’t convert', 'Members churn after a few months', 'Local competition', 'Class slots left empty'],
//     so: ['Class and membership website with online sign-up', 'Local SEO for gyms and classes nearby', 'Coach-led reels and member stories', 'Free trial funnels', 'Meta local ads; member app with WhatsApp nurturing'],
//     sv: { web: 'Membership and class sign-up website', seo: 'Local gym and class SEO', smm: 'Coach reels and member stories', lead: 'Free trial funnels', perf: 'Meta local awareness + trials', app: 'Member app, WhatsApp nurture and class reminders' },
//     kpi: ['Trial sign-ups', 'Trial-to-member rate', 'Member retention', 'Class fill rate'],
//   },
// ];

// /* ---------- MARKET FILTERS ---------- */
// const MK = [
//   ['all',   'All plans'],
//   ['india', 'India'],
//   ['dubai', 'Dubai'],
//   ['metro', 'Indian metros'],
//   ['aus',   'Australia'],
// ];

// /* ---------- BAR HEIGHTS ---------- */
// const HEIGHTS = [120, 140, 160, 180, 200, 220];

// /* ---------- HELPERS ---------- */
// const pad = (n) => ('0' + n).slice(-2);

// const shade = (hex) => {
//   const n = parseInt(hex.slice(1), 16);
//   const r = ((n >> 16) * 0.55) | 0;
//   const g = (((n >> 8) & 255) * 0.55) | 0;
//   const b = ((n & 255) * 0.55) | 0;
//   return `rgb(${r},${g},${b})`;
// };

// /* ---------- SUB-COMPONENT — Detail Sheet ---------- */
// const Sheet = ({ plan, index, dir = 'up', entering = false, leaving = false }) => {
//   const t = IND[plan.ind];
//   const anim = dir === 'up' ? 'Up' : 'Down';

//   const sheetStyle = {
//     '--acc': t.acc,
//     '--acc2': t.acc2,
//     boxShadow:
//       '0 40px 70px -40px rgba(15,26,44,.5), 0 0 0 1px rgba(15,26,44,.06)',
//   };

//   if (leaving) {
//     sheetStyle.animation = `cgpOut${anim} .7s cubic-bezier(.55,.05,.35,1) forwards`;
//     sheetStyle.position = 'absolute';
//     sheetStyle.inset = '0 0 auto 0';
//   } else if (entering) {
//     sheetStyle.animation = `cgpIn${anim} .7s cubic-bezier(.55,.05,.35,1)`;
//   }

//   const factBase =
//     'px-[22px] py-[18px] text-[13.5px] leading-[1.45] border-[#e2e5ea] max-[900px]:border-b';

//   return (
//     <article
//       className="bg-white rounded-3xl overflow-hidden [transform-origin:50%_50%_-320px] [backface-visibility:hidden]"
//       style={sheetStyle}
//     >
//       <div className="flex justify-between items-center gap-3 px-7 py-4 max-[600px]:px-4 max-[600px]:py-3 border-b border-[#e2e5ea] text-[11px] max-[600px]:text-[9.5px] font-bold tracking-[.16em] uppercase text-[#5b6474]">
//         <span className="text-[15px] max-[600px]:text-[13px] tracking-[.02em] normal-case text-[#0f1a2c] font-extrabold">
//           Coder<span className="text-[#0a8af0]">Box</span> · Growth Partner
//         </span>
//         <span className="text-right">
//           Growth plan
//           <em className="block not-italic text-[color:var(--acc)]">{plan.n}</em>
//         </span>
//       </div>

//       <div
//         className="relative px-10 pt-[38px] pb-[42px] max-[600px]:px-5 max-[600px]:pt-[26px] max-[600px]:pb-[150px] text-white overflow-hidden"
//         style={{
//           background: `radial-gradient(circle at 85% 20%, ${t.acc} 0, transparent 42%), linear-gradient(135deg, #0b1a3a, #13285a)`,
//         }}
//       >
//         <span
//           aria-hidden="true"
//           className="absolute left-6 -bottom-[26px] text-[clamp(70px,12vw,150px)] font-extrabold tracking-[-.04em] text-transparent whitespace-nowrap pointer-events-none"
//           style={{ WebkitTextStroke: '1px rgba(255,255,255,.1)' }}
//         >
//           {plan.w}
//         </span>

//         <div className="flex items-center gap-3.5 relative z-[1]">
//           <span
//             className="w-14 h-14 rounded-full bg-white grid place-items-center font-extrabold text-lg"
//             style={{ color: '#0b1a3a', boxShadow: `0 0 0 3px ${t.acc}` }}
//           >
//             {plan.m}
//           </span>
//           <div>
//             <small className="block text-[10.5px] font-bold tracking-[.16em] uppercase text-[color:var(--acc2)]">
//               {plan.seg ? 'Segment plan' : 'Proposal'} · {pad(index + 1)} of 16
//             </small>
//             <b className="text-[15px]">
//               {plan.n} · {plan.indL}
//             </b>
//           </div>
//         </div>

//         <h3
//           className="relative z-[1] text-[clamp(34px,5.2vw,58px)] leading-[1.02] tracking-[-.03em] font-extrabold mt-[22px] mb-3.5 max-w-[14ch]"
//           style={entering ? { animation: 'cgpFade .8s .3s both' } : undefined}
//         >
//           {plan.h[0]}
//           <br />
//           <em className="font-semibold text-[color:var(--acc2)]">{plan.h[1]}</em>{' '}
//           {plan.h[2]}
//         </h3>

//         <p className="relative z-[1] m-0 max-w-[52ch] text-[#c9d4ea] text-[15px] leading-[1.6]">
//           {plan.lead}
//         </p>

//         <div
//           className="absolute right-9 bottom-[34px] max-[600px]:right-5 max-[600px]:bottom-[18px] z-[1] w-[124px] h-[124px] max-[600px]:w-[104px] max-[600px]:h-[104px] rounded-full bg-[#ffd24a] text-[#0b1a3a] grid place-items-center text-center font-extrabold rotate-[-8deg]"
//           style={{
//             animation: 'cgpWob 6s ease-in-out infinite',
//             boxShadow: '0 20px 40px -12px rgba(0,0,0,.5)',
//           }}
//         >
//           <div>
//             <b className="block text-[40px] max-[600px]:text-[32px] leading-none tracking-[-.03em]">6</b>
//             <small className="block text-[9.5px] tracking-[.14em] leading-[1.3]">
//               SERVICES
//               <br />
//               ONE PLAN
//             </small>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 border-b border-[#e2e5ea]">
//         <div className={`${factBase} font-medium text-[#2c3444] border-r max-[600px]:border-r-0`}>
//           <small className="block text-[10px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)] mb-1.5">About</small>
//           {plan.about}
//         </div>
//         <div className={`${factBase} font-semibold border-r max-[900px]:border-r-0 max-[600px]:border-r-0`}>
//           <small className="block text-[10px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)] mb-1.5">Market</small>
//           {plan.mkL}
//         </div>
//         <div className={`${factBase} font-semibold border-r max-[600px]:border-r-0`}>
//           <small className="block text-[10px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)] mb-1.5">Focus</small>
//           {plan.focus}
//         </div>
//         <div className={`${factBase} font-semibold`}>
//           <small className="block text-[10px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)] mb-1.5">Status</small>
//           {plan.tier ? `${plan.tier} · ` : ''}Proposal
//         </div>
//       </div>

//       <div className="grid grid-cols-[1fr_1.05fr] max-[900px]:grid-cols-1 gap-[26px] px-[30px] pt-[30px] pb-2.5 max-[600px]:px-4 max-[600px]:pt-[22px] max-[600px]:pb-1.5">
//         <div>
//           <div className="text-[10.5px] font-bold tracking-[.16em] uppercase text-[#e0525c]">The challenge</div>
//           <h4 className="text-[26px] max-[600px]:text-[22px] tracking-[-.02em] mt-1.5 mb-3.5 font-extrabold">
//             Where they are
//           </h4>
//           <ul className="list-none m-0 p-0">
//             {plan.ch.map((x) => (
//               <li key={x} className="py-3 border-b border-[#e2e5ea] text-[15px] font-semibold text-[#8a93a3] line-through decoration-[#e0525c] decoration-2">
//                 {x}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="rounded-[18px] px-[26px] py-6 text-white" style={{ background: 'linear-gradient(145deg, #0b1a3a, #13285a)' }}>
//           <div className="text-[10.5px] font-bold tracking-[.16em] uppercase text-[#ffd24a]">The plan</div>
//           <h4 className="text-[26px] max-[600px]:text-[22px] tracking-[-.02em] mt-1.5 mb-3.5 font-extrabold">
//             What <em className="font-semibold text-[color:var(--acc2)]">CoderBox</em> will do
//           </h4>
//           <ul className="list-none m-0 p-0 grid gap-2.5">
//             {plan.so.map((x) => (
//               <li key={x} className="text-sm leading-[1.45] pl-6 relative text-[#dbe4f5] before:content-['✓'] before:absolute before:left-0 before:text-[#ffd24a] before:font-extrabold">
//                 {x}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="px-[30px] pt-6 pb-1.5 max-[600px]:px-4 max-[600px]:pt-[18px] max-[600px]:pb-1">
//         <div className="text-[10.5px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)]">Six growth levers</div>
//         <div className="grid grid-cols-6 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 gap-2 items-end mt-3.5 [perspective:900px]">
//           {SV.map((s, j) => (
//             <div
//               key={s.k}
//               className="rounded-t-[14px] rounded-b-[6px] px-[13px] py-3.5 text-white flex flex-col justify-start max-[900px]:![min-height:auto]"
//               style={{
//                 minHeight: HEIGHTS[j] + 'px',
//                 background: `linear-gradient(170deg, ${s.c}, ${shade(s.c)})`,
//                 transformOrigin: '50% 100%',
//                 animation: 'cgpRise .8s cubic-bezier(.2,.8,.2,1) both',
//                 animationDelay: `calc(${j} * 70ms + .35s)`,
//               }}
//             >
//               <i className="not-italic font-semibold text-[13px] opacity-75">{pad(j + 1)}</i>
//               <b className="block text-[13.5px] leading-[1.2] mt-1 mb-1.5">{s.n}</b>
//               <span className="text-[11.5px] leading-[1.4] opacity-85">{plan.sv[s.k]}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-[1fr_auto] max-[900px]:grid-cols-1 gap-5 items-center mt-6 mx-[30px] mb-[30px] max-[600px]:mx-4 max-[600px]:mt-[18px] max-[600px]:mb-5 px-[22px] py-5 rounded-[18px] bg-[#f5f7fa] border border-[#e2e5ea]">
//         <div>
//           <div className="text-[10.5px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)]">
//             What we&apos;ll measure
//           </div>
//           <ul className="list-none mt-2.5 mb-0 p-0 flex flex-wrap gap-2">
//             {plan.kpi.map((k) => (
//               <li key={k} className="text-[12.5px] font-semibold bg-white border border-[#e2e5ea] rounded-full px-3 py-[7px]">
//                 {k}
//               </li>
//             ))}
//           </ul>
//           <p className="mt-2.5 mb-0 text-[11.5px] text-[#5b6474] italic">
//             This is a proposed plan. Targets are agreed with you after a discovery call.
//           </p>
//         </div>
//         <a href="#contact" className="sec-btn">
//           Book a strategy call
//           <span>→</span>
//         </a>
//       </div>
//     </article>
//   );
// };

// /* ---------- GROWTH PLANS COMPONENT ---------- */
// const CoderBoxGrowthPlans = () => {
//   const [filter, setFilter]     = useState('all');
//   const [active, setActive]     = useState(0);
//   const [leaving, setLeaving]   = useState(null);
//   const [dir, setDir]           = useState('up');
//   const [dragging, setDragging] = useState(false);
//   const [isSmall, setIsSmall]   = useState(false);

//   const listRef    = useRef(P.map((_, i) => i));
//   const activeRef  = useRef(0);
//   const mountedRef = useRef(false);
//   const timerRef   = useRef(null);
//   const flowRef    = useRef(null);
//   const reduceRef  = useRef(
//     typeof window !== 'undefined' &&
//       window.matchMedia('(prefers-reduced-motion: reduce)').matches
//   );

//   const sxRef    = useRef(0);
//   const movedRef = useRef(0);
//   const downRef  = useRef(false);

//   const list = useMemo(
//     () => P.map((_, i) => i).filter((i) => filter === 'all' || P[i].mk === filter),
//     [filter]
//   );

//   useEffect(() => { listRef.current = list; }, [list]);

//   useEffect(() => {
//     mountedRef.current = true;
//     return () => clearTimeout(timerRef.current);
//   }, []);

//   useEffect(() => {
//     const onResize = () => setIsSmall(window.innerWidth < 600);
//     onResize();
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   const select = useCallback((i, force = false, listOverride = null) => {
//     const lst = listOverride || listRef.current;
//     if (i === undefined || i === null || i < 0) return;
//     if (i === activeRef.current && mountedRef.current && !force) return;

//     const from    = activeRef.current;
//     const toPos   = lst.indexOf(i);
//     const fromPos = lst.indexOf(from);
//     const d       = toPos >= fromPos ? 'up' : 'down';

//     activeRef.current = i;
//     setActive(i);
//     clearTimeout(timerRef.current);

//     if (!mountedRef.current) { mountedRef.current = true; return; }
//     if (reduceRef.current) { setLeaving(null); return; }

//     setDir(d);
//     setLeaving(from);
//     timerRef.current = setTimeout(() => setLeaving(null), 720);
//   }, []);

//   const step = useCallback((n) => {
//     const lst = listRef.current;
//     if (!lst.length) return;
//     let k = lst.indexOf(activeRef.current) + n;
//     if (k < 0) k = lst.length - 1;
//     if (k >= lst.length) k = 0;
//     select(lst[k]);
//   }, [select]);

//   const changeFilter = useCallback((key) => {
//     setFilter(key);
//     const nextList = P.map((_, i) => i).filter(
//       (i) => key === 'all' || P[i].mk === key
//     );
//     select(nextList[0], true, nextList);
//   }, [select]);

//   useEffect(() => {
//     const onKey = (e) => {
//       const r = flowRef.current && flowRef.current.getBoundingClientRect();
//       if (!r || r.bottom < 0 || r.top > window.innerHeight) return;
//       if (e.key === 'ArrowRight') step(1);
//       if (e.key === 'ArrowLeft')  step(-1);
//     };
//     document.addEventListener('keydown', onKey);
//     return () => document.removeEventListener('keydown', onKey);
//   }, [step]);

//   useEffect(() => {
//     const onMove = (e) => {
//       if (!downRef.current) return;
//       const dx = e.clientX - sxRef.current;
//       movedRef.current = Math.max(movedRef.current, Math.abs(dx));
//       if (Math.abs(dx) > 70) { step(dx < 0 ? 1 : -1); sxRef.current = e.clientX; }
//     };
//     const onUp = () => {
//       if (!downRef.current) return;
//       downRef.current = false;
//       setDragging(false);
//       setTimeout(() => { movedRef.current = 0; }, 0);
//     };
//     window.addEventListener('pointermove', onMove);
//     window.addEventListener('pointerup', onUp);
//     return () => {
//       window.removeEventListener('pointermove', onMove);
//       window.removeEventListener('pointerup', onUp);
//     };
//   }, [step]);

//   const onPointerDown = (e) => {
//     downRef.current = true;
//     movedRef.current = 0;
//     sxRef.current = e.clientX;
//     setDragging(true);
//   };

//   const pos = Math.max(0, list.indexOf(active));

//   return (
//     <section
//       id="growth-plans"
//       aria-labelledby="cgp-title"
//       className="cgp relative overflow-clip bg-[#f0f1f3] text-[#0f1a2c]"
//     >
//       <style>{`
//         body{margin:0;background:#f0f1f3}
//         @keyframes cgpOutUp  {to{transform:rotateX(90deg);opacity:.3}}
//         @keyframes cgpInUp   {from{transform:rotateX(-90deg);opacity:.3}}
//         @keyframes cgpOutDown{to{transform:rotateX(-90deg);opacity:.3}}
//         @keyframes cgpInDown {from{transform:rotateX(90deg);opacity:.3}}
//         @keyframes cgpWob    {50%{transform:rotate(4deg) scale(1.04)}}
//         @keyframes cgpRise   {from{transform:rotateX(-80deg);opacity:0}}
//         @keyframes cgpFade   {from{opacity:0;transform:translateY(16px)}}
//         @media (prefers-reduced-motion:reduce){
//           .cgp *{animation:none!important;transition:none!important}
//         }
//       `}</style>

//       <div
//         aria-hidden="true"
//         className="absolute w-[520px] h-[520px] -right-[180px] -top-[120px] rounded-full bg-[#dde8f3] blur-[80px] opacity-70 pointer-events-none"
//       />

//       <div className="relative max-w-[1180px] mx-auto pt-[84px] px-4 pb-[90px] max-[600px]:pt-[60px]">
//         <header className="text-center max-w-[760px] mx-auto">
//           <span className="sec-badge inline-block">Growth Plans</span>
//           <h2 id="cgp-title" className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
//             Built for your{' '}
//             <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
//               next stage of growth.
//             </span>
//           </h2>
//           <p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
//             Sixteen growth plans for businesses we&apos;d love to partner with,
//             each combining web development, SEO, social media, lead generation,
//             performance marketing and a mobile app with WhatsApp API.
//           </p>

//           <div className="flex flex-wrap justify-center gap-2 mt-5">
//             {CHIPS.map((s) => (
//               <span
//                 key={s.n}
//                 className="inline-flex items-center gap-[7px] text-[12.5px] font-semibold bg-white border border-[#e2e5ea] rounded-full px-3 py-[7px]"
//               >
//                 <i className="w-2 h-2 rounded-full" style={{ background: s.c }} />
//                 {s.n}
//               </span>
//             ))}
//           </div>
//         </header>

//         <div className="flex justify-center gap-1.5 mt-[30px] mx-auto flex-wrap" role="tablist" aria-label="Filter by market">
//           {MK.map(([key, label]) => {
//             const count = key === 'all' ? P.length : P.filter((p) => p.mk === key).length;
//             const on = filter === key;
//             return (
//               <button
//                 key={key}
//                 type="button"
//                 role="tab"
//                 aria-selected={on}
//                 onClick={() => changeFilter(key)}
//                 className={`font-semibold text-[13px] px-3.5 py-2 rounded-full cursor-pointer border transition-all duration-300 ${
//                   on ? 'bg-[#0f1a2c] border-[#0f1a2c] text-white' : 'bg-white border-[#e2e5ea] text-[#5b6474]'
//                 }`}
//               >
//                 {label}
//                 <b className="font-bold opacity-55 ml-1">{count}</b>
//               </button>
//             );
//           })}
//         </div>

//         <div
//           ref={flowRef}
//           aria-label="Growth plans"
//           onPointerDown={onPointerDown}
//           className={`relative overflow-x-clip h-[250px] max-[600px]:h-[210px] mt-[18px] [perspective:1100px] [touch-action:pan-y] select-none ${
//             dragging ? 'cursor-grabbing' : 'cursor-grab'
//           }`}
//         >
//           {P.map((p, i) => {
//             const t = IND[p.ind];
//             const k = list.indexOf(i);
//             const d = k < 0 ? 0 : k - pos;
//             const ad = Math.abs(d);
//             const hidden = k < 0 || ad > 4;
//             const isOn = k >= 0 && d === 0;

//             let transform = 'translateX(0) translateZ(-600px)';
//             if (k >= 0) {
//               const gap = isSmall ? 112 : 150;
//               const s = d < 0 ? -1 : 1;
//               const x = d === 0 ? 0 : s * (gap * 0.9 + (ad - 1) * gap * 0.55);
//               const ry = d === 0 ? 0 : -s * Math.min(58, 40 + ad * 6);
//               const z = d === 0 ? 60 : -120 - ad * 70;
//               transform = `translateX(${x}px) translateZ(${z}px) rotateY(${ry}deg)`;
//             }

//             const style = {
//               transform,
//               opacity: hidden ? 0 : 1,
//               filter: isOn ? 'none' : `brightness(${1 - Math.min(0.45, ad * 0.12)})`,
//               zIndex: k < 0 ? 0 : 100 - ad,
//               pointerEvents: hidden ? 'none' : 'auto',
//               background: `linear-gradient(155deg, ${t.t1}, ${t.t2})`,
//               boxShadow: isOn
//                 ? `0 30px 50px -18px rgba(15,26,44,.6), 0 0 0 3px #fff, 0 0 0 5px ${t.t1}`
//                 : '0 22px 40px -20px rgba(15,26,44,.55)',
//               transition:
//                 'transform .75s cubic-bezier(.2,.8,.2,1), opacity .6s, filter .6s',
//               '--sh': d === 0 ? '80%' : '-80%',
//             };

//             return (
//               <button
//                 key={p.n}
//                 type="button"
//                 aria-current={isOn ? 'true' : 'false'}
//                 onClick={() => { if (movedRef.current > 6) return; select(i); }}
//                 className="absolute left-1/2 top-[18px] w-[200px] h-[214px] -ml-[100px] max-[600px]:w-[160px] max-[600px]:h-[176px] max-[600px]:-ml-20 rounded-2xl overflow-hidden border-0 p-4 max-[600px]:p-[13px] text-left text-white flex flex-col"
//                 style={style}
//               >
//                 <span
//                   className="w-10 h-10 rounded-full grid place-items-center font-extrabold text-sm"
//                   style={{ background: 'rgba(255,255,255,.95)', color: t.t2 }}
//                 >
//                   {p.m}
//                 </span>
//                 <span
//                   className="absolute right-3 top-3.5 text-[10px] font-bold px-2 py-1 rounded-full border"
//                   style={{ background: 'rgba(255,255,255,.18)', borderColor: 'rgba(255,255,255,.3)' }}
//                 >
//                   {p.mkL.split(' · ')[0]}
//                 </span>
//                 <span className="mt-auto text-[10.5px] font-bold tracking-[.12em] uppercase opacity-80">
//                   {p.indL}
//                 </span>
//                 <b className="block text-[17px] max-[600px]:text-[15px] leading-[1.2] mt-1.5 tracking-[-.01em]">{p.n}</b>
//                 <span className="absolute right-3.5 bottom-3 text-[28px] font-semibold opacity-35">{pad(i + 1)}</span>
//                 <span
//                   aria-hidden="true"
//                   className="absolute inset-0 pointer-events-none transition-transform duration-[750ms]"
//                   style={{
//                     transform: 'translateX(var(--sh, -80%))',
//                     background:
//                       'linear-gradient(115deg, transparent 35%, rgba(255,255,255,.22) 50%, transparent 65%)',
//                   }}
//                 />
//               </button>
//             );
//           })}
//         </div>

//         <div className="flex justify-center items-center gap-3.5 mt-1.5">
//           <button
//             type="button"
//             onClick={() => step(-1)}
//             aria-label="Previous plan"
//             className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] cursor-pointer grid place-items-center transition-all duration-300 hover:bg-[#0f1a2c] hover:text-white"
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
//               <path d="M19 12H5M11 6l-6 6 6 6" />
//             </svg>
//           </button>
//           <span className="text-[13px] font-bold text-[#5b6474] min-w-[70px] text-center">
//             {pad(pos + 1)} / {pad(list.length)}
//           </span>
//           <button
//             type="button"
//             onClick={() => step(1)}
//             aria-label="Next plan"
//             className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] cursor-pointer grid place-items-center transition-all duration-300 hover:bg-[#0f1a2c] hover:text-white"
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
//               <path d="M5 12h14M13 6l6 6-6 6" />
//             </svg>
//           </button>
//         </div>

//         <div className="relative mt-[26px] [perspective:2000px]" aria-live="polite">
//           {leaving !== null && (
//             <Sheet plan={P[leaving]} index={leaving} dir={dir} leaving />
//           )}
//           <Sheet
//             plan={P[active]}
//             index={active}
//             dir={dir}
//             entering={leaving !== null}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ============================================================
//    PART 2 — DRUM / ROLLER CASE STUDY SECTION
//    ============================================================ */
// /* ---------- DRUM FACES DATA (20 faces) ---------- */
// const DRUM_FACES = [
//   { id: 0,  c: 0, title: "The Mom's Co. — Brand overview",         type: 'mom-overview' },
//   { id: 1,  c: 0, title: "The Mom's Co. — Challenge & solution",    type: 'mom-challenge' },
//   { id: 2,  c: 0, title: "The Mom's Co. — Results",                 type: 'mom-results' },
//   { id: 3,  c: 1, title: 'Lodha — Navi Mumbai overview',            type: 'lodha-overview' },
//   { id: 4,  c: 1, title: 'Lodha — The lead engine',                 type: 'lodha-engine' },
//   { id: 5,  c: 1, title: 'Lodha — Results',                         type: 'lodha-results' },
//   { id: 6,  c: 2, title: 'Ciora Cafe — Brand overview',             type: 'ciora-overview' },
//   { id: 7,  c: 2, title: 'Ciora Cafe — The work',                   type: 'ciora-work' },
//   { id: 8,  c: 2, title: 'Ciora Cafe — Results',                    type: 'ciora-results' },
//   { id: 9,  c: 3, title: 'Shomi Healings — Brand positioning',      type: 'shomi-positioning' },
//   { id: 10, c: 3, title: 'Shomi Healings — The growth playbook',    type: 'shomi-playbook' },
//   { id: 11, c: 4, title: 'Ultra Fragrance Ltd — Website strategy',  type: 'ultra-fivecs' },
//   { id: 12, c: 4, title: 'Ultra Fragrance Ltd — Five parameters',   type: 'ultra-params' },
//   { id: 13, c: 5, title: 'SmileCare — App design',                  type: 'smile-design' },
//   { id: 14, c: 5, title: 'SmileCare — The patient journey',         type: 'smile-journey' },
//   { id: 15, c: 6, title: 'SR Infra — Company overview',             type: 'sr-overview' },
//   { id: 16, c: 6, title: 'SR Infra — Services & fleet',             type: 'sr-fleet' },
//   { id: 17, c: 6, title: 'SR Infra — Projects',                     type: 'sr-projects' },
//   { id: 18, c: 7, title: 'Fairbanks Orthodontics — SEO',            type: 'fair-seo' },
//   { id: 19, c: 7, title: 'Fairbanks Orthodontics — Lead generation', type: 'fair-leads' },
// ];

// const TABS = [
//   { label: "The Mom's Co.",   go: 0 },
//   { label: 'Lodha',           go: 3 },
//   { label: 'Ciora Cafe',      go: 6 },
//   { label: 'Shomi Healings',  go: 9 },
//   { label: 'Ultra Fragrance', go: 11 },
//   { label: 'SmileCare',       go: 13 },
//   { label: 'SR Infra',        go: 15 },
//   { label: 'Fairbanks Ortho', go: 18 },
// ];

// const PILLARS = [
//   'Vastu education',
//   'Spiritual growth',
//   'Problem → solution',
//   'Social proof',
//   'Behind the scenes',
// ];

// /* ---------- count-up hook ---------- */
// const useCountUp = (end, dec = 0, suffix = '', start = false, duration = 1400) => {
//   const [value, setValue] = useState(0);
//   const raf = useRef(null);
//   useEffect(() => {
//     if (!start) return;
//     let t0 = null;
//     const step = (t) => {
//       if (!t0) t0 = t;
//       const k = Math.min(1, (t - t0) / duration);
//       const eased = 1 - Math.pow(1 - k, 3);
//       setValue(end * eased);
//       if (k < 1) raf.current = requestAnimationFrame(step);
//     };
//     raf.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf.current);
//   }, [start, end, duration]);
//   return value.toFixed(dec) + suffix;
// };

// /* ---------- SMALL PIECES ---------- */
// const Kicker = ({ children, color = '#0bb4ef' }) => (
//   <div
//     className="text-[11px] font-bold tracking-[.16em] uppercase flex items-center gap-2.5"
//     style={{ color }}
//   >
//     <span className="w-[22px] h-0.5 rounded-[2px] bg-current" />
//     {children}
//   </div>
// );

// const Chip = ({ children }) => (
//   <span className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[#f2f4f7] border border-[#e2e5ea]">
//     {children}
//   </span>
// );

// const ListBefore = ({ items }) => (
//   <ul className="list-none p-0 m-0 grid gap-2.5">
//     {items.map((it, i) => (
//       <li
//         key={i}
//         className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#5b6474] before:content-['✕'] before:absolute before:left-0 before:top-0 before:font-extrabold before:text-[#e0525c]"
//       >
//         {it}
//       </li>
//     ))}
//   </ul>
// );

// const ListAfter = ({ items }) => (
//   <ul className="list-none p-0 m-0 grid gap-2.5">
//     {items.map((it, i) => (
//       <li
//         key={i}
//         className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#2c3444] before:content-['✓'] before:absolute before:left-0 before:top-0 before:font-extrabold before:text-[#16a36a]"
//       >
//         {it}
//       </li>
//     ))}
//   </ul>
// );

// const Stat = ({ value, label, color = '#1f6fe0', bg = '#eaf2fe', border = '#d6e5fc' }) => (
//   <div className="rounded-2xl p-[18px] border" style={{ background: bg, borderColor: border }}>
//     <b
//       className="block text-[clamp(28px,3.4vw,42px)] font-extrabold tracking-[-.03em] leading-none"
//       style={{ color }}
//     >
//       {value}
//     </b>
//     <span className="block text-[13px] text-[#5b6474] mt-2 leading-[1.35]">{label}</span>
//   </div>
// );

// const CountStat = ({ end, dec = 0, suffix = '', word, label, color, bg, border, start }) => {
//   const val = useCountUp(end, dec, suffix, start);
//   return <Stat value={word || val} label={label} color={color} bg={bg} border={border} />;
// };

// /* ---------- DrumFace ---------- */
// const DrumFace = forwardRef(({ face, live }, ref) => {
//   const baseClass = `cbp-face absolute inset-0 rounded-[22px] overflow-hidden grid grid-cols-[1.05fr_.95fr] shadow-[0_30px_60px_-30px_rgba(15,26,44,.45)] ring-1 ring-black/5 ${
//     live ? 'cbp-live' : ''
//   }`;
//   const content = renderFaceContent(face.type);
//   if (!content) return null;
//   return (
//     <article
//       ref={ref}
//       className={`${baseClass} ${content.bg || 'bg-white'} ${
//         content.dark ? 'text-white' : 'text-[#0f1a2c]'
//       }`}
//     >
//       <div className="cbp-copy p-9 flex flex-col justify-center min-w-0">{content.copy}</div>
//       <div className="relative overflow-hidden flex items-center justify-center [perspective:900px]">
//         {content.visual}
//       </div>
//       <span className="absolute inset-0 bg-[#0f1a2c] opacity-0 pointer-events-none z-[5]" />
//     </article>
//   );
// });
// DrumFace.displayName = 'DrumFace';

// /* ---------- FACE CONTENT RENDERER ---------- */
// const renderFaceContent = (type) => {
//   switch (type) {
//     /* ---------- MOM'S CO ---------- */
//     case 'mom-overview': return {
//       copy: (
//         <>
//           <div className="flex items-center gap-3.5">
//             <span className="w-[54px] h-[54px] rounded-full grid place-items-center text-[13px] leading-[.95] text-center flex-none bg-[#1f6fe0] text-white" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>
//               the<br />mom's<br />co.
//             </span>
//             <Kicker color="#1f6fe0">Client · Baby &amp; Mom Care (D2C)</Kicker>
//           </div>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             The Mom's Co.<br />
//             <em className="not-italic" style={{ color: '#1f6fe0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Clean. Safe. Effective.</em>
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
//             A trusted D2C brand offering safe, natural and toxin-free personal care products for moms, babies and families. CoderBox partnered with them to build a consistent brand narrative across every digital touchpoint.
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {['01 Strategy', '02 Content', '03 Performance', '04 Website', '05 SEO'].map((c) => <Chip key={c}>{c}</Chip>)}
//           </div>
//           <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#e2e5ea]">
//             <div className="text-[13px] font-semibold leading-[1.35]">
//               <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Website</small>themomsco.com
//             </div>
//             <div className="text-[13px] font-semibold leading-[1.35]">
//               <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Instagram</small>@themomsco
//             </div>
//             <div className="text-[13px] font-semibold leading-[1.35]">
//               <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Our role</small>Digital growth partner
//             </div>
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(160deg,#eaf2fe,#c9dcfb)' }}>
//           <div className="relative w-[190px] h-[380px] bg-white rounded-[36px] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-10"></div>
//             <div className="flex-1 overflow-y-auto pt-7 px-3 bg-white">
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[8px] text-blue-600 font-bold text-center leading-tight">the<br />mom's<br />co.</div>
//                 <div className="flex-1">
//                   <p className="text-[11px] font-bold flex items-center gap-1">themomsco <span className="text-blue-500 text-[10px]">✓</span></p>
//                   <div className="flex gap-3 text-[9px] text-gray-600 mt-0.5">
//                     <span><b>1,248</b> Posts</span>
//                     <span><b>297K</b> Followers</span>
//                     <span><b>487</b> Following</span>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-[9px] font-semibold text-gray-800 mb-1">The Mom's Co.</p>
//               <p className="text-[8px] text-gray-500 mb-1 leading-[1.3]">Safe, Natural, Effective.<br />Care for every little beginning. 👶</p>
//               <p className="text-[8px] text-blue-500 mb-3">🔗 themomsco.com</p>
//               <div className="flex gap-1 mb-3">
//                 <button className="flex-1 bg-blue-500 text-white text-[9px] py-1.5 rounded font-bold">Follow</button>
//                 <button className="flex-1 bg-gray-100 text-gray-800 text-[9px] py-1.5 rounded font-bold">Message</button>
//               </div>
//               <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
//                 {['New Launch', 'Baby Care', 'Mom Care', 'Our Story', 'Community'].map((h, i) => (
//                   <div key={i} className="flex flex-col items-center flex-shrink-0">
//                     <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[6px] text-gray-400">{h[0]}</div>
//                     <span className="text-[6px] text-gray-600 mt-0.5">{h}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-3 gap-1">
//                 {[1, 2, 3, 4, 5, 6].map((_, i) => (
//                   <div key={i} className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-sm flex items-center justify-center text-[6px] text-blue-300 font-bold">IMG</div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ),
//     };

//     case 'mom-challenge': return {
//       copy: (
//         <>
//           <Kicker color="#1f6fe0">From low visibility to high growth</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Where they were.{' '}
//             <em className="not-italic" style={{ color: '#1f6fe0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>What we did.</em>
//           </h3>
//           <div className="grid grid-cols-2 gap-4.5">
//             <div>
//               <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">The challenge</h4>
//               <ListBefore items={['Limited digital visibility in a competitive market', 'Inconsistent social media presence', 'Low website traffic and conversions', 'Needed stronger brand positioning']} />
//             </div>
//             <div>
//               <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">The solution</h4>
//               <ListAfter items={['Clear digital strategy aligned to brand values', 'End-to-end social media with informative content', 'Targeted performance campaigns', 'Website optimised for UX & conversions', 'Brand storytelling to build trust & community']} />
//             </div>
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center gap-4" style={{ background: '#f4f5f7' }}>
//           {['Before', 'Today'].map((title, idx) => (
//             <div key={idx} className="relative flex flex-col items-center">
//               <span className="text-[12px] font-bold text-gray-500 mb-2">{title}</span>
//               <div className="relative w-[160px] h-[320px] bg-white rounded-[30px] border-[5px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1a1a1a] rounded-b-xl z-10"></div>
//                 <div className="flex-1 overflow-y-auto pt-6 px-2 bg-white">
//                   <div className="flex items-center gap-2 mb-2">
//                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[6px] text-blue-600 font-bold text-center leading-tight">the<br />mom's<br />co.</div>
//                     <div className="flex-1">
//                       <p className="text-[9px] font-bold flex items-center gap-1">themomsco <span className="text-blue-500 text-[8px]">✓</span></p>
//                       <div className="flex gap-2 text-[7px] text-gray-600 mt-0.5">
//                         <span><b>{idx === 0 ? '340' : '1,248'}</b> Posts</span>
//                         <span><b>{idx === 0 ? '48.1K' : '297K'}</b> Followers</span>
//                         <span><b>{idx === 0 ? '297' : '487'}</b> Following</span>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="text-[7px] font-semibold text-gray-800 mb-1">The Mom's Co.</p>
//                   <p className="text-[6px] text-gray-500 mb-1 leading-[1.3]">Safe, Natural, Effective.<br />Care for every little beginning. 👶</p>
//                   <p className="text-[6px] text-blue-500 mb-2">🔗 themomsco.com</p>
//                   <div className="flex gap-1 mb-2">
//                     <button className="flex-1 bg-blue-500 text-white text-[7px] py-1 rounded font-bold">Follow</button>
//                     <button className="flex-1 bg-gray-100 text-gray-800 text-[7px] py-1 rounded font-bold">Message</button>
//                   </div>
//                   <div className="grid grid-cols-3 gap-0.5">
//                     {[1, 2, 3, 4, 5, 6].map((_, i) => (
//                       <div key={i} className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-sm flex items-center justify-center text-[5px] text-blue-300 font-bold">IMG</div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ),
//     };

//     case 'mom-results': return {
//       copy: (
//         <>
//           <Kicker color="#1f6fe0">The results</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             A stronger,{' '}
//             <em className="not-italic" style={{ color: '#1f6fe0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>more visible</em>{' '}
//             brand.
//           </h3>
//           <div className="grid grid-cols-2 gap-3.5">
//             <CountStat end={3} suffix="X" label="Increase in website traffic" start />
//             <CountStat end={2.5} dec={1} suffix="X" label="Growth in social media reach" start />
//             <CountStat end={60} suffix="%" label="Increase in online conversions" start />
//             <Stat value="Stronger" label="Brand recall & community engagement" />
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="w-full h-full p-9 flex flex-col justify-center gap-4 text-white" style={{ background: 'linear-gradient(160deg,#1f6fe0,#0d3f8f)' }}>
//           <p className="text-[clamp(20px,2.4vw,30px)] leading-[1.25] m-0" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>
//             "From a growing brand to a digital-first category leader."
//           </p>
//           <p className="m-0 opacity-80 text-[14px] leading-[1.55]">A partnership built on strategy, consistency and measurable results.</p>
//         </div>
//       ),
//       dark: true,
//     };

//     /* ---------- LODHA ---------- */
//     case 'lodha-overview': return {
//       bg: 'bg-[#0d1b3d]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#e0b24a">Client · Real estate developer</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Landmark homes.<br />
//             <em className="not-italic" style={{ color: '#e0b24a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Full</em>{' '}pipeline.
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b9c3d8]">
//             How CoderBox, as lead generation growth partner, drove 672+ home-buyer leads for Lodha's Navi Mumbai projects with aggressive social campaigns and Google PPC.
//           </p>
//           <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Project</small>Lodha Taloja · 1 BHK homes</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Channels</small>Meta · Instagram · Google Ads</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Our role</small>Lead generation growth partner</div>
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full bg-[#0a1530] flex items-center justify-center">
//           <div className="bg-white rounded-xl p-4 shadow-2xl flex flex-col items-center gap-1">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-[#e0b24a] rounded flex items-center justify-center text-[#0d1b3d] font-bold text-[10px]">L</div>
//               <div className="text-left">
//                 <p className="text-[14px] font-extrabold text-[#0d1b3d] leading-none">LODHA</p>
//                 <p className="text-[7px] text-gray-500 tracking-widest">BUILDING A BETTER LIFE</p>
//               </div>
//             </div>
//           </div>
//           <div className="absolute top-[30%] left-1/2 -translate-x-1/2 bg-white rounded-xl p-3 shadow-2xl flex items-center gap-3 w-[200px]">
//             <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[12px] font-bold">👤</div>
//             <div>
//               <p className="text-[10px] font-bold text-gray-800">New lead · Meta lead form</p>
//               <p className="text-[8px] text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Call back requested · 2 min ago</p>
//             </div>
//           </div>
//           <div className="absolute bottom-[10%] right-[10%] w-[100px] h-[100px] rounded-full bg-[#e0b24a] flex flex-col items-center justify-center text-[#0d1b3d] shadow-xl animate-[cbpWobble_6s_ease-in-out_infinite]">
//             <b className="text-[24px] leading-none tracking-tight">672+</b>
//             <small className="text-[7px] tracking-wider font-bold mt-1">QUALIFIED LEADS</small>
//           </div>
//         </div>
//       ),
//     };

//     case 'lodha-engine': return {
//       bg: 'bg-[#0d1b3d]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#e0b24a">The work</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Leads from every{' '}
//             <em className="not-italic" style={{ color: '#e0b24a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>scroll.</em>
//           </h3>
//           <div className="grid grid-cols-2 gap-4.5 mb-4">
//             <div>
//               <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">Where they were</h4>
//               <ListBefore items={['Crowded, price-sensitive market', 'Low-intent portal enquiries', 'Leads going cold before follow-up']} />
//             </div>
//             <div>
//               <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">What we did</h4>
//               <ListAfter items={['Meta & Instagram lead ads', 'Google PPC on high-intent keywords', 'Instant WhatsApp & call-back follow-up']} />
//             </div>
//           </div>
//           <div className="grid grid-cols-5 gap-1.5">
//             {[
//               { bg: '#b98c3a', i: '01', t: 'Audience', s: 'Navi Mumbai buyers' },
//               { bg: '#c9a24a', i: '02', t: 'Social ads', s: 'Reels · carousels' },
//               { bg: '#1d64e0', i: '03', t: 'Google PPC', s: 'High-intent search' },
//               { bg: '#16366f', i: '04', t: 'Landing page', s: 'Instant forms' },
//               { bg: '#050b1c', i: '05', t: '672+ leads', s: 'To sales, real time', shadow: true },
//             ].map((s) => (
//               <div key={s.i} className="rounded-[10px] px-2.5 py-3 text-[12.5px] font-bold leading-tight text-white" style={{ background: s.bg }}>
//                 <i className="block not-italic mb-1" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', fontSize: 13, opacity: 0.85 }}>{s.i}</i>
//                 {s.t}
//                 <small className="block text-[10px] font-semibold opacity-80 mt-1">{s.s}</small>
//               </div>
//             ))}
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full bg-[#0a1530] flex items-center justify-center overflow-hidden">
//           <div className="absolute top-0 left-0 right-0 bg-[#e0b24a] text-[#0d1b3d] text-[10px] font-extrabold py-1.5 px-4 flex items-center justify-between z-10">
//             <span>LEAD FORM</span>
//             <span>→</span>
//             <span>LEAD</span>
//           </div>
//           <div className="relative w-[170px] h-[300px] bg-white rounded-[28px] border-[5px] border-[#1a1a1a] shadow-2xl overflow-hidden mt-6">
//             <div className="flex-1 overflow-y-auto p-3 bg-white">
//               <div className="flex items-center gap-1 mb-2">
//                 <div className="w-4 h-4 bg-[#e0b24a] rounded flex items-center justify-center text-[6px] font-bold text-[#0d1b3d]">L</div>
//                 <span className="text-[8px] font-bold text-gray-800">LODHA</span>
//                 <span className="text-[6px] text-gray-400 ml-auto">Sponsored</span>
//               </div>
//               <div className="w-full h-[100px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-2 flex items-center justify-center">
//                 <div className="text-center text-white">
//                   <p className="text-[8px] font-bold">Your 1 BHK</p>
//                   <p className="text-[7px] text-[#e0b24a]">in Taloja</p>
//                   <p className="text-[6px] mt-1 bg-[#e0b24a] text-[#0d1b3d] px-1 py-0.5 rounded font-bold inline-block">Starting ₹28.9 L*</p>
//                 </div>
//               </div>
//               <div className="bg-blue-50 rounded-lg p-2 mb-2">
//                 <p className="text-[7px] font-bold text-gray-800">Get details</p>
//                 <p className="text-[6px] text-gray-500">Lodha Move-in-ready lifestyle in Navi Mumbai. Book your site visit today.</p>
//               </div>
//               <p className="text-[6px] text-gray-400">Liked by homebuyers & others</p>
//             </div>
//           </div>
//           <div className="absolute right-[5%] top-[45%] bg-white rounded-xl p-3 shadow-2xl w-[160px]">
//             <p className="text-[8px] font-bold text-gray-800 mb-1">CRM · NEW LEAD</p>
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 rounded-full bg-[#e0b24a] flex items-center justify-center text-[10px] font-bold text-[#0d1b3d]">R</div>
//               <div>
//                 <p className="text-[8px] font-bold text-gray-800">Rohan S.</p>
//                 <p className="text-[6px] text-gray-500">1 BHK · Site visit</p>
//               </div>
//             </div>
//             <div className="flex gap-1 mt-2">
//               <span className="text-[6px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">HOT</span>
//               <span className="text-[6px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">WhatsApp sent</span>
//             </div>
//           </div>
//         </div>
//       ),
//     };

//     case 'lodha-results': return {
//       bg: 'bg-[#0d1b3d]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#e0b24a">The results</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             672+ leads.{' '}
//             <em className="not-italic" style={{ color: '#e0b24a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>One</em>{' '}full pipeline.
//           </h3>
//           <div className="grid grid-cols-2 gap-3.5">
//             <CountStat end={672} suffix="+" label="Home-buyer leads delivered to sales" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
//             <Stat value="Always-on" label="Meta & Instagram lead ads" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
//             <Stat value="High-intent" label="Google Search PPC" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
//             <Stat value="Real-time" label="Leads to sales via CRM & WhatsApp" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full bg-[#0a1530] flex items-center justify-center overflow-hidden">
//           <div className="absolute top-0 left-0 right-0 bg-[#e0b24a] text-[#0d1b3d] text-[10px] font-extrabold py-1.5 px-4 flex items-center justify-center z-10">
//             <span>LANDING PAGE</span>
//           </div>
//           <div className="relative w-[200px] h-[130px] bg-gray-800 rounded-t-xl border-4 border-gray-700 shadow-2xl mt-4 overflow-hidden">
//             <div className="w-full h-full bg-white p-2">
//               <div className="flex items-center gap-1 mb-1">
//                 <div className="w-3 h-3 bg-[#e0b24a] rounded flex items-center justify-center text-[4px] font-bold text-[#0d1b3d]">L</div>
//                 <span className="text-[6px] font-bold text-gray-800">LODHA</span>
//               </div>
//               <p className="text-[7px] font-bold text-gray-800 leading-tight">Homes in Taloja, Navi Mumbai</p>
//               <p className="text-[6px] text-[#e0b24a] bg-[#e0b24a]/10 px-1 py-0.5 rounded inline-block mt-1 font-bold">1 BHK from ₹28.9 L*</p>
//               <div className="mt-2 grid grid-cols-2 gap-1">
//                 <div className="h-6 bg-gray-100 rounded"></div>
//                 <div className="h-6 bg-gray-100 rounded"></div>
//               </div>
//             </div>
//           </div>
//           <div className="absolute right-[5%] bottom-[10%] w-[140px] bg-[#e5ddd5] rounded-xl p-2 shadow-2xl">
//             <div className="flex items-center gap-1 mb-2 bg-[#075e54] text-white p-1.5 rounded-t-lg -m-2 mb-2">
//               <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[6px] text-white">W</div>
//               <span className="text-[7px] font-bold">WhatsApp</span>
//             </div>
//             <div className="space-y-1">
//               <div className="bg-white rounded-lg p-1.5 text-[6px] text-gray-800 max-w-[80%]">Hi Rohan! Thanks for your interest in Lodha, Taloja. Here's the price sheet 📄</div>
//               <div className="bg-[#dcf8c6] rounded-lg p-1.5 text-[6px] text-gray-800 max-w-[80%] ml-auto">Shall we book your site visit this Saturday?</div>
//               <div className="bg-white rounded-lg p-1.5 text-[6px] text-gray-800 max-w-[80%]">Yes, 11 AM works</div>
//             </div>
//           </div>
//           <div className="absolute bottom-[5%] left-[10%] w-[80px] h-[80px] rounded-full bg-[#e0b24a] flex flex-col items-center justify-center text-[#0d1b3d] shadow-xl animate-[cbpWobble_6s_ease-in-out_infinite]">
//             <b className="text-[18px] leading-none tracking-tight">672+</b>
//             <small className="text-[6px] tracking-wider font-bold mt-0.5">QUALIFIED LEADS</small>
//           </div>
//         </div>
//       ),
//     };

//     /* ---------- CIORA ---------- */
//     case 'ciora-overview': return {
//       bg: 'bg-[#f7f0e5]',
//       copy: (
//         <>
//           <div className="flex items-center gap-3.5">
//             <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#241a15] text-[#e0a24a] text-[24px]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', boxShadow: 'inset 0 0 0 2px #e0a24a' }}>C</span>
//             <Kicker color="#c0643a">Client · Café &amp; dining · Dubai</Kicker>
//           </div>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Coffee first.<br />
//             <em className="not-italic" style={{ color: '#c0643a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Crowds follow.</em>
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
//             How CoderBox, brand &amp; growth partner since January 2026, turned a new Dubai Investment Park café into a name people search, shoot and share: a full identity, a website, a proper food shoot and a Meta presence built from zero.
//           </p>
//           <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#e6d9c6]">
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Website</small>cioracafe.ae</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Meta presence</small>@cioracafe</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Our role</small>Brand &amp; growth partner</div>
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: '#efe4d2' }}>
//           <div className="bg-[#fdf6e9] rounded-xl p-4 shadow-2xl w-[180px] border border-[#e0a24a]/30">
//             <div className="flex items-center gap-2 mb-3">
//               <div className="w-6 h-6 rounded-full bg-[#241a15] flex items-center justify-center text-[#e0a24a] text-[10px] font-bold">C</div>
//               <div>
//                 <p className="text-[10px] font-extrabold text-[#241a15] tracking-wider">CIORA</p>
//                 <p className="text-[6px] text-[#c0643a] tracking-widest">CAFE · DUBAI</p>
//               </div>
//             </div>
//             <p className="text-[6px] font-bold text-[#c0643a] tracking-widest uppercase mb-2">Morning</p>
//             {['Flat White', 'Avocado Toast', 'Ciora Pancakes'].map((item, i) => (
//               <div key={i} className="flex justify-between text-[7px] text-[#241a15] mb-1">
//                 <span>{item}</span>
//                 <span className="font-bold">{[18, 42, 46][i]}</span>
//               </div>
//             ))}
//             <p className="text-[6px] font-bold text-[#c0643a] tracking-widest uppercase mt-3 mb-2">All Day</p>
//             {['Truffle Eggs', 'Iced Spanish Latte'].map((item, i) => (
//               <div key={i} className="flex justify-between text-[7px] text-[#241a15] mb-1">
//                 <span>{item}</span>
//                 <span className="font-bold">{[52, 24][i]}</span>
//               </div>
//             ))}
//             <p className="text-[6px] text-[#c0643a] text-center mt-3 tracking-widest">CIORACAFE.AE</p>
//           </div>
//           <div className="absolute bottom-[15%] left-[5%] bg-white rounded-xl p-3 shadow-2xl flex items-center gap-2 w-[160px]">
//             <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[12px]">☕</div>
//             <div>
//               <p className="text-[8px] font-bold text-gray-800">Table booked · Ciora</p>
//               <p className="text-[6px] text-gray-500">Online · Saturday, 9:00 AM</p>
//             </div>
//           </div>
//           <div className="absolute bottom-[10%] right-[5%] w-[80px] h-[80px] rounded-full bg-[#e0a24a] flex flex-col items-center justify-center text-[#241a15] shadow-xl animate-[cbpWobble_6s_ease-in-out_infinite]">
//             <small className="text-[6px] tracking-widest font-bold">SINCE</small>
//             <b className="text-[18px] leading-none tracking-tight">JAN</b>
//             <small className="text-[6px] tracking-widest font-bold">2026</small>
//           </div>
//         </div>
//       ),
//     };

//     case 'ciora-work': return {
//       bg: 'bg-[#f7f0e5]',
//       copy: (
//         <>
//           <Kicker color="#c0643a">Branding · Web · Photoshoot · Meta</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Seen before they're{' '}
//             <em className="not-italic" style={{ color: '#c0643a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>seated.</em>
//           </h3>
//           <div className="grid grid-cols-2 gap-4.5">
//             <div>
//               <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">Where they were</h4>
//               <ListBefore items={['A brand-new café with no brand system', 'No website; the menu lived on paper', 'Food shot on phones, under yellow light', 'No Instagram or Facebook presence']} />
//             </div>
//             <div>
//               <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">What CoderBox did</h4>
//               <ListAfter items={['Full identity: logo, palette, menu & collateral', 'Website with menu, gallery & enquiries', 'On-site food, drinks & interior shoot', 'Instagram + Facebook built from zero']} />
//             </div>
//           </div>
//           <div className="grid grid-cols-5 gap-1.5 mt-4.5 relative">
//             <div className="absolute left-1.5 right-1.5 top-[5px] h-0.5 rounded" style={{ background: 'linear-gradient(90deg,#c0643a,#e0a24a)' }} />
//             {[
//               { s: 'JAN', t: 'Brand identity' },
//               { s: 'FEB', t: 'Website live' },
//               { s: 'MAR', t: 'Photoshoot' },
//               { s: 'APR', t: 'Meta launch' },
//               { s: 'NOW', t: 'Always-on content' },
//             ].map((s, i) => (
//               <div key={i} className="relative pt-[18px] text-[11.5px] font-bold leading-[1.3]">
//                 <span className="absolute left-0 top-0 w-3 h-3 rounded-full border-2 border-[#c0643a]" style={{ background: '#f7f0e5' }} />
//                 <small className="block text-[9.5px] tracking-[.12em] text-[#c0643a] mb-0.5">{s.s}</small>
//                 {s.t}
//               </div>
//             ))}
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: '#efe4d2' }}>
//           <div className="bg-white rounded-xl p-4 shadow-2xl w-[220px]">
//             <p className="text-[8px] font-bold tracking-widest text-[#241a15] mb-3">BRAND BOARD</p>
//             <div className="flex gap-2 mb-3">
//               <div className="w-16 h-16 bg-[#241a15] rounded-lg flex items-center justify-center">
//                 <span className="text-[#e0a24a] text-[20px]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>C</span>
//               </div>
//               <div className="flex-1">
//                 <p className="text-[14px] font-extrabold text-[#241a15]">Aa</p>
//                 <p className="text-[6px] text-gray-500 tracking-widest">POPPINS · HEADINGS</p>
//                 <p className="text-[12px] text-[#c0643a]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Ciora</p>
//                 <p className="text-[6px] text-gray-500 tracking-widest">LORA ITALIC · ACCENT</p>
//               </div>
//             </div>
//             <div className="flex gap-1">
//               {['#241a15', '#c0643a', '#e0a24a', '#8b9a7b', '#fdf6e9'].map((c) => (
//                 <div key={c} className="flex-1 h-6 rounded" style={{ background: c }} />
//               ))}
//             </div>
//             <div className="flex gap-1 mt-1">
//               {['ESPRESSO', 'CLAY', 'AMBER', 'SAGE', 'CREAM'].map((n) => (
//                 <span key={n} className="text-[5px] text-gray-500 flex-1 text-center tracking-wider">{n}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       ),
//     };

//     case 'ciora-results': return {
//       bg: 'bg-[#241a15]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#e0a24a">The results</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             A café people find,{' '}
//             <em className="not-italic" style={{ color: '#e0a24a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>follow</em>{' '}and fill.
//           </h3>
//           <div className="grid grid-cols-2 gap-3.5">
//             <CountStat end={4.2} dec={1} suffix="K+" label="Instagram followers" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
//             <CountStat end={180} suffix="+" label="Posts, reels & stories shipped" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
//             <CountStat end={250} suffix="K+" label="Monthly Meta reach · Instagram + Facebook" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
//             <Stat value="Dubai" label="DIP · Al Furjan · Jebel Ali · Expo City" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center gap-4" style={{ background: '#efe4d2' }}>
//           {['BEFORE', 'TODAY'].map((title, idx) => (
//             <div key={idx} className="relative flex flex-col items-center">
//               <span className="text-[8px] font-extrabold text-[#241a15] tracking-widest mb-2">{title}</span>
//               <div className="relative w-[140px] h-[280px] bg-white rounded-[28px] border-[5px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-b-xl z-10"></div>
//                 <div className="flex-1 overflow-y-auto pt-6 px-2 bg-white">
//                   <div className="flex items-center gap-2 mb-2">
//                     <div className="w-7 h-7 rounded-full bg-[#c0643a] flex items-center justify-center text-[6px] text-white font-bold">C</div>
//                     <div className="flex-1">
//                       <p className="text-[8px] font-bold flex items-center gap-1">ciora_page {idx === 1 && <span className="text-blue-500 text-[7px]">✓</span>}</p>
//                       <div className="flex gap-2 text-[6px] text-gray-600 mt-0.5">
//                         <span><b>{idx === 0 ? '0' : '180+'}</b> posts</span>
//                         <span><b>{idx === 0 ? '0' : '4.2K'}</b> followers</span>
//                         <span><b>{idx === 0 ? '0' : '3x'}</b> weekly reels</span>
//                       </div>
//                     </div>
//                   </div>
//                   {idx === 1 && (
//                     <>
//                       <p className="text-[6px] font-semibold text-gray-800">Ciora Cafe · Dubai Investment Park</p>
//                       <p className="text-[5px] text-gray-500 mb-1">Specialty coffee · All-day breakfast · Brunch & lunch · Park Road North St.</p>
//                       <p className="text-[5px] text-blue-500 mb-2">🔗 cioracafe.ae</p>
//                       <div className="flex gap-1 mb-2">
//                         <button className="flex-1 bg-blue-500 text-white text-[6px] py-1 rounded font-bold">Directions</button>
//                         <button className="flex-1 bg-green-500 text-white text-[6px] py-1 rounded font-bold">WhatsApp</button>
//                       </div>
//                     </>
//                   )}
//                   <div className="grid grid-cols-3 gap-0.5">
//                     {[1, 2, 3, 4, 5, 6].map((_, i) => (
//                       <div key={i} className="aspect-square bg-gradient-to-br from-[#c0643a]/20 to-[#e0a24a]/20 rounded-sm flex items-center justify-center text-[5px] text-[#c0643a] font-bold">{idx === 0 ? '' : 'IMG'}</div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ),
//     };

//     /* ---------- SHOMI ---------- */
//     case 'shomi-positioning': return {
//       bg: 'bg-[#24163a]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#b9a3f0">Client · Vastu, tarot &amp; healing</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Align your space, energy and soul,{' '}
//             <em className="not-italic" style={{ color: '#b9a3f0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>and life flows.</em>
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#cfc3e8]">
//             An Instagram growth strategy that positions Shomi Healings not as a service page but as a guidance ecosystem: people come for clarity, balance, peace and direction.
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {['Calm, reassuring, wise', 'Spiritual but practical', 'High trust, not sensational'].map((c) => (
//               <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#efe9fc]">{c}</span>
//             ))}
//           </div>
//           <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Platform</small>Instagram</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Deliverable</small>Growth strategy</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Goal</small>Followers → consultation leads</div>
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 50%, #3a2566 0%, #1a1030 80%)' }}>
//           <div className="relative w-[220px] h-[220px] [transform:rotateX(60deg)] [transform-style:preserve-3d]">
//             <div className="absolute inset-0 [transform-style:preserve-3d]" style={{ animation: 'cbpSpinZ 20s linear infinite' }}>
//               <div className="absolute inset-0 rounded-full border border-dashed border-[#b9a3f0]/40" />
//               <div className="absolute inset-[20%] rounded-full border border-dashed border-[#b9a3f0]/30" />
//               <div className="absolute inset-[40%] rounded-full border border-dashed border-[#b9a3f0]/20" />
//               {PILLARS.map((t, i) => {
//                 const a = i * (360 / PILLARS.length);
//                 return (
//                   <div key={i} className="absolute left-1/2 top-1/2 w-0 h-0" style={{ transform: `rotateZ(${a}deg) translateY(-50%)` }}>
//                     <span className="absolute block whitespace-nowrap bg-white/10 border border-[#b9a3f0]/50 backdrop-blur text-white text-[9px] font-bold px-2 py-1 rounded-full" style={{ transform: `translate(-50%,-50%) rotateZ(${-a}deg) rotateX(-60deg)` }}>{t}</span>
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="absolute left-1/2 top-1/2 w-[80px] h-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center text-center" style={{ transform: 'rotateX(-60deg) translateZ(40px)', background: 'radial-gradient(circle, #fff 0%, #e3d6ff 30%, rgba(185,163,240,0.4) 60%, transparent 80%)' }}>
//               <span className="text-[#24163a] text-[10px] font-bold leading-tight" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Shomi<br />Healings</span>
//             </div>
//           </div>
//         </div>
//       ),
//     };

//     case 'shomi-playbook': return {
//       bg: 'bg-[#24163a]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#b9a3f0">The playbook</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Consistency{' '}
//             <em className="not-italic" style={{ color: '#b9a3f0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>over virality.</em>
//           </h3>
//           <div className="grid grid-cols-5 gap-1.5 mb-4">
//             {[
//               { b: '1–2', s: 'Reels / day' },
//               { b: '8–15', s: 'Stories / day' },
//               { b: '2–3', s: 'Carousels / wk' },
//               { b: '1', s: 'Live / wk' },
//               { b: '3–4', s: 'Broadcasts / wk' },
//             ].map((c, i) => (
//               <div key={i} className="bg-white/5 border border-white/10 rounded-[10px] px-2 py-2.5 text-center">
//                 <b className="block text-[15px] text-[#b9a3f0]">{c.b}</b>
//                 <span className="text-[10.5px] text-[#cfc3e8]">{c.s}</span>
//               </div>
//             ))}
//           </div>
//           <div className="grid grid-cols-2 gap-3.5">
//             <Stat value="+15–25%" label="Monthly follower growth target" color="#b9a3f0" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
//             <Stat value="5–15" label="DM leads / day target" color="#b9a3f0" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
//           </div>
//           <p className="text-[11.5px] text-[#b7a9d6] italic mt-3">
//             Targets set in the strategy. Framework: education builds authority, emotion builds trust, proof builds confidence, DMs build revenue.
//           </p>
//         </>
//       ),
//       visual: (
//         <div className="p-7 w-full h-full flex flex-col justify-center" style={{ background: 'radial-gradient(circle at 50% 50%,#4a2f85 0,#24163a 70%)' }}>
//           <div className="text-[#efe9fc] w-full max-w-[340px]">
//             <h4 className="text-[12px] tracking-[.14em] uppercase mb-2.5 font-bold" style={{ color: '#b9a3f0' }}>REELS FRAMEWORK</h4>
//             <ul className="list-none p-0 m-0 grid gap-2.5">
//               {['0–3 sec · Pattern break: eye contact or home visual', '3–7 sec · Pain or curiosity hook', '7–15 sec · Value and explanation', '15–20 sec · Gentle CTA: DM "VASTU"'].map((t, i) => (
//                 <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#cfc3e8] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:opacity-70 before:text-[#b9a3f0]">{t}</li>
//               ))}
//             </ul>
//             <h4 className="text-[12px] tracking-[.14em] uppercase mb-2.5 mt-5 font-bold" style={{ color: '#b9a3f0' }}>DM CONVERSION, NON-SALESY</h4>
//             <ul className="list-none p-0 m-0 grid gap-2.5">
//               <li className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#cfc3e8] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-[#b9a3f0]">Gratitude → emotional question → soft offer</li>
//             </ul>
//           </div>
//         </div>
//       ),
//     };

//     /* ---------- ULTRA ---------- */
//     case 'ultra-fivecs': return {
//       bg: 'bg-[#fbf4ef]',
//       copy: (
//         <>
//           <Kicker color="#a8446a">Client · Fragrance</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             A website built on{' '}
//             <em className="not-italic" style={{ color: '#a8446a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>five Cs.</em>
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
//             For Ultra Fragrance Ltd, CoderBox set out the parameters for running a successful website: a platform to talk to every customer individually, easy to manage, and at a fraction of the cost of other channels.
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {['Credibility', 'Convenience', 'Constant connectivity', 'Communication', 'Cost'].map((c) => (
//               <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-[#f0dde2]">{c}</span>
//             ))}
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 40%,#fff 0,#f6e2e6 45%,#d9a3b3 100%)' }}>
//           <div className="relative w-[170px] h-[230px] [transform-style:preserve-3d]" style={{ animation: 'cbpSpinY 16s linear infinite' }}>
//             {['C', 'C', 'C', 'C', 'C'].map((letter, i) => (
//               <div key={i} className="absolute inset-0 rounded-[10px] flex flex-col justify-end p-4 text-white" style={{ background: 'linear-gradient(165deg,rgba(255,255,255,.35),rgba(168,68,106,.85))', border: '1px solid rgba(255,255,255,.6)', boxShadow: 'inset 0 0 40px rgba(255,255,255,.25)', transform: `rotateY(${i * 72}deg) translateZ(140px)` }}>
//                 <b className="text-[34px] leading-none" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', fontWeight: 600 }}>{letter}</b>
//                 <span className="text-[12.5px] font-bold tracking-[.04em] mt-1.5">{['Credibility', 'Convenience', 'Connectivity', 'Communication', 'Cost'][i]}</span>
//               </div>
//             ))}
//           </div>
//           <div className="absolute bottom-[14%] left-1/2 w-[240px] h-[40px] -translate-x-1/2 rounded-[50%]" style={{ background: 'radial-gradient(ellipse,rgba(58,29,43,.35),transparent 70%)' }} />
//         </div>
//       ),
//     };

//     case 'ultra-params': return {
//       bg: 'bg-[#fbf4ef]',
//       copy: (
//         <>
//           <Kicker color="#a8446a">The framework</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Five parameters for a site{' '}
//             <em className="not-italic" style={{ color: '#a8446a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>that performs.</em>
//           </h3>
//           <div className="grid gap-2">
//             {[
//               { i: '01', b: 'Content & messaging', s: 'Accurate product, campaign and brand content with a consistent voice.' },
//               { i: '02', b: 'Stability & technical excellence', s: 'Reliable DNS, regular backups and dependable maintenance.' },
//               { i: '03', b: 'Speed & robustness', s: 'Fast on any device and connection, on a sound framework.' },
//               { i: '04', b: 'Aesthetics & functionalism', s: 'Simplicity and elegance over complex design patterns.' },
//               { i: '05', b: 'Accessibility & usability', s: 'Responsive in design and performance for every user.' },
//             ].map((p) => (
//               <div key={p.i} className="grid grid-cols-[34px_1fr] gap-3 items-start bg-white border border-[#f0dde2] rounded-[12px] px-3 py-2.5">
//                 <i className="text-[18px]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', fontWeight: 600, color: '#a8446a' }}>{p.i}</i>
//                 <p className="m-0"><b className="block text-[13.5px]">{p.b}</b><span className="text-[12px] text-[#5b6474] leading-[1.4]">{p.s}</span></p>
//               </div>
//             ))}
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 40%,#fff 0,#f6e2e6 45%,#d9a3b3 100%)' }}>
//           <div className="relative w-[58%] h-[44%] [transform-style:preserve-3d]" style={{ transform: 'translateY(14%) rotateX(50deg) rotateZ(-28deg)' }}>
//             {[136, 102, 68, 34, 0].map((z, i) => (
//               <div key={i} className="absolute inset-0 flex flex-col justify-end items-end rounded-xl bg-white border border-[#f0dde2] px-3.5 py-3 text-[12px] font-bold text-[#3a1d2b]" style={{ boxShadow: '0 20px 40px -20px rgba(58,29,43,.5)', transform: `translateZ(${z}px) translate(${z * -0.5}px,${z * -0.5}px)` }}>
//                 <span className="absolute left-3.5 top-2.5 text-[7px] tracking-widest text-[#e0b4c1]">● ● ●</span>
//                 {['05 · Accessibility', '04 · Aesthetics', '03 · Speed', '02 · Stability', '01 · Content & messaging'][i]}
//               </div>
//             ))}
//           </div>
//         </div>
//       ),
//     };

//     /* ---------- SMILE ---------- */
//     case 'smile-design': return {
//       bg: 'bg-gradient-to-br from-[#f3fbfb] to-[#e2f4f3]',
//       copy: (
//         <>
//           <Kicker color="#138f8f">Client · Dental care app · UI/UX</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             A healthy smile,{' '}
//             <em className="not-italic" style={{ color: '#138f8f', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>one tap away.</em>
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
//             A calm, aqua glass interface for SmileCare's dental app, designed so patients can find a dentist, explore treatments and book a visit in one smooth flow.
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {['Onboarding', 'Home dashboard', 'Treatment pages', 'Booking flow', 'Glass UI system'].map((c) => (
//               <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-[#cdebea]">{c}</span>
//             ))}
//           </div>
//           <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#cdebea]">
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Brand line</small>Healthy Smile, Happy Life</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Platform</small>Mobile app</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Scope</small>UI/UX design</div>
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 45%,#ffffff 0,#d6f1ef 45%,#9fdcd8 100%)' }}>
//           <div className="flex gap-2 items-center">
//             {[0, 1, 2].map((i) => (
//               <div key={i} className="relative w-[90px] h-[180px] bg-white rounded-[18px] border-[3px] border-white shadow-xl overflow-hidden" style={{ transform: i === 0 ? 'rotateY(28deg) translateZ(-40px)' : i === 2 ? 'rotateY(-28deg) translateZ(-40px)' : 'translateZ(40px)', animation: 'cbpFan 7s ease-in-out infinite', animationDelay: `${-i * 2}s` }}>
//                 <div className="p-2 bg-gradient-to-b from-teal-50 to-white h-full">
//                   <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-[8px] text-teal-600 font-bold mx-auto mb-1">🦷</div>
//                   <p className="text-[6px] font-bold text-center text-teal-800">SmileCare</p>
//                   <p className="text-[5px] text-center text-gray-500 mb-1">Healthy Smile, Happy Life</p>
//                   <div className="bg-teal-500 text-white text-[5px] py-1 rounded text-center font-bold mb-1">Book Appointment</div>
//                   <div className="grid grid-cols-2 gap-0.5">
//                     {[1, 2, 3, 4].map((_, j) => (
//                       <div key={j} className="h-5 bg-teal-50 rounded flex items-center justify-center text-[4px] text-teal-600">🦷</div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ),
//     };

//     case 'smile-journey': return {
//       bg: 'bg-gradient-to-br from-[#f3fbfb] to-[#e2f4f3]',
//       copy: (
//         <>
//           <Kicker color="#138f8f">The patient journey</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             From hello to{' '}
//             <em className="not-italic" style={{ color: '#138f8f', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>booked.</em>
//           </h3>
//           <ul className="list-none p-0 m-0 grid gap-2.5">
//             {[
//               { b: '01 Welcome', s: 'brand promise, Get Started and sign in' },
//               { b: '02 Home', s: 'search, Find Dentist, Appointments, Treatments and 24/7 Emergency' },
//               { b: '03 Treatment', s: 'duration, sessions, results, benefits and starting price' },
//               { b: '04 Booking', s: 'date, time slot, in-clinic or video consult, and fee before you confirm' },
//             ].map((s, i) => (
//               <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#2c3444] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-[#16a3a3]">
//                 <b>{s.b}</b> · {s.s}
//               </li>
//             ))}
//           </ul>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 45%,#ffffff 0,#d6f1ef 45%,#9fdcd8 100%)' }}>
//           <div className="relative w-[34%] aspect-[9/16] [transform-style:preserve-3d]" style={{ animation: 'cbpSpinY 18s linear infinite' }}>
//             {[0, 1, 2, 3].map((i) => (
//               <div key={i} className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e2f4f3] to-[#9fdcd8] border-[3px] border-white shadow-xl" style={{ transform: `rotateY(${i * 90}deg) translateZ(140px)`, backfaceVisibility: 'hidden' }}>
//                 <div className="p-3 h-full flex flex-col items-center justify-center">
//                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[14px] mb-2">🦷</div>
//                   <p className="text-[8px] font-bold text-teal-800">SmileCare</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ),
//     };

//     /* ---------- SR INFRA ---------- */
//     case 'sr-overview': return {
//       bg: 'bg-[#1c1813]', dark: true,
//       copy: (
//         <>
//           <div className="flex items-center gap-3.5">
//             <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#f2b705] text-[#1c1813] font-extrabold text-[15px]">SR</span>
//             <Kicker color="#f2b705">Client · Earthwork &amp; infrastructure</Kicker>
//           </div>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Moving earth,{' '}
//             <em className="not-italic" style={{ color: '#f2b705', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>since 2005.</em>
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#cfc6b8]">
//             SR Infra – Earth Work Solutions supplies earthworks, major civil infrastructure and mining projects with a well-maintained fleet and a skilled team, known for mobilising machinery anywhere in the state, including remote sites.
//           </p>
//           <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Established</small>2005</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Base</small>Kompally, Hyderabad</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Leadership</small>Shankar Pallapu · 27+ yrs</div>
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full bg-[#2a241c] flex items-center justify-center">
//           <div className="text-center">
//             <div className="w-16 h-16 rounded-full bg-[#f2b705] flex items-center justify-center text-[#1c1813] font-extrabold text-[20px] mx-auto mb-3">SR</div>
//             <p className="text-[#f2b705] text-[12px] font-bold tracking-widest">SR INFRA</p>
//             <p className="text-[#cfc6b8] text-[9px] mt-1">Earth Work Solutions</p>
//             <p className="text-[#a89c89] text-[8px] mt-3">EST. 2005 · HYDERABAD</p>
//           </div>
//         </div>
//       ),
//     };

//     case 'sr-fleet': return {
//       bg: 'bg-[#1c1813]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#f2b705">Services &amp; fleet</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             The right machine,{' '}
//             <em className="not-italic" style={{ color: '#f2b705', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>at the right time.</em>
//           </h3>
//           <div className="flex flex-wrap gap-2 mb-4">
//             {['Cellar excavation', 'Controlled blasting', 'Forest clearance', 'Demolition', 'Trenching', 'Culverts', 'Landscaping', 'Concrete breaking & removal'].map((c) => (
//               <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#f3ede3]">{c}</span>
//             ))}
//           </div>
//           <div className="grid grid-cols-5 gap-1.5 mt-4">
//             {[
//               { b: 14, s: 'Excavators, 20–22 t' },
//               { b: 30, s: '16 cum dumpers' },
//               { b: 15, s: 'JHR machines' },
//               { b: 3, s: 'Rig machines' },
//               { b: 2, s: 'Transport vehicles' },
//             ].map((f, i) => (
//               <div key={i} className="rounded-[10px] px-2 py-2.5 text-center bg-[#f2b705]/10 border border-[#f2b705]/30">
//                 <b className="block text-[22px] leading-none text-[#f2b705]">{f.b}</b>
//                 <span className="block text-[10.5px] leading-tight text-[#cfc6b8] mt-1">{f.s}</span>
//               </div>
//             ))}
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full bg-[#2a241c] flex items-center justify-center">
//           <div className="grid grid-cols-2 gap-3">
//             {[
//               { b: 14, s: 'Excavators' },
//               { b: 30, s: 'Dumpers' },
//               { b: 15, s: 'JHR' },
//               { b: 3, s: 'Rigs' },
//               { b: 2, s: 'Transport' },
//               { b: 64, s: 'Total Fleet' },
//             ].map((f, i) => (
//               <div key={i} className={`rounded-xl p-4 text-center ${i === 5 ? 'bg-[#f2b705] text-[#1c1813]' : 'bg-white/5 border border-white/10 text-[#f3ede3]'}`}>
//                 <b className={`block text-[28px] leading-none ${i === 5 ? 'text-[#1c1813]' : 'text-[#f2b705]'}`}>{f.b}</b>
//                 <span className={`block text-[10px] mt-1 ${i === 5 ? 'text-[#1c1813]/80' : 'text-[#a89c89]'}`}>{f.s}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       ),
//     };

//     case 'sr-projects': return {
//       bg: 'bg-[#1c1813]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#f2b705">Track record</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Hyderabad's skyline,{' '}
//             <em className="not-italic" style={{ color: '#f2b705', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>from the ground down.</em>
//           </h3>
//           <div className="grid grid-cols-2 gap-3.5">
//             <CountStat end={15} label="Major projects across Hyderabad" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
//             <CountStat end={13.9} dec={1} suffix="L+" label="Cubic metres excavated or in progress" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
//             <CountStat end={2} suffix="L" label="m³ on the largest single site, SRIYAS Khajaguda" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
//             <CountStat end={64} label="Machines in the owned fleet" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full bg-[#2a241c] flex flex-col justify-end">
//           <div className="overflow-hidden bg-[#1c1813]/85 backdrop-blur border-t border-[#f2b705]/35 py-2.5">
//             <div className="flex gap-7 w-max text-[12px] font-bold tracking-[.08em] uppercase text-[#f3ede3]" style={{ animation: 'cbpMarq 26s linear infinite' }}>
//               {[0, 1].map((k) => (
//                 <React.Fragment key={k}>
//                   {['Rajapushpa', 'Legend', 'Mahaveer', 'SAAS Infra', 'AkzoNobel', 'Poulomi', 'Sunyuga', 'SRIYAS Life Spaces', 'Magna Infratech', 'Delhi Public School', 'Shilpa'].map((t, i) => (
//                     <span key={`${k}-${i}`} className="before:content-['◆'] before:text-[#f2b705] before:mr-7">{t}</span>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>
//       ),
//     };

//     /* ---------- FAIRBANKS ---------- */
//     case 'fair-seo': return {
//       bg: 'bg-[#0f2340]', dark: true,
//       copy: (
//         <>
//           <div className="flex items-center gap-3.5">
//             <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#5fd4b0] text-[#0f2340] font-extrabold text-[15px]">FO</span>
//             <Kicker color="#5fd4b0">Client · Orthodontics · Lehi, Utah</Kicker>
//           </div>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             Straight smiles,{' '}
//             <em className="not-italic" style={{ color: '#5fd4b0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>found first.</em>
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b8c7dd]">
//             Fairbanks Orthodontics is a patient-first practice in Lehi, UT, led by Dr. Benjamin Harvey, DDS, MS. CoderBox handles SEO so families searching for braces and aligners nearby find the practice first.
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {['Local SEO', 'Service-page SEO', 'Google Business Profile', 'Invisalign®', 'Damon™ & clear braces'].map((c) => (
//               <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#e6eef8]">{c}</span>
//             ))}
//           </div>
//           <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Website</small>fairbanksorthodontics.com</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Location</small>Lehi, Utah, USA</div>
//             <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Our role</small>SEO &amp; lead generation</div>
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 50%,#1a3a5c 0,#0f2340 80%)' }}>
//           <div className="relative w-[200px] [transform-style:preserve-3d]" style={{ transform: 'rotateX(18deg) rotateY(-18deg)', animation: 'cbpSerp 8s ease-in-out infinite' }}>
//             <div className="bg-white text-[#1f2a3a] rounded-[14px] px-4 py-3.5 shadow-2xl">
//               <div className="flex items-center gap-2 border border-[#dfe3ea] rounded-full px-3 py-2 text-[12px] text-[#3c4656] mb-3">
//                 <span className="w-2.5 h-2.5 border-2 border-[#7b8698] rounded-full" />
//                 orthodontist in lehi ut
//               </div>
//               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474]" style={{ background: 'linear-gradient(90deg,rgba(95,212,176,.18),transparent)', margin: '0 -16px', padding: '9px 16px', borderLeft: '3px solid #2bb38a' }}>
//                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Fairbanks Orthodontics in Lehi, UT</b>
//                 Braces, Invisalign® and complimentary consultations.
//               </div>
//               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474] opacity-55">
//                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Orthodontists near you</b>Compare local providers…
//               </div>
//               <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474] opacity-40">
//                 <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Braces cost guide</b>What to expect…
//               </div>
//             </div>
//             <div className="absolute right-0 -bottom-6 w-[52%] p-2.5 rounded-[14px] bg-white shadow-2xl" style={{ transform: 'translateZ(60px) translate(38%,-14%)' }}>
//               <span className="text-[#f5a623] tracking-widest text-[11px]">★★★★★</span>
//               <b className="block text-[12.5px]">Fairbanks Orthodontics</b>
//               <span className="text-[11px] text-[#5b6474]">Orthodontist · Lehi, UT</span>
//             </div>
//           </div>
//         </div>
//       ),
//     };

//     case 'fair-leads': return {
//       bg: 'bg-[#0f2340]', dark: true,
//       copy: (
//         <>
//           <Kicker color="#5fd4b0">Lead generation</Kicker>
//           <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
//             From search{' '}
//             <em className="not-italic" style={{ color: '#5fd4b0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>to consultation chair.</em>
//           </h3>
//           <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b8c7dd]">
//             Every search, visit and referral is steered toward one action: booking the practice's complimentary orthodontic consultation.
//           </p>
//           <div className="grid grid-cols-5 gap-1.5">
//             {[
//               { i: '01', t: 'Search', s: 'Local & service SEO' },
//               { i: '02', t: 'Visit', s: 'Treatment pages' },
//               { i: '03', t: 'Offer', s: 'Free consultation' },
//               { i: '04', t: 'Enquiry', s: 'Call · form · booking' },
//               { i: '05', t: 'Referral', s: 'Refer-a-friend & rewards' },
//             ].map((s) => (
//               <div key={s.i} className="rounded-[10px] px-2.5 py-3 text-[12.5px] font-bold leading-tight text-white bg-[#5fd4b0]/10 border border-[#5fd4b0]/35">
//                 <i className="block mb-1 text-[#5fd4b0] text-[13px]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', opacity: 1 }}>{s.i}</i>
//                 {s.t}
//                 <small className="block text-[10px] font-semibold opacity-80 mt-1">{s.s}</small>
//               </div>
//             ))}
//           </div>
//         </>
//       ),
//       visual: (
//         <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 50%,#1a3a5c 0,#0f2340 80%)' }}>
//           <div className="relative w-[240px] h-[280px] [transform-style:preserve-3d]" style={{ transform: 'rotateX(62deg)' }}>
//             {[
//               { w: 240, h: 240, ml: -120, t: 0, z: 120, color: 'rgba(95,212,176,.7)', name: 'cbpR1', label: 'Search' },
//               { w: 180, h: 180, ml: -90, t: 30, z: 60, color: 'rgba(95,212,176,.7)', name: 'cbpR2', label: 'Visit' },
//               { w: 120, h: 120, ml: -60, t: 60, z: 0, color: 'rgba(95,212,176,.7)', name: 'cbpR3', label: 'Enquiry' },
//               { w: 64, h: 64, ml: -32, t: 88, z: -60, color: '#5fd4b0', name: null, label: '' },
//             ].map((ring, i) => (
//               <div key={i} className="absolute left-1/2 rounded-full border-2" style={{ width: ring.w, height: ring.h, marginLeft: ring.ml, top: ring.t, transform: `translateZ(${ring.z}px)`, borderColor: ring.color, boxShadow: '0 0 30px rgba(95,212,176,.25) inset', background: i === 3 ? '#5fd4b0' : undefined, animation: ring.name ? `${ring.name} 12s linear infinite` : undefined }}>
//                 {ring.label && (
//                   <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white text-[#0f2340] text-[11px] font-extrabold rounded-full px-2.5 py-1 whitespace-nowrap" style={{ transform: 'translateX(-50%) rotateX(-62deg)' }}>{ring.label}</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       ),
//     };

//     default: return null;
//   }
// };

// /* ---------- DRUM COMPONENT ---------- */
// const ClientCaseStudyDrum = ({ targetFace = null }) => {
//   const rollerRef = useRef(null);
//   const drumRef = useRef(null);
//   const faceRefs = useRef([]);
//   const barRef = useRef(null);
//   const rollerState = useRef({ cur: 0, radius: 0, active: -1 });
//   const [activeFace, setActiveFace] = useState(0);
//   const [countDisplay, setCountDisplay] = useState('01 / ' + DRUM_FACES.length);
//   const [currentFaceTitle, setCurrentFaceTitle] = useState(DRUM_FACES[0].title);
//   const [activeTab, setActiveTab] = useState(0);

//   const N = DRUM_FACES.length;
//   const SLOTS = 6;
//   const STEP = 360 / SLOTS;

//   const reduce =
//     typeof window !== 'undefined' &&
//     window.matchMedia('(prefers-reduced-motion: reduce)').matches;

//   const layout = useCallback(() => {
//     const vh = window.innerHeight;
//     const w = window.innerWidth;
//     const fh = Math.round(Math.min(540, vh * (w < 600 ? 0.64 : 0.6)));
//     document.documentElement.style.setProperty('--fh', `${fh}px`);
//     if (drumRef.current) drumRef.current.style.height = `${fh}px`;
//     rollerState.current.radius = fh / 2 / Math.tan(Math.PI / SLOTS);
//     if (rollerRef.current) rollerRef.current.style.height = reduce ? 'auto' : `${N * 52 + 100}vh`;
//     faceRefs.current.forEach((face, i) => {
//       if (!face) return;
//       face.style.transform = `rotateX(${-i * STEP}deg) translateZ(${rollerState.current.radius}px)`;
//     });
//   }, [N, STEP, reduce]);

//   useEffect(() => {
//     if (reduce) {
//       faceRefs.current.forEach((f) => f && f.classList.add('cbp-live'));
//       return;
//     }
//     let raf;
//     const frame = () => {
//       const roller = rollerRef.current;
//       const drum = drumRef.current;
//       if (!roller || !drum) { raf = requestAnimationFrame(frame); return; }
//       const r = roller.getBoundingClientRect();
//       const total = roller.offsetHeight - window.innerHeight;
//       const p = Math.min(1, Math.max(0, -r.top / total));
//       const raw = p * (N - 1);
//       const base = Math.floor(raw);
//       const f = raw - base;
//       const eased = f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
//       const target = (base + eased) * STEP;
//       const vel = target - rollerState.current.cur;
//       rollerState.current.cur += Math.max(-10, Math.min(10, vel * 0.13));
//       const yaw = Math.max(-14, Math.min(14, vel * 0.45));
//       const push = Math.min(160, Math.abs(vel) * 7);
//       const roll = Math.max(-3, Math.min(3, vel * 0.08));
//       drum.style.transform = `translateZ(${-rollerState.current.radius - push}px) rotateY(${yaw}deg) rotateZ(${roll}deg) rotateX(${rollerState.current.cur}deg)`;

//       faceRefs.current.forEach((face, i) => {
//         if (!face) return;
//         const d = Math.abs(rollerState.current.cur / STEP - i);
//         face.style.opacity = Math.max(0, 1 - d * 0.82).toFixed(3);
//         face.style.visibility = d > 1.4 ? 'hidden' : 'visible';
//         face.style.pointerEvents = d < 0.5 ? 'auto' : 'none';
//       });

//       if (barRef.current) barRef.current.style.width = `${p * 100}%`;
//       const idx = Math.max(0, Math.min(N - 1, Math.round(rollerState.current.cur / STEP)));
//       if (idx !== rollerState.current.active) setActiveFace(idx);
//       raf = requestAnimationFrame(frame);
//     };
//     raf = requestAnimationFrame(frame);
//     return () => cancelAnimationFrame(raf);
//   }, [N, STEP, reduce]);

//   useEffect(() => { layout(); window.addEventListener('resize', layout); return () => window.removeEventListener('resize', layout); }, [layout]);

//   useEffect(() => {
//     const s = rollerState.current;
//     if (s.active >= 0 && faceRefs.current[s.active]) faceRefs.current[s.active].classList.remove('cbp-live');
//     s.active = activeFace;
//     if (faceRefs.current[activeFace]) faceRefs.current[activeFace].classList.add('cbp-live');
//     setCurrentFaceTitle(DRUM_FACES[activeFace].title);
//     setCountDisplay(('0' + (activeFace + 1)).slice(-2) + ' / ' + N);
//     setActiveTab(DRUM_FACES[activeFace].c);
//   }, [activeFace, N]);

//   const goToFace = useCallback((i) => {
//     if (reduce) {
//       if (faceRefs.current[i]) faceRefs.current[i].scrollIntoView({ block: 'center' });
//       return;
//     }
//     const roller = rollerRef.current;
//     if (!roller) return;
//     const t = roller.offsetHeight - window.innerHeight;
//     const top = roller.getBoundingClientRect().top + window.scrollY + t * (i / (N - 1)) + 2;
//     window.scrollTo({ top, behavior: 'smooth' });
//   }, [N, reduce]);

//   useEffect(() => {
//     if (targetFace == null) return;
//     goToFace(targetFace);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [targetFace]);

//   return (
//     <div className="cbp-drum-root relative w-full">
//       <style>{`
//         @keyframes cbpSpinY { to { transform: rotateY(360deg); } }
//         @keyframes cbpSpinZ { to { transform: rotateZ(360deg); } }
//         @keyframes cbpWobble { 0%,100% { transform: rotate(-8deg); } 50% { transform: rotate(4deg) scale(1.04); } }
//         @keyframes cbpMarq { to { transform: translateX(-50%); } }
//         @keyframes cbpFan { 0%,100% { transform: translateY(-48%) rotateY(0deg) translateZ(0px); } 50% { transform: translateY(-54%) rotateY(0deg) translateZ(20px); } }
//         @keyframes cbpSerp { 50% { transform: rotateX(10deg) rotateY(-6deg) translateY(-8px); } }
//         @keyframes cbpR1 { from { transform: translateZ(120px) rotateZ(0); } to { transform: translateZ(120px) rotateZ(360deg); } }
//         @keyframes cbpR2 { from { transform: translateZ(60px) rotateZ(0); } to { transform: translateZ(60px) rotateZ(360deg); } }
//         @keyframes cbpR3 { from { transform: translateZ(0) rotateZ(0); } to { transform: translateZ(0) rotateZ(360deg); } }
//         .cbp-face .cbp-copy > * { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .7s cubic-bezier(.2,.8,.2,1); }
//         .cbp-face.cbp-live .cbp-copy > * { opacity: 1; transform: none; }
//         .cbp-face.cbp-live .cbp-copy > *:nth-child(2) { transition-delay: .07s; }
//         .cbp-face.cbp-live .cbp-copy > *:nth-child(3) { transition-delay: .14s; }
//         .cbp-face.cbp-live .cbp-copy > *:nth-child(4) { transition-delay: .21s; }
//         .cbp-face.cbp-live .cbp-copy > *:nth-child(5) { transition-delay: .28s; }
//         @media (max-width: 900px) { .cbp-face { grid-template-columns: 1fr; grid-template-rows: 32% 1fr; } }
//       `}</style>

//       <div ref={rollerRef} className="relative z-10" style={{ height: reduce ? 'auto' : `${N * 52 + 100}vh` }}>
//         <div className={reduce ? 'relative py-10 px-4' : 'sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden px-4'}>
//           <div className="relative z-10 w-full max-w-[1100px] flex justify-between items-end gap-4 mb-1 flex-wrap">
//             <div className="flex-1 min-w-0 text-[12px] font-bold tracking-[0.14em] uppercase text-[#5b6474]">
//               Case study <span>{countDisplay}</span>
//               <strong className="block text-[22px] tracking-[-.01em] normal-case text-[#0f1a2c] mt-1 transition">{currentFaceTitle}</strong>
//             </div>
//             <div className="flex gap-1 bg-white border border-[#e2e5ea] rounded-full p-1 overflow-x-auto max-w-full" style={{ scrollbarWidth: 'none' }}>
//               {TABS.map((tab, i) => (
//                 <button key={i} onClick={() => goToFace(tab.go)}
//                   className={`flex-none border-0 text-[13px] font-semibold px-3.5 py-2 rounded-full transition ${activeTab === i ? 'bg-[#0f1a2c] text-white' : 'bg-transparent text-[#5b6474] hover:text-[#0f1a2c]'}`}>
//                   {tab.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="w-[calc(100%+32px)] -mx-4 py-9 overflow-hidden"
//             style={{ WebkitMaskImage: 'linear-gradient(180deg,transparent 0,#000 38px,#000 calc(100% - 38px),transparent 100%)', maskImage: 'linear-gradient(180deg,transparent 0,#000 38px,#000 calc(100% - 38px),transparent 100%)' }}>
//             <div className="relative mx-auto max-w-[1100px] [perspective:1700px] [perspective-origin:50%_50%]" style={{ height: 'var(--fh, 540px)' }}>
//               <div ref={drumRef} className="absolute inset-0 [transform-style:preserve-3d] will-change-transform">
//                 {DRUM_FACES.map((face, i) => (
//                   <DrumFace key={face.id} face={face} live={activeFace === i || reduce} ref={(el) => (faceRefs.current[i] = el)} />
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="relative z-10 w-full max-w-[1100px] h-[3px] bg-[#e2e5ea] rounded-sm mt-1 overflow-hidden">
//             <i ref={barRef} className="block h-full w-0 bg-gradient-to-r from-[#0bb4ef] to-[#0a8af0] rounded-sm" />
//           </div>

//           {/* <div className="relative z-10 text-[12px] text-[#5b6474] mt-2.5">Scroll to roll through each case study</div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ============================================================
//    MAIN — Growth Plans + Drum below
//    ============================================================ */
// const CombinedSection = () => {
//   const [targetFace, setTargetFace] = useState(null);

//   return (
//     <>
//       <CoderBoxGrowthPlans />
//       <ClientCaseStudyDrum targetFace={targetFace} />
//     </>
//   );
// };

// export default CombinedSection;




/* ============================================================
   CoderBox · Combined Section
   - PART 1: Growth Plans (16 proposals · 3D coverflow + cube-roll sheet)
   - PART 2: Client Case Study Drum (below, scroll-driven roller)
   - Right-side dots rail added · bottom section moved up
   ============================================================ */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
  Fragment,
} from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ============================================================
   PART 1 — GROWTH PLANS
   ============================================================ */
/* ---------- SIX SERVICE LEVERS ---------- */
const SV = [
  { k: 'web',  n: 'Web Development',       c: '#3d8bff' },
  { k: 'seo',  n: 'SEO',                   c: '#1fb58f' },
  { k: 'smm',  n: 'Social Media',          c: '#e1306c' },
  { k: 'lead', n: 'Lead Generation',       c: '#f59e0b' },
  { k: 'perf', n: 'Performance Marketing', c: '#7c5cff' },
  { k: 'app',  n: 'App + WhatsApp API',    c: '#16a34a' },
];

/* ---------- HEADER SERVICE CHIPS ---------- */
const CHIPS = [
  { n: 'Web Development',             c: '#3d8bff' },
  { n: 'SEO',                         c: '#1fb58f' },
  { n: 'Social Media Marketing',      c: '#e1306c' },
  { n: 'Lead Generation',             c: '#f59e0b' },
  { n: 'Performance Marketing',       c: '#7c5cff' },
  { n: 'Mobile App + WhatsApp API',   c: '#25d366' },
];

/* ---------- INDUSTRY COLOR THEMES ---------- */
const IND = {
  health:  { t1: '#10b3a8', t2: '#0b5f6b', acc: '#16c2b3', acc2: '#8ff0e6' },
  d2c:     { t1: '#34c07a', t2: '#136b45', acc: '#2fbf73', acc2: '#a6f0c9' },
  realty:  { t1: '#d8a741', t2: '#6b4a12', acc: '#e1b24a', acc2: '#ffe1a1' },
  fintech: { t1: '#7c5cff', t2: '#2e1f7a', acc: '#8a6dff', acc2: '#cbbdff' },
  hosp:    { t1: '#ff7a59', t2: '#8a2d1c', acc: '#ff8466', acc2: '#ffc4b5' },
  trade:   { t1: '#c9956b', t2: '#5a3b22', acc: '#d7a176', acc2: '#f3d4bb' },
  saas:    { t1: '#2f8cff', t2: '#123e82', acc: '#3d8bff', acc2: '#a9cdff' },
  legal:   { t1: '#b0415e', t2: '#4c1426', acc: '#d0577a', acc2: '#f5b8c9' },
  fit:     { t1: '#ff9f1c', t2: '#8a4a00', acc: '#ffa531', acc2: '#ffd9a3' },
};

/* ---------- 16 GROWTH PLANS ---------- */
const P = [
  {
    n: 'Aarogya Health Network', m: 'AH', ind: 'health', indL: 'Healthcare · Multi-clinic group',
    mk: 'india', mkL: 'India · Core market', tier: 'Tier A',
    h: ['Every clinic.', 'One', 'booking engine.'], w: 'CARE',
    lead: 'A growth plan to turn a multi-clinic group into one connected patient journey, from first search to confirmed appointment.',
    about: 'Multi-clinic healthcare group looking for a stronger appointment funnel and lead generation.',
    focus: 'Appointment funnel + lead generation',
    ch: ['No appointment automation', 'Clinics marketed in isolation', 'Low-quality enquiries', 'Patients drop off before booking'],
    so: ['One website with clinic, doctor and specialty pages', 'Local SEO for every clinic location', 'Awareness and doctor-led social content', 'Search and Meta campaigns for high-intent treatments', 'Booking app with WhatsApp reminders and follow-ups'],
    sv: { web: 'Clinic and doctor pages with online booking', seo: 'Local SEO for each clinic and specialty', smm: 'Doctor-led reels and health awareness', lead: 'Treatment enquiry funnels', perf: 'Google Search + Meta for high-intent care', app: 'Patient app, WhatsApp booking and reminders' },
    kpi: ['Appointments booked', 'Cost per appointment', 'No-show rate', 'Clinic-wise enquiries'],
  },
  {
    n: 'Verdant D2C Skincare', m: 'VS', ind: 'd2c', indL: 'D2C · Skincare',
    mk: 'india', mkL: 'India · Core market', tier: 'Tier A',
    h: ['Lower CAC.', 'Clearer', 'identity.'], w: 'GLOW',
    lead: 'A plan to give a fast-scaling skincare brand a sharper identity and a leaner customer acquisition engine.',
    about: 'Scaling D2C skincare brand facing high customer acquisition cost and a weak brand identity.',
    focus: 'Brand identity + efficient acquisition',
    ch: ['High customer acquisition cost', 'Weak, inconsistent identity', 'Low repeat purchase', 'Store not built to convert'],
    so: ['Conversion-first storefront and product pages', 'SEO around ingredients and skin concerns', 'Creator and UGC-led Instagram content', 'Quiz and sample funnels to capture buyers', 'Meta and Google Shopping tuned for ROAS; WhatsApp for repeat orders'],
    sv: { web: 'Shopify storefront built for conversion', seo: 'Ingredient and skin-concern content hubs', smm: 'Creator collabs, reels and UGC', lead: 'Skin quiz and sample funnels', perf: 'Meta + Google Shopping, ROAS-led', app: 'WhatsApp commerce, reorders and cart recovery' },
    kpi: ['CAC', 'ROAS', 'Repeat purchase rate', 'Store conversion rate'],
  },
  {
    n: 'Meridian Realty', m: 'MR', ind: 'realty', indL: 'Real estate · Developer',
    mk: 'india', mkL: 'India · Core market', tier: 'Tier A',
    h: ['More leads.', 'Better', 'leads.'], w: 'HOMES',
    lead: 'A lead engine for a developer that needs volume and quality, with AI scoring so sales calls the right buyers first.',
    about: 'Real estate business with a lead volume challenge, needing lead generation and AI lead scoring.',
    focus: 'Lead generation + AI scoring',
    ch: ['Not enough enquiries', 'Low-intent portal leads', 'Slow follow-up', 'No way to rank leads'],
    so: ['Fast project microsites with instant lead forms', 'SEO on project, locality and BHK searches', 'Walkthrough reels, floor-plan carousels and launch stories', 'Lead scoring so sales calls hot buyers first', 'Meta lead ads + Google PPC; WhatsApp site-visit booking'],
    sv: { web: 'Project microsites and landing pages', seo: 'Locality, project and BHK keywords', smm: 'Walkthrough reels and launch creatives', lead: 'Instant forms with AI lead scoring', perf: 'Meta lead ads + Google Search PPC', app: 'WhatsApp price sheets and site-visit booking' },
    kpi: ['Qualified leads', 'Cost per qualified lead', 'Site visits booked', 'Lead-to-visit rate'],
  },
  {
    n: 'NimbusPay', m: 'NP', ind: 'fintech', indL: 'Fintech · Payments',
    mk: 'india', mkL: 'India · Core market', tier: 'Tier A',
    h: ['Launch-ready.', 'Trust', 'built in.'], w: 'PAY',
    lead: 'A go-to-market plan for a payments company that needs a launch website and support that scales with AI.',
    about: 'Fintech business with a go-to-market website requirement and a need for AI-powered support.',
    focus: 'GTM website + AI support',
    ch: ['No launch-ready website', 'Support load growing fast', 'Low brand trust in a new category', 'Signups leak between visit and KYC'],
    so: ['Secure, fast GTM website with product and pricing pages', 'SEO and AEO for payment and use-case searches', 'LinkedIn and Instagram thought leadership', 'Demo and signup funnels with tracking', 'Performance campaigns; app onboarding with WhatsApp updates and AI support'],
    sv: { web: 'GTM website, product and pricing pages', seo: 'SEO + AEO for payments use cases', smm: 'Founder and product thought leadership', lead: 'Demo request and signup funnels', perf: 'Google, Meta and LinkedIn acquisition', app: 'App onboarding, WhatsApp alerts, AI support agent' },
    kpi: ['Signups', 'Signup-to-KYC completion', 'Cost per activated user', 'Support resolution time'],
  },
  {
    n: 'Gulf Luxe Realty', m: 'GL', ind: 'realty', indL: 'Real estate · Luxury',
    mk: 'dubai', mkL: 'Dubai, UAE',
    h: ['Luxury homes.', 'Global', 'buyers.'], w: 'DUBAI',
    lead: 'A plan to reach high-net-worth and overseas buyers for Dubai luxury property, with fast WhatsApp-first follow-up.',
    about: 'Dubai real estate brand targeting qualified buyers through AI, automation and performance marketing.',
    focus: 'Qualified international leads',
    ch: ['Buyers spread across countries', 'Leads lost across time zones', 'Generic listing-portal presence', 'Slow, manual follow-up'],
    so: ['Premium property website with multilingual listings', 'SEO for Dubai communities and off-plan searches', 'Cinematic reels and virtual tours', 'Geo-targeted lead funnels by buyer market', 'Meta, Google and YouTube for HNI audiences; WhatsApp concierge'],
    sv: { web: 'Premium listings site, multilingual', seo: 'Community and off-plan keywords', smm: 'Cinematic reels and virtual tours', lead: 'Geo-targeted buyer funnels', perf: 'Meta, Google and YouTube to HNI audiences', app: 'WhatsApp concierge, brochures and viewing bookings' },
    kpi: ['Qualified buyer leads', 'Viewings booked', 'Cost per qualified lead', 'Response time'],
  },
  {
    n: 'Aurora Aesthetics Clinic', m: 'AA', ind: 'health', indL: 'Healthcare · Aesthetics',
    mk: 'dubai', mkL: 'Dubai, UAE',
    h: ['Beautiful results.', 'Booked', 'on WhatsApp.'], w: 'AURA',
    lead: 'A plan to fill the treatment calendar of a Dubai aesthetics clinic with the right patients, and keep them coming back.',
    about: 'Dubai aesthetics clinic, in a segment where AI, automation and performance marketing drive qualified leads.',
    focus: 'Treatment bookings + retention',
    ch: ['Competitive, ad-heavy market', 'Enquiries that never book', 'Before-and-after proof underused', 'No re-booking system'],
    so: ['Treatment-led website with pricing guides', 'SEO for treatments across Dubai areas', 'Expert-led reels and patient stories', 'Consultation offers for key treatments', 'Meta and Google campaigns; WhatsApp booking and re-care reminders'],
    sv: { web: 'Treatment pages and booking flow', seo: 'Treatment + area keywords across Dubai', smm: 'Expert reels and patient stories', lead: 'Consultation offer funnels', perf: 'Meta + Google for key treatments', app: 'Booking app, WhatsApp reminders and re-care' },
    kpi: ['Consultations booked', 'Cost per booking', 'Show-up rate', 'Repeat treatments'],
  },
  {
    n: 'NexaPay', m: 'NX', ind: 'fintech', indL: 'Fintech · Payments',
    mk: 'dubai', mkL: 'Dubai, UAE',
    h: ['Payments that', 'scale', 'across the Gulf.'], w: 'NEXA',
    lead: 'A growth plan for a UAE fintech to earn trust fast and turn business interest into activated merchants.',
    about: 'Dubai fintech, in a segment where AI, automation and performance marketing drive qualified leads.',
    focus: 'Merchant acquisition',
    ch: ['Low awareness in a crowded market', 'Long, complex sales cycles', 'Unclear product story', 'Leads not nurtured'],
    so: ['Merchant-focused website with use cases', 'SEO and AEO for UAE payment searches', 'LinkedIn-led B2B content', 'Demo funnels with lead scoring', 'LinkedIn and Google campaigns; app onboarding with WhatsApp updates'],
    sv: { web: 'Merchant site with use-case pages', seo: 'UAE payments SEO + AEO', smm: 'LinkedIn-first B2B content', lead: 'Demo funnels with lead scoring', perf: 'LinkedIn + Google acquisition', app: 'Merchant app, WhatsApp onboarding updates' },
    kpi: ['Demo requests', 'Merchant activations', 'Cost per activation', 'Sales cycle length'],
  },
  {
    n: 'Mirage Hospitality', m: 'MH', ind: 'hosp', indL: 'Hospitality',
    mk: 'dubai', mkL: 'Dubai, UAE',
    h: ['More direct', 'bookings,', 'fewer fees.'], w: 'STAY',
    lead: 'A plan to shift a Dubai hospitality brand from commission-heavy platforms to direct bookings and loyal guests.',
    about: 'Dubai hospitality business, in a segment where AI, automation and performance marketing drive qualified leads.',
    focus: 'Direct bookings + guest loyalty',
    ch: ['Reliance on booking platforms', 'Low direct-website bookings', 'Seasonal demand swings', 'Guests not re-engaged'],
    so: ['Fast booking website with direct-rate offers', 'SEO for stays and experiences in Dubai', 'Experience-led reels and creator stays', 'Offer and event lead capture', 'Meta and Google hotel ads; WhatsApp concierge and guest app'],
    sv: { web: 'Direct booking website and offers', seo: 'Stay and experience keywords', smm: 'Experience reels and creator stays', lead: 'Offer, event and group enquiries', perf: 'Meta + Google hotel campaigns', app: 'Guest app and WhatsApp concierge' },
    kpi: ['Direct booking share', 'Cost per booking', 'Repeat guests', 'Event enquiries'],
  },
  {
    n: 'Falcon Trading', m: 'FT', ind: 'trade', indL: 'Trading · B2B',
    mk: 'dubai', mkL: 'Dubai, UAE',
    h: ['From catalogue', 'to', 'closed orders.'], w: 'TRADE',
    lead: 'A plan to give a Dubai trading company a digital storefront for buyers and a pipeline that turns enquiries into orders.',
    about: 'Dubai trading business, in a segment where AI, automation and performance marketing drive qualified leads.',
    focus: 'B2B enquiries + order pipeline',
    ch: ['Offline-first sales', 'No digital product catalogue', 'Enquiries tracked manually', 'Limited reach beyond existing buyers'],
    so: ['B2B website with a searchable product catalogue', 'SEO for product and supplier searches', 'LinkedIn presence for buyers and partners', 'RFQ forms with CRM routing', 'Google and LinkedIn campaigns; WhatsApp catalogue and quotes'],
    sv: { web: 'B2B catalogue website', seo: 'Product and supplier keywords', smm: 'LinkedIn for buyers and partners', lead: 'RFQ forms routed to CRM', perf: 'Google + LinkedIn campaigns', app: 'WhatsApp catalogue, quotes and order updates' },
    kpi: ['RFQs received', 'Quote-to-order rate', 'Cost per RFQ', 'New buyer accounts'],
  },
  {
    n: 'Lotus Realty Group', m: 'LR', ind: 'realty', indL: 'Real estate',
    mk: 'metro', mkL: 'Indian metros',
    h: ['Metro buyers.', 'Always', 'followed up.'], w: 'LOTUS',
    lead: 'A plan built on the needs in the pipeline: Google Ads for demand, WhatsApp API for speed and AI scoring for focus.',
    about: 'Real estate group in the Indian metros needing Google Ads, WhatsApp API and AI lead scoring.',
    focus: 'Google Ads + WhatsApp API + AI scoring',
    ch: ['Leads going cold before follow-up', 'Search demand not captured', 'Sales time spent on low-intent leads', 'No single view of the funnel'],
    so: ['Project landing pages built for speed', 'Local SEO for projects in each metro', 'Launch and walkthrough social content', 'AI lead scoring with CRM routing', 'Google Ads on high-intent searches; WhatsApp API instant follow-up'],
    sv: { web: 'Fast project landing pages', seo: 'Metro locality and project SEO', smm: 'Launch and walkthrough content', lead: 'AI lead scoring, CRM routing', perf: 'Google Ads on high-intent search', app: 'WhatsApp API instant replies and visit booking' },
    kpi: ['Qualified leads', 'Time to first response', 'Site visits booked', 'Cost per site visit'],
  },
  {
    n: 'ByteForge', m: 'BF', ind: 'saas', indL: 'SaaS',
    mk: 'metro', mkL: 'Indian metros',
    h: ['Pipeline', 'for a', 'product-led team.'], w: 'BYTE',
    lead: 'A plan for a SaaS company that needs AI services, LinkedIn growth and a go-to-market website to fill its pipeline.',
    about: 'SaaS company in the Indian metros needing AI services, LinkedIn growth and a GTM website.',
    focus: 'GTM website + LinkedIn growth',
    ch: ['No clear GTM website', 'Low LinkedIn visibility', 'Trials that never convert', 'Marketing and sales out of sync'],
    so: ['GTM website with product tours and pricing', 'SEO and AEO on problem and comparison searches', 'LinkedIn founder and product content', 'Trial and demo funnels with scoring', 'LinkedIn + Google ads; in-app and WhatsApp onboarding nudges'],
    sv: { web: 'GTM site, product tours and pricing', seo: 'Problem and comparison SEO + AEO', smm: 'LinkedIn founder and product content', lead: 'Trial and demo funnels, scored', perf: 'LinkedIn + Google acquisition', app: 'In-app and WhatsApp onboarding nudges' },
    kpi: ['Demo requests', 'Trial-to-paid rate', 'Pipeline created', 'CAC payback'],
  },
  {
    n: 'Meridian Fintech', m: 'MF', ind: 'fintech', indL: 'Fintech',
    mk: 'metro', mkL: 'Indian metros',
    h: ['Thought leadership', 'that', 'converts.'], w: 'TRUST',
    lead: 'A plan for a fintech that needs AI support, thought leadership and web development, turning credibility into customers.',
    about: 'Fintech company in the Indian metros needing AI support, thought leadership and web development.',
    focus: 'Web + thought leadership + AI support',
    ch: ['Low brand authority', 'Dated web presence', 'Support can’t keep pace', 'Content with no conversion path'],
    so: ['New website with product and trust pages', 'SEO on finance education topics', 'LinkedIn and Instagram thought leadership', 'Content-to-lead funnels (guides, calculators)', 'Search and social campaigns; app with WhatsApp alerts and AI support'],
    sv: { web: 'New website, product and trust pages', seo: 'Finance education SEO', smm: 'Thought leadership on LinkedIn + Instagram', lead: 'Guides and calculators as lead magnets', perf: 'Search + social acquisition', app: 'App, WhatsApp alerts and AI support agent' },
    kpi: ['Leads from content', 'App installs', 'Activation rate', 'Support deflection'],
  },
  {
    n: 'Real Estate Agency', m: 'RE', ind: 'realty', indL: 'Real estate · Agency',
    mk: 'aus', mkL: 'Australia', seg: true,
    h: ['Listings that', 'sell,', 'appraisals booked.'], w: 'AUS',
    lead: 'A segment plan for Australian agencies, built on the pipeline focus: website optimisation and Google Ads.',
    about: 'Australian real estate agencies, where website optimisation and Google Ads are the key levers.',
    focus: 'Website optimisation + Google Ads',
    ch: ['Slow, dated agency websites', 'Appraisal requests too low', 'Heavy reliance on portals', 'Vendor leads not nurtured'],
    so: ['Optimised agency website with suburb pages', 'Suburb and "sell my house" SEO', 'Listing reels and sold stories', 'Free appraisal funnels', 'Google Ads for appraisal and buyer searches; WhatsApp follow-up'],
    sv: { web: 'Optimised site with suburb pages', seo: 'Suburb and seller-intent SEO', smm: 'Listing reels and sold stories', lead: 'Free appraisal funnels', perf: 'Google Ads, seller and buyer intent', app: 'WhatsApp follow-up and open-home reminders' },
    kpi: ['Appraisal requests', 'Cost per appraisal', 'Listings won', 'Website conversion rate'],
  },
  {
    n: 'D2C Brand', m: 'D2', ind: 'd2c', indL: 'D2C · Consumer brand',
    mk: 'aus', mkL: 'Australia', seg: true,
    h: ['A brand', 'people', 'follow.'], w: 'BRAND',
    lead: 'A segment plan for Australian D2C brands, built on the pipeline focus: branding and Instagram growth.',
    about: 'Australian D2C brands, where branding and Instagram growth are the key levers.',
    focus: 'Branding + Instagram growth',
    ch: ['Brand looks like everyone else', 'Slow Instagram growth', 'Paid social getting pricier', 'One-time buyers'],
    so: ['Store redesign around a clear brand system', 'SEO for product and gifting searches', 'Instagram growth with creators and reels', 'Giveaway and waitlist funnels', 'Meta and TikTok ads; WhatsApp and SMS for repeat orders'],
    sv: { web: 'Store redesign on a brand system', seo: 'Product and gifting SEO', smm: 'Instagram growth, creators and reels', lead: 'Giveaway and waitlist funnels', perf: 'Meta + TikTok, ROAS-led', app: 'WhatsApp repeat-order flows' },
    kpi: ['Follower growth', 'ROAS', 'Repeat purchase rate', 'Email + WhatsApp subscribers'],
  },
  {
    n: 'Legal Firm', m: 'LF', ind: 'legal', indL: 'Legal services',
    mk: 'aus', mkL: 'Australia', seg: true,
    h: ['Found first', 'by clients', 'who need you.'], w: 'LAW',
    lead: 'A segment plan for Australian law firms, built on the pipeline focus: SEO and inbound lead generation.',
    about: 'Australian legal firms, where SEO and inbound lead generation are the key levers.',
    focus: 'SEO + inbound enquiries',
    ch: ['Invisible for practice-area searches', 'Enquiries depend on referrals', 'Website doesn’t build trust', 'Slow intake process'],
    so: ['Trust-first website with practice-area pages', 'SEO for practice areas and suburbs', 'LinkedIn and explainer content', 'Free consultation and case-review funnels', 'Google Ads on urgent legal searches; WhatsApp intake'],
    sv: { web: 'Trust-first practice-area website', seo: 'Practice-area and suburb SEO', smm: 'LinkedIn and explainer content', lead: 'Consultation and case-review funnels', perf: 'Google Ads on urgent searches', app: 'WhatsApp intake and appointment reminders' },
    kpi: ['Consultation requests', 'Organic enquiries', 'Cost per case enquiry', 'Intake response time'],
  },
  {
    n: 'Fitness Studio', m: 'FS', ind: 'fit', indL: 'Fitness',
    mk: 'aus', mkL: 'Australia', seg: true,
    h: ['Trials in.', 'Members', 'stay.'], w: 'FIT',
    lead: 'A segment plan for Australian fitness brands, built on the pipeline focus: WhatsApp nurturing.',
    about: 'Australian fitness businesses, where WhatsApp nurturing is the key lever.',
    focus: 'Trial sign-ups + WhatsApp nurturing',
    ch: ['Trials that don’t convert', 'Members churn after a few months', 'Local competition', 'Class slots left empty'],
    so: ['Class and membership website with online sign-up', 'Local SEO for gyms and classes nearby', 'Coach-led reels and member stories', 'Free trial funnels', 'Meta local ads; member app with WhatsApp nurturing'],
    sv: { web: 'Membership and class sign-up website', seo: 'Local gym and class SEO', smm: 'Coach reels and member stories', lead: 'Free trial funnels', perf: 'Meta local awareness + trials', app: 'Member app, WhatsApp nurture and class reminders' },
    kpi: ['Trial sign-ups', 'Trial-to-member rate', 'Member retention', 'Class fill rate'],
  },
];

/* ---------- MARKET FILTERS ---------- */
const MK = [
  ['all',   'All plans'],
  ['india', 'India'],
  ['dubai', 'Dubai'],
  ['metro', 'Indian metros'],
  ['aus',   'Australia'],
];

/* ---------- BAR HEIGHTS ---------- */
const HEIGHTS = [120, 140, 160, 180, 200, 220];

/* ---------- HELPERS ---------- */
const pad = (n) => ('0' + n).slice(-2);

const shade = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) * 0.55) | 0;
  const g = (((n >> 8) & 255) * 0.55) | 0;
  const b = ((n & 255) * 0.55) | 0;
  return `rgb(${r},${g},${b})`;
};

/* ---------- SUB-COMPONENT — Detail Sheet ---------- */
const Sheet = ({ plan, index, dir = 'up', entering = false, leaving = false }) => {
  const t = IND[plan.ind];
  const anim = dir === 'up' ? 'Up' : 'Down';

  const sheetStyle = {
    '--acc': t.acc,
    '--acc2': t.acc2,
    boxShadow:
      '0 40px 70px -40px rgba(15,26,44,.5), 0 0 0 1px rgba(15,26,44,.06)',
  };

  if (leaving) {
    sheetStyle.animation = `cgpOut${anim} .7s cubic-bezier(.55,.05,.35,1) forwards`;
    sheetStyle.position = 'absolute';
    sheetStyle.inset = '0 0 auto 0';
  } else if (entering) {
    sheetStyle.animation = `cgpIn${anim} .7s cubic-bezier(.55,.05,.35,1)`;
  }

  const factBase =
    'px-[22px] py-[18px] text-[13.5px] leading-[1.45] border-[#e2e5ea] max-[900px]:border-b';

  return (
    <article
      className="bg-white rounded-3xl overflow-hidden [transform-origin:50%_50%_-320px] [backface-visibility:hidden]"
      style={sheetStyle}
    >
      <div className="flex justify-between items-center gap-3 px-7 py-4 max-[600px]:px-4 max-[600px]:py-3 border-b border-[#e2e5ea] text-[11px] max-[600px]:text-[9.5px] font-bold tracking-[.16em] uppercase text-[#5b6474]">
        <span className="text-[15px] max-[600px]:text-[13px] tracking-[.02em] normal-case text-[#0f1a2c] font-extrabold">
          Coder<span className="text-[#0a8af0]">Box</span> · Growth Partner
        </span>
        <span className="text-right">
          Growth plan
          <em className="block not-italic text-[color:var(--acc)]">{plan.n}</em>
        </span>
      </div>

      <div
        className="relative px-10 pt-[38px] pb-[42px] max-[600px]:px-5 max-[600px]:pt-[26px] max-[600px]:pb-[150px] text-white overflow-hidden"
        style={{
          background: `radial-gradient(circle at 85% 20%, ${t.acc} 0, transparent 42%), linear-gradient(135deg, #0b1a3a, #13285a)`,
        }}
      >
        <span
          aria-hidden="true"
          className="absolute left-6 -bottom-[26px] text-[clamp(70px,12vw,150px)] font-extrabold tracking-[-.04em] text-transparent whitespace-nowrap pointer-events-none"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,.1)' }}
        >
          {plan.w}
        </span>

        <div className="flex items-center gap-3.5 relative z-[1]">
          <span
            className="w-14 h-14 rounded-full bg-white grid place-items-center font-extrabold text-lg"
            style={{ color: '#0b1a3a', boxShadow: `0 0 0 3px ${t.acc}` }}
          >
            {plan.m}
          </span>
          <div>
            <small className="block text-[10.5px] font-bold tracking-[.16em] uppercase text-[color:var(--acc2)]">
              {plan.seg ? 'Segment plan' : 'Proposal'} · {pad(index + 1)} of 16
            </small>
            <b className="text-[15px]">
              {plan.n} · {plan.indL}
            </b>
          </div>
        </div>

        <h3
          className="relative z-[1] text-[clamp(34px,5.2vw,58px)] leading-[1.02] tracking-[-.03em] font-extrabold mt-[22px] mb-3.5 max-w-[14ch]"
          style={entering ? { animation: 'cgpFade .8s .3s both' } : undefined}
        >
          {plan.h[0]}
          <br />
          <em className="font-semibold text-[color:var(--acc2)]">{plan.h[1]}</em>{' '}
          {plan.h[2]}
        </h3>

        <p className="relative z-[1] m-0 max-w-[52ch] text-[#c9d4ea] text-[15px] leading-[1.6]">
          {plan.lead}
        </p>

        <div
          className="absolute right-9 bottom-[34px] max-[600px]:right-5 max-[600px]:bottom-[18px] z-[1] w-[124px] h-[124px] max-[600px]:w-[104px] max-[600px]:h-[104px] rounded-full bg-[#ffd24a] text-[#0b1a3a] grid place-items-center text-center font-extrabold rotate-[-8deg]"
          style={{
            animation: 'cgpWob 6s ease-in-out infinite',
            boxShadow: '0 20px 40px -12px rgba(0,0,0,.5)',
          }}
        >
          <div>
            <b className="block text-[40px] max-[600px]:text-[32px] leading-none tracking-[-.03em]">6</b>
            <small className="block text-[9.5px] tracking-[.14em] leading-[1.3]">
              SERVICES
              <br />
              ONE PLAN
            </small>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 border-b border-[#e2e5ea]">
        <div className={`${factBase} font-medium text-[#2c3444] border-r max-[600px]:border-r-0`}>
          <small className="block text-[10px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)] mb-1.5">About</small>
          {plan.about}
        </div>
        <div className={`${factBase} font-semibold border-r max-[900px]:border-r-0 max-[600px]:border-r-0`}>
          <small className="block text-[10px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)] mb-1.5">Market</small>
          {plan.mkL}
        </div>
        <div className={`${factBase} font-semibold border-r max-[600px]:border-r-0`}>
          <small className="block text-[10px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)] mb-1.5">Focus</small>
          {plan.focus}
        </div>
        <div className={`${factBase} font-semibold`}>
          <small className="block text-[10px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)] mb-1.5">Status</small>
          {plan.tier ? `${plan.tier} · ` : ''}Proposal
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1.05fr] max-[900px]:grid-cols-1 gap-[26px] px-[30px] pt-[30px] pb-2.5 max-[600px]:px-4 max-[600px]:pt-[22px] max-[600px]:pb-1.5">
        <div>
          <div className="text-[10.5px] font-bold tracking-[.16em] uppercase text-[#e0525c]">The challenge</div>
          <h4 className="text-[26px] max-[600px]:text-[22px] tracking-[-.02em] mt-1.5 mb-3.5 font-extrabold">
            Where they are
          </h4>
          <ul className="list-none m-0 p-0">
            {plan.ch.map((x) => (
              <li key={x} className="py-3 border-b border-[#e2e5ea] text-[15px] font-semibold text-[#8a93a3] line-through decoration-[#e0525c] decoration-2">
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[18px] px-[26px] py-6 text-white" style={{ background: 'linear-gradient(145deg, #0b1a3a, #13285a)' }}>
          <div className="text-[10.5px] font-bold tracking-[.16em] uppercase text-[#ffd24a]">The plan</div>
          <h4 className="text-[26px] max-[600px]:text-[22px] tracking-[-.02em] mt-1.5 mb-3.5 font-extrabold">
            What <em className="font-semibold text-[color:var(--acc2)]">CoderBox</em> will do
          </h4>
          <ul className="list-none m-0 p-0 grid gap-2.5">
            {plan.so.map((x) => (
              <li key={x} className="text-sm leading-[1.45] pl-6 relative text-[#dbe4f5] before:content-['✓'] before:absolute before:left-0 before:text-[#ffd24a] before:font-extrabold">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-[30px] pt-6 pb-1.5 max-[600px]:px-4 max-[600px]:pt-[18px] max-[600px]:pb-1">
        <div className="text-[10.5px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)]">Six growth levers</div>
        <div className="grid grid-cols-6 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 gap-2 items-end mt-3.5 [perspective:900px]">
          {SV.map((s, j) => (
            <div
              key={s.k}
              className="rounded-t-[14px] rounded-b-[6px] px-[13px] py-3.5 text-white flex flex-col justify-start max-[900px]:![min-height:auto]"
              style={{
                minHeight: HEIGHTS[j] + 'px',
                background: `linear-gradient(170deg, ${s.c}, ${shade(s.c)})`,
                transformOrigin: '50% 100%',
                animation: 'cgpRise .8s cubic-bezier(.2,.8,.2,1) both',
                animationDelay: `calc(${j} * 70ms + .35s)`,
              }}
            >
              <i className="not-italic font-semibold text-[13px] opacity-75">{pad(j + 1)}</i>
              <b className="block text-[13.5px] leading-[1.2] mt-1 mb-1.5">{s.n}</b>
              <span className="text-[11.5px] leading-[1.4] opacity-85">{plan.sv[s.k]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] max-[900px]:grid-cols-1 gap-5 items-center mt-6 mx-[30px] mb-[30px] max-[600px]:mx-4 max-[600px]:mt-[18px] max-[600px]:mb-5 px-[22px] py-5 rounded-[18px] bg-[#f5f7fa] border border-[#e2e5ea]">
        <div>
          <div className="text-[10.5px] font-bold tracking-[.16em] uppercase text-[color:var(--acc)]">
            What we&apos;ll measure
          </div>
          <ul className="list-none mt-2.5 mb-0 p-0 flex flex-wrap gap-2">
            {plan.kpi.map((k) => (
              <li key={k} className="text-[12.5px] font-semibold bg-white border border-[#e2e5ea] rounded-full px-3 py-[7px]">
                {k}
              </li>
            ))}
          </ul>
          <p className="mt-2.5 mb-0 text-[11.5px] text-[#5b6474] italic">
            This is a proposed plan. Targets are agreed with you after a discovery call.
          </p>
        </div>
        <a href="#contact" className="sec-btn">
          Book a strategy call
          <span>→</span>
        </a>
      </div>
    </article>
  );
};

/* ---------- GROWTH PLANS COMPONENT ---------- */
const CoderBoxGrowthPlans = () => {
  const [filter, setFilter]     = useState('all');
  const [active, setActive]     = useState(0);
  const [leaving, setLeaving]   = useState(null);
  const [dir, setDir]           = useState('up');
  const [dragging, setDragging] = useState(false);
  const [isSmall, setIsSmall]   = useState(false);

  const listRef    = useRef(P.map((_, i) => i));
  const activeRef  = useRef(0);
  const mountedRef = useRef(false);
  const timerRef   = useRef(null);
  const flowRef    = useRef(null);
  const reduceRef  = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const sxRef    = useRef(0);
  const movedRef = useRef(0);
  const downRef  = useRef(false);

  const list = useMemo(
    () => P.map((_, i) => i).filter((i) => filter === 'all' || P[i].mk === filter),
    [filter]
  );

  useEffect(() => { listRef.current = list; }, [list]);

  useEffect(() => {
    mountedRef.current = true;
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    const onResize = () => setIsSmall(window.innerWidth < 600);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const select = useCallback((i, force = false, listOverride = null) => {
    const lst = listOverride || listRef.current;
    if (i === undefined || i === null || i < 0) return;
    if (i === activeRef.current && mountedRef.current && !force) return;

    const from    = activeRef.current;
    const toPos   = lst.indexOf(i);
    const fromPos = lst.indexOf(from);
    const d       = toPos >= fromPos ? 'up' : 'down';

    activeRef.current = i;
    setActive(i);
    clearTimeout(timerRef.current);

    if (!mountedRef.current) { mountedRef.current = true; return; }
    if (reduceRef.current) { setLeaving(null); return; }

    setDir(d);
    setLeaving(from);
    timerRef.current = setTimeout(() => setLeaving(null), 720);
  }, []);

  const step = useCallback((n) => {
    const lst = listRef.current;
    if (!lst.length) return;
    let k = lst.indexOf(activeRef.current) + n;
    if (k < 0) k = lst.length - 1;
    if (k >= lst.length) k = 0;
    select(lst[k]);
  }, [select]);

  const changeFilter = useCallback((key) => {
    setFilter(key);
    const nextList = P.map((_, i) => i).filter(
      (i) => key === 'all' || P[i].mk === key
    );
    select(nextList[0], true, nextList);
  }, [select]);

  useEffect(() => {
    const onKey = (e) => {
      const r = flowRef.current && flowRef.current.getBoundingClientRect();
      if (!r || r.bottom < 0 || r.top > window.innerHeight) return;
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft')  step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [step]);

  useEffect(() => {
    const onMove = (e) => {
      if (!downRef.current) return;
      const dx = e.clientX - sxRef.current;
      movedRef.current = Math.max(movedRef.current, Math.abs(dx));
      if (Math.abs(dx) > 70) { step(dx < 0 ? 1 : -1); sxRef.current = e.clientX; }
    };
    const onUp = () => {
      if (!downRef.current) return;
      downRef.current = false;
      setDragging(false);
      setTimeout(() => { movedRef.current = 0; }, 0);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [step]);

  const onPointerDown = (e) => {
    downRef.current = true;
    movedRef.current = 0;
    sxRef.current = e.clientX;
    setDragging(true);
  };

  const pos = Math.max(0, list.indexOf(active));

  return (
    <section
      id="growth-plans"
      aria-labelledby="cgp-title"
      className="cgp relative overflow-clip bg-[#f0f1f3] text-[#0f1a2c]"
    >
      <style>{`
        body{margin:0;background:#f0f1f3}
        @keyframes cgpOutUp  {to{transform:rotateX(90deg);opacity:.3}}
        @keyframes cgpInUp   {from{transform:rotateX(-90deg);opacity:.3}}
        @keyframes cgpOutDown{to{transform:rotateX(-90deg);opacity:.3}}
        @keyframes cgpInDown {from{transform:rotateX(90deg);opacity:.3}}
        @keyframes cgpWob    {50%{transform:rotate(4deg) scale(1.04)}}
        @keyframes cgpRise   {from{transform:rotateX(-80deg);opacity:0}}
        @keyframes cgpFade   {from{opacity:0;transform:translateY(16px)}}
        @media (prefers-reduced-motion:reduce){
          .cgp *{animation:none!important;transition:none!important}
        }
      `}</style>

      <div
        aria-hidden="true"
        className="absolute w-[520px] h-[520px] -right-[180px] -top-[120px] rounded-full bg-[#dde8f3] blur-[80px] opacity-70 pointer-events-none"
      />

      {/* ✅ Bottom section moved UP — reduced top padding */}
      <div className="relative max-w-[1180px] mx-auto pt-[40px] px-4 pb-[70px] max-[600px]:pt-[28px] max-[600px]:pb-[50px]">
        <header className="text-center max-w-[760px] mx-auto">
          <span className="sec-badge inline-block">Growth Plans</span>
          <h2 id="cgp-title" className="sec-h2 sec-text-dark mt-1.5 sm:mt-2 leading-tight">
            Built for your{' '}
            <span className="bg-gradient-to-r from-[#00C6FB] to-[#01ADF0] bg-clip-text text-transparent">
              next stage of growth.
            </span>
          </h2>
          <p className="sec-p sec-text-dark-soft mt-1 max-w-2xl mx-auto">
            Sixteen growth plans for businesses we&apos;d love to partner with,
            each combining web development, SEO, social media, lead generation,
            performance marketing and a mobile app with WhatsApp API.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {CHIPS.map((s) => (
              <span
                key={s.n}
                className="inline-flex items-center gap-[7px] text-[12.5px] font-semibold bg-white border border-[#e2e5ea] rounded-full px-3 py-[7px]"
              >
                <i className="w-2 h-2 rounded-full" style={{ background: s.c }} />
                {s.n}
              </span>
            ))}
          </div>
        </header>

        <div className="flex justify-center gap-1.5 mt-[30px] mx-auto flex-wrap" role="tablist" aria-label="Filter by market">
          {MK.map(([key, label]) => {
            const count = key === 'all' ? P.length : P.filter((p) => p.mk === key).length;
            const on = filter === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => changeFilter(key)}
                className={`font-semibold text-[13px] px-3.5 py-2 rounded-full cursor-pointer border transition-all duration-300 ${
                  on ? 'bg-[#0f1a2c] border-[#0f1a2c] text-white' : 'bg-white border-[#e2e5ea] text-[#5b6474]'
                }`}
              >
                {label}
                <b className="font-bold opacity-55 ml-1">{count}</b>
              </button>
            );
          })}
        </div>

        <div
          ref={flowRef}
          aria-label="Growth plans"
          onPointerDown={onPointerDown}
          className={`relative overflow-x-clip h-[250px] max-[600px]:h-[210px] mt-[18px] [perspective:1100px] [touch-action:pan-y] select-none ${
            dragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {P.map((p, i) => {
            const t = IND[p.ind];
            const k = list.indexOf(i);
            const d = k < 0 ? 0 : k - pos;
            const ad = Math.abs(d);
            const hidden = k < 0 || ad > 4;
            const isOn = k >= 0 && d === 0;

            let transform = 'translateX(0) translateZ(-600px)';
            if (k >= 0) {
              const gap = isSmall ? 112 : 150;
              const s = d < 0 ? -1 : 1;
              const x = d === 0 ? 0 : s * (gap * 0.9 + (ad - 1) * gap * 0.55);
              const ry = d === 0 ? 0 : -s * Math.min(58, 40 + ad * 6);
              const z = d === 0 ? 60 : -120 - ad * 70;
              transform = `translateX(${x}px) translateZ(${z}px) rotateY(${ry}deg)`;
            }

            const style = {
              transform,
              opacity: hidden ? 0 : 1,
              filter: isOn ? 'none' : `brightness(${1 - Math.min(0.45, ad * 0.12)})`,
              zIndex: k < 0 ? 0 : 100 - ad,
              pointerEvents: hidden ? 'none' : 'auto',
              background: `linear-gradient(155deg, ${t.t1}, ${t.t2})`,
              boxShadow: isOn
                ? `0 30px 50px -18px rgba(15,26,44,.6), 0 0 0 3px #fff, 0 0 0 5px ${t.t1}`
                : '0 22px 40px -20px rgba(15,26,44,.55)',
              transition:
                'transform .75s cubic-bezier(.2,.8,.2,1), opacity .6s, filter .6s',
              '--sh': d === 0 ? '80%' : '-80%',
            };

            return (
              <button
                key={p.n}
                type="button"
                aria-current={isOn ? 'true' : 'false'}
                onClick={() => { if (movedRef.current > 6) return; select(i); }}
                className="absolute left-1/2 top-[18px] w-[200px] h-[214px] -ml-[100px] max-[600px]:w-[160px] max-[600px]:h-[176px] max-[600px]:-ml-20 rounded-2xl overflow-hidden border-0 p-4 max-[600px]:p-[13px] text-left text-white flex flex-col"
                style={style}
              >
                <span
                  className="w-10 h-10 rounded-full grid place-items-center font-extrabold text-sm"
                  style={{ background: 'rgba(255,255,255,.95)', color: t.t2 }}
                >
                  {p.m}
                </span>
                <span
                  className="absolute right-3 top-3.5 text-[10px] font-bold px-2 py-1 rounded-full border"
                  style={{ background: 'rgba(255,255,255,.18)', borderColor: 'rgba(255,255,255,.3)' }}
                >
                  {p.mkL.split(' · ')[0]}
                </span>
                <span className="mt-auto text-[10.5px] font-bold tracking-[.12em] uppercase opacity-80">
                  {p.indL}
                </span>
                <b className="block text-[17px] max-[600px]:text-[15px] leading-[1.2] mt-1.5 tracking-[-.01em]">{p.n}</b>
                <span className="absolute right-3.5 bottom-3 text-[28px] font-semibold opacity-35">{pad(i + 1)}</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none transition-transform duration-[750ms]"
                  style={{
                    transform: 'translateX(var(--sh, -80%))',
                    background:
                      'linear-gradient(115deg, transparent 35%, rgba(255,255,255,.22) 50%, transparent 65%)',
                  }}
                />
              </button>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-3.5 mt-1.5">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous plan"
            className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] cursor-pointer grid place-items-center transition-all duration-300 hover:bg-[#0f1a2c] hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <span className="text-[13px] font-bold text-[#5b6474] min-w-[70px] text-center">
            {pad(pos + 1)} / {pad(list.length)}
          </span>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next plan"
            className="w-11 h-11 rounded-full border border-[#e2e5ea] bg-white text-[#0f1a2c] cursor-pointer grid place-items-center transition-all duration-300 hover:bg-[#0f1a2c] hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="relative mt-[26px] [perspective:2000px]" aria-live="polite">
          {leaving !== null && (
            <Sheet plan={P[leaving]} index={leaving} dir={dir} leaving />
          )}
          <Sheet
            plan={P[active]}
            index={active}
            dir={dir}
            entering={leaving !== null}
          />
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   PART 2 — DRUM / ROLLER CASE STUDY SECTION
   ============================================================ */
/* ---------- DRUM FACES DATA (20 faces) ---------- */
const DRUM_FACES = [
  { id: 0,  c: 0, title: "The Mom's Co. — Brand overview",         type: 'mom-overview' },
  { id: 1,  c: 0, title: "The Mom's Co. — Challenge & solution",    type: 'mom-challenge' },
  { id: 2,  c: 0, title: "The Mom's Co. — Results",                 type: 'mom-results' },
  { id: 3,  c: 1, title: 'Lodha — Navi Mumbai overview',            type: 'lodha-overview' },
  { id: 4,  c: 1, title: 'Lodha — The lead engine',                 type: 'lodha-engine' },
  { id: 5,  c: 1, title: 'Lodha — Results',                         type: 'lodha-results' },
  { id: 6,  c: 2, title: 'Ciora Cafe — Brand overview',             type: 'ciora-overview' },
  { id: 7,  c: 2, title: 'Ciora Cafe — The work',                   type: 'ciora-work' },
  { id: 8,  c: 2, title: 'Ciora Cafe — Results',                    type: 'ciora-results' },
  { id: 9,  c: 3, title: 'Shomi Healings — Brand positioning',      type: 'shomi-positioning' },
  { id: 10, c: 3, title: 'Shomi Healings — The growth playbook',    type: 'shomi-playbook' },
  { id: 11, c: 4, title: 'Ultra Fragrance Ltd — Website strategy',  type: 'ultra-fivecs' },
  { id: 12, c: 4, title: 'Ultra Fragrance Ltd — Five parameters',   type: 'ultra-params' },
  { id: 13, c: 5, title: 'SmileCare — App design',                  type: 'smile-design' },
  { id: 14, c: 5, title: 'SmileCare — The patient journey',         type: 'smile-journey' },
  { id: 15, c: 6, title: 'SR Infra — Company overview',             type: 'sr-overview' },
  { id: 16, c: 6, title: 'SR Infra — Services & fleet',             type: 'sr-fleet' },
  { id: 17, c: 6, title: 'SR Infra — Projects',                     type: 'sr-projects' },
  { id: 18, c: 7, title: 'Fairbanks Orthodontics — SEO',            type: 'fair-seo' },
  { id: 19, c: 7, title: 'Fairbanks Orthodontics — Lead generation', type: 'fair-leads' },
];

const TABS = [
  { label: "The Mom's Co.",   go: 0 },
  { label: 'Lodha',           go: 3 },
  { label: 'Ciora Cafe',      go: 6 },
  { label: 'Shomi Healings',  go: 9 },
  { label: 'Ultra Fragrance', go: 11 },
  { label: 'SmileCare',       go: 13 },
  { label: 'SR Infra',        go: 15 },
  { label: 'Fairbanks Ortho', go: 18 },
];

const PILLARS = [
  'Vastu education',
  'Spiritual growth',
  'Problem → solution',
  'Social proof',
  'Behind the scenes',
];

/* ---------- count-up hook ---------- */
const useCountUp = (end, dec = 0, suffix = '', start = false, duration = 1400) => {
  const [value, setValue] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!start) return;
    let t0 = null;
    const step = (t) => {
      if (!t0) t0 = t;
      const k = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setValue(end * eased);
      if (k < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [start, end, duration]);
  return value.toFixed(dec) + suffix;
};

/* ---------- SMALL PIECES ---------- */
const Kicker = ({ children, color = '#0bb4ef' }) => (
  <div
    className="text-[11px] font-bold tracking-[.16em] uppercase flex items-center gap-2.5"
    style={{ color }}
  >
    <span className="w-[22px] h-0.5 rounded-[2px] bg-current" />
    {children}
  </div>
);

const Chip = ({ children }) => (
  <span className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-[#f2f4f7] border border-[#e2e5ea]">
    {children}
  </span>
);

const ListBefore = ({ items }) => (
  <ul className="list-none p-0 m-0 grid gap-2.5">
    {items.map((it, i) => (
      <li
        key={i}
        className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#5b6474] before:content-['✕'] before:absolute before:left-0 before:top-0 before:font-extrabold before:text-[#e0525c]"
      >
        {it}
      </li>
    ))}
  </ul>
);

const ListAfter = ({ items }) => (
  <ul className="list-none p-0 m-0 grid gap-2.5">
    {items.map((it, i) => (
      <li
        key={i}
        className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#2c3444] before:content-['✓'] before:absolute before:left-0 before:top-0 before:font-extrabold before:text-[#16a36a]"
      >
        {it}
      </li>
    ))}
  </ul>
);

const Stat = ({ value, label, color = '#1f6fe0', bg = '#eaf2fe', border = '#d6e5fc' }) => (
  <div className="rounded-2xl p-[18px] border" style={{ background: bg, borderColor: border }}>
    <b
      className="block text-[clamp(28px,3.4vw,42px)] font-extrabold tracking-[-.03em] leading-none"
      style={{ color }}
    >
      {value}
    </b>
    <span className="block text-[13px] text-[#5b6474] mt-2 leading-[1.35]">{label}</span>
  </div>
);

const CountStat = ({ end, dec = 0, suffix = '', word, label, color, bg, border, start }) => {
  const val = useCountUp(end, dec, suffix, start);
  return <Stat value={word || val} label={label} color={color} bg={bg} border={border} />;
};

/* ---------- DrumFace ---------- */
const DrumFace = forwardRef(({ face, live }, ref) => {
  const baseClass = `cbp-face absolute inset-0 rounded-[22px] overflow-hidden grid grid-cols-[1.05fr_.95fr] shadow-[0_30px_60px_-30px_rgba(15,26,44,.45)] ring-1 ring-black/5 ${
    live ? 'cbp-live' : ''
  }`;
  const content = renderFaceContent(face.type);
  if (!content) return null;
  return (
    <article
      ref={ref}
      className={`${baseClass} ${content.bg || 'bg-white'} ${
        content.dark ? 'text-white' : 'text-[#0f1a2c]'
      }`}
    >
      <div className="cbp-copy p-9 flex flex-col justify-center min-w-0">{content.copy}</div>
      <div className="relative overflow-hidden flex items-center justify-center [perspective:900px]">
        {content.visual}
      </div>
      <span className="absolute inset-0 bg-[#0f1a2c] opacity-0 pointer-events-none z-[5]" />
    </article>
  );
});
DrumFace.displayName = 'DrumFace';

/* ---------- FACE CONTENT RENDERER ---------- */
const renderFaceContent = (type) => {
  switch (type) {
    /* ---------- MOM'S CO ---------- */
    case 'mom-overview': return {
      copy: (
        <>
          <div className="flex items-center gap-3.5">
            <span className="w-[54px] h-[54px] rounded-full grid place-items-center text-[13px] leading-[.95] text-center flex-none bg-[#1f6fe0] text-white" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>
              the<br />mom's<br />co.
            </span>
            <Kicker color="#1f6fe0">Client · Baby &amp; Mom Care (D2C)</Kicker>
          </div>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            The Mom's Co.<br />
            <em className="not-italic" style={{ color: '#1f6fe0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Clean. Safe. Effective.</em>
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
            A trusted D2C brand offering safe, natural and toxin-free personal care products for moms, babies and families. CoderBox partnered with them to build a consistent brand narrative across every digital touchpoint.
          </p>
          <div className="flex flex-wrap gap-2">
            {['01 Strategy', '02 Content', '03 Performance', '04 Website', '05 SEO'].map((c) => <Chip key={c}>{c}</Chip>)}
          </div>
          <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#e2e5ea]">
            <div className="text-[13px] font-semibold leading-[1.35]">
              <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Website</small>themomsco.com
            </div>
            <div className="text-[13px] font-semibold leading-[1.35]">
              <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Instagram</small>@themomsco
            </div>
            <div className="text-[13px] font-semibold leading-[1.35]">
              <small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Our role</small>Digital growth partner
            </div>
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(160deg,#eaf2fe,#c9dcfb)' }}>
          <div className="relative w-[190px] h-[380px] bg-white rounded-[36px] border-[6px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-10"></div>
            <div className="flex-1 overflow-y-auto pt-7 px-3 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[8px] text-blue-600 font-bold text-center leading-tight">the<br />mom's<br />co.</div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold flex items-center gap-1">themomsco <span className="text-blue-500 text-[10px]">✓</span></p>
                  <div className="flex gap-3 text-[9px] text-gray-600 mt-0.5">
                    <span><b>1,248</b> Posts</span>
                    <span><b>297K</b> Followers</span>
                    <span><b>487</b> Following</span>
                  </div>
                </div>
              </div>
              <p className="text-[9px] font-semibold text-gray-800 mb-1">The Mom's Co.</p>
              <p className="text-[8px] text-gray-500 mb-1 leading-[1.3]">Safe, Natural, Effective.<br />Care for every little beginning. 👶</p>
              <p className="text-[8px] text-blue-500 mb-3">🔗 themomsco.com</p>
              <div className="flex gap-1 mb-3">
                <button className="flex-1 bg-blue-500 text-white text-[9px] py-1.5 rounded font-bold">Follow</button>
                <button className="flex-1 bg-gray-100 text-gray-800 text-[9px] py-1.5 rounded font-bold">Message</button>
              </div>
              <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                {['New Launch', 'Baby Care', 'Mom Care', 'Our Story', 'Community'].map((h, i) => (
                  <div key={i} className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[6px] text-gray-400">{h[0]}</div>
                    <span className="text-[6px] text-gray-600 mt-0.5">{h}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-sm flex items-center justify-center text-[6px] text-blue-300 font-bold">IMG</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    };

    case 'mom-challenge': return {
      copy: (
        <>
          <Kicker color="#1f6fe0">From low visibility to high growth</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Where they were.{' '}
            <em className="not-italic" style={{ color: '#1f6fe0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>What we did.</em>
          </h3>
          <div className="grid grid-cols-2 gap-4.5">
            <div>
              <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">The challenge</h4>
              <ListBefore items={['Limited digital visibility in a competitive market', 'Inconsistent social media presence', 'Low website traffic and conversions', 'Needed stronger brand positioning']} />
            </div>
            <div>
              <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">The solution</h4>
              <ListAfter items={['Clear digital strategy aligned to brand values', 'End-to-end social media with informative content', 'Targeted performance campaigns', 'Website optimised for UX & conversions', 'Brand storytelling to build trust & community']} />
            </div>
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center gap-4" style={{ background: '#f4f5f7' }}>
          {['Before', 'Today'].map((title, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <span className="text-[12px] font-bold text-gray-500 mb-2">{title}</span>
              <div className="relative w-[160px] h-[320px] bg-white rounded-[30px] border-[5px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1a1a1a] rounded-b-xl z-10"></div>
                <div className="flex-1 overflow-y-auto pt-6 px-2 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[6px] text-blue-600 font-bold text-center leading-tight">the<br />mom's<br />co.</div>
                    <div className="flex-1">
                      <p className="text-[9px] font-bold flex items-center gap-1">themomsco <span className="text-blue-500 text-[8px]">✓</span></p>
                      <div className="flex gap-2 text-[7px] text-gray-600 mt-0.5">
                        <span><b>{idx === 0 ? '340' : '1,248'}</b> Posts</span>
                        <span><b>{idx === 0 ? '48.1K' : '297K'}</b> Followers</span>
                        <span><b>{idx === 0 ? '297' : '487'}</b> Following</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[7px] font-semibold text-gray-800 mb-1">The Mom's Co.</p>
                  <p className="text-[6px] text-gray-500 mb-1 leading-[1.3]">Safe, Natural, Effective.<br />Care for every little beginning. 👶</p>
                  <p className="text-[6px] text-blue-500 mb-2">🔗 themomsco.com</p>
                  <div className="flex gap-1 mb-2">
                    <button className="flex-1 bg-blue-500 text-white text-[7px] py-1 rounded font-bold">Follow</button>
                    <button className="flex-1 bg-gray-100 text-gray-800 text-[7px] py-1 rounded font-bold">Message</button>
                  </div>
                  <div className="grid grid-cols-3 gap-0.5">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-sm flex items-center justify-center text-[5px] text-blue-300 font-bold">IMG</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    };

    case 'mom-results': return {
      copy: (
        <>
          <Kicker color="#1f6fe0">The results</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            A stronger,{' '}
            <em className="not-italic" style={{ color: '#1f6fe0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>more visible</em>{' '}
            brand.
          </h3>
          <div className="grid grid-cols-2 gap-3.5">
            <CountStat end={3} suffix="X" label="Increase in website traffic" start />
            <CountStat end={2.5} dec={1} suffix="X" label="Growth in social media reach" start />
            <CountStat end={60} suffix="%" label="Increase in online conversions" start />
            <Stat value="Stronger" label="Brand recall & community engagement" />
          </div>
        </>
      ),
      visual: (
        <div className="w-full h-full p-9 flex flex-col justify-center gap-4 text-white" style={{ background: 'linear-gradient(160deg,#1f6fe0,#0d3f8f)' }}>
          <p className="text-[clamp(20px,2.4vw,30px)] leading-[1.25] m-0" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>
            "From a growing brand to a digital-first category leader."
          </p>
          <p className="m-0 opacity-80 text-[14px] leading-[1.55]">A partnership built on strategy, consistency and measurable results.</p>
        </div>
      ),
      dark: true,
    };

    /* ---------- LODHA ---------- */
    case 'lodha-overview': return {
      bg: 'bg-[#0d1b3d]', dark: true,
      copy: (
        <>
          <Kicker color="#e0b24a">Client · Real estate developer</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Landmark homes.<br />
            <em className="not-italic" style={{ color: '#e0b24a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Full</em>{' '}pipeline.
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b9c3d8]">
            How CoderBox, as lead generation growth partner, drove 672+ home-buyer leads for Lodha's Navi Mumbai projects with aggressive social campaigns and Google PPC.
          </p>
          <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Project</small>Lodha Taloja · 1 BHK homes</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Channels</small>Meta · Instagram · Google Ads</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Our role</small>Lead generation growth partner</div>
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full bg-[#0a1530] flex items-center justify-center">
          <div className="bg-white rounded-xl p-4 shadow-2xl flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#e0b24a] rounded flex items-center justify-center text-[#0d1b3d] font-bold text-[10px]">L</div>
              <div className="text-left">
                <p className="text-[14px] font-extrabold text-[#0d1b3d] leading-none">LODHA</p>
                <p className="text-[7px] text-gray-500 tracking-widest">BUILDING A BETTER LIFE</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 bg-white rounded-xl p-3 shadow-2xl flex items-center gap-3 w-[200px]">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[12px] font-bold">👤</div>
            <div>
              <p className="text-[10px] font-bold text-gray-800">New lead · Meta lead form</p>
              <p className="text-[8px] text-green-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>Call back requested · 2 min ago</p>
            </div>
          </div>
          <div className="absolute bottom-[10%] right-[10%] w-[100px] h-[100px] rounded-full bg-[#e0b24a] flex flex-col items-center justify-center text-[#0d1b3d] shadow-xl animate-[cbpWobble_6s_ease-in-out_infinite]">
            <b className="text-[24px] leading-none tracking-tight">672+</b>
            <small className="text-[7px] tracking-wider font-bold mt-1">QUALIFIED LEADS</small>
          </div>
        </div>
      ),
    };

    case 'lodha-engine': return {
      bg: 'bg-[#0d1b3d]', dark: true,
      copy: (
        <>
          <Kicker color="#e0b24a">The work</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Leads from every{' '}
            <em className="not-italic" style={{ color: '#e0b24a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>scroll.</em>
          </h3>
          <div className="grid grid-cols-2 gap-4.5 mb-4">
            <div>
              <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">Where they were</h4>
              <ListBefore items={['Crowded, price-sensitive market', 'Low-intent portal enquiries', 'Leads going cold before follow-up']} />
            </div>
            <div>
              <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">What we did</h4>
              <ListAfter items={['Meta & Instagram lead ads', 'Google PPC on high-intent keywords', 'Instant WhatsApp & call-back follow-up']} />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {[
              { bg: '#b98c3a', i: '01', t: 'Audience', s: 'Navi Mumbai buyers' },
              { bg: '#c9a24a', i: '02', t: 'Social ads', s: 'Reels · carousels' },
              { bg: '#1d64e0', i: '03', t: 'Google PPC', s: 'High-intent search' },
              { bg: '#16366f', i: '04', t: 'Landing page', s: 'Instant forms' },
              { bg: '#050b1c', i: '05', t: '672+ leads', s: 'To sales, real time', shadow: true },
            ].map((s) => (
              <div key={s.i} className="rounded-[10px] px-2.5 py-3 text-[12.5px] font-bold leading-tight text-white" style={{ background: s.bg }}>
                <i className="block not-italic mb-1" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', fontSize: 13, opacity: 0.85 }}>{s.i}</i>
                {s.t}
                <small className="block text-[10px] font-semibold opacity-80 mt-1">{s.s}</small>
              </div>
            ))}
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full bg-[#0a1530] flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bg-[#e0b24a] text-[#0d1b3d] text-[10px] font-extrabold py-1.5 px-4 flex items-center justify-between z-10">
            <span>LEAD FORM</span>
            <span>→</span>
            <span>LEAD</span>
          </div>
          <div className="relative w-[170px] h-[300px] bg-white rounded-[28px] border-[5px] border-[#1a1a1a] shadow-2xl overflow-hidden mt-6">
            <div className="flex-1 overflow-y-auto p-3 bg-white">
              <div className="flex items-center gap-1 mb-2">
                <div className="w-4 h-4 bg-[#e0b24a] rounded flex items-center justify-center text-[6px] font-bold text-[#0d1b3d]">L</div>
                <span className="text-[8px] font-bold text-gray-800">LODHA</span>
                <span className="text-[6px] text-gray-400 ml-auto">Sponsored</span>
              </div>
              <div className="w-full h-[100px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-2 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-[8px] font-bold">Your 1 BHK</p>
                  <p className="text-[7px] text-[#e0b24a]">in Taloja</p>
                  <p className="text-[6px] mt-1 bg-[#e0b24a] text-[#0d1b3d] px-1 py-0.5 rounded font-bold inline-block">Starting ₹28.9 L*</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 mb-2">
                <p className="text-[7px] font-bold text-gray-800">Get details</p>
                <p className="text-[6px] text-gray-500">Lodha Move-in-ready lifestyle in Navi Mumbai. Book your site visit today.</p>
              </div>
              <p className="text-[6px] text-gray-400">Liked by homebuyers & others</p>
            </div>
          </div>
          <div className="absolute right-[5%] top-[45%] bg-white rounded-xl p-3 shadow-2xl w-[160px]">
            <p className="text-[8px] font-bold text-gray-800 mb-1">CRM · NEW LEAD</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#e0b24a] flex items-center justify-center text-[10px] font-bold text-[#0d1b3d]">R</div>
              <div>
                <p className="text-[8px] font-bold text-gray-800">Rohan S.</p>
                <p className="text-[6px] text-gray-500">1 BHK · Site visit</p>
              </div>
            </div>
            <div className="flex gap-1 mt-2">
              <span className="text-[6px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">HOT</span>
              <span className="text-[6px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">WhatsApp sent</span>
            </div>
          </div>
        </div>
      ),
    };

    case 'lodha-results': return {
      bg: 'bg-[#0d1b3d]', dark: true,
      copy: (
        <>
          <Kicker color="#e0b24a">The results</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            672+ leads.{' '}
            <em className="not-italic" style={{ color: '#e0b24a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>One</em>{' '}full pipeline.
          </h3>
          <div className="grid grid-cols-2 gap-3.5">
            <CountStat end={672} suffix="+" label="Home-buyer leads delivered to sales" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
            <Stat value="Always-on" label="Meta & Instagram lead ads" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
            <Stat value="High-intent" label="Google Search PPC" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
            <Stat value="Real-time" label="Leads to sales via CRM & WhatsApp" color="#e0b24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full bg-[#0a1530] flex items-center justify-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bg-[#e0b24a] text-[#0d1b3d] text-[10px] font-extrabold py-1.5 px-4 flex items-center justify-center z-10">
            <span>LANDING PAGE</span>
          </div>
          <div className="relative w-[200px] h-[130px] bg-gray-800 rounded-t-xl border-4 border-gray-700 shadow-2xl mt-4 overflow-hidden">
            <div className="w-full h-full bg-white p-2">
              <div className="flex items-center gap-1 mb-1">
                <div className="w-3 h-3 bg-[#e0b24a] rounded flex items-center justify-center text-[4px] font-bold text-[#0d1b3d]">L</div>
                <span className="text-[6px] font-bold text-gray-800">LODHA</span>
              </div>
              <p className="text-[7px] font-bold text-gray-800 leading-tight">Homes in Taloja, Navi Mumbai</p>
              <p className="text-[6px] text-[#e0b24a] bg-[#e0b24a]/10 px-1 py-0.5 rounded inline-block mt-1 font-bold">1 BHK from ₹28.9 L*</p>
              <div className="mt-2 grid grid-cols-2 gap-1">
                <div className="h-6 bg-gray-100 rounded"></div>
                <div className="h-6 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
          <div className="absolute right-[5%] bottom-[10%] w-[140px] bg-[#e5ddd5] rounded-xl p-2 shadow-2xl">
            <div className="flex items-center gap-1 mb-2 bg-[#075e54] text-white p-1.5 rounded-t-lg -m-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[6px] text-white">W</div>
              <span className="text-[7px] font-bold">WhatsApp</span>
            </div>
            <div className="space-y-1">
              <div className="bg-white rounded-lg p-1.5 text-[6px] text-gray-800 max-w-[80%]">Hi Rohan! Thanks for your interest in Lodha, Taloja. Here's the price sheet 📄</div>
              <div className="bg-[#dcf8c6] rounded-lg p-1.5 text-[6px] text-gray-800 max-w-[80%] ml-auto">Shall we book your site visit this Saturday?</div>
              <div className="bg-white rounded-lg p-1.5 text-[6px] text-gray-800 max-w-[80%]">Yes, 11 AM works</div>
            </div>
          </div>
          <div className="absolute bottom-[5%] left-[10%] w-[80px] h-[80px] rounded-full bg-[#e0b24a] flex flex-col items-center justify-center text-[#0d1b3d] shadow-xl animate-[cbpWobble_6s_ease-in-out_infinite]">
            <b className="text-[18px] leading-none tracking-tight">672+</b>
            <small className="text-[6px] tracking-wider font-bold mt-0.5">QUALIFIED LEADS</small>
          </div>
        </div>
      ),
    };

    /* ---------- CIORA ---------- */
    case 'ciora-overview': return {
      bg: 'bg-[#f7f0e5]',
      copy: (
        <>
          <div className="flex items-center gap-3.5">
            <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#241a15] text-[#e0a24a] text-[24px]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', boxShadow: 'inset 0 0 0 2px #e0a24a' }}>C</span>
            <Kicker color="#c0643a">Client · Café &amp; dining · Dubai</Kicker>
          </div>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Coffee first.<br />
            <em className="not-italic" style={{ color: '#c0643a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Crowds follow.</em>
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
            How CoderBox, brand &amp; growth partner since January 2026, turned a new Dubai Investment Park café into a name people search, shoot and share: a full identity, a website, a proper food shoot and a Meta presence built from zero.
          </p>
          <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#e6d9c6]">
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Website</small>cioracafe.ae</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Meta presence</small>@cioracafe</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Our role</small>Brand &amp; growth partner</div>
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: '#efe4d2' }}>
          <div className="bg-[#fdf6e9] rounded-xl p-4 shadow-2xl w-[180px] border border-[#e0a24a]/30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-[#241a15] flex items-center justify-center text-[#e0a24a] text-[10px] font-bold">C</div>
              <div>
                <p className="text-[10px] font-extrabold text-[#241a15] tracking-wider">CIORA</p>
                <p className="text-[6px] text-[#c0643a] tracking-widest">CAFE · DUBAI</p>
              </div>
            </div>
            <p className="text-[6px] font-bold text-[#c0643a] tracking-widest uppercase mb-2">Morning</p>
            {['Flat White', 'Avocado Toast', 'Ciora Pancakes'].map((item, i) => (
              <div key={i} className="flex justify-between text-[7px] text-[#241a15] mb-1">
                <span>{item}</span>
                <span className="font-bold">{[18, 42, 46][i]}</span>
              </div>
            ))}
            <p className="text-[6px] font-bold text-[#c0643a] tracking-widest uppercase mt-3 mb-2">All Day</p>
            {['Truffle Eggs', 'Iced Spanish Latte'].map((item, i) => (
              <div key={i} className="flex justify-between text-[7px] text-[#241a15] mb-1">
                <span>{item}</span>
                <span className="font-bold">{[52, 24][i]}</span>
              </div>
            ))}
            <p className="text-[6px] text-[#c0643a] text-center mt-3 tracking-widest">CIORACAFE.AE</p>
          </div>
          <div className="absolute bottom-[15%] left-[5%] bg-white rounded-xl p-3 shadow-2xl flex items-center gap-2 w-[160px]">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[12px]">☕</div>
            <div>
              <p className="text-[8px] font-bold text-gray-800">Table booked · Ciora</p>
              <p className="text-[6px] text-gray-500">Online · Saturday, 9:00 AM</p>
            </div>
          </div>
          <div className="absolute bottom-[10%] right-[5%] w-[80px] h-[80px] rounded-full bg-[#e0a24a] flex flex-col items-center justify-center text-[#241a15] shadow-xl animate-[cbpWobble_6s_ease-in-out_infinite]">
            <small className="text-[6px] tracking-widest font-bold">SINCE</small>
            <b className="text-[18px] leading-none tracking-tight">JAN</b>
            <small className="text-[6px] tracking-widest font-bold">2026</small>
          </div>
        </div>
      ),
    };

    case 'ciora-work': return {
      bg: 'bg-[#f7f0e5]',
      copy: (
        <>
          <Kicker color="#c0643a">Branding · Web · Photoshoot · Meta</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Seen before they're{' '}
            <em className="not-italic" style={{ color: '#c0643a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>seated.</em>
          </h3>
          <div className="grid grid-cols-2 gap-4.5">
            <div>
              <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">Where they were</h4>
              <ListBefore items={['A brand-new café with no brand system', 'No website; the menu lived on paper', 'Food shot on phones, under yellow light', 'No Instagram or Facebook presence']} />
            </div>
            <div>
              <h4 className="m-0 mb-2.5 text-[12px] tracking-[.14em] uppercase">What CoderBox did</h4>
              <ListAfter items={['Full identity: logo, palette, menu & collateral', 'Website with menu, gallery & enquiries', 'On-site food, drinks & interior shoot', 'Instagram + Facebook built from zero']} />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-1.5 mt-4.5 relative">
            <div className="absolute left-1.5 right-1.5 top-[5px] h-0.5 rounded" style={{ background: 'linear-gradient(90deg,#c0643a,#e0a24a)' }} />
            {[
              { s: 'JAN', t: 'Brand identity' },
              { s: 'FEB', t: 'Website live' },
              { s: 'MAR', t: 'Photoshoot' },
              { s: 'APR', t: 'Meta launch' },
              { s: 'NOW', t: 'Always-on content' },
            ].map((s, i) => (
              <div key={i} className="relative pt-[18px] text-[11.5px] font-bold leading-[1.3]">
                <span className="absolute left-0 top-0 w-3 h-3 rounded-full border-2 border-[#c0643a]" style={{ background: '#f7f0e5' }} />
                <small className="block text-[9.5px] tracking-[.12em] text-[#c0643a] mb-0.5">{s.s}</small>
                {s.t}
              </div>
            ))}
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: '#efe4d2' }}>
          <div className="bg-white rounded-xl p-4 shadow-2xl w-[220px]">
            <p className="text-[8px] font-bold tracking-widest text-[#241a15] mb-3">BRAND BOARD</p>
            <div className="flex gap-2 mb-3">
              <div className="w-16 h-16 bg-[#241a15] rounded-lg flex items-center justify-center">
                <span className="text-[#e0a24a] text-[20px]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>C</span>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-extrabold text-[#241a15]">Aa</p>
                <p className="text-[6px] text-gray-500 tracking-widest">POPPINS · HEADINGS</p>
                <p className="text-[12px] text-[#c0643a]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Ciora</p>
                <p className="text-[6px] text-gray-500 tracking-widest">LORA ITALIC · ACCENT</p>
              </div>
            </div>
            <div className="flex gap-1">
              {['#241a15', '#c0643a', '#e0a24a', '#8b9a7b', '#fdf6e9'].map((c) => (
                <div key={c} className="flex-1 h-6 rounded" style={{ background: c }} />
              ))}
            </div>
            <div className="flex gap-1 mt-1">
              {['ESPRESSO', 'CLAY', 'AMBER', 'SAGE', 'CREAM'].map((n) => (
                <span key={n} className="text-[5px] text-gray-500 flex-1 text-center tracking-wider">{n}</span>
              ))}
            </div>
          </div>
        </div>
      ),
    };

    case 'ciora-results': return {
      bg: 'bg-[#241a15]', dark: true,
      copy: (
        <>
          <Kicker color="#e0a24a">The results</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            A café people find,{' '}
            <em className="not-italic" style={{ color: '#e0a24a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>follow</em>{' '}and fill.
          </h3>
          <div className="grid grid-cols-2 gap-3.5">
            <CountStat end={4.2} dec={1} suffix="K+" label="Instagram followers" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
            <CountStat end={180} suffix="+" label="Posts, reels & stories shipped" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
            <CountStat end={250} suffix="K+" label="Monthly Meta reach · Instagram + Facebook" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
            <Stat value="Dubai" label="DIP · Al Furjan · Jebel Ali · Expo City" color="#e0a24a" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center gap-4" style={{ background: '#efe4d2' }}>
          {['BEFORE', 'TODAY'].map((title, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <span className="text-[8px] font-extrabold text-[#241a15] tracking-widest mb-2">{title}</span>
              <div className="relative w-[140px] h-[280px] bg-white rounded-[28px] border-[5px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-b-xl z-10"></div>
                <div className="flex-1 overflow-y-auto pt-6 px-2 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-[#c0643a] flex items-center justify-center text-[6px] text-white font-bold">C</div>
                    <div className="flex-1">
                      <p className="text-[8px] font-bold flex items-center gap-1">ciora_page {idx === 1 && <span className="text-blue-500 text-[7px]">✓</span>}</p>
                      <div className="flex gap-2 text-[6px] text-gray-600 mt-0.5">
                        <span><b>{idx === 0 ? '0' : '180+'}</b> posts</span>
                        <span><b>{idx === 0 ? '0' : '4.2K'}</b> followers</span>
                        <span><b>{idx === 0 ? '0' : '3x'}</b> weekly reels</span>
                      </div>
                    </div>
                  </div>
                  {idx === 1 && (
                    <>
                      <p className="text-[6px] font-semibold text-gray-800">Ciora Cafe · Dubai Investment Park</p>
                      <p className="text-[5px] text-gray-500 mb-1">Specialty coffee · All-day breakfast · Brunch & lunch · Park Road North St.</p>
                      <p className="text-[5px] text-blue-500 mb-2">🔗 cioracafe.ae</p>
                      <div className="flex gap-1 mb-2">
                        <button className="flex-1 bg-blue-500 text-white text-[6px] py-1 rounded font-bold">Directions</button>
                        <button className="flex-1 bg-green-500 text-white text-[6px] py-1 rounded font-bold">WhatsApp</button>
                      </div>
                    </>
                  )}
                  <div className="grid grid-cols-3 gap-0.5">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-[#c0643a]/20 to-[#e0a24a]/20 rounded-sm flex items-center justify-center text-[5px] text-[#c0643a] font-bold">{idx === 0 ? '' : 'IMG'}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    };

    /* ---------- SHOMI ---------- */
    case 'shomi-positioning': return {
      bg: 'bg-[#24163a]', dark: true,
      copy: (
        <>
          <Kicker color="#b9a3f0">Client · Vastu, tarot &amp; healing</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Align your space, energy and soul,{' '}
            <em className="not-italic" style={{ color: '#b9a3f0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>and life flows.</em>
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#cfc3e8]">
            An Instagram growth strategy that positions Shomi Healings not as a service page but as a guidance ecosystem: people come for clarity, balance, peace and direction.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Calm, reassuring, wise', 'Spiritual but practical', 'High trust, not sensational'].map((c) => (
              <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#efe9fc]">{c}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Platform</small>Instagram</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Deliverable</small>Growth strategy</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8fa0c2] font-bold mb-1">Goal</small>Followers → consultation leads</div>
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 50%, #3a2566 0%, #1a1030 80%)' }}>
          <div className="relative w-[220px] h-[220px] [transform:rotateX(60deg)] [transform-style:preserve-3d]">
            <div className="absolute inset-0 [transform-style:preserve-3d]" style={{ animation: 'cbpSpinZ 20s linear infinite' }}>
              <div className="absolute inset-0 rounded-full border border-dashed border-[#b9a3f0]/40" />
              <div className="absolute inset-[20%] rounded-full border border-dashed border-[#b9a3f0]/30" />
              <div className="absolute inset-[40%] rounded-full border border-dashed border-[#b9a3f0]/20" />
              {PILLARS.map((t, i) => {
                const a = i * (360 / PILLARS.length);
                return (
                  <div key={i} className="absolute left-1/2 top-1/2 w-0 h-0" style={{ transform: `rotateZ(${a}deg) translateY(-50%)` }}>
                    <span className="absolute block whitespace-nowrap bg-white/10 border border-[#b9a3f0]/50 backdrop-blur text-white text-[9px] font-bold px-2 py-1 rounded-full" style={{ transform: `translate(-50%,-50%) rotateZ(${-a}deg) rotateX(-60deg)` }}>{t}</span>
                  </div>
                );
              })}
            </div>
            <div className="absolute left-1/2 top-1/2 w-[80px] h-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center text-center" style={{ transform: 'rotateX(-60deg) translateZ(40px)', background: 'radial-gradient(circle, #fff 0%, #e3d6ff 30%, rgba(185,163,240,0.4) 60%, transparent 80%)' }}>
              <span className="text-[#24163a] text-[10px] font-bold leading-tight" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>Shomi<br />Healings</span>
            </div>
          </div>
        </div>
      ),
    };

    case 'shomi-playbook': return {
      bg: 'bg-[#24163a]', dark: true,
      copy: (
        <>
          <Kicker color="#b9a3f0">The playbook</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Consistency{' '}
            <em className="not-italic" style={{ color: '#b9a3f0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>over virality.</em>
          </h3>
          <div className="grid grid-cols-5 gap-1.5 mb-4">
            {[
              { b: '1–2', s: 'Reels / day' },
              { b: '8–15', s: 'Stories / day' },
              { b: '2–3', s: 'Carousels / wk' },
              { b: '1', s: 'Live / wk' },
              { b: '3–4', s: 'Broadcasts / wk' },
            ].map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[10px] px-2 py-2.5 text-center">
                <b className="block text-[15px] text-[#b9a3f0]">{c.b}</b>
                <span className="text-[10.5px] text-[#cfc3e8]">{c.s}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <Stat value="+15–25%" label="Monthly follower growth target" color="#b9a3f0" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
            <Stat value="5–15" label="DM leads / day target" color="#b9a3f0" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" />
          </div>
          <p className="text-[11.5px] text-[#b7a9d6] italic mt-3">
            Targets set in the strategy. Framework: education builds authority, emotion builds trust, proof builds confidence, DMs build revenue.
          </p>
        </>
      ),
      visual: (
        <div className="p-7 w-full h-full flex flex-col justify-center" style={{ background: 'radial-gradient(circle at 50% 50%,#4a2f85 0,#24163a 70%)' }}>
          <div className="text-[#efe9fc] w-full max-w-[340px]">
            <h4 className="text-[12px] tracking-[.14em] uppercase mb-2.5 font-bold" style={{ color: '#b9a3f0' }}>REELS FRAMEWORK</h4>
            <ul className="list-none p-0 m-0 grid gap-2.5">
              {['0–3 sec · Pattern break: eye contact or home visual', '3–7 sec · Pain or curiosity hook', '7–15 sec · Value and explanation', '15–20 sec · Gentle CTA: DM "VASTU"'].map((t, i) => (
                <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#cfc3e8] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:opacity-70 before:text-[#b9a3f0]">{t}</li>
              ))}
            </ul>
            <h4 className="text-[12px] tracking-[.14em] uppercase mb-2.5 mt-5 font-bold" style={{ color: '#b9a3f0' }}>DM CONVERSION, NON-SALESY</h4>
            <ul className="list-none p-0 m-0 grid gap-2.5">
              <li className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#cfc3e8] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-[#b9a3f0]">Gratitude → emotional question → soft offer</li>
            </ul>
          </div>
        </div>
      ),
    };

    /* ---------- ULTRA ---------- */
    case 'ultra-fivecs': return {
      bg: 'bg-[#fbf4ef]',
      copy: (
        <>
          <Kicker color="#a8446a">Client · Fragrance</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            A website built on{' '}
            <em className="not-italic" style={{ color: '#a8446a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>five Cs.</em>
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
            For Ultra Fragrance Ltd, CoderBox set out the parameters for running a successful website: a platform to talk to every customer individually, easy to manage, and at a fraction of the cost of other channels.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Credibility', 'Convenience', 'Constant connectivity', 'Communication', 'Cost'].map((c) => (
              <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-[#f0dde2]">{c}</span>
            ))}
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 40%,#fff 0,#f6e2e6 45%,#d9a3b3 100%)' }}>
          <div className="relative w-[170px] h-[230px] [transform-style:preserve-3d]" style={{ animation: 'cbpSpinY 16s linear infinite' }}>
            {['C', 'C', 'C', 'C', 'C'].map((letter, i) => (
              <div key={i} className="absolute inset-0 rounded-[10px] flex flex-col justify-end p-4 text-white" style={{ background: 'linear-gradient(165deg,rgba(255,255,255,.35),rgba(168,68,106,.85))', border: '1px solid rgba(255,255,255,.6)', boxShadow: 'inset 0 0 40px rgba(255,255,255,.25)', transform: `rotateY(${i * 72}deg) translateZ(140px)` }}>
                <b className="text-[34px] leading-none" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', fontWeight: 600 }}>{letter}</b>
                <span className="text-[12.5px] font-bold tracking-[.04em] mt-1.5">{['Credibility', 'Convenience', 'Connectivity', 'Communication', 'Cost'][i]}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-[14%] left-1/2 w-[240px] h-[40px] -translate-x-1/2 rounded-[50%]" style={{ background: 'radial-gradient(ellipse,rgba(58,29,43,.35),transparent 70%)' }} />
        </div>
      ),
    };

    case 'ultra-params': return {
      bg: 'bg-[#fbf4ef]',
      copy: (
        <>
          <Kicker color="#a8446a">The framework</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Five parameters for a site{' '}
            <em className="not-italic" style={{ color: '#a8446a', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>that performs.</em>
          </h3>
          <div className="grid gap-2">
            {[
              { i: '01', b: 'Content & messaging', s: 'Accurate product, campaign and brand content with a consistent voice.' },
              { i: '02', b: 'Stability & technical excellence', s: 'Reliable DNS, regular backups and dependable maintenance.' },
              { i: '03', b: 'Speed & robustness', s: 'Fast on any device and connection, on a sound framework.' },
              { i: '04', b: 'Aesthetics & functionalism', s: 'Simplicity and elegance over complex design patterns.' },
              { i: '05', b: 'Accessibility & usability', s: 'Responsive in design and performance for every user.' },
            ].map((p) => (
              <div key={p.i} className="grid grid-cols-[34px_1fr] gap-3 items-start bg-white border border-[#f0dde2] rounded-[12px] px-3 py-2.5">
                <i className="text-[18px]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', fontWeight: 600, color: '#a8446a' }}>{p.i}</i>
                <p className="m-0"><b className="block text-[13.5px]">{p.b}</b><span className="text-[12px] text-[#5b6474] leading-[1.4]">{p.s}</span></p>
              </div>
            ))}
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 40%,#fff 0,#f6e2e6 45%,#d9a3b3 100%)' }}>
          <div className="relative w-[58%] h-[44%] [transform-style:preserve-3d]" style={{ transform: 'translateY(14%) rotateX(50deg) rotateZ(-28deg)' }}>
            {[136, 102, 68, 34, 0].map((z, i) => (
              <div key={i} className="absolute inset-0 flex flex-col justify-end items-end rounded-xl bg-white border border-[#f0dde2] px-3.5 py-3 text-[12px] font-bold text-[#3a1d2b]" style={{ boxShadow: '0 20px 40px -20px rgba(58,29,43,.5)', transform: `translateZ(${z}px) translate(${z * -0.5}px,${z * -0.5}px)` }}>
                <span className="absolute left-3.5 top-2.5 text-[7px] tracking-widest text-[#e0b4c1]">● ● ●</span>
                {['05 · Accessibility', '04 · Aesthetics', '03 · Speed', '02 · Stability', '01 · Content & messaging'][i]}
              </div>
            ))}
          </div>
        </div>
      ),
    };

    /* ---------- SMILE ---------- */
    case 'smile-design': return {
      bg: 'bg-gradient-to-br from-[#f3fbfb] to-[#e2f4f3]',
      copy: (
        <>
          <Kicker color="#138f8f">Client · Dental care app · UI/UX</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            A healthy smile,{' '}
            <em className="not-italic" style={{ color: '#138f8f', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>one tap away.</em>
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#5b6474]">
            A calm, aqua glass interface for SmileCare's dental app, designed so patients can find a dentist, explore treatments and book a visit in one smooth flow.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Onboarding', 'Home dashboard', 'Treatment pages', 'Booking flow', 'Glass UI system'].map((c) => (
              <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white border border-[#cdebea]">{c}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-[#cdebea]">
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Brand line</small>Healthy Smile, Happy Life</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Platform</small>Mobile app</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#5b6474] font-bold mb-1">Scope</small>UI/UX design</div>
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 45%,#ffffff 0,#d6f1ef 45%,#9fdcd8 100%)' }}>
          <div className="flex gap-2 items-center">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative w-[90px] h-[180px] bg-white rounded-[18px] border-[3px] border-white shadow-xl overflow-hidden" style={{ transform: i === 0 ? 'rotateY(28deg) translateZ(-40px)' : i === 2 ? 'rotateY(-28deg) translateZ(-40px)' : 'translateZ(40px)', animation: 'cbpFan 7s ease-in-out infinite', animationDelay: `${-i * 2}s` }}>
                <div className="p-2 bg-gradient-to-b from-teal-50 to-white h-full">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-[8px] text-teal-600 font-bold mx-auto mb-1">🦷</div>
                  <p className="text-[6px] font-bold text-center text-teal-800">SmileCare</p>
                  <p className="text-[5px] text-center text-gray-500 mb-1">Healthy Smile, Happy Life</p>
                  <div className="bg-teal-500 text-white text-[5px] py-1 rounded text-center font-bold mb-1">Book Appointment</div>
                  <div className="grid grid-cols-2 gap-0.5">
                    {[1, 2, 3, 4].map((_, j) => (
                      <div key={j} className="h-5 bg-teal-50 rounded flex items-center justify-center text-[4px] text-teal-600">🦷</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    };

    case 'smile-journey': return {
      bg: 'bg-gradient-to-br from-[#f3fbfb] to-[#e2f4f3]',
      copy: (
        <>
          <Kicker color="#138f8f">The patient journey</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            From hello to{' '}
            <em className="not-italic" style={{ color: '#138f8f', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>booked.</em>
          </h3>
          <ul className="list-none p-0 m-0 grid gap-2.5">
            {[
              { b: '01 Welcome', s: 'brand promise, Get Started and sign in' },
              { b: '02 Home', s: 'search, Find Dentist, Appointments, Treatments and 24/7 Emergency' },
              { b: '03 Treatment', s: 'duration, sessions, results, benefits and starting price' },
              { b: '04 Booking', s: 'date, time slot, in-clinic or video consult, and fee before you confirm' },
            ].map((s, i) => (
              <li key={i} className="text-[13.5px] leading-[1.45] pl-[22px] relative text-[#2c3444] before:content-['✦'] before:absolute before:left-0 before:top-0.5 before:text-[11px] before:text-[#16a3a3]">
                <b>{s.b}</b> · {s.s}
              </li>
            ))}
          </ul>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 45%,#ffffff 0,#d6f1ef 45%,#9fdcd8 100%)' }}>
          <div className="relative w-[34%] aspect-[9/16] [transform-style:preserve-3d]" style={{ animation: 'cbpSpinY 18s linear infinite' }}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e2f4f3] to-[#9fdcd8] border-[3px] border-white shadow-xl" style={{ transform: `rotateY(${i * 90}deg) translateZ(140px)`, backfaceVisibility: 'hidden' }}>
                <div className="p-3 h-full flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[14px] mb-2">🦷</div>
                  <p className="text-[8px] font-bold text-teal-800">SmileCare</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    };

    /* ---------- SR INFRA ---------- */
    case 'sr-overview': return {
      bg: 'bg-[#1c1813]', dark: true,
      copy: (
        <>
          <div className="flex items-center gap-3.5">
            <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#f2b705] text-[#1c1813] font-extrabold text-[15px]">SR</span>
            <Kicker color="#f2b705">Client · Earthwork &amp; infrastructure</Kicker>
          </div>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Moving earth,{' '}
            <em className="not-italic" style={{ color: '#f2b705', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>since 2005.</em>
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#cfc6b8]">
            SR Infra – Earth Work Solutions supplies earthworks, major civil infrastructure and mining projects with a well-maintained fleet and a skilled team, known for mobilising machinery anywhere in the state, including remote sites.
          </p>
          <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Established</small>2005</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Base</small>Kompally, Hyderabad</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#a89c89] font-bold mb-1">Leadership</small>Shankar Pallapu · 27+ yrs</div>
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full bg-[#2a241c] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#f2b705] flex items-center justify-center text-[#1c1813] font-extrabold text-[20px] mx-auto mb-3">SR</div>
            <p className="text-[#f2b705] text-[12px] font-bold tracking-widest">SR INFRA</p>
            <p className="text-[#cfc6b8] text-[9px] mt-1">Earth Work Solutions</p>
            <p className="text-[#a89c89] text-[8px] mt-3">EST. 2005 · HYDERABAD</p>
          </div>
        </div>
      ),
    };

    case 'sr-fleet': return {
      bg: 'bg-[#1c1813]', dark: true,
      copy: (
        <>
          <Kicker color="#f2b705">Services &amp; fleet</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            The right machine,{' '}
            <em className="not-italic" style={{ color: '#f2b705', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>at the right time.</em>
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Cellar excavation', 'Controlled blasting', 'Forest clearance', 'Demolition', 'Trenching', 'Culverts', 'Landscaping', 'Concrete breaking & removal'].map((c) => (
              <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#f3ede3]">{c}</span>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-1.5 mt-4">
            {[
              { b: 14, s: 'Excavators, 20–22 t' },
              { b: 30, s: '16 cum dumpers' },
              { b: 15, s: 'JHR machines' },
              { b: 3, s: 'Rig machines' },
              { b: 2, s: 'Transport vehicles' },
            ].map((f, i) => (
              <div key={i} className="rounded-[10px] px-2 py-2.5 text-center bg-[#f2b705]/10 border border-[#f2b705]/30">
                <b className="block text-[22px] leading-none text-[#f2b705]">{f.b}</b>
                <span className="block text-[10.5px] leading-tight text-[#cfc6b8] mt-1">{f.s}</span>
              </div>
            ))}
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full bg-[#2a241c] flex items-center justify-center">
          <div className="grid grid-cols-2 gap-3">
            {[
              { b: 14, s: 'Excavators' },
              { b: 30, s: 'Dumpers' },
              { b: 15, s: 'JHR' },
              { b: 3, s: 'Rigs' },
              { b: 2, s: 'Transport' },
              { b: 64, s: 'Total Fleet' },
            ].map((f, i) => (
              <div key={i} className={`rounded-xl p-4 text-center ${i === 5 ? 'bg-[#f2b705] text-[#1c1813]' : 'bg-white/5 border border-white/10 text-[#f3ede3]'}`}>
                <b className={`block text-[28px] leading-none ${i === 5 ? 'text-[#1c1813]' : 'text-[#f2b705]'}`}>{f.b}</b>
                <span className={`block text-[10px] mt-1 ${i === 5 ? 'text-[#1c1813]/80' : 'text-[#a89c89]'}`}>{f.s}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    };

    case 'sr-projects': return {
      bg: 'bg-[#1c1813]', dark: true,
      copy: (
        <>
          <Kicker color="#f2b705">Track record</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Hyderabad's skyline,{' '}
            <em className="not-italic" style={{ color: '#f2b705', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>from the ground down.</em>
          </h3>
          <div className="grid grid-cols-2 gap-3.5">
            <CountStat end={15} label="Major projects across Hyderabad" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
            <CountStat end={13.9} dec={1} suffix="L+" label="Cubic metres excavated or in progress" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
            <CountStat end={2} suffix="L" label="m³ on the largest single site, SRIYAS Khajaguda" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
            <CountStat end={64} label="Machines in the owned fleet" color="#f2b705" bg="rgba(255,255,255,.05)" border="rgba(255,255,255,.12)" start />
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full bg-[#2a241c] flex flex-col justify-end">
          <div className="overflow-hidden bg-[#1c1813]/85 backdrop-blur border-t border-[#f2b705]/35 py-2.5">
            <div className="flex gap-7 w-max text-[12px] font-bold tracking-[.08em] uppercase text-[#f3ede3]" style={{ animation: 'cbpMarq 26s linear infinite' }}>
              {[0, 1].map((k) => (
                <React.Fragment key={k}>
                  {['Rajapushpa', 'Legend', 'Mahaveer', 'SAAS Infra', 'AkzoNobel', 'Poulomi', 'Sunyuga', 'SRIYAS Life Spaces', 'Magna Infratech', 'Delhi Public School', 'Shilpa'].map((t, i) => (
                    <span key={`${k}-${i}`} className="before:content-['◆'] before:text-[#f2b705] before:mr-7">{t}</span>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ),
    };

    /* ---------- FAIRBANKS ---------- */
    case 'fair-seo': return {
      bg: 'bg-[#0f2340]', dark: true,
      copy: (
        <>
          <div className="flex items-center gap-3.5">
            <span className="w-[54px] h-[54px] rounded-full grid place-items-center flex-none bg-[#5fd4b0] text-[#0f2340] font-extrabold text-[15px]">FO</span>
            <Kicker color="#5fd4b0">Client · Orthodontics · Lehi, Utah</Kicker>
          </div>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            Straight smiles,{' '}
            <em className="not-italic" style={{ color: '#5fd4b0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>found first.</em>
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b8c7dd]">
            Fairbanks Orthodontics is a patient-first practice in Lehi, UT, led by Dr. Benjamin Harvey, DDS, MS. CoderBox handles SEO so families searching for braces and aligners nearby find the practice first.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Local SEO', 'Service-page SEO', 'Google Business Profile', 'Invisalign®', 'Damon™ & clear braces'].map((c) => (
              <span key={c} className="text-[12px] font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#e6eef8]">{c}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3.5 mt-5 pt-4 border-t border-white/10">
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Website</small>fairbanksorthodontics.com</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Location</small>Lehi, Utah, USA</div>
            <div className="text-[13px] font-semibold leading-[1.35]"><small className="block text-[10px] tracking-[.14em] uppercase text-[#8ea3c2] font-bold mb-1">Our role</small>SEO &amp; lead generation</div>
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 50%,#1a3a5c 0,#0f2340 80%)' }}>
          <div className="relative w-[200px] [transform-style:preserve-3d]" style={{ transform: 'rotateX(18deg) rotateY(-18deg)', animation: 'cbpSerp 8s ease-in-out infinite' }}>
            <div className="bg-white text-[#1f2a3a] rounded-[14px] px-4 py-3.5 shadow-2xl">
              <div className="flex items-center gap-2 border border-[#dfe3ea] rounded-full px-3 py-2 text-[12px] text-[#3c4656] mb-3">
                <span className="w-2.5 h-2.5 border-2 border-[#7b8698] rounded-full" />
                orthodontist in lehi ut
              </div>
              <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474]" style={{ background: 'linear-gradient(90deg,rgba(95,212,176,.18),transparent)', margin: '0 -16px', padding: '9px 16px', borderLeft: '3px solid #2bb38a' }}>
                <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Fairbanks Orthodontics in Lehi, UT</b>
                Braces, Invisalign® and complimentary consultations.
              </div>
              <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474] opacity-55">
                <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Orthodontists near you</b>Compare local providers…
              </div>
              <div className="py-2 border-t border-[#eef1f5] text-[11px] text-[#5b6474] opacity-40">
                <b className="block text-[#1a4fd6] text-[13.5px] font-semibold my-0.5">Braces cost guide</b>What to expect…
              </div>
            </div>
            <div className="absolute right-0 -bottom-6 w-[52%] p-2.5 rounded-[14px] bg-white shadow-2xl" style={{ transform: 'translateZ(60px) translate(38%,-14%)' }}>
              <span className="text-[#f5a623] tracking-widest text-[11px]">★★★★★</span>
              <b className="block text-[12.5px]">Fairbanks Orthodontics</b>
              <span className="text-[11px] text-[#5b6474]">Orthodontist · Lehi, UT</span>
            </div>
          </div>
        </div>
      ),
    };

    case 'fair-leads': return {
      bg: 'bg-[#0f2340]', dark: true,
      copy: (
        <>
          <Kicker color="#5fd4b0">Lead generation</Kicker>
          <h3 className="text-[clamp(24px,3vw,38px)] leading-[1.1] tracking-[-.025em] font-extrabold mt-3.5 mb-3">
            From search{' '}
            <em className="not-italic" style={{ color: '#5fd4b0', fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic' }}>to consultation chair.</em>
          </h3>
          <p className="text-[15px] leading-[1.6] max-w-[48ch] mb-4 text-[#b8c7dd]">
            Every search, visit and referral is steered toward one action: booking the practice's complimentary orthodontic consultation.
          </p>
          <div className="grid grid-cols-5 gap-1.5">
            {[
              { i: '01', t: 'Search', s: 'Local & service SEO' },
              { i: '02', t: 'Visit', s: 'Treatment pages' },
              { i: '03', t: 'Offer', s: 'Free consultation' },
              { i: '04', t: 'Enquiry', s: 'Call · form · booking' },
              { i: '05', t: 'Referral', s: 'Refer-a-friend & rewards' },
            ].map((s) => (
              <div key={s.i} className="rounded-[10px] px-2.5 py-3 text-[12.5px] font-bold leading-tight text-white bg-[#5fd4b0]/10 border border-[#5fd4b0]/35">
                <i className="block mb-1 text-[#5fd4b0] text-[13px]" style={{ fontFamily: 'Fraunces,Georgia,serif', fontStyle: 'italic', opacity: 1 }}>{s.i}</i>
                {s.t}
                <small className="block text-[10px] font-semibold opacity-80 mt-1">{s.s}</small>
              </div>
            ))}
          </div>
        </>
      ),
      visual: (
        <div className="relative w-full h-full flex items-center justify-center" style={{ background: 'radial-gradient(circle at 50% 50%,#1a3a5c 0,#0f2340 80%)' }}>
          <div className="relative w-[240px] h-[280px] [transform-style:preserve-3d]" style={{ transform: 'rotateX(62deg)' }}>
            {[
              { w: 240, h: 240, ml: -120, t: 0, z: 120, color: 'rgba(95,212,176,.7)', name: 'cbpR1', label: 'Search' },
              { w: 180, h: 180, ml: -90, t: 30, z: 60, color: 'rgba(95,212,176,.7)', name: 'cbpR2', label: 'Visit' },
              { w: 120, h: 120, ml: -60, t: 60, z: 0, color: 'rgba(95,212,176,.7)', name: 'cbpR3', label: 'Enquiry' },
              { w: 64, h: 64, ml: -32, t: 88, z: -60, color: '#5fd4b0', name: null, label: '' },
            ].map((ring, i) => (
              <div key={i} className="absolute left-1/2 rounded-full border-2" style={{ width: ring.w, height: ring.h, marginLeft: ring.ml, top: ring.t, transform: `translateZ(${ring.z}px)`, borderColor: ring.color, boxShadow: '0 0 30px rgba(95,212,176,.25) inset', background: i === 3 ? '#5fd4b0' : undefined, animation: ring.name ? `${ring.name} 12s linear infinite` : undefined }}>
                {ring.label && (
                  <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white text-[#0f2340] text-[11px] font-extrabold rounded-full px-2.5 py-1 whitespace-nowrap" style={{ transform: 'translateX(-50%) rotateX(-62deg)' }}>{ring.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ),
    };

    default: return null;
  }
};

/* ---------- DRUM COMPONENT ---------- */
const ClientCaseStudyDrum = ({ targetFace = null }) => {
  const rollerRef = useRef(null);
  const drumRef = useRef(null);
  const faceRefs = useRef([]);
  const barRef = useRef(null);
  const rollerState = useRef({ cur: 0, radius: 0, active: -1 });
  const [activeFace, setActiveFace] = useState(0);
  const [countDisplay, setCountDisplay] = useState('01 / ' + DRUM_FACES.length);
  const [currentFaceTitle, setCurrentFaceTitle] = useState(DRUM_FACES[0].title);
  const [activeTab, setActiveTab] = useState(0);

  const N = DRUM_FACES.length;
  const SLOTS = 6;
  const STEP = 360 / SLOTS;

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const layout = useCallback(() => {
    const vh = window.innerHeight;
    const w = window.innerWidth;
    const fh = Math.round(Math.min(540, vh * (w < 600 ? 0.64 : 0.6)));
    document.documentElement.style.setProperty('--fh', `${fh}px`);
    if (drumRef.current) drumRef.current.style.height = `${fh}px`;
    rollerState.current.radius = fh / 2 / Math.tan(Math.PI / SLOTS);
    if (rollerRef.current) rollerRef.current.style.height = reduce ? 'auto' : `${N * 52 + 100}vh`;
    faceRefs.current.forEach((face, i) => {
      if (!face) return;
      face.style.transform = `rotateX(${-i * STEP}deg) translateZ(${rollerState.current.radius}px)`;
    });
  }, [N, STEP, reduce]);

  useEffect(() => {
    if (reduce) {
      faceRefs.current.forEach((f) => f && f.classList.add('cbp-live'));
      return;
    }
    let raf;
    const frame = () => {
      const roller = rollerRef.current;
      const drum = drumRef.current;
      if (!roller || !drum) { raf = requestAnimationFrame(frame); return; }
      const r = roller.getBoundingClientRect();
      const total = roller.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / total));
      const raw = p * (N - 1);
      const base = Math.floor(raw);
      const f = raw - base;
      const eased = f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
      const target = (base + eased) * STEP;
      const vel = target - rollerState.current.cur;
      rollerState.current.cur += Math.max(-10, Math.min(10, vel * 0.13));
      const yaw = Math.max(-14, Math.min(14, vel * 0.45));
      const push = Math.min(160, Math.abs(vel) * 7);
      const roll = Math.max(-3, Math.min(3, vel * 0.08));
      drum.style.transform = `translateZ(${-rollerState.current.radius - push}px) rotateY(${yaw}deg) rotateZ(${roll}deg) rotateX(${rollerState.current.cur}deg)`;

      faceRefs.current.forEach((face, i) => {
        if (!face) return;
        const d = Math.abs(rollerState.current.cur / STEP - i);
        face.style.opacity = Math.max(0, 1 - d * 0.82).toFixed(3);
        face.style.visibility = d > 1.4 ? 'hidden' : 'visible';
        face.style.pointerEvents = d < 0.5 ? 'auto' : 'none';
      });

      if (barRef.current) barRef.current.style.width = `${p * 100}%`;
      const idx = Math.max(0, Math.min(N - 1, Math.round(rollerState.current.cur / STEP)));
      if (idx !== rollerState.current.active) setActiveFace(idx);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [N, STEP, reduce]);

  useEffect(() => { layout(); window.addEventListener('resize', layout); return () => window.removeEventListener('resize', layout); }, [layout]);

  useEffect(() => {
    const s = rollerState.current;
    if (s.active >= 0 && faceRefs.current[s.active]) faceRefs.current[s.active].classList.remove('cbp-live');
    s.active = activeFace;
    if (faceRefs.current[activeFace]) faceRefs.current[activeFace].classList.add('cbp-live');
    setCurrentFaceTitle(DRUM_FACES[activeFace].title);
    setCountDisplay(('0' + (activeFace + 1)).slice(-2) + ' / ' + N);
    setActiveTab(DRUM_FACES[activeFace].c);
  }, [activeFace, N]);

  const goToFace = useCallback((i) => {
    if (reduce) {
      if (faceRefs.current[i]) faceRefs.current[i].scrollIntoView({ block: 'center' });
      return;
    }
    const roller = rollerRef.current;
    if (!roller) return;
    const t = roller.offsetHeight - window.innerHeight;
    const top = roller.getBoundingClientRect().top + window.scrollY + t * (i / (N - 1)) + 2;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [N, reduce]);

  useEffect(() => {
    if (targetFace == null) return;
    goToFace(targetFace);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFace]);

  return (
    <div className="cbp-drum-root relative w-full">
      <style>{`
        @keyframes cbpSpinY { to { transform: rotateY(360deg); } }
        @keyframes cbpSpinZ { to { transform: rotateZ(360deg); } }
        @keyframes cbpWobble { 0%,100% { transform: rotate(-8deg); } 50% { transform: rotate(4deg) scale(1.04); } }
        @keyframes cbpMarq { to { transform: translateX(-50%); } }
        @keyframes cbpFan { 0%,100% { transform: translateY(-48%) rotateY(0deg) translateZ(0px); } 50% { transform: translateY(-54%) rotateY(0deg) translateZ(20px); } }
        @keyframes cbpSerp { 50% { transform: rotateX(10deg) rotateY(-6deg) translateY(-8px); } }
        @keyframes cbpR1 { from { transform: translateZ(120px) rotateZ(0); } to { transform: translateZ(120px) rotateZ(360deg); } }
        @keyframes cbpR2 { from { transform: translateZ(60px) rotateZ(0); } to { transform: translateZ(60px) rotateZ(360deg); } }
        @keyframes cbpR3 { from { transform: translateZ(0) rotateZ(0); } to { transform: translateZ(0) rotateZ(360deg); } }
        .cbp-face .cbp-copy > * { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .7s cubic-bezier(.2,.8,.2,1); }
        .cbp-face.cbp-live .cbp-copy > * { opacity: 1; transform: none; }
        .cbp-face.cbp-live .cbp-copy > *:nth-child(2) { transition-delay: .07s; }
        .cbp-face.cbp-live .cbp-copy > *:nth-child(3) { transition-delay: .14s; }
        .cbp-face.cbp-live .cbp-copy > *:nth-child(4) { transition-delay: .21s; }
        .cbp-face.cbp-live .cbp-copy > *:nth-child(5) { transition-delay: .28s; }
        @media (max-width: 900px) { .cbp-face { grid-template-columns: 1fr; grid-template-rows: 32% 1fr; } }
      `}</style>

      <div ref={rollerRef} className="relative z-10" style={{ height: reduce ? 'auto' : `${N * 52 + 100}vh` }}>
        <div className={reduce ? 'relative py-10 px-4' : 'sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden px-4'}>

          {/* ===== Right-side dots rail ===== */}
          {!reduce && (
            <div
              className="absolute right-[max(12px,calc((100vw-1100px)/2-40px))] top-1/2 -translate-y-1/2 flex flex-col gap-2 z-[12] max-[900px]:right-3"
              aria-hidden="true"
            >
              {DRUM_FACES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToFace(i)}
                  tabIndex={-1}
                  className={`w-2 h-2 rounded-full border-0 p-0 transition-all duration-300 ${
                    activeFace === i
                      ? 'bg-[#0bb4ef] scale-[1.6]'
                      : 'bg-[#c9ced8] hover:bg-[#9aa3b2]'
                  }`}
                />
              ))}
            </div>
          )}

          <div className="relative z-10 w-full max-w-[1100px] flex justify-between items-end gap-4 mb-1 flex-wrap">
            <div className="flex-1 min-w-0 text-[12px] font-bold tracking-[0.14em] uppercase text-[#5b6474]">
              Case study <span>{countDisplay}</span>
              <strong className="block text-[22px] tracking-[-.01em] normal-case text-[#0f1a2c] mt-1 transition">{currentFaceTitle}</strong>
            </div>
            <div className="flex gap-1 bg-white border border-[#e2e5ea] rounded-full p-1 overflow-x-auto max-w-full" style={{ scrollbarWidth: 'none' }}>
              {TABS.map((tab, i) => (
                <button key={i} onClick={() => goToFace(tab.go)}
                  className={`flex-none border-0 text-[13px] font-semibold px-3.5 py-2 rounded-full transition ${activeTab === i ? 'bg-[#0f1a2c] text-white' : 'bg-transparent text-[#5b6474] hover:text-[#0f1a2c]'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-[calc(100%+32px)] -mx-4 py-9 overflow-hidden"
            style={{ WebkitMaskImage: 'linear-gradient(180deg,transparent 0,#000 38px,#000 calc(100% - 38px),transparent 100%)', maskImage: 'linear-gradient(180deg,transparent 0,#000 38px,#000 calc(100% - 38px),transparent 100%)' }}>
            <div className="relative mx-auto max-w-[1100px] [perspective:1700px] [perspective-origin:50%_50%]" style={{ height: 'var(--fh, 540px)' }}>
              <div ref={drumRef} className="absolute inset-0 [transform-style:preserve-3d] will-change-transform">
                {DRUM_FACES.map((face, i) => (
                  <DrumFace key={face.id} face={face} live={activeFace === i || reduce} ref={(el) => (faceRefs.current[i] = el)} />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-[1100px] h-[3px] bg-[#e2e5ea] rounded-sm mt-1 overflow-hidden">
            <i ref={barRef} className="block h-full w-0 bg-gradient-to-r from-[#0bb4ef] to-[#0a8af0] rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   MAIN — Growth Plans + Drum below
   ============================================================ */
const CombinedSection = () => {
  const [targetFace, setTargetFace] = useState(null);

  return (
    <>
      <CoderBoxGrowthPlans />
      <ClientCaseStudyDrum targetFace={targetFace} />
    </>
  );
};

export default CombinedSection;