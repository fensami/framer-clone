"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  // const ref = useRef(null);

  // Only true when element is in center (customized via rootMargin)
  // const isInView = useInView(ref, {
  //   once: true,
  //   margin: "-50% 0px -50% 0px", // 👈 center of screen only
  // });
  return (
    <div>
      <div className=" bg-[url('https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg')] bg-cover bg-center h-screen w-full absolute top-0 left-0">
        {/* <div className="relative h-screen">
        <Image
          src="https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg"
          alt="Banner Image"
          fill
          className="object-cover"
        />
      </div> */}
        <div className="text-center    text-white text-7xl flex justify-center items-center h-full">
          <div>
            <motion.h1 className="text-8xl flex flex-wrap gap-x-[14px] justify-center max-w-[831px]">
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
            <div className="flex gap-3 items-center justify-center mt-[34px]">
              <Link href="/ourvision" className="primary-btn v2">
                Our Vision
              </Link>
              <Link href="/ourvision" className="primary-btn v2">
                Explore Expertise
              </Link>
            </div>
          </div>
        </div>

        {/* <motion.div
        ref={ref}
        initial={{ y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "#3b82f6",
          margin: "500px auto", // enough space to scroll
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "1.2rem",
        }}
      >
        Scroll Animated Box
      </motion.div> */}
      </div>
    </div>
  );
};

export default Banner;
