import Image from "next/image";
import Link from "next/link";
import assert from "assert";
import { FC } from "react";

interface Props {
  title: string;
  date: string;
  blogName: string;
  header_image: string;
}

const BlogCard: FC<Props> = ({ title, date, blogName, header_image }) => {
  assert(
    !isNaN(new Date(date).getTime()),
    "Error occur when parsing the date of blogs, please check the blog metadata."
  );
  const dateObj = new Date(date);
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const blogLink = "/blogs/" + blogName;
  assert(header_image !== undefined, "header_image is undefined");
  const headerImage =
    header_image === "" ? "/blog/pc_meadow.png" : header_image;
  return (
    <>
      <Link href={blogLink} locale="ja">
        <div className="shadow-md bg-white rounded-md min-w-[80%] sm:min-w-[5%] m-4 w-72 h-72 shrink-0 hover:transform hover:scale-105 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
          <div className="flex flex-col h-full">
            <Image
              className="rounded-t-lg object-cover max-h-40"
              src={headerImage}
              alt=""
              width={1000}
              height={600}
            />
            <p className="text-lg font-bold pt-2 px-2">{title}</p>
            <p className="text-sm text-gray-500 p-2 mt-auto">
              {year}年 {month}月 {day}日
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
