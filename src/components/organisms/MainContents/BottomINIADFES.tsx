import React from "react";
import styled, { css } from "styled-components";
import INIADFESLogo from "../../../statics/pngs/iniad-fes-logo.png";
import { tabletBreakPoint } from "../../../constants/breakpoints";
import overlay from "../../../commonStyles/overlay";
import { horizontalBlueGradient } from "../../../constants/colors";
import useIsStartAnimation from "../../../hooks/useIsStartAnimation";
import { slideXTo } from "../../../commonAnimations/translate";
import { toVisible } from "../../../commonAnimations/visibility";

function BottomINIADFES() {
  const [ref, isStartAnimation] = useIsStartAnimation<HTMLDivElement>({
    margin: 0,
  });
  return (
    <Wrapper>
      <ImgWrapper isStartAnimation={isStartAnimation} ref={ref}>
        <MainImg isStartAnimation={isStartAnimation} />
      </ImgWrapper>
    </Wrapper>
  );
}

const slideDuration = 300;

const ImgWrapper = styled.div<{ isStartAnimation: boolean }>`
  position: relative;
  width: 100px;
  overflow: hidden;

  @media screen and (min-width: ${tabletBreakPoint}px) {
    width: 140px;
  }

  ::after {
    ${overlay}
    content: "";
    background: ${horizontalBlueGradient};
    transform: translateX(100%);
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${slideXTo("-100%")} ${slideDuration}ms ease-in 0ms forwards;
      `}
  }
`;

const MainImg = styled.img.attrs({
  src: INIADFESLogo,
  alt: "INIAD FES",
})<{ isStartAnimation: boolean }>`
  width: 100%;
  visibility: hidden;
  object-fit: contain;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${toVisible} 1ms ease-in ${slideDuration / 2}ms forwards;
    `}
`;

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  margin: 0 0 12px 0;
`;

export default BottomINIADFES;
