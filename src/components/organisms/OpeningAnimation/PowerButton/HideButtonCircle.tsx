import React from "react";
import styled from "styled-components";
import { verticalBlueGradient, bgColor } from "../../../../constants/colors";
import { expand } from "../../../../commonAnimations/scale";
import { hidePowerButtonCircle } from "../../../../animationOrders/openingAnimationOrder";

const gradientCircleDiameter = 500;

const oneCircleDuration = hidePowerButtonCircle.duration / 4;

const GradientCircle = styled.div`
  background: ${verticalBlueGradient};
  width: ${gradientCircleDiameter}px;
  height: ${gradientCircleDiameter}px;
  max-width: 90vmin;
  max-height: 90vmin;
  border-radius: 50%;
  transform: scale(0, 0);
  animation: ${expand()} ${oneCircleDuration}ms ease-in-out forwards;
`;

const WhiteCircle = styled.div`
  background-color: ${bgColor};
  width: ${gradientCircleDiameter}px;
  height: ${gradientCircleDiameter}px;
  max-width: 90vmin;
  max-height: 90vmin;
  border-radius: 50%;
  transform: scale(0, 0);
  animation: ${expand()} ${oneCircleDuration}ms forwards;
`;

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  top: 0;
  left: 0;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  & > ${GradientCircle} {
    animation-delay: ${hidePowerButtonCircle.delay}ms;
    & > ${WhiteCircle} {
      animation-delay: ${hidePowerButtonCircle.delay +
      oneCircleDuration -
      100}ms;
      & > ${GradientCircle} {
        animation-delay: ${hidePowerButtonCircle.delay +
        oneCircleDuration * 2 -
        200}ms;
        & > ${WhiteCircle} {
          animation-delay: ${hidePowerButtonCircle.delay +
          oneCircleDuration * 3 -
          300}ms;
        }
      }
    }
  }
`;

const HideButtonCircle: React.FC = () => {
  return (
    <Wrapper>
      <GradientCircle>
        <WhiteCircle>
          <GradientCircle>
            <WhiteCircle />
          </GradientCircle>
        </WhiteCircle>
      </GradientCircle>
    </Wrapper>
  );
};

export default HideButtonCircle;
