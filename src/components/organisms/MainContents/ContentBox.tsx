import React, { ReactNode } from "react";
import styled from "styled-components";
import BaseBox from "../../atoms/BaseBox";
import InsetLine from "../../atoms/InsetLine";
import GradientPin from "../../molecules/GradientPin";
import AnimationOrderType from "../../../animationOrders/AnimationOrderType";
import useIsStartAnimation from "../../../hooks/useIsStartAnimation";
import { fadeIn } from "../../../commonAnimations/opacity";

interface Props {
  title: ReactNode;
  mainContent: ReactNode;
}

const fadeInAnimationOrder: AnimationOrderType = {
  duration: 300,
  delay: 100,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 94%;
  margin: 12px 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 8px;
  overflow: hidden;
  border-radius: 10000px;
`;

const gradientPinDiameter = 40;

const TitleTextWrapper = styled.span<{ isStartAnimation: boolean }>`
  margin-left: 8px;
  font-size: 18px;
  opacity: 0;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadeIn : "none")}
    ${fadeInAnimationOrder.duration}ms ease-in ${fadeInAnimationOrder.delay}ms
    forwards;
`;

const MainContentWrapper = styled.div`
  width: 98%;
  padding: 12px;
`;

const ContentBox: React.FC<Props> = ({ title, mainContent }: Props) => {
  const [ref, isStartAnimation] = useIsStartAnimation<HTMLSpanElement>({});

  return (
    <Wrapper>
      <BaseBox
        shadowProps={{ x: "10px", y: "10px", blur: "20px" }}
        borderRadius={"6px"}
      >
        <ContentWrapper>
          <InsetLine width="98%" height="48px" borderRadius="24px">
            <TitleWrapper>
              <GradientPin diameter={`${gradientPinDiameter}px`} />
              <TitleTextWrapper ref={ref} isStartAnimation={isStartAnimation}>
                {title}
              </TitleTextWrapper>
            </TitleWrapper>
          </InsetLine>
          <MainContentWrapper>{mainContent}</MainContentWrapper>
        </ContentWrapper>
      </BaseBox>
    </Wrapper>
  );
};

export default ContentBox;
