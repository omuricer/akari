import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Bar from "@/components/bar";
import Grid from "@material-ui/core/Grid";
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
      "@media screen and (max-width: 480px)": {
        flexDirection: "column",
      },
    },
  })
);

const detectDevice = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  if (
    ua.indexOf("iphone") > 0 ||
    ua.indexOf("ipod") > 0 ||
    (ua.indexOf("android") > 0 && ua.indexOf("mobile") > 0)
  ) {
    return "sp";
  }
  if (ua.indexOf("ipad") > 0 || ua.indexOf("android") > 0) {
    // iOS12 まで
    return "tab";
  }
  if (
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document)
  ) {
    // iOS13 以降
    return "tab";
  }
  return "pc";
};

interface ITemplateHCFProps {}
const TemplateHCF: React.FC<ITemplateHCFProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Bar logo="image/logo_akari.svg" device={detectDevice()}></Bar>
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
