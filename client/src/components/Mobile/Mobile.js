import React from "react";
import NavMobile from "./NavMobile";
import LandingMobile from "./LandingMobile";
import AboutMobile from "./AboutMobile";
import ContactMobile from "./ContactMobile";
import ServicesMobile from "./ServicesMobile";
import "./Mobile.css";

const Mobile = () => {
  return (
    <div>
      <NavMobile />
      <div id="home">
        <LandingMobile />
      </div>
      <div id="about">
        <AboutMobile />
      </div>
      <div id="contact">
        <ContactMobile />
      </div>
      <div id="services">
        <ServicesMobile />
      </div>
    </div>
  );
};

export default Mobile;
