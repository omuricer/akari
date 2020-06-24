import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Shop, { TShop } from "@/components/fukushimaBonchi/shop";
import TemplateHero from "@/components/template/templateHero";
import Grid from "@material-ui/core/Grid";
import ShopDialog from "@/components/fukushimaBonchi/shopDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      backgroundImage: "url(../image/fukushimabonchi/world_map.png)",
      backgroundPosition: "center center",
      position: "relative",
      backgroundColor: "#CAF2FA",

      "@media screen and (max-width: 480px)": {
        backgroundSize: "auto",
      },
    },
  })
);

const shopDefinitions: TShop[] = [
  {
    icon: "../image/fukushimabonchi/shop1.png",
    logo: "../image/fukushimabonchi/shop1.png",
    name: "野菜屋 kumando",
    bussiness: "農家",
    area: "伊達市",
    shopURL: "https://yamorisyamomonone.com/fukushimabonchi",
    positionX: 5,
    positionY: 7,
  },
  {
    icon: "../image/fukushimabonchi/shop1.png",
    logo: "../image/fukushimabonchi/shop1.png",
    name: "野菜屋 kumando",
    bussiness: "農家",
    area: "伊達市",
    shopURL: "https://yamorisyamomonone.com/fukushimabonchi",
    positionX: -12,
    positionY: 5,
  },
  {
    icon: "../image/fukushimabonchi/shop1.png",
    logo: "../image/fukushimabonchi/shop1.png",
    name: "野菜屋 kumando",
    bussiness: "農家",
    area: "伊達市",
    shopURL: "https://yamorisyamomonone.com/fukushimabonchi",
    positionX: 3,
    positionY: -8,
  },
];

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const [openShopDialog, setOpenShopDialog] = useState<boolean>(false);
  const [selectedShop, setOpenSelectedShop] = useState<null | TShop>(null);
  const classes = useStyles();

  var shopElements: JSX.Element[] = [];
  shopDefinitions.map((s: TShop) =>
    shopElements.push(
      <Shop
        shop={s}
        onClick={(shop: TShop) => {
          setOpenSelectedShop(shop);
          setOpenShopDialog(true);
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

      <ShopDialog
        open={openShopDialog}
        setOpen={setOpenShopDialog}
        shop={selectedShop}
      />
    </React.Fragment>
  );
};
export default FukushimaBonchi;
