import styled, { css } from "styled-components";
import { tabletBreakPoint } from "../../../../constants/breakpoints";
import { horizontalBlueGradient, bgColor } from "../../../../constants/colors";
import { expand } from "../../../../commonAnimations/scale";
import { fadeOut } from "../../../../commonAnimations/opacity";

const waveDuration = 800;

const WaveCircle = styled.div<{
  waveScaleRatio: number;
  isStartAnimation: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 70vmin;
  height: 70vmin;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  opacity: 1;

  @media screen and (min-width: ${tabletBreakPoint}px) {
    width: 40vmin;
    height: 40vmin;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${horizontalBlueGradient};
    ${({ isStartAnimation, waveScaleRatio }) =>
      isStartAnimation &&
      css`
        animation: ${expand(waveScaleRatio, waveScaleRatio)} ${waveDuration}ms
            ease-in-out,
          ${fadeOut} ${waveDuration}ms ease-in-out forwards;
      `}
  }
  ::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 50%;
    background-color: ${bgColor};
    ${({ isStartAnimation, waveScaleRatio }) =>
      isStartAnimation &&
      css`
        animation: ${expand(waveScaleRatio, waveScaleRatio)} ${waveDuration}ms
          ease-in-out;
      `}
  }
`;

export default WaveCircle;
