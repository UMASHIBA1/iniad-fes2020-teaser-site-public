import { keyframes } from "styled-components";

export const slideXTo = (to: string) => keyframes`
	to {
		transform: translateX(${to});
	}
`;

export const slideYTo = (to: string) => keyframes`
	to {
		transform: translateY(${to});
	}
`;
