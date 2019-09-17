import React from "react";
import { Carousel } from "react-bootstrap";
import PlantsLight from "../../assets/images/C-Plants-One.jpg";
import Meditate from "../../assets/images/C-Meditate.jpg";
import PlantsDark from "../../assets/images/C-PlantsDark-Two.jpg";
import Rocks from "../../assets/images/C-Rocks.jpg";
import { CaptionText, } from "./Styles";

const CarouselMobile = () => {
  return (
    <div className="c-wrapper">
      <Carousel
        fade={true}
        indicators={false}
        interval={4000}
        controls={true}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <img src={PlantsDark} className="carousel-images" alt="plants-dark" />
          <Carousel.Caption className="caption-three">
            <CaptionText>
              "Nature does not hurry, yet everything is accomplished" -Lao Tzu
            </CaptionText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Rocks} className="carousel-images" alt="rocks" />
          <Carousel.Caption className="caption-two">
            <CaptionText>"The way out is in." -Thich Nhat Hanh</CaptionText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={PlantsLight} className="c-img-mob" alt="plants" />
          <Carousel.Caption className="caption-one">
            <CaptionText>
              “Your task is not to seek love, but merely to seek and find all
              the barriers within yourself that have been built against it”
              -Rumi
            </CaptionText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Meditate} className="carousel-images" alt="meditate" />
          <Carousel.Caption className="caption-four">
            <CaptionText>
              “Yoga is the journey of the self, through the self, to the self.”
              –The Bhagavad Gita
            </CaptionText>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMobile;
