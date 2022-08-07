import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'M PLUS 1p', 'sans-serif'
    ].join(","),
    fontSize: 14,
    h1: {
      color: "#000000",
      fontSize: "1.8rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    h2: {
      color: "#000000",
      fontSize: "1.6rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    h3: {
      color: "#000000",
      fontSize: "1.3rem",
      fontWeight: 500,
      lineHeight: "1.3em",
      letterSpacing: "0.2em",
    },
    body1: {
      color: "#000000",
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
      primary: "#000000",
      secondary: "#F9A638",
    },
    primary: {
      light: "#ffffff",
      main: "#000000",
      dark: "#002884",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff7961",
      main: "#F9A638",
      dark: "#ba000d",
      contrastText: "#000000",
    },
  },
});
// theme = responsiveFontSizes(theme);

interface IThemeProps { }
const Theme: React.FC<IThemeProps> = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default Theme;
