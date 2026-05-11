import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* ── Scroll-triggered reveal wrapper ── */
function Reveal({ children, variants = fadeUp, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Chapter nav config ── */
const chapters = [
  { id: "intro",          label: "Our Story" },
  { id: "beginning",      label: "The Beginning" },
  { id: "lastmiletech",   label: "Last Mile Tech" },
  { id: "collaborations", label: "Collaborations" },
  { id: "vision",         label: "Our Vision" },
  { id: "leadership",     label: "Leadership" },
];

/* ── Real timeline data ── */
const timeline = [
  { when: "Early 2025",  milestone: "Society Founded",           detail: "Freelance Force born at IU, Karachi" },
  { when: "Spring 2025", milestone: "Last Mile Tech — Batch 1",  detail: "Full Stack · Testing & Automation · AI" },
  { when: "Summer 2025", milestone: "Last Mile Tech — Batch 2",  detail: "DevOps added · expanded enrollment" },
  { when: "2025",        milestone: "IU Spectrum — Gaming War",  detail: "Tekken 8 · PS5 · w/ GDR Society · city-wide" },
  { when: "Summer 2026", milestone: "Last Mile Tech — Batch 3",  detail: "Coming soon · applications opening" },
  { when: "June 2026",   milestone: "Skillverse",                detail: "City-wide event w/ AICIS · ACM · GDR" },
];

/* ── Last Mile Tech courses ── */
const courses = [
  { name: "Full Stack",           desc: "End-to-end web development from frontend to backend APIs and databases.", icon: "⌨" },
  { name: "Testing & Automation", desc: "QA fundamentals, automated test pipelines, and CI integration.",          icon: "◎" },
  { name: "DevOps",               desc: "Containers, cloud deployments, pipelines, and infrastructure as code.",   icon: "⬡" },
  { name: "AI",                   desc: "Practical AI integrations, model usage, and building intelligent apps.",  icon: "◈" },
];

/* ── Skillverse activities ── */
const skillverseActivities = [
  { name: "CS2",           type: "Gaming",      desc: "Competitive Counter-Strike 2 tournament open to all." },
  { name: "PUBG",          type: "Gaming",      desc: "Squad battles — team up and compete across Karachi." },
  { name: "Dev Hackathon", type: "Development", desc: "Build real solutions under pressure. 24 hours. Ship it." },
  { name: "Robotics",      type: "Engineering", desc: "Hands-on robotics challenges for builders and tinkerers." },
];

/* ── Skillverse partners ── */
const partners = [
  { name: "AICIS",           full: "AI & Computer Intelligence Society" },
  { name: "ACM",             full: "Association for Computing Machinery" },
  { name: "GDR Society",     full: "Game Design & Robotics Society" },
  { name: "Freelance Force", full: "Lead Organiser" },
];

/* ── Leadership 3-card grid data ── */
const leadership = [
  {
    role: "Presidents",
    desc: "Leading strategy, operations, and vision execution of Freelance Force.",
    members: ["Syed Danish Khurram (President)","Hassan Mansoor (Vice President)", "Elhaam Ali (Ex-President)", "Moiz Ali Khan (Ex-Vice President)"],
    icon: "◈",
  },
  {
    role: "Patron",
    desc: "Guiding with mentorship, academic experience, and institutional support.",
    members: ["Asif Ali Shahmiri"],
    icon: "✦",
  },
  {
    role: "Core Team",
    desc: "Developers, designers, and managers delivering real-world project work.",
    members: ["Syed Momin Ali Shah", "Muhammad Farasat", "Syed Saad Akber", "Ausaf Ahmed"],
    icon: "◱",
  },
];

/* ═══════════════════════════════════════════════════ */
const About = () => {
  const [activeChapter, setActiveChapter] = useState("intro");
  const navigate = useNavigate();

  useEffect(() => {
    const observers = chapters.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveChapter(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="font-['DM_Sans'] bg-black text-white overflow-x-hidden">

      {/* ══ FIXED NAV ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b p-2 border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
            <span className="text-base group-hover:-translate-x-1 transition-transform inline-block">←</span>
            <span className="uppercase text-[10px] tracking-[0.22em]">Home</span>
          </Link>

          {/* Chapter dots */}
          <div className="hidden md:flex items-center gap-2">
            {chapters.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                title={label}
                className="group relative flex items-center justify-center w-7 h-7"
              >
                <span className={`block rounded-full transition-all duration-300 ${
                  activeChapter === id
                    ? "w-3 h-3 bg-[#C8221A]"
                    : "w-1.5 h-1.5 bg-white/15 group-hover:bg-white/40"
                }`} />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest text-white/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none bg-black/80 px-2 py-1">
                  {label}
                </span>
              </button>
            ))}
          </div>

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <img
              src="/logo.png"
              alt="logo"
              onClick={() => navigate("/")}
              className="h-[55px] md:h-[60px] brightness-0 invert"
            />
          </motion.div>
        </div>
      </nav>


      {/* ════════════════════════════════════════════
          CH 1 — OUR STORY (HERO)
      ════════════════════════════════════════════ */}
      <section
  id="intro"
  className="relative min-h-screen flex flex-col justify-end pb-24 pt-36 px-8 md:px-20 overflow-hidden bg-black"
>

  {/* NOISE TEXTURE */}
  <div
    className="
      absolute inset-0
      opacity-[0.03]
      mix-blend-screen
      pointer-events-none
    "
    style={{
      backgroundImage:
        "url('https://grainy-gradients.vercel.app/noise.svg')",
    }}
  />

  {/* BACKGROUND TEXT */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
    <motion.span
      animate={{
        scale: [1, 1.03, 1],
        opacity: [0.02, 0.03, 0.02],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="font-['Bebas_Neue'] text-[32vw] text-white/[0.022] leading-none"
    >
      ABOUT
    </motion.span>
  </div>

  {/* RED SIDE LINE */}
  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8221A]" />

  {/* GLOW LINE */}
  <div
    className="
      absolute left-0 top-0 bottom-0
      w-[12px]
      bg-[#C8221A]/20
      blur-xl
    "
  />

  {/* CENTER GLOW */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div
      className="
        w-[700px] h-[700px]
        rounded-full
        bg-[#C8221A]/10
        blur-3xl
        animate-pulse
      "
    />
  </div>

  {/* FLOATING ORB */}
  <motion.div
    animate={{
      y: [0, -25, 0],
      x: [0, 10, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      top-[20%]
      right-[10%]
      w-40 h-40
      rounded-full
      bg-[#C8221A]/20
      blur-3xl
      pointer-events-none
    "
  />

  {/* FLOATING PARTICLES */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-1 h-1 bg-[#C8221A] rounded-full"
      style={{
        top: `${20 + i * 8}%`,
        left: `${10 + i * 10}%`,
      }}
    />
  ))}

  {/* CONTENT */}
  <div className="relative z-10 max-w-[1300px] mx-auto w-full">

    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger}
    >

      {/* SMALL TAGLINE */}
      <motion.p
        variants={fadeUp}
        className="
          text-white/30
          uppercase
          tracking-[0.35em]
          text-[10px]
          mb-8
        "
      >
        Built by students who chose execution over excuses.
      </motion.p>

      {/* MAIN HEADING */}
      <motion.h1
        variants={fadeUp}
        className="
          font-['Bebas_Neue']
          text-8xl md:text-9xl
          leading-[0.85]
          mb-12
        "
      >
        OUR<br />
        <span className="text-[#C8221A]">
          STORY.
        </span>
      </motion.h1>

      {/* CONTENT GRID */}
      <motion.div
        variants={fadeUp}
        className="
          grid md:grid-cols-[1fr_1px_1fr]
          gap-10
          items-start
        "
      >

        {/* STORY TEXT */}
        <div>
          <p className="text-white/50 text-lg leading-relaxed">
            Freelance Force was launched in early 2025 inside a university
            classroom in Karachi by a group of developers, designers, and
            builders who chose to focus on real-world execution instead of
            just academic theory.

            <br /><br />

            Founded with a vision to empower students through freelancing
            and digital skills, the society independently organized its
            initial bootcamp at Iqra University, emphasizing practical
            learning and hands-on experience.

            <br /><br />

            In under a year, we expanded into two full bootcamp cycles,
            hosted city-wide events, and built a reputation for shipping
            real outcomes rather than just presentations.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-[1px] bg-white/[0.07] self-stretch" />

        {/* STATS */}
        <div className="grid grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05]">

          {[
            { val: "2", lbl: "Bootcamps Completed" },
            { val: "4", lbl: "Courses Offered" },
            { val: "∞", lbl: "Student Impact" },
            { val: "2025", lbl: "Year Founded" },
          ].map(({ val, lbl }) => (

            <motion.div
              key={lbl}
              whileHover={{ y: -4 }}
              className="
                bg-black
                px-6 py-7
                text-center
                hover:bg-[#111]
                transition-all duration-500
                group
              "
            >

              <p
                className="
                  font-['Bebas_Neue']
                  text-5xl
                  text-white
                  group-hover:text-[#C8221A]
                  transition-colors duration-500
                "
              >
                {val}
              </p>

              <p
                className="
                  text-white/25
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  mt-1
                "
              >
                {lbl}
              </p>

            </motion.div>

          ))}
        </div>
      </motion.div>
    </motion.div>

    {/* SCROLL INDICATOR */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="mt-16 flex items-center gap-4"
    >

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="w-[1px] h-12 bg-white/15"
      />

      <span
        className="
          text-white/20
          text-[9px]
          uppercase
          tracking-[0.3em]
        "
      >
        Scroll to explore
      </span>

    </motion.div>
  </div>
</section>

      {/* ════════════════════════════════════════════
          CH 2 — THE BEGINNING
      ════════════════════════════════════════════ */}
      <section id="beginning" className="min-h-screen flex items-stretch relative overflow-hidden">
  <div className="grid md:grid-cols-2 w-full">

    {/* Left red panel */}
    <div className="bg-[#C8221A] flex flex-col justify-between p-12 md:p-20 min-h-[55vh] relative overflow-hidden">

      {/* animated background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[420px] h-[420px]
        bg-white/10 blur-[120px] rounded-full"
      />

      <Reveal variants={fadeLeft}>
        <p className="uppercase text-white/40 tracking-[0.3em] text-[10px]">
          Chapter 01
        </p>
      </Reveal>

      <div className="relative z-10">
        <Reveal variants={fadeLeft} delay={0.1}>
          <h2 className="font-['Bebas_Neue'] text-[13vw] md:text-[8vw] leading-[0.85] text-white">
            THE<br />BEGIN-<br />NING.
          </h2>
        </Reveal>
      </div>

      {/* huge number */}
      <div className="font-['Bebas_Neue'] text-[25vw] md:text-[16vw] leading-none text-red-900/25 absolute -bottom-6 -right-4 pointer-events-none select-none">
        01
      </div>

      <Reveal variants={fadeLeft} delay={0.2}>
        <div className="w-12 h-[1px] bg-white/30" />
      </Reveal>
    </div>

    {/* Right content */}
    <div className="bg-[#0c0c0c] flex flex-col justify-center p-12 md:p-20 relative">

      {/* background glow */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-[300px] h-[300px]
        bg-[#C8221A]/20 blur-[120px] rounded-full"
      />

      <Reveal variants={fadeRight}>
        <p className="text-white/25 text-[10px] uppercase tracking-[0.3em] mb-8">
          Early 2025, Karachi
        </p>
      </Reveal>

      <Reveal variants={fadeRight} delay={0.1}>
        <p className="text-white/70 text-xl leading-relaxed mb-8">
          Freelance Force was founded in early 2025 by students at IU who were done
          graduating with theory and no portfolio. The founding idea was simple:
          operate like a real studio, inside a university.
        </p>
      </Reveal>

      <Reveal variants={fadeRight} delay={0.15}>
        <p className="text-white/35 leading-relaxed mb-14">
          What started as a handful of people taking on small projects quickly grew
          into a structured collective — with roles, deadlines, and deliverables that
          matched anything in the industry.
        </p>
      </Reveal>

      {/* Timeline */}
      <Reveal variants={fadeRight} delay={0.2}>
        <div className="relative pl-10">

          {/* vertical animated line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-[5px] top-0 w-[1px]
            bg-gradient-to-b from-[#C8221A] via-white/20 to-transparent"
          />

          {/* moving dot */}
          <motion.div
            animate={{
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[0px] top-0 w-3 h-3 rounded-full
            bg-[#C8221A] shadow-[0_0_20px_rgba(200,34,26,0.9)]"
          />

          <div className="space-y-2">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="
                relative group
                border border-white/[0.05]
                bg-white/[0.02]
                hover:bg-white/[0.04]
                hover:border-[#C8221A]/30
                transition-all duration-300
                px-6 py-5
                "
              >

                {/* hover glow */}
                <div
                  className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-[#C8221A]/5 blur-2xl transition-opacity duration-500
                  pointer-events-none
                  "
                />

                {/* dot */}
                <span
                  className="
                  absolute -left-[34px] top-7
                  w-3 h-3 rounded-full
                  bg-[#C8221A]
                  border-4 border-[#0c0c0c]
                  group-hover:scale-125
                  shadow-[0_0_18px_rgba(200,34,26,0.7)]
                  transition-all duration-300
                  "
                />

                <div className="relative z-10">
                  <p className="text-white/25 text-[9px] uppercase tracking-[0.2em] mb-1">
                    {item.when}
                  </p>

                  <p className="text-white text-sm font-medium">
                    {item.milestone}
                  </p>

                  <p className="text-white/35 text-xs mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {(item.when === "Summer 2026" ||
                  item.when === "June 2026") && (
                  <span
                    className="
                    absolute top-5 right-5
                    text-[9px] uppercase tracking-widest
                    text-[#C8221A]
                    border border-[#C8221A]/30
                    px-2 py-1
                    "
                  >
                    Upcoming
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>


      {/* ════════════════════════════════════════════
          CH 3 — LAST MILE TECH
      ════════════════════════════════════════════ */}
      <section id="lastmiletech" className="min-h-screen bg-white text-black relative overflow-hidden py-24 px-8 md:px-20">
        <div className="absolute top-0 right-0 font-['Bebas_Neue'] text-[14vw] leading-none text-black/[0.03] pointer-events-none select-none whitespace-nowrap pr-4 pt-4">
          BOOTCAMP
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10">
          <Reveal>
            <p className="uppercase text-[#C8221A] tracking-[0.3em] text-[10px] mb-3">Chapter 02</p>
            <div className="flex flex-wrap items-end gap-5 mb-4">
              <h2 className="font-['Bebas_Neue'] text-[11vw] md:text-[7.5vw] leading-[0.88] text-black">
                LAST MILE<br />TECH.
              </h2>
              <div className="mb-2 flex gap-2 flex-wrap">
                <span className="bg-[#C8221A] text-white text-[9px] uppercase tracking-widest px-3 py-1.5">
                  Batch 1 ✓ Done
                </span>
                <span className="bg-[#C8221A] text-white text-[9px] uppercase tracking-widest px-3 py-1.5">
                  Batch 2 ✓ Done
                </span>
                <span className="border-2 border-[#C8221A] text-[#C8221A] text-[9px] uppercase tracking-widest px-3 py-1.5 font-semibold">
                  Batch 3 · Summer 2026 ↗
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mb-16">
              Our flagship bootcamp — two full cycles delivered, third arriving this summer.
              Last Mile Tech isn't a lecture series. It's industry-grade training run by
              students who've actually shipped, for students ready to start.
            </p>
          </Reveal>

          {/* Course cards */}
          <div className="grid md:grid-cols-2 gap-px bg-zinc-200 mb-16">
            {courses.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-10 hover:bg-zinc-50 transition-colors group relative overflow-hidden"
              >
                <div className="text-[60px] text-zinc-100 absolute top-5 right-7 leading-none pointer-events-none group-hover:text-zinc-200 transition-colors select-none">
                  {c.icon}
                </div>
                <p className="text-[#C8221A] font-['Bebas_Neue'] text-xl mb-2">0{i + 1}</p>
                <h3 className="font-['Bebas_Neue'] text-4xl text-black mb-3 leading-none">{c.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Batch 3 strip */}
          <Reveal delay={0.2}>
            <div className="border border-zinc-200 bg-zinc-50 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#C8221A] mb-2">Coming · Summer 2026</p>
                <p className="font-['Bebas_Neue'] text-3xl text-black">Last Mile Tech — Batch 3</p>
                <p className="text-zinc-400 text-sm mt-1">
                  All four tracks · Full Stack · Testing & Automation · DevOps · AI · Applications opening soon
                </p>
              </div>
              <button className="bg-[#C8221A] text-white px-8 py-3.5 text-[10px] uppercase tracking-widest font-semibold hover:bg-red-800 transition-colors flex-shrink-0">
                Get Notified →
              </button>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          CH 4 — COLLABORATIONS + SKILLVERSE
      ════════════════════════════════════════════ */}
      <section id="collaborations" className="min-h-screen bg-[#0c0c0c] relative overflow-hidden py-24 px-8 md:px-20">
        <div className="absolute top-0 right-0 font-['Bebas_Neue'] text-[14vw] leading-none text-white/[0.025] pointer-events-none select-none pr-4 pt-4 whitespace-nowrap">
          COLLABS
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10">
          <Reveal>
            <p className="uppercase text-[#C8221A] tracking-[0.3em] text-[10px] mb-3">Chapter 03</p>
            <h2 className="font-['Bebas_Neue'] text-[11vw] md:text-[7.5vw] leading-[0.88] text-white mb-6">
              COLLABO-<br />RATIONS.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-white/45 text-lg leading-relaxed max-w-2xl mb-16">
              Alongside running our own bootcamps, Freelance Force steps beyond the classroom
              to collaborate with societies across IU and Karachi — bringing together gaming,
              tech, and creative communities under one roof.
            </p>
          </Reveal>

          {/* ── IU Spectrum ── */}
          <Reveal delay={0.12}>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mb-5">Featured Collaboration</p>
          </Reveal>

          <div className="grid md:grid-cols-[1fr_1fr] gap-px bg-white/[0.04] mb-16">

            {/* Left — IU Spectrum story */}
            <Reveal variants={fadeLeft} delay={0.15}>
              <div className="bg-[#0c0c0c] p-10 md:p-14 flex flex-col justify-between min-h-[420px] group hover:bg-[#101010] transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-[#C8221A] flex items-center justify-center flex-shrink-0">
                      <span className="font-['Bebas_Neue'] text-xs text-white leading-none">IU</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-none">IU Spectrum</p>
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mt-0.5">All-Society Event · IU Karachi</p>
                    </div>
                  </div>

                  <h3 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white leading-[0.88] mb-6">
                    GAMING<br />WAR.
                  </h3>

                  <p className="text-white/45 text-sm leading-relaxed mb-6">
                    IU Spectrum is IU's flagship all-society event. Freelance Force
                    partnered with <span className="text-white/70">GDR Society</span> to
                    organise the Gaming War — a high-stakes Tekken 8 tournament on PS5
                    that drew participants from across Karachi into the university.
                  </p>

                  <p className="text-white/25 text-sm leading-relaxed">
                    The event put Freelance Force on the map as an organiser — not just
                    a service provider — and cemented our relationship with the broader
                    Karachi student community.
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-10">
                  <span className="text-[9px] uppercase tracking-widest text-white/25 border border-white/[0.08] px-3 py-1.5">
                    w/ GDR Society
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-white/25 border border-white/[0.08] px-3 py-1.5">
                    IU Karachi
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right — Tekken 8 stats */}
            <Reveal variants={fadeRight} delay={0.2}>
              <div className="bg-[#0c0c0c] flex flex-col min-h-[420px]">
                <div className="bg-[#C8221A] p-10 flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="font-['Bebas_Neue'] text-[14vw] md:text-[9vw] leading-none text-red-900/25 absolute -bottom-4 -right-4 pointer-events-none select-none">
                    T8
                  </div>
                  <div className="relative z-10">
                    <p className="text-white/50 text-[9px] uppercase tracking-[0.28em] mb-3">Game</p>
                    <p className="font-['Bebas_Neue'] text-5xl text-white leading-none mb-1">TEKKEN 8</p>
                    <p className="text-white/60 text-sm">on PlayStation 5</p>
                  </div>
                  <div className="relative z-10 grid grid-cols-2 gap-px bg-white/10 mt-8">
                    <div className="bg-[#C8221A] px-5 py-4 text-center">
                      <p className="font-['Bebas_Neue'] text-3xl text-white leading-none">PS5</p>
                      <p className="text-white/40 text-[9px] uppercase tracking-widest mt-1">Platform</p>
                    </div>
                    <div className="bg-[#C8221A] px-5 py-4 text-center">
                      <p className="font-['Bebas_Neue'] text-3xl text-white leading-none">KHI</p>
                      <p className="text-white/40 text-[9px] uppercase tracking-widest mt-1">City-wide</p>
                    </div>
                  </div>
                </div>
                <div className="border border-white/[0.06] border-t-0 p-8 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-1">Organised with</p>
                    <p className="text-white font-semibold text-sm">GDR Society</p>
                    <p className="text-white/30 text-xs mt-0.5">Game Design & Robotics</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 mb-1">Participants from</p>
                    <p className="text-white font-semibold text-sm">Across Karachi</p>
                    <p className="text-white/30 text-xs mt-0.5">City-wide open entry</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Divider ── */}
          <Reveal delay={0.25}>
            <div className="flex items-center gap-5 my-16">
              <div className="flex-1 h-[1px] bg-white/[0.06]" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">Coming Next · June 2026</span>
              <div className="flex-1 h-[1px] bg-white/[0.06]" />
            </div>
          </Reveal>

          {/* ── SKILLVERSE (inside Collaborations) ── */}
          <div id="skillverse">
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-end gap-4 mb-6">
                <h3 className="font-['Bebas_Neue'] text-[9vw] md:text-[6vw] leading-[0.88] text-white">
                  SKILLVERSE.
                </h3>
                <span className="mb-2 bg-[#C8221A] text-white text-[9px] uppercase tracking-widest px-3 py-1.5 font-semibold">
                  June 2026 · Upcoming
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-white/45 text-lg leading-relaxed max-w-2xl mb-14">
                Our biggest collaboration yet — Freelance Force co-organises{" "}
                <span className="text-white font-semibold">Skillverse</span> with AICIS, ACM,
                and GDR Society. A city-wide event open to all students across Karachi,
                bringing competitive gaming, development, and robotics under one roof.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-[1.15fr_1fr] gap-px bg-white/[0.04] mb-6">

              {/* Left — partners + date */}
              <Reveal variants={fadeLeft} delay={0.15}>
                <div className="bg-[#0c0c0c] p-10 md:p-12">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mb-6">Organising Partners</p>
                  <div className="grid grid-cols-2 gap-3 mb-10">
                    {partners.map((p, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="border border-white/[0.07] px-4 py-4 hover:border-[#C8221A]/40 transition-colors"
                      >
                        <p className="text-white font-semibold text-sm">{p.name}</p>
                        <p className="text-white/25 text-[10px] mt-0.5 leading-snug">{p.full}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-[#C8221A] p-6 flex items-center justify-between">
                    <div>
                      <p className="text-white/50 text-[9px] uppercase tracking-widest mb-1">When</p>
                      <p className="font-['Bebas_Neue'] text-3xl text-white leading-none">June 2026 · Karachi</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/50 text-[9px] uppercase tracking-widest mb-1">Open to</p>
                      <p className="text-white font-medium text-sm">All Students · City-wide</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right — event tracks */}
              <Reveal variants={fadeRight} delay={0.2}>
                <div className="bg-[#0c0c0c] p-10 md:p-12">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mb-6">Event Tracks</p>
                  <div className="space-y-3">
                    {skillverseActivities.map((a, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="flex gap-5 border border-white/[0.06] p-5 hover:border-[#C8221A]/30 hover:bg-white/[0.02] transition-all group"
                      >
                        <div className="w-1 self-stretch bg-white/[0.08] group-hover:bg-[#C8221A] transition-colors flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <p className="text-white font-semibold text-sm">{a.name}</p>
                            <span className="text-[8px] uppercase tracking-widest text-[#C8221A] border border-[#C8221A]/30 px-2 py-0.5">
                              {a.type}
                            </span>
                          </div>
                          <p className="text-white/30 text-xs">{a.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </section>


      {/* ════════════════════════════════════════════
          CH 4 — OUR VISION
      ════════════════════════════════════════════ */}
      <section id="vision" className="min-h-screen bg-[#C8221A] relative overflow-hidden flex flex-col justify-center py-24 px-8 md:px-20">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="font-['Bebas_Neue'] text-[26vw] leading-none text-red-900/20 absolute -bottom-8 right-0">
            VISION
          </div>
        </div>

        <div className="max-w-[1300px] mx-auto w-full relative z-10">
          <Reveal>
            <p className="uppercase text-white/35 tracking-[0.3em] text-[10px] mb-4">Chapter 04</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-20 items-end">
            <div>
              <Reveal>
                <h2 className="font-['Bebas_Neue'] text-[14vw] md:text-[9vw] leading-[0.85] text-white">
                  OUR<br />VISION.
                </h2>
              </Reveal>
            </div>

            <div className="space-y-12">
              <Reveal variants={fadeRight} delay={0.1}>
                <p className="text-white/80 text-2xl leading-relaxed font-light italic">
                  "Build a student-powered creative studio that bridges the gap between
                  education and industry — and turn students into professionals
                  before graduation."
                </p>
              </Reveal>

              <Reveal variants={fadeRight} delay={0.2}>
                <div className="space-y-7">
                  {[
                    "Equip every member with industry-ready skills through real projects and bootcamps",
                    "Grow Freelance Force into the most recognised student studio in Karachi",
                    "Build a legacy that outlasts any single semester or founding member",
                  ].map((v, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <span className="text-white/25 font-['Bebas_Neue'] text-3xl leading-tight flex-shrink-0">
                        0{i + 1}
                      </span>
                      <p className="text-white/65 leading-relaxed pt-1">{v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════
          CH 5 — LEADERSHIP
      ════════════════════════════════════════════ */}
      <section id="leadership" className="bg-[#0c0c0c] py-24 px-8 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[3px] h-full bg-[#C8221A]" />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <Reveal>
            <p className="uppercase text-[#C8221A] tracking-[0.3em] text-[10px] mb-3">Chapter 05</p>
            <h2 className="font-['Bebas_Neue'] text-[11vw] md:text-[7.5vw] leading-[0.88] text-white mb-20">
              LEADER-<br />SHIP.
            </h2>
          </Reveal>

          {/* ── PATRON ── */}
          <Reveal delay={0.05}>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 mb-6">Faculty Patron</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-white/[0.04] mb-px">

          {/* Right — photo */}
            <Reveal variants={fadeLeft} delay={0.15}>
              <div className="bg-zinc-900 relative overflow-hidden min-h-[700px] flex items-end">
                <img
                  src="/patron-photo.jpg"
                  alt="Asif Ali"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-60 grayscale"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mx-auto mb-3">
                      <span className="font-['Bebas_Neue'] text-2xl text-white/15">AA</span>
                    </div>
                    <p className="text-white/10 text-[9px] uppercase tracking-widest">Photo coming soon</p>
                  </div>
                </div>
                <div className="relative z-10 p-8 w-full">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {["BizKidz Academy", "Touch Star Institute", "Iqra University"].map((v) => (
                      <span
                        key={v}
                        className="text-[9px] uppercase tracking-widest text-white/50 bg-black/40 backdrop-blur-sm border border-white/[0.08] px-3 py-1.5"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                  <p className="font-['Bebas_Neue'] text-4xl text-white leading-none">Asif Ali</p>
                  <p className="text-white/35 text-[10px] uppercase tracking-widest mt-1">
                    Patron · Freelance Force
                  </p>
                </div>
              </div>
            </Reveal>


            {/* Left — intro */}
            <Reveal variants={fadeRight} delay={0.1}>
              <div className="bg-[#0c0c0c] p-10 md:p-14 flex flex-col justify-between min-h-[700px]">
                <div>
                  <p className="text-[#C8221A] text-[9px] uppercase tracking-[0.3em] mb-5">
                    Patron · Faculty Mentor
                  </p>
                  <h3 className="font-['Bebas_Neue'] uppercase text-5xl md:text-6xl text-white leading-[0.88] mb-4">
                    Asif Ali.
                  </h3>
                  <p className="text-white/35 text-xs uppercase tracking-widest mb-8">
                    Software Engineer · Data Scientist · Educator · Entrepreneur
                  </p>

                  <p className="text-white/55 text-sm leading-relaxed mb-4">
                    A passionate technology leader, educator, and entrepreneur with extensive
                    experience in software engineering, artificial intelligence, web development,
                    and data science.
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">
                    Currently serving at <span className="text-white/65">Iqra University</span> as
                    a Lecturer, he teaches programming, guides research projects, and mentors
                    future software engineers in Java, Python, and C#.
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed mb-8">
                    Founder of <span className="text-white/65">BizKidz Academy</span> and{" "}
                    <span className="text-white/65">Touch Star Institute</span> — empowering students
                    and young entrepreneurs with modern technical and entrepreneurial skills.
                  </p>

                  <div className="mb-8">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/20 mb-3">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Software Engineering",
                        "AI & Data Science",
                        "Web Development",
                        "Entrepreneurship",
                        "Research & Mentorship",
                        "Technology Management",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] uppercase tracking-widest text-white/40 border border-white/[0.08] px-3 py-1.5 hover:border-[#C8221A]/40 hover:text-white/60 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-2 border-[#C8221A] pl-5">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#C8221A]/70 mb-2">
                      Vision for Freelance Force
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed italic">
                      "To empower students with digital skills, innovation, and freelancing
                      opportunities that help them grow professionally and create impact in
                      the modern tech world."
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="w-12 h-[1px] bg-[#C8221A]/40 mb-5" />
                  <div className="flex gap-8 flex-wrap">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Role</p>
                      <p className="text-white/55 text-sm">Faculty Patron</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Institution</p>
                      <p className="text-white/55 text-sm">Iqra University</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Since</p>
                      <p className="text-white/55 text-sm">June 2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            
          </div>

          {/* ── PRESIDENT ── */}
          <Reveal delay={0.05}>
            <div className="flex items-center gap-5 mt-px mb-px">
              <div className="flex-1 h-[1px] bg-white/[0.04]" />
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/15 px-4">President</p>
              <div className="flex-1 h-[1px] bg-white/[0.04]" />
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.75 }}
            className="grid md:grid-cols-2 gap-px bg-white/[0.04] mb-px"
          >
            {/* Left — intro */}
            <div className="bg-[#0c0c0c] p-10 md:p-14 flex flex-col justify-between min-h-[700px]">
              <div>
                <p className="text-[#C8221A] text-[9px] uppercase tracking-[0.3em] mb-5">
                  President · Freelance Force
                </p>
                <h3 className="font-['Bebas_Neue'] text-5xl md:text-6xl text-white leading-[0.88] mb-4">
                  Syed Danish<br />Khurram.
                </h3>
                <p className="text-white/35 text-xs uppercase tracking-widest mb-8">
                  AI Enthusiast · Software Engineer · Entrepreneur · Student Leader
                </p>

                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  A passionate student leader, innovator, and aspiring software engineer
                  dedicated to empowering youth through freelancing, technology, and digital
                  skills. As President of Freelance Force at Iqra University, he leads
                  impactful initiatives helping students explore opportunities in freelancing,
                  entrepreneurship, and professional development.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  He is the <span className="text-white/65">Founder & CEO of CAPRA Software House</span> — an
                  AI-driven technology company focused on transforming industries through intelligent
                  automation solutions, software innovation, and modern business technologies.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  Currently pursuing <span className="text-white/65">Software Engineering at Iqra University</span>,
                  combining technical expertise in AI, Data Science, and Software Development
                  with a passion for leadership and innovation.
                </p>

                <div className="mb-8">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/20 mb-3">Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI & Automation",
                      "Software Development",
                      "Leadership & Teams",
                      "Event Management",
                      "Entrepreneurship",
                      "Data Science",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-widest text-white/40 border border-white/[0.08] px-3 py-1.5 hover:border-[#C8221A]/40 hover:text-white/60 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-2 border-[#C8221A] pl-5">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#C8221A]/70 mb-2">
                    Vision for Freelance Force
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed italic">
                    "To create a platform where students can discover their potential, build
                    digital careers, and become financially independent through skills,
                    innovation, and freelancing."
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <div className="w-12 h-[1px] bg-[#C8221A]/40 mb-5" />
                <div className="flex gap-8 flex-wrap">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Title</p>
                    <p className="text-white/55 text-sm">President</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Venture</p>
                    <p className="text-white/55 text-sm">CAPRA Software House</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1">Institution</p>
                    <p className="text-white/55 text-sm">Iqra University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — photo */}
            <div className="bg-zinc-900 relative overflow-hidden min-h-[700px] flex items-end">
              <img
                src="/president-photo.jpg"
                alt="Syed Danish Khurram"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-60 grayscale"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mx-auto mb-3">
                    <span className="font-['Bebas_Neue'] text-2xl text-white/15">SDK</span>
                  </div>
                  <p className="text-white/10 text-[9px] uppercase tracking-widest">Photo coming soon</p>
                </div>
              </div>
              <div className="relative z-10 p-8 w-full">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {["CAPRA Software House", "Iqra University"].map((v) => (
                    <span
                      key={v}
                      className="text-[9px] uppercase tracking-widest text-white/50 bg-black/40 backdrop-blur-sm border border-white/[0.08] px-3 py-1.5"
                    >
                      {v}
                    </span>
                  ))}
                </div>
                <p className="font-['Bebas_Neue'] text-4xl text-white leading-none">Syed Danish Khurram</p>
                <p className="text-white/35 text-[10px] uppercase tracking-widest mt-1">
                  President · Freelance Force
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── 3-card grid ── */}
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/[0.04] mb-6">
            {leadership.map((team, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="bg-[#0c0c0c] p-10 flex flex-col justify-between min-h-[400px] group hover:bg-[#101010] transition-colors"
              >
                <div>
                  <div className="text-4xl text-white/[0.07] mb-8 group-hover:text-[#C8221A]/20 transition-colors">
                    {team.icon}
                  </div>
                  <p className="text-[#C8221A] uppercase tracking-[0.25em] text-[10px] mb-4">{team.role}</p>
                  <p className="text-white/35 text-sm leading-relaxed">{team.desc}</p>
                </div>
                <div>
                  <div className="w-8 h-[1px] bg-white/[0.08] mb-6 group-hover:w-16 group-hover:bg-[#C8221A]/40 transition-all duration-500" />
                  <div className="space-y-2">
                    {team.members.map((m) => (
                      <p key={m} className="text-white font-medium text-sm">{m}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── CTA ── */}
          <Reveal delay={0.3}>
            <div className="bg-[#C8221A] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-['Bebas_Neue'] text-4xl md:text-5xl text-white leading-none mb-2">
                  READY TO JOIN THE MOVEMENT?
                </p>
                <p className="text-white/55 text-sm">
                  Applications open every semester · No experience required · Just drive
                </p>
              </div>
              <a
  href="https://chat.whatsapp.com/Ly36sMDsE5934DLkQkUhDT"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative overflow-hidden inline-flex
  items-center justify-center
  px-10 py-4
  uppercase tracking-widest
  text-xs font-bold
  border border-white
  flex-shrink-0"
>

  {/* default background */}
  <span className="absolute inset-0 bg-white"></span>

  {/* animated hover layer */}
  <span className="absolute inset-0 bg-[#C8221A]
  scale-x-0 group-hover:scale-x-100
  origin-left transition-transform duration-300"></span>

  {/* text */}
  <span className="relative z-10 text-[#C8221A]
  group-hover:text-white transition-colors duration-300">
    Join Now →
  </span>

</a>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ── FOOTER ── */}
      <footer className="bg-black border-t border-white/[0.05] py-8 px-8">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <img src="/logo.png" alt="logo" className="h-12 brightness-0 invert" />
          <p className="text-white/20 text-[10px] uppercase tracking-[0.25em]">
  Built by students. Driven by execution.
</p>
          <Link to="/" className="text-white/25 text-[10px] uppercase tracking-widest hover:text-white/50 transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>

    </div>
  );
};

export default About;