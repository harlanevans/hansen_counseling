import React from "react";
import { Switch, Route } from "react-router-dom";
import { Fade } from "react-reveal";

// IMPORTS
// Window Size
// import Nav from "./components/Nav";
// import Landing from "./components/Landing";
import Loader from "./components/Loader";
import Window from "./components/Window";
// import About from "./components/About";
import ServOne from "./components/ServeOne";
import ServTwo from "./components/ServeTwo";
import ServThree from "./components/ServeThree";

// Mobile Size
import Mobile from "./components/Mobile/Mobile";
import ContactMobile from "./components/Mobile/ContactMobile";
import AboutMobile from "./components/Mobile/AboutMobile";
import ServicesMobile from "./components/Mobile/ServicesMobile";
import YouthYoga from './components/Mobile/YouthYoga';
import AdultYoga from './components/Mobile/AdultYoga';

class App extends React.Component {
  state = { pageLoaded: false, width: window.innerWidth };

  componentDidMount = () => {
    window.addEventListener("resize", this.handleWindowSizeChange);
    setTimeout(() => {
      this.setState({ pageLoaded: true });
    }, 0);
  };

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 600;
    // the rest is the same...
    if (isMobile) {
      return this.state.pageLoaded === false ? (
        <Loader />
      ) : (
        <>
          <Fade duration={2000}>
            <Switch>
              <Route exact path="/" component={Mobile} />
              <Route exact path="/contact" component={ContactMobile} />
              <Route exact path="/about" component={AboutMobile} />
              <Route exact path="/services" component={ServicesMobile} />
              <Route exact path="/adult-yoga-group" component={AdultYoga} />
              <Route exact path="/youth-yoga-group" component={YouthYoga} />
            </Switch>
          </Fade>
        </>
      );
    } else {
      return this.state.pageLoaded === false ? (
        <Loader />
      ) : (
        <>
          {/* <Nav /> */}
          <Fade duration={2000}>
            <Switch>
              <Route exact path="/" component={Window} />
              <Route exact path="/phase-two" component={ServOne} />
              <Route exact path="/adult-yoga-group" component={ServTwo} />
              <Route exact path="/youth-yoga-group" component={ServThree} />
            </Switch>
          </Fade>
        </>
      );
    }
  }
}

export default App;
