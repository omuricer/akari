import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Bar from "@/components/bar";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Toolbar from "@material-ui/core/Toolbar";
import Footer from "@/components/footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#CAF2FA",
    },
    main: {
      flex: 1,
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
  })
);

const detectBreakPoint = () => {
  const theme = useTheme();
  type breakPoint = "xs" | "sm" | "md" | "lg";
  const breakPoints: breakPoint[] = ["xs", "sm", "md", "lg"];

  let detectedBreakPoint: null | breakPoint = null;
  breakPoints.forEach((breakPoint: breakPoint) => {
    if (useMediaQuery(theme.breakpoints.up(breakPoint))) {
      detectedBreakPoint = breakPoint;
      return;
    }
  });
  return detectedBreakPoint ?? "lg";
};

interface ITemplateHCFProps {}
const TemplateHCF: React.FC<ITemplateHCFProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Bar logo="image/logo_akari.svg" breakPoint={detectBreakPoint()}></Bar>
      <div id="loading">
        <div className="animation-logo">
          <img className="star" src="image/loading/star.gif" />
          <img className="building" src="image/loading/lodo.svg" />
        </div>
      </div>
      <Grid container className={classes.content}>
        <Toolbar />
        <main className={classes.main}>{props.children}</main>
        <footer>
          <Footer />
        </footer>
      </Grid>
    </React.Fragment>
  );
};
export default TemplateHCF;
