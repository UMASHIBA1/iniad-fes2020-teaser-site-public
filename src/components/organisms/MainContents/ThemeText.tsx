import React from "react";
import styled, { css } from "styled-components";
import BaseBox from "../../atoms/BaseBox";
import themetitle from "../../../statics/pngs/theme-title.png";
import thememain from "../../../statics/pngs/theme-main.png";
import useIsStartAnimation from "../../../hooks/useIsStartAnimation";
import { slideXTo } from "../../../commonAnimations/translate";
import { horizontalBlueGradient } from "../../../constants/colors";
import { toVisible } from "../../../commonAnimations/visibility";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 64px 0 92px;
  gap: 120px;
`;

const themeTextsAnimationDuration = 500;

const ThemeTitleWrapper = styled.div<{ isStartAnimation: boolean }>`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 120px;
  height: 2.2rem;
  overflow-x: hidden;

  & > img {
    width: 100%;
    object-fit: contain;
    visibility: hidden;
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${toVisible} 1ms ease-in-out
          ${themeTextsAnimationDuration / 2}ms forwards;
      `}
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: ${horizontalBlueGradient};
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${slideXTo("100%")} ${themeTextsAnimationDuration}ms
          ease-in-out 0ms forwards;
      `}
  }
`;

const ThemeMainWrapper = styled.div<{ isStartAnimation: boolean }>`
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 80%;
  max-width: 360px;
  overflow-x: hidden;

  & > img {
    width: 100%;
    object-fit: contain;
    visibility: hidden;
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${toVisible} 1ms ease-in-out
          ${themeTextsAnimationDuration / 2}ms forwards;
      `}
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: ${horizontalBlueGradient};
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${slideXTo("-100%")} ${themeTextsAnimationDuration}ms
          ease-in-out 0ms forwards;
      `}
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  gap: 32px;
`;

const LineWrapper = styled.div<{
  isStartAnimation: boolean;
  whichLine: "up" | "down";
}>`
  width: 100%;
  height: 8px;
  display: grid;
  justify-items: center;
  align-items: center;
  overflow-x: hidden;

  & > div {
    ${({ whichLine }) =>
      whichLine === "up" &&
      css`
        transform: translateX(101%);
      `}
    ${({ whichLine }) =>
      whichLine === "down" &&
      css`
        transform: translateX(-101%);
      `}
  ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${slideXTo("0")} 400ms ease-in-out 100ms forwards;
      `}
  }
`;

const ThemeText: React.FC = () => {
  const [ref, isStartAnimation] = useIsStartAnimation<HTMLDivElement>({
    margin: 400,
  });
  return (
    <Wrapper ref={ref}>
      <LineWrapper isStartAnimation={isStartAnimation} whichLine="up">
        <BaseBox
          width="calc(100% - 8px)"
          height="2px"
          shadowProps={{ x: "2px", y: "2px", blur: "2px" }}
        />
      </LineWrapper>
      <ContentWrapper>
        <ThemeTitleWrapper isStartAnimation={isStartAnimation}>
          <img src={themetitle} alt="テーマ" />
        </ThemeTitleWrapper>
        <ThemeMainWrapper isStartAnimation={isStartAnimation}>
          <img src={thememain} alt="not stay home but stay world" />
        </ThemeMainWrapper>
      </ContentWrapper>
      <LineWrapper isStartAnimation={isStartAnimation} whichLine="down">
        <BaseBox
          width="calc(100% - 8px)"
          height="2px"
          shadowProps={{ x: "2px", y: "2px", blur: "2px" }}
        />
      </LineWrapper>
    </Wrapper>
  );
};

export default ThemeText;
