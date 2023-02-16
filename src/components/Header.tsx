import React from "react";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 20px;
  margin: 0 0 20px;
`;

function Header({ children }: PropsWithChildren) {
  return <H1>{children}</H1>;
}

export default Header;
