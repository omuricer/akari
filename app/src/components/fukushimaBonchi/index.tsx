import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Shop from "@/components/fukushimaBonchi/shop";
import TemplateHCF from "@/components/template/templateHCF";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      backgroundAttachment: "scroll",
      backgroundSize: "contain",
      backgroundImage: "url(../image/fukushimabonchi/world_map.png)",
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
    image: "../image/fukushimabonchi/shop1.png",
    position: { x: 5, y: 7 }, // x:-15～15, y:-10～10
  },
  {
    image: "../image/fukushimabonchi/shop1.png",
    position: { x: -12, y: 5 },
  },
  {
    image: "../image/fukushimabonchi/shop1.png",
    position: { x: 3, y: -8 },
  },
];

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const classes = useStyles();

  var shopElements: JSX.Element[] = [];
  shopDefinitions.map((s) =>
    shopElements.push(
      <Shop positionX={s.position.x} positionY={s.position.y} image={s.image} />
    )
  );

  return (
    <TemplateHCF>
      <Grid item sm={12} lg={12} className={classes.content}>
        <div className={`mdc-layout-grid__inner ${classes.content}`}>
          {shopElements}
        </div>
      </Grid>
    </TemplateHCF>
  );
};
export default FukushimaBonchi;
