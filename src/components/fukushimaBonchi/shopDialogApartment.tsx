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
    contentRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      minWidth: "600px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",

      paddingTop: "2rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",

      [theme.breakpoints.down("xs")]: {
        minWidth: "auto",
      },
    },
    shop: {
      alignItems: "center",
      marginBottom: "1rem",
      width: "100%",
      "&:last-child": {
        marginBottom: 0,
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

interface IApartmentDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: number;
  content: TContent;
  rooms: TContent[];
}
const ApartmentDialog: React.FC<IApartmentDialogProps> = (props) => {
  const classes = useStyles();

  const shopContents: JSX.Element[] = [];
  shopContents.push(
    <div className={classes.shop} key="orner">
      <ShopDialogContent
        id={props.id}
        content={props.content}
        includeEntrance={true}
      />
    </div>
  );
  props.rooms.map((room: TContent, i: number) => {
    shopContents.push(
      <div className={classes.shop} key={i}>
        <ShopDialogContent
          id={props.id}
          content={room}
          includeEntrance={true}
        />
      </div>
    );
  });

  return (
    <Dialog
      open={props.open}
      onClose={() => {
        props.setOpen(false);
      }}
    >
      <DialogContent className={classes.contentRoot}>
        {shopContents}
      </DialogContent>
      <DialogActions className={classes.actionsRoot}>
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
export default ApartmentDialog;
