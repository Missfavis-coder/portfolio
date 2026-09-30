
// app/_components/Footer.tsx

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Technologies", href: "#technologies" },
  { name: "Education", href: "#education" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white px-6 pb-8 pt-16 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="flex flex-col gap-10 py-10 md:flex-row md:items-start md:justify-between">
            {/* Identity */}
            <div>
              <Link
                href="/"
                className="group inline-flex items-center gap-2"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-black transition-colors group-hover:bg-[#ffbb00] group-hover:text-black">
                  O
                </span>

                <span className="text-sm font-bold tracking-[0.16em] ">
                  ADESHOLA
                </span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">
                Frontend developer focused on building thoughtful, useful
                digital experiences.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] ">
                Navigation
              </p>

              <nav className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-fit text-sm text-neutral-400 transition-colors hover:text-secondary cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
                Connect
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href="mailto:ofavourmi55@gmail.com"
                  className="group flex w-fit items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-seconadary"
                >
                  Email
                  <ArrowUpRight
                    size={13}
                    className="text-white transition-colors group-hover:text-[#ffbb00]"
                  />
                </a>

                <a
                  href="https://github.com/missfavis-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-seconadary"
                >
                  GitHub
                  <ArrowUpRight
                    size={13}
                    className="text-white transition-colors group-hover:text-[#ffbb00]"
                  />
                </a>

                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-seconadary"
                >
                  LinkedIn
                  <ArrowUpRight
                    size={13}
                    className="text-white transition-colors group-hover:text-[#ffbb00]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-4  py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs ">
              © {new Date().getFullYear()} Ojo Adeshola. All rights reserved.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex w-fit items-center gap-2 text-xs font-medium  transition-colors hover:text-secondary cursor-pointer"
            >
              Back to top
              <ArrowUp
                size={13}
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:text-[#ffbb00]"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

