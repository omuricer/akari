import React from "react";
import { render } from "react-dom";

import Theme from "@/components/theme";
import Teaser from "@/components/fukushimaBonchi/teaser";
import FukushimaBonchi from "@/components/fukushimaBonchi";
import Entrance from "@/components/fukushimaBonchi/entrance";

import "@/sass/index.scss";
import "@/css/destyle.css";

// TODO: index_old.jsの中身をコンポーネントに移行する
require("./index_old.js");

let target = document.getElementById("bonchi");
if (target) {
  render(
    <Theme>
      <FukushimaBonchi />
    </Theme>,
    target
  );
}

target = document.getElementById("bonchi-entrance");
if (target) {
  render(
    <Theme>
      <Entrance />
    </Theme>,
    target
  );
}
