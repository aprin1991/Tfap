import RippleButton from "@components/button";
import Aos from "aos";
import React, { useEffect } from "react";

function Banner() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <figure className="banner-wrapper">
      <img
        src="/assets/images/test/1.jpg"
        alt="banner"
        className="w-full object-cover"
      />
      <figcaption className="main-container pt-24" data-aos="fade-zoom-in">
        <h2 className="banner-slogan">FeSiAl</h2>
        <div>
          <p className="text-white text-xl font-medium mb-2">
            <strong>The newly developed ferro-silicon-aluminum alloy</strong>
          </p>

          <p className="text-white text-xl ">
            combines the metallurgical properties of aluminum as well as
            ferro-silicon.
          </p>
        </div>
        <ul className="flex justify-start items-center mt-16 text-sm">
          <li className="mr-2">
            <RippleButton classes="capitalize bg-primary text-white px-6 py-2 read-more-btn rounded-md w-32">
              Read more
            </RippleButton>
          </li>
          <li className="mr-2">
            <RippleButton classes="capitalize bg-white bg-opacity-60 contact-more-btn text-primary px-6 py-2 rounded-md ">
              Contact us!
            </RippleButton>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}

export default Banner;
