import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-block",
      padding: "0.2em 0.5em",
      margin: "0 1rem 0 0",
      fontWeight: "bold",
      background: "#6091d3",
      borderRadius: "8px",
    },
    typo: {
      color: "#ffffff",
    },
  })
);

interface IBusinessBadgeProps {
  business: null | string;
}
const BusinessBadge: React.FC<IBusinessBadgeProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.typo}>{props.business}</Typography>
    </div>
  );
};
export default BusinessBadge;
