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

const goBack = defineStyle({
  fontWeight: "200",
  height: "10px",
  fontSize: "15px",
  _hover: {
    textDecoration: "underline",
  },
});

const addFavorites = defineStyle({
  fontWeight: "200",
  backgroundColor: "gray.700",
  fontSize: "15px",
  borderRadius: 0,
  _hover: {
    backgroundColor: "gray.600",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    authFormIcon,
    LoginBtn,
    goBack,
    addFavorites,
  },
});
