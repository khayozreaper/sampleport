import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center gap-5">
        <div className="button-icon">
          <div className="icon">
            <img
              className="size-8"
              src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
              alt=""
            />
          </div>
          <div className="cube">
            <span className="side front">GitHub</span>
            <span className="side top">check me on github</span>
          </div>
        </div>
        <div className="button-icon">
          <div className="icon">
            <img
              className="size-8"
              src="https://img.icons8.com/?size=100&id=16166&format=png&color=000000"
              alt=""
            />
          </div>
          <div className="cube">
            <span className="side front">LinkedIn</span>
            <span className="side top">check me on linkedin</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
