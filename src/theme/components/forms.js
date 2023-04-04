import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const search = defineStyle({
  field: {
    display: "flex",
    lineHeight: "1.2",
    letterSpacing: "0.04em",
    color: "black",
    _focus: {
      shadow: "mainShadow",
      transform: "scale(1.02)",
    },
    _hover: {
      shadow: "mainShadow",
      transform: "scale(1.02)",
    },
  },
});

const searchMobile = defineStyle({
  field: {
    display: "flex",
    lineHeight: "1.2",
    letterSpacing: "0.04em",
    color: "black",
    border: "1px solid",
    borderColor: "blackAlpha.400",
    _focus: {
      shadow: "mainShadow",
    },
  },
});

const login = defineStyle({
  field: {
    display: "flex",
    lineHeight: "1.2",
    letterSpacing: "0.04em",
    color: "black",
    boxShadow: "mainShadow",
    _focus: {
      shadow: "mainShadow",
      transform: "scale(1.02)",
    },
    _hover: {
      shadow: "mainShadow",
      transform: "scale(1.02)",
    },
  },
});

export const inputTheme = defineStyleConfig({
  variants: {
    search,
    searchMobile,
    login,
  },
});
