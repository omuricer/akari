import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Mobile from "@/components/menu/mobile";
import Desktop from "@/components/menu/desktop";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // teaserPop: {
    //   top: `50%`,
    //   left: `50%`,
    //   transform: "translate(-50%, -50%)",
    //   WebTransform: "translate(-50%, -50%)",
    //   MsTransform: "translate(-50%, -50%)",
    //   width: "100%",
    //   position: "absolute",
    //   "@media screen and (max-width: 480px)": {
    //     textAlign: "center",
    //   },
    // },
  })
);

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
  const classes = useStyles();
  const menu = isMobile(props.breakPoint) ? (
    <Mobile {...props} open={props.openMobile} setOpen={props.setOpenMobile} />
  ) : (
    <Desktop {...props} />
  );

  return <React.Fragment>{menu}</React.Fragment>;
};
export default Menu;
