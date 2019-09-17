import React from "react";
import { Carousel } from "react-bootstrap";
import { Grid, Form } from "semantic-ui-react";
import Meditate from "../assets/images/C-Meditate.jpg";
import PlantsOne from "../assets/images/C-Plants-One.jpg";
import PlantsDark from "../assets/images/C-PlantsDark-Two.jpg";
import Rocks from "../assets/images/C-Rocks.jpg";
import axios from "axios";

import { Fade } from "react-reveal";
import { CaptionText, SubTitle } from "../Global";

class ImageCarousel extends React.Component {
  
  defaultValues = { name: "" , };
  state = { ...this.defaultValues}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = { ...this.state}

    axios.post('/api/contact', contact) 
    .then( res => {
      this.props.history.push("/#contact");
    })
    this.setState({...this.defaultValues})
  }

  render() {
    const { firstName, lastName, phone, email, questions } = this.state;
    // const { name } = this.state;
    return (
      <div className="carousel-wrapper">
        <div className="carousel-main">
          <Grid columns={2} centered>
            <Grid.Row
              textAlign="center"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                padding: "1em"
              }}
            >
              <Fade duration={2000} top>
                <SubTitle style={{ fontSize: "2.5em" }}>Contact Me</SubTitle>
              </Fade>
            </Grid.Row>
            <Grid.Row stretched columns={2}>
              <Grid.Column>
                <Fade duration={2000}>
                  <Carousel
                    fade={true}
                    indicators={false}
                    interval={4000}
                    controls={true}
                    pauseOnHover={false}
                  >
                    <Carousel.Item>
                      <img src={PlantsOne} className="carousel-images" alt='plants'/>
                      <Carousel.Caption className="caption-one">
                        <CaptionText>
                          “Your task is not to seek love, but merely to seek and
                          find all the barriers within yourself that have been
                          built against it” -Rumi
                        </CaptionText>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={Rocks} className="carousel-images" alt='rocks'/>
                      <Carousel.Caption className="caption-two">
                        <CaptionText>
                          "The way out is in." -Thich Nhat Hanh
                        </CaptionText>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={PlantsDark} className="carousel-images" alt='plants-dark'/>
                      <Carousel.Caption className="caption-three">
                        <CaptionText>
                          "Nature does not hurry, yet everything is
                          accomplished" -Lao Tzu
                        </CaptionText>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={Meditate} className="carousel-images" alt='meditate'/>
                      <Carousel.Caption className="caption-four">
                        <CaptionText>
                          “Yoga is the journey of the self, through the self, to
                          the self.” –The Bhagavad Gita
                        </CaptionText>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Fade>
              </Grid.Column>
              <Grid.Column>
                <Fade duration={2000}>
                  <Form onSubmit={this.handleSubmit}>
                
                    <Form.Group widths="equal">
                      <Form.Input
                        label="First Name"
                        className="label"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        label="Last Name"
                        className="label"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input
                        label="Phone"
                        type="phone"
                        className="label"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                      />
                      <Form.Input
                        label="Email"
                        type="email"
                        className="label"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.TextArea
                      label="Questions?"
                      className="label-area"
                      name="questions"
                      value={questions}
                      onChange={this.handleChange}
                    />
                    <button>Lets Chat</button>
                  </Form>
                </Fade>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
