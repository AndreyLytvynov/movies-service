import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container
      maxW={{ md: "container.md", lg: "container.lg", xl: "container.xl" }}
    >
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
