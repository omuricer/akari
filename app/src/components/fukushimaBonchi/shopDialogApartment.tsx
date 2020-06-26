import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { TShop } from "@/components/fukushimaBonchi/shops";
import BusinessBadge from "@/components/fukushimaBonchi/businessBadge";

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
    content: {
      display: "flex",
      alignItems: "center",

      backgroundColor: theme.palette.primary.light,
      paddingRight: "2rem",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        padding: 0,
      },
    },
    logo: {
      height: "200px",
      marginRight: "2rem",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "auto",
        marginRight: 0,
        marginBottom: "1rem",
      },
    },
    label: {
      fontSize: "0.8rem",
      marginBottom: "0.2rem",
      marginTop: "1rem",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("xs")]: {
        alignItems: "center",
        marginBottom: "2rem",
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
          <div className={classes.info}>
            <InfoItem label="kind">
              {props.shop?.business ? (
                <BusinessBadge business={props.shop?.business} />
              ) : (
                ""
              )}
            </InfoItem>
            <InfoItem label="area">{props.shop?.area}</InfoItem>
            <InfoItem label="shop name" typo={{ variant: "h3" }}>
              {props.shop?.name}
            </InfoItem>
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

interface IInfoItemProps {
  label: string;
  typo?: TypographyProps;
}
const InfoItem: React.FC<IInfoItemProps> = (props) => {
  return (
    <React.Fragment>
      <Typography
        style={{
          fontSize: "0.8rem",
          marginBottom: "0.2rem",
          marginTop: "1rem",
          letterSpacing: "0.1em",
        }}
      >
        {props.label}
      </Typography>
      <div
        style={{
          minHeight: "18px",
          marginLeft: "0.5rem",
        }}
      >
        <Typography {...props.typo}>{props.children}</Typography>
      </div>
    </React.Fragment>
  );
};
