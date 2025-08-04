import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="absolute top-0 z-[-1]">
      <Image
        src="https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg"
        width={100}
        height={100}
        alt=""
      />
      <img
        src="https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg"
        alt=""
      />
    </div>
  );
};

export default Banner;
