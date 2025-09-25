"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const experienceItems = [
  {
    id: "modgenics",
    icon: "/logos/modgenics_logo.jpg",
    title: "Software Dev Intern at Modgenics",
    period: "Aug 2024 – Dec 2024",
    description: "Re-architected major features, improved performance by 35%",
    skills: ["Go", "React", "MongoDB"]
  },
  {
    id: "piecloud",
    icon: "/logos/piecloud_logo.png",
    title: "Full-Stack Intern at Pie Cloud",
    period: "Nov 2023 – Feb 2024",
    description: "Built real-time tools and REST APIs using Laravel and React",
    skills: ["Laravel", "React", "MySQL"]
  },
  {
    id: "gdsc",
    icon: "/logos/gdg_logo.png",
    title: "GDSC-AKGEC Co-Lead",
    period: "Oct 2022 – Present",
    description: "Led workshops, hosted hackathons, mentored 200+ students",
    skills: ["Leadership", "Google Cloud", "Flutter"]
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 px-6 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
          Experience & Leadership
        </motion.span>
      </motion.h2>

      <div className="relative z-10">
        <VerticalTimeline lineColor="#6366f1">
          {experienceItems.map((item, index) => (
            <VerticalTimelineElement
              key={item.id}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #6366f1" }}
              date={
                <motion.span
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-cyan-400 font-semibold"
                >
                  {item.period}
                </motion.span>
              }
              iconStyle={{ 
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)", 
                color: "#fff",
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
              }}
              icon={
                <motion.div 
                  className="w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-400/30 px-2 py-1 rounded-full text-xs text-cyan-300"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1, type: 'spring' as const }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
