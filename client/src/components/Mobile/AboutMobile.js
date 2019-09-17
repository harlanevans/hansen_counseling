import React from "react";
import { SubTitleAbout, AboutText } from "./Styles";
// import Hayley from "../../assets/images/Hayley_wedding.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
// import { Grid } from "semantic-ui-react";

const AboutMobile = () => {
  return (
    <div className="about-container">
      <Fade duration={2000}>
        <div className="about-background">
          <div className="opacity">
            <Fade duration={2000}>
              <SubTitleAbout>About Hayley</SubTitleAbout>
            </Fade>
            <AboutText>
              I moved to the desert seeking healing and learning, and boy did I
              find it! I am a Licensed Professional Counselor, with my academic
              career starting in 2007. With a Bachelors of Science in Psychology
              and Family Consumer Human Development from Utah State University,
              I preceded to graduate from Arizona State University with my
              Masters in Counseling in 2013. I have been practicing now for
              seven years and it has been such a wonderful learning experience.
              I have continued my journey and received my 200 level Registered
              Yoga Teacher (RYT) certificate this last year. Along with my RYT
              certificate, I am trained in EMDR, Mindfulness Based Stress
              Reduction, and Dialectical Behavioral Therapy (DBT). The
              populations I love to work with are teenagers (12 and up) and
              young adults/college age men and women. I love to work with Empath
              or Highly Sensitive People, and those people who just need a
              break!
            </AboutText>
          </div>
        </div>
        <div className='about-button-container'>
          <Link to="/">
            <button>More About Hayley</button>
          </Link>
        </div>
          {/* <button>Need More?</button> */}
      </Fade>
    </div>
  );
};

export default AboutMobile;
