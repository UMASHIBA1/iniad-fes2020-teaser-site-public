import React from "react";
import styled from "styled-components";
import ThemeText from "./ThemeText";
import Video from "./Video";
import OnlineHoldDecision from "./OnlineHoldDecision";
import HoldDayAndOnline from "./HoldDayAndOnline";
import BottomINIADFES from "./BottomINIADFES";
import LastYearSiteLink from "./LastYearSiteLink";
import PrivacyPolicy from "./PrivacyPolicy";
import SNSLinks from "./SNSLinks";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
`;

const MainWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: calc(100% - 24px);
  max-width: 800px;
`;

function Contents() {
  return (
    <Wrapper>
      <MainWrapper>
        <OnlineHoldDecision />
        <ThemeText />
        <Video />
        <HoldDayAndOnline />
        <SNSLinks />
        <BottomINIADFES />
        <LastYearSiteLink />
        <PrivacyPolicy />
      </MainWrapper>
    </Wrapper>
  );
}

export default Contents;
