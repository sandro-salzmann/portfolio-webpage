import "./subtitle.css";

import React, { ReactNode } from "react";

type SubtitleProps = {
  children: ReactNode;
  className?: string;
};

export const Subtitle = ({ children, className }: SubtitleProps) => {
  return (
    <div className={`subtitle text-center ${className}`}>
      <h2 className="text-3xl font-semibold pt-4 pb-4">{children}</h2>
    </div>
  );
};
