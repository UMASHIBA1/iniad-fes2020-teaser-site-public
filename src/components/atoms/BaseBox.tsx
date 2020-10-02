import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  bottomRightShadowColor,
  topLeftShadowColor,
  bgColor,
} from "../../constants/colors";

interface ShadowProps {
  x: string;
  y: string;
  blur: string;
}

interface Props {
  children?: ReactNode;
  width?: string;
  height?: string;
  shadowProps?: ShadowProps;
  borderRadius?: string;
}

const BoxMain = styled.div<
  Required<Pick<Props, "width" | "shadowProps" | "borderRadius">> &
    Pick<Props, "height">
>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${bgColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ shadowProps: { x, y, blur } }) =>
    `${x} ${y} ${blur} ${bottomRightShadowColor}, -${x} -${y} ${blur} ${topLeftShadowColor}`};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const BaseBox: React.FC<Props> = ({
  children,
  width = "100%",
  height,
  shadowProps = { x: "5px", y: "5px", blur: "10px" },
  borderRadius = "4px",
}: Props) => {
  return (
    <BoxMain
      width={width}
      height={height}
      shadowProps={shadowProps}
      borderRadius={borderRadius}
    >
      {children}
    </BoxMain>
  );
};
export default BaseBox;
