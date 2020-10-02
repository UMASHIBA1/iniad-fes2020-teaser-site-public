import React from "react";
import styled from "styled-components";
import {
  bottomRightShadowColor,
  topLeftShadowColor,
  bgColor,
} from "../../constants/colors";

interface Props {
  iconPath: string;
  alt: string;
  href: string;
  bgColor: string;
  width?: string;
}

const Wrapper = styled.a.attrs<Pick<Props, "href">>(({ href }) => ({
  href: href,
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${bgColor};
  box-shadow: 4px 4px 8px ${bottomRightShadowColor},
    -4px -4px 8px ${topLeftShadowColor};

  transition: box-shadow 200ms ease-in;

  :hover {
    box-shadow: 2px 2px 4px ${bottomRightShadowColor},
      -2px -2px 4px ${topLeftShadowColor};
  }
`;

const GradationCircle = styled.div<Pick<Props, "bgColor">>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;

const IconImg = styled.img.attrs<Pick<Props, "iconPath" | "alt">>(
  ({ iconPath, alt }) => ({
    src: iconPath,
    alt: alt,
  })
)<Pick<Props, "iconPath" | "alt" | "width">>`
  object-fit: contain;
  width: ${({ width }) => width};
  border-radius: center;
`;

const SNSLinkIcon: React.FC<Props> = ({
  iconPath,
  alt,
  href,
  bgColor,
  width = "100%",
}: Props) => {
  return (
    <Wrapper href={href}>
      <GradationCircle bgColor={bgColor}>
        <IconImg iconPath={iconPath} alt={alt} width={width} />
      </GradationCircle>
    </Wrapper>
  );
};

export default SNSLinkIcon;
