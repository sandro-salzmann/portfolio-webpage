import './app.css';

import { Banner } from './components/banner';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Project } from './components/project';
import { Subtitle } from './components/subtitle';
import { useMediaQuery } from './hooks/use-media-query';
import { PROJECTS } from './PROJECTS';

export const App = () => {
  const isTabletOrGreater = useMediaQuery("(min-width: 720px)");

  return (
    <div className="pt-6 app">
      <Banner className="pl-4 pr-4 text-container" />
      <Header className="pl-4 pr-4 text-container" />
      <Subtitle>
        {isTabletOrGreater
          ? "Here are some apps I've worked on."
          : "Here are apps I've built."}
      </Subtitle>
      <div className="pl-4 pr-4 pt-4 text-container">
        {PROJECTS.map((props) => (
          <Project {...props} />
        ))}
      </div>
      <Footer />
    </div>
  );
};
