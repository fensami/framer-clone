import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="absolute top-0 z-[-1]">
      <div className="relative ">
        <Image
          src="https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg"
          alt="Banner Image"
          className="object-cover"
          width={1920} // Example width
          height={912} // Example height
        />
      </div>
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl">
        <motion.h1 className="text-8xl flex flex-wrap gap-x-5 justify-center">
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
        <div>
          <Link href="/ourvision" className="primaryBtn v2">
            Our Vision
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
