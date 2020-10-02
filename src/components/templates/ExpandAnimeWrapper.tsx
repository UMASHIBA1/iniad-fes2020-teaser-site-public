import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { toVisible } from "../../commonAnimations/visibility";
import { horizontalBlueGradient, bgColor } from "../../constants/colors";
import { slideYTo } from "../../commonAnimations/translate";
import { showMainPageOrder } from "../../animationOrders/openingAnimationOrder";

const Wrapper = styled.div<{ delay: number; duration: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden;
  overflow-x: hidden;
  background: ${bgColor};
  animation: ${toVisible} ${1}ms linear ${({ delay }) => delay}ms forwards;

  & > * {
    :nth-child(2),
    :nth-child(1) {
      visibility: hidden;
      animation: ${toVisible} 1ms ease-in-out
        ${showMainPageOrder.duration / 2 + showMainPageOrder.delay}ms forwards;
    }
  }
`;

const SlideWrapper = styled.div<{ isStoppedOpeningAnimation: boolean }>`
  display: ${({ isStoppedOpeningAnimation }) =>
    isStoppedOpeningAnimation ? "none" : "block"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-45deg);
  ::before {
    position: absolute;
    top: 50vmax;
    left: -50vmax;
    width: 200vmax;
    height: 200vmax;
    content: "";
    transform: translateY(100%);
    background: ${horizontalBlueGradient};
    animation: ${slideYTo("-200%")} ${showMainPageOrder.duration}ms ease-in-out
      ${showMainPageOrder.delay}ms forwards;
  }
`;

interface Props {
  delay: number;
  duration: number;
  children: ReactNode;
}

const ExpandAnimeWrapper: React.FC<Props> = ({
  delay: startExpandTimeMs,
  duration: expandDuration,
  children,
}: Props) => {
  const [isStoppedOpeningAnimation, changeIsStoppedOpeningAnimation] = useState(
    false
  );
  return (
    <Wrapper delay={startExpandTimeMs} duration={expandDuration}>
      {children}
      <SlideWrapper isStoppedOpeningAnimation={isStoppedOpeningAnimation}>
        <Slider onAnimationEnd={() => changeIsStoppedOpeningAnimation(true)} />
      </SlideWrapper>
    </Wrapper>
  );
};

export default ExpandAnimeWrapper;
