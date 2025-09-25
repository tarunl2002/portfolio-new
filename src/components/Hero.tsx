'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {



  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>



      {/* Left: Centered Text Content */}
      <div className="z-10 w-full md:w-2/3 flex justify-center items-center text-center md:text-left py-12 md:py-0">
        <div className="space-y-6 max-w-xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Tarun Lalwani
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-lg md:text-xl text-slate-300"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: 'linear-gradient(90deg, #94a3b8, #06b6d4, #8b5cf6, #94a3b8)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Software Engineer • Full‑Stack Developer • Google Developer Clubs Co‑Lead
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="/pdf/Tarun_Lalwani_85_Software.pdf"
              download='Tarun Resume'
              className="px-6 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Download Resume</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Right: Developer Illustration */}
      <motion.div
        className="relative w-full md:w-1/3 max-w-sm mb-12 md:mb-0"
        initial={{ opacity: 0, x: 40, rotateY: -15 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotateZ: [0, 2, 0, -2, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween"
          }}
          className="relative"
        >
          <Image
            src="/images/developer-illustration.png"
            alt="Developer Illustration"
            width={500}
            height={500}
            className="mx-auto drop-shadow-2xl"
            priority
          />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </motion.div>

      {/* Enhanced Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute w-[400px] h-[400px] bg-purple-500 blur-[120px] top-20 left-10 opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-[350px] h-[350px] bg-cyan-400 blur-[100px] bottom-20 right-10 opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute w-[200px] h-[200px] bg-pink-500 blur-[80px] top-1/2 left-1/2 opacity-20"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
