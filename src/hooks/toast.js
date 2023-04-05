import { useToast } from "@chakra-ui/react";

const Toast = () => {
  const toast = useToast();

  const addToast = ({ type, message }) => {
    toast({
      description: message,
      status: type,
      duration: 5000,
      position: "bottom",
      isClosable: true,
      color: "green",
    });
  };

  return { addToast };
};

export default Toast;
