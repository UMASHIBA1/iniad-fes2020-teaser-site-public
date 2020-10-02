import React from "react";
import styled, { css } from "styled-components";
import InsetLine from "../../atoms/InsetLine";
import { slideXTo } from "../../../commonAnimations/translate";
import useIsStartAnimation from "../../../hooks/useIsStartAnimation";
import { fadeIn } from "../../../commonAnimations/opacity";
import { horizontalBlueGradient } from "../../../constants/colors";
import onlinehold from "../../../statics/pngs/online-hold.png";

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  margin: 2rem 0;
  overflow: hidden;
`;

const overLeft = slideXTo("-200%");

const animeDelay = 100;
const slideDuration = 300;

const SVGWrapper = styled.div<{ isStartAnimation: boolean }>`
  position: relative;
  overflow: hidden;
  display: grid;
  justify-items: center;
  width: 100%;
  height: 1.2rem;

  & > img {
    height: 100%;
    opacity: 0;
    object-fit: contain;
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${fadeIn} 1ms ease-in-out ${animeDelay + slideDuration / 2}ms
          forwards;
      `}
  }

  ::after {
    position: absolute;
    top: 0;
    left: 100%;
    content: "";
    width: 100%;
    height: 100%;
    background: ${horizontalBlueGradient};
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${overLeft} ${slideDuration}ms ease-in-out ${animeDelay}ms
          forwards;
      `}
  }
`;

const OnlineHoldDecision: React.FC = () => {
  const [ref, isStartAnimation] = useIsStartAnimation<HTMLDivElement>({});
  return (
    <Wrapper>
      <InsetLine width="100%" height="100%">
        <SVGWrapper ref={ref} isStartAnimation={isStartAnimation}>
          <img src={onlinehold} alt="オンライン開催決定!" />
        </SVGWrapper>
      </InsetLine>
    </Wrapper>
  );
};

export default OnlineHoldDecision;
