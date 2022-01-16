import React from "react";
import Link from "next/link";
type IProps = {
  show: boolean;
  onClose: Function;
};
const Sidebar: React.FC<IProps> = ({ show, onClose }) => {
  const handleclickLink = () => {
    onClose();
  };
  return (
    <div
      className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-40 menu-sidebar ${
        show ? "active" : ""
      }`}
    >
      <div
        className="absolute w-full h-full top-0 right-0 z-10 cursor-pointer"
        onClick={() => onClose()}
      />
      <aside className="p-4 z-50">
        <div className="flex justify-end">
          <span className="close-menu" onClick={() => onClose()} />
        </div>
        <ul className="px-8 text-white text-sm">
          <li className="border-b border-gray-300">
            <Link href="/about-us">
              <a onClick={handleclickLink}> About us / projects</a>
            </Link>
          </li>

          <li className="border-b border-gray-300">
            <Link href="/products">
              <a onClick={handleclickLink}> Products</a>
            </Link>
          </li>
          <li className="border-b border-gray-300">
            <Link href="/contact-us">
              <a onClick={handleclickLink}> Contact</a>
            </Link>
          </li>
          <li className="border-b border-gray-300">
            <Link href="/imprint">
              <a onClick={handleclickLink}> Imprint</a>
            </Link>
          </li>
          <li className="">
            <Link href="/privacy">
              <a onClick={handleclickLink}> Privacy</a>
            </Link>
          </li>
        </ul>
      </aside>
      <style jsx>{``}</style>
    </div>
  );
};

export default Sidebar;
