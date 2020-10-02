import React from "react";
import styled from "styled-components";
import { gray } from "../../constants/colors";
import { tbudGothicStdH } from "../../constants/fonts";

interface Props {
  text: string;
}

const Wrapper = styled.div`
  font-size: 1.5rem;
  color: ${gray};
  /* ${tbudGothicStdH} */
`;

const BigText: React.FC<Props> = ({ text }: Props) => {
  return <Wrapper>{text}</Wrapper>;
};
export default BigText;
