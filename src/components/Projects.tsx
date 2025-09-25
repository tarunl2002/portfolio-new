'use client';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    name: 'Brain Bridge',
    shortDesc: 'AI-powered games using LSTM for cognitive therapy.',
    tags: ['ESP8266', 'MQ135', 'NodeJS', 'TensorFlow'],
    fullDesc: 'Brain Bridge is an award-winning AI-powered application designed to support cognitive therapy for children. It features interactive brain-training games like Minesweeper and Tic-Tac-Toe to enhance memory, focus, and logic. The platform integrates a custom LSTM-based machine learning model trained on EEG data to assist in early-stage mental health diagnosis, making professional intervention more accessible and proactive. Designed with both playfulness and precision, Brain Bridge brings together gamification and AI for meaningful mental wellness.',
    image: '/images/BrainBridge.jpg',
  },
  {
    name: 'Swachh',
    shortDesc: 'Blockchain platform for managing carbon credits.',
    fullDesc: 'Swachh is a blockchain-based platform built to incentivize companies to actively reduce their carbon emissions. Leveraging the Sepolia testnet and ERC-20 tokens, it enables enterprises to register, receive emission limits, and trade verified carbon credits transparently. The system ensures real-time monitoring, robust security, and scalability while promoting environmental sustainability. Swachh simplifies carbon credit management and fosters eco-conscious business practices through a seamless and decentralized solution.',
    tags: ['Solidity', 'Raspberry PI', 'MongoDB', 'Flutter'],
    image: '/images/Swachh.jpg',
  },
  {
    name: 'BrewCraft',
    shortDesc: 'ML-driven health recipes stored with IPFS.',
    fullDesc: 'BrewCraft is a smart health recipe application that merges gamification, machine learning, and decentralized storage to offer personalized nutrition. Users can drag and drop ingredients in a playful interface to discover suitable recipes. In addition, the app analyzes blood reports using ML models to recommend meals tailored to individual nutritional deficiencies. To ensure data privacy and security, BrewCraft stores blood reports on IPFS, providing decentralized and tamper-proof access. It\'s a complete solution for health-conscious and tech-savvy users alike.',
    tags: ['Python', 'NodeJS', 'IPFS', 'React'],
    image: '/images/Feast_ML.jpg',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-10 right-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-2xl bottom-20 left-10"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.span
            className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            🚀 Highlighted Projects
          </motion.span>
          
          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full"
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.h2>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={project.name} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}