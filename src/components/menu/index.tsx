import React, { useState, useEffect } from "react";
import Mobile from "components/menu/mobile";
import Desktop from "components/menu/desktop";

const isMobile = (breakPoint: string) => {
  return breakPoint == "xs" || breakPoint == "sm";
};

interface IMenuProps {
  breakPoint: string;
  menu: {
    href: string;
    label: string;
  }[];
  sns: {
    href: string;
    icon: JSX.Element;
  }[];
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
}
const Menu: React.FC<IMenuProps> = (props) => {
  const menu = isMobile(props.breakPoint) ? (
    <Mobile {...props} open={props.openMobile} setOpen={props.setOpenMobile} />
  ) : (
    <Desktop {...props} />
  );

  return <React.Fragment>{menu}</React.Fragment>;
};
export default Menu;
