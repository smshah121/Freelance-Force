import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAV */}
      <div className="px-6 py-6 border-b border-white/10">
        <Link
          to="/"
          className="uppercase text-sm tracking-[0.2em] text-white/60 hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* HERO */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="max-w-[1200px] mx-auto px-6 py-20"
      >
        <motion.h1
          variants={fadeUp}
          className="font-['Bebas_Neue'] text-[70px] sm:text-[120px] leading-[0.9]"
        >
          OUR <br />
          <span className="text-[#C8221A]">STORY</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 max-w-3xl mt-8 text-lg leading-relaxed"
        >
          Freelance Force started as a small student idea inside a university classroom.
          A group of developers, designers, and creators came together with one vision —
          to build real-world experience instead of just studying theory.
        </motion.p>
      </motion.div>

      {/* STORY / TIMELINE */}
      <div className="max-w-[1000px] mx-auto px-6 space-y-16 pb-20">

        {[
          {
            title: "The Beginning",
            text:
              "We started by building small projects, helping classmates, and experimenting with real design and development work. Slowly, the idea turned into a structured student collective.",
          },
          {
            title: "Our Growth & Events",
            text:
              "We launched Last Mile Tech, a freelancing bootcamp covering Full Stack, AI, Testing and Automation. Later we collaborated in IU Spectrum with GDR Society and organized Gaming War on PS5 including Tekken 8, building a strong creative community.",
          },
          {
            title: "Collaborations",
            text:
              "Freelance Force has worked alongside tech societies, gaming communities, and design groups to promote innovation, teamwork, and real industry-level exposure for students.",
          },
          {
            title: "Our Vision",
            text:
              "Our vision is to build a student-powered creative studio that bridges the gap between education and industry and turn students into professionals before graduation.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="relative pl-6 border-l border-white/10"
          >
            <div className="absolute -left-1 top-1.5 w-2 h-2 bg-[#C8221A] rounded-full" />

            <h2 className="text-2xl font-semibold text-[#C8221A]">
              {item.title}
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}

      </div>

      {/* TEAM */}
      <div className="bg-[#111] py-20 px-6">

        <div className="max-w-[1200px] mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-5xl sm:text-7xl mb-14"
          >
            LEADERSHIP
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Presidents",
                desc: "Leading strategy, operations, and vision execution of Freelance Force.",
                list: ["President 1", "President 2"],
              },
              {
                title: "Patron",
                desc: "Guiding the society with mentorship, experience, and academic support.",
                list: ["Faculty Patron Name"],
              },
              {
                title: "Core Team",
                desc: "Developers, designers, and managers working on real-world projects.",
                list: ["Dev Team", "Design Team", "Marketing Team"],
              },
            ].map((team, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-white/10 p-8 hover:border-[#C8221A]/40 transition"
              >
                <h3 className="text-[#C8221A] uppercase tracking-[0.2em] text-sm">
                  {team.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {team.desc}
                </p>

                <p className="mt-6 text-white font-semibold">
                  {team.list.map((m, idx) => (
                    <span key={idx}>• {m}<br /></span>
                  ))}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-[#C8221A] py-16 text-center px-6"
      >
        <h3 className="font-['Bebas_Neue'] text-4xl sm:text-6xl">
          READY TO JOIN THE MOVEMENT?
        </h3>

        <Link
          to="/"
          className="inline-block mt-6 bg-white text-[#C8221A] px-8 py-4 uppercase font-semibold tracking-wide"
        >
          Join Freelance Force
        </Link>
      </motion.div>

    </div>
  );
};

export default About;