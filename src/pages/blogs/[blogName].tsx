import { InferGetStaticPropsType } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogData, getAllBlogsData, getBlogData } from "@/utils/blog_render";
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
} from "react-share";
import { useRouter } from "next/router";
import { useLocale } from "@/locales/local";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const blogs_ja = getAllBlogsData(["blogName"], "ja");
  const blogs_en = getAllBlogsData(["blogName"], "en");
  const paths_ja = blogs_ja.map((blog) => {
    return {
      params: {
        blogName: blog.blogName,
      },
      locale: "ja",
    };
  });
  const paths_en = blogs_en.map((blog) => {
    return {
      params: {
        blogName: blog.blogName,
      },
      locale: "en",
    };
  });
  const paths = paths_ja.concat(paths_en);
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: any) => {
  let blog = getBlogData(
    context.params.blogName,
    ["title", "date", "blogName", "content", "header_image"],
    context.locale || "ja"
  );
  if (blog === null) {
    blog = getBlogData(
      context.params.blogName,
      ["title", "date", "blogName", "content", "header_image"],
      "ja"
    );
  }
  if (blog === null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
};

export default function BlogPage({ blog }: Props) {
  const { t } = useLocale();
  const router = useRouter();

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
    const url =
      router.locale !== "ja"
        ? `https://umeco.jp/${router.locale}${router.asPath}`
        : `https://umeco.jp${router.asPath}`;
    return (
      <>
        <h1 className="text-2xl font-bold">{props.children}</h1>
        <div className="flex flex-row justify-start">
          <TwitterShareButton
            url={url}
            title={blog.title}
            related={["mumeco_ml"]}
            className="mx-1 hover:transform hover:scale-110"
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <HatenaShareButton
            url={url}
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
                `https://www.linkedin.com/shareArticle/?url=${url}` +
                  "&title=" +
                  blog.title +
                  "&summary=" +
                  blog_description +
                  "&source=umeco.jp",
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
          images: [{ url: `https://umeco.jp${blog.header_image}` }],
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
        images={[`https://umeco.jp${blog.header_image}`]}
        datePublished={new Date(blog.date).toISOString()}
        authorName="umeco"
      />
      <div className="bg-gray-100">
        <div className="flex flex-row space-x-0 md:space-x-6 items-start justify-center py-10 md:px-4">
          <div className="shadow-lg rounded-md bg-white p-6 min-w-0 max-w-6xl">
            <Link href="/blog">
              <span className="hover:bg-gray-200 rounded-lg px-2">
                {t.BLOG_POSTS}
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
          <div className="sticky top-4 shadow-lg rounded-md bg-white p-6 shrink-0 hidden lg:block lg:visible w-56 xl:w-auto xl:min-w-40">
            <div className="flex justify-center">
              <p className="text-lg">{t.BLOG_TABLEOFCONTENTS}</p>
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
