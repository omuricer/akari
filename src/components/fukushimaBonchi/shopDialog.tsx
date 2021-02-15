import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { TContent } from "components/fukushimaBonchi/shops";
import ShopDialogContent from "components/fukushimaBonchi/shopDialogContent";

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
      [theme.breakpoints.down("sm")]: {
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

interface IShopDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number;
  content: TContent;
}
const ShopDialog: React.FC<IShopDialogProps> = (props) => {
  const classes = useStyles();

  return (
    <Dialog
      open={props.open}
      onClose={() => {
        props.setOpen(false);
      }}
      className={classes.root}
    >
      <DialogContent className={classes.contentRoot}>
        <ShopDialogContent id={props.id} content={props.content} />
      </DialogContent>
      <DialogActions className={classes.actionsRoot}>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          href={props.content?.shopURL}
          target="_blank"
          style={{
            marginRight: "1rem",
            width: "110px",
            display: props.content.shopURL == "" ? "none" : "block",
          }}
        >
          入店する
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            props.setOpen(false);
          }}
          style={{ width: "110px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ShopDialog;
