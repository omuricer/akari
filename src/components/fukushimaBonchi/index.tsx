import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TShop, Shops } from "components/fukushimaBonchi/shops";
import Shop from "components/fukushimaBonchi/shop";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { Typography, FormHelperText } from "@material-ui/core";
import { useWindowDimensions } from "hooks/windowDimensions";
import Icon from "components/fukushimaBonchi/icon";
import YoutubeDialog from "components/fukushimaBonchi/youtubeDialog";

import Marche from "./marche";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: "100vh",
      backgroundAttachment: "scroll",
      backgroundSize: "contain",
      backgroundImage: "url(../image/fukushimabonchi/world_map_base.png)",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      position: "relative",
      backgroundColor: "#CAF2FA",

      "@media screen and (max-width: 480px)": {
        height: "980px",
        width: "1700px",
        backgroundSize: "contain",
      },
    },
  })
);

const detectBreakPoint = () => {
  const theme = useTheme();
  type breakPoint = "xs" | "sm" | "md" | "lg";
  const breakPoints: breakPoint[] = ["xs", "sm", "md", "lg"];

  let detectedBreakPoint: null | breakPoint = null;
  breakPoints.forEach((breakPoint: breakPoint) => {
    if (useMediaQuery(theme.breakpoints.up(breakPoint))) {
      detectedBreakPoint = breakPoint;
      return;
    }
  });
  return detectedBreakPoint ?? "lg";
};
const detectIsMobile = () => {
  const breakPoint = detectBreakPoint();
  return breakPoint == "xs";
};

const calcRatioBackgroundImage = (
  originalWidth: number,
  originalHeight: number,
  actualWidth: number,
  actualHeight: number
) => {
  if (detectIsMobile()) {
    return 1700 / 1920;
  }
  if (originalHeight / originalWidth > actualHeight / actualWidth) {
    return actualHeight / originalHeight;
  }
  return actualWidth / originalWidth;
};

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const [open, setOpen] = useState<boolean>(true);
  const classes = useStyles();
  const [openedDialog, setOpenedDialog] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const { width, height } = useWindowDimensions();

  var shopElements: JSX.Element[] = [];
  Shops.map((s: TShop, i: number) =>
    shopElements.push(
      <Shop
        shop={s}
        ratio={calcRatioBackgroundImage(1920, 1080, width, height)}
        key={i}
      />
    )
  );

  const initDialog: JSX.Element = detectIsMobile() ? (
    <Dialog open={open}>
      <DialogContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>FUKUSHIMA BONCHI へようこそ！</Typography>
        <Typography style={{ marginTop: "1rem" }}>
          画面を縦と横にスクロールしながら
          <br />
          FUKUSHIMA BONCHI を散策してください！
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          size="large"
          onClick={() => {
            setOpen(false);
          }}
          autoFocus
          style={{ width: "110px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  ) : (
    <div />
  );
  return (
    <>
      <Grid container className={classes.content}>
        <Grid item sm={12} lg={12} className={classes.content}>
          <div className={`mdc-layout-grid__inner ${classes.content}`}>
            {shopElements}
            <Icon
              id={"youtube"}
              image={"/image/fukushimabonchi/marche_icon.png"}
              position={{ x: -10, y: -9 }}
              ratio={calcRatioBackgroundImage(1920, 1080, width, height)}
              onClick={() => {}}
              dialog={
                <YoutubeDialog
                  open={openedDialog === "youtube"}
                  onClose={() => {
                    setOpenedDialog(null);
                  }}
                  isMobile={detectIsMobile()}
                />
              }
              bounds={false}
            />
          </div>
        </Grid>
      </Grid>
      {initDialog}
    </>
  );
};
export default FukushimaBonchi;
