import About from "@/components/Pages/HomePage/About/About";
import Banner from "@/components/Pages/HomePage/Banner/Banner";
import GetInTouch from "@/components/Pages/HomePage/GetInTouch/GetInTouch";
import News from "@/components/Pages/HomePage/News/NewsArticles";
import OurServices from "@/components/Pages/HomePage/OurServices/OurExpertise";
import ScrollImages from "@/components/Pages/HomePage/ScrollImages/ScrollImages";
import TransformingSpaces from "@/components/Pages/HomePage/TransformingSpaces/TransformingSpaces";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <TransformingSpaces />
      <ScrollImages />
      <OurServices />
      <GetInTouch />
      <News />
    </main>
  );
}
