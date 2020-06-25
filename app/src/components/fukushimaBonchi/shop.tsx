import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TShop } from "@/components/fukushimaBonchi/shops";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shop: {
      // Abount looks
      position: "absolute",
      width: "4.5vw",
      height: "4.5vw",
      backgroundSize: "cover",

      // 縦に揺れる
      animation: "$fluffy 3s ease infinite",

      // https://littlethings.jp/blog/web/css-hover-effect
      WebkitTransform: "scale(1)",
      transform: "scale(1)",
      WebkitTransition: "0.5s ease-in-out",
      transition: "0.5s ease-in-out",
      ":hover": {
        WebkitTransform: "scale(1.3)",
        transform: "scale(1.3)",
      },
    },
    "@keyframes fluffy": {
      "0%": {
        transform: "translateY(0)",
      },
      "5%": {
        transform: "translateY(0)",
      },
      "10%": {
        transform: "translateY(0)",
      },
      "20%": {
        transform: "translateY(-10px)",
      },
      "25%": {
        transform: "translateY(0)",
      },
      "30%": {
        transform: "translateY(-8px)",
      },
      "50%": {
        transform: "translateY(0)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
  })
);

type IShopProps = {
  shop: TShop;
  onClick: (shop: TShop) => void;
};
const Shop: React.FC<IShopProps> = (props) => {
  const classes = useStyles();

  console.log(props);

  return (
    <div
      className={classes.shop}
      style={{
        top: `calc(50% + ${props.shop.positionY}vw)`,
        left: `calc(50% + ${props.shop.positionX}vw)`,
        backgroundImage: `url(${props.shop.icon})`,
        animationDelay: `${generateRondomDelay()}s`,
      }}
      onClick={() => {
        props.onClick(props.shop);
      }}
    />
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
