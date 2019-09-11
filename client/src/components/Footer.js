import React from "react";
import { FooterText } from "../Global";
import { Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <footer>
      <Grid columns={1}>
        <Grid.Row textAlign="center" style={{ padding: "4em" }}>
          <Grid.Column textAlign="center">
            <FooterText>Hayley Hansen, MC, LPC ®</FooterText>
            <FooterText>(480) 717-2223</FooterText>
            <a href='mailto: hayleyhansen@gmail.com'>
            <FooterText>Hayleyhansen@gmail.com</FooterText>
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </footer>
  );
};

export default Footer;
