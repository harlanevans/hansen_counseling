import React from "react";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import CarouselContact from "./CarouselContact";
import { WhiteSpace } from "../Global";
import Footer from './Footer';
import Nav from './Nav';
import "../Global.css";


const Window = () => {
  return (
    <div className='z-index-low'>
    <Nav />
      <div id="home">
        <Landing />
      </div>
      <div id="contact">
        <CarouselContact />
      </div>
      <div id="about">
        <About />
      </div>
      <WhiteSpace />
      <div id='services'>
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default Window;
