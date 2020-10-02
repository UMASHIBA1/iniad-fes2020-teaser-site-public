import React, { ReactNode } from "react";
import styled from "styled-components";
import BaseBox from "./BaseBox";
import { bgColor } from "../../constants/colors";
import { tabletBreakPoint } from "../../constants/breakpoints";

interface ShadowProps {
  x: string;
  y: string;
  blur: string;
}

interface Props {
  children: ReactNode;
  width?: string;
  height?: string;
  onClickFC?: () => void;
}

// NOTE: ほんとはbuttonタグでやりたかったけどiOSでデザイン崩れたからdivでやってる
const ButtonMain = styled.div<Pick<Props, "height" | "width">>`
  background-color: ${bgColor};
  width: ${({ width }) => width};
  height: ${({ height }) => (height !== undefined ? height : "36px")};
  padding: 0;
  border: none;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  @media screen and (min-width: ${tabletBreakPoint}px) {
    min-width: 160px;
    height: 48px;
  }
`;

const Button: React.FC<Props> = ({
  children,
  onClickFC,
  width,
  height,
}: Props) => {
  const shadowProps = { x: "5px", y: "5px", blur: "10px" };
  return (
    <ButtonMain onClick={onClickFC} width={width} height={height}>
      <BaseBox width={"100%"} height={"100%"} shadowProps={shadowProps}>
        {children}
      </BaseBox>
    </ButtonMain>
  );
};
export default Button;
