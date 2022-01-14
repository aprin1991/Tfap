import React, { useState } from "react";
type IProps = {
  data: {
    src: string;
    description: string;
    id: number;
  };
  showPopUp: Function;
};
const ProjectCard: React.FC<IProps> = ({ data, showPopUp }) => {
  return (
    <li className="mb-20" data-aos="fade-left">
      <figure className="flex justify-start items-center">
        <div className="popup-img w-1/2">
          <img className="w-full" src={data?.src} alt="logo" />
          <span
            className="cursor-pointer flex justify-center items-center text-white w-9 h-9 rounded-full bg-black"
            onClick={() => showPopUp(data?.src, true)}
          >
            +
          </span>
        </div>

        <figcaption
          className="text-lg text-gray-800 w-1/2"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></figcaption>
      </figure>
    </li>
  );
};

export default ProjectCard;
