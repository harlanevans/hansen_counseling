import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";
import NavModal from "./NavModal";
import { Fade } from 'react-reveal';

class NavMobile extends React.Component {
  state = { showModal: false };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
    console.log("clicked");
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Menu secondary fixed="top" className="main-nav">
          <Menu.Item>
            <HashLink to="/#home" smooth>
              <Icon name="leaf" className="leaf-icon" size="large" />
            </HashLink>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon
                name="bars"
                className="drop-down"
                size="large"
                onClick={this.toggleModal}
                style={{ color: "white" }}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Fade duration={3000} delay={200}>
          <div className={showModal ? 'fadeIn-modal' : 'fadeOut-modal'}>
        <NavModal showModal={showModal} toggleModal={this.toggleModal} />
        </div>
        </Fade>
      </div>
    );
  }
}

export default NavMobile;
