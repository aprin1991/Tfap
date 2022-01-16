import React from "react";
import map from "lodash/map";
import { bullsEye } from "@utils/svgIcons";
function ContactUS() {
  const branches = [
    {
      id: 1,
      title: "Kazakhstan",
      desc: "RSE National Center on complex processing of mineral raw materials",
    },
    {
      id: 2,
      title: "China",
      desc: "JZTSHI JinZhou Tian Sheng Heavy Industry Co. Ltd.",
    },
    {
      id: 3,
      title: "Germany",
      desc: "SMS group GmbH",
    },
    {
      id: 4,
      title: "Japan",
      desc: "HANWA Corp.",
    },
    {
      id: 5,
      title: "Kazakhstan",
      desc: "Zh. Abishev Chemico Metallurgical Institute",
    },
    {
      id: 6,
      title: "Germany",
      desc: "Thyssenkrupp Materials Trading GmbH",
    },
    {
      id: 7,
      title: "Germany",
      desc: "RWsilizium",
    },
    {
      id: 8,
      title: "Russia",
      desc: "Ferrosplav JSC",
    },
  ];
  return (
    <div className="contact-home">
      <div className="flex flex-wrap justify-start items-start">
        <div className="w-full mb-12 xl:mb-0 xl:w-1/3">
          <div className="home-contact-info w-full">
            <h2 className="text-xl text-black mb-8">
              Do you have any questions? <br /> Contact us!
            </h2>
            <div className="text-lg mb-12">
              <h5 className="text-black font-bold">E-mail</h5>
              <p>info@icmd-holding.de</p>
            </div>
            <div className="text-lg mb-12">
              <h5 className="text-black font-bold">Phone</h5>
              <p>+49 (0) 511 642 360 81</p>
            </div>
            <div className="text-lg mb-12">
              <h5 className="text-black font-bold">Website</h5>
              <p>www.icmd-holding.com</p>
            </div>
            <div className="text-lg mb-12">
              <h5 className="text-black font-bold">Address</h5>
              <p>
                ICMD International Corporation of Metal and Alloy Development
                Holding GmbH Lorbeerrosenweg 10 30916 Isernhagen, Germany
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-2/3 xl:pl-24">
          <h6 className="branches-title">Our key partners</h6>
          <p className="branches-desc">
            We provide outstanding services with our most important partners,
            which we briefly name here.
          </p>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {map(branches, (el) => {
              return (
                <li
                  className="text-white text-xl font-semibold mb-6"
                  key={el?.id}
                >
                  <h6 className="flex justify-start items-center mb-4">
                    <span className="mr-2 w-6 h-6">{bullsEye}</span>
                    {el?.title}
                  </h6>
                  <p>{el?.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
