import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TShop, Shops } from "@/components/fukushimaBonchi/shops";
import Shop from "@/components/fukushimaBonchi/shop";
import TemplateHero from "@/components/template/templateHero";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      backgroundAttachment: "scroll",
      backgroundSize: "contain",
      backgroundImage: "url(../image/fukushimabonchi/world_map.png)",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      backgroundColor: "#CAF2FA",

      "@media screen and (max-width: 480px)": {
        backgroundSize: "auto",
      },
    },
  })
);

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const classes = useStyles();

  var shopElements: JSX.Element[] = [];
  Shops.map((s: TShop) =>
    shopElements.push(
      <Shop
        shop={s}
        onClick={(shop: TShop) => {
          // setOpenSelectedShop(shop);
          // setOpenShopDialog(true);
        }}
      />
    )
  );

  return (
    <React.Fragment>
      <TemplateHero>
        <Grid item sm={12} lg={12} className={classes.content}>
          <div className={`mdc-layout-grid__inner ${classes.content}`}>
            {shopElements}
          </div>
        </Grid>
      </TemplateHero>
    </React.Fragment>
  );
};
export default FukushimaBonchi;
