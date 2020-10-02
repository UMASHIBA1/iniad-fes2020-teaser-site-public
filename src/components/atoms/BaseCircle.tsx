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
  children: ReactNode;
  diameter?: string;
  shadowProps?: ShadowProps;
}

const CircleMain = styled.div<Required<Props>>`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${bgColor};
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
  box-shadow: ${({ shadowProps: { x, y, blur } }) =>
    `${x} ${y} ${blur} ${bottomRightShadowColor}, -${x} -${y} ${blur} ${topLeftShadowColor}`};
  border-radius: 50%;
`;

const BaseCircle: React.FC<Props> = ({
  children,
  diameter = "100%",
  shadowProps = { x: "5px", y: "5px", blur: "10px" },
}: Props) => {
  return (
    <CircleMain diameter={diameter} shadowProps={shadowProps}>
      {children}
    </CircleMain>
  );
};
export default BaseCircle;
