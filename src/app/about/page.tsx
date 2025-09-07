import AwardsRecognition from "@/components/Pages/AboutPage/AwardsRecognition/AwardsRecognition";
import CraftingTimeless from "@/components/Pages/AboutPage/CraftingTimeless/CraftingTimeless";
import OurApproach from "@/components/Pages/AboutPage/OurApproach/OurApproach";
import WhyUs from "@/components/Pages/AboutPage/WhyUs/WhyUs";
import GetInTouch from "@/components/Pages/HomePage/GetInTouch/GetInTouch";
import News from "@/components/Pages/HomePage/News/NewsArticles";
import OurServices from "@/components/Pages/HomePage/OurServices/OurExpertise";
import OurTeam from "@/components/Pages/HomePage/OurTeam/OurTeam";
import React from "react";

const page = () => {
  return (
    <div>
      <CraftingTimeless />
      <OurApproach />
      <OurTeam />
      <OurServices />
      <WhyUs />
      <GetInTouch />
      <AwardsRecognition />
      <News />
    </div>
  );
};

export default page;
