import React, { useState, useEffect } from "react";
import YouTube, { Options } from "react-youtube";
import Image from "@/components/form/image";
import UnStart from "@/image/fukushimabonchi/un_start.jpg";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Logo from "@/image/fukushimabonchi/marche_logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fukidashi: {
      background: "rgba(225,225,225, 0.9)",
      position: "relative",
      display: "inline-block",
      padding: "7px 10px",

      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      WebkitTransform: "translateX(-50%)",
      MsTransform: "translateX(-50%)",

      "&::before": {
        content: '""',
        position: "absolute",
        top: "100%",
        left: "50%",
        marginLeft: "-15px",
        border: "15px solid transparent",
        borderTop: (props: IMarcheProps) =>
          `${150 * props.ratio}px solid #ffffff`,
      },
    },
  })
);

export interface IMarcheProps {
  isMobile: boolean;
  ratio: number;
}
const Marche: React.FC<IMarcheProps> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.fukidashi}>
      <Image src={Logo} width={props.isMobile ? "320" : "320"} />
    </div>
  );
};
export default Marche;
