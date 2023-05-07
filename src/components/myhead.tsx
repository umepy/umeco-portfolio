import Head from "next/head";
import { NextSeo, DefaultSeo } from "next-seo";

export interface HeadProps {
  title: string;
  description: string;
  og_titles?: string;
  og_description?: string;
  og_type?: string;
  og_url?: string;
  og_image?: string;
  og_locale?: string;
  og_site_name?: string;
}

export function DefaultHead() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <DefaultSeo
        defaultTitle="umeco's portfolio"
        description="AIやIT関連の話題を発信をしているポートフォリオサイトです。"
        openGraph={{
          type: "website",
          title: "umeco's portfolio",
          description:
            "AIやIT関連の話題を発信をしているポートフォリオサイトです。",
          url: "https://umeco.tokyo",
          site_name: "umeco's portfolio",
          images: [
            {
              url: "https://umeco.tokyo/cat_icon_128.png",
              width: 128,
              height: 128,
              alt: "umeco's portfolio image alt",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          site: "@mumeco_ml",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
