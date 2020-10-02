import React, { useState } from "react";
import styled, { css } from "styled-components";
import { bgColor } from "../../constants/colors";
import { tbudGothicStdR } from "../../constants/fonts";
import MainVisual from "../organisms/MainVisual/MainVisual";
import Contents from "../organisms/MainContents/Contents";
import ExpandAnimeWrapper from "../templates/ExpandAnimeWrapper";
import { showMainPageOrder } from "../../animationOrders/openingAnimationOrder";
import PowerButton from "../organisms/OpeningAnimation/PowerButton/PowerButton";
import Loading from "../organisms/OpeningAnimation/Loading";
import useDidMount from "../../hooks/useDidMount";
import HomeBG from "../organisms/HomeBG";

const Wrapper = styled.div<{ isPreventScroll: boolean }>`
  width: 100%;
  background-color: ${bgColor};
  overflow-x: hidden;
  ${tbudGothicStdR}
  &>div {
    ${({ isPreventScroll }) =>
      isPreventScroll &&
      css`
        overflow: hidden;
        height: 100vh;
      `}
    ${({ isPreventScroll }) =>
      !isPreventScroll &&
      css`
        overflow: auto;
      `}
  }
`;

const Home: React.FC = () => {
  const [isPreventScroll, changeIsPreventScroll] = useState(true);
  useDidMount(() => {
    const prevent = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener("touchmove", prevent, { passive: false });
    setTimeout(() => {
      changeIsPreventScroll(false);
      document.removeEventListener("touchmove", prevent);
    }, showMainPageOrder.duration / 2 + showMainPageOrder.delay);
  });
  return (
    <Wrapper isPreventScroll={isPreventScroll}>
      <PowerButton />
      <Loading />
      <ExpandAnimeWrapper
        delay={showMainPageOrder.delay}
        duration={showMainPageOrder.duration}
      >
        <HomeBG />
        <MainVisual />
        <Contents />
      </ExpandAnimeWrapper>
    </Wrapper>
  );
};
export default Home;
