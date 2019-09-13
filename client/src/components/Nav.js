import React from "react";
import "../Global.css";
// import { Link } from 'react-router-dom';
import { Menu, Icon } from "semantic-ui-react";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <Menu secondary fixed="top" className="main-nav">
      <Menu.Item className="nav-item">
        <HashLink to="/#home" smooth>
          <Icon name="leaf" className="leaf-icon" size="large" />
        </HashLink>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <HashLink to="/#about" smooth className="nav-item">
            About
          </HashLink>
        </Menu.Item>
        <Menu.Item>
          <HashLink to="/#contact" smooth className="nav-item">
            Contact
          </HashLink>
        </Menu.Item>
        <Menu.Item>
          <HashLink to="/#services" smooth className="nav-item">
            Services
          </HashLink>
        </Menu.Item>
        <Menu.Item>
          <a
            href="https://hayley-hansen.clientsecure.me/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="nav-client-portal">Client Portal</div>
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;
