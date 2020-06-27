import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    a: {
      textDecoration: "none",
      WebkitTransition: "0.5s",
      MozTransition: "0.5s",
      OTransition: "0.5s",
      MsTransition: "0.5s",
      transition: "0.5s",
      "&:hover": {
        color: theme.palette.text.secondary,
      },
    },
  })
);

interface IAProps extends React.HTMLProps<HTMLAnchorElement> {}
const A: React.FC<IAProps> = (props) => {
  const classes = useStyles();
  return (
    <a {...props}>
      <Typography className={classes.a} style={props.style}>
        {props.children}
      </Typography>
    </a>
  );
};
export default A;
