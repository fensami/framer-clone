"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Emma Collins",
      role: "Creative Director",
      image:
        "https://framerusercontent.com/images/VHjVat8amQI84VmcuqK0CulTk4.jpeg",
    },
    {
      name: "Liam Bennett",
      role: "Lead Furniture Designer",
      image:
        "https://framerusercontent.com/images/or08AT1s7Gsd7r3cBxIPClE1qXo.jpeg",
    },
    {
      name: "Sophia Turner",
      role: "Interior Stylist",
      image:
        "https://framerusercontent.com/images/ZkiObwy3gtgUC1r32SlsIZYE.jpeg",
    },
    {
      name: "Oliver Harris",
      role: "Space Planner",
      image:
        "https://framerusercontent.com/images/6x4VB4KCen6shYoZmn4SlxHHg.jpeg?scale-down-to=1024",
    },
    {
      name: "Isabella Reed",
      role: "Lighting Specialist",
      image:
        "https://framerusercontent.com/images/qLpYxt2t3D25n4MxgyGnnbOX2o.jpeg",
    },
    {
      name: "Ethan Wright",
      role: "Client Experience Manager",
      image:
        "https://framerusercontent.com/images/iy4Yjrt6EfSEVReGjIS5qf5vc.jpeg?scale-down-to=1024",
    },
  ];
  return (
    <section className=" px-4 md:px-6 lg:px-8 xl:px-12 py-[200px]">
      <div className=" text-center mb-[60px]">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-amber-800 text-sm font-medium mb-2 flex items-center justify-center"
        >
          <span className="w-1 h-1 bg-amber-800 rounded-full mr-2"></span>Our
          Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[32px] sm:text-[42px] lg:text-[64px] md:text-6xl font-normal text-amber-900 lg:leading-[64px] lg:max-w-[575px] mx-auto"
        >
          Meet the Visionaries Behind Troscán
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: index * 0.5, delay: index * 0.5 }}
            className="bg-white rounded-[10px] shadow-lg "
          >
            <div className="relative h-[496px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="w-full object-cover rounded-t-lg "
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#8d493a]">
                {member.name}
              </h3>
              <p className="text-[#8d493a]">{member.role}</p>
              <button className="primary-btn v2 mt-5">Contact</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
