import React from "react";
import map from "lodash/map";
type Iprops = {
  images: Array<string>;
  showPopUp: Function;
};
const ProjectsGallery: React.FC<Iprops> = ({ images, showPopUp }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {map(images, (image, index) => {
        return (
          <div className="popup-img w-full">
            <img className="w-full" src={image} alt="logo" />
            <span
              className="cursor-pointer flex justify-center items-center text-white w-9 h-9 rounded-full bg-black"
              onClick={() => showPopUp(image, true)}
            >
              +
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGallery;
