import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { SubTitle } from "../Global";
import SImage from "../assets/images/Service-Lotus.jpg";
import { Fade } from "react-reveal";

class Services extends React.Component {
  render() {
    return (
      <div className="service-wrapper">
        <Grid textAlign="center" columns={2}>
          <Grid.Row>
            <Fade duration={3000}>
              <SubTitle style={{ fontSize: "2.5em" }}>Services</SubTitle>
            </Fade>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Fade>
                <div className="button-wrapper">
                  <NavLink to="/phase-two" className="service-link">
                    EMDR Phase Two Group
                  </NavLink>
                  <NavLink to="/adult-yoga-group" className="service-link">
                    Adult Yoga Group
                  </NavLink>
                  <NavLink to="/youth-yoga-group" className="service-link">
                    Youth Yoga Group
                  </NavLink>
                </div>
              </Fade>
            </Grid.Column>
            <Grid.Column style={{ padding: "3em" }}>
              <Fade>
                <img src={SImage} className="service-images" alt="services" />
              </Fade>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Services;
