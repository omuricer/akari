import React, { useState, useEffect } from "react";

import Shop from "@/components/bonchi/shop";

const shops = [
  {
    image: "image/bonchi/shop1.png",
    position: { x: 10, y: 10 },
  },
  {
    image: "image/bonchi/shop1.png",
    position: { x: 170, y: 90 },
  },
  {
    image: "image/bonchi/shop1.png",
    position: { x: 50, y: 100 },
  },
];

const generateRondomDelay = (): number => {
  return roundAtDigit(Math.random() * 6, 2);
};
const roundAtDigit = (num: number, digit): number => {
  // num = 1.2345 & digit = 2 --> 1.23
  return Math.floor(num * Math.pow(10, digit)) / Math.pow(10, digit);
};

interface IBonchiProps {}
const Bonchi: React.FC<IBonchiProps> = (props) => {
  return (
    <div className="mdc-layout-grid no-margin bonchi">
      <div className="mdc-layout-grid__inner content"></div>
    </div>
  );
};
export default Bonchi;
