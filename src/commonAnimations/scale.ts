import { keyframes } from "styled-components";

export const expand = (scaleXTo = 1, scaleYTo = 1) => keyframes`
to {
  transform: scale(${scaleXTo}, ${scaleYTo});
}
`;
