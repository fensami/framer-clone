"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="  banner-bg">
      <div className="text-center text-white text-7xl flex justify-center items-center h-full">
        <div>
          <motion.h1 className="text-[48px] md:text-[64px]  lg:text-8xl flex flex-wrap gap-x-[14px] justify-center lg:max-w-[831px]">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              style={{ display: "inline-block" }} // Important for transform animations on inline elements
            >
              Timeless
            </motion.span>

            {/* The span for "World" must be a motion.span */}
            <motion.span
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              style={{ display: "inline-block" }}
            >
              Comfort
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              style={{ display: "inline-block" }}
            >
              &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              style={{ display: "inline-block" }}
            >
              Endless
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              style={{ display: "inline-block" }}
            >
              Luxury
            </motion.span>
          </motion.h1>
          <div className="flex gap-3 items-center justify-center flex-wrap mt-[34px]">
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Link href="/ourvision" className="primary-btn v2">
                Our Vision
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 1.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Link href="/ourvision" className="primary-btn v2">
                Explore Expertise
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
