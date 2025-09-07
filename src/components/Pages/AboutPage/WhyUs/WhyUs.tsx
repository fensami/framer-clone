"use client";
import { motion } from "framer-motion";
import { HiCursorClick } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const WhyUs = () => {
  const reasons = [
    {
      icon: <IoSettingsOutline />,
      title: "Tailored Designs for Every Space",
      description:
        "We believe every space is unique, and so should its design. Our bespoke solutions are crafted to reflect your personality, needs, and lifestyle.",
    },
    {
      icon: <HiCursorClick />,
      title: "Attention to Every Detail",
      description:
        "From the finest furniture finishes to perfect decor accents, we meticulously focus on every detail to ensure flawless results.",
    },
    {
      icon: <HiCursorClick />,
      title: "Seamless Collaboration",
      description:
        "Your vision is our priority. We work closely with you at every step, combining your ideas with our expertise to create spaces you'll love.",
    },
    {
      icon: <IoSettingsOutline />,
      title: "Timeless Elegance",
      description:
        "Our designs go beyond trends to create spaces that stand the test of time, offering a perfect blend of style, comfort, and functionality.",
    },
  ];

  return (
    <section className="py-[100px] lg:py-[200px] px-[20px] lg:px-[50px] bg-peach-50 text-center">
      <div className=" text-center mb-[60px]">
        <p className="text-amber-800 text-sm font-medium mb-2 flex items-center justify-center">
          <span className="w-1 h-1 bg-amber-800 rounded-full mr-2"></span>Why
          Us?
        </p>
        <h2 className="text-[32px] sm:text-[42px] lg:text-[64px] md:text-6xl font-normal text-amber-900 lg:leading-[64px] lg:max-w-[680px] mx-auto">
          Elevate Your Space with Expertise & Elegance
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white py-[50px] px-[20px] rounded-lg shadow-lg text-[#8d493a]"
          >
            <div className="text-4xl  bg-[#f8ede3b3]  w-[40px] h-[40px] text-[20px] flex justify-center items-center mx-auto rounded-[5px] mb-[30px]">
              {reason.icon}
            </div>
            <h3 className="text-[22px] leading-6 font-normal  mb-2.5 max-w-[177px] mx-auto">
              {reason.title}
            </h3>
            <p className="max-w-[250px] mx-auto text-[14px] leading-[17px]">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
