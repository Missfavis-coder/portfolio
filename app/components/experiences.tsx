
// app/_components/Experience.tsx

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tekcify",
    type: "Remote",
    period: "Jan 2026 — Aug 2026",
  },
  {
    role: "Frontend Intern",
    company: "Tekcify",
    type: "Remote",
    period: "Jul 2025 — Dec 2025",
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white px-6 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-neutral-700">
              03
            </span>
            <span className="h-px w-8 bg-secondary" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
            Experience
          </h2>
        </motion.div>

        <div className="">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="group py-4 md:flex block justify-between items-center"
            >
              <div>
                <div className="flex items-center gap-2">


                  <h3 className="text-base font-semibold text-black sm:text-lg">
                    {experience.role}
                  </h3>
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-black/55">
                  <span>{experience.company}</span>
                  <span>·</span>
                  <span>{experience.type}</span>
                </div>
              </div>

              <div className="flex items-center md:mt-0 mt-3 gap-4 md:justify-end justify-between whitespace-nowrap">
                <span className="text-sm text-black/60">
                  {experience.period}
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-black/20 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ffbb00]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

