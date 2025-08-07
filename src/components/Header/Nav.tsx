import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start 50px above its final position
        animate={{ opacity: 1, scale: 1, y: 0 }} // Animate to its final position (y: 0)
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="pt-[20px] sticky top-0 z-50 "
      >
        <div className="bg-[#f8ede3] max-w-[700px] mx-auto flex justify-between items-center pt-[5px] pr-[5px] pb-[5px] pl-[20px] rounded-md">
          <Link href="/" className="font-bold text-[#8d493a] text-[20px]">
            Framer
          </Link>
          <nav>
            <ul className="flex gap-[30px] ">
              <li>
                <Link
                  href="/about"
                  className="font-semibold text-[#8d493a] font-[Archivo ]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="font-semibold text-[#8d493a]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/news" className="font-semibold text-[#8d493a]">
                  News
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Link href="/contactus" className="primary-btn">
              Contact us
            </Link>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Nav;
