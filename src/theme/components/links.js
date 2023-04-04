import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const headerLink = defineStyle({
  marginRight: "15px",
  padding: "5px 10px",
  _hover: {
    textDecoration: "underline",
  },
  _activeLink: {
    backgroundColor: "blue.600",
    color: "white",
  },
});

export const linksTheme = defineStyleConfig({
  variants: { headerLink },
});
