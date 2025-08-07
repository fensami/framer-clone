"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://framerusercontent.com/images/wxArQEjlcrBYFF8tdvyrSDA68Zw.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg",
  "https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg",
  "https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg",
];

export default function ScrollImages() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0.75, 1.0], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
  const y4 = useTransform(scrollYProgress, [0.0, 0.25], ["100%", "0%"]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[300vh] border border-red-600"
    >
      <h1>hello</h1>
      {/* Sticky wrapper to pin the section */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden border border-red-600">
        {/* First image */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-40">
          <img
            src={images[0]}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Second image */}
        <motion.div style={{ y: y2 }} className="absolute inset-0 z-30">
          <img
            src={images[1]}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Third image */}
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-20">
          <img
            src={images[2]}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div style={{ y: y4 }} className="absolute inset-0 z-10">
          <img
            src={images[3]}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
