import React, { useState } from "react";
import ProjectsGallery from "./ProjectsGallery";
type IProps = {
  data: {
    title: string;
    description: string;
    image: string;
    galleries: Array<string>;
  };
  index: number;
  showPopUp: Function;
};
const BlogCard: React.FC<IProps> = ({ data, index, showPopUp }) => {
  return (
    <li
      className="mb-4 md:mb-10 pb-4 md:pb-10 border-b border-gray-200"
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <h4 className="text-black text-3xl pb-6 border-b border-gray-200 mb-6">
            {data?.title}
          </h4>
          <p>{data?.description}</p>
        </div>
        <img src={data?.image} className="w-full" alt="#" />
      </div>
      {data?.galleries?.length > 0 && (
        <div className="mt-16">
          <ProjectsGallery images={data?.galleries} showPopUp={showPopUp} />
        </div>
      )}
    </li>
  );
};

export default BlogCard;
