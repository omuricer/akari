import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TemplateHCF from "@/components/template/templateHCF";

const worldMap = require("@/image//fukushimabonchi/world_map.png");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    left: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    right: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    teaserPop: {
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  })
);

interface IFukushimaBonchiProps {}
const FukushimaBonchi: React.FC<IFukushimaBonchiProps> = (props) => {
  const classes = useStyles();

  return (
    <TemplateHCF>
      <Grid item sm={12} lg={6} className={classes.left}>
        <img src={worldMap} style={{ width: "100%" }} />
      </Grid>
      <Grid item sm={12} lg={6} className={classes.right}>
        <div className={classes.teaserPop}>
          <Typography>comming soon...</Typography>
          <Typography variant="h2">
            空想都市
            <br />
            FUKUSHIMA BONCHI
          </Typography>
          <Typography>空き地あります。 Free for join!</Typography>
          <a href="https://note.com/fukushimakuusou/n/n46a4bd26bb81?magazine_key=m9ae2736da177">
            <Typography>詳しくはこちら</Typography>
          </a>
        </div>
      </Grid>
    </TemplateHCF>
  );
};
export default FukushimaBonchi;
