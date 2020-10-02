import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  bottomRightShadowColor,
  topLeftShadowColor,
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

const Wrapper = styled.div<Required<Omit<Props, "children">>>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ shadowProps: { x, y, blur } }) =>
    `inset ${x} ${y} ${blur} ${bottomRightShadowColor}, inset -${x} -${y} ${blur} ${topLeftShadowColor}`};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const InsetLine: React.FC<Props> = ({
  children,
  width = "100%",
  height = "100%",
  shadowProps = { x: "5px", y: "5px", blur: "10px" },
  borderRadius = "12px",
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      shadowProps={shadowProps}
      borderRadius={borderRadius}
    >
      {children}
    </Wrapper>
  );
};

export default InsetLine;
