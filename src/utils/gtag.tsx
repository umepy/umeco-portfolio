import Script from "next/script";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return;
  if (typeof window !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const GAScript = () => (
  <>
    {GA_TRACKING_ID && (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');`,
          }}
        />
      </>
    )}
  </>
);
