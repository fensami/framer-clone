"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, scale: 0.5, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="pt-4 md:pt-5 sticky top-0 z-50 px-4 md:px-6"
      >
        <div className="bg-[#f8ede3] max-w-[700px] mx-auto flex justify-between items-center py-2 md:py-1 px-4 md:px-2 md:pl-5 rounded-md shadow-lg">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-[#8d493a] text-lg md:text-xl z-50 relative"
            onClick={closeMobileMenu}
          >
            Framer
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8">
              <li>
                <Link
                  href="/about"
                  className="font-semibold text-[#8d493a] hover:text-[#6d3a2a] transition-colors duration-300 text-sm lg:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-semibold text-[#8d493a] hover:text-[#6d3a2a] transition-colors duration-300 text-sm lg:text-base"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="font-semibold text-[#8d493a] hover:text-[#6d3a2a] transition-colors duration-300 text-sm lg:text-base"
                >
                  News
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contactus"
              className="primary-btn bg-[#8d493a] hover:bg-[#6d3a2a] text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-md font-semibold transition-all duration-300 text-sm lg:text-base hover:scale-105"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-[#8d493a] rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[#8d493a] rounded-full mt-1.5"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[#8d493a] rounded-full mt-1.5"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMobileMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                className="absolute top-full left-4 right-4 mt-2 bg-[#f8ede3] rounded-lg shadow-xl z-50 md:hidden overflow-hidden"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <nav className="py-4">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/about"
                        className="block px-6 py-3 font-semibold text-[#8d493a] hover:bg-[#8d493a]/10 transition-colors duration-300 text-base"
                        onClick={closeMobileMenu}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        className="block px-6 py-3 font-semibold text-[#8d493a] hover:bg-[#8d493a]/10 transition-colors duration-300 text-base"
                        onClick={closeMobileMenu}
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/news"
                        className="block px-6 py-3 font-semibold text-[#8d493a] hover:bg-[#8d493a]/10 transition-colors duration-300 text-base"
                        onClick={closeMobileMenu}
                      >
                        News
                      </Link>
                    </li>
                  </ul>

                  {/* Mobile Contact Button */}
                  <div className="px-6 pt-4 pb-2">
                    <Link
                      href="/contactus"
                      className="block w-full text-center bg-[#8d493a] hover:bg-[#6d3a2a] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-base"
                      onClick={closeMobileMenu}
                    >
                      Contact us
                    </Link>
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Nav;
