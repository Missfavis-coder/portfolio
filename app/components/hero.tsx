
"use client";

import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="mt-8 min-h-screen px-6 pb-16 pt-36 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex max-w-5xl flex-col justify-between"
      >

        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-neutral-800">
            Hello, I'm
          </p>

          <h1 className="text-3xl font-semibold text-black sm:text-4xl md:text-5xl">
            OJO Adeshola
          </h1>

          <h2 className="mt-4 text-xl font-medium tracking-[-0.02em] text-secondary sm:text-2xl">
            Frontend Developer
          </h2>

          <p className="mt-8 max-w-4xl text-[16px] leading-8 tracking-[-0.01em] text-neutral-600 sm:leading-9">
            I'm a developer who enjoys turning ideas into clean, thoughtful
            digital experiences. I spend most of my time building with
            JavaScript, TypeScript, React, and Next.js, while exploring my
            interests in AI, embedded systems, and the ways software can
            interact with the physical world. I care about good interfaces,
            writing maintainable code, and building things that are genuinely
            useful.
          </p>

          {/* CV */}
          <motion.a
            href="/Ojo-Adeshola-CV.pdf"
            download="Ojo-Adeshola-CV.pdf"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#ffbb00] hover:text-black"
          >
            <Download size={16} />
            Download CV
          </motion.a>
        </div>

        {/* Personal Details */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 md:gap-10">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="shrink-0 text-neutral-500" />

            <p className="text-sm font-medium text-black">
              Nigeria{" "}
              <span className="text-neutral-600">(Open to Remote)</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} className="shrink-0 text-neutral-500" />

            <a
              href="mailto:ofavourmi55@gmail.com"
              className="text-sm font-medium text-black transition-colors hover:text-[#ffbb00]"
            >
              ofavourmi55@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

