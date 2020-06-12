import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shop: {
      // Abount looks
      position: "absolute",
      width: "70px",
      height: "70px",
      backgroundSize: "cover",

      // 縦に揺れる
      animation: "$fluffy 3s ease infinite",
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

interface IShopProps {
  positionX: number;
  positionY: number;
  image: string;
}
const Shop: React.FC<IShopProps> = (props) => {
  const classes = useStyles();

  console.log(props);

  return (
    <div
      className={classes.shop}
      style={{
        top: `calc(50% + ${props.positionY}px)`,
        left: `calc(50% + ${props.positionX}px)`,
        backgroundImage: `url(${props.image})`,
        animationDelay: `${generateRondomDelay()}s`,
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
