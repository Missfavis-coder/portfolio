
// app/_components/Technologies.tsx

"use client";

import { motion } from "framer-motion";
import {
  SiDocker,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { Globe, Boxes } from "lucide-react";

const technologies = [
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "React Native",
    icon: SiReact,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "TanStack Query",
    icon: SiReactquery,
  },
  {
    name: "Zustand",
    icon: Boxes,
  },

  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "REST APIs",
    icon: Globe,
  },
  {
    name: "Supabase",
    icon: SiSupabase,
  },
  {
    name: "Docker",
    icon: SiDocker,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="bg-white px-6 py-16 lg:px-8 lg:py-18"
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
            <span className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
              04
            </span>

            <span className="h-px w-8 bg-[#ffbb00]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">
            Technologies
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-500">
            Frontend-focused, but capable of working across the stack and
            collaborating with backend developers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3 md:grid-cols-4"
        >
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.025,
                }}
                className="group flex items-center gap-3 border-b border-r border-black/10 px-5 py-5 transition-colors duration-200 hover:bg-black sm:px-6 cursor-pointer"
              >
                <Icon
                  size={18}
                  className="shrink-0 text-black/45 transition-colors duration-200 group-hover:text-secondary"
                />

                <span className="text-sm font-medium text-black/70 transition-colors duration-200 group-hover:text-white">
                  {technology.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

