import { NavLink, useNavigate } from "react-router-dom";
import { Flex, Link, Button, Box } from "@chakra-ui/react";
import SearchForm from "./SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { useLogOutUserMutation } from "../redux/users/userApiSlice";
import { logout } from "../redux/users/userSice";

const Header = () => {
  const [loginOut] = useLogOutUserMutation();
  const dispatch = useDispatch();
  const onLogout = async () => {
    await loginOut();
    dispatch(logout());
    navigate("/login");
  };
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
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
          <SearchForm />
          <Button height={"48px"} onClick={onLogout}>
            LogOut
          </Button>
        </>
      )}
    </Flex>
  );
};

export default Header;
