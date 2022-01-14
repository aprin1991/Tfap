import React, { useState } from "react";
import BlogCard from "./BlogCard";
import map from "lodash/map";
import ImagePopUp from "@components/image-popup";
function Blog() {
  const posts = [
    {
      id: 1,
      title: "Karaganda Complex Alloys Plant",
      description: `Karaganda, Kazakhstan:
          To date preliminary construction works are completed for erection of a complex alloys plant with annual capacity of 90 thousand tons with 4x33 MVA furnaces. It is envisaged to produce not only ferro-silicon-aluminum, but also ferro-silicon and ferro-silicon-manganese.`,
      image: "/assets/images/test/6.jpg",
      galleries: [],
    },
    {
      id: 2,
      title: "Avinien LLC, Tash-Kumyr, Kirgisistan",
      description: `The construction of the ferroalloy plant with capacity of 50 000 tons per year of FeSiAl alloy in the Kyrgyz Republic was launched in 2014.

      Avinien LLC shareholders are: Republican State Enterprise National center on complex processing of mineral raw materials of the Republic of Kazakhstan and ICMD International Corporation of Metal and Alloy Development Holding GmbH, Germany.`,
      image: "/assets/images/test/7.jpg",
      galleries: ["/assets/images/test/9.jpg", "/assets/images/test/10.jpg"],
    },
    {
      id: 3,
      title: "General Alloys Importação e Exportação Ltda.",
      description: `The construction of the ferroalloy plant with capacity of 50 000 tons per year of FeSiAl alloy in the Kyrgyz Republic was launched in 2014.

      Avinien LLC shareholders are: Republican State Enterprise National center on complex processing of mineral raw materials of the Republic of Kazakhstan and ICMD International Corporation of Metal and Alloy Development Holding GmbH, Germany.`,
      image: "/assets/images/test/11.jpg",
      galleries: [],
    },
  ];
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const handleShowPopUp = (src: string, show: boolean) => {
    setImageSrc(src);
    setShowProjectModal(show);
  };
  return (
    <div className="main-container">
      <ul>
        {map(posts, (post, index) => (
          <BlogCard
            data={post}
            key={post?.id}
            index={index}
            showPopUp={handleShowPopUp}
          />
        ))}
      </ul>
      <ImagePopUp
        onClose={() => setShowProjectModal(false)}
        show={showProjectModal}
        src={imageSrc}
      />
    </div>
  );
}

export default Blog;
