import React, { useState, useEffect } from "react";
import Image from "components/form/image";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fukidashi: {
      background: "rgba(255,255,255, 0.9)",
      position: "absolute",
      display: "inline-block",
      padding: "7px 10px",

      top: (props: IMarcheProps) => `calc(90 * ${props.ratio}px)`,
      left: "50%",
      transform: "translateX(-50%)",
      WebkitTransform: "translateX(-50%)",
      MsTransform: "translateX(-50%)",

      borderRadius: "30px",
      pointerEvents: "none",

      "&::before": {
        content: '""',
        position: "absolute",
        top: "100%",
        left: "50%",
        marginLeft: "-35px",
        border: "35px solid transparent",
        borderTop: (props: IMarcheProps) =>
          `${160 * props.ratio}px solid rgba(255,255,255, 0.9)`,
        pointerEvents: "none",
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
      <Image
        src={"/image/fukushimabonchi/marche_logo.png"}
        width={
          props.isMobile ? `${320 * props.ratio}px` : `${320 * props.ratio}px`
        }
      />
    </div>
  );
};
export default Marche;
