import ImagePopUp from "@components/image-popup";
import React, { useState } from "react";
import map from "lodash/map";
import ProjectCard from "./ProjectCard";
import ProjectsGallery from "./ProjectsGallery";
const mockData = [
  {
    id: 1,
    src: "/assets/images/test/2.jpg",
    description: `As a subsidiary of HMT Holding ICMD Holding GmbH is currently
  implementing a number of construction projects for the production of
  an innovative ferro-silicon-aluminum alloy. Since 2012, ICMD Holding
  GmbH holds an exclusive license for the production of this alloy, as
  well as a patent holder for the production technology of high-purity
  ferro-silicon. ICMD Holding GmbH implements the projects for the
  construction of ferro-alloy plants in Kazakhstan - KCAP LLP,
  Kyrgyzstan - Avinien LLC, in Brazil - General Alloys Ltda. for the
  production of ferro-silicon aluminium.{" "}
  <p>
    In 2011, ICMD launched series production of ferro-silicon aluminium
    at the Ekibastuz Mini <strong>Smelter A and K LLP.</strong>
  </p>`,
  },
  {
    id: 2,
    src: "/assets/images/test/3.jpg",
    description: `At the beginning of 2013, the ferro-silicon aluminium production was developed in three SAFs of 9 MVA (1 furnace) and 24 MVA (2 furnaces) at KSP Steel (Pavlodar) under a sublicensing agreement. The total output of the three furnaces reached 24,000 tons per year.
    In total, about 50,000 tons of alloy were sold to the metallurgy companies in Kazakhstan (AO ArcelorMittal Temirtau), Russia (Magnitogorsk MK, Omutninsk MK, ZAO Ferrosplav and others), Germany (Thyssenkrupp steelworks), Korea (POSCO), Japan (Kobe Steel, JFE Steel Corp.), China (Baosteel).`,
  },
];
function Projects() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const handleShowPopUp = (src: string, show: boolean) => {
    setImageSrc(src);
    setShowProjectModal(show);
  };
  const images = ["/assets/images/test/4.jpg", "/assets/images/test/5.jpg"];
  return (
    <>
      <div className="mb-20">
        <h3 className="section-title">Projects</h3>
        <ul className="project-list">
          {map(mockData, (el: any) => (
            <ProjectCard key={el?.id} data={el} showPopUp={handleShowPopUp} />
          ))}
        </ul>
        <ProjectsGallery images={images} showPopUp={handleShowPopUp} />
      </div>
      <ImagePopUp
        onClose={() => setShowProjectModal(false)}
        show={showProjectModal}
        src={imageSrc}
      />
    </>
  );
}

export default Projects;
