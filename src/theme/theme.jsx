import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/buttons";
import { inputTheme } from "./components/forms";
import { linksTheme } from "./components/links";

const breakpoints = {
  sm: "320px",
  md: "480px",
  lg: "768px",
  xl: "1280px",
};

const shadows = {
  mainShadow: "2px 7px 10px -6px rgba(0, 0, 0, 0.63)",
  secondShadow: "7px 4px 14px rgba(0, 0, 0, 0.11)",
};

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  mainColor: "#4FD1C5",
  mainOrange: "#F59256",
  accentOrange: "#FF6101",
  textColor: "#111111",
  secondaryTextColor: "#111321",
  thirdTextColor: "#181C27",
  accentTextColor: "#212121",
  labelColor: "rgba(17, 17, 17, 0.6)",
  placeholderColor: "rgba(27, 27, 27, 0.6)",
  blurBadge: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
};

const fonts = {
  heading: `'Manrope', sans-serif`,
  body: `'Manrope', sans-serif`,
};

const components = {
  Input: inputTheme,
  Button: buttonTheme,
  Link: linksTheme,
};
const theme = extendTheme({
  colors,
  shadows,
  breakpoints,
  fonts,
  components,
  styles: {
    global: {
      body: {
        backgroundColor: "#1a202c",
        color: "white",
      },
    },
  },
});
export default theme;
