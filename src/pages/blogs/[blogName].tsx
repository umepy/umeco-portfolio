import { InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllBlogsData, getBlogData } from "@/utils/blog_render";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Link as ScrollLink } from "react-scroll";
import { MyHead, HeadProps } from "@/components/myhead";
import Link from "next/link";

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
  //@ts-ignore
  const H2Link = ({ node, ...props }) => {
    return <h2 id={node.position?.start.line.toString()}>{props.children}</h2>;
  };
  //@ts-ignore
  const ankerLink = ({ node, ...props }) => {
    return (
      <>
        <ScrollLink
          to={node.position?.start.line.toString()}
          smooth={true}
          className="hover:text-blue-500 hover:cursor-pointer"
        >
          {props.children}
        </ScrollLink>
        <br />
      </>
    );
  };
  const headprops: HeadProps = {
    title: `${blog.title}`,
    description: `${blog.title}`,
  };
  return (
    <>
      <MyHead {...headprops} />
      <div className="bg-gray-100">
        <div className="flex flex-row space-x-0 md:space-x-6 items-start justify-center py-10 md:px-4">
          <div className="shadow-lg rounded-md bg-white p-6 min-w-0 ">
            <Link href="/blog">
              <span className="hover:bg-gray-200 rounded-lg px-2">
                🏠ブログ一覧
              </span>
            </Link>
            <article className="prose prose-sm sm:prose prose-h2:after:prose-hr prose-code:before:hidden prose-code:after:hidden shrink pt-2">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{ h2: H2Link }}
              >
                {blog.content}
              </ReactMarkdown>
            </article>
          </div>
          <div className="sticky top-4 shadow-lg rounded-md bg-white p-6 shrink-0 hidden md:block md:visible w-40">
            <div className="flex justify-center">
              <p className="text-lg">目次</p>
            </div>
            <div className="border-solid border-gray-200 border mb-4" />
            <ReactMarkdown
              allowedElements={["h2"]}
              components={{ h2: ankerLink }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}
