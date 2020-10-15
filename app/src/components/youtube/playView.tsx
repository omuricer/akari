import React, { useState, useEffect } from "react";
import YouTube, { Options } from "react-youtube";

export interface IPlayViewProps {
  videoId: string | undefined;
  opts?: Options;
}
const PlayView: React.FC<IPlayViewProps> = (props) => {
  const opts: Options = {
    ...{
      height: "auto",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    },
    ...props.opts,
  };
  return (
    <React.Fragment>
      {props.videoId && (
        <YouTube
          videoId={props.videoId}
          opts={opts}
          onReady={(e) => {
            e.target.pauseVideo();
          }}
        />
      )}
    </React.Fragment>
  );
};
export default PlayView;
