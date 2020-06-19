import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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

interface IMenuProps {
  menu: {
    href: string;
    label: string;
  }[];
  sns: {
    href: string;
    icon: JSX.Element;
  }[];
}
const Menu: React.FC<IMenuProps> = (props) => {
  const classes = useStyles();

  return <Desktop {...props}></Desktop>;
};
export default Menu;
