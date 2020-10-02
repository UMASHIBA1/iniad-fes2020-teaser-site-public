import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  href: string;
  children: ReactNode;
}

const LinkMain = styled.a.attrs<{ href: Props["href"] }>(({ href }) => ({
  href: href,
}))`
  width: 100%;
  height: 100%;
`;

const Link: React.FC<Props> = ({ children, ...props }: Props) => {
  return <LinkMain {...props}>{children}</LinkMain>;
};

export default Link;
