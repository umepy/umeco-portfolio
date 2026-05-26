import Head from "next/head";
import { DefaultSeo } from "next-seo";

export function DefaultHead() {
  return (
    <>
      <Head>
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
          url: "https://umeco.jp",
          site_name: "umeco's portfolio",
          images: [
            {
              url: "https://umeco.jp/cat_icon_128.png",
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
