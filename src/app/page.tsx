"use client";
import Banner from "@/components/Banner/Banner";
import Nav from "@/components/Header/Nav";
// import { animate } from "motion";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   animate(".box", { rotate: 360 }, { duration: 1 });
  // }, []);

  return (
    <div className="relative">
      <Nav />
      <Banner />
      {/* <h1>hello </h1>
      <div className="box"></div> */}
    </div>
  );
}
