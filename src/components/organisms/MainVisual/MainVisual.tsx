import React from "react";
import styled from "styled-components";
import INIADFESCircle from "./INIADFESCircle/INIADFESCircle";
import ScrollArrow from "./ScrollArrow";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  overflow-x: hidden;
`;

const MainVisual = () => {
  return (
    <Wrapper>
      <INIADFESCircle />
      <ScrollArrow />
    </Wrapper>
  );
};

export default MainVisual;
