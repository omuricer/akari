import React, { useState, useEffect } from "react";

interface IShopProps {
  positionX: number;
  positionY: number;
  image: string;
}
const Shop: React.FC<IShopProps> = (props) => {
  return (
    <div
      style={{
        top: `${props.positionY}px`,
        left: `${props.positionX}px`,
        backgroundImage: props.image,
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
