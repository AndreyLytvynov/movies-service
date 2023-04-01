import { NavLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <Flex alignItems={"center"}>
      <Link as={NavLink} variant={"headerLink"} to={"/popular"}>
        Popular
      </Link>
      <Link as={NavLink} variant={"headerLink"} to={"/top-rating"}>
        Top Rating
      </Link>
      <Link as={NavLink} variant={"headerLink"} to={"/now-playing"}>
        Now Playing
      </Link>
      <SearchForm />
      <Link as={NavLink} variant={"headerLink"} to={"/register"}>
        Register
      </Link>
      <Link as={NavLink} variant={"headerLink"} to={"/login"}>
        Login
      </Link>
    </Flex>
  );
};

export default Header;
