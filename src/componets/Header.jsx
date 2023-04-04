import { NavLink, useNavigate } from "react-router-dom";
import { Flex, Link, Box, Heading, IconButton } from "@chakra-ui/react";
import SearchForm from "./SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { useLogOutUserMutation } from "../redux/users/userApiSlice";
import { logout } from "../redux/users/userSice";
import { SlLogout } from "react-icons/sl";

const Header = () => {
  const [loginOut] = useLogOutUserMutation();
  const dispatch = useDispatch();
  const onLogout = async () => {
    await loginOut();
    dispatch(logout());
    navigate("/login");
  };

  const navigate = useNavigate();
  const { isLoggedIn, user } = useSelector((state) => state.users);

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} p={"10px"}>
      {!isLoggedIn ? (
        <Flex justifyContent={"space-between"} w={"100%"} alignItems={"center"}>
          <Box>
            <Link as={NavLink} variant={"headerLink"} to={"/"}>
              Home
            </Link>
            <Link as={NavLink} variant={"headerLink"} to={"/about"}>
              About
            </Link>
          </Box>
          <Box>
            <Link as={NavLink} variant={"headerLink"} to={"/register"}>
              Register
            </Link>
            <Link as={NavLink} variant={"headerLink"} to={"/login"}>
              Login
            </Link>
          </Box>
        </Flex>
      ) : (
        <>
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
            {user.email}
          </Heading>
          <IconButton
            onClick={onLogout}
            size={25}
            bgColor={"inherit"}
            _hover={{ backgroundColor: "inherit", color: "white" }}
          >
            <SlLogout size={25} />
          </IconButton>
        </>
      )}
    </Flex>
  );
};

export default Header;
