import HCF from "components/layouts/hcf";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";

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
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        alignItems: "baseline",
      },
    },
    teaserPop: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  })
);

interface Props {}
const Page: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <HCF>
      <Grid item sm={12} lg={8} className={classes.left}>
        <img
          src="/image/fukushimabonchi/world_map.png"
          style={{ width: "100%" }}
        />
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
          <Link href="/fukushimabonchi">
            <Button
              variant="outlined"
              size="large"
              color="primary"
              href=""
              style={{ marginTop: "2rem", width: "110px" }}
            >
              訪れる
            </Button>
          </Link>
        </div>
      </Grid>
    </HCF>
  );
};
export default Page;
