import React from "react";
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";

import "@material/react-top-app-bar/index.scss";
import "@material/react-material-icon/index.scss";
import "./template.scss";

export default class Template extends React.Component {
  render() {
    /**
     * https://qiita.com/yukiTTT/items/773356c2483b96c9d4e0
     * //スクロール禁止
     * document.addEventListener('touchmove', handleTouchMove, { passive: false });
     * //スクロール復帰
     * document.removeEventListener('touchmove', handleTouchMove, { passive: false });
     * @param {*} event
     */
    const handleTouchMove = (event) => {
      event.preventDefault();
    }

    const openNav = () => {
      document.querySelector("nav.mobile").classList.add("open");
      document.querySelector(".menu.mobile .menu__open").style.display = "none";
      document.querySelector(".menu.mobile .menu__close").style.display =
        "inline-block";
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false
      });
    };
    const closeNav = () => {
      document.querySelector("nav.mobile").classList.remove("open");
      document.querySelector(".menu.mobile .menu__open").style.display =
        "inline-block";
      document.querySelector(".menu.mobile .menu__close").style.display =
        "none";
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: false
      });
    };

    return (
      <div>
        <TopAppBar className="header">
          <TopAppBarRow>
            <TopAppBarSection align="start">
              <h1>
                <a href="/">
                  <img
                    className="mdc-image-list__image logo"
                    src="image/logo_akari.svg"
                  />
                </a>
              </h1>
              {/* <TopAppBarTitle>Miami, FL</TopAppBarTitle> */}
            </TopAppBarSection>
            <TopAppBarSection align="end" role="toolbar">
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
                        href="https://www.facebook.com/yamorisyamomonone2018"
                        target="”_blank”"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/yamorisyamomonone/"
                        target="”_blank”"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="menu mobile">
                <div className="menu__open" onClick={openNav}>
                  <i className="fas fa-bars"></i>
                </div>
                <div className="menu__close" onClick={closeNav}>
                  <i className="fas fa-times"></i>
                </div>
              </div>
              {/* <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon
                  hasRipple
                  icon="menu"
                  onClick={() => console.log("click")}
                />
              </TopAppBarIcon> */}
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
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
          <a
            href="https://www.facebook.com/yamorisyamomonone2018"
            target="”_blank”"
          >
            <div className="menu__sns">
              <i className="fab fa-facebook-square"></i>
            </div>
          </a>
          <a
            href="https://www.instagram.com/yamorisyamomonone/"
            target="”_blank”"
          >
            <div className="menu__sns">
              <i className="fab fa-instagram"></i>
            </div>
          </a>
        </nav>
        <TopAppBarFixedAdjust>
          <section id="content">
            <section className="page">{this.props.children}</section>
          </section>
          <section id="footer">footer</section>
        </TopAppBarFixedAdjust>
      </div>
    );
  }
}
