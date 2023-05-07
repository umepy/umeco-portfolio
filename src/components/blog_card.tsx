import Image from "next/image";
import Link from "next/link";
import assert from "assert";
import { FC } from "react";

interface Props {
  title: string;
  date: string;
  blogName: string;
}

const BlogCard: FC<Props> = ({ title, date, blogName }) => {
  assert(
    !isNaN(new Date(date).getTime()),
    "Error occur when parsing the date of blogs, please check the blog metadata."
  );
  const dateObj = new Date(date);
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const blogLink = "/blogs/" + blogName;
  return (
    <>
      <Link href={blogLink}>
        <div className="shadow-md bg-white rounded-md min-w-[80%] sm:min-w-[5%] p-4 m-4 hover:transform hover:scale-105 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
          <Image
            className="rounded-t-lg"
            src="/cat_icon_128.png"
            alt=""
            width={180}
            height={180}
          />

          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm text-gray-500">
            {year}年 {month}月 {day}日
          </p>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
