import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
  })
);

interface ITemplateHeroProps {}
const Hero: React.FC<ITemplateHeroProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div id="loading">
        <div className="animation-logo">
          <img className="star" src="image/loading/star.gif" />
          <img className="building" src="image/loading/lodo.svg" />
        </div>
      </div>
      <Grid container className={classes.content}>
        {props.children}
      </Grid>
    </React.Fragment>
  );
};
export default Hero;
