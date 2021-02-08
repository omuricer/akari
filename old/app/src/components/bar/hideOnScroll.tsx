import React, { useState, useEffect } from "react";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

/**
 * ここの丸パクリ
 * https://material-ui.com/components/app-bar/#main-content
 * @param {*} props
 */
interface IHideOnScrollProps {
  children: React.ReactElement;
}
const HideOnScroll: React.FC<IHideOnScrollProps> = (props) => {
  let trigger = useScrollTrigger({ disableHysteresis: true });
  return (
    <Slide direction={"down"} in={!trigger}>
      {props.children}
    </Slide>
  );
};

export default HideOnScroll;
