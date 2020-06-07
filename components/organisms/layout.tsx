import React from "react";
import { Header, HeaderProps } from "../molecules";
export const Layout: React.FC<{
  header: HeaderProps;
}> = ({ children, header }) => (
  <div className="bg-gray-200 font-noto">
    <Header {...header} />
    <div className="container mx-auto space-y-5 p-5">{children}</div>
  </div>
);
