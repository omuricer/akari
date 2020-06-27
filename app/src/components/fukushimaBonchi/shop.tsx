import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  TIcon,
  TContent,
  TShop,
  isTContent,
} from "@/components/fukushimaBonchi/shops";
import ShopDialog from "@/components/fukushimaBonchi/shopDialog";
import ShopDialogApartment from "@/components/fukushimaBonchi/shopDialogApartment";
import { Bounds } from "@/animations/bounds";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shop: {
      // Abount looks
      position: "absolute",
      width: "4.5vw",

      // https://littlethings.jp/blog/web/css-hover-effect
      WebkitTransform: "scale(1)",
      transform: "scale(1)",
      WebkitTransition: "0.5s ease-in-out",
      transition: "0.5s ease-in-out",
      "&:hover": {
        WebkitTransform: "scale(1.3)",
        transform: "scale(1.3)",
      },
      [theme.breakpoints.down("xs")]: {
        width: "80px",
      },
    },
    ...Bounds,
  })
);

const generateIconPath = (id: number) => {
  return `/image/fukushimabonchi/${id}/icon.png`;
};

type IShopProps = {
  shop: TShop;
};
const Shop: React.FC<IShopProps> = (props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const classes = useStyles();

  const shopDialog = props.shop.rooms ? (
    <ShopDialogApartment
      open={selected}
      setOpen={setSelected}
      id={props.shop.id}
      content={props.shop.content}
      rooms={props.shop.rooms}
    />
  ) : (
    <ShopDialog
      open={selected}
      setOpen={setSelected}
      id={props.shop.id}
      content={props.shop.content}
    />
  );

  return (
    <React.Fragment>
      <img
        src={generateIconPath(props.shop.id)}
        className={[classes.shop, classes.bounds].join(" ")}
        style={{
          top: `calc(50% + ${props.shop.icon.positionY}%)`,
          left: `calc(50% + ${props.shop.icon.positionX}%)`,
          animationDelay: `${generateRondomDelay()}s`,
        }}
        onClick={() => {
          setSelected(true);
        }}
      />
      {shopDialog}
    </React.Fragment>
  );
};

const generateRondomDelay = (): number => {
  return roundAtDigit(Math.random() * 6, 2);
};
const roundAtDigit = (num: number, digit: number): number => {
  // num = 1.2345 & digit = 2 --> 1.23
  return Math.floor(num * Math.pow(10, digit)) / Math.pow(10, digit);
};

export default Shop;
