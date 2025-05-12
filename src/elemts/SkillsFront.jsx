import React from "react";
import mongologo from "./Images/mongologo.png";
import expresslogo from "./Images/expresslogo.svg";
import reactlogo from "./Images/reactlogo.svg";
import nodelogo from "./Images/nodelogo.webp";
import postmanlogo from "./Images/postmanlogo.png";
import tailwindlogo from "./Images/tailwinflogo.png";

const SkillsFront = () => {
  return (
    <>
      <div className="flex size-40 gap-6">
        <img src={mongologo} alt="" className="skillLogo" />

        <img src={expresslogo} alt="" className="skillLogo" />
        <img src={reactlogo} alt="" className="skillLogo" />
        <img src={nodelogo} alt="" className="skillLogo" />
        <img src={postmanlogo} alt="" className="skillLogo" />
        <img src={tailwindlogo} alt="" className="skillLogo" />
      </div>
    </>
  );
};

export default SkillsFront;
