import React from "react";
import styled, { keyframes } from "styled-components";
import { showIMarkOrder } from "../../../../animationOrders/openingAnimationOrder";

const showIMark = keyframes`
from {
  transform: translateY(100%);
}

to {
  transform: translateY(0);
}
`;

const IMarkOutLine = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  overflow: hidden;
`;

const IMarkBase = styled.div`
  position: absolute;
  width: 20px;
  border-radius: 15px;
`;

const WhiteIMark = styled(IMarkBase)`
  background: #adb4bf;
  overflow: hidden;
  height: 43%;
`;

const ColorIMark = styled(IMarkBase)`
  height: 100%;
  background: rgb(160, 37, 214);
  background: linear-gradient(
    0deg,
    rgba(160, 37, 214, 1) 0%,
    rgba(24, 115, 200, 1) 53%,
    rgba(0, 212, 255, 1) 100%
  );
  animation: ${showIMark} ${showIMarkOrder.duration}ms ease-in
    ${showIMarkOrder.delay}ms both;
`;

const IMark = () => {
  return (
    <IMarkOutLine>
      <WhiteIMark>
        <ColorIMark />
      </WhiteIMark>
    </IMarkOutLine>
  );
};

export default IMark;
