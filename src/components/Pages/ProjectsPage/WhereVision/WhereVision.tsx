import Image from "next/image";
import React from "react";

const WhereVision = () => {
  // Array of gallery items
  const galleryItems = [
    {
      src: "https://framerusercontent.com/images/cC9LIRH5Ao9H0pL925zPquahGI.jpeg",
      alt: "Traditional Mastery",
      title: "Where Tradition Meets Mastery",
      description: "Blending Tradition with Modern Elegance",
    },
    {
      src: "https://framerusercontent.com/images/bzAxUIZb76NAbMbbTCNRKvwep8.jpeg",
      alt: "Modern Elegance",
      title: "Modern Elegance in Every Room",
      description: "Redefining spaces with timeless style and innovation.",
    },
    {
      src: "https://framerusercontent.com/images/AkcINRgdRJWagCIMhlfAa6SCpcs.jpeg",
      alt: "Modern Elegance",
      title: "Modern Elegance in Every Room",
      description: "Redefining spaces with timeless style and innovation.",
    },
    {
      src: "https://framerusercontent.com/images/h8rMLidvtxgO37bgs0urvbSKFOk.jpeg",
      alt: "Modern Elegance",
      title: "Modern Elegance in Every Room",
      description: "Redefining spaces with timeless style and innovation.",
    },
  ];

  return (
    <div className=" px-[20px] lg:px-[50px] py-[100px] lg:py-[200px]">
      <h2 className="text-[#8d493a] md:text-[96px] md:leading-[96px] font-normal mb-[40px] lg:mb-[80px] max-w-[590px] mx-auto">
        Where Vision Meets Design
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="   ">
            <div className="relative h-[640px] ">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover h-[640px] rounded-lg"
              />
            </div>
            <div className="pt-5 text-[#8d493a]">
              <p className=" text-[28px] leading-[34px] font-normal">
                {item.title}
              </p>
              <p className=" text-[16px] leading-[22px] font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhereVision;
