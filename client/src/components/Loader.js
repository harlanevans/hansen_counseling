import React from "react";
import "./Loader.css";
import { Fade } from 'react-reveal';

const Loader = () => {
  return (
      <Fade duration={2500} delay={500}>
      <div className="loader">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </div>
      </Fade>
  );
};

export default Loader;
