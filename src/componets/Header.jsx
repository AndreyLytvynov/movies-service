import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Flex justify={"space-between"}>
      <Box>
        <NavLink to={"/"}>Home</NavLink>
      </Box>
      <Box>
        <NavLink to={"/about"}>About</NavLink>
      </Box>
      <Box>
        <NavLink to={"/movies"}>Movies</NavLink>
      </Box>
    </Flex>
  );
};

export default Header;
