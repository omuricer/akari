import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuText: {
      display: "inline-block",
      marginLeft: "1rem",
      marginRight: "1rem",
    },
    menuIcon: {
      display: "inline-block",
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  })
);

interface IDesktopProps {
  menu: {
    href: string;
    label: string;
  }[];
  sns: {
    href: string;
    icon: JSX.Element;
  }[];
}
const Desktop: React.FC<IDesktopProps> = (props) => {
  const classes = useStyles();

  const menu: JSX.Element[] = [];
  props.menu.map((item) => {
    menu.push(
      <li className={classes.menuText}>
        <a href={item.href}>
          <Typography>{item.label}</Typography>
        </a>
      </li>
    );
  });
  props.sns.map((sns) => {
    menu.push(
      <li className={classes.menuIcon}>
        <a href={sns.href} target="”_blank”">
          {sns.icon}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};
export default Desktop;
