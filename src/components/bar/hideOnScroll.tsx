import React, { useState, useEffect } from "react";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

/**
 * ここの丸パクリ
 * https://material-ui.com/components/app-bar/#main-content
 * @param {*} props
 */
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}
const HideOnScroll: React.FC<Props> = (props) => {
  // TODO: なめらかに動かない。デモはなめらか
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
