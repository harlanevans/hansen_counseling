import React from "react";
import "./Loader.css";
import { WhiteBGGlobal } from "../Global";

const Loader = () => {
  return (
    <WhiteBGGlobal>
    <div className="loader">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
    </WhiteBGGlobal>
  );
};

export default Loader;
