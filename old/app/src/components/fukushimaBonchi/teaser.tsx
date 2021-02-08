import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TemplateHCF from "@/components/template/templateHCF";
import A from "@/components/form/a";

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
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
      },
    },
  })
);

interface ITeaserProps { }
const Teaser: React.FC<ITeaserProps> = (props) => {
  const classes = useStyles();

  return (
    <TemplateHCF>
      <Grid item sm={12} lg={8} className={classes.left}>
        <img src={worldMap} style={{ width: "100%" }} />
      </Grid>
      <Grid item sm={12} lg={4} className={classes.right}>
        <div className={classes.teaserPop}>
          <Typography style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            comming soon...
          </Typography>
          <Typography
            variant="h2"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            空想都市
            <br />
            FUKUSHIMA BONCHI
          </Typography>
          <Typography>空き地あります。 Free for join!</Typography>
          <A href="https://note.com/fukushimakuusou/n/n46a4bd26bb81?magazine_key=m9ae2736da177">
            詳しくはこちら
          </A>
        </div>
      </Grid>
    </TemplateHCF>
  );
};
export default Teaser;
