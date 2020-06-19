import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HideOnScroll from "./hideOnScroll";
import Menu from "@/components/menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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
  device: string;
}
const Bar: React.FC<IBarProps> = (props) => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <h1>
              <a href="/">
                <img src={props.logo} className={classes.logo} />
              </a>
            </h1>

            <div className={classes.title}></div>
            <Menu
              device={props.device}
              menu={[
                { href: "/", label: "top" },
                { href: "/#about", label: "about" },
                { href: "/#service", label: "service" },
                { href: "/#news", label: "news" },
                { href: "/reserve", label: "studio/akari park" },
                { href: "/contact", label: "contact" },
              ]}
              sns={[
                {
                  href: "https://www.facebook.com/akarikunimi",
                  icon: <i className="fab fa-facebook-square"></i>,
                },
                {
                  href: "https://www.instagram.com/akarikunimi/",
                  icon: <i className="fab fa-instagram"></i>,
                },
              ]}
            />
          </Toolbar>
        </AppBar>
      </div>
    </HideOnScroll>
  );
};
export default Bar;
