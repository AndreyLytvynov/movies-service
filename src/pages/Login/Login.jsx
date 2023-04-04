import LoginForm from "../../componets/auth/LoginForm";
import { Flex } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex justifyContent={"center"} pt={"100px"}>
      <LoginForm />
    </Flex>
  );
};

export default Login;
