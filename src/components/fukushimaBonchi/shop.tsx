import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TShop } from "components/fukushimaBonchi/shops";
import ShopDialog from "components/fukushimaBonchi/shopDialog";
import ShopDialogApartment from "components/fukushimaBonchi/shopDialogApartment";
import { Bounds } from "animations/bounds";
import ImageNext from "next/image";

type imageSize = {
  width: number;
  height: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shop: {
      // Abount looks
      position: "absolute",
      width: "4.5vw",

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

const requestImageNaturalSize = async (src: string): Promise<imageSize> => {
  const image = new Image();
  image.src = src;
  return new Promise<imageSize>((resolve) => {
    image.addEventListener(
      "load",
      () => {
        resolve({
          width: image.naturalWidth,
          height: image.naturalHeight,
        });
      },
      false
    );
  });
};

type IShopProps = {
  shop: TShop;
  ratio: number;
};
const Shop: React.FC<IShopProps> = (props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [preLoadedImage, setPreLoadedImage] = useState<boolean>(false);
  const [naturalSize, setNaturalSize] = useState<imageSize | null>(null);
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

  const imageSrc = generateIconPath(props.shop.id);
  useEffect(() => {
    const asyncs = async () => {
      setNaturalSize(await requestImageNaturalSize(imageSrc));
      setPreLoadedImage(true);
    };
    asyncs();
  }, []);

  if (!preLoadedImage) return null;
  return (
    <>
      <img
        src={imageSrc}
        className={[classes.shop, classes.bounds].join(" ")}
        style={{
          width: `calc(0.25 * ${props.ratio} * ${
            props.shop.icon.ratio ?? 1
          } * ${naturalSize?.width}px)`,
          top: `calc(50% + ${props.shop.icon.positionY}%)`,
          left: `calc(50% + ${props.shop.icon.positionX}%)`,
          animationDelay: `${generateRondomDelay()}s`,
        }}
        onClick={() => {
          setSelected(true);
        }}
      />
      {/* <NextImage
        src={imageSrc}
        className={[classes.shop, classes.bounds].join(" ")}
        style={{
          width: `calc(0.25 * ${props.ratio} * ${
            props.shop.icon.ratio ?? 1
          } * ${naturalSize?.width}px)`,
          top: `calc(50% + ${props.shop.icon.positionY}%)`,
          left: `calc(50% + ${props.shop.icon.positionX}%)`,
          animationDelay: `${generateRondomDelay()}s`,
        }}
        onClick={() => {
          setSelected(true);
        }}
      /> */}
      {shopDialog}
    </>
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
