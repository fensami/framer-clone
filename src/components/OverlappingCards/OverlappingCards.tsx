import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OverlappingCards = () => {
  // 🔁 Section reference for scroll tracking
  const sectionRef = useRef(null);

  // 📈 Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Animate while section is in view
  });

  // 🎯 Animations
  const x = useTransform(scrollYProgress, [0, 1], [100, 300]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.5], [0, 1, 1]);

  return (
    <div className="w-full">
      {/* 🔲 First Section — pinned during scroll */}
      <section
        ref={sectionRef}
        className="relative w-full bg-[#f8efe4] min-h-screen"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.div
            style={{ x, y, scale, opacity }}
            className="w-[280px] h-[180px] rounded-xl overflow-hidden shadow-lg border-[3px] border-red-500"
          >
            <img
              src="https://framerusercontent.com/images/wxArQEjlcrBYFF8tdvyrSDA68Zw.jpeg?scale-down-to=1024"
              alt="Card"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 🟦 Next Section */}
      <section className="h-screen bg-blue-200 flex items-center justify-center text-4xl font-bold">
        🎉 Animation Complete — Welcome to Next Section
      </section>
    </div>
  );
};

export default OverlappingCards;
