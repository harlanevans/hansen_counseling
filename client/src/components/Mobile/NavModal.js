import React from "react";
import { Link } from 'react-router-dom';
import { ButtonMobile } from "./Styles";

const NavModal = ({ showModal }) => {
  return showModal === true ? (
    <div className="modal-main">
      <div className="modal-column">
      <Link to='/about'>
        <ButtonMobile>About</ButtonMobile>
      </Link>
      <Link to='/contact'>
        <ButtonMobile>Contact</ButtonMobile>
      </Link>
      <Link to='/services'>
        <ButtonMobile>Services</ButtonMobile>
      </Link>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NavModal;
