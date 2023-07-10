"use client";

import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import ScrollToTop from "@/src/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [langStore, setLangstore] = useLocalStorage<string>(`lang`, "es");

  return (
    <html suppressHydrationWarning lang={langStore}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <Providers lang={langStore} setLang={setLangstore}>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import getLanguage from "../../messages";
import { useState } from "react";
import useLocalStorage from "../components/utils/useLocalStorage";
