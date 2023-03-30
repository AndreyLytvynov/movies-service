import { NavLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <Flex alignItems={"center"}>
      <Link as={NavLink} variant={"headerLink"} to={"/"}>
        Popular
      </Link>
      <Link as={NavLink} variant={"headerLink"} to={"/movies"}>
        Top Rating
      </Link>
      {/* <Link as={NavLink} variant={"headerLink"} to={"/about"}>
        About
      </Link> */}
      {/* <Link as={NavLink} variant={"headerLink"} to={"/search"}>
        Search
      </Link> */}
      <SearchForm />
    </Flex>
  );
};

export default Header;
