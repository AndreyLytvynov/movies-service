import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoginUserMutation } from "../../redux/users/userApiSlice";
import { login } from "../../redux/users/userSice";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Toast from "../../hooks/toast";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Email must be in format: email@domain.com")
    .min(6, "Minimal email length is 6 symbols")
    .max(32, "Max email length is 32 symbols")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(7, "Minimal password length is 8 symbols")
    .max(32, "Max password length is 32 symbols")
    .required("Password is required"),
});

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const handleClick = () => setShow(!show);
  const { addToast } = Toast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { data: res, error } = await loginUser(data);

      if (error) {
        return addToast({ message: error.data.status, type: "error" });
      }
      addToast({ message: res.status, type: "success" });

      dispatch(login(res));
      reset();
      navigate("/popular");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex
      maxW={"608px"}
      width={"100%"}
      bg={"white"}
      boxShadow={"secondShadow"}
      borderRadius={"40px"}
      padding={"60px 80px"}
      flexDirection={"column"}
    >
      <Heading
        variant={"authForm"}
        mx={"auto"}
        mb={"40px"}
        color={"blackAlpha.900"}
      >
        Login
      </Heading>
      <Stack gap={"16px"} w="100%" as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email} position="relative">
          <Input
            variant={"login"}
            placeholder={"Email"}
            {...register("email")}
          />
          <FormErrorMessage position="absolute" bottom="-20px">
            {errors?.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password} position="relative">
          <InputGroup>
            <Input
              variant={"login"}
              placeholder={"Password"}
              type={show ? "text" : "password"}
              {...register("password")}
            />
            <InputRightElement>
              <IconButton
                variant={"authFormIcon"}
                icon={show ? <BiShow /> : <BiHide />}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage position="absolute" bottom="-20px">
            {errors.password?.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          // height={{ base: "44px", lg: "48px" }}
          type="submit"
          isLoading={isLoading}
          variant={"LoginBtn"}
        >
          Login
        </Button>
      </Stack>

      <Box
        mx={"auto"}
        mt={"40px"}
        fontSize={"12px"}
        lineHeight={"16px"}
        display={"flex"}
        gap={"5px"}
        color={"black"}
      >
        Do not have an account?
        <Link as={NavLink} to={"/register"} display={"flex"}>
          <Text color="#3091EB">Register</Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default LoginForm;
