import { Flex } from "@chakra-ui/react";
import RegistrationForm from "../../componets/auth/RegistrationForm";

const Register = () => {
  return (
    <Flex justifyContent={"center"} pt={"100px"}>
      <RegistrationForm />
    </Flex>
  );
};

export default Register;
