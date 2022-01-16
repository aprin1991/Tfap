import React, { useState } from "react";
import MiddleBanner from "./components/MiddleBanner";
import ProductCard from "./components/ProductCard";

function Products() {
  return (
    <div className="">
      <figure className="product-banner mb-20">
        <img
          className="w-full object-cover"
          src="/assets/images/products.jpg"
          alt="banner"
        />
      </figure>
      <ProductCard />
      <ProductCard />
      <MiddleBanner />
      <div className="main-container">
        <div className="flex justify-start items-start gap-8 mb-16">
          <img className="w-1/2" src="/assets/images/test/12.jpg" alt="" />
          <div className="w-1/2 article-content">
            <p>
              <strong>the ferro-silicon-aluminum alloy (FeSiAl).</strong> <br />
              The technology of ferro-silicon-aluminum smelting from high-ash
              coal and dump high-ash carbonaceous rocks developed by Kazakhstani
              scientists has high technical and economic indicators, where the
              use of expensive coke is completely excluded. The technology is
              protected by international patents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
