// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// export default function About() {
//   return (
//     <section className="py-[200px] px-[50px] bg-gradient-to-b from-amber-50 to-orange-50">
//       {/* <div className="block border"> */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
//         <div className="">
//           {/* Left Content */}
//           {/* <div className=""> */}
//           {/* About us label */}
//           <motion.p
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: false, amount: 0.7 }}
//             transition={{
//               duration: 0.5,
//               delay: 0.4,
//             }}
//             className="text-amber-800 text-sm font-medium flex items-center"
//           >
//             <span className="w-1 h-1 bg-amber-800 rounded-full mr-2"></span>
//             About us
//           </motion.p>

//           {/* Main Heading */}
//           <motion.h2
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: false, amount: 0.3 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.5,
//             }}
//             className="text-[64px] font-normal text-amber-900 leading-[64px]"
//           >
//             Where Spaces
//             <br />
//             <span className="text-amber-800">Inspire, and Design</span>
//             <br />
//             <span className="text-amber-800">Comes Alive</span>
//           </motion.h2>

//           {/* Description Paragraphs */}
//           <div className="  mt-[230px]">
//             <motion.p
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.5,
//               }}
//               className="text-[16px] font-normal text-[#8d493a] max-w-3/5 mb-[19px]"
//             >
//               At Troscán, we believe that every space has a story to tell. As a
//               premier furniture design and room decorating agency.
//             </motion.p>

//             <motion.p
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.5,
//               }}
//               className="text-[16px] font-normal text-[#8d493a] max-w-3/5 mb-[19px]"
//             >
//               Our expert team blends timeless craftsmanship with innovative
//               designs, ensuring each piece and layout reflects your unique taste
//               and lifestyle. Whether you re looking to reimagine your living
//               room.
//             </motion.p>
//             {/* CTA Button */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.5,
//               }}
//             >
//               <Link
//                 href="/about"
//                 className="inline-block bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg transition-all duration-300 text-sm font-medium hover:shadow-lg hover:scale-105"
//               >
//                 More About us
//               </Link>
//             </motion.div>
//           </div>
//           {/* </div> */}
//         </div>

//         {/* Right Image */}
//         <div className="relative">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: false, amount: 0.7 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.6,
//             }}
//             className="relative max-h-[763px] aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
//           >
//             <Image
//               src="https://framerusercontent.com/images/vJzsJOlbUK8qkA5xxZA18jSC6SI.jpeg?scale-down-to=1024"
//               alt="Modern living room with curved wooden coffee table and natural lighting"
//               fill
//               className="object-cover h-full w-full"
//               quality={90}
//               priority
//             />
//           </motion.div>

//           {/* Decorative elements */}
//           <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200/30 rounded-full blur-xl"></div>
//           <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl"></div>
//         </div>
//       </div>
//       {/* </div> */}
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 md:py-24 lg:py-32 xl:py-[200px] px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* About us label */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="text-amber-800 text-sm font-medium flex items-center mb-4 md:mb-6"
            >
              <span className="w-1 h-1 bg-amber-800 rounded-full mr-2"></span>
              About us
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-amber-900 leading-tight mb-8 md:mb-12 lg:mb-16 xl:mb-24"
            >
              Where Spaces
              <br />
              <span className="text-amber-800">Inspire, and Design</span>
              <br />
              <span className="text-amber-800">Comes Alive</span>
            </motion.h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="text-sm md:text-base font-normal text-[#8d493a] leading-relaxed"
              >
                At Troscán, we believe that every space has a story to tell. As
                a premier furniture design and room decorating agency.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                }}
                className="text-sm md:text-base font-normal text-[#8d493a] leading-relaxed"
              >
                Our expert team blends timeless craftsmanship with innovative
                designs, ensuring each piece and layout reflects your unique
                taste and lifestyle. Whether you re looking to reimagine your
                living room.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
            >
              <Link
                href="/about"
                className="inline-block bg-amber-800 hover:bg-amber-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 text-sm md:text-base font-medium hover:shadow-lg hover:scale-105"
              >
                More About us
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="relative h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px] aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="https://framerusercontent.com/images/vJzsJOlbUK8qkA5xxZA18jSC6SI.jpeg?scale-down-to=1024"
                alt="Modern living room with curved wooden coffee table and natural lighting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                quality={90}
                priority
              />
            </motion.div>

            {/* Decorative elements - Hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute -top-2 md:-top-4 -right-2 md:-right-4 w-16 md:w-24 h-16 md:h-24 bg-amber-200/30 rounded-full blur-xl"></div>
            <div className="hidden md:block absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-20 md:w-32 h-20 md:h-32 bg-orange-200/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
