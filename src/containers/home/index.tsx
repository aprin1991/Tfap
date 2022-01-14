import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import ContactUS from "./components/ContactUS";
import Introduction from "./components/Introduction";
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
        <Introduction />
        <Blog />
        <ContactUS />
      </div>
    </div>
  );
}

export default Home;
