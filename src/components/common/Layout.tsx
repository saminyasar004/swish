// src/components/common/Layout.tsx
import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <>{children || <Outlet />}</>;
};

export default Layout;