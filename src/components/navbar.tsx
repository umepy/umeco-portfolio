export default function Navbar() {
  return (
    <nav className="bg-sky-500 p-5">
      <div className="container flex flex-nowrap items-center justify-between mx-auto">
        <a href="https://umeco.tokyo" className="flex items-center">
          <img src="cat_icon_128.png" alt="umeco logo" className="h-8 w-8" />
          <span className="text-2xl font-bold ml-2 text-gray-50">
            umeco&apos;s portfolio
          </span>
        </a>
        <div className="hidden w-full  md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>Home</li>
            <li>Contact</li>
            <li>Language</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
