import React from "react";
import styled, { keyframes } from "styled-components";
import {
  loadingOrder,
  loadingSlideOutOrder,
} from "../../../animationOrders/openingAnimationOrder";
import { bgColor, horizontalBlueGradient } from "../../../constants/colors";
import { fadeIn } from "../../../commonAnimations/opacity";

const loading = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0%);
}
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${bgColor};
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0ms linear ${loadingOrder.delay}ms forwards;
  opacity: 0;
`;

const LoadingBar = styled.div`
  position: absolute;
  width: 80%;
  max-width: 1000px;
  height: 24px;
  border-radius: 12px;
  border: ${bgColor} solid 1px;
  overflow: hidden;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(160, 37, 214);
    background: ${horizontalBlueGradient};
    animation: ${loading} ${loadingOrder.duration}ms ease-in-out
      ${loadingOrder.delay}ms both;
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: ${bgColor};
    animation: ${loading} ${loadingSlideOutOrder.duration}ms ease-in-out
      ${loadingSlideOutOrder.delay}ms both;
  }
`;

const StateDescription = styled.div`
  position: absolute;
  font-size: 14px;
  color: ${bgColor};
`;

const Loading = () => {
  return (
    <Wrapper>
      <LoadingBar />
      <StateDescription>Loading...</StateDescription>
    </Wrapper>
  );
};

export default Loading;
