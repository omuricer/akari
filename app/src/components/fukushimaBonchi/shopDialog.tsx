import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { TShop } from "@/components/fukushimaBonchi/shop";
import A from "@/components/form/a";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRBGで指定している
    },
    contentRoot: {
      minWidth: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    content: {
      display: "flex",
      alignItems: "center",

      backgroundColor: theme.palette.primary.light,
      paddingTop: "2rem",
      paddingBottom: "1rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    logo: {
      width: "100px",
      [theme.breakpoints.down("xs")]: {
        width: "100px",
      },
    },
    actionsRoot: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
    },
  })
);

interface IShopDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  shop: null | TShop;
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
        <div className={classes.content}>
          <img src={props.shop?.logo} className={classes.logo} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <div style={{ display: "inline" }}>{props.shop?.bussiness}</div>
              <div style={{ display: "inline" }}>{props.shop?.area}</div>
            </div>
            <Typography>{props.shop?.name}</Typography>
          </div>
        </div>
      </DialogContent>
      <DialogActions className={classes.actionsRoot}>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          href={props.shop?.shopURL}
          style={{ marginRight: "1rem", width: "110px" }}
        >
          入店する
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            props.setOpen(false);
          }}
          autoFocus
          style={{ width: "110px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ShopDialog;
