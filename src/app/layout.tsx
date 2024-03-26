import React from "react";

import { cookies } from "next/headers";
import InitialLanguage from "./components/initialLanguage";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Languages } from "@/libs/i18n/config";

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value as Languages;
  return (
    <html lang="en">
      <body>
        <InitialLanguage lang={lang} />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
