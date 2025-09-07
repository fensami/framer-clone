"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// Define box customization individually
const boxes = [
  {
    id: 1,
    width: 361,
    height: 410,
    initial: { x: 590, y: 550 },
    animate: { x: 180, y: 350 },
    image:
      "https://framerusercontent.com/images/wxArQEjlcrBYFF8tdvyrSDA68Zw.jpeg?scale-down-to=1024",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.1, // stagger animation: 0.3s between each box
    },
    initialOpacity: 1,
    animateOpacity: 1,
  },
  {
    id: 2,
    width: 361,
    height: 246,
    initial: { x: 800, y: 200 },
    animate: { x: 830, y: 60 },
    image:
      "https://framerusercontent.com/images/nYgQL26JA1Ioq4xVHJRlasIEC6Y.jpeg?scale-down-to=512",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.1, // stagger animation: 0.3s between each box
    },
    initialOpacity: 1,
    animateOpacity: 1,
  },
  {
    id: 3,
    width: 451,
    height: 328,
    initial: { x: 940, y: -70 },
    animate: { x: 1390, y: -150 },
    image:
      "https://framerusercontent.com/images/rCYE8FEyC5lN6m5coOuFOOgDJ8A.jpeg?scale-down-to=512",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.1, // stagger animation: 0.3s between each box
    },
    initialOpacity: 1,
    animateOpacity: 1,
  },
  {
    id: 4,
    width: 361,
    height: 273,
    initial: { x: 500, y: -250 },
    animate: { x: 50, y: -50 },
    image:
      "https://framerusercontent.com/images/VfSDa1aOzvtIWAcGV6dtAprgM.jpeg?scale-down-to=512",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.1, // stagger animation: 0.3s between each box
    },
    initialOpacity: 1,
    animateOpacity: 1,
  },
  {
    id: 5,
    width: 361,
    height: 410,
    initial: { x: 750, y: -550 },
    animate: { x: 800, y: -150 },
    image:
      "https://framerusercontent.com/images/rZjzFX7RCkgqdY9yyhbi4hs.jpeg?scale-down-to=1024",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.1, // stagger animation: 0.3s between each box
    },
    initialOpacity: 1,
    animateOpacity: 1,
  },
  {
    id: 6,
    width: 397,
    height: 241,
    initial: { x: 840, y: -900 },
    animate: { x: 1400, y: -650 },
    image:
      "https://framerusercontent.com/images/5SmAeNVODUEpPeB9LOhC2baAXP4.jpeg?scale-down-to=512",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.1, // stagger animation: 0.3s between each box
    },
    initialOpacity: 1,
    animateOpacity: 1,
  },
  {
    id: 7,

    initial: { x: 700, y: -1000 },
    animate: { x: 700, y: -1080 },
    text: "Transforming spaces with style, through Troscán's exquisite design expertise.",
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.5, // stagger animation: 0.3s between each box
    },
    initialOpacity: 0,
    animateOpacity: 1,
  },
];
type transitionType = {
  duration: number;
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
  delay: number;
};

const TransformingSpaces = () => {
  const parentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ["start end", "end start"],
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest >= 0.5) setStartAnimation(true);
      else setStartAnimation(false);
    });
  }, [scrollYProgress]);

  return (
    <div
      ref={parentRef}
      style={{
        height: "200vh",
        overflow: "hidden",
      }}
    >
      {boxes.map((box, i) => (
        <motion.div
          key={i}
          style={{
            width: box.width,
            height: box.height,
            position: "relative",
          }}
          initial={{ opacity: box.initialOpacity, ...box.initial }}
          animate={
            startAnimation
              ? { opacity: box.animateOpacity, ...box.animate }
              : { opacity: box.initialOpacity, ...box.initial }
          }
          transition={box.transition as transitionType}
        >
          {box.image ? (
            <Image
              src={box?.image}
              alt="slide image"
              fill
              objectFit="cover"
              className="rounded-sm"
            />
          ) : (
            <h2 className="max-w-[530px] text-center text-[40px] leading-[48px] text-[#8d493a] font-normal ">
              {box.text}
            </h2>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TransformingSpaces;
