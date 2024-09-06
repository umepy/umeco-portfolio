import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { useLocale } from "@/locales/local";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const t = useLocale();
  return (
    <>
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

          <button className="" onClick={() => setNavbarOpen(!navbarOpen)}>
            <span className="sr-only">Open main menu</span>
          </button>
          <Menu>
            <Menu.Button>
              <div className="inline-flex items-center p-2 ml-3 text-sm text-gray-200 border border-gray-200 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-40 w-56 mr-10 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="p-1">
                  <Menu.Item>
                    <div className="p-1 m-1 hover:bg-sky-100 rounded-md hover:transform hover:scale-105">
                      <button
                        type="button"
                        onClick={() => router.push("/")}
                        className="block w-full text-left"
                      >
                        <p className="text-lg">🏠 Home</p>
                      </button>
                    </div>
                  </Menu.Item>
                </div>
                <div className="p-1">
                  <Menu.Item>
                    <div className="p-1 m-1 hover:bg-sky-100 rounded-md hover:transform hover:scale-105">
                      <button
                        type="button"
                        onClick={() => router.push("/contact")}
                        className="block w-full text-left"
                      >
                        <p className="text-lg">🚀 Contact</p>
                      </button>
                    </div>
                  </Menu.Item>
                </div>
                <div className="p-1">
                  <Menu.Item>
                    <div className="p-1 m-1 hover:bg-sky-100 rounded-md hover:transform hover:scale-105">
                      <button
                        type="button"
                        onClick={() => router.push("/blog")}
                        className="block w-full text-left"
                      >
                        <p className="text-lg">📝 Blog</p>
                      </button>
                    </div>
                  </Menu.Item>
                </div>
                <div className="p-1">
                  <Menu.Item>
                    <div className="p-1 m-1 hover:bg-sky-100 rounded-md hover:transform hover:scale-105">
                      <button
                        type="button"
                        onClick={() => router.push("/")}
                        className="block w-full text-left"
                      >
                        <div className="flex flex-row">
                          <p className="text-lg">💬 Language</p>
                        </div>
                      </button>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

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
                <Link
                  href={router.asPath}
                  locale={t.locale == "en" ? "ja" : "en"}
                >
                  <p className="hover:scale-105 ">Language</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <>{navbarOpen ? <Link_menu /> : <></>}</>
    </>
  );
}

const Link_menu = () => {
  return (
    <>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          Profile
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          Settings
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          Messages
        </li>
        <li className="w-full px-4 py-2 rounded-b-lg">Download</li>
      </ul>
    </>
  );
};
