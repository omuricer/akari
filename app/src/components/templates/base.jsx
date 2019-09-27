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
// import "@material/react-material-icon/index.scss";

import "./base.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <TopAppBar>
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

              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon
                  hasRipple
                  icon="menu"
                  onClick={() => console.log("click")}
                />
              </TopAppBarIcon>
              <TopAppBarTitle>Miami, FL</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align="end" role="toolbar">
              <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon
                  aria-label="print page"
                  hasRipple
                  icon="print"
                  onClick={() => console.log("print")}
                />
              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust>
          loading
          <section id="content">
            <section className="page">{this.props.children}</section>
          </section>
          <section id="footer">footer</section>
        </TopAppBarFixedAdjust>
      </div>
    );
  }
}
