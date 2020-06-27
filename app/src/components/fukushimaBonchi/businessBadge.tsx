import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-block",
      padding: "0.2em 0.5em",
      fontWeight: "bold",
      borderRadius: "8px",
    },
  })
);

interface IBusinessBadgeProps {
  business: string;
}
const BusinessBadge: React.FC<IBusinessBadgeProps> = (props) => {
  const classes = useStyles();

  const theme = useTheme();

  const colorMap = new Map<string, { background: string; color: string }>();
  colorMap.set("ウェディング", {
    background: "#fce8d5",
    color: theme.palette.primary.main,
  });
  colorMap.set("カフェ", {
    background: "#2f2519",
    color: "#ffffff",
  });
  colorMap.set("飲食店", {
    background: "#cf7500",
    color: "#ffffff",
  });
  colorMap.set("農家", {
    background: "#438a5e",
    color: "#ffffff",
  });
  colorMap.set("アート", {
    background: "#f54291",
    color: "#ffffff",
  });
  colorMap.set("雑貨", {
    background: "#0a97b0",
    color: "#ffffff",
  });
  colorMap.set("クラフト", {
    background: "#faeee7",
    color: theme.palette.primary.main,
  });
  colorMap.set("モデル", {
    background: "#ffffff",
    color: theme.palette.primary.main,
  });
  colorMap.set("リユース", {
    background: "#75daad",
    color: "#ffffff",
  });
  colorMap.set("ファッション", {
    background: "#323edd",
    color: "#ffffff",
  });
  colorMap.set("複合施設", {
    background: theme.palette.primary.main,
    color: "#ffffff",
  });

  const color = colorMap.get(props.business) ?? {
    background: "#ffffff",
    color: theme.palette.primary.main,
  };

  return (
    <div className={classes.root} style={{ background: color.background }}>
      <Typography style={{ color: color.color }}>{props.business}</Typography>
    </div>
  );
};
export default BusinessBadge;
