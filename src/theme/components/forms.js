import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const search = defineStyle({
  field: {
    display: "flex",
    // alignItems: "center",
    // padding: "10px 20px",
    // height: () => ({ base: "40px", lg: "44px" }),
    // marginY: () => ({ base: "5px", lg: "10px" }),
    // borderRadius: "20px",
    // border: "1px solid #808080",
    // borderColor: "rgba(245, 146, 86, 0.5)",
    // color: "#535353",
    // backgroundColor: "white",

    // fontFamily: "Inter",
    // fontWeight: "500",
    // fontSize: "20px",
    lineHeight: "1.2",
    letterSpacing: "0.04em",

    _focus: {
      shadow: "mainShadow",
      transform: "scale(1.02)",
    },
    _hover: {
      shadow: "mainShadow",
      transform: "scale(1.02)",
    },
    // _placeholder: {
    //   fontFamily: "Inter",
    //   fontWeight: "500",
    //   fontSize: "20px",
    //   lineHeight: "1.2",
    //   letterSpacing: "0.04em",
    //   color: "labelColor",
    // },
  },
});

export const inputTheme = defineStyleConfig({
  variants: {
    search,
  },
});
