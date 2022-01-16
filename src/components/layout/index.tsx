import React, { useEffect, useRef } from "react";
import { LayoutProps } from "./types";
import { Header } from "@components/header";
import Footer from "@components/footer";
import { arrowUp } from "@utils/svgIcons";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollRef = useRef<any>();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const _documentHeight = window.innerHeight;
    if (currentScrollY > _documentHeight / 2) {
      scrollRef.current.classList.add("show");
    } else {
      scrollRef.current.classList.remove("show");
    }
  };
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col overflow-hidden body-wrapper">
      <Header />
      {/* <Sidebar /> */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main className="">{children}</main>
      </div>
      <Footer />
      <div
        ref={scrollRef}
        className="scrollup  cursor-pointer flex justify-center items-center"
        onClick={handleScrollTop}
      >
        <div
          className="w-5 h-5 flex justify-center items-center "
          // style={{ width: 32, height: 32 }}
        >
          {arrowUp}
        </div>
      </div>
    </div>
  );
};

export default Layout;
