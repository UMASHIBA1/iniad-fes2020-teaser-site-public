import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as OneArrow } from "../../../statics/svgs/scroll-arrow-oneline.svg";
import { tabletBreakPoint } from "../../../constants/breakpoints";

const navigateAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  45%, 55% {
    transform: translateY(8px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  /* NOTE: top,left等がないabsoluteはあまりよくないためabsoluteとstaticで条件分岐させてる */
  position: absolute;
  bottom: 92px;
  width: 30px;
  height: 18px;
  display: grid;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: ${tabletBreakPoint}px) {
    width: 60px;
    height: 36px;
  }

  & > * {
    grid-column: 1;
    animation: ${navigateAnimation} 800ms ease-in-out 100ms infinite;
    &:nth-child(1) {
      grid-row: 1;
    }

    &:nth-child(2) {
      grid-row: 2;
    }

    &:nth-child(3) {
      grid-row: 3;
    }
  }
`;

const ScrollArrow: React.FC = () => {
  return (
    <Wrapper>
      <OneArrow />
      <OneArrow />
      <OneArrow />
    </Wrapper>
  );
};

export default ScrollArrow;
