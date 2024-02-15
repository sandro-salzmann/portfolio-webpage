import "./footer.css";

import { Dialog } from "primereact/dialog";
import React, { useState } from "react";

export const Footer = () => {
  const [creditsDialogVisible, setCreditsDialogVisible] =
    useState<boolean>(false);

  const scrollToTop = () => {
    document.documentElement.scrollTo({top: 0, behavior: "smooth"});
  };

  const showCreditsDialog = () => {
    setCreditsDialogVisible(true);
  };

  return (
    <div className="footer p-4 flex gap-3">
      <div className="cursor-pointer">
        <Dialog
          header="Credits"
          className="credits-panel m-3"
          onHide={() => setCreditsDialogVisible(false)}
          visible={creditsDialogVisible}
          breakpoints={{ "960px": "75vw", "641px": "100vw" }}
          draggable={false}
          resizable={false}
          dismissableMask={true}
        >
          <h3>Favicon</h3>
          <p>
            The favicon was generated using the following graphics from Twitter
            Twemoji
            <ul>
              <li>Graphics Title: 1f441-200d-1f5e8.svg</li>
              <li>
                Graphics Author:{" "}
                <a href="https://github.com/twitter/twemoji">
                  Copyright 2020 Twitter, Inc and other contributors
                </a>
              </li>
              <li>
                <a href="https://github.com/twitter/twemoji/blob/master/assets/svg/1f441-200d-1f5e8.svg">
                  Graphics Source
                </a>
              </li>
              <li>
                Graphics License:{" "}
                <a href="https://creativecommons.org/licenses/by/4.0/">
                  CC-BY 4.0
                </a>
              </li>
            </ul>
          </p>
        </Dialog>
        <span onClick={showCreditsDialog}>Credits</span>
      </div>
      <div>•</div>
      <div className="cursor-pointer" onClick={scrollToTop}>
        Back to top
      </div>
    </div>
  );
};
