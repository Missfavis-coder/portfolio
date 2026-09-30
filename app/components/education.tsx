
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const education = [
  {
    degree: "B.Sc. Computer Engineering",
    school: "Obafemi Awolowo University",
    location: "Ile-Ife, Nigeria"
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white px-6 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-black/60">
              05
            </span>

            <span className="h-px w-8 bg-[#ffbb00]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
            Education
          </h2>
        </motion.div>

        {/* Education List */}
        <div className="border-t border-black/10">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group flex flex-col gap-5 border-b border-black/10 py-8 md:flex-row md:items-center md:justify-between md:gap-10"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-black sm:text-xl">
                  {item.degree}
                </h3>

                <p className="mt-2 text-sm text-neutral-600">
                  {item.school}{" "}
                  <span className="text-black/30">·</span>{" "}
                  {item.location}
                </p>
              </div>

              <div className="flex items-center gap-3">

                <ArrowUpRight
                  size={17}
                  className="text-black/25 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ffbb00]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

