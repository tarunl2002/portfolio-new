'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const links = [
    { icon: <FaEnvelope />, url: 'mailto:tarunlalwani2002@gmail.com', color: '#ef4444' },
    { icon: <FaGithub />, url: 'https://github.com/tarunl2002', color: '#6b7280' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/tarunl2002', color: '#0ea5e9' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
  };

  return (
    <footer className="py-14 px-6 border-t border-white/10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl top-0 left-1/2 transform -translate-x-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.div 
          className="flex justify-center gap-8 mb-6"
          variants={containerVariants}
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white relative group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10, 10, 0],
                color: link.color
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-50"
                style={{ backgroundColor: link.color }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Icon */}
              <span className="relative z-10">{link.icon}</span>
              
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 border-2 rounded-full opacity-0"
                style={{ borderColor: link.color }}
                whileHover={{
                  scale: [1, 1.5],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-center text-slate-500 text-sm relative"
            whileHover={{ 
              color: '#94a3b8',
              scale: 1.05
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              © 2024 Tarun Lalwani
            </motion.span>
            {' • '}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                backgroundSize: '200% 100%',
              }}
            >
              Built with code, coffee & passion.
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
