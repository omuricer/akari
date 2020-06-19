import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Shop from "@/components/fukushimaBonchi/shop";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      backgroundImage: "url(../image/fukushimabonchi/world_map.png)",
      backgroundPosition: "center center",
      position: "relative",

      "@media screen and (max-width: 480px)": {
        backgroundSize: "auto",
      },
    },
    teaserPop: {
      top: `50%`,
      left: `50%`,
      transform: "translate(-50%, -50%)",
      WebTransform: "translate(-50%, -50%)",
      MsTransform: "translate(-50%, -50%)",

      position: "absolute",
    },
  })
);

// TODO: あとで有効化する
// const shopDefinitions = [
//   {
//     image: "../image/fukushimabonchi/shop1.png",
//     position: { x: 5, y: 7 }, // x:-15～15, y:-10～10
//   },
//   {
//     image: "../image/fukushimabonchi/shop1.png",
//     position: { x: -12, y: 5 },
//   },
//   {
//     image: "../image/fukushimabonchi/shop1.png",
//     position: { x: 3, y: -8 },
//   },
// ];

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const classes = useStyles();

  // TODO: あとで有効化する
  // var shopElements: JSX.Element[] = [];
  // shopDefinitions.map((s) =>
  //   shopElements.push(
  //     <Shop positionX={s.position.x} positionY={s.position.y} image={s.image} />
  //   )
  // );

  return (
    <div className="mdc-layout-grid no-margin">
      <div className={`mdc-layout-grid__inner ${classes.content}`}>
        {/* TODO: あとで有効化する */}
        {/* {shopElements} */}
        <div className={classes.teaserPop}>Test</div>
      </div>
    </div>
  );
};
export default FukushimaBonchi;
