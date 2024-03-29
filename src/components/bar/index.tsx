import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HideOnScroll from "./hideOnScroll";
import Menu from "components/menu";
import { MobileMenu } from "components/menu/mobile";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 10,
    },
    title: {
      flexGrow: 1,
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
    // { href: "/#news", label: "news" },
    { href: "/reserve", label: "reservation" },
    { href: "/contact", label: "contact" },
  ];
  const sns = [
    {
      href: "https://www.facebook.com/akarikunimi",
      icon: <FontAwesomeIcon icon={faFacebookSquare} width="13px" />,
    },
    {
      href: "https://www.instagram.com/akarikunimi/",
      icon: <FontAwesomeIcon icon={faInstagram} width="13px" />,
    },
  ];

  return (
    <React.Fragment>
      <HideOnScroll>
        <div className={classes.root}>
          <AppBar style={{ backgroundColor: "#ffffff" }}>
            <Toolbar>
              <h1>
                <Link href="/">
                  <a>
                    <Image src={props.logo} width={180} height={60} />
                  </a>
                </Link>
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
