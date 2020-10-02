import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import {
  bottomRightShadowColor,
  topLeftShadowColor,
  bgColor,
} from "../../../../constants/colors";
import { tabletBreakPoint } from "../../../../constants/breakpoints";
import WaveCircle from "./WaveCircle";
import holdday from "../../../../statics/pngs/hold-day.png";
import iniadfeslogo from "../../../../statics/svgs/iniad-fes-logo.svg";
import useDidMount from "../../../../hooks/useDidMount";
import { startPushINIADFESButton } from "../../../../animationOrders/openingAnimationOrder";

const startBoxShadow = 10;
const pushedBoxShadow = 10;
const endBoxShadow = 10;

const pushINIADFESDuration = 800;

const waveBaseDelay = pushINIADFESDuration - 400;

function INIADFESCircle() {
  const [isStartAnimation, changeIsStartAnimation] = useState(false);
  const [content, changeContent] = useState<"iniad-fes" | "hold-day">(
    "iniad-fes"
  );
  const [mode, changeMode] = useState<"openingAnime" | "normal">(
    "openingAnime"
  );

  useDidMount(() => {
    setTimeout(() => {
      changeIsStartAnimation(true);
      changeContent("hold-day");
      setTimeout(() => {
        changeIsStartAnimation(true);
        changeContent("iniad-fes");
        changeMode("normal");
      }, waveBaseDelay + 1300);
    }, startPushINIADFESButton.delay);
  });

  return (
    <Wrapper>
      <WaveCircle waveScaleRatio={2.4} isStartAnimation={isStartAnimation} />
      <WaveCircle waveScaleRatio={2.2} isStartAnimation={isStartAnimation} />
      <WaveCircle waveScaleRatio={2.0} isStartAnimation={isStartAnimation} />
      <WaveCircle
        waveScaleRatio={1.8}
        isStartAnimation={isStartAnimation}
        onAnimationEnd={() => {
          changeIsStartAnimation(false);
        }}
      />
      <LogoCircle
        isStartAnimation={isStartAnimation}
        onClick={() => {
          if (isStartAnimation === false && mode === "normal") {
            changeIsStartAnimation(true);
            changeContent(content === "iniad-fes" ? "hold-day" : "iniad-fes");
          }
        }}
      >
        <LogoWrapper content={content}>
          <img src={iniadfeslogo} alt="iniad fes logo" />
          <img src={holdday} alt="10/31, 11/1開催" />
        </LogoWrapper>
      </LogoCircle>
    </Wrapper>
  );
}

const pushFESButton = keyframes`

  25% {
  box-shadow: 0px 0px 0px ${bottomRightShadowColor}, 0px 0px 0px ${topLeftShadowColor};
  }

  50%,70% {
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
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 70vmin;
  height: 70vmin;

  @media screen and (min-width: ${tabletBreakPoint}px) {
    width: 40vmin;
    height: 40vmin;
  }

  & > ${WaveCircle} {
    :nth-child(1) {
      ::before,
      ::after {
        animation-delay: ${waveBaseDelay + 100}ms;
      }
    }
    :nth-child(2) {
      ::before,
      ::after {
        animation-delay: ${waveBaseDelay + 200}ms;
      }
    }
    :nth-child(3) {
      ::before,
      ::after {
        animation-delay: ${waveBaseDelay + 300}ms;
      }
    }
    :nth-child(4) {
      ::before,
      ::after {
        animation-delay: ${waveBaseDelay + 400}ms;
      }
    }
  }
`;

const LogoCircle = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${bgColor};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: ${startBoxShadow}px ${startBoxShadow}px ${startBoxShadow}px
      ${bottomRightShadowColor},
    -${startBoxShadow}px -${startBoxShadow}px ${startBoxShadow}px
      ${topLeftShadowColor};
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${pushFESButton} ${pushINIADFESDuration}ms ease-in 0ms forwards;
    `}
`;

const LogoWrapper = styled.div<{ content: "iniad-fes" | "hold-day" }>`
  position: relative;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: contain;
    width: 200px;

    :nth-child(1) {
      transition: opacity ${pushINIADFESDuration / 2}ms ease-in-out;
      ${({ content }) =>
        content === "iniad-fes" &&
        css`
          transition-delay: ${pushINIADFESDuration / 2}ms;
          opacity: 1;
        `}
      ${({ content }) =>
        content === "hold-day" &&
        css`
          transition-delay: 0ms;
          opacity: 0;
        `}
    }

    :nth-child(2) {
      transition: opacity ${pushINIADFESDuration / 2}ms ease-in-out;
      ${({ content }) =>
        content === "iniad-fes" &&
        css`
          transition-delay: 0ms;
          opacity: 0;
        `}
      ${({ content }) =>
        content === "hold-day" &&
        css`
          transition-delay: ${pushINIADFESDuration / 2}ms;
          opacity: 1;
        `}
    }
  }
`;

export default INIADFESCircle;
