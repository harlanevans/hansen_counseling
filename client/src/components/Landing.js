import React from "react";
import { Grid } from "semantic-ui-react";
import { MainTitle, SubTitle } from "../Global";
import { Fade } from "react-reveal";
import "../Global.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="background-image">
        <Grid columns={1}>
          <Grid.Column textAlign="center">
            <Grid.Row className="landing-row-one">
              <Fade duration={2000}>
                <MainTitle>Hayley Hansen MC, LCP</MainTitle>
              </Fade>
            </Grid.Row>
            <Grid.Row 
            className="landing-row-two" 
            centered 
            columns={3} 
            divided>
              <Grid.Column>
                <Fade duration={2000} delay={500}>
                  <SubTitle>Healing</SubTitle>
                </Fade>
              </Grid.Column>
              <Grid.Column>
                <Fade duration={2000} delay={1500}>
                  <SubTitle className='landing-middle'>Support</SubTitle>
                </Fade>
              </Grid.Column>
              <Grid.Column>
                <Fade duration={2000} delay={1000}>
                  <SubTitle>Growth</SubTitle>
                </Fade>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Landing;
