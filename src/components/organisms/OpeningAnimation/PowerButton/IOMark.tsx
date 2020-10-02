import React from "react";
import styled from "styled-components";
import OMark from "./OMark";
import IMark from "./IMark";

const IOMarkOutLine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IOMark = () => {
  return (
    <IOMarkOutLine>
      <OMark />
      <IMark />
    </IOMarkOutLine>
  );
};

export default IOMark;
