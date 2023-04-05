import { NavLink, useNavigate } from "react-router-dom";
import { Flex, Link, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLogOutUserMutation } from "../redux/users/userApiSlice";
import { logout } from "../redux/users/userSice";
import DesktopNav from "./DesktopNav";
import TabletNav from "./TabletNav";
import MobileNav from "./MobileNav";

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
          <DesktopNav onLogout={onLogout} email={user.email} />
          <TabletNav onLogout={onLogout} email={user.email} />
          <MobileNav onLogout={onLogout} email={user.email} />
        </>
      )}
    </Flex>
  );
};

export default Header;
