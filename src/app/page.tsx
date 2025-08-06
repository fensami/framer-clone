"use client";
import Banner from "@/components/Banner/Banner";
import Nav from "@/components/Header/Nav";
// import { animate } from "motion";
// import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  // useEffect(() => {
  //   animate(".box", { rotate: 360 }, { duration: 1 });
  // }, []);

  return (
    <main>
      <div className="relative h-screen w-full">
        <Nav />
        <Banner />
      </div>
      <div>
        <h1>hello</h1>
        <div className="block">
          <motion.h1
            className="text-7xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // onViewportEnter={(entry) => console.log(entry.isIntersecting)}
            // layoutScroll
            // style={{ overflow: "scroll" }}
            // initial={{ x: 0, y: 0 }}
            // whileInView={{ x: 100, y: 100 }}
            // transition={{ duration: 1, delay: 0.5 }}
            // // viewport={{ once: false, amount: 0.5 }}
            // viewport={{ rootMargin: "0px", once: false, amount: 0.5 }}
          >
            Hello World
          </motion.h1>
        </div>
        <h1>hello</h1>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
        <h2>a;lskjdflkj</h2>
      </div>
    </main>
  );
}
