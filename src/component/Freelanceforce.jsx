import React, { useState } from "react";
import logo from "/logo.png";
import { FaLinkedin,FaInstagram,FaWhatsapp ,FaFacebook } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ArrowUpRight,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const FreelanceForce = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = [
    "Web Development",
    "Graphic Design",
    "Brand Identity",
    "Industry Mentored",
    "Real Projects",
    "UI/UX Design",
  ];

  const loopItems = [...items, ...items];

  return (
    <div className="font-['DM_Sans'] overflow-x-hidden bg-black text-white relative">

      {/* GLOBAL GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#C8221A]/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-red-500/10 blur-[140px] rounded-full"></div>
      </div>

      {/* ================= NAVBAR ================= */}
    {/* ================= HERO + NAV WRAPPER ================= */}
<section className="relative min-h-screen bg-[#C8221A] overflow-hidden flex flex-col">

  {/* GRID OVERLAY */}
  <div className="absolute inset-0 opacity-[0.06]">
    <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:80px_80px]" />
  </div>

  {/* NOISE TEXTURE */}
  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  {/* ================= NAVBAR ================= */}
  <nav className="relative z-50 border-b border-white/10">

    <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-5 flex items-center justify-between">

      {/* LOGO */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer"
      >
        <img
          src={logo}
          alt="logo"
          className="h-[55px] sm:h-[65px] brightness-0 invert"
        />
      </motion.div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8">

        <a
    href="#service"
    className="uppercase text-sm tracking-[0.18em]
    text-white/70 hover:text-white transition cursor-pointer"
  >
    Services
  </a>

  {/* ABOUT (ROUTE PAGE) */}
  <Link
    to="/about"
    className="uppercase text-sm tracking-[0.18em]
    text-white/70 hover:text-white transition"
  >
    About
  </Link>
  {/* JOIN (ROUTE PAGE) */}
  <a href="#join"
  className="uppercase text-sm tracking-[0.18em]
    text-white/70 hover:text-white transition"
  >
    Join
  </a>
    
  
    




        <button
          className="border border-white/20
          backdrop-blur-xl bg-white/10
          hover:bg-white hover:text-[#C8221A]
          transition-all duration-300
          px-6 py-3 rounded-full
          uppercase text-sm font-semibold tracking-wide"
        >
          Hire Us
        </button>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
        <Menu size={30} />
      </button>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={35} />
            </button>
            
            <a
              href="#service"
              onClick={() => setIsMobileMenuOpen(false)}
              className="uppercase text-2xl tracking-[0.18em] text-white hover:text-[#C8221A] transition cursor-pointer"
            >
              Services
            </a>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="uppercase text-2xl tracking-[0.18em] text-white hover:text-[#C8221A] transition"
            >
              About
            </Link>
            <a 
              href="#join"
              onClick={() => setIsMobileMenuOpen(false)}
              className="uppercase text-2xl tracking-[0.18em] text-white hover:text-[#C8221A] transition"
            >
              Join
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="border border-white/20 bg-white/10 hover:bg-white hover:text-[#C8221A] transition-all duration-300 px-10 py-4 rounded-full uppercase text-xl font-semibold tracking-wide mt-4"
            >
              Hire Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  </nav>

  {/* ================= HERO CONTENT ================= */}
  {/* ================= HERO CONTENT ================= */}
<div className="relative z-10 flex-1 flex items-center">

  <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 w-full">

    {/* TAG */}
    {/* <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-3
      border border-white/20
      px-4 py-2
      bg-white/10 backdrop-blur-xl"
    >
      <Sparkles size={14} />

      <span className="uppercase text-[10px] sm:text-xs tracking-[0.2em] text-white/80">
        Industry Level Student Studio
      </span>
    </motion.div> */}

    {/* TITLE */}
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="font-['Bebas_Neue']
      leading-[0.85]
      text-[70px] sm:text-[110px] md:text-[160px] lg:text-[220px]
      mt-6 text-white"
    >
      BUILD <br />
      <span className="text-white/30">WITHOUT</span> <br />
      LIMITS.
    </motion.h1>

    {/* DESCRIPTION */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="max-w-xl
      text-white/80
      text-base sm:text-lg md:text-xl
      leading-relaxed mt-6"
    >
      Freelance Force connects talented university students with startups,
      brands, and real-world projects through a studio-style environment.
    </motion.p>

    {/* BUTTONS (FIXED POSITION + PROFESSIONAL STYLE) */}
    <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-20">

      {/* PRIMARY BUTTON */}
      <button 
      onClick={()=> window.location = "mailto:iufreelancesociety@gmail.com"}
      className="group bg-white text-[#C8221A]
        px-6 py-3
        uppercase tracking-[0.2em]
        font-semibold text-sm sm:text-base
        flex items-center justify-center gap-2
        rounded-none border border-white">

        Start a Project

        <ArrowUpRight
          size={18}
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
        />
      </button>

      {/* SECONDARY BUTTON */}
      <button className="border border-white/30
        text-white
        px-6 py-3
        uppercase tracking-[0.2em]
        font-semibold text-sm sm:text-base
        rounded-none
        hover:bg-white/10 transition">

        Explore Portfolio

      </button>

    </div>

  </div>
</div>

  {/* HUGE BACKGROUND TEXT */}
  <div
    className="absolute right-[-5%] bottom-[-10%]
    font-['Bebas_Neue']
    text-[250px]
    md:text-[500px]
    lg:text-[700px]
    leading-none
    text-white/[0.04]
    select-none"
  >
    FF
  </div>

</section>

      {/* ================= TICKER ================= */}
      <section className="bg-[#0e0e0e] border-y border-white/10 py-5 overflow-hidden">

        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {loopItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 uppercase tracking-[0.18em] text-sm text-gray-400 flex-shrink-0"
            >
              <span className="w-[7px] h-[7px] rounded-full bg-[#C8221A]"></span>
              {item}
            </div>
          ))}
        </motion.div>

      </section>

      {/* ================= SERVICES ================= */}
     {/* ================= SERVICES ================= */}
<section id="service" className="bg-black py-24 px-5 sm:px-8">

  <div className="max-w-[1400px] mx-auto">

    {/* HEADING */}
    <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-14">

      <h2 className="font-['Bebas_Neue'] text-5xl sm:text-7xl text-white">
        SERVICES
      </h2>

      <p className="text-gray-500 max-w-md text-lg">
        We create high-quality digital experiences through design and development.
      </p>

    </div>

    {/* TWO CARDS */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* WEB DEVELOPMENT */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden bg-[#111]
        border border-white/10
        rounded-[32px]
        p-8 sm:p-12
        min-h-[420px]
        flex flex-col justify-between
        hover:border-[#C8221A]/40
        transition-all duration-300"
      >

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#C8221A]/20 blur-[100px]"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          <p className="uppercase tracking-[0.2em] text-[#C8221A] text-sm">
            01 — Development
          </p>

          <h3 className="font-['Bebas_Neue']
          text-5xl sm:text-6xl
          leading-[0.9]
          mt-8 text-white">
            WEB <br /> DEVELOPMENT
          </h3>

          <p className="text-gray-400 mt-8 text-base sm:text-lg leading-relaxed max-w-[500px]">
            Custom-built websites and scalable web applications designed
            for performance, speed, and modern user experiences.
          </p>

        </div>

        {/* BUTTON */}
        <div className="relative z-10 mt-12">

          {/* <button
            className="group flex items-center gap-3
            uppercase tracking-wide
            text-white/80 hover:text-white
            transition"
          >
            Explore Service

            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
            />
          </button> */}

        </div>

      </motion.div>

      {/* GRAPHIC DESIGN */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden bg-[#111]
        border border-white/10
        rounded-[32px]
        p-8 sm:p-12
        min-h-[420px]
        flex flex-col justify-between
        hover:border-[#C8221A]/40
        transition-all duration-300"
      >

        {/* GLOW */}
        <div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-red-500/10 blur-[100px]"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          <p className="uppercase tracking-[0.2em] text-[#C8221A] text-sm">
            02 — Design
          </p>

          <h3 className="font-['Bebas_Neue']
          text-5xl sm:text-6xl
          leading-[0.9]
          mt-8 text-white">
            GRAPHIC <br /> DESIGN
          </h3>

          <p className="text-gray-400 mt-8 text-base sm:text-lg leading-relaxed max-w-[500px]">
            Brand identities, social media creatives, UI visuals,
            and impactful designs that communicate professionally.
          </p>

        </div>

        {/* BUTTON */}
        <div className="relative z-10 mt-12">

          {/* <button
            className="group flex items-center gap-3
            uppercase tracking-wide
            text-white/80 hover:text-white
            transition"
          >
            Explore Service

            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
            />
          </button> */}

        </div>

      </motion.div>

    </div>

  </div>

</section>

      {/* ================= WHY US ================= */}
      <section className="bg-white text-black py-24 px-5 sm:px-8">

        <div className="max-w-[1400px] mx-auto">

          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">

            <h2 className="font-['Bebas_Neue'] leading-[0.9]
            text-5xl sm:text-7xl lg:text-8xl">
              WHY <br />
              <span className="text-[#C8221A]">WORK</span> <br />
              WITH US
            </h2>

            <p className="text-gray-500 max-w-sm lg:text-right text-lg">
              Built for ambitious students, startups, and creators.
            </p>

          </div>

          <div className="space-y-8">

            {[
              "We operate like a real agency",
              "Mentored by industry professionals",
              "Focused on portfolio-building and legacy",
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-t border-gray-200 pt-6 flex flex-col md:flex-row md:justify-between gap-3"
              >
                <p className="text-[#C8221A] text-lg">
                  0{i + 1}
                </p>

                <h3 className="text-2xl sm:text-3xl font-medium">
                  {title}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      {/* ================= CTA SECTION ================= */}
<section id="join" className="grid lg:grid-cols-2">

  {/* CLIENT SECTION */}
  <div className="bg-black px-6 sm:px-10 lg:px-16 py-24 min-h-[700px] flex flex-col justify-between">

    {/* TOP CONTENT */}
    <div>

      <p className="uppercase text-white/50 tracking-[0.18em] text-sm sm:text-base">
        For Clients
      </p>

      <h2
        className="font-['Bebas_Neue'] leading-[0.9]
        text-6xl sm:text-7xl lg:text-8xl mt-8"
      >
        NEED WORK <br /> DONE?
      </h2>

      <p className="text-gray-400 text-lg sm:text-xl mt-8 max-w-[500px] leading-relaxed">
        Tell us about your vision. We’ll tell you if we can build it
        with quality, speed, and creativity.
      </p>

    </div>

    {/* BUTTON */}
    <div className="mt-16">
      <button
      onClick={()=> window.location = "mailto:iufreelancesociety@gmail.com"}
        className="group bg-[#C8221A]
        hover:bg-[#d62b21]
        transition-all duration-300
        px-10 py-5 rounded-full
        uppercase font-semibold tracking-wide
        text-lg flex items-center gap-3"
      >
        Get in Touch

        <ArrowUpRight
          size={20}
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
        />
      </button>
    </div>

  </div>

  {/* STUDENT SECTION */}
  <div className="bg-[#C8221A] px-6 sm:px-10 lg:px-16 py-24 min-h-[700px] flex flex-col justify-between">

    {/* TOP CONTENT */}
    <div>

      <p className="uppercase text-white/60 tracking-[0.18em] text-sm sm:text-base">
        For Students
      </p>

      <h2
        className="font-['Bebas_Neue'] leading-[0.9]
        text-6xl sm:text-7xl lg:text-8xl mt-8"
      >
        WANT <br /> IN?
      </h2>

      <p className="text-white/90 text-lg sm:text-xl mt-8 max-w-[500px] leading-relaxed">
        Work on real-world projects, collaborate with creators,
        and gain industry-level experience beyond classrooms.
      </p>

    </div>

    {/* BUTTON */}
    <div className="mt-16">
      <button
        className="group bg-white text-[#C8221A]
        transition-all duration-300
        px-10 py-5 rounded-full
        uppercase font-semibold tracking-wide
        text-lg flex items-center gap-3"
      >
        Apply Now

        <ArrowUpRight
          size={20}
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
        />
      </button>
    </div>

  </div>

</section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-white/10 py-8">

        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">

          <img
            src={logo}
            alt="logo"
            className="h-12 brightness-0 invert"
          />

          <div className="flex flex-wrap justify-center gap-4 uppercase text-sm tracking-wide text-gray-500">

             <Link to="https://www.instagram.com/freelancingsocietyiu" className="hover:text-white transition cursor-pointer">
              <FaInstagram size={24}/>
            </Link>

            <Link to="https://www.linkedin.com/in/freelance-force-50a826390/" className="hover:text-white transition cursor-pointer">
              <FaLinkedin size={24}/>
            </Link>

            <Link to="https://www.facebook.com/share/1Fwpg5k7S4/?mibextid=wwXIfr" className="hover:text-white transition cursor-pointer">
              <FaFacebook size={24} />
            </Link>

            <Link to="https://wa.me/923241458846" className="hover:text-white transition cursor-pointer">
              <FaWhatsapp size={24}/>
            </Link>

             
           

          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Freelance Force
          </p>

        </div>
      </footer>

    </div>
  );
};

export default FreelanceForce;