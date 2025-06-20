'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    { name: 'Brain Bridge', desc: 'AI games + LSTM for cognitive therapy', tags: ['Flutter', 'NodeJS', 'TensorFlow'] },
    { name: 'Swachh', desc: 'Blockchain platform for carbon credits', tags: ['Solidity', 'MongoDB', 'Flutter'] },
    { name: 'BrewCraft', desc: 'ML-driven health recipes + IPFS', tags: ['Python', 'IPFS', 'Flutter'] },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <motion.h2 className="text-4xl font-bold text-center text-white mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Highlighted Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h3 className="text-2xl font-semibold text-white">{p.name}</h3>
            <p className="mt-2 text-slate-300">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map((t, idx) => (
                <span key={idx} className="bg-[#1e293b] px-3 py-1 rounded-full text-xs text-white">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
