"use client";
import React, { useEffect } from "react";
import { Button, Select } from "antd";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Languages, ini18next } from "@/libs/i18n/config";
import { setCookies } from "cookies-next";
import "./globals.css";

const Home: React.FC = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const handleChange = (value: Languages) => {
    console.log(value, "value");
    ini18next(value);
    i18n.changeLanguage(value as Languages);
    setCookies("lang", value);
  };
  return (
    <div className="App">
      123455677 12323
      <Select
        defaultValue={i18n.language as Languages}
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "th", label: "ภาษาไทย" },
          { value: "en", label: "English" },
        ]}
      />
      <Button type="primary" onClick={() => router.push("/test1")}>
        {t("test1")}
      </Button>
      <Button type="primary" onClick={() => router.push("/test2")}>
        {t("test2")}
      </Button>
    </div>
  );
};

export default Home;
