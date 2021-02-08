import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Noimage from "@/image/no_image.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    unLoaded: {
      display: "none",
    },
    loaded: {
      display: "block",
    },
    image: {
      maxWidth: "100%",
      margin: "0 auto",
    },
  })
);

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  noimage?: boolean;
}
const Image = React.forwardRef((props: IImageProps, ref: React.Ref<HTMLDivElement>) => {
  const [loaded, setLoaded] = React.useState(false);
  const [src, setSrc] = useState<string | undefined>(props.src);
  const classes = useStyles();

  const { noimage, ...imageProps } = { ...props };

  const image = loaded ? classes.loaded : classes.unLoaded;

  if (noimage !== undefined && !noimage && src == Noimage) {
    return <div {...imageProps} />;
  }

  return (
    <div {...imageProps} ref={ref}>
      <img
        {...{
          ...imageProps,
          ...{ src: src, onError: (e) => setSrc(Noimage) },
        }}
        className={[image, classes.image, imageProps.className].join(" ")}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
  // }

  return <div />;
});
export default Image;
