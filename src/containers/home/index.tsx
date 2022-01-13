import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

function Home() {
  return (
    <div className="">
      <Banner />
      <div className="mt-8">
        <div className="main-container">
          <About />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default Home;
