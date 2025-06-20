'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  const items = [
    { icon: '💼', title: 'Software Dev Intern at Modgenics', period: 'Aug 2024 – Present' },
    { icon: '💻', title: 'Full-Stack Intern at Pie Cloud', period: 'Nov 2023 – Feb 2024' },
    { icon: '🎓', title: 'GDSC-AKGEC Co-Lead', period: 'Oct 2022 – Present' },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <motion.h2 className="text-4xl font-bold text-center text-white mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Experience & Leadership
      </motion.h2>

      <div className="relative max-w-4xl mx-auto space-y-16">
        {items.map((it, i) => (
          <div key={i} className="relative pl-16">
            {i < items.length - 1 && <span className="absolute left-8 top-10 h-full w-px bg-indigo-400"></span>}
            <motion.div
              className="absolute left-0 top-6 w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-full shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {it.icon}
            </motion.div>
            <motion.div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md" whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-1 text-slate-300">{it.period}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
