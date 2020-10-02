import React from "react";
import styled from "styled-components";
import { tabletBreakPoint } from "../../../constants/breakpoints";
import lastYearSiteImg from "../../../statics/pngs/last_year_site.png";
import hoverLastYearSiteImg from "../../../statics/pngs/last_year_site_hover.png";

const Img = styled.img.attrs({
  src: lastYearSiteImg,
  alt: "去年のサイトへ",
})`
  object-fit: contain;
  width: 100px;
  @media screen and (min-width: ${tabletBreakPoint}px) {
    width: 120px;
  }
`;

const HoverImg = styled.img.attrs({
  src: hoverLastYearSiteImg,
  alt: "去年のサイトへ",
})`
  object-fit: contain;
  width: 100px;
  @media screen and (min-width: ${tabletBreakPoint}px) {
    width: 120px;
  }
`;

const Link = styled.a.attrs({
  href: "https://iniadfes.com/03/",
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
  margin: 12px 0 6px 0;
`;

const LastYearSiteLink: React.FC = () => {
  return (
    <Wrapper>
      <Link>
        <Img />
        <HoverImg />
      </Link>
    </Wrapper>
  );
};

export default LastYearSiteLink;
