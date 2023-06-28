import { InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllBlogsData, getBlogData } from "@/utils/blog_render";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Link as ScrollLink } from "react-scroll";
import { NextSeo, ArticleJsonLd } from "next-seo";
import Link from "next/link";
import CodeBlock from "@/components/codeblock";

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
    "blogName",
    "content",
    "header_image",
  ]);
  return {
    props: {
      blog,
    },
  };
};

export default function BlogPage({ blog }: Props) {
  //@ts-ignore
  // table of contents
  const H2Link = ({ node, ...props }) => {
    return (
      <div className="w-full flex flex-col">
        <h2
          id={node.position?.start.line.toString()}
          style={{ marginBottom: 0 }}
        >
          {props.children}
        </h2>
        <span className="w-full border-t-2 border-sky-600"></span>
      </div>
    );
  };

  // generate description
  const blog_description = blog.content
    .replace(/#.*\n/, "")
    .replace(/\[.*\](.*)/g, "")
    .replace(/#|-|`|<[^>]*>/g, "")
    .replace(/[\n ]{2,}/g, "\n")
    .slice(0, 160);

  //@ts-ignore
  // do smooth scroll when clicking the table of contents
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

  return (
    <>
      <NextSeo
        title={blog.title}
        description={blog.title}
        openGraph={{
          title: blog.title,
          description: blog_description,
          url: blog.blogName,
          images: [{ url: `https://umeco.tokyo${blog.header_image}` }],
        }}
        twitter={{
          site: "@mumeco_ml",
          cardType: "summary",
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={blog.blogName}
        title={blog.title}
        description={blog_description}
        images={[`https://umeco.tokyo${blog.header_image}`]}
        datePublished={new Date(blog.date).toISOString()}
        authorName="umeco"
      />
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
                components={{ h2: H2Link, code: CodeBlock }}
              >
                {blog.content}
              </ReactMarkdown>
            </article>
          </div>
          <div className="sticky top-4 shadow-lg rounded-md bg-white p-6 shrink-0 hidden lg:block lg:visible w-56">
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
