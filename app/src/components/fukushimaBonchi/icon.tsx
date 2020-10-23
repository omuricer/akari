import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Bounds } from "@/animations/bounds";
import Img from "@/components/form/image";

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

type IIconProps = {
  id: string;
  image: string;
  position: {
    x: number;
    y: number;
  };
  ratio: number;
  dialog: JSX.Element;
  onClick: () => void;
};
const Icon: React.FC<IIconProps> = (props) => {
  const [naturalSize, setNaturalSize] = useState<imageSize | null>(null);
  const classes = useStyles();

  useEffect(() => {
    const asyncs = async () => {
      setNaturalSize(await requestImageNaturalSize(props.image));
    };
    asyncs();
  }, []);

  return (
    <React.Fragment>
      <Img
        src={props.image}
        className={[classes.shop, classes.bounds].join(" ")}
        style={{
          width: `calc(1 * ${props.ratio} * ${naturalSize?.width}px)`,
          top: `calc(50% + ${props.position.y}%)`,
          left: `calc(50% + ${props.position.x}%)`,
          animationDelay: `${generateRondomDelay()}s`,
        }}
        onClick={props.onClick}
      />
      {props.dialog}
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

export default Icon;
