import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Global.css";

// Styled Components
import { WhiteBGGlobal } from "./Global";
import { Fade } from "react-reveal";

// IMPORTS
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Loader from "./components/Loader";
import Home from "./components/Home";
import About from "./components/About";

import ServOne from "./components/ServeOne";
import ServTwo from "./components/ServeTwo";
import ServThree from "./components/ServeThree";

class App extends React.Component {
  state = { pageLoaded: false };

  componentDidMount = () => {
    this.setState({ pageLoaded: false });
    setTimeout(() => {
      this.setState({ pageLoaded: true });
    }, 5000);
  };

  render() {
    return this.state.pageLoaded === false ? (
      <Loader />
    ) : (
      <>
        <Nav />
        <Fade duration={2000}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/phase-two" component={ServOne} />
            <Route exact path="/adult-yoga-group" component={ServTwo} />
            <Route exact path="/youth-yoga-group" component={ServThree} />
            {/* <Route exact path='/about' component={About} /> */}
          </Switch>
        </Fade>
      </>
    );
  }
}

export default App;
