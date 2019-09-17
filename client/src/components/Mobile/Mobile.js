import React from "react";
import NavMobile from "./NavMobile";
import LandingMobile from "./LandingMobile";
import AboutMobile from "./AboutMobile";
import ContactMobile from "./ContactMobile";
import ServicesMobile from "./ServicesMobile";
import "./Mobile.css";
import CarouselMobile from "./CarouselMobile";
import FooterMobile from "./FooterMobile";
import { Fade } from "react-reveal";
// import { WhiteBGGlobal } from './Styles';

const Mobile = () => {
  return (
    <Fade duration={3000} delay={500}>
      <div className="width">
        <NavMobile />
        <div id="home">
          <LandingMobile />
        </div>
        {/* <WhiteBGGlobal /> */}
        <div id="contact">
          <ContactMobile />
        </div>
        <div id="about">
          <AboutMobile />
        </div>
        <CarouselMobile />
        <div id="services">
          <ServicesMobile />
        </div>
        <FooterMobile />
      </div>
    </Fade>
  );
};

export default Mobile;
