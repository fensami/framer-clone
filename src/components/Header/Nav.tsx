import Link from "next/link";

const Nav = () => {
  return (
    <>
      <header className="pt-[20px]">
        <div className="bg-[#f8ede3] max-w-[700px] mx-auto flex justify-between items-center pt-[5px] pr-[5px] pb-[5px] pl-[20px]">
          <Link href="/">Framer</Link>
          <nav>
            <ul className="flex gap-[30px] ">
              <li>
                <Link href="/about" className="font-semibold text-[#8d493a]">
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
            <button className="primary-btn">Contact Us</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
