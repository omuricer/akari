import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Bar from "components/bar";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Toolbar from "@material-ui/core/Toolbar";
import Footer from "components/footer";
import Loading from "components/loading";
import Head from "./head";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
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

interface ITemplateHCFProps extends React.HTMLProps<HTMLElement> {}
const HCF: React.FC<ITemplateHCFProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Head />
      <Bar logo="/image/logo_akari.svg" breakPoint={detectBreakPoint()}></Bar>
      {/* <Loading /> */}
      <Grid container className={classes.content}>
        <Toolbar />
        {/* TODO: id content 消したい */}
        <main className={classes.main} {...props} id="content">
          <section className="page">{props.children}</section>
        </main>
        <footer>
          <Footer />
        </footer>
      </Grid>
    </>
  );
};
export default HCF;
