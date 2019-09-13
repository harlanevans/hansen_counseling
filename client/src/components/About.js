import React from "react";
// import { WhiteBGGlobal } from "../Global";
import { Grid } from "semantic-ui-react";
import Image from "../assets/images/Hayley_wedding.jpg";
import { Fade } from "react-reveal";
import { SubTitleAbout, AboutText } from "../Global";

const About = () => {
  return (
    <div className="about-padding">
      {/* <WhiteBGGlobal> */}
      <Grid columns={2}>
        <Grid.Column textAlign="center">
          <Fade duration={2500} left>
            <Grid.Row className='about-row'>
              <SubTitleAbout>About Hayley Hansen</SubTitleAbout>
            </Grid.Row>
          </Fade>
            <Fade duration={2500} left>
              <Grid.Row>
          <AboutText>
                I moved to the desert seeking healing and learning, and boy did
                I find it! I am a Licensed Professional Counselor, with my
                academic career starting in 2007. With a Bachelors of Science in
                Psychology and Family Consumer Human Development from Utah State
                University, I preceded to graduate from Arizona State University
                with my Masters in Counseling in 2013. I have been practicing
                now for seven years and it has been such a wonderful learning
                experience. I have continued my journey and received my 200
                level Registered Yoga Teacher (RYT) certificate this last year.
                Along with my RYT certificate, I am trained in EMDR, Mindfulness
                Based Stress Reduction, and Dialectical Behavioral Therapy
                (DBT). The populations I love to work with are teenagers (12 and
                up) and young adults/college age men and women. I love to work
                with Empath or Highly Sensitive People, and those people who
                just need a break!
          </AboutText>
              </Grid.Row>
            </Fade>
          <Fade duration={2500} left>
            <Grid.Row className='about-row'>
              <SubTitleAbout>
                I’ve given you the clinical important stuff. Now I’ll give you
                the dirt.
              </SubTitleAbout>
            </Grid.Row>
          </Fade>
          <Fade duration={2500} left>
            <Grid.Row>
              <AboutText>
                I moved to the desert seeking healing and learning, and boy did
                I find it! I am a Licensed Professional Counselor, with my
                academic career starting in 2007. With a Bachelors of Science in
                Psychology and Family Consumer Human Development from Utah State
                University, I preceded to graduate from Arizona State University
                with my Masters in Counseling in 2013. I have been practicing
                now for seven years and it has been such a wonderful learning
                experience.
              </AboutText>
            </Grid.Row>
          </Fade>
        </Grid.Column>
        <Grid.Column>
          <Fade right duration={2500}>
            <img src={Image} className="about-image" style={{ borderRadius: '5px' }} alt='hayley'/>
          </Fade>
        </Grid.Column>
      </Grid>
      {/* </WhiteBGGlobal> */}
    </div>
  );
};

export default About;
