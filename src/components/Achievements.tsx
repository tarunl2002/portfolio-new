'use client';
import { motion } from 'framer-motion';

const items = [
  { icon: '🏆', title: 'Hacker House Goa ʼ24 Winner', role: 'Lead Dev – EcoCred' },
  { icon: '🥇', title: 'Anveshana ʼ24 Winner', role: 'Co‑Creator – Swachh' },
  { icon: '🧠', title: 'IEEE‑iSES (India) 1st', role: 'Founder – Brain Bridge' },
];

export default function Achievements() {
  return (
    <section id="experience" className="py-20 px-6">
      <motion.h2 className="text-4xl font-bold text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Achievements & Leadership
      </motion.h2>

      <div className="relative max-w-4xl mx-auto space-y-16">
        {items.map((it, i) => (
          <div key={i} className="relative pl-16">
            {i < items.length - 1 && <span className="absolute left-8 top-8 h-full w-px bg-[var(--accent)]"></span>}
            <motion.div
              className="absolute left-0 top-4 w-12 h-12 bg-[var(--accent)] text-white flex items-center justify-center rounded-full text-xl shadow-xl"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {it.icon}
            </motion.div>
            <motion.div className="bg-[var(--glass-bg)] backdrop-blur-[var(--blur)] p-6 rounded-2xl shadow-lg" whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-gray-300">{it.role}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
