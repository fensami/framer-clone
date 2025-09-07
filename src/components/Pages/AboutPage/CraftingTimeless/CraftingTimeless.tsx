"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CraftingTimeless = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <section className=" py-[100px] lg:py-[200px] px-[20px] lg:px-[50px]">
      <motion.h1
        className="mb-[70px] text-[#8d493a] text-[42px] lg:text-[96px] lg:leading-[96px] lg:max-w-[780px] mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[
          "Crafting",
          " ",
          "Timeless",
          " ",
          "Spaces",
          " ",
          "With",
          " ",
          "Style",
        ].map((word, i) => (
          <motion.span key={i} variants={child}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <div className="">
        <Image
          src="https://framerusercontent.com/images/hTZXDyZnJxuZxbdwIztBbCgMYQ.jpeg"
          alt="banner image"
          width={1805}
          height={985}
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default CraftingTimeless;
