import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Globe,
  Lightbulb,
  Megaphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const services = [
  {
    number: "01",
    title: "AI & Digital Marketing",
    description:
      "Data-driven marketing strategies that help brands improve visibility, engagement, and measurable growth.",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites designed around your business goals and customer experience.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Data & Analytics",
    description:
      "Transform business data into meaningful insights that support smarter and faster decisions.",
    icon: Database,
  },
  {
    number: "04",
    title: "IT Consulting",
    description:
      "Technology guidance and digital solutions that help organizations modernize and scale efficiently.",
    icon: Globe,
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, audience, challenges and long-term goals.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "We create a clear strategy combining creativity, technology and data.",
  },
  {
    number: "03",
    title: "Build",
    text: "Our team turns the strategy into high-quality digital experiences and solutions.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We continuously analyze, improve and optimize your digital performance.",
  },
];

const values = [
  {
    icon: Target,
    title: "Results Driven",
    text: "We focus on meaningful outcomes rather than vanity metrics.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    text: "We continuously explore new technology, ideas and better ways to solve problems.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    text: "Every solution starts with understanding the people we are building it for.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    text: "We believe strong partnerships are built through honest communication.",
  },
];

const team = [
  {
    name: "Ashwin Singh",
    role: "Founder / CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Preeti Rai",
    role: "Senior Consultant",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

function AboutUs() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.22),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.12),transparent_30%)]" />

          <div className="absolute top-20 right-[10%] w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-[5%] w-80 h-80 bg-blue-600/10 rounded-full blur-[140px]" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-sm text-gray-300 mb-8"
            >
              <Sparkles size={15} className="text-purple-400" />
              About CoderBox
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tight leading-[0.95]"
            >
              We build digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
                experiences that matter.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-gray-400"
            >
              CoderBox combines technology, creativity, data and AI to help
              ambitious businesses build stronger digital experiences and
              achieve sustainable growth.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-7 py-4 font-medium hover:bg-gray-200 transition"
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform"
                />
              </a>

              <a
                href="#who-we-are"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-white hover:bg-white/5 transition"
              >
                Discover CoderBox
              </a>
            </motion.div>
          </motion.div>

          {/* Hero bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
          >
            {[
              ["10+", "Years Experience"],
              ["8K+", "Businesses Served"],
              ["300+", "Projects"],
              ["4.8/5", "Client Satisfaction"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="border-l border-white/10 pl-5 py-2"
              >
                <div className="text-3xl md:text-4xl font-semibold">
                  {number}
                </div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section
        id="who-we-are"
        className="relative py-28 md:py-36 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-5">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                Technology with a
                <span className="text-gray-500"> human perspective.</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="space-y-6"
            >
              <p className="text-xl leading-9 text-gray-300">
                CoderBox is a digital innovation company helping businesses
                create meaningful digital experiences, strengthen their online
                presence and use technology to solve real business problems.
              </p>

              <p className="text-gray-500 leading-8">
                From AI-powered digital marketing and web development to data,
                analytics and IT consulting, we bring multiple capabilities
                together under one roof. Our approach combines strategy,
                creativity, technology and continuous optimization.
              </p>

              <div className="pt-5 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  "Strategy",
                  "Technology",
                  "Creativity",
                  "Data",
                  "AI",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <Check size={16} className="text-purple-400" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="py-28 bg-[#080808] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mb-16"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-5">
              What We Do
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold">
              One partner.
              <span className="block text-gray-500">
                Multiple digital capabilities.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="group relative bg-[#080808] p-8 md:p-12 min-h-[310px] hover:bg-[#101010] transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-600">
                      {service.number}
                    </span>

                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-purple-500/10 transition">
                      <Icon
                        size={21}
                        className="text-gray-400 group-hover:text-purple-400 transition"
                      />
                    </div>
                  </div>

                  <div className="mt-16">
                    <h3 className="text-2xl md:text-3xl font-medium">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-gray-500 leading-7 max-w-lg">
                      {service.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="absolute bottom-10 right-10 text-gray-600 group-hover:text-white group-hover:rotate-45 transition"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-5">
                Our Approach
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                Simple process.
                <span className="block text-gray-500">
                  Powerful results.
                </span>
              </h2>
            </motion.div>

            <div className="lg:col-span-2">
              <div className="divide-y divide-white/10 border-t border-white/10">
                {process.map((item) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] gap-5 py-9 group"
                  >
                    <span className="text-sm text-gray-600">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-2xl font-medium group-hover:text-purple-400 transition">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-gray-500 leading-7">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION VISION
      ====================================================== */}
      <section className="py-28 bg-[#080808] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-5">
              What Drives Us
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold">
              Built around purpose.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mt-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
            >
              <Rocket className="text-purple-400" size={30} />

              <p className="text-sm text-gray-500 uppercase tracking-widest mt-10">
                Mission
              </p>

              <h3 className="text-2xl font-medium mt-4">
                Empower businesses through innovative digital solutions.
              </h3>

              <p className="text-gray-500 leading-7 mt-5">
                We aim to make technology more useful, accessible and
                impactful for businesses of every size.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-8 md:p-10"
            >
              <Workflow className="text-purple-400" size={30} />

              <p className="text-sm text-gray-500 uppercase tracking-widest mt-10">
                Vision
              </p>

              <h3 className="text-2xl font-medium mt-4">
                Become a global leader in digital innovation.
              </h3>

              <p className="text-gray-500 leading-7 mt-5">
                We envision a future where technology and creativity come
                together to create better digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
            >
              <ShieldCheck className="text-purple-400" size={30} />

              <p className="text-sm text-gray-500 uppercase tracking-widest mt-10">
                Values
              </p>

              <h3 className="text-2xl font-medium mt-4">
                Trust, creativity, ownership and continuous improvement.
              </h3>

              <p className="text-gray-500 leading-7 mt-5">
                Our values guide the way we collaborate with clients, partners
                and each other.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-5">
                Our Values
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                How we
                <span className="text-gray-500"> work together.</span>
              </h2>

              <p className="text-gray-500 leading-8 mt-7 max-w-lg">
                Great work is not only about what we build. It is also about
                how we think, communicate and collaborate throughout the
                journey.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="border border-white/10 rounded-2xl p-7 hover:bg-white/[0.03] transition"
                  >
                    <Icon size={25} className="text-purple-400" />

                    <h3 className="mt-8 text-xl font-medium">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-gray-500 leading-6 text-sm">
                      {value.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TEAM
      ====================================================== */}
      <section className="py-28 bg-[#080808] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-5">
                Our Team
              </p>

              <h2 className="text-4xl md:text-6xl font-semibold">
                People behind
                <span className="text-gray-500"> the work.</span>
              </h2>
            </motion.div>

            <p className="max-w-md text-gray-500 leading-7">
              A multidisciplinary team bringing strategy, technology,
              creativity and business thinking together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {team.map((person) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-2xl font-medium">{person.name}</h3>
                    <p className="text-gray-400 mt-1">{person.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_50%)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-6">
              Let's Grow Together
            </p>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
              Have an idea?
              <span className="block text-gray-500">
                Let’s build it together.
              </span>
            </h2>

            <p className="max-w-2xl mx-auto mt-7 text-gray-500 text-lg leading-8">
              Whether you are launching something new, transforming an
              existing business or looking for better digital performance,
              CoderBox is ready to help.
            </p>

            <div className="mt-10">
              <a
                href="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-medium hover:bg-gray-200 transition"
              >
                Let’s Talk
                <ArrowUpRight
                  size={19}
                  className="group-hover:rotate-45 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;