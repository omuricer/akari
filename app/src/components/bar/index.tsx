import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HideOnScroll from "./hideOnScroll";
import Menu from "@/components/menu";
import { MobileMenu } from "@/components/menu/mobile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 10,
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      width: "230px",
    },
  })
);

interface IBarProps {
  logo: string;
  breakPoint: string;
}
const Bar: React.FC<IBarProps> = (props) => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const classes = useStyles();

  const menu = [
    { href: "/", label: "top" },
    { href: "/#about", label: "about" },
    { href: "/#service", label: "service" },
    { href: "/#news", label: "news" },
    { href: "/reserve", label: "studio/akari park" },
    { href: "/contact", label: "contact" },
    { href: "/fukushimabonchi", label: "FUKUSHIMA BONCHI" },
  ];
  const sns = [
    {
      href: "https://www.facebook.com/akarikunimi",
      icon: <i className="fab fa-facebook-square"></i>,
    },
    {
      href: "https://www.instagram.com/akarikunimi/",
      icon: <i className="fab fa-instagram"></i>,
    },
  ];

  return (
    <React.Fragment>
      <HideOnScroll>
        <div className={classes.root}>
          <AppBar style={{ backgroundColor: "#ffffff" }}>
            <Toolbar>
              <h1>
                <a href="/">
                  <img src={props.logo} className={classes.logo} />
                </a>
              </h1>

              <div className={classes.title} />
              <Menu
                breakPoint={props.breakPoint}
                menu={menu}
                sns={sns}
                openMobile={openMobileMenu}
                setOpenMobile={setOpenMobileMenu}
              />
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
      <MobileMenu open={openMobileMenu} menu={menu} sns={sns} />
    </React.Fragment>
  );
};
export default Bar;
