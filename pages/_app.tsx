import "@/styles/globals.css";

import { Navbar } from "@/ui";
import type { AppProps } from "next/app";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
