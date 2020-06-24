import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import A from "@/components/form/a";

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
        <A href={item.href}>{item.label}</A>
      </li>
    );
  });
  props.sns.map((sns) => {
    menu.push(
      <li className={classes.menuIcon}>
        <A href={sns.href} target="_blank">
          {sns.icon}
        </A>
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
