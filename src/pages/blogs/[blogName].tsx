import { InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllBlogsData, getBlogData } from "@/utils/blog_render";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

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
      <div className="bg-gray-100">
        <div className="flex justify-center py-10">
          <div className="shadow-md rounded-md bg-white p-6">
            <article className="prose prose-h2:after:prose-hr prose-code:before:hidden prose-code:after:hidden">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {blog.content}
              </ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
