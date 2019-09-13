import styled from "styled-components";

export const MainTitle = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: #1d4c4b;
  font-size: 2em;
  text-shadow: 0.5px 0.5px white;
`;

export const SubTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  color: #1d4c4b;
  padding: 1.5em;
  font-size: 1.75em;
  text-shadow: 0.5px 0.5px white;
  background-color: rgba(0, 0, 0, 0.2)
  border-radius: 5px;
`;

export const ButtonMobile = styled.button`
  padding: 1em;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  font-family: "Quicksand", sans - serif !important;
  color: #1d4c4b !important;
  font-size: 1.25em;
`;

export const SubTitleAbout = styled.h1`
  font-family: "Quicksand", sans-serif;
  color: white;
  padding: 1em 2em;
  font-size: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AboutText = styled.p`
  font-family: "Quicksand", sans-serif;
  color: white;
  padding: 0em 2em;
  text-shadow: 0.5px 0.5px black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1em;
  letter-spacing: 2px;
  line-height: 1.25em;
  z-index: 100;
  width: 100%;
  height: 100%;
`;
