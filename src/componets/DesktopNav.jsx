import { Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";
import { SlLogout } from "react-icons/sl";

const DesktopNav = ({ onLogout, email }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      alignItems={"center"}
      display={{ base: "none", xl: "flex" }}
    >
      <Link as={NavLink} variant={"headerLink"} to={"/popular"}>
        Popular
      </Link>
      <Link as={NavLink} variant={"headerLink"} to={"/top-rating"}>
        Top Rating
      </Link>
      <Link as={NavLink} variant={"headerLink"} to={"/now-playing"}>
        Now Playing
      </Link>
      <Link as={NavLink} variant={"headerLink"} to={"/personal"}>
        My Favorite
      </Link>
      <SearchForm />
      <Heading as="p" fontSize={"15px"}>
        {email}
      </Heading>
      <IconButton
        onClick={onLogout}
        size={25}
        bgColor={"inherit"}
        _hover={{ backgroundColor: "inherit", color: "white" }}
      >
        <SlLogout size={25} />
      </IconButton>
    </Flex>
  );
};

export default DesktopNav;
