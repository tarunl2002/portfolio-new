'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">

      {/* Left: Centered Text Content */}
      <div className="z-10 w-full md:w-2/3 flex justify-center items-center text-center md:text-left py-12 md:py-0">
        <div className="space-y-6 max-w-xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tarun Lalwani
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-300"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Software Engineer • Full‑Stack Developer • Google Developer Clubs Co‑Lead
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition shadow-lg"
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
        </div>
      </div>

      {/* Right: Developer Illustration */}
      <motion.div
        className="relative w-full md:w-1/3 max-w-sm mb-12 md:mb-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Image
          src="/images/developer-illustration.png"
          alt="Developer Illustration"
          width={500}
          height={500}
          className="mx-auto"
          priority
        />
      </motion.div>

      {/* Ambient Blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[300px] h-[300px] bg-purple-500 blur-[180px] top-20 left-10 opacity-20" />
        <div className="absolute w-[250px] h-[250px] bg-cyan-400 blur-[160px] bottom-20 right-10 opacity-20" />
      </div>
    </section>
  );
}
