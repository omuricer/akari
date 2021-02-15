import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: "relative",
      zIndex: 1,
      fontWeight: 400,
      backgroundColor: theme.palette.primary.main,
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

interface IFooterProps {}
const Footer: React.FC<IFooterProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.footer}>
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <Typography
          style={{
            margin: "0 0 10px 0",
            color: "#ffffff",
          }}
        >
          家守舎桃ノ音
        </Typography>
        <Typography
          style={{
            margin: 0,
            fontSize: "0.7rem",
            color: "#ffffff",
          }}
        >
          © Copyright 2019 yamorishamomonone All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
};
export default Footer;
