"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Content moves from bottom of image to middle, then continues up
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["80%", "0%", "0%", "-100%"]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={containerRef} className="relative h-[200vh] ">
      {/* Sticky Image Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Image
          src="https://framerusercontent.com/images/Uv9jeirMiBGocQPSDko8jsMMolo.jpeg"
          alt="Modern interior with pendant light and contemporary furniture"
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content that animates from bottom to middle */}
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="bg-amber-50/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl border border-amber-200/50">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center space-y-8"
            >
              <h2 className="text-[28px]  font-normal text-amber-900 leading-[34px]">
                Ready to reimagine your space? Connect with us at Troscán to
                bring your vision to life with our expertise in design and
                decoration.
              </h2>

              <Link
                href="/contact"
                className="inline-block bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-medium hover:shadow-lg hover:scale-105 transform"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
