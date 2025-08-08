// "use client";
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Nav from "@/components/Header/Nav";
import NewsArticles from "@/components/NewsArticles/NewsArticles";
import OurExpertise from "@/components/OurExpertise/OurExpertise";
import ScrollImages from "@/components/ScrollImages/ScrollImages";

export default function Home() {
  // useEffect(() => {
  //   animate(".box", { rotate: 360 }, { duration: 1 });
  // }, []);

  return (
    <main>
      <div className="relative h-screen w-full z-1">
        <Nav />
        <Banner />
      </div>
      <About />
      <OurExpertise />
      {/* <div>
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
      </div> */}
      {/* <OverlappingCards /> */}
      {/* <ImageGrid /> */}

      <ScrollImages />
      <OurExpertise />
      <GetInTouch />
      <NewsArticles />
      <Footer />
    </main>
  );
}
