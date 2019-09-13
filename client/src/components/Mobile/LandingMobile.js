import React from "react";
import { MainTitle, SubTitle } from "./Styles";
import { Fade } from "react-reveal";
import { Grid } from "semantic-ui-react";

const LandingMobile = () => {
  return (
    <div className="background-image">
      <div className="landing">
        <Grid>
          <Grid.Column textAlign="center">
            <Fade duration={2000}>
              <MainTitle>Hayley Hansen MC, LCP</MainTitle>
            </Fade>
            <div className="l-sub-title">
              <Fade delay={500} duration={2000}>
                <SubTitle>Healing</SubTitle>
              </Fade>
              <Fade delay={1000} duration={2000}>
                <SubTitle>Support</SubTitle>
              </Fade>
              <Fade delay={1500} duration={2000}>
                <SubTitle>Growth</SubTitle>
              </Fade>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default LandingMobile;
