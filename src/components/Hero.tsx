'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      {/* Background Blur Design */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-purple-500 blur-[180px] top-20 left-10 opacity-20" />
        <div className="absolute w-[250px] h-[250px] bg-cyan-400 blur-[160px] bottom-20 right-10 opacity-20" />
      </div>

      {/* Main Content */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold text-white z-10 tracking-tight leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Tarun Lalwani
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl text-slate-300 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Software Engineer • Full‑Stack Developer • Google Developer Clubs Co-Lead
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col md:flex-row gap-5 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition shadow-xl"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        className="mt-16 max-w-4xl w-full backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="grid md:grid-cols-3 gap-6 text-left text-sm md:text-base">
          <div>
            <h3 className="text-white font-semibold">💼 Experience</h3>
            <p className="text-slate-300 mt-2">
              2x Software Developer Intern · MERN Co-Lead at GDSC · Built apps with 20k+ views
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold">🏆 Achievements</h3>
            <p className="text-slate-300 mt-2">
              3x National Hackathon Winner · IEEE Contest Topper · EcoCred, BrewCraft, Swachh
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold">🛠️ Tech Stack</h3>
            <p className="text-slate-300 mt-2">
              React, Node.js, Go, Laravel, MongoDB, AWS, Flutter, LangChain, OpenAI API
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
