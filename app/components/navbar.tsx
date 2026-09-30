
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Technologies", href: "#technologies" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-4 right-4 top-5 z-50 mx-auto max-w-3xl rounded-2xl border transition-all duration-300 md:top-6 ${
          hasScrolled
            ? "border-black/10 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-black/10 bg-white/80 backdrop-blur-xl"
        }`}
      >
        <div className="px-5 py-3.5 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-bold text-white transition-transform duration-300 group-hover:rotate-12">
                O
              </span>

              <span className="text-sm font-bold tracking-[0.18em] text-black">
                ADESHOLA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-black/60 transition-all duration-200 hover:bg-black/5 hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* GitHub */}
            <div className="hidden items-center md:flex">
              <Link
                href="https://github.com/missfavis-coder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:bg-neutral-800"
              >
                <SiGithub
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                isMobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-neutral-800 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 cursor-default bg-black/10 backdrop-blur-[2px] md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-4 top-[88px] z-40 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl md:hidden"
            >
              <div className="flex flex-col p-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3.5 text-sm font-medium text-black/70 transition-colors hover:text-black"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="https://github.com/missfavis-coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 flex items-center justify-between rounded-xl bg-black px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-900"
                >
                  <span>GitHub</span>
                  <SiGithub size={17} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

