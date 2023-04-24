import Head from "next/head";

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

export function MyHead(props: HeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        property="og:title"
        content={props.og_titles ? props.og_titles : props.title}
      />
      <meta
        property="og:description"
        content={
          props.og_description ? props.og_description : props.description
        }
      />
      <meta
        property="og:type"
        content={props.og_type ? props.og_type : "website"}
      />
      <meta
        property="og:url"
        content={props.og_url ? props.og_url : "https://umeco.tokyo"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={props.og_titles ? props.og_titles : props.title}
      />
      <meta
        name="twitter:description"
        content={
          props.og_description ? props.og_description : props.description
        }
      />
      <meta
        name="twitter:image"
        content={props.og_image ? props.og_image : ""}
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  );
}
