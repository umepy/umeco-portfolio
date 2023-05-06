import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GAScript, pageview } from "@/utils/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Google Analytics Settings
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GAScript />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
