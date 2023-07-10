"use client";

import { ThemeProvider } from "next-themes";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { LanguageProvider } from "../components/context/useLanguage";

type Props = {
  lang: string
  setLang: Dispatch<SetStateAction<string>>
  children: React.ReactNode;
}
export function Providers(props: Props) {
  const { lang, setLang, children } = props;
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <LanguageProvider lang={lang} setLang={setLang}>
      {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
