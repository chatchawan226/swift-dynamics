"use client";


import type { Languages } from "@/libs/i18n/config";
import { defaultLanguage, ini18next } from "@/libs/i18n/config";

export default function InitialLanguage({ lang = defaultLanguage }: { lang?: Languages }) {
  ini18next(lang);

  return <></>;
}
