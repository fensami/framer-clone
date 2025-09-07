"use client";
import { motion } from "framer-motion";

const AwardsRecognition = () => {
  const awards = [
    {
      title: "Best Interior Design Agency",
      description:
        "Awarded for outstanding innovation in interior design concepts",
      year: 2025,
    },
    {
      title: "Excellence in Custom Furniture",
      description:
        "Recognized for creating bespoke, high-quality furniture pieces",
      year: 2024,
    },
    {
      title: "Outstanding Room Makeover",
      description: "Honored for transforming spaces with impeccable style",
      year: 2023,
    },
    {
      title: "Top Emerging Design Studio",
      description: "Celebrated for redefining modern interior aesthetics",
      year: 2022,
    },
    {
      title: "Client Choice Award",
      description:
        "Voted for exceptional customer service and design expertise",
      year: 2021,
    },
  ];

  return (
    <section className="bg-beige text-brown py-[100px] lg:py-[200px] px-[20px] lg:px-[50px]">
      <div className="mb-[20px]  lg:mb-[60px]">
        <p className="text-amber-800 text-sm font-medium mb-2 flex  items-center">
          <span className="w-1 h-1 bg-amber-800 rounded-full mr-2"></span>Awards
          & Recognition
        </p>
        <h2 className="text-[32px] sm:text-[42px] lg:text-[64px] md:text-6xl font-normal text-amber-900 lg:leading-[64px] lg:max-w-[680px] ">
          Our Achievements: Celebrating Excellence in Design
        </h2>
      </div>

      <div>
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex gap-2.5 justify-between flex-wrap items-center border-b border-[#8d493a] py-[20px]"
          >
            <h3 className="text-[22px] leading-[26px] text-[#8d493a] font-normal max-w-[180px]">
              {award.title}
            </h3>
            <p className=" text-[22px] leading-[26px] font-normal max-w-[345px]  text-[#8d493a]">
              {award.description}
            </p>

            <span className="text-[22px] leading-[26px] font-normal text-[#8d493a]">
              {award.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsRecognition;
