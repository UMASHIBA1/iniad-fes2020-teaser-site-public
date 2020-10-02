import React from "react";
import styled, { keyframes } from "styled-components";
import {
  bottomRightShadowColor,
  bgColor,
  topLeftShadowColor,
} from "../../../../constants/colors";
import {
  showPowerButtonOrder,
  pushPowerButtonOrder,
} from "../../../../animationOrders/openingAnimationOrder";
import IOMark from "./IOMark";
import HideButtonCircle from "./HideButtonCircle";

const powerButtonDiameter = 200;

const showPowerButton = keyframes`
  0% {
    transform: scale(0);
  }

  50%{
	  transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const startBoxShadow = 20;
const pushedBoxShadow = 10;
const endBoxShadow = 10;

const pushPowerButton = keyframes`

  25% {
  box-shadow: 0px 0px 0px ${bottomRightShadowColor}, 0px 0px 0px ${topLeftShadowColor};
  }

  50%,55% {
  box-shadow: inset ${pushedBoxShadow}px ${pushedBoxShadow}px ${
  pushedBoxShadow * 2
}px ${bottomRightShadowColor}, inset -${pushedBoxShadow}px -${pushedBoxShadow}px ${
  pushedBoxShadow * 2
}px ${topLeftShadowColor};
  }

  80% {
  box-shadow: 0px 0px 0px ${bottomRightShadowColor}, 0px 0px 0px ${topLeftShadowColor};
  }

  100% {
  box-shadow: ${endBoxShadow}px ${endBoxShadow}px ${
  endBoxShadow * 2
}px ${bottomRightShadowColor}, -${endBoxShadow}px -${endBoxShadow}px ${
  endBoxShadow * 2
}px ${topLeftShadowColor};
  }
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${bgColor};
`;

const PowerButtonOutLine = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${powerButtonDiameter}px;
  height: ${powerButtonDiameter}px;
  border-radius: 50%;
  background-color: ${bgColor};
  opacity: 1;
  box-shadow: ${startBoxShadow}px ${startBoxShadow}px ${startBoxShadow}px
      ${bottomRightShadowColor},
    -${startBoxShadow}px -${startBoxShadow}px ${startBoxShadow}px
      ${topLeftShadowColor};
  animation: ${showPowerButton} ${showPowerButtonOrder.duration}ms ease-in-out
      ${showPowerButtonOrder.delay}ms both,
    ${pushPowerButton} ${pushPowerButtonOrder.duration}ms ease-in
      ${pushPowerButtonOrder.delay}ms forwards;
`;

const PowerButton = () => {
  return (
    <Wrapper>
      <PowerButtonOutLine>
        <IOMark />
      </PowerButtonOutLine>
      <HideButtonCircle />
    </Wrapper>
  );
};

export default PowerButton;
