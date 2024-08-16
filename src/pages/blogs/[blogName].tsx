import { InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllBlogsData, getBlogData } from "@/utils/blog_render";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { Link as ScrollLink } from "react-scroll";
import { NextSeo, ArticleJsonLd } from "next-seo";
import Link from "next/link";
import CodeBlock from "@/components/codeblock";
import {
  TwitterIcon,
  TwitterShareButton,
  HatenaIcon,
  HatenaShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

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
  const H2Link = ({ node, ...props }: any) => {
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

  //@ts-ignore
  const TitleWithShareButton = ({ ...props }) => {
    return (
      <>
        <h1 className="text-2xl font-bold">{props.children}</h1>
        <div className="flex flex-row justify-start">
          <TwitterShareButton
            url={"https://umeco.tokyo/blogs/" + blog.blogName}
            title={blog.title}
            related={["mumeco_ml"]}
            className="mx-1 hover:transform hover:scale-110"
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <HatenaShareButton
            url={"https://umeco.tokyo/blogs/" + blog.blogName}
            title={blog.title}
            className="mx-1 hover:transform hover:scale-110"
          >
            <HatenaIcon size={40} round />
          </HatenaShareButton>
          <a
            href="#"
            className="mx-1 hover:transform hover:scale-110"
            onClick={() => {
              const sw = screen.width / 2;
              const sh = screen.height / 2;
              window.open(
                "https://www.linkedin.com/shareArticle/?url=https://umeco.tokyo/blogs/" +
                  blog.blogName +
                  "&title=" +
                  blog.title +
                  "&summary=" +
                  blog_description +
                  "&source=umeco.tokyo",
                "",
                "width=500,height=500,scrollbars=yes,left=" + sw + ",top=" + sh
              );
            }}
          >
            <LinkedinIcon size={40} round />
          </a>
        </div>
      </>
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
  const ankerLink = ({ node, ...props }: any) => {
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
          <div className="shadow-lg rounded-md bg-white p-6 min-w-0 max-w-6xl">
            <Link href="/blog">
              <span className="hover:bg-gray-200 rounded-lg px-2">
                🏠ブログ一覧
              </span>
            </Link>
            <article className="prose max-w-none prose-h2:after:prose-hr prose-code:before:hidden prose-code:after:hidden shrink pt-2">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                components={{
                  h2: H2Link,
                  code: CodeBlock,
                  h1: TitleWithShareButton,
                }}
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
              rehypePlugins={[rehypeRaw]}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}
