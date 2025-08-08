"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const images = [
  "https://framerusercontent.com/images/h8rMLidvtxgO37bgs0urvbSKFOk.jpeg",
  "https://framerusercontent.com/images/AkcINRgdRJWagCIMhlfAa6SCpcs.jpeg",
  "https://framerusercontent.com/images/bzAxUIZb76NAbMbbTCNRKvwep8.jpeg",
];

export default function ScrollImages() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y2 = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative min-h-[300vh]">
      {/* Sticky wrapper to pin the section */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden ">
        {/* First image - always visible, no animation */}
        <div className="absolute inset-0 z-10 flex-col items-center justify-center text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <p className="font-normal text-[16px] mb-[34px]">01</p>
            <div>
              <h2 className="font-normal text-[32px] md:text-[64px] md:leading-[64px] leading-[40px]">
                Serene Urban Retreat
              </h2>
              <p className="font-normal text-[16px] mt-[10px]">
                Where modern comfort meets peaceful sophistication.
              </p>
            </div>
            <Link className="primary-btn v2 mt-[30px]" href="/ourvision">
              View Projects
            </Link>
          </motion.div>
          <Image
            src={images[0] || "/placeholder.svg"}
            alt="Serene Urban Retreat"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={90}
          />
        </div>

        {/* Second image - slides over first */}
        <motion.div style={{ y: y2 }} className="absolute inset-0 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-50"
          >
            <p className="font-normal text-[16px] mb-[34px]">02</p>
            <div>
              <h2 className="font-normal text-[32px] md:text-[64px] md:leading-[64px] leading-[40px]">
                Coastal Luxury Haven
              </h2>
              <p className="font-normal text-[16px] mt-[10px]">
                Bringing the beauty of the shore into your home.
              </p>
            </div>
            <Link className="primary-btn v2 mt-[30px]" href="/ourvision">
              View Projects
            </Link>
          </motion.div>
          <Image
            src={images[1] || "/placeholder.svg"}
            alt="Coastal Luxury Haven"
            fill
            sizes="100vw"
            className="object-cover"
            quality={90}
          />
        </motion.div>

        {/* Third image - slides over second */}
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-50"
          >
            <p className="font-normal text-[16px] mb-[34px]">03</p>
            <div>
              <h2 className="font-normal text-[32px] md:text-[64px] md:leading-[64px] leading-[40px]">
                Contemporary Elegance
              </h2>
              <p className="font-normal text-[16px] mt-[10px]">
                Timeless design with modern functionality.
              </p>
            </div>
            <Link className="primary-btn v2 mt-[30px]" href="/ourvision">
              View Projects
            </Link>
          </motion.div>
          <Image
            src={images[2] || "/placeholder.svg"}
            alt="Contemporary Elegance"
            fill
            sizes="100vw"
            className="object-cover"
            quality={90}
          />
        </motion.div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <h2 className="text-xl">End of scroll animation</h2>
      </div>
    </div>
  );
}
