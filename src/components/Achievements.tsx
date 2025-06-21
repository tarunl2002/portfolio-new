"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

const items = [
  { icon: "🏆", title: "Hacker House Goa ʼ24 Winner", role: "Lead Dev – EcoCred" },
  { icon: "🥇", title: "Anveshana ʼ24 Winner", role: "Co‑Creator – Swachh" },
  { icon: "🧠", title: "IEEE‑iSES (India) 1st", role: "Founder – Brain Bridge" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements & Leadership
      </motion.h2>

      <VerticalTimeline lineColor="#4f46e5">
        {items.map((it, i) => (
          <VerticalTimelineElement
            key={i}
            contentStyle={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(8px)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #4f46e5" }}
            iconStyle={{ background: "#4f46e5", color: "#fff", fontSize: "20px" }}
            icon={
              <div className="w-full h-full flex items-center justify-center text-2xl">
                {it.icon}
              </div>
            }
          >
            <h3 className="text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-gray-300">{it.role}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
