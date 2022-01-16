import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { configuration } from "../util/configuration";
export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    if (window.innerWidth < 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <NextSeo
        title={configuration.title}
        description={configuration.description}
      />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <div
          className={`${
            isMobile
              ? "bg-cover h-screen overflow-hidden"
              : "bg-cover h-screen overflow-hidden"
          } px-7 py-7`}
          style={{
            backgroundImage: isMobile
              ? "url('/static/images/wallpaper.jpg')"
              : "url('/static/images/707160.jpg')",
          }}
        >
          <div className="fadeIn">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
