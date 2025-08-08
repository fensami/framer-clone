"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className=" bg-[url('https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg')] bg-cover bg-center h-screen w-full absolute top-0 left-0">
        <div className="text-center    text-white text-7xl flex justify-center items-center h-full">
          <div>
            <motion.h1 className="text-[48px] md:text-[64px]  lg:text-8xl flex flex-wrap gap-x-[14px] justify-center lg:max-w-[831px]">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{ display: "inline-block" }} // Important for transform animations on inline elements
              >
                Timeless
              </motion.span>

              {/* The span for "World" must be a motion.span */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{ display: "inline-block" }}
              >
                Comfort
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{ display: "inline-block" }}
              >
                &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{ display: "inline-block" }}
              >
                Endless
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.9,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{ display: "inline-block" }}
              >
                Luxury
              </motion.span>
            </motion.h1>
            <div className="flex gap-3 items-center justify-center flex-wrap mt-[34px]">
              <Link href="/ourvision" className="primary-btn v2">
                Our Vision
              </Link>
              <Link href="/ourvision" className="primary-btn v2">
                Explore Expertise
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
