import React from "react";
import styled from "styled-components";
import privacyPolicyImg from "../../../statics/pngs/privacypolicy.png";
import privacyPolicyHoverImg from "../../../statics/pngs/privacypolicy-hover.png";
import { tabletBreakPoint } from "../../../constants/breakpoints";

const Img = styled.img.attrs({
  src: privacyPolicyImg,
  alt: "privacy policy",
})`
  object-fit: contain;
  width: 50px;
  @media screen and (min-width: ${tabletBreakPoint}px) {
    width: 70px;
  }
`;

const HoverImg = styled.img.attrs({
  src: privacyPolicyHoverImg,
  alt: "privacy policy",
})`
  object-fit: contain;
  width: 50px;
  @media screen and (min-width: ${tabletBreakPoint}px) {
    width: 70px;
  }
`;

const Link = styled.a.attrs({
  href: "https://iniadfes.com/03/privacy",
  target: "_blank",
  rel: "noopener noreferrer",
})`
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;

  ${Img} {
    display: block;
  }

  ${HoverImg} {
    display: none;
  }

  :hover {
    ${Img} {
      display: none;
    }
    ${HoverImg} {
      display: block;
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  margin: 6px 0 24px 0;
`;

const PrivacyPolicy: React.FC = () => {
  return (
    <Wrapper>
      <Link>
        <Img />
        <HoverImg />
      </Link>
    </Wrapper>
  );
};

export default PrivacyPolicy;
