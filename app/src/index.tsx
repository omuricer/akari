import React from "react";
import { render } from "react-dom";

// import FukushimaBonchi from "@/components/fukushimaBonchi";
import FukushimaBonchi from "@/components/fukushimaBonchi/teaser";

import "./sass/index.scss";

// import App from "./components/app";

// TODO: index_old.jsの中身をコンポーネントに移行する
require("./index_old.js");

render(<FukushimaBonchi />, document.getElementById("bonchi"));
