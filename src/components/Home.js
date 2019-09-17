import React from "react";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import CarouselContact from "./CarouselContact";
import { WhiteSpace } from "../Global";
import Footer from './Footer';

const Home = () => {
  return (
    <div className='z-index-low'>
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <CarouselContact />
      </div>
      <WhiteSpace />
      <div id='services'>
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
