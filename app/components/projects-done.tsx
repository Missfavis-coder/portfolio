
// app/_components/SelectedWork.tsx

"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Sparkles, Plug } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiReactquery
} from "react-icons/si";
import Link from "next/link";

const projects = [
  {
    number: "01",
    name: "GetSkillMD",
    description:
      "A developer-focused platform for generating structured skills and workflows from websites, powered by AI.",
    stack: ["Next.js", "TypeScript", "AI"],
    year: "2026",
    github: "#",
    live: "https://getskillmd.com/",
  },
  {
    number: "02",
    name: "Scrapify",
    description:
      "A workflow automation platform that turns browser tasks into reusable, executable workflows for web research and automation.",
    stack: ["Next.js", "TypeScript", "TanStack Query", "Playwright"],
    year: "2026",
    github: "https://github.com/Missfavis-coder/scrapify",
    live: "https://scrapify-rust.vercel.app/",
  },

  {
    number: "03",
    name: "TapPay",
    description:
      "A modern payment experience combining NFC, QR codes, usernames, and phone numbers into a simple way to send and receive money.Built during a hackathon and it took the first place",
    stack: ["React", "TypeScript", "API Integration"],
    year: "2026",
    github: "https://github.com/Missfavis-coder/PayAza",
    live: "#",
  },

  {
    number: "04",
    name: "Kobo Coins",
    description:
      "A digital financial experience designed around making everyday money management simpler and more accessible.",
    stack: ["Next.js", "TypeScript", "TanStack Query", "Supabase"],
    year: "2025",
    github: "https://github.com/Missfavis-coder/kobocore",
    live: "https://kobocore-v1-rho.vercel.app/",
  },
  {
    number: "05",
    name: "OnLiftoff",
    description:
      "A digital platform built to help people discover opportunities and move from finding them to taking action.",
    stack: ["Next.js", "TypeScript", "TanStack Query"],
    year: "2026",
    github: "https://github.com/Missfavis-coder/onliftoff",
    live: "https://onliftoff-web.vercel.app/",
  },
];

const techIcons: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  React: SiReact,
  "TanStack Query": SiReactquery,
  AI: Sparkles,
  "API Integration": Plug,
};

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-white px-6 py-12 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.18em] text-neutral-600">
              01
            </span>

            <span className="h-px w-8 bg-[#ffbb00]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black sm:text-5xl md:text-4xl">
            Selected Project
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/55">
            A collection of products I've built, contributed to, and
            experimented with across web development, AI, and automation.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-4">
          {/* First Row — 2 Projects */}
          <div className="grid gap-4 md:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl bg-black px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 sm:px-8 sm:py-9">
                  <div className="flex h-full flex-col">
                    {/* Project Info */}
                    <div className="md:flex gap-5">


                      <span className="pt-1 md:flex hidden text-xs font-medium tracking-[0.12em] text-white/30">
                        {project.number}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                        <span className="pt-1 md:hidden flex text-xs font-medium tracking-[0.12em] text-white/30">
                        {project.number}
                      </span>
                          <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                            {project.name}
                          </h3>

                          <ArrowUpRight
                            size={19}
                            className="text-[#ffbb00] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((technology) => (
                            <span
                              key={technology}
                              className=" py-1 text-[11px] font-medium text-white/50"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="mt-6 flex items-center gap-5">
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-[#ffbb00]"
                          >
                            GitHub
                            <ArrowUpRight
                              size={12}
                              className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            />
                          </Link>

                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-[#ffbb00]"
                          >
                            <Globe size={14} />
                            Live site
                            <ArrowUpRight
                              size={12}
                              className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Year */}
                    <span className="mt-8 self-end text-xs font-medium tracking-[0.14em] text-secondary">
                      {project.year}
                    </span>
                  </div>

                  {/* Yellow hover line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#ffbb00] transition-all duration-500 group-hover:w-full" />
                </article>
              </motion.div>
            ))}
          </div>

          {/* Second Row — 3 Projects */}
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.slice(2).map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl bg-black px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 sm:px-7 sm:py-8">
                  <div className="flex h-full flex-col">
                    {/* Project Info */}
                    <div className="flex ">




                      <div className="min-w-0">
                        <div className="flex items-center gap-4">
                        <span className="pt-1 text-xs font-medium tracking-[0.12em] text-white/30">
                        {project.number}
                      </span>
                          <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                            {project.name}
                          </h3>

                          <ArrowUpRight
                            size={18}
                            className="text-secondary opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </div>

                        <p className="mt-3 text-sm leading-6 text-white/55">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((technology) => (
                            <span
                              key={technology}
                              className=" py-1 text-[11px] font-medium text-white/50"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="mt-6 flex items-center gap-5">
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-[#ffbb00]"
                          >
                            GitHub
                            <ArrowUpRight
                              size={12}
                              className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            />
                          </Link>

                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-2 text-xs font-medium text-white/50 transition-colors hover:text-[#ffbb00]"
                          >
                            <Globe size={14} />
                            Live site
                            <ArrowUpRight
                              size={12}
                              className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Year */}
                    <span className="mt-8 self-end text-xs font-medium tracking-[0.14em] text-secondary">
                      {project.year}
                    </span>
                  </div>

                  {/* Yellow hover line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


