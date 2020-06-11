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
        animationDelay: `${delaySec}s`,
      }}
    />
  );
};
export default Shop;
