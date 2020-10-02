import React from "react";
import styled from "styled-components";
import BaseCircle from "../atoms/BaseCircle";
import { horizontalBlueGradient } from "../../constants/colors";

const BlueGradientCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${horizontalBlueGradient};
  border-radius: 50%;
  width: 90%;
  height: 90%;
`;

const TranslucentCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  opacity: 0.5;
  border-radius: 50%;
  width: 85%;
  height: 85%;
`;

interface Props {
  diameter: string;
}

const GradientPin: React.FC<Props> = ({ diameter }: Props) => {
  return (
    <BaseCircle diameter={diameter}>
      <BlueGradientCircle>
        <TranslucentCircle />
      </BlueGradientCircle>
    </BaseCircle>
  );
};

export default GradientPin;
