import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer>
      <ul className="bg-primary flex justify-center items-center flex-wrap">
        <li className="text-gray-200 hover:text-white text-base py-3 px-6 font-normal transition-all">
          <Link href="/about-us">
            <a>About us / Projects</a>
          </Link>
        </li>
        <li className="text-gray-200 hover:text-white text-base py-3 px-6 font-normal transition-all">
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li className="text-gray-200 hover:text-white text-base py-3 px-6 font-normal transition-all">
          <Link href="/contact-us">
            <a>Contact</a>
          </Link>
        </li>
        <li className="text-gray-200 hover:text-white text-base py-3 px-6 font-normal transition-all">
          <Link href="/imprint">
            <a>Imprint</a>
          </Link>
        </li>
        <li className="text-gray-200 hover:text-white text-base py-3 px-6 font-normal transition-all">
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>
      </ul>
      <div className="bottom-footer flex flex-col justify-center items-center text-white py-4">
        <p className="text-center text-sm font-normal flex flex-col">
          <span className="mb-4">
            © ICMD Holding GmbH | Lorbeerrosenweg 10 | 30916 Isernhagen, Germany
          </span>

          <span style={{ fontSize: "0.85em" }}>
            <Link href="/">
              <a target="_blank" rel="noopener noreferrer">
                Website and maintenance: regioprint Werbemedien &amp; Verlag KG,
                30900 Wedemark
              </a>
            </Link>
            , Germany
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
