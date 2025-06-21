"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const items = [
    {
      icon: "/logos/modgenics_logo.jpg",
      title: "Software Dev Intern at Modgenics",
      period: "Aug 2024 – Dec 2024",
    },
    {
      icon: "/logos/piecloud_logo.png",
      title: "Full-Stack Intern at Pie Cloud",
      period: "Nov 2023 – Feb 2024",
    },
    {
      icon: "/logos/gdg_logo.png",
      title: "GDSC-AKGEC Co-Lead",
      period: "Oct 2022 – Present",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 px-6"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience & Leadership
      </motion.h2>

      <VerticalTimeline lineColor="#6366f1">
        {items.map((item, i) => (
          <VerticalTimelineElement
            key={i}
            contentStyle={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #6366f1" }}
            date={item.period}
            iconStyle={{ background: "#fff", color: "#6366f1" }}
            icon={
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-6 h-6 object-contain"
                />
              </div>
            }
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
