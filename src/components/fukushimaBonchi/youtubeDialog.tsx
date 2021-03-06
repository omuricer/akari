import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import YoutubeAPI, { TSearchResponse } from "components/youtube/api";
import PlayView from "components/youtube/playView";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      // override .MuiDialog-paper
      maxWidth: "none",
    },
    contentRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      "&::first-child": {
        padding: 0,
      },
      [theme.breakpoints.down("sm")]: {
        minWidth: "auto",
      },
    },
    actionsRoot: {
      background: "rgba(225,225,225, 0.9)", // 透過を子要素に継承しないためRGBで指定している
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      justifyContent: "center",
    },
  })
);

interface IYoutubeDialogProps {
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
}
const YoutubeDialog: React.FC<IYoutubeDialogProps> = (props) => {
  const [movies, setMovies] = useState<TSearchResponse>([]);
  const [playVideoId, setPlayVideoId] = useState<string | undefined>(undefined);
  const classes = useStyles();

  /**
   * Youtube Data APIをコールし、Stateのmoviesに設定する
   * @param apiProps Youtube Data API の検索条件
   */
  const searchMovies = async (apiProps: { key: string; channelId: string }) => {
    YoutubeAPI.init(apiProps.key);
    return await YoutubeAPI.search({
      part: "snippet",
      type: "video",
      eventType: "live",
      maxResults: 1,
      channelId: apiProps.channelId,
    });
  };

  useEffect(() => {
    const asyncs = async () => {
      const movies = await searchMovies({
        key: "AIzaSyCOdHoXvxi2fferydOqo4O4Z-6o4p0s0fE",
        channelId: "UCQhy6LDb4DjT3bz-hSCf-lg",
      });
      setPlayVideoId(movies && movies[0] ? movies[0].videoId : undefined);
    };
    asyncs();
  }, []);

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      classes={{ paper: classes.paper }}
    >
      <DialogContent className={classes.contentRoot}>
        <PlayView videoId={playVideoId} isMobile={props.isMobile} />
      </DialogContent>
      <DialogActions className={classes.actionsRoot}>
        <Button
          variant="outlined"
          size="large"
          onClick={props.onClose}
          style={{ width: "110px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default YoutubeDialog;
