import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    contentRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      minWidth: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      [theme.breakpoints.down("xs")]: {
        minWidth: "auto",
      },
    },
    actionsRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      justifyContent: "center",
    },
  })
);

interface IYoutubeDialogProps {
  open: boolean;
  onClose: () => void;
}
const YoutubeDialog: React.FC<IYoutubeDialogProps> = (props) => {
  const classes = useStyles();

  return (
    <Dialog open={props.open} onClose={props.onClose} className={classes.root}>
      <DialogContent className={classes.contentRoot}>aaaa</DialogContent>
      <DialogActions className={classes.actionsRoot}>
        <Button
          variant="outlined"
          size="large"
          onClick={props.onClose}
          style={{ width: "110px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default YoutubeDialog;
