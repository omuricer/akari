import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

interface IFooterProps {}
const Footer: React.FC<IFooterProps> = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.footer}>
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
  );
};
export default Footer;
