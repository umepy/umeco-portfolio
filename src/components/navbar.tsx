import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-sky-500 p-5">
      <div className="container flex flex-nowrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/cat_icon_128.png"
            alt="umeco logo"
            width={180}
            height={180}
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold ml-2 text-gray-50">
            umeco&apos;s portfolio
          </span>
        </Link>
        <div className="hidden w-full  md:block md:w-auto">
          <ul className="flex flex-row items-start justify-start p-4 mt-4 text-gray-50 font-bold md:space-x-8 md:mt-0 md:text-lg ">
            <li>
              <Link href="/">
                <p className="hover:scale-105 ">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:scale-105 ">Contact</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p className="hover:scale-105 ">Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className="hover:scale-105 ">Language</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
