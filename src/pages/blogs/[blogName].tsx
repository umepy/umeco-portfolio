import { InferGetStaticPropsType } from "next";
import { getAllBlogsData, getBlogData } from "@/utils/blog_render";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const blogs = getAllBlogsData(["blogName"]);
  const paths = blogs.map((blog) => {
    return {
      params: {
        blogName: blog.blogName,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const blog = getBlogData(params.blogName, [
    "title",
    "date",
    "slug",
    "content",
  ]);
  return {
    props: {
      blog,
    },
  };
};

export default function BlogPage({ blog }: Props) {
  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <>{blog.content}</>
      test
    </>
  );
}
