import "./banner.css";

import React from "react";

import { useMediaQuery } from "../hooks/use-media-query";

type BannerProps = {
  className?: string;
};

export const Banner = ({ className }: BannerProps) => {
  const isTabletOrGreater = useMediaQuery("(min-width: 720px)");

  return (
    <div className={`banner flex ${className}`}>
      <div className="icon flex-none">
        <img src="assets/sandro-cut-out.png" alt="Sandro headshot" />
      </div>
      <div className="flex-grow-1 align-self-center ml-4">
        <h1
          className={`${isTabletOrGreater ? "text-8xl" : "text-7xl"} mb-1 mt-0`}
        >
          Hi, I'm Sandro
        </h1>
        <h2 className="text-3xl mt-1 mb-0 font-semibold">
          {isTabletOrGreater
            ? "I build cool things on the web and make them look pretty & usable."
            : "I build cool, pretty & usable things on the web."}
        </h2>
      </div>
    </div>
  );
};
