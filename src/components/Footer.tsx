'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const links = [
    { icon: <FaEnvelope />, url: 'mailto:tarunlalwani2002@gmail.com' },
    { icon: <FaGithub />, url: 'https://github.com/tarunl2002' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/tarunl2002' },
    // { icon: <FaLeetcode />, url: 'https://linkedin.com/in/tarunl2002' },
  ];

  return (
    <footer className="py-14 px-6 border-t border-white/10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <motion.div 
        className="flex justify-center gap-8 mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
      >
        {links.map((l, i) => (
          <motion.a
            key={i}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white"
            whileHover={{ scale: 1.1, color: 'rgba(99,102,241,0.8)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {l.icon}
          </motion.a>
        ))}
      </motion.div>
      <p className="text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Tarun Lalwani • Built with code, coffee & passion.
      </p>
    </footer>
  );
}
