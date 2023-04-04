import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container maxW={{ base: "480px", lg: "768px", xl: "1280px" }} px={"15px"}>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
