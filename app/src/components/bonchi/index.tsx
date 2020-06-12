import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Shop from "@/components/bonchi/shop";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      backgroundImage: "url(../image/bonchi/world_map.png)",
      backgroundPosition: "center center",
      position: "relative",

      "@media screen and (max-width: 480px)": {
        backgroundSize: "auto",
      },
    },
  })
);

const shopDefinitions = [
  {
    image: "../image/bonchi/shop1.png",
    position: { x: 5, y: 7 }, // x:-15～15, y:-10～10
  },
  {
    image: "../image/bonchi/shop1.png",
    position: { x: -12, y: 5 },
  },
  {
    image: "../image/bonchi/shop1.png",
    position: { x: 3, y: -8 },
  },
];

interface IBonchiProps {}
const Bonchi: React.FC<IBonchiProps> = (props) => {
  const classes = useStyles();

  var shopElements: JSX.Element[] = [];
  shopDefinitions.map((s) =>
    shopElements.push(
      <Shop positionX={s.position.x} positionY={s.position.y} image={s.image} />
    )
  );

  return (
    <div className="mdc-layout-grid no-margin bonchi">
      <div className={`mdc-layout-grid__inner ${classes.content}`}>
        {shopElements}
      </div>
    </div>
  );
};
export default Bonchi;
