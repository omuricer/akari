import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Shop from "@/components/fukushimaBonchi/shop";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      backgroundImage: "url(../image/fukushimabonchi/world_map.png)",
      backgroundPosition: "center center",
      position: "relative",

      "@media screen and (max-width: 480px)": {
        backgroundSize: "auto",
      },
    },
    teaserPop: {
      top: `50%`,
      left: `50%`,
      transform: "translate(-50%, -50%)",
      WebTransform: "translate(-50%, -50%)",
      MsTransform: "translate(-50%, -50%)",

      position: "absolute",
    },
  })
);

// TODO: あとで有効化する
// const shopDefinitions = [
//   {
//     image: "../image/fukushimabonchi/shop1.png",
//     position: { x: 5, y: 7 }, // x:-15～15, y:-10～10
//   },
//   {
//     image: "../image/fukushimabonchi/shop1.png",
//     position: { x: -12, y: 5 },
//   },
//   {
//     image: "../image/fukushimabonchi/shop1.png",
//     position: { x: 3, y: -8 },
//   },
// ];

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const classes = useStyles();

  // TODO: あとで有効化する
  // var shopElements: JSX.Element[] = [];
  // shopDefinitions.map((s) =>
  //   shopElements.push(
  //     <Shop positionX={s.position.x} positionY={s.position.y} image={s.image} />
  //   )
  // );

  return (
    <React.Fragment>
      <section id="header">
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
                  {/* TODO: あとで有効化する */}
                  {/* {shopElements} */}
                  <div className={classes.teaserPop}>Test</div>
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
      </section>
    </React.Fragment>
  );
};
export default FukushimaBonchi;
