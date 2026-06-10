"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Lang } from "./translations";

type LangCtx = { lang: Lang; toggle: () => void };

const LangContext = createContext<LangCtx>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("geeta_lang") as Lang | null;
    if (saved === "hi" || saved === "en") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((l) => {
      const next = l === "en" ? "hi" : "en";
      localStorage.setItem("geeta_lang", next);
      return next;
    });
  };

  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
