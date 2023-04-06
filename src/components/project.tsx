import "./project.css";

import { Button } from "primereact/button";
import { Chip, ChipProps } from "primereact/chip";
import { Galleria } from "primereact/galleria";
import React from "react";

export type ProjectProps = {
  title: string;
  description: string;
  chips?: ChipProps[];
  repositoryUrl?: string;
  demoUrl?: string;
  imageUrls?: any[];
  imageHeight?: number;
};

export const Project = ({
  title,
  description,
  chips = [],
  repositoryUrl,
  demoUrl,
  imageUrls = [],
}: ProjectProps) => {
  const itemTemplate = (item: { itemImageSrc: string; alt: string }) => {
    return (
      <img
        className="border-round-3xl overflow-hidden"
        src={item.itemImageSrc}
        alt={item.alt}
      />
    );
  };

  const onRepositoryClick = () => {
    window.open(repositoryUrl, "_target");
  };

  const onDemoClick = () => {
    window.open(demoUrl, "_target");
  };

  const moreThanOneImage = imageUrls.length > 1;

  return (
    <div className="grid project">
      <div className="col-12 lg:col-6">
        <Galleria
          value={imageUrls.map((url) => ({ itemImageSrc: url }))}
          item={itemTemplate}
          showThumbnails={false}
          showIndicators={moreThanOneImage}
          showItemNavigators={moreThanOneImage}
          showItemNavigatorsOnHover
        />
      </div>
      <div className="col-12 lg:col-6">
        <div className="flex align-items-center gap-2">
          <h3 className="text-4xl mt-2 mb-2 inline-block">{title}</h3>
          {!!repositoryUrl && (
            <Button
              label="Repository"
              onClick={onRepositoryClick}
              icon="pi pi-code"
              iconPos="right"
              severity="info"
              text
              rounded
            />
          )}
          {!!demoUrl && (
            <Button
              label="Demo"
              onClick={onDemoClick}
              icon="pi pi-external-link"
              iconPos="right"
              severity="info"
              text
              rounded
            />
          )}
        </div>
        <p>{description}</p>
        <div className="card flex flex-wrap gap-2">
          {chips.map((chip) => (
            <Chip {...chip} />
          ))}
        </div>
      </div>
    </div>
  );
};
