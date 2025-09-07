"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const expertiseData = [
  {
    id: 1,
    title: "Custom Furniture Design",
    number: "01",
    image:
      "https://framerusercontent.com/images/sfKLQbWvWW6JhYVucFGGxxvK3A.jpeg",
    description:
      "Bespoke furniture pieces tailored to your unique style and space requirements.",
  },
  {
    id: 2,
    title: "Room Decoration & Styling",
    number: "02",
    image:
      "https://framerusercontent.com/images/aqfXMublrraihocca3U6iDYHyc.jpeg?scale-down-to=1024",
    description:
      "Complete room makeovers with curated decor and styling solutions.",
  },
  {
    id: 3,
    title: "Space Planning & Interior Layout",
    number: "03",
    image:
      "https://framerusercontent.com/images/PzGfS0tMVPZZc0jcqD3wHEmmQI.jpeg",
    description:
      "Optimized space utilization with functional and aesthetic interior layouts.",
  },
  {
    id: 4,
    title: "Home Renovations & Remodeling",
    number: "04",
    image:
      "https://framerusercontent.com/images/KdQ95Q3pfhLOIwVe9qSUBK1fk.jpeg?scale-down-to=1024",
    description: "Complete home transformations from concept to completion.",
  },
  {
    id: 5,
    title: "Lighting Design",
    number: "05",
    image:
      "https://framerusercontent.com/images/5Bsk9IjkqVtzmXX71ASTIlfNp0.jpeg?scale-down-to=1024",
    description: "Ambient and functional lighting solutions for every space.",
  },
  {
    id: 6,
    title: "Virtual Interior Design Consultations",
    number: "06",
    image:
      "https://framerusercontent.com/images/5RDxKCHJwVzXuvUd5i9RY6vW3o.jpeg?scale-down-to=1024",
    description:
      "Remote design consultations and 3D visualizations for your project.",
  },
];

export default function OurServices() {
  const [activeExpertise, setActiveExpertise] = useState(expertiseData[2]); // Default to Space Planning

  return (
    <section className="px-[20px] md:px-[30px] lg:px-[50px] md:py-[200px] py-[100px]  min-h-screen overflow-hidden">
      <div className="">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-16 items-end mb-[60px]">
          <div></div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-amber-800 text-sm font-medium mb-4 flex items-center"
            >
              <span className="w-1 h-1 bg-amber-800 rounded-full mr-2"></span>
              Our Services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-[64px] font-normal text-amber-900 leading-[40px] md:leading-[50px] lg:leading-[64px] md:max-w-3/4"
            >
              Selecting the ideal elements to elevate your space
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Dynamic Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExpertise.id}
                  initial={{
                    opacity: 0,
                    y: 100,
                    transition: { duration: 0.5 },
                  }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, y: 100, transition: { duration: 0.5 } }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      activeExpertise.image ||
                      "/placeholder.svg?height=600&width=800&query=modern interior design"
                    }
                    alt={activeExpertise.title}
                    height={845}
                    width={888}
                    className="object-cover h-full w-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Side - Expertise List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-0 order-1 lg:order-2"
          >
            {expertiseData.map((expertise, index) => (
              <motion.div
                key={expertise.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onPointerEnter={() => setActiveExpertise(expertise)}
                className={` cursor-pointer  transition-all duration-300 border-b border-amber-800 pb-2 ${
                  activeExpertise.id === expertise.id
                    ? "bg-amber-800 text-white  rounded-none "
                    : "text-amber-900 hover:text-red-800"
                }`}
              >
                <div className="flex items-center pointer-events-none pl-2">
                  <motion.span
                    className={`text-sm font-normal min-w-[24px] ${
                      activeExpertise.id === expertise.id
                        ? "text-amber-200"
                        : "text-amber-600"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {expertise.number}
                  </motion.span>

                  <motion.h3
                    className="text-lg md:text-[28px] font-normal flex-1"
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {expertise.title}
                  </motion.h3>
                </div>

                {/* Bottom line - only show for non-active items */}
                {activeExpertise.id !== expertise.id && (
                  <motion.div
                    className=" bg-amber-300 group-hover:bg-amber-600 transition-all duration-300 pointer-events-none"
                    initial={{ width: "100%" }}
                    whileHover={{ width: "100%", backgroundColor: "#d97706" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
