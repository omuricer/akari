import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import A from "components/form/a";
import Link from "next/link";

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
  props.menu.map((item, index) => {
    // TODO: bonchi期間だけ
    if (item.label == "FUKUSHIMA BONCHI") {
      menu.push(
        <li className={classes.menuText} key={"menu" + index}>
          <Link href={item.href}>
            <A
              style={{
                fontWeight: "bold",
                letterSpacing: "0",
                color: "#F9A638",
              }}
            >
              {item.label}
            </A>
          </Link>
          {/* <A href={item.href} style={{}}>
            {item.label}
          </A> */}
        </li>
      );
    } else {
      menu.push(
        <li className={classes.menuText} key={"menu" + index}>
          <Link href={item.href}>
            <A>{item.label}</A>
          </Link>
        </li>
      );
    }
  });
  props.sns.map((sns, index) => {
    menu.push(
      <li className={classes.menuIcon} key={"sns" + index}>
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
