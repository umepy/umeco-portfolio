import { InferGetStaticPropsType } from "next";
import { getAllBlogsData } from "@/utils/blog_render";
import BlogCard from "@/components/blog_card";
import { NextSeo } from "next-seo";
import { useLocale } from "@/locales/local";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const blogs = getAllBlogsData(
    ["title", "date", "blogName", "header_image"],
    locale
  );
  return {
    props: {
      blogs,
    },
  };
};

export default function BlogPage({ blogs }: Props) {
  const { t } = useLocale();
  const { locale } = useLocale();
  return (
    <>
      <NextSeo title={t.BLOG_SEO_TITLE} description={t.BLOG_SEO_DESCRIPTION} />
      <div className="flex flex-wrap justify-center bg-gray-100">
        <div className="flex justify-center basis-full">
          <p className="text-2xl py-4">{t.BLOG_HEADER}</p>
        </div>
        <div className="flex flex-wrap items-start justify-center lg:w-8/12">
          {blogs.map((blog) => {
            return (
              <BlogCard
                title={blog.title}
                date={blog.date}
                blogName={blog.blogName}
                key={blog.blogName}
                header_image={blog.header_image}
                locale={locale!}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
