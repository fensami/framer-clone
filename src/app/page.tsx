import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Nav from "@/components/Header/Nav";
import NewsArticles from "@/components/NewsArticles/NewsArticles";
import OurExpertise from "@/components/OurExpertise/OurExpertise";
import ScrollImages from "@/components/ScrollImages/ScrollImages";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen w-full z-1">
        <Nav />
        <Banner />
      </div>
      <About />
      <ScrollImages />
      <OurExpertise />
      <GetInTouch />
      <NewsArticles />
      <Footer />
    </main>
  );
}
