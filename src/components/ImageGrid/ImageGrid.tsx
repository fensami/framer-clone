"use client";

import { motion } from "framer-motion";

const images = [
  "https://framerusercontent.com/images/wxArQEjlcrBYFF8tdvyrSDA68Zw.jpeg",
  "https://framerusercontent.com/images/nYgQL26JA1Ioq4xVHJRlasIEC6Y.jpeg",
  "https://framerusercontent.com/images/rCYE8FEyC5lN6m5coOuFOOgDJ8A.jpeg",
  "https://framerusercontent.com/images/VfSDa1aOzvtIWAcGV6dtAprgM.jpeg",
  "https://framerusercontent.com/images/rZjzFX7RCkgqdY9yyhbi4hs.jpeg",
  "https://framerusercontent.com/images/5SmAeNVODUEpPeB9LOhC2baAXP4.jpeg",
];

export default function ImageGrid() {
  return (
    <div className="relative w-full min-h-screen bg-[#f8ede3] flex flex-wrap justify-center items-center gap-6 p-6">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{}}
          viewport={{ once: false, amount: 0.7 }} // ✅ Animate when 100% visible
          className="w-[240px] h-[240px] rounded-md overflow-hidden shadow-md"
        >
          <img
            src={src}
            alt={`Framer img ${index}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        // <motion.div
        //   key={index}
        //   initial={{ opacity: 0, scale: 0.8, y: 50 }}
        //   whileInView={{ opacity: 1, scale: 1, y: 0 }}
        //   transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
        //   viewport={{ once: false, amount: 0.7 }}
        //   className="w-[240px] h-[240px] rounded-md overflow-hidden shadow-md"
        // >
        //   <img
        //     src={src}
        //     alt={`Framer img ${index}`}
        //     className="w-full h-full object-cover"
        //   />
        // </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: false, margin: "-100% 0px -0% 0px" }} // 👈 triggers only after 100% scroll
        className="h-screen flex justify-center items-center bg-gray-100"
      >
        <div className="text-3xl font-bold text-black">
          Animate when scrolled 100% +
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0.7 }}
        className="w-full text-center text-xl font-medium text-gray-800 mt-10"
      >
        Transforming spaces with style, through Troscán s exquisite design
        expertise.
      </motion.h3>
    </div>
  );
}
