import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#8d493a]">
      <div className="pt-[100px] px-[50px]">
        <h2 className="text-center text-[20px] font-bold text-[#f8ede3]">
          <Link href="/">Framer</Link>
        </h2>
        <div className="flex gap-[100px]  flex-wrap  justify-center py-[77px] text-center">
          <div>
            <h2 className="mb-[11px] text-[#d7bbb0]">Sitemap</h2>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-[#f7ecde] hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-[11px] text-[#d7bbb0]">Sitemap</h2>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-[#f7ecde] hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-[11px] text-[#d7bbb0]">Sitemap</h2>
            <ul>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-[#f7ecde] hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  Grainient
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  Inspirux
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-[28px] font-normal text-white hover:text-[#d7bbb0] transition-all duration-300 ease-in-out"
                >
                  Store
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white">
          <p className="text-[#d7bbb0] py-[30px] text-center">
            © 2025, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
