import Link from "next/link";
import { hamburgerIcon } from "@utils/svgIcons";
import { useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";
interface IProps {
  show: boolean;
  menuToggle: Function;
}
export const Header: React.FC<IProps> = ({ show, menuToggle }) => {
  const containerRef = useRef(null);
  const [search, setSearch] = useState("");

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    show
      ? document.querySelector("body")?.classList.add("overflow-hidden")
      : document.querySelector("body")?.classList.remove("overflow-hidden");
  }, [show]);
  const options = {
    root: null,
    threshold: 0.15,
    rootMargin: `75px`,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setSticky(!entry?.isIntersecting);
  };
  return (
    <>
      <header
        ref={containerRef}
        className={`bg-white ${sticky ? "is-sticky" : ""}`}
      >
        <div className="top-header-section">
          <div className="main-container flex justify-start items-center py-2">
            <Link href="/">
              <a>
                <img
                  src="/assets/images/logo.png"
                  alt="TFAP"
                  className="w-28 h-10 object-contain"
                />
              </a>
            </Link>
          </div>
          <div className="bg-primary">
            <div className="px-4 py-2 flex justify-between items-center rtl">
              <div className="flex flex-row-reverse justify-start items-center">
                <ul className="flex flex-row-reverse justify-start items-center ml-8">
                  <li className="ml-3">
                    <Link href="/">
                      <a>
                        <img
                          src="/assets/images/iran.png"
                          className="border border-white"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <img
                          src="/assets/images/en_gb.gif"
                          className="border border-white"
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className="search-box">
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-40 bg-white p-2 rounded-md text-xs"
                  />
                </div>
              </div>
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => menuToggle(true)}
                >
                  {hamburgerIcon}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
