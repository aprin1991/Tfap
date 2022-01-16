import React, { useState } from "react";
import map from "lodash/map";
import { introIconIcons } from "@utils/svgIcons";
import VideoPopUp from "./VideoPopUp";

function Introduction() {
  const [showVideoPopUp, setShowVideoPopUp] = useState(false);
  const items = [
    {
      id: 1,
      icon: introIconIcons?.icon1,
      title: "Three SAFs",
      description: "from 9 MVA (1 furnace)",
    },
    {
      id: 2,
      icon: introIconIcons?.icon2,
      title: "24 MVA",
      description: "2 furnaces",
    },
    {
      id: 3,
      icon: introIconIcons?.icon3,
      title: "FeSiAl Production",
      description: `Within the framework
            of a sublicense agreement.`,
    },
    {
      id: 4,
      icon: introIconIcons?.icon4,
      title: "The performance",
      description: `of the three furnaces reached 24,000 tons per year.`,
    },
  ];
  return (
    <section className="introduce-frame">
      <div className="absolute right-0 top-0 w-full h-full bg-black bg-opacity-70 z-10" />
      <div className="main-container z-50 relative">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8">
          <img
            className="w-full md:pr-8 cursor-pointer"
            src="/assets/images/test/8.jpg"
            alt="video"
            onClick={() => setShowVideoPopUp(true)}
          />
          <div className="pt-4 xl:pt-16 lg:pl-8">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              KSP Steel (Pavlodar)
            </h2>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white">
              {map(items, (el) => {
                return (
                  <li key={el?.id}>
                    <h3 className="flex justify-start items-center text-lg font-bold mb-2">
                      <span className="w-5 h-5 mr-2">{el?.icon}</span>
                      {el?.title}
                    </h3>
                    <p className="text-sm text-white opacity-80 pr-4">
                      {el?.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {showVideoPopUp && (
        <VideoPopUp
          path="/assets/images/test/ksp.mp4"
          onClose={() => setShowVideoPopUp(false)}
          show={showVideoPopUp}
        />
      )}
    </section>
  );
}

export default Introduction;
