import React from "react";
import styled, { css } from "styled-components";
import {
  topLeftShadowColor,
  bottomRightShadowColor,
} from "../../../constants/colors";
import useDidMount from "../../../hooks/useDidMount";
import { smBreakPoint } from "../../../constants/breakpoints";
import useIsStartAnimation from "../../../hooks/useIsStartAnimation";
import { fadeIn } from "../../../commonAnimations/opacity";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 20px;
  opacity: 0;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${fadeIn} 500ms ease-in 0ms forwards;
    `}
  box-shadow: inset 8px 8px 16px ${bottomRightShadowColor},
    inset -8px -8px 16px ${topLeftShadowColor};

  & > iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% - 32px) !important;
    height: calc(100% - 32px) !important;
    transform: translate(-50%, -50%);

    @media screen and (min-width: ${smBreakPoint}px) {
      width: calc(100% - 64px) !important;
      height: calc(100% - 64px) !important;
    }
  }
`;

const Video: React.FC = () => {
  const [ref, isStartAnimation] = useIsStartAnimation<HTMLDivElement>({});
  useDidMount(() => {
    const videoWrapper = document.getElementById("video-id");

    if (videoWrapper !== null) {
      videoWrapper.innerHTML = `youtube video link`;
    }
  });

  return (
    <Wrapper
      id="video-id"
      ref={ref}
      isStartAnimation={isStartAnimation}
    ></Wrapper>
  );
};

export default Video;
