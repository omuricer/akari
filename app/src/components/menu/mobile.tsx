import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      position: "fixed",
      top: "calc(-1 * 120vh)",
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 3,
      backgroundColor: theme.palette.primary.main,
      opacity: 0.9,
      paddingTop: "4px",
      textAlign: "center",
      transition: "all 300ms 0s ease",
    },
    navOpen: {
      top: "50px",
    },
    menuText: {
      width: "100%",
      lineHeight: "6rem",
    },
    menuIcon: {
      paddingTop: "1.4rem",
      paddingBottom: "1.4rem",
      marginLeft: "1rem",
      marginRight: "1rem",
      display: "inline-block",
    },
    button: {
      fontSize: "1.4rem",
    },
  })
);

interface IMobileProps {
  menu: {
    href: string;
    label: string;
  }[];
  sns: {
    href: string;
    icon: JSX.Element;
  }[];
}
const Mobile: React.FC<IMobileProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const menu: JSX.Element[] = [];
  props.menu.map((item) => {
    menu.push(
      <li>
        <a href={item.href}>
          <Typography className={classes.menuText}>{item.label}</Typography>
        </a>
      </li>
    );
  });
  const snsIcons: JSX.Element[] = [];
  props.sns.map((sns) => {
    snsIcons.push(
      <a href={sns.href} target="”_blank”" className={classes.menuIcon}>
        {sns.icon}
      </a>
    );
  });
  const toggle = () => {
    setOpen(!open);
  };

  const button = open ? (
    <i
      className="fas fa-times"
      onClick={toggle}
      style={{ fontSize: "1.4rem" }}
    />
  ) : (
    <i
      className="fas fa-bars"
      onClick={toggle}
      style={{ fontSize: "1.4rem" }}
    />
  );

  return (
    <React.Fragment>
      {button}
      <nav className={classes.nav + (open ? " " + classes.navOpen : "")}>
        <ul>{menu}</ul>
        {snsIcons}
      </nav>
    </React.Fragment>
  );

  // <nav>
  //   <ul>{menu}</ul>
  // </nav>
};
export default Mobile;
