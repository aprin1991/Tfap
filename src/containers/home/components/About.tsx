import React from "react";

function About() {
  return (
    <div className="mb-40" data-aos="fade-right">
      <h3 className="section-title">About us</h3>
      <div className="flex justify-start items-center">
        <p className="w-1/2 pr-8 text-xl text-gray-800">
          The primary goal of establishing the ICMD in 2011 was organization of
          the industrial production of ferro-silicon-aluminum alloy, as well as
          other complex alloys in Kazakhstan, Kyrgyzstan and other countries;
          and their distribution, participation in the development of new
          technologies for the production of alloys FeSi75 with low aluminium
          content from unconventional raw materials, production of chromium
          nickel cast iron for the production of stainless steel brands,
          production of low carbon ferromanganese from complex iron ores.
        </p>
        <figure className="w-1/2">
          <img className="px-12" src="/assets/images/logo.png" alt="logo" />
        </figure>
      </div>
    </div>
  );
}

export default About;
