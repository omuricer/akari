import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TShop } from "@/components/fukushimaBonchi/shops";
import ShopDialog from "@/components/fukushimaBonchi/shopDialog";
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
        width: "40px",
      },
    },
    ...Bounds,
  })
);

type IShopProps = {
  shop: TShop;
  onClick: (shop: TShop) => void;
};
const Shop: React.FC<IShopProps> = (props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const classes = useStyles();

  console.log(props);

  return (
    <React.Fragment>
      <img
        src={props.shop.icon}
        className={[classes.shop, classes.bounds].join(" ")}
        style={{
          top: `calc(50% + ${props.shop.positionY}%)`,
          left: `calc(50% + ${props.shop.positionX}%)`,
          animationDelay: `${generateRondomDelay()}s`,
        }}
        onClick={() => {
          setSelected(true);
        }}
      />
      <ShopDialog open={selected} setOpen={setSelected} shop={props.shop} />
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
