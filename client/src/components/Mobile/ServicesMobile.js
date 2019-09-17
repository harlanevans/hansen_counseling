import React from "react";
// import SImage from "../../assets/images/Service-Lotus.jpg";
import { SubTitleAbout, } from "./Styles";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";




const ServicesMobile = () => {
  return (
    <div className="services-container">
      <div className="s-mob-bg-img">
        <div className="services-opacity">
        <SubTitleAbout>Services</SubTitleAbout>
          <Fade>
            <div className="button-wrapper">
              {/* <NavLink to="/phase-two" className="service-link">
                EMDR Phase Two Group
                  </NavLink> */}
              <NavLink to="/adult-yoga-group" className="service-link">
                Adult Yoga Group
                  </NavLink>
              <NavLink to="/youth-yoga-group" className="service-link">
                Youth Yoga Group
                  </NavLink>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ServicesMobile;
