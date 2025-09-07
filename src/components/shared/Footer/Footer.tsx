import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#8d493a]">
      <div className="pt-16 md:pt-20 lg:pt-[100px] px-4 md:px-8 lg:px-12 xl:px-[50px]">
        <h2 className="text-center text-lg md:text-xl lg:text-[20px] font-bold text-[#f8ede3]">
          <Link href="/">Framer</Link>
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-20 xl:gap-[100px] flex-wrap justify-center py-12 md:py-16 lg:py-[77px] text-center">
          <div>
            <h2 className="mb-2 md:mb-3 lg:mb-[11px] text-[#d7bbb0] text-sm md:text-base">
              Sitemap
            </h2>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#f7ecde] hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 md:mb-3 lg:mb-[11px] text-[#d7bbb0] text-sm md:text-base">
              Social
            </h2>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#f7ecde] hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 md:mb-3 lg:mb-[11px] text-[#d7bbb0] text-sm md:text-base">
              Resources
            </h2>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-[#f7ecde] hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  Grainient
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  Inspirux
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-lg md:text-xl lg:text-2xl xl:text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out block"
                >
                  Store
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white">
          <p className="text-[#d7bbb0] py-6 md:py-8 lg:py-[30px] text-center text-sm md:text-base">
            © 2025, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
