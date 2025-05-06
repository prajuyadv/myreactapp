import React from "react";
import HomePage from "./screens/homePage";
import About from "./screens/about"
import Experience from "./screens/experience";
import Contact from "./screens/contact";
import Project from "./screens/projects";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Project/>}/>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
