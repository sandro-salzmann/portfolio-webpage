import "./header.css";

import { Button } from "primereact/button";
import React from "react";

import { useMediaQuery } from "./../hooks/use-media-query";

const EMAIL_URL = "mailto:salzmann2k@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/sandro-salzmann-94a581237/";
const GITHUB_URL = "https://github.com/sandro-salzmann";
const CV_PDF = "assets/cv-sandro-salzmann.pdf";

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const onDownloadCVClick = () => window.open(CV_PDF, "_blank");

  const onContactMeClick = () => window.open(EMAIL_URL, "_self");

  const onLinkedInClick = () => window.open(LINKEDIN_URL, "_target");

  const onGithubClick = () => window.open(GITHUB_URL, "_target");

  const isTabletOrGreater = useMediaQuery("(min-width: 720px)");

  return (
    <header className={`flex gap-2 mt-4 ${className}`}>
      <Button
        label={"CV"}
        icon="pi pi-file-pdf"
        iconPos="right"
        severity="info"
        outlined
        rounded
        onClick={onDownloadCVClick}
        className="bg-white"
      />
      <Button
        label={isTabletOrGreater ? "GitHub" : undefined}
        icon="pi pi-github"
        iconPos="right"
        severity="info"
        outlined
        rounded
        onClick={onGithubClick}
        className="bg-white"
      />
      <Button
        label={isTabletOrGreater ? "LinkedIn" : undefined}
        icon="pi pi-linkedin"
        iconPos="right"
        severity="info"
        outlined
        rounded
        onClick={onLinkedInClick}
        className="bg-white"
      />
      <Button label="Contact me" icon="pi pi-at" rounded onClick={onContactMeClick} />
    </header>
  );
};
