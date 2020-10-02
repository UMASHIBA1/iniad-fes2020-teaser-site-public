import React from "react";
import styled from "styled-components";
import {
  topLeftShadowColor,
  bottomRightShadowColor,
  bgColor,
} from "../../constants/colors";
import { tabletBreakPoint } from "../../constants/breakpoints";
import overlay from "../../commonStyles/overlay";

const Wrapper = styled.div`
  ${overlay};
  display: none;
  @media screen and (min-width: ${tabletBreakPoint + 1}px) {
    display: block;
  }
`;

const distanceFromEdge = 8;

const lineWidth = 3;

const LineBase = styled.div`
  position: absolute;
  background-color: ${bgColor};
  box-shadow: 2px 2px 4px ${bottomRightShadowColor},
    -2px -2px 4px ${topLeftShadowColor};
`;

const LeftLine = styled(LineBase)`
  top: ${distanceFromEdge}px;
  left: ${distanceFromEdge}px;
  bottom: ${distanceFromEdge}px;
  width: ${lineWidth}px;
`;

const TopLine = styled(LineBase)`
  top: ${distanceFromEdge}px;
  left: ${distanceFromEdge}px;
  right: ${distanceFromEdge}px;
  height: ${lineWidth}px;
`;

const RightLine = styled(LineBase)`
  top: ${distanceFromEdge}px;
  bottom: ${distanceFromEdge}px;
  right: ${distanceFromEdge}px;
  width: ${lineWidth}px;
`;

const BottomLine = styled(LineBase)`
  bottom: ${distanceFromEdge}px;
  left: ${distanceFromEdge}px;
  right: ${distanceFromEdge}px;
  height: ${lineWidth}px;
`;

const HomeBG: React.FC = () => {
  return (
    <Wrapper>
      <LeftLine />
      <TopLine />
      <RightLine />
      <BottomLine />
    </Wrapper>
  );
};

export default HomeBG;
