import "./app.css";

import React from "react";

import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Project } from "./components/project";
import { Subtitle } from "./components/subtitle";
import { useMediaQuery } from "./hooks/use-media-query";
import { PROJECTS } from "./PROJECTS";

export const App = () => {
  const isTabletOrGreater = useMediaQuery("(min-width: 720px)");

  return (
    <div className="pt-6 mx-auto app">
      <Banner className="pl-4 pr-4" />
      <Header className="pl-4 pr-4" />
      <Subtitle className="pl-4 pr-4">
        {isTabletOrGreater
          ? "Here are some projects I've worked on."
          : "Here are projects I've built."}
      </Subtitle>
      <div className="pl-4 pr-4 pt-4">
        {PROJECTS.map((props) => (
          <Project {...props} />
        ))}
      </div>
    </div>
  );
};
