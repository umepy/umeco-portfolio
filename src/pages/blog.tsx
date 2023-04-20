import { InferGetStaticPropsType } from "next";
import { getAllBlogsData } from "@/utils/blog_render";
import Image from "next/image";
import BlogCard from "@/components/blog_card";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const blogs = getAllBlogsData(["title", "date", "blogName"]);
  return {
    props: {
      blogs,
    },
  };
};

export default function BlogPage({ blogs }: Props) {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-gray-100">
        <div className="flex justify-center basis-full">
          <p className="text-4xl py-4">ブログ記事一覧</p>
        </div>
        <div className="flex flex-wrap items-start justify-center ">
          {blogs.map((blog) => {
            return BlogCard(blog.title, blog.date, blog.blogName);
          })}
        </div>
      </div>
    </>
  );
}

/*
<div key={blog.blogName} className="bg-gray-50">
<h1>{blog.title}</h1>
<p>{blog.date}</p>
</div>
*/