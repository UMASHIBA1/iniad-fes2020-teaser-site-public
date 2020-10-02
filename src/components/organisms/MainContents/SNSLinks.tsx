import React from "react";
import styled, { css } from "styled-components";
import officialSNS from "../../../statics/pngs/official-sns.png";
import SNSLinkIcon from "../../atoms/SNSLinkIcon";
import TwitterLogo from "../../../statics/svgs/twitter-icon.svg";
import InstagramLogo from "../../../statics/pngs/instagram-logo.png";
import InsetLine from "../../atoms/InsetLine";
import useIsStartAnimation from "../../../hooks/useIsStartAnimation";
import { expand } from "../../../commonAnimations/scale";
import { smBreakPoint } from "../../../constants/breakpoints";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  z-index: 1;
  margin: 0 0 120px;
  transform: scale(0, 0);
  width: 420px;
  height: 240px;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${expand()} 200ms ease-in 0ms forwards;
    `}

  @media screen and (max-width: ${smBreakPoint}px) {
    width: 96%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OfficialSNS = styled.img.attrs({
  src: officialSNS,
  alt: "公式SNS",
})`
  object-fit: contain;
  width: 140px;
`;

const LinksWrapper = styled.div<{ isStartAnimation: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > a {
    margin: 12px;
  }
`;

const SNSLinks = () => {
  const [ref, isStartAnimation] = useIsStartAnimation<HTMLDivElement>({
    margin: 0,
  });
  return (
    <Wrapper ref={ref} isStartAnimation={isStartAnimation}>
      <InsetLine>
        <ContentWrapper>
          <OfficialSNS />
          <LinksWrapper isStartAnimation={isStartAnimation}>
            <SNSLinkIcon
              iconPath={TwitterLogo}
              alt="公式Twitterリンク"
              href=""
              bgColor="#00aced"
            />
            <SNSLinkIcon
              iconPath={InstagramLogo}
              alt="公式Instagramリンク"
              href=""
              bgColor="#CF2E92"
              width="60%"
            />
          </LinksWrapper>
        </ContentWrapper>
      </InsetLine>
    </Wrapper>
  );
};

export default SNSLinks;
