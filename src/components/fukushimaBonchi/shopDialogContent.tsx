import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { TContent } from "components/fukushimaBonchi/shops";
import BusinessBadge from "components/fukushimaBonchi/businessBadge";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: theme.palette.primary.light,
      width: "100%",
    },
    content: {
      width: "100%",
      display: "flex",
      alignItems: "center",

      paddingRight: "2rem",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        padding: 0,
      },
    },
    logo: {
      width: "50%",
      margin: "2rem",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: "auto",
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: "1rem",
      },
    },
    shopContent: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("xs")]: {
        alignItems: "center",
        marginBottom: "2rem",
      },
    },
    label: {
      fontSize: "0.8rem",
      marginBottom: "0.2rem",
      marginTop: "1rem",
    },
    info: {
      minHeight: "18px",
      marginLeft: "0.5rem",
      [theme.breakpoints.down("xs")]: {
        marginLeft: "0",
      },
    },
  });
});

const isTenant = (content: TContent) => {
  return content.room !== undefined;
};
const generateLogoPath = (id: number, content: TContent) => {
  return `/image/fukushimabonchi/${id}${
    content.room ? `/${content.room}` : ""
  }/logo.${content.logoExt}`;
};

interface IShopDialogContentProps {
  id: number;
  content: TContent;
  includeEntrance?: boolean;
}
const ShopDialogContent: React.FC<IShopDialogContentProps> = (props) => {
  const classes = useStyles();

  const room = isTenant(props.content) ? (
    <React.Fragment>
      <Typography
        style={{
          fontSize: "0.8rem",
          marginBottom: "0.2rem",
          marginTop: "1rem",
          letterSpacing: "0.1em",
        }}
      >
        room
      </Typography>
      <Typography variant="h3">{props.content.room}</Typography>
    </React.Fragment>
  ) : (
    ""
  );
  const entrance = props.includeEntrance ? (
    <Button
      variant="outlined"
      size="large"
      color="primary"
      href={props.content.shopURL}
      target="_blank"
      style={{
        marginBottom: "1rem",
        width: "110px",
        display: props.content.shopURL == "" ? "none" : "block",
      }}
    >
      入店する
    </Button>
  ) : (
    ""
  );
  const image =
    props.content.logoExt == "" ? (
      <img src="/image/no-image.png" className={classes.logo} />
    ) : (
      <img
        src={generateLogoPath(props.id, props.content)}
        className={classes.logo}
      />
    );

  return (
    <div className={classes.root}>
      {room}
      <div className={classes.content}>
        {image}
        <div className={classes.shopContent}>
          <InfoItem label="kind">
            {props.content?.business ? (
              <BusinessBadge business={props.content.business} />
            ) : (
              ""
            )}
          </InfoItem>
          <InfoItem label="area">{props.content.area}</InfoItem>
          <InfoItem label="shop name" typo={{ variant: "h3" }}>
            {props.content.name}
          </InfoItem>
        </div>
      </div>
      {entrance}
    </div>
  );
};
export default ShopDialogContent;

interface IInfoItemProps {
  label: string;
  typo?: TypographyProps;
}
const InfoItem: React.FC<IInfoItemProps> = (props) => {
  const classes = useStyles();
  const info: JSX.Element =
    typeof props.children === "string" ? (
      <Typography {...props.typo}>{props.children}</Typography>
    ) : (
      (props.children as JSX.Element)
    );

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
      <div className={classes.info}>{info}</div>
    </React.Fragment>
  );
};
