import ImagePopUp from "@components/image-popup";
import ProjectsGallery from "@containers/home/components/ProjectsGallery";
import Formatter from "./Formatter";
import React, { useState } from "react";

function ProductCard() {
  const images = ["/assets/images/test/13.jpg", "/assets/images/test/14.jpg"];
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const handleShowPopUp = (src: string, show: boolean) => {
    setImageSrc(src);
    setShowProjectModal(show);
  };
  return (
    <div className="mb-20">
      <div className="main-container">
        <h2 className="sppb-addon-title mb-8">The product</h2>
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
        <ProjectsGallery images={images} showPopUp={handleShowPopUp} />
      </div>
      <div className="pr-description">
        <Formatter />
      </div>
      <ImagePopUp
        onClose={() => setShowProjectModal(false)}
        show={showProjectModal}
        src={imageSrc}
      />
    </div>
  );
}

export default ProductCard;
