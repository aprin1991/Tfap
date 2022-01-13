import React from "react";
import { LayoutProps } from "./types";
import { Header } from "@components/header";
import Footer from "@components/footer";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col overflow-hidden body-wrapper">
      <Header />
      {/* <Sidebar /> */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main className="" style={{ backgroundColor: "rgb(246, 246, 247)" }}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
