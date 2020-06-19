import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Bar from "@/components/bar";
import Typography from "@material-ui/core/Typography";

const worldMap = require("@/image//fukushimabonchi/world_map.png");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      // height: "100%",
      minHeight: "calc(100vh - 64px - 84px)",
      "@media screen and (max-width: 480px)": {
        // height: "100%",
        minHeight: "calc(100vh - 56px - 56px - 81px)",
      },
      backgroundColor: "#CAF2FA",
    },
    left: {
      backgroundSize: "contain",
      // backgroundImage: "url(../image/fukushimabonchi/world_map.png)",
      backgroundImage: `url(${worldMap})`,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    },
    right: {
      position: "relative",
    },
    teaserPop: {
      top: `50%`,
      left: `50%`,
      transform: "translate(-50%, -50%)",
      WebTransform: "translate(-50%, -50%)",
      MsTransform: "translate(-50%, -50%)",
      width: "100%",

      position: "absolute",

      "@media screen and (max-width: 480px)": {
        textAlign: "center",
      },
    },
  })
);

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Bar logo="image/logo_akari.svg"></Bar>
      {/* <section id="header">
        <header className="mdc-top-app-bar header" id="header">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <h1>
                <a href="/">
                  <img
                    className="mdc-image-list__image logo"
                    src="image/logo_akari.svg"
                  />
                </a>
              </h1>
            </section>
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <div className="menu desktop">
                <nav>
                  <ul>
                    <li>
                      <a href="/">top</a>
                    </li>
                    <li>
                      <a href="/#about">about</a>
                    </li>
                    <li>
                      <a href="/#service">service</a>
                    </li>
                    <li>
                      <a href="/#news">news</a>
                    </li>
                    <li>
                      <a href="/reserve">studio/akari park</a>
                    </li>
                    <li>
                      <a href="/contact">contact</a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/akarikunimi"
                        target="”_blank”"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/akarikunimi/"
                        target="”_blank”"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="menu mobile">
                <div className="menu__open">
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu__close">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </section>
          </div>
        </header>
        <nav className="mobile">
          <ul>
            <li>
              <a href="/">top</a>
            </li>
            <li>
              <a href="/#about">about</a>
            </li>
            <li>
              <a href="/#service">service</a>
            </li>
            <li>
              <a href="/#news">news</a>
            </li>
            <li>
              <a href="/reserve">studio/akari park</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
          <a href="https://www.facebook.com/akarikunimi" target="”_blank”">
            <div className="menu__sns">
              <i className="fab fa-facebook-square"></i>
            </div>
          </a>
          <a href="https://www.instagram.com/akarikunimi/" target="”_blank”">
            <div className="menu__sns">
              <i className="fab fa-instagram"></i>
            </div>
          </a>
        </nav>
      </section> */}

      <div className="mdc-top-app-bar--fixed-adjust">
        <div id="loading">
          <div className="animation-logo">
            <img className="star" src="image/loading/star.gif" />
            <img className="building" src="image/loading/lodo.svg" />
          </div>
        </div>

        <section id="content">
          <section className="page">
            <div className="mdc-layout-grid no-margin">
              <div className={`mdc-layout-grid__inner ${classes.content}`}>
                <div
                  className={`mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone ${classes.left}`}
                />
                <div
                  className={`mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone ${classes.right}`}
                >
                  <div className={classes.teaserPop}>
                    <Typography>comming soon...</Typography>
                    <Typography variant="h2">
                      空想都市
                      <br />
                      FUKUSHIMA BONCHI
                    </Typography>
                    <Typography>空き地あります。 Free for join!</Typography>
                    <a href="https://note.com/fukushimakuusou/n/n46a4bd26bb81?magazine_key=m9ae2736da177">
                      <Typography>詳しくはこちら</Typography>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section id="footer">
          <div className="footer">
            <div className="wrap">
              <p className="corporate">家守舎桃ノ音</p>
              <p className="copyright">
                © Copyright 2019 yamorishamomonone All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default FukushimaBonchi;
