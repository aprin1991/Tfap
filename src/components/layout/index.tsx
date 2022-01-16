import React, { useEffect, useRef, useState } from "react";
import { LayoutProps } from "./types";
import { Header } from "@components/header";
import Footer from "@components/footer";
import { arrowUp } from "@utils/svgIcons";
import Sidebar from "@components/sidebar";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollRef = useRef<any>();
  const [showMenu, setShowMenu] = useState(false);
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
    <div>
      <div
        className={`flex flex-col overflow-hidden body-wrapper ${
          showMenu ? "transform-body" : ""
        }`}
      >
        <Header
          show={showMenu}
          menuToggle={(show: boolean) => setShowMenu(show)}
        />
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
      <Sidebar show={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
};

export default Layout;
