import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

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
    <div
      ref={containerRef}
      className="relative min-h-[250vh] border border-red-600 z-1"
    >
      {/* <h1 className="p-4 text-2xl font-bold">Scroll down to see the effect</h1> */}

      {/* Sticky wrapper to pin the section */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden border border-blue-600">
        {/* First image - always visible, no animation */}
        <div className="absolute inset-0 z-10 flex-col items-center justify-center text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start 50px above its final position
            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to its final position (y: 0)
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          >
            <p className="font-normal text-[16px] mb-[34px]">01</p>
            <div>
              <h2 className="font-normal text-[64px] leading-[64px]">
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

          <img
            src={images[0] || "/placeholder.svg"}
            alt="Image 1"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Second image - slides over first */}
        <motion.div style={{ y: y2 }} className="absolute inset-0 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start 50px above its final position
            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to its final position (y: 0)
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
          >
            <p className="font-normal text-[16px] mb-[34px]">01</p>
            <div>
              <h2 className="font-normal text-[64px] leading-[64px]">
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
          <img
            src={images[1] || "/placeholder.svg"}
            alt="Image 2"
            className="w-full h-full object-cover "
          />
        </motion.div>

        {/* Third image - slides over second */}
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start 50px above its final position
            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to its final position (y: 0)
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
          >
            <p className="font-normal text-[16px] mb-[34px]">01</p>
            <div>
              <h2 className="font-normal text-[64px] leading-[64px]">
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
          <img
            src={images[2] || "/placeholder.svg"}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Fourth image - slides over third */}
        {/* <motion.div style={{ y: y4 }} className="absolute inset-0 z-40">
          <img
            src={images[3] || "/placeholder.svg"}
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </motion.div> */}
      </div>

      <div className="h-screen flex items-center justify-center">
        <h2 className="text-xl">End of scroll animation</h2>
      </div>
    </div>
  );
}
