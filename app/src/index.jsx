import React from "react";
import { render } from "react-dom";

import Button from "./components/Buttons/button";
import Template from "./components/templates/template";

import "./css/html5reset-1.6.1.css";
import "./sass/index.scss";

import { Cell, Grid, Row } from "@material/react-layout-grid";
import "@material/react-layout-grid/index.scss";

let hoge = "Hello Reactttttt!!!!!!!!!!!!!!!!!!!";
render(
  <Template>
    <Grid>
      <Row className="fixed-bg">
        <Cell columns={12}>
          <div className="concept-text">
            <p className="main mdc-typography--headline2">ともに学びあう</p>
            <p className="text mdc-typography--body1">
              ひとりひとりの想いが灯る、アカリ
              <br />
              <br />
              眠っていた元書庫の施設が
              <br />
              リノベ－ションにより学びあいの場へと生まれ変わりました
              <br />
              <br />
              多様な価値観が交差し、新しいモノ・コトが生まれる
              <br />
              多様な人との出会い、多様な文化との接点に、あなたもお越しください
            </p>
          </div>
        </Cell>
      </Row>
    </Grid>
  </Template>,
  document.getElementById("app")
);
