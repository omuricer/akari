import React from "react";
import { render } from "react-dom";

import Theme from "@/components/theme";
import FukushimaBonchi from "@/components/fukushimaBonchi";
import FukushimaBonchiTeaser from "@/components/fukushimaBonchi/teaser";
import Typography from "@material-ui/core/Typography";

import "@/sass/index.scss";
import "@/css/destyle.css";

// import App from "./components/app";

// TODO: index_old.jsの中身をコンポーネントに移行する
require("./index_old.js");

render(
  <Theme>
    <Typography>
      <FukushimaBonchiTeaser />
    </Typography>
  </Theme>,
  document.getElementById("bonchi")
);
// render(<FukushimaBonchi />, document.getElementById("bonchi"));
