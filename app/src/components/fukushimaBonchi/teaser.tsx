import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Bar from "@/components/bar";
import Typography from "@material-ui/core/Typography";
import DeviceDetector from "@/components/deviceDetector";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";

const worldMap = require("@/image//fukushimabonchi/world_map.png");

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
    left: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    right: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    teaserPop: {
      "@media screen and (max-width: 480px)": {
        textAlign: "center",
      },
    },
    footer: {
      fontWeight: 400,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      textAlign: "center",
      height: "90px",
      marginTop: "auto",
      "@media screen and (max-width: 480px)": {
        height: "70px",
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

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Bar logo="image/logo_akari.svg" device={detectDevice()}></Bar>
      <div id="loading">
        <div className="animation-logo">
          <img className="star" src="image/loading/star.gif" />
          <img className="building" src="image/loading/lodo.svg" />
        </div>
      </div>
      <Grid container className={classes.content}>
        <Toolbar />
        <main className={classes.main}>
          <Grid item sm={4} lg={6} className={classes.left}>
            <img src={worldMap} style={{ width: "100%" }} />
          </Grid>
          <Grid item sm={4} lg={6} className={classes.right}>
            <div className={classes.teaserPop}>
              <Typography>comming soon...</Typography>
              <Typography variant="h2">
                空想都市
                <br />
                FUKUSHIMA BONCHI
              </Typography>
              <Typography>空き地あります。 Free for join!</Typography>
              <a href="https://note.com/fukushimakuusou/n/n46a4bd26bb81?magazine_key=m9ae2736da177">
                <Typography>詳しくはこちら</Typography>
              </a>
            </div>
          </Grid>
        </main>
        <footer className={classes.footer}>
          <Grid item xs={12}>
            <div
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <p
                style={{
                  margin: "0 0 10px 0",
                }}
              >
                家守舎桃ノ音
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.7rem",
                }}
              >
                © Copyright 2019 yamorishamomonone All rights reserved.
              </p>
            </div>
          </Grid>
        </footer>
      </Grid>
    </React.Fragment>
  );
};
export default FukushimaBonchi;
