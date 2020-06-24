import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Georgia",
      "游明朝",
      "YuMincho",
      '"Noto Serif JP"',
      '"ヒラギノ明朝 ProN W3"',
      '"Hiragino Mincho ProN"',
      "HG明朝E",
      '"ＭＳ Ｐ明朝"',
      '"ＭＳ 明朝"',
      "serif",
    ].join(","),
    fontSize: 14,
    h1: {
      color: "#485859",
      fontSize: "1.8rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    h2: {
      color: "#485859",
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    h3: {
      color: "#485859",
      fontSize: "1.3rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    body1: {
      color: "#485859",
      fontSize: "1.0rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    button: {
      textTransform: "none",
    },
  },
  palette: {
    text: {
      primary: "#F9A638",
      secondary: "#F9A638",
    },
    primary: {
      light: "#757ce8",
      main: "#FFFFFF",
      dark: "#002884",
      contrastText: "#485859",
    },
    secondary: {
      light: "#ff7961",
      main: "#606060",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
    MuiCheckbox: {
      color: "primary",
    },
    MuiRadio: {
      color: "primary",
    },
    MuiSwitch: {
      color: "primary",
    },
  },
});
// theme = responsiveFontSizes(theme);

interface IThemeProps {}
const Theme: React.FC<IThemeProps> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default Theme;
