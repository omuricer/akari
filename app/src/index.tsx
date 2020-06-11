import React from "react";
import { render } from "react-dom";

// import ErrorBoundary from "./components/errorBoundary";
import Bonchi from "@/components/bonchi";

import "./sass/index.scss";

// import App from "./components/app";

// TODO: index_old.jsの中身をコンポーネントに移行する
require("./index_old.js");

render(<Bonchi />, document.getElementById("bonchi"));
