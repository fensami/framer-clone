"use client";

import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    date: "January 2, 2024",
    title: "How to Choose the Perfect Lighting for Every Room",
    description: "Illuminating Spaces with Style and Purpose",
    image:
      "https://framerusercontent.com/images/J9WUBD0d1gg7X5rmW8sz2Z376mQ.jpeg",
    slug: "how-to-choose-perfect-lighting",
  },
  {
    id: 2,
    date: "August 22, 2023",
    title: "The Rise of Minimalism in Modern Homes",
    description: "Less Clutter, More Purpose in Interior Design",
    image:
      "https://framerusercontent.com/images/JNg12r2XAvXXvwQS8ZeRTfcfpI.jpeg",
    slug: "rise-of-minimalism",
  },
  {
    id: 3,
    date: "March 17, 2023",
    title: "The Art of Layering Textures in Interior Design",
    description: "Creating Depth and Warmth Through Material Harmony",
    image:
      "https://framerusercontent.com/images/8a7hE6znKIBRH3lXUx86gimLzmM.jpeg",
    slug: "art-of-layering-textures",
  },
  {
    id: 4,
    date: "February 5, 2022",
    title: "The Art of Minimalist Interiors",
    description: "Less is More: Designing Spaces That Speak Simplicity",
    image:
      "https://framerusercontent.com/images/xzFrK8RnnKFFvFnsttyDo4BcCE.jpeg",
    slug: "art-of-minimalist-interiors",
  },
  {
    id: 5,
    date: "February 22, 2022",
    title: "Timeless Furniture Pieces Every Home Needs",
    description: "Building a Home That Never Goes Out of Style",
    image:
      "https://framerusercontent.com/images/HXD1LGGH4sdyu2AfKcILOBWjBM.jpeg",
    slug: "timeless-furniture-pieces",
  },
  {
    id: 6,
    date: "January 21, 2023",
    title: "Psychology in Interior Design",
    description: "Shaping Emotions Through Thoughtful Color Choices",
    image:
      "https://framerusercontent.com/images/bZdh0mETTRfnrDNMinaVWCZqhqs.jpeg",
    slug: "psychology-interior-design",
  },
];

const NewsInner = () => {
  return (
    <section className="py-[100px] lg:py-[200px] px-[20px] lg:px-[50px] bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <h2 className="text-[#8d493a] text-center md:text-[96px] md:leading-[96px] font-normal mb-[40px] lg:mb-[80px] max-w-[830px] mx-auto">
        Expert Insights and Design Inspiration
      </h2>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 gap-y-[40px]">
        {newsArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <Link href={`/news/${article.slug}`}>
              {/* Image Container */}
              <div className="relative h-[506px] mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
              </div>

              {/* Content */}
              <div>
                {/* Date */}
                <p className="text-amber-700 text-sm font-normal flex items-center">
                  <span className="w-1 h-1 bg-amber-700 rounded-full mr-2"></span>
                  {article.date}
                </p>

                {/* Title */}
                <h3 className="text-[22px]  font-normal text-amber-900 leading-tight group-hover:text-amber-800 transition-colors duration-300 mb-[10px] lg:max-w-2/4">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-amber-700 text-sm text-[14px] leading-relaxed">
                  {article.description}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsInner;
