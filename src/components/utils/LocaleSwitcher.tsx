"use client";

import { ChangeEvent } from "react";
import { useLanguage } from "../context/useLanguage";

export default function LocaleSwitcher() {
  const { lang, setLang } = useLanguage();
  const languages = ["en", "es", "jp"];
  
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    setLang(event.target.value);
  }
  return (
    <label className={"relative inline-flex"}>
      <select
        className="py-3 pl-2 pr-6 appearance-none custom-select bg-transparent"
        value={lang}
        onChange={onSelectChange}
      >
        {languages.map((cur) => (
          <option
            key={cur}
            value={cur}
            className={"relative inline-flex dark:text-black"}
          >
            {cur}
          </option>
        ))}
      </select>
      <span className="absolute top-[8px] right-2 pointer-events-none">⌄</span>
    </label>
  );
}
