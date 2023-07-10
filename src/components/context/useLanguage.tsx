"use client"
import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import getLanguage from "../../../messages";

interface ILanguageContext {
  content: any;
  lang: string;
  setLang: (value: string) => void
}

export const LanguageContext =
  createContext<ILanguageContext>(undefined);

interface ILanguageProvider {
  lang: string
  setLang: Dispatch<SetStateAction<string>>
  children: React.ReactNode;
}
export const LanguageProvider: React.FunctionComponent<
  ILanguageProvider
> = (props: ILanguageProvider) => {
  const { lang, setLang } = props;
  const [content, setContent] = useState<any>("");
  useEffect(() => {
    const text = getLanguage(lang);
    if (text) {
      setContent(JSON.parse(text));
    }
  }, [lang]);

  const valor: ILanguageContext = {
    content,
    lang,
    setLang
  };

  return <LanguageContext.Provider value={valor} {...props} />;
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return undefined;
    // throw new Error("no hay proveedor de expediente definido")
  }
  return context;
}
