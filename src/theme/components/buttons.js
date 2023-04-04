import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const authFormIcon = defineStyle({
  borderRadius: "full",
  width: { base: "30px", lg: "44px" },
  height: (theme) => {
    return { base: theme.blur.sm };
  },
  padding: () => ({ base: "7px", lg: "10px" }),
  color: "labelColor",
  fontSize: () => ({ base: "20", lg: "24px" }),

  _hover: {
    color: "textColor",
  },
});

const LoginBtn = defineStyle({
  margin: "0 auto",
  backgroundColor: "blue.600",
  _hover: {
    backgroundColor: "blue.500",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    authFormIcon,
    LoginBtn,
  },
});
