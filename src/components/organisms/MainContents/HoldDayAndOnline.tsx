import React from "react";
import styled, { css } from "styled-components";
import holddayandonlinetext from "../../../statics/pngs/holdday-and-online.png";
import {
  bottomRightShadowColor,
  topLeftShadowColor,
  bgColor,
  horizontalBlueGradient,
} from "../../../constants/colors";
import { fadeIn, fadeOut } from "../../../commonAnimations/opacity";
import useIsStartAnimation from "../../../hooks/useIsStartAnimation";
import { smBreakPoint } from "../../../constants/breakpoints";
import { expand } from "../../../commonAnimations/scale";
import { slideXTo } from "../../../commonAnimations/translate";
import { toVisible } from "../../../commonAnimations/visibility";

const fadeInDuration = 600;

const waveDuration = 800;

const imgSlideDuration = 300;

const imgSlideDelay = fadeInDuration - 200;

const smCircleDiameter = 260;

const tabletPcCircleDiameter = 420;

const MainImg = styled.img.attrs({
  src: holddayandonlinetext,
  alt: "10/31, 11/1, オンライン開催!",
})<{ isStartAnimation: boolean }>`
  position: relative;
  width: 100%;
  visibility: hidden;
  object-fit: contain;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${toVisible} 1ms ease-in-out
        ${imgSlideDelay + imgSlideDuration / 2}ms forwards;
    `}
`;

const ImgWrapper = styled.div<{ isStartAnimation: boolean }>`
  position: relative;
  width: 80%;
  overflow: hidden;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: ${horizontalBlueGradient};
    transform: translate(100%);
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${slideXTo("-100%")} ${imgSlideDuration}ms ease-in-out
          ${imgSlideDelay}ms forwards;
      `}
  }
`;

const WaveCircle = styled.div`
  position: absolute;
  top: calc(50% - ${smCircleDiameter / 2}px);
  left: calc(50% - ${smCircleDiameter / 2}px);
  background-color: ${horizontalBlueGradient};
  width: ${smCircleDiameter}px;
  height: ${smCircleDiameter}px;
  background: ${horizontalBlueGradient};
  border-radius: 50%;

  @media screen and (min-width: ${smBreakPoint}px) {
    top: calc(50% - ${tabletPcCircleDiameter / 2}px);
    left: calc(50% - ${tabletPcCircleDiameter / 2}px);
    width: ${tabletPcCircleDiameter}px;
    height: ${tabletPcCircleDiameter}px;
  }

  ::after {
    position: absolute;
    top: 1px;
    left: 1px;
    content: "";
    border-radius: 50%;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background-color: ${bgColor};
  }
`;

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: visible;
  width: 100%;
  height: ${smCircleDiameter * 2.0}px;
  opacity: 0;

  @media screen and (min-width: ${smBreakPoint}px) {
    height: ${tabletPcCircleDiameter * 2.0}px;
  }

  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${fadeIn} ${fadeInDuration}ms ease-in 0ms forwards;
    `}

  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      ${WaveCircle} {
        :nth-child(1) {
          animation: ${expand(1.8, 1.8)} ${waveDuration}ms ease-in-out 0ms
              forwards,
            ${fadeOut} ${waveDuration}ms ease-in-out 0ms forwards;
        }
        :nth-child(2) {
          animation: ${expand(1.6, 1.6)} ${waveDuration}ms ease-in-out 100ms
              forwards,
            ${fadeOut} ${waveDuration}ms ease-in-out 100ms forwards;
        }
        :nth-child(3) {
          animation: ${expand(1.4, 1.4)} ${waveDuration}ms ease-in-out 200ms
              forwards,
            ${fadeOut} ${waveDuration}ms ease-in-out 200ms forwards;
        }
        :nth-child(4) {
          animation: ${expand(1.2, 1.2)} ${waveDuration}ms ease-in-out 300ms
              forwards,
            ${fadeOut} ${waveDuration}ms ease-in-out 300ms forwards;
        }
      }
    `}
`;

const InsetCircle = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${bgColor};
  width: ${smCircleDiameter}px;
  height: ${smCircleDiameter}px;
  box-shadow: 5px 5px 10px ${bottomRightShadowColor} inset,
    -5px -5px 10px ${topLeftShadowColor} inset;
  border-radius: 50%;

  @media screen and (min-width: ${smBreakPoint}px) {
    width: ${tabletPcCircleDiameter}px;
    height: ${tabletPcCircleDiameter}px;
  }
`;

const HoldDayAndOnline = () => {
  const [ref, isStartAnimation] = useIsStartAnimation<HTMLDivElement>({});
  return (
    <Wrapper ref={ref} isStartAnimation={isStartAnimation}>
      <WaveCircle />
      <WaveCircle />
      <WaveCircle />
      <WaveCircle />
      <InsetCircle>
        <ImgWrapper isStartAnimation={isStartAnimation}>
          <MainImg isStartAnimation={isStartAnimation} />
        </ImgWrapper>
      </InsetCircle>
    </Wrapper>
  );
};

export default HoldDayAndOnline;
