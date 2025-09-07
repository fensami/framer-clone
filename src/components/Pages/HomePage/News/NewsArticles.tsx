"use client";

import Image from "next/image";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    date: "February 5, 2022",
    title: "The Art of Minimalist Interiors",
    description: "Less is More: Designing Spaces That Speak Simplicity",
    image:
      "https://framerusercontent.com/images/bZdh0mETTRfnrDNMinaVWCZqhqs.jpeg",
    slug: "art-of-minimalist-interiors",
  },
  {
    id: 2,
    date: "February 22, 2022",
    title: "Timeless Furniture Pieces Every Home Needs",
    description: "Building a Home That Never Goes Out of Style",
    image:
      "https://framerusercontent.com/images/HXD1LGGH4sdyu2AfKcILOBWjBM.jpeg",
    slug: "timeless-furniture-pieces",
  },
  {
    id: 3,
    date: "January 21, 2023",
    title: "Psychology in Interior Design",
    description: "Shaping Emotions Through Thoughtful Color Choices",
    image:
      "https://framerusercontent.com/images/xzFrK8RnnKFFvFnsttyDo4BcCE.jpeg",
    slug: "psychology-interior-design",
  },
];

export default function News() {
  return (
    <section className="py-[100px] lg:py-[200px] px-[20px] lg:px-[50px] bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap mb-12 ">
        <div>
          <p className="text-amber-800 text-sm font-medium mb-2 flex items-center">
            <span className="w-1 h-1 bg-amber-800 rounded-full mr-2"></span>
            News
          </p>
          <h2 className="text-[32px] sm:text-[42px] lg:text-[64px] md:text-6xl font-normal text-amber-900 leading-tight lg:max-w-3/5">
            Stay Inspired with Interior Trends
          </h2>
        </div>
        <Link
          href="/news"
          className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 text-sm font-medium"
        >
          View All News
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <article key={article.id} className="group cursor-pointer">
            <Link href={`/news/${article.slug}`}>
              {/* Image Container */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
}
