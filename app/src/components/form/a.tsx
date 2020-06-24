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
        color: theme.palette.text.primary,
      },
    },
  })
);

interface IAProps {
  href: string;
}
const A: React.FC<IAProps> = (props) => {
  const classes = useStyles();
  return (
    <a href={props.href}>
      <Typography className={classes.a}>{props.children}</Typography>
    </a>
  );
};
export default A;
