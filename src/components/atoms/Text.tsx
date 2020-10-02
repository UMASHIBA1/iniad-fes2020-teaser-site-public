import React from "react";
import styled from "styled-components";
import { gray } from "../../constants/colors";

interface Props {
  text: string;
}

const Wrapper = styled.div`
  font-size: 1rem;
  color: ${gray};
`;

const Text: React.FC<Props> = ({ text }: Props) => {
  return <Wrapper>{text}</Wrapper>;
};

export default Text;
