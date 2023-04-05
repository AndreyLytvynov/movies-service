import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Heading,
  Link,
  MenuItem,
} from "@chakra-ui/react";
import { SlLogout } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

const TabletNav = ({ onLogout, email }) => {
  return (
    <Flex
      display={{ base: "none", lg: "flex", xl: "none" }}
      justifyContent={"space-between"}
      w={"100%"}
      alignItems={"center"}
    >
      <Menu autoSelect={false}>
        <MenuButton aria-label="Options">
          <HamburgerIcon boxSize={7} />
        </MenuButton>
        <MenuList p={"10px"}>
          <Flex flexDirection={"column"}>
            <MenuItem>
              <Link as={NavLink} variant={"burgerLink"} to={"/popular"}>
                Popular
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={NavLink} variant={"burgerLink"} to={"/top-rating"}>
                Top Rating
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={NavLink} variant={"burgerLink"} to={"/now-playing"}>
                Now Playing
              </Link>
            </MenuItem>
            <MenuItem>
              <Link as={NavLink} variant={"burgerLink"} to={"/personal"}>
                My Favorite
              </Link>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
      <SearchForm />
      <Flex alignItems={"center"}>
        <Heading as="p" fontSize={"15px"} mr={"10px"}>
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
    </Flex>
  );
};

export default TabletNav;
