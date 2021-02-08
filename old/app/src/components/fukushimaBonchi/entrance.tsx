import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TemplateHCF from "@/components/template/templateHCF";
import Button from "@material-ui/core/Button";

const worldMap = require("@/image//fukushimabonchi/world_map.png");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    left: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#CAF2FB",
    },
    right: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      backgroundColor: "#CAF2FB",
      [theme.breakpoints.down("xs")]: {
        justifyContent: "center",
        alignItems: "baseline",
      },
    },
    teaserPop: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  })
);

interface IEntranceProps {}
const Entrance: React.FC<IEntranceProps> = (props) => {
  const classes = useStyles();

  return (
    <TemplateHCF>
      <Grid item sm={12} lg={8} className={classes.left}>
        <img src={worldMap} style={{ width: "100%" }} />
      </Grid>
      <Grid item sm={12} lg={4} className={classes.right}>
        <div className={classes.teaserPop}>
          <Typography
            variant="h2"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            空想都市
            <br />
            FUKUSHIMA BONCHI
          </Typography>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            href="/fukushimabonchi"
            style={{ marginTop: "2rem", width: "110px" }}
          >
            訪れる
          </Button>
        </div>
      </Grid>
    </TemplateHCF>
  );
};
export default Entrance;
