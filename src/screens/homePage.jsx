import React from "react";
import Navbar from "../components/navBar";
import Project from "./projects";
import About from "./about";
import Experience from "./experience";
import Contact from "./contact";
const HomePage = () => {
  const isFromHome = true;
  return (
    <>
      <Navbar />
      <About isFromHome={isFromHome}/>
      <Project isFromHome={isFromHome}/>
      <Experience isFromHome={isFromHome}/>
      <Contact isFromHome={isFromHome}/>
    </>
  );
};

export default HomePage;
