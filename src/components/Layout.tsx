import React from "react";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.main`
  padding: 10px;
`;

function Layout({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <Container>
      <Header>{title}</Header>
      {children}
    </Container>
  );
}

export default Layout;
