import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInPowerButtonColorOrder } from "../../../../animationOrders/openingAnimationOrder";
import { bgColor } from "../../../../constants/colors";

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`;

const OMarkOutLine = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  clip-path: polygon(0 0, 20% 0, 50% 50%, 80% 0, 100% 0, 100% 100%, 0 100%);
`;

const OMarkBase = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;

  &::after {
    position: absolute;
    content: "";
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: ${bgColor};
  }
`;

const OMarkColor = styled(OMarkBase)`
  background: rgb(160, 37, 214);
  background: linear-gradient(
    90deg,
    rgba(160, 37, 214, 1) 0%,
    rgba(24, 115, 200, 1) 53%,
    rgba(0, 212, 255, 1) 100%
  );
  opacity: 0;
  animation: ${fadeIn} ${fadeInPowerButtonColorOrder.duration}ms ease-in
    ${fadeInPowerButtonColorOrder.delay}ms forwards;
`;

const OMarkWhite = styled(OMarkBase)`
  background-color: #adb4bf;
  opacity: 1;
`;

const OMark = () => {
  return (
    <OMarkOutLine>
      <OMarkWhite />
      <OMarkColor />
    </OMarkOutLine>
  );
};

export default OMark;
