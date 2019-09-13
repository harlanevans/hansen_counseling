import React from "react";
import { FooterText } from "./Styles";
import { Grid } from "semantic-ui-react";

const FooterMobile = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <FooterText>Hayley Hansen, MC, LPC ®</FooterText>
        <FooterText>(480) 717-2223</FooterText>
        <a href="mailto: hayleyhansen@gmail.com">
          <FooterText>Hayleyhansen@gmail.com</FooterText>
        </a>
      </div>
    </footer>
  );
};

export default FooterMobile;
