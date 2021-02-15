import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import A from "components/form/a";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      position: "fixed",
      top: "calc(-1 * 120vh)",
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 3,
      backgroundColor: "#ffffff",
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
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Mobile: React.FC<IMobileProps> = (props) => {
  const classes = useStyles();

  const toggle = () => {
    props.setOpen(!props.open);
  };

  const button = props.open ? (
    <FontAwesomeIcon
      icon={faTimes}
      onClick={toggle}
      style={{ fontSize: "1.4rem", color: "#485859", width: "16px" }}
    />
  ) : (
    <FontAwesomeIcon
      icon={faBars}
      onClick={toggle}
      style={{ fontSize: "1.4rem", color: "#485859", width: "16px" }}
    />
  );

  return <React.Fragment>{button}</React.Fragment>;
};
export default Mobile;

interface IMobileMenuProps {
  menu: {
    href: string;
    label: string;
  }[];
  sns: {
    href: string;
    icon: JSX.Element;
  }[];
  open: boolean;
}
export const MobileMenu: React.FC<IMobileMenuProps> = (props) => {
  const classes = useStyles();

  const menu: JSX.Element[] = [];
  props.menu.map((item, index) => {
    // TODO: bonchi期間だけ
    if (item.label == "FUKUSHIMA BONCHI") {
      menu.push(
        <li key={"menu" + index}>
          <Link href={item.href}>
            <a
              target="_self"
              style={{
                fontWeight: "bold",
                letterSpacing: "0",
                color: "#F9A638",
              }}
            >
              {item.label}
            </a>
          </Link>
        </li>
      );
    } else {
      menu.push(
        <li key={"menu" + index}>
          <Link href={item.href}>
            <a target="_self" className={classes.menuText}>
              {item.label}
            </a>
          </Link>
        </li>
      );
    }
  });
  const snsIcons: JSX.Element[] = [];
  props.sns.map((sns, index) => {
    snsIcons.push(
      <A
        href={sns.href}
        target="”_blank”"
        className={classes.menuIcon}
        key={"sns" + index}
      >
        {sns.icon}
      </A>
    );
  });

  return (
    <nav className={classes.nav + (props.open ? " " + classes.navOpen : "")}>
      <ul>{menu}</ul>
      {snsIcons}
    </nav>
  );
};
