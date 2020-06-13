import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "calc(100vh - 64px - 84px)",
      "@media screen and (max-width: 480px)": {
        minHeight: "calc(100vh - 56px - 81px)",
      },
      backgroundColor: "#CAF2FA",
    },
    left: {
      backgroundSize: "contain",
      backgroundImage: "url(../image/fukushimabonchi/world_map.png)",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    },
    right: {
      position: "relative",
    },
    teaserPop: {
      top: `50%`,
      left: `50%`,
      transform: "translate(-50%, -50%)",
      WebTransform: "translate(-50%, -50%)",
      MsTransform: "translate(-50%, -50%)",
      width: "100%",

      position: "absolute",

      "@media screen and (max-width: 480px)": {
        textAlign: "center",
      },
    },
  })
);

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const classes = useStyles();

  return (
    <div className="mdc-layout-grid no-margin">
      <div className={`mdc-layout-grid__inner ${classes.content}`}>
        <div
          className={`mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-4-phone ${classes.left}`}
        />
        <div
          className={`mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-4-phone ${classes.right}`}
        >
          <div className={classes.teaserPop}>
            <p>comming soon...</p>
            <p style={{ fontSize: "1.6rem" }}>
              空想都市
              <br />
              FUKUSHIMA BONCHI
            </p>
            <p>空き地あります。 Free for join!</p>
            <a href="https://note.com/fukushimakuusou/n/n46a4bd26bb81?magazine_key=m9ae2736da177">
              詳しくはこちら
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FukushimaBonchi;
