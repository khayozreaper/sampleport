import React from "react";
import HorizontalLine from "./HorizontalLine";

const Titles = ({ htitle }) => {
  return (
    <>
      <h2 className="col-span-2 text-3xl font-bold">
        <span className="text-hilit-1">#</span>
        {htitle}
      </h2>
      <div className="col-span-3 pt-4">
        <HorizontalLine />
      </div>
    </>
  );
};

export default Titles;
